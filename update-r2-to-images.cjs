const fs = require('fs');
const path = require('path');

// Leer el mapeo de Cloudflare Images
const mapping = JSON.parse(fs.readFileSync('cloudflare-images-migration-mapping.json', 'utf8'));

// Crear un mapeo inverso: R2 URL -> Cloudflare Images URL
const r2ToImagesMapping = {};

Object.entries(mapping).forEach(([cloudinaryUrl, cloudflareUrl]) => {
  // Extraer el nombre del archivo de la URL de Cloudinary
  const filename = cloudinaryUrl.split('/').pop();
  
  // Crear la URL de R2 correspondiente
  const r2Url = `https://307db0fe02dea6e144176d9a7150c4a9.r2.cloudflarestorage.com/rodcv/${filename}`;
  
  r2ToImagesMapping[r2Url] = cloudflareUrl;
});

console.log('🔄 Mapeo R2 -> Cloudflare Images creado');
console.log(`📊 ${Object.keys(r2ToImagesMapping).length} URLs mapeadas\n`);

// Archivos a actualizar
const files = [
  'client/src/components/sections/about.tsx',
  'client/src/components/sections/security.tsx',
  'client/src/components/sections/competitive-advantages.tsx',
  'client/src/components/sections/security-new.tsx',
  'client/src/components/sections/speaking-events.tsx',
  'client/src/components/sections/plug-and-play-solutions.tsx',
  'client/src/components/sections/hero.tsx',
  'client/src/components/sections/what-ive-been-doing.tsx',
  'client/src/components/sections/maintenance.tsx',
  'client/src/components/sections/strategic.tsx'
];

let totalReplacements = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let fileReplacements = 0;

    Object.entries(r2ToImagesMapping).forEach(([r2Url, cloudflareUrl]) => {
      const escapedUrl = r2Url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedUrl, 'g');
      const matches = content.match(regex);
      
      if (matches) {
        content = content.replace(regex, cloudflareUrl);
        fileReplacements += matches.length;
        console.log(`  🔄 Replaced ${matches.length}x: ${path.basename(r2Url)} → ${path.basename(cloudflareUrl)}`);
      }
    });

    if (fileReplacements > 0) {
      fs.writeFileSync(file, content);
      totalReplacements += fileReplacements;
      console.log(`✅ Updated ${file} (${fileReplacements} replacements)`);
    }
  }
});

console.log('\n' + '='.repeat(60));
console.log('🎉 R2 to Cloudflare Images URL update finished!');
console.log('='.repeat(60));
console.log(`📊 Total replacements: ${totalReplacements}`);
console.log(`💡 Don't forget to commit your changes!`);
console.log('='.repeat(60));
