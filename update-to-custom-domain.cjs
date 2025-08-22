const fs = require('fs');
const path = require('path');

// Configuración del dominio personalizado
const CUSTOM_DOMAIN = 'https://assets.invenor.group';
const OLD_R2_URL = 'https://307db0fe02dea6e144176d9a7150c4a9.r2.cloudflarestorage.com';

// Archivos a actualizar
const files = [
  'client/src/components/sections/what-ive-been-doing.tsx',
  'client/src/components/sections/security.tsx',
  'client/src/components/sections/security-new.tsx',
  'client/src/components/sections/plug-and-play-solutions.tsx',
  'client/src/components/sections/maintenance.tsx'
];

console.log('🔄 Actualizando URLs al dominio personalizado...\n');

let totalReplacements = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let fileReplacements = 0;

    // Buscar y reemplazar URLs de R2 con el dominio personalizado
    const oldPattern = new RegExp(`${OLD_R2_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/rodcv/([^"'\s]+)`, 'g');
    const newUrl = `${CUSTOM_DOMAIN}/rodcv/$1`;

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
console.log('🎉 URLs actualizadas al dominio personalizado!');
console.log('='.repeat(60));
console.log(`📊 Total replacements: ${totalReplacements}`);
console.log(`🌐 Nuevo dominio: ${CUSTOM_DOMAIN}`);
console.log(`💡 Los videos ahora deberían funcionar con URLs públicas`);
console.log('='.repeat(60));
