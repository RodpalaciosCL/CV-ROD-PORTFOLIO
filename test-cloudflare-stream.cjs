const fetch = require('node-fetch');

// Importar configuración
const config = require('./cloudflare-config.cjs');

async function testCloudflareStream() {
  console.log('🔍 Probando acceso a Cloudflare Stream...\n');

  console.log('📋 Configuración actual:');
  console.log(`   Account ID: ${config.CLOUDFLARE_ACCOUNT_ID}`);
  console.log(`   API Token: ${config.CLOUDFLARE_API_TOKEN.substring(0, 10)}...`);
  console.log('');

  // Test 1: Verificar acceso a Stream
  console.log('🧪 Test 1: Verificando acceso a Cloudflare Stream...');
  try {
    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${config.CLOUDFLARE_ACCOUNT_ID}/stream`, {
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
      console.log('   ✅ Tienes acceso a Cloudflare Stream');
      console.log(`   Videos count: ${result.result.videos?.length || 0}`);
    } else {
      console.log('   ❌ No tienes acceso a Cloudflare Stream');
      console.log(`   Errors: ${JSON.stringify(result.errors, null, 2)}`);
    }
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  console.log('');

  console.log('📝 Recomendaciones:');
  console.log('1. Si no tienes acceso a Stream, necesitarás habilitarlo en tu cuenta de Cloudflare');
  console.log('2. Alternativamente, podemos configurar un dominio personalizado para R2');
  console.log('3. O podemos usar URLs de Cloudinary temporalmente');
}

testCloudflareStream();
