const { S3Client, ListBucketsCommand } = require('@aws-sdk/client-s3');

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

async function testR2Credentials() {
  console.log('🔍 Probando credenciales de R2...\n');

  console.log('📋 Configuración:');
  console.log(`   Endpoint: ${config.R2_ENDPOINT}`);
  console.log(`   Access Key: ${config.R2_ACCESS_KEY_ID.substring(0, 10)}...`);
  console.log(`   Secret Key: ${config.R2_SECRET_ACCESS_KEY.substring(0, 10)}...`);
  console.log('');

  try {
    console.log('🧪 Test: Listando buckets...');
    const listBucketsCommand = new ListBucketsCommand({});
    const result = await s3Client.send(listBucketsCommand);
    
    console.log('✅ Credenciales válidas!');
    console.log(`📁 Buckets encontrados: ${result.Buckets?.length || 0}`);
    
    if (result.Buckets) {
      result.Buckets.forEach(bucket => {
        console.log(`   - ${bucket.Name} (creado: ${bucket.CreationDate})`);
      });
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.name === 'AccessDenied') {
      console.log('\n🔑 Error de permisos. Verifica que el token tenga permisos de "Admin Read & Write"');
    } else if (error.name === 'InvalidAccessKeyId') {
      console.log('\n🔑 Access Key ID inválido');
    } else if (error.name === 'SignatureDoesNotMatch') {
      console.log('\n🔑 Secret Access Key inválido');
    }
  }
}

testR2Credentials();
