const { S3Client, PutBucketPolicyCommand, PutPublicAccessBlockCommand } = require('@aws-sdk/client-s3');

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

async function configureR2Public() {
  console.log('🔧 Configurando R2 bucket como público...\n');

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

    console.log('🎉 ¡R2 bucket configurado como público!');
    console.log(`📁 Bucket: ${config.R2_BUCKET_NAME}`);
    console.log(`🌐 URL base: ${config.R2_ENDPOINT}/${config.R2_BUCKET_NAME}/`);
    console.log('\n💡 Ahora puedes revertir los videos de Cloudinary a R2');

  } catch (error) {
    console.error('❌ Error configurando R2:', error.message);
    
    if (error.name === 'AccessDenied') {
      console.log('\n🔑 Posibles soluciones:');
      console.log('1. Verifica que el token tenga permisos de "Admin Read & Write"');
      console.log('2. Asegúrate de que el bucket existe');
      console.log('3. Verifica las credenciales de R2');
    }
  }
}

configureR2Public();
