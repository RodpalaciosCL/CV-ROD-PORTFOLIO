const fs = require('fs');
const path = require('path');

// Mapeo de videos de Cloudinary a R2 con dominio personalizado
const videoMapping = {
  // Videos principales
  'warehouse_sgukjf_lfssd2.mp4': 'https://assets.invenor.group/rodcv/warehouse_sgukjf_lfssd2.mp4',
  'ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4': 'https://assets.invenor.group/rodcv/ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4',
  'voliro_homepage_video_hpsjm3.mp4': 'https://assets.invenor.group/rodcv/voliro_homepage_video_hpsjm3.mp4',
  'Crew_Companion_1.3_ddgusl.mov': 'https://assets.invenor.group/rodcv/Crew_Companion_1.3_ddgusl.mov',
  '3_msvtot.mov': 'https://assets.invenor.group/rodcv/3_msvtot.mov',
  '1_gxiukm.mov': 'https://assets.invenor.group/rodcv/1_gxiukm.mov',
  'prevu3d_ezb9kn.mov': 'https://assets.invenor.group/rodcv/prevu3d_ezb9kn.mov'
};

// Archivos a actualizar
const files = [
  'client/src/components/sections/what-ive-been-doing.tsx',
  'client/src/components/sections/security.tsx',
  'client/src/components/sections/security-new.tsx',
  'client/src/components/sections/plug-and-play-solutions.tsx',
  'client/src/components/sections/maintenance.tsx'
];

console.log('🔄 Revertiendo videos de Cloudinary a R2 con dominio personalizado...\n');

let totalReplacements = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let fileReplacements = 0;

    Object.entries(videoMapping).forEach(([filename, r2Url]) => {
      const cloudinaryUrl = `https://res.cloudinary.com/dhobnlg73/video/upload/v1753753423/${filename}`;
      
      if (content.includes(cloudinaryUrl)) {
        content = content.replace(new RegExp(cloudinaryUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), r2Url);
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
console.log('🎉 Videos revertidos a R2 con dominio personalizado!');
console.log('='.repeat(60));
console.log(`📊 Total replacements: ${totalReplacements}`);
console.log(`🌐 Dominio: https://assets.invenor.group`);
console.log(`💡 Los videos ahora deberían funcionar con URLs públicas de R2`);
console.log('='.repeat(60));
