const fs = require('fs');
const path = require('path');
const https = require('https');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const cloudinary = require('cloudinary').v2;

// Importar configuración
const config = require('./cloudflare-config.cjs');

// Configurar Cloudinary
cloudinary.config({
  cloud_name: config.CLOUDINARY_CONFIG.cloud_name,
  api_key: config.CLOUDINARY_CONFIG.api_key,
  api_secret: config.CLOUDINARY_CONFIG.api_secret
});

// Función para obtener TODOS los assets de Cloudinary
async function getAllCloudinaryAssets() {
  console.log('📋 Obteniendo TODOS los assets de Cloudinary...');
  
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

// Función para subir a R2
async function uploadToR2(filePath, filename) {
  const s3Client = new S3Client(config.R2_CONFIG);
  const fileContent = fs.readFileSync(filePath);
  
  const command = new PutObjectCommand({
    Bucket: config.R2_BUCKET_NAME,
    Key: filename,
    Body: fileContent,
    ContentType: getContentType(filename)
  });
  
  await s3Client.send(command);
  
  // Usar endpoint de R2 para la URL
  return `${config.R2_CONFIG.endpoint}/${config.R2_BUCKET_NAME}/${filename}`;
}

// Función para obtener content type
function getContentType(filename) {
  const ext = path.extname(filename).toLowerCase();
  const types = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.mov': 'video/quicktime',
    '.avi': 'video/x-msvideo',
    '.webm': 'video/webm',
    '.pdf': 'application/pdf',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.zip': 'application/zip'
  };
  return types[ext] || 'application/octet-stream';
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
  console.log('🚀 Starting COMPLETE migration of ALL Cloudinary assets to R2...\n');
  
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
    
    console.log(`📊 Procesando TODOS los ${assets.length} assets...\n`);
    
    for (let i = 0; i < assets.length; i++) {
      const asset = assets[i];
      const filename = `${asset.public_id}.${asset.format}`;
      const filePath = path.join(tempDir, filename);
      
      try {
        console.log(`[${i + 1}/${assets.length}] 📥 Processing: ${asset.public_id}`);
        console.log(`📱 Type: ${asset.resource_type}, Format: ${asset.format}, Size: ${(asset.bytes / 1024).toFixed(1)}KB`);
        
        // Descargar archivo con todas las transformaciones aplicadas
        await downloadFile(asset.secure_url, filePath);
        console.log(`✅ Downloaded: ${filename}`);
        
        // Subir a R2
        console.log(`📤 Uploading to R2...`);
        const newUrl = await uploadToR2(filePath, filename);
        
        if (asset.resource_type === 'image') {
          stats.images++;
        } else if (asset.resource_type === 'video') {
          stats.videos++;
        } else {
          stats.files++;
        }
        
        mapping[asset.secure_url] = newUrl;
        console.log(`✅ Uploaded to R2: ${newUrl}`);
        
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
    fs.writeFileSync('complete-r2-migration-mapping.json', JSON.stringify(mapping, null, 2));
    
    // Mostrar estadísticas finales
    console.log('\n' + '='.repeat(60));
    console.log('🎉 COMPLETE R2 Migration finished successfully!');
    console.log('='.repeat(60));
    console.log(`📊 Statistics:`);
    console.log(`   🖼️  Images migrated: ${stats.images}`);
    console.log(`   🎥 Videos migrated: ${stats.videos}`);
    console.log(`   📄 Files migrated: ${stats.files}`);
    console.log(`   🔄 URL replacements: ${totalReplacements}`);
    console.log(`   ❌ Errors: ${stats.errors}`);
    console.log(`📋 Check complete-r2-migration-mapping.json for the full URL mapping`);
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
