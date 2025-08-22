const { S3Client, CopyObjectCommand, ListObjectsV2Command } = require('@aws-sdk/client-s3');

// Importar configuración
const config = require('./cloudflare-config.cjs');

const s3Client = new S3Client({
  region: 'auto',
  endpoint: config.R2_ENDPOINT,
  credentials: {
    accessKeyId: config.R2_ACCESS_KEY_ID,
    secretAccessKey: config.R2_SECRET_ACCESS_KEY,
  },
});

async function copyVideosToPublicBucket() {
  const PRIVATE_BUCKET = 'rodcv';
  const PUBLIC_BUCKET = 'rodcv-public-videos';
  const PUBLIC_DOMAIN = 'public.invenor.group';
  
  // Lista de videos que necesitamos copiar
  const videosToCopy = [
    'warehouse_sgukjf_lfssd2.mp4',
    'ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4',
    'voliro_homepage_video_hpsjm3.mp4',
    'Crew_Companion_1.3_ddgusl.mov',
    '3_msvtot.mov',
    '1_gxiukm.mov',
    'prevu3d_ezb9kn.mov'
  ];

  console.log('🔄 Copiando videos al bucket público...\n');

  try {
    for (const video of videosToCopy) {
      console.log(`📋 Copiando: ${video}`);
      
      const copyCommand = new CopyObjectCommand({
        Bucket: PUBLIC_BUCKET,
        CopySource: `${PRIVATE_BUCKET}/${video}`,
        Key: video,
      });

      await s3Client.send(copyCommand);
      console.log(`✅ Copiado: ${video}`);
    }

    console.log('\n🎉 ¡Todos los videos copiados!');
    console.log(`📁 Bucket público: ${PUBLIC_BUCKET}`);
    console.log(`🌐 Dominio: ${PUBLIC_DOMAIN}`);
    console.log('\n💡 URLs de ejemplo:');
    videosToCopy.forEach(video => {
      console.log(`   https://${PUBLIC_DOMAIN}/${video}`);
    });

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.name === 'NoSuchBucket') {
      console.log('\n🔑 El bucket público no existe. Crea el bucket manualmente:');
      console.log('1. Cloudflare Dashboard → R2 → Create bucket');
      console.log('2. Nombre: rodcv-public-videos');
      console.log('3. Settings → Public Access → Habilitar');
    }
  }
}

copyVideosToPublicBucket();
