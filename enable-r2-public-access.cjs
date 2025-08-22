const { S3Client, PutPublicAccessBlockCommand, PutBucketPolicyCommand } = require('@aws-sdk/client-s3');

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

async function enablePublicAccess() {
  console.log('🔧 Habilitando acceso público al bucket R2...\n');

  try {
    // Paso 1: Deshabilitar bloqueo de acceso público
    console.log('📋 Paso 1: Deshabilitando bloqueo de acceso público...');
    const publicAccessBlockCommand = new PutPublicAccessBlockCommand({
      Bucket: config.R2_BUCKET_NAME,
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: false,
        IgnorePublicAcls: false,
        BlockPublicPolicy: false,
        RestrictPublicBuckets: false,
      },
    });

    await s3Client.send(publicAccessBlockCommand);
    console.log('✅ Bloqueo de acceso público deshabilitado\n');

    // Paso 2: Configurar política de bucket público
    console.log('📋 Paso 2: Configurando política de bucket público...');
    const bucketPolicy = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'PublicReadGetObject',
          Effect: 'Allow',
          Principal: '*',
          Action: 's3:GetObject',
          Resource: `arn:aws:s3:::${config.R2_BUCKET_NAME}/*`,
        },
      ],
    };

    const putPolicyCommand = new PutBucketPolicyCommand({
      Bucket: config.R2_BUCKET_NAME,
      Policy: JSON.stringify(bucketPolicy),
    });

    await s3Client.send(putPolicyCommand);
    console.log('✅ Política de bucket público configurada\n');

    console.log('🎉 ¡Acceso público habilitado!');
    console.log(`📁 Bucket: ${config.R2_BUCKET_NAME}`);
    console.log(`🌐 URL: https://assets.invenor.group/rodcv/`);
    console.log('\n💡 Ahora los videos deberían funcionar');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n🔑 Solución manual:');
    console.log('1. Ve a Cloudflare Dashboard → R2 → Tu bucket');
    console.log('2. Settings → Public Access');
    console.log('3. Habilita "Public Access"');
    console.log('4. Guarda los cambios');
  }
}

enablePublicAccess();
