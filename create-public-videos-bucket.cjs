const { S3Client, CreateBucketCommand, PutPublicAccessBlockCommand, PutBucketPolicyCommand } = require('@aws-sdk/client-s3');

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

async function createPublicVideosBucket() {
  const PUBLIC_BUCKET_NAME = 'rodcv-public-videos';
  
  console.log('🔧 Creando bucket público específico para videos...\n');

  try {
    // Paso 1: Crear el bucket
    console.log('📋 Paso 1: Creando bucket público...');
    const createBucketCommand = new CreateBucketCommand({
      Bucket: PUBLIC_BUCKET_NAME,
    });

    await s3Client.send(createBucketCommand);
    console.log(`✅ Bucket creado: ${PUBLIC_BUCKET_NAME}\n`);

    // Paso 2: Configurar acceso público
    console.log('📋 Paso 2: Configurando acceso público...');
    const publicAccessBlockCommand = new PutPublicAccessBlockCommand({
      Bucket: PUBLIC_BUCKET_NAME,
      PublicAccessBlockConfiguration: {
        BlockPublicAcls: false,
        IgnorePublicAcls: false,
        BlockPublicPolicy: false,
        RestrictPublicBuckets: false,
      },
    });

    await s3Client.send(publicAccessBlockCommand);
    console.log('✅ Bloqueo de acceso público deshabilitado\n');

    // Paso 3: Configurar política pública
    console.log('📋 Paso 3: Configurando política pública...');
    const bucketPolicy = {
      Version: '2012-10-17',
      Statement: [
        {
          Sid: 'PublicReadGetObject',
          Effect: 'Allow',
          Principal: '*',
          Action: 's3:GetObject',
          Resource: `arn:aws:s3:::${PUBLIC_BUCKET_NAME}/*`,
        },
      ],
    };

    const putPolicyCommand = new PutBucketPolicyCommand({
      Bucket: PUBLIC_BUCKET_NAME,
      Policy: JSON.stringify(bucketPolicy),
    });

    await s3Client.send(putPolicyCommand);
    console.log('✅ Política pública configurada\n');

    console.log('🎉 ¡Bucket público creado exitosamente!');
    console.log(`📁 Bucket: ${PUBLIC_BUCKET_NAME}`);
    console.log(`🌐 URL base: ${config.R2_ENDPOINT}/${PUBLIC_BUCKET_NAME}/`);
    console.log('\n💡 Ahora puedes copiar solo los videos que necesitas');

  } catch (error) {
    console.error('❌ Error:', error.message);
    
    if (error.name === 'BucketAlreadyExists') {
      console.log(`\nℹ️  El bucket ${PUBLIC_BUCKET_NAME} ya existe`);
      console.log('💡 Puedes usarlo directamente o crear uno con otro nombre');
    } else if (error.name === 'AccessDenied') {
      console.log('\n🔑 Error de permisos. Verifica que el token tenga permisos de "Admin Read & Write"');
    }
  }
}

createPublicVideosBucket();
