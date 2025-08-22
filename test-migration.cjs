const fs = require('fs');
const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');
const fetch = require('node-fetch');

// Importar configuración
const config = require('./cloudflare-config.cjs');

// Función para validar configuración
function validateConfig() {
  const required = [
    'CLOUDFLARE_ACCOUNT_ID',
    'CLOUDFLARE_API_TOKEN',
    'R2_CONFIG.endpoint',
    'R2_CONFIG.credentials.accessKeyId',
    'R2_CONFIG.credentials.secretAccessKey',
    'R2_BUCKET_NAME'
  ];
  
  const missing = [];
  
  required.forEach(field => {
    const value = field.split('.').reduce((obj, key) => obj?.[key], config);
    if (!value || value.includes('YOUR_') || value.includes('your-')) {
      missing.push(field);
    }
  });
  
  if (missing.length > 0) {
    console.error('❌ Configuración incompleta. Faltan estos valores:');
    missing.forEach(field => console.error(`   - ${field}`));
    console.error('\n📝 Por favor, actualiza cloudflare-config.js con tus credenciales reales.');
    return false;
  }
  
  return true;
}

// Función para probar conexión a Cloudflare Images
async function testCloudflareImages() {
  console.log('🔍 Probando conexión a Cloudflare Images...');
  
  try {
    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${config.CLOUDFLARE_ACCOUNT_ID}/images/v1`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.CLOUDFLARE_API_TOKEN}`
      }
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Conexión a Cloudflare Images exitosa');
      console.log(`📊 Imágenes en tu cuenta: ${result.result.images?.length || 0}`);
      return true;
    } else {
      console.error('❌ Error en Cloudflare Images:', result.errors);
      return false;
    }
  } catch (error) {
    console.error('❌ Error conectando a Cloudflare Images:', error.message);
    return false;
  }
}

// Función para probar conexión a R2
async function testR2() {
  console.log('🔍 Probando conexión a Cloudflare R2...');
  
  try {
    const s3Client = new S3Client(config.R2_CONFIG);
    const command = new ListBucketsCommand({});
    const result = await s3Client.send(command);
    
    console.log('✅ Conexión a R2 exitosa');
    console.log(`📊 Buckets disponibles: ${result.Buckets?.length || 0}`);
    
    // Verificar si el bucket específico existe
    const bucketExists = result.Buckets?.some(bucket => bucket.Name === config.R2_BUCKET_NAME);
    
    if (bucketExists) {
      console.log(`✅ Bucket "${config.R2_BUCKET_NAME}" encontrado`);
      return true;
    } else {
      console.error(`❌ Bucket "${config.R2_BUCKET_NAME}" no encontrado`);
      console.log('📋 Buckets disponibles:');
      result.Buckets?.forEach(bucket => console.log(`   - ${bucket.Name}`));
      return false;
    }
  } catch (error) {
    console.error('❌ Error conectando a R2:', error.message);
    return false;
  }
}

// Función para mostrar resumen de assets
function showAssetsSummary() {
  console.log('\n📊 Resumen de assets a migrar:');
  
  const cloudinaryUrls = [
    // Videos
    "https://res.cloudinary.com/dhobnlg73/video/upload/v1753753423/warehouse_sgukjf_lfssd2.mp4",
    "https://res.cloudinary.com/dhobnlg73/video/upload/v1754185606/ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4",
    "https://res.cloudinary.com/dhobnlg73/video/upload/v1754185484/voliro_homepage_video_hpsjm3.mp4",
    "https://res.cloudinary.com/dhobnlg73/video/upload/v1754191470/Crew_Companion_1.3_ddgusl.mov",
    "https://res.cloudinary.com/dhobnlg73/video/upload/v1750691069/3_msvtot.mov",
    "https://res.cloudinary.com/dhobnlg73/video/upload/v1750691060/1_gxiukm.mov",
    "https://res.cloudinary.com/dhobnlg73/video/upload/v1754189788/prevu3d_ezb9kn.mov",
    
    // Imágenes (solo algunas para el resumen)
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563332/_CVA4769_Original_y7efhh.jpg",
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1755782376/Captura_de_pantalla_2025-08-21_a_la_s_09.18.54_v4pfog.png",
    "https://res.cloudinary.com/dhobnlg73/image/upload/v1753808500/IMG_5278_zkcpuy.jpg",
    
    // Archivos
    "https://res.cloudinary.com/dhobnlg73/raw/upload/v1753809938/KSO_2024_V1_rcymfs.xlsx"
  ];
  
  const videos = cloudinaryUrls.filter(url => url.includes('/video/'));
  const images = cloudinaryUrls.filter(url => url.includes('/image/'));
  const files = cloudinaryUrls.filter(url => url.includes('/raw/'));
  
  console.log(`🎥 Videos: ${videos.length} archivos`);
  console.log(`🖼️  Imágenes: ${images.length} archivos (de ~50 total)`);
  console.log(`📄 Archivos: ${files.length} archivos`);
  console.log(`📁 Total: ${cloudinaryUrls.length} archivos (muestra)`);
  
  console.log('\n📋 Archivos que se actualizarán:');
  const filesToUpdate = [
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
  
  filesToUpdate.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`   ✅ ${file}`);
    } else {
      console.log(`   ❌ ${file} (no encontrado)`);
    }
  });
}

// Función principal de prueba
async function runTests() {
  console.log('🧪 Iniciando pruebas de configuración...\n');
  
  // Validar configuración
  if (!validateConfig()) {
    process.exit(1);
  }
  
  console.log('✅ Configuración válida\n');
  
  // Probar Cloudflare Images
  const imagesOk = await testCloudflareImages();
  console.log('');
  
  // Probar R2
  const r2Ok = await testR2();
  console.log('');
  
  // Mostrar resumen
  showAssetsSummary();
  
  console.log('\n' + '='.repeat(50));
  
  if (imagesOk && r2Ok) {
    console.log('🎉 ¡Todas las pruebas pasaron!');
    console.log('✅ Puedes ejecutar la migración completa con:');
    console.log('   node migrate-cloudinary-to-cloudflare.js');
  } else {
    console.log('❌ Algunas pruebas fallaron');
    console.log('🔧 Por favor, corrige los errores antes de continuar');
  }
  
  console.log('='.repeat(50));
}

// Ejecutar pruebas
runTests();
