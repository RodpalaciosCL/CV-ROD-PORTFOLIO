const fs = require('fs');
const path = require('path');

// Mapeo de videos de R2 a Cloudinary
const videoMapping = {
  // Videos principales
  'warehouse_sgukjf_lfssd2.mp4': 'https://res.cloudinary.com/dhobnlg73/video/upload/v1753753423/warehouse_sgukjf_lfssd2.mp4',
  'ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4': 'https://res.cloudinary.com/dhobnlg73/video/upload/v1754185606/ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4',
  'voliro_homepage_video_hpsjm3.mp4': 'https://res.cloudinary.com/dhobnlg73/video/upload/v1754185484/voliro_homepage_video_hpsjm3.mp4',
  'Crew_Companion_1.3_ddgusl.mov': 'https://res.cloudinary.com/dhobnlg73/video/upload/v1754191470/Crew_Companion_1.3_ddgusl.mov',
  '3_msvtot.mov': 'https://res.cloudinary.com/dhobnlg73/video/upload/v1750691069/3_msvtot.mov',
  '1_gxiukm.mov': 'https://res.cloudinary.com/dhobnlg73/video/upload/v1750691060/1_gxiukm.mov',
  'prevu3d_ezb9kn.mov': 'https://res.cloudinary.com/dhobnlg73/video/upload/v1754189788/prevu3d_ezb9kn.mov'
};

// Archivos a actualizar
const files = [
  'client/src/components/sections/what-ive-been-doing.tsx',
  'client/src/components/sections/security.tsx',
  'client/src/components/sections/security-new.tsx',
  'client/src/components/sections/plug-and-play-solutions.tsx',
  'client/src/components/sections/maintenance.tsx'
];

console.log('🔄 Revertiendo videos a Cloudinary para funcionalidad inmediata...\n');

let totalReplacements = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let fileReplacements = 0;

    Object.entries(videoMapping).forEach(([filename, cloudinaryUrl]) => {
      const r2Url = `https://307db0fe02dea6e144176d9a7150c4a9.r2.cloudflarestorage.com/rodcv/${filename}`;
      
      if (content.includes(r2Url)) {
        content = content.replace(new RegExp(r2Url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), cloudinaryUrl);
        fileReplacements++;
        console.log(`  🔄 Replaced: ${filename}`);
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
console.log('🎉 Videos revertidos a Cloudinary!');
console.log('='.repeat(60));
console.log(`📊 Total replacements: ${totalReplacements}`);
console.log(`💡 Los videos ahora deberían funcionar inmediatamente`);
console.log(`⚠️  Nota: Esto es temporal hasta configurar R2 con dominio personalizado`);
console.log('='.repeat(60));
