const fetch = require('node-fetch');

// Importar configuración
const config = require('./cloudflare-config.cjs');

async function testCloudflareTokens() {
  console.log('🔍 Diagnosticando tokens de Cloudflare...\n');
  
  console.log('📋 Configuración actual:');
  console.log(`   Account ID: ${config.CLOUDFLARE_ACCOUNT_ID}`);
  console.log(`   API Token: ${config.CLOUDFLARE_API_TOKEN.substring(0, 10)}...`);
  console.log(`   R2 Access Key: ${config.R2_CONFIG?.accessKeyId?.substring(0, 10) || 'No configurado'}...`);
  console.log(`   R2 Secret Key: ${config.R2_CONFIG?.secretAccessKey?.substring(0, 10) || 'No configurado'}...`);
  console.log('');
  
  // Test 1: Verificar token de Cloudflare Images
  console.log('🧪 Test 1: Verificando token de Cloudflare Images...');
  try {
    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${config.CLOUDFLARE_ACCOUNT_ID}/tokens/verify`, {
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
      console.log('   ✅ Token válido');
      console.log(`   Permissions: ${JSON.stringify(result.result.permissions, null, 2)}`);
    } else {
      console.log('   ❌ Token inválido');
      console.log(`   Errors: ${JSON.stringify(result.errors, null, 2)}`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  console.log('');
  
  // Test 2: Verificar permisos específicos de Images
  console.log('🧪 Test 2: Verificando permisos de Cloudflare Images...');
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
      console.log('   ✅ Tienes acceso a Cloudflare Images');
      console.log(`   Images count: ${result.result.images?.length || 0}`);
    } else {
      console.log('   ❌ No tienes acceso a Cloudflare Images');
      console.log(`   Errors: ${JSON.stringify(result.errors, null, 2)}`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  console.log('');
  
  // Test 3: Verificar R2
  console.log('🧪 Test 3: Verificando R2...');
  try {
    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${config.CLOUDFLARE_ACCOUNT_ID}/r2/buckets`, {
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
      console.log('   ✅ Tienes acceso a R2');
      console.log(`   Buckets: ${result.result.buckets?.length || 0}`);
    } else {
      console.log('   ❌ No tienes acceso a R2');
      console.log(`   Errors: ${JSON.stringify(result.errors, null, 2)}`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  console.log('');
  
  // Test 4: Intentar subir una imagen pequeña
  console.log('🧪 Test 4: Intentando subir imagen de prueba...');
  try {
    // Crear una imagen pequeña de prueba (1x1 pixel PNG)
    const testImage = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');
    
    const FormData = require('form-data');
    const form = new FormData();
    form.append('file', testImage, {
      filename: 'test.png',
      contentType: 'image/png'
    });
    
    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${config.CLOUDFLARE_ACCOUNT_ID}/images/v1`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.CLOUDFLARE_API_TOKEN}`,
        ...form.getHeaders()
      },
      body: form
    });
    
    const result = await response.json();
    console.log(`   Status: ${response.status}`);
    console.log(`   Success: ${result.success}`);
    
    if (result.success) {
      console.log('   ✅ Subida exitosa');
      console.log(`   Image ID: ${result.result.id}`);
    } else {
      console.log('   ❌ Subida fallida');
      console.log(`   Errors: ${JSON.stringify(result.errors, null, 2)}`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  console.log('');
  
  console.log('📝 Recomendaciones:');
  console.log('1. Verifica que el token tenga permisos de "Cloudflare Images"');
  console.log('2. Asegúrate de que el token esté activo y no haya expirado');
  console.log('3. Verifica que el Account ID sea correcto');
  console.log('4. El token debe tener permisos de "Edit" para Images');
}

testCloudflareTokens();
