const cloudinary = require('cloudinary').v2;
const config = require('./cloudflare-config.cjs');

// Configurar Cloudinary
cloudinary.config({
  cloud_name: config.CLOUDINARY_CONFIG.cloud_name,
  api_key: config.CLOUDINARY_CONFIG.api_key,
  api_secret: config.CLOUDINARY_CONFIG.api_secret
});

async function testCloudinary() {
  console.log('🧪 Testing Cloudinary connection...\n');
  
  try {
    console.log('📋 Configuration:');
    console.log(`   Cloud Name: ${config.CLOUDINARY_CONFIG.cloud_name}`);
    console.log(`   API Key: ${config.CLOUDINARY_CONFIG.api_key}`);
    console.log(`   API Secret: ${config.CLOUDINARY_CONFIG.api_secret.substring(0, 10)}...`);
    console.log('');
    
    // Obtener una muestra de recursos
    const result = await cloudinary.api.resources({
      resource_type: 'image',
      max_results: 5
    });
    
    console.log('✅ Cloudinary connection successful!');
    console.log(`📊 Found ${result.resources.length} assets (showing first 10):`);
    
    result.resources.forEach((asset, index) => {
      console.log(`   ${index + 1}. ${asset.public_id}.${asset.format} (${asset.resource_type})`);
      console.log(`      URL: ${asset.secure_url}`);
      console.log(`      Size: ${(asset.bytes / 1024).toFixed(1)}KB`);
      console.log('');
    });
    
  } catch (error) {
    console.error('❌ Cloudinary connection failed:', error);
    console.error('🔧 Please check your credentials in cloudflare-config.cjs');
  }
}

testCloudinary();
