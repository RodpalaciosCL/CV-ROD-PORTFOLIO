const fetch = require('node-fetch');

// Importar configuración
const config = require('./cloudflare-config.cjs');

async function diagnoseCloudflareImages() {
  console.log('🔍 Diagnosticando Cloudflare Images...\n');

  console.log('📋 Configuración actual:');
  console.log(`   Account ID: ${config.CLOUDFLARE_ACCOUNT_ID}`);
  console.log(`   API Token: ${config.CLOUDFLARE_API_TOKEN.substring(0, 10)}...`);
  console.log('');

  // Test 1: Listar imágenes
  console.log('🧪 Test 1: Listando imágenes en Cloudflare Images...');
  try {
    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${config.CLOUDFLARE_ACCOUNT_ID}/images/v1`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    console.log(`   Status: ${response.status}`);
    console.log(`   Success: ${result.success}`);

    if (result.success) {
      console.log(`   ✅ Imágenes encontradas: ${result.result.images?.length || 0}`);
      
      if (result.result.images && result.result.images.length > 0) {
        console.log('   📸 Primeras 5 imágenes:');
        result.result.images.slice(0, 5).forEach((image, index) => {
          console.log(`      ${index + 1}. ID: ${image.id}`);
          console.log(`         Filename: ${image.filename}`);
          console.log(`         Size: ${(image.size / 1024).toFixed(1)}KB`);
          console.log(`         URL: https://imagedelivery.net/${config.CLOUDFLARE_ACCOUNT_ID}/${image.id}/public`);
          console.log('');
        });
      }
    } else {
      console.log('   ❌ Error listando imágenes');
      console.log(`   Errors: ${JSON.stringify(result.errors, null, 2)}`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  console.log('');

  // Test 2: Verificar configuración de delivery
  console.log('🧪 Test 2: Verificando configuración de delivery...');
  try {
    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${config.CLOUDFLARE_ACCOUNT_ID}/images/v1/delivery`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${config.CLOUDFLARE_API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    console.log(`   Status: ${response.status}`);
    console.log(`   Success: ${result.success}`);

    if (result.success) {
      console.log('   ✅ Configuración de delivery disponible');
      console.log(`   Config: ${JSON.stringify(result.result, null, 2)}`);
    } else {
      console.log('   ❌ Error obteniendo configuración de delivery');
      console.log(`   Errors: ${JSON.stringify(result.errors, null, 2)}`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  console.log('');

  // Test 3: Probar acceso a una imagen específica
  console.log('🧪 Test 3: Probando acceso a imagen específica...');
  try {
    const testImageId = 'af9fbdc5-761b-4b34-5e57-97f6c1417700';
    const testUrl = `https://imagedelivery.net/${config.CLOUDFLARE_ACCOUNT_ID}/${testImageId}/public`;
    
    console.log(`   Probando URL: ${testUrl}`);
    
    const response = await fetch(testUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });

    console.log(`   Status: ${response.status}`);
    console.log(`   Content-Type: ${response.headers.get('content-type')}`);
    console.log(`   Content-Length: ${response.headers.get('content-length')}`);

    if (response.ok) {
      console.log('   ✅ Imagen accesible públicamente');
    } else {
      console.log('   ❌ Imagen no accesible');
      const errorText = await response.text();
      console.log(`   Error: ${errorText}`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  console.log('');

  console.log('📝 Recomendaciones:');
  console.log('1. Verifica que las imágenes estén configuradas como públicas');
  console.log('2. Asegúrate de que el delivery esté habilitado');
  console.log('3. Verifica que no haya restricciones de CORS');
  console.log('4. Las URLs deben usar el formato: https://imagedelivery.net/{account_id}/{image_id}/public');
}

diagnoseCloudflareImages();
