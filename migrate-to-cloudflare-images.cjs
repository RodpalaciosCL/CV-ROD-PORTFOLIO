const fs = require('fs');
const path = require('path');
const https = require('https');
const fetch = require('node-fetch');
const FormData = require('form-data');
const cloudinary = require('cloudinary').v2;

// Importar configuración
const config = require('./cloudflare-config.cjs');

// Configurar Cloudinary
cloudinary.config({
  cloud_name: config.CLOUDINARY_CONFIG.cloud_name,
  api_key: config.CLOUDINARY_CONFIG.api_key,
  api_secret: config.CLOUDINARY_CONFIG.api_secret
});

// Función para obtener TODAS las imágenes de Cloudinary
async function getAllCloudinaryImages() {
  console.log('📋 Obteniendo TODAS las imágenes de Cloudinary...');
  
  try {
    const images = await cloudinary.api.resources({
      resource_type: 'image',
      max_results: 1000
    });
    
    console.log(`✅ Imágenes encontradas: ${images.resources.length}`);
    return images.resources;
  } catch (error) {
    console.error('❌ Error obteniendo imágenes de Cloudinary:', error);
    throw error;
  }
}

// Función para descargar archivo desde URL
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    // Crear directorios si no existen
    const dir = path.dirname(filename);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(filename);
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // Eliminar archivo si hay error
      reject(err);
    });
  });
}

// Función para subir a Cloudflare Images
async function uploadToCloudflareImages(filePath) {
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));
  
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${config.CLOUDFLARE_ACCOUNT_ID}/images/v1`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.CLOUDFLARE_API_TOKEN}`,
      ...form.getHeaders()
    },
    body: form
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Cloudflare Images upload failed: ${errorText}`);
  }
  
  const result = await response.json();
  return result.result;
}

// Función para reemplazar URLs en archivos
function replaceUrlsInFiles(mapping) {
  const files = [
    'client/src/components/sections/what-ive-been-doing.tsx',
    'client/src/components/sections/about.tsx',
    'client/src/components/sections/hero.tsx',
    'client/src/components/sections/security.tsx',
    'client/src/components/sections/maintenance.tsx',
    'client/src/components/sections/security-new.tsx',
    'client/src/components/sections/plug-and-play-solutions.tsx',
    'client/src/components/sections/speaking-events.tsx',
    'client/src/components/sections/strategic.tsx',
    'client/src/components/sections/efficiency.tsx',
    'client/src/components/sections/competitive-advantages.tsx'
  ];
  
  let totalReplacements = 0;
  
  files.forEach(file => {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      let fileReplacements = 0;
      
      Object.entries(mapping).forEach(([oldUrl, newUrl]) => {
        const escapedUrl = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedUrl, 'g');
        const matches = content.match(regex);
        if (matches) {
          content = content.replace(regex, newUrl);
          fileReplacements += matches.length;
          console.log(`  🔄 Replaced ${matches.length}x: ${path.basename(oldUrl)} → ${path.basename(newUrl)}`);
        }
      });
      
      if (fileReplacements > 0) {
        fs.writeFileSync(file, content);
        totalReplacements += fileReplacements;
        console.log(`✅ Updated ${file} (${fileReplacements} replacements)`);
      }
    }
  });
  
  return totalReplacements;
}

// Función principal de migración
async function migrateToCloudflareImages() {
  console.log('🚀 Starting migration of ALL images to Cloudflare Images...\n');
  
  const mapping = {};
  const tempDir = './temp_images_migration';
  const stats = {
    images: 0,
    errors: 0
  };
  
  // Crear directorio temporal
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }
  
  try {
    // Obtener todas las imágenes de Cloudinary
    const images = await getAllCloudinaryImages();
    
    console.log(`📊 Procesando ${images.length} imágenes...\n`);
    
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const filename = `${image.public_id}.${image.format}`;
      const filePath = path.join(tempDir, filename);
      
      try {
        console.log(`[${i + 1}/${images.length}] 📥 Processing: ${image.public_id}`);
        console.log(`📱 Format: ${image.format}, Size: ${(image.bytes / 1024).toFixed(1)}KB`);
        
        // Descargar imagen con todas las transformaciones aplicadas
        await downloadFile(image.secure_url, filePath);
        console.log(`✅ Downloaded: ${filename}`);
        
        // Subir a Cloudflare Images
        console.log(`📤 Uploading to Cloudflare Images...`);
        const result = await uploadToCloudflareImages(filePath);
        
        stats.images++;
        
        // Crear URL de Cloudflare Images
        const cloudflareUrl = `https://imagedelivery.net/${config.CLOUDFLARE_ACCOUNT_ID}/${result.id}/public`;
        mapping[image.secure_url] = cloudflareUrl;
        
        console.log(`✅ Uploaded to Cloudflare Images: ${cloudflareUrl}`);
        
        // Limpiar archivo temporal
        fs.unlinkSync(filePath);
        console.log('');
        
      } catch (error) {
        console.error(`❌ Error processing ${image.public_id}:`, error.message);
        stats.errors++;
        
        // Limpiar archivo temporal si existe
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
      }
    }
    
    // Reemplazar URLs en archivos
    console.log('🔄 Updating URLs in code files...');
    const totalReplacements = replaceUrlsInFiles(mapping);
    
    // Guardar mapping para referencia
    fs.writeFileSync('cloudflare-images-migration-mapping.json', JSON.stringify(mapping, null, 2));
    
    // Mostrar estadísticas finales
    console.log('\n' + '='.repeat(60));
    console.log('🎉 Cloudflare Images Migration finished successfully!');
    console.log('='.repeat(60));
    console.log(`📊 Statistics:`);
    console.log(`   🖼️  Images migrated: ${stats.images}`);
    console.log(`   🔄 URL replacements: ${totalReplacements}`);
    console.log(`   ❌ Errors: ${stats.errors}`);
    console.log(`📋 Check cloudflare-images-migration-mapping.json for the full URL mapping`);
    console.log(`💡 Don't forget to commit your changes!`);
    console.log('='.repeat(60));
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    // Limpiar directorio temporal
    if (fs.existsSync(tempDir)) {
      const files = fs.readdirSync(tempDir);
      files.forEach(file => fs.unlinkSync(path.join(tempDir, file)));
      fs.rmdirSync(tempDir);
    }
  }
}

// Ejecutar migración
migrateToCloudflareImages();
