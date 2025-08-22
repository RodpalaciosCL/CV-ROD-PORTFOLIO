const fs = require('fs');
const path = require('path');

// Mapeo completo de videos de Cloudinary a R2
const videoMapping = {
  'ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4': {
    cloudinary: 'https://res.cloudinary.com/dhobnlg73/video/upload/v1754185606/ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4',
    r2: 'https://assets.invenor.group/rodcv/ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4'
  },
  'voliro_homepage_video_hpsjm3.mp4': {
    cloudinary: 'https://res.cloudinary.com/dhobnlg73/video/upload/v1754185484/voliro_homepage_video_hpsjm3.mp4',
    r2: 'https://assets.invenor.group/rodcv/voliro_homepage_video_hpsjm3.mp4'
  },
  'Crew_Companion_1.3_ddgusl.mov': {
    cloudinary: 'https://res.cloudinary.com/dhobnlg73/video/upload/v1754191470/Crew_Companion_1.3_ddgusl.mov',
    r2: 'https://assets.invenor.group/rodcv/Crew_Companion_1.3_ddgusl.mov'
  },
  '3_msvtot.mov': {
    cloudinary: 'https://res.cloudinary.com/dhobnlg73/video/upload/v1750691069/3_msvtot.mov',
    r2: 'https://assets.invenor.group/rodcv/3_msvtot.mov'
  },
  '1_gxiukm.mov': {
    cloudinary: 'https://res.cloudinary.com/dhobnlg73/video/upload/v1750691060/1_gxiukm.mov',
    r2: 'https://assets.invenor.group/rodcv/1_gxiukm.mov'
  },
  'prevu3d_ezb9kn.mov': {
    cloudinary: 'https://res.cloudinary.com/dhobnlg73/video/upload/v1754189788/prevu3d_ezb9kn.mov',
    r2: 'https://assets.invenor.group/rodcv/prevu3d_ezb9kn.mov'
  }
};

// Archivos a actualizar
const files = [
  'client/src/components/sections/security.tsx',
  'client/src/components/sections/security-new.tsx',
  'client/src/components/sections/maintenance.tsx',
  'client/src/components/sections/plug-and-play-solutions.tsx'
];

console.log('🔄 Actualizando todos los videos restantes a R2...\n');

let totalReplacements = 0;

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    let fileReplacements = 0;

    Object.entries(videoMapping).forEach(([filename, urls]) => {
      if (content.includes(urls.cloudinary)) {
        content = content.replace(new RegExp(urls.cloudinary.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), urls.r2);
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
console.log('🎉 Todos los videos actualizados a R2!');
console.log('='.repeat(60));
console.log(`📊 Total replacements: ${totalReplacements}`);
console.log(`🌐 Dominio: https://assets.invenor.group`);
console.log(`💡 Nota: El dominio puede necesitar 5-10 min para propagarse completamente`);
console.log('='.repeat(60));
