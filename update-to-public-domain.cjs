const fs = require('fs');
const path = require('path');

// Configuración del nuevo dominio público
const PUBLIC_DOMAIN = 'https://public.invenor.group';
const OLD_DOMAIN = 'https://assets.invenor.group';

// Archivos a actualizar
const files = [
  'client/src/components/sections/what-ive-been-doing.tsx',
  'client/src/components/sections/security.tsx',
  'client/src/components/sections/security-new.tsx',
  'client/src/components/sections/plug-and-play-solutions.tsx',
  'client/src/components/sections/maintenance.tsx'
];

console.log('🔄 Actualizando URLs al dominio público...\n');

let totalReplacements = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let fileReplacements = 0;

    // Buscar y reemplazar URLs del dominio anterior con el nuevo dominio público
    const oldPattern = new RegExp(`${OLD_DOMAIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/rodcv/([^"'\s]+)`, 'g');
    const newUrl = `${PUBLIC_DOMAIN}/$1`;

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
console.log('🎉 URLs actualizadas al dominio público!');
console.log('='.repeat(60));
console.log(`📊 Total replacements: ${totalReplacements}`);
console.log(`🌐 Nuevo dominio: ${PUBLIC_DOMAIN}`);
console.log(`💡 Ahora necesitas subir los videos al bucket público`);
console.log('='.repeat(60));
