const { S3Client, ListBucketsCommand, ListObjectsV2Command, PutObjectCommand } = require('@aws-sdk/client-s3');
const config = require('./cloudflare-config.cjs');

async function testR2Connection() {
  console.log('🔍 Diagnóstico completo de R2...\n');
  
  console.log('📋 Configuración actual:');
  console.log(`   Endpoint: ${config.R2_CONFIG.endpoint}`);
  console.log(`   Region: ${config.R2_CONFIG.region}`);
  console.log(`   Access Key ID: ${config.R2_CONFIG.credentials.accessKeyId}`);
  console.log(`   Secret Access Key: ${config.R2_CONFIG.credentials.secretAccessKey.substring(0, 10)}...`);
  console.log(`   Bucket: ${config.R2_BUCKET_NAME}`);
  console.log('');
  
  const s3Client = new S3Client(config.R2_CONFIG);
  
  try {
    // Test 1: Listar buckets
    console.log('🧪 Test 1: Listando buckets...');
    const listBucketsCommand = new ListBucketsCommand({});
    const bucketsResult = await s3Client.send(listBucketsCommand);
    console.log('✅ Buckets encontrados:');
    bucketsResult.Buckets.forEach(bucket => {
      console.log(`   - ${bucket.Name} (creado: ${bucket.CreationDate})`);
    });
    console.log('');
    
    // Test 2: Listar objetos en el bucket específico
    console.log('🧪 Test 2: Listando objetos en bucket "rodcv"...');
    const listObjectsCommand = new ListObjectsV2Command({
      Bucket: config.R2_BUCKET_NAME,
      MaxKeys: 5
    });
    const objectsResult = await s3Client.send(listObjectsCommand);
    console.log('✅ Objetos encontrados:');
    if (objectsResult.Contents && objectsResult.Contents.length > 0) {
      objectsResult.Contents.forEach(obj => {
        console.log(`   - ${obj.Key} (${obj.Size} bytes)`);
      });
    } else {
      console.log('   (Bucket vacío)');
    }
    console.log('');
    
    // Test 3: Intentar subir un archivo de prueba
    console.log('🧪 Test 3: Subiendo archivo de prueba...');
    const testContent = 'Hello R2! This is a test file.';
    const putObjectCommand = new PutObjectCommand({
      Bucket: config.R2_BUCKET_NAME,
      Key: 'test-file.txt',
      Body: testContent,
      ContentType: 'text/plain'
    });
    await s3Client.send(putObjectCommand);
    console.log('✅ Archivo de prueba subido exitosamente!');
    console.log('');
    
    console.log('🎉 ¡Todas las pruebas de R2 pasaron!');
    
  } catch (error) {
    console.error('❌ Error en R2:', error.message);
    console.error('🔧 Detalles del error:', error);
    
    if (error.name === 'AccessDenied') {
      console.log('\n💡 Posibles soluciones:');
      console.log('   1. Verifica que el token tenga permisos "Object Read & Write"');
      console.log('   2. Verifica que el bucket "rodcv" exista');
      console.log('   3. Verifica que las credenciales sean correctas');
      console.log('   4. Intenta con un token diferente');
    }
  }
}

testR2Connection();
