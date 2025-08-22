const fs = require('fs');
const path = require('path');

// Configuración
const OLD_ACCOUNT_ID = '307db0fe02dea6e144176d9a7150c4a9';
const NEW_ACCOUNT_HASH = 'ggT8OoJUg8TvMm3OHVNsdQ';

// Archivos a actualizar
const files = [
  'client/src/components/sections/security.tsx',
  'client/src/components/sections/hero.tsx',
  'client/src/components/sections/competitive-advantages.tsx',
  'client/src/components/sections/security-new.tsx'
];

console.log('🔄 Actualizando URLs restantes de Cloudflare Images...\n');

let totalReplacements = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let fileReplacements = 0;

    // Buscar y reemplazar URLs de Cloudflare Images
    const oldPattern = new RegExp(`https://imagedelivery\\.net/${OLD_ACCOUNT_ID}/([^/]+)/public`, 'g');
    const newUrl = `https://imagedelivery.net/${NEW_ACCOUNT_HASH}/$1/public`;
    
    const matches = content.match(oldPattern);
    if (matches) {
      content = content.replace(oldPattern, newUrl);
      fileReplacements += matches.length;
      console.log(`  🔄 Replaced ${matches.length}x URLs in ${path.basename(file)}`);
    }

    if (fileReplacements > 0) {
      fs.writeFileSync(file, content);
      totalReplacements += fileReplacements;
      console.log(`✅ Updated ${file} (${fileReplacements} replacements)`);
    }
  }
});

console.log('\n' + '='.repeat(60));
console.log('🎉 Remaining Cloudflare Images URLs fixed!');
console.log('='.repeat(60));
console.log(`📊 Total replacements: ${totalReplacements}`);
console.log(`🔄 Account ID → Account Hash: ${OLD_ACCOUNT_ID} → ${NEW_ACCOUNT_HASH}`);
console.log(`💡 Don't forget to commit your changes!`);
console.log('='.repeat(60));
