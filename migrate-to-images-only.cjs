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

// Función para obtener todos los assets de Cloudinary
async function getAllCloudinaryAssets() {
  console.log('📋 Obteniendo TODOS los assets de Cloudinary (imágenes, videos, archivos)...');
  
  const allAssets = [];
  
  try {
    // Obtener TODAS las imágenes (sin límite)
    console.log('📸 Obteniendo TODAS las imágenes...');
    const images = await cloudinary.api.resources({
      resource_type: 'image',
      max_results: 1000
    });
    allAssets.push(...images.resources);
    console.log(`✅ Imágenes encontradas: ${images.resources.length}`);
    
    // Obtener TODOS los videos (sin límite)
    console.log('🎥 Obteniendo TODOS los videos...');
    const videos = await cloudinary.api.resources({
      resource_type: 'video',
      max_results: 1000
    });
    allAssets.push(...videos.resources);
    console.log(`✅ Videos encontrados: ${videos.resources.length}`);
    
    // Obtener TODOS los archivos (sin límite)
    console.log('📄 Obteniendo TODOS los archivos...');
    const files = await cloudinary.api.resources({
      resource_type: 'raw',
      max_results: 1000
    });
    allAssets.push(...files.resources);
    console.log(`✅ Archivos encontrados: ${files.resources.length}`);
    
    console.log(`✅ Total de assets encontrados: ${allAssets.length}`);
    return allAssets;
  } catch (error) {
    console.error('❌ Error obteniendo assets de Cloudinary:', error);
    throw error;
  }
}

// Función para descargar archivo desde URL
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
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
async function uploadToCloudflareImages(filePath, originalUrl) {
  const formData = new FormData();
  formData.append('file', fs.createReadStream(filePath));
  
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${config.CLOUDFLARE_ACCOUNT_ID}/images/v1`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.CLOUDFLARE_API_TOKEN}`
    },
    body: formData
  });
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(`Cloudflare Images upload failed: ${JSON.stringify(result.errors)}`);
  }
  
  return `${config.IMAGES_DOMAIN}/${config.CLOUDFLARE_ACCOUNT_ID}/${result.result.id}/public`;
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

// Función principal de migración completa
async function migrateAllAssets() {
  console.log('🚀 Starting complete Cloudinary to Cloudflare Images migration...\n');
  
  const mapping = {};
  const tempDir = './temp_migration';
  const stats = {
    images: 0,
    videos: 0,
    files: 0,
    errors: 0
  };
  
  // Crear directorio temporal
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }
  
  try {
    // Obtener todos los assets de Cloudinary
    const assets = await getAllCloudinaryAssets();
    
    // Filtrar solo los assets que están en uso en tu código
    const usedAssets = assets.filter(asset => {
      const publicId = asset.public_id;
      const filename = path.basename(asset.secure_url);
      
      // Buscar en todos los archivos de código
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
      
      return files.some(file => {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');
          return content.includes(publicId) || content.includes(filename);
        }
        return false;
      });
    });
    
    console.log(`📊 Assets en uso encontrados: ${usedAssets.length} de ${assets.length} totales\n`);
    
    for (let i = 0; i < usedAssets.length; i++) {
      const asset = usedAssets[i];
      const filename = `${asset.public_id}.${asset.format}`;
      const filePath = path.join(tempDir, filename);
      
      try {
        console.log(`[${i + 1}/${usedAssets.length}] 📥 Processing: ${asset.public_id}`);
        console.log(`📱 Type: ${asset.resource_type}, Format: ${asset.format}, Size: ${(asset.bytes / 1024).toFixed(1)}KB`);
        
        // Descargar archivo con todas las transformaciones aplicadas
        await downloadFile(asset.secure_url, filePath);
        console.log(`✅ Downloaded: ${filename}`);
        
        // Subir a Cloudflare Images (maneja imágenes, videos y archivos)
        console.log(`📤 Uploading to Cloudflare Images...`);
        const newUrl = await uploadToCloudflareImages(filePath, asset.secure_url);
        
        if (asset.resource_type === 'image') {
          stats.images++;
        } else if (asset.resource_type === 'video') {
          stats.videos++;
        } else {
          stats.files++;
        }
        
        mapping[asset.secure_url] = newUrl;
        console.log(`✅ Uploaded to Cloudflare Images: ${newUrl}`);
        
        // Limpiar archivo temporal
        fs.unlinkSync(filePath);
        console.log('');
        
      } catch (error) {
        console.error(`❌ Error processing ${asset.public_id}:`, error.message);
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
    fs.writeFileSync('images-migration-mapping.json', JSON.stringify(mapping, null, 2));
    
    // Mostrar estadísticas finales
    console.log('\n' + '='.repeat(60));
    console.log('🎉 Migration completed successfully!');
    console.log('='.repeat(60));
    console.log(`📊 Statistics:`);
    console.log(`   🖼️  Images migrated: ${stats.images}`);
    console.log(`   🎥 Videos migrated: ${stats.videos}`);
    console.log(`   📄 Files migrated: ${stats.files}`);
    console.log(`   🔄 URL replacements: ${totalReplacements}`);
    console.log(`   ❌ Errors: ${stats.errors}`);
    console.log(`📋 Check images-migration-mapping.json for the full URL mapping`);
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
migrateAllAssets();
