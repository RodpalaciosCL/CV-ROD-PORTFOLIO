const fs = require('fs');
const path = require('path');

// Configuración
const CORRECT_ACCOUNT_HASH = 'ggT8OoJUg8TvMm3OHVNsdQ';
const WRONG_ACCOUNT_ID = '307db0fe02dea6e144176d9a7150c4a9';

// Archivos a verificar
const files = [
  'client/src/components/sections/hero.tsx',
  'client/src/components/sections/about.tsx',
  'client/src/components/sections/competitive-advantages.tsx',
  'client/src/components/sections/security.tsx',
  'client/src/components/sections/security-new.tsx',
  'client/src/components/sections/plug-and-play-solutions.tsx',
  'client/src/components/sections/speaking-events.tsx',
  'client/src/components/sections/efficiency.tsx'
];

console.log('🔍 Verificando URLs de Cloudflare Images...\n');

let totalUrls = 0;
let correctUrls = 0;
let wrongUrls = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Buscar todas las URLs de Cloudflare Images
    const cloudflareImagesPattern = /https:\/\/imagedelivery\.net\/([^\/]+)\/([^\/]+)\/public/g;
    let match;
    
    while ((match = cloudflareImagesPattern.exec(content)) !== null) {
      totalUrls++;
      const accountId = match[1];
      const imageId = match[2];
      
      if (accountId === CORRECT_ACCOUNT_HASH) {
        correctUrls++;
        console.log(`✅ ${path.basename(file)}: ${imageId} (correct)`);
      } else if (accountId === WRONG_ACCOUNT_ID) {
        wrongUrls++;
        console.log(`❌ ${path.basename(file)}: ${imageId} (WRONG - needs update)`);
      } else {
        console.log(`⚠️  ${path.basename(file)}: ${imageId} (unknown account: ${accountId})`);
      }
    }
  }
});

console.log('\n' + '='.repeat(60));
console.log('📊 Summary:');
console.log(`   Total URLs: ${totalUrls}`);
console.log(`   Correct URLs: ${correctUrls}`);
console.log(`   Wrong URLs: ${wrongUrls}`);
console.log(`   Success Rate: ${((correctUrls / totalUrls) * 100).toFixed(1)}%`);
console.log('='.repeat(60));

if (wrongUrls > 0) {
  console.log('❌ Some URLs still need to be updated!');
} else {
  console.log('✅ All URLs are using the correct account hash!');
}
