const fs = require('fs');
const path = require('path');
const https = require('https');
const fetch = require('node-fetch');
const FormData = require('form-data');

// Importar configuración
const config = require('./cloudflare-config.cjs');

// Lista de solo las URLs de imágenes de Cloudinary
const CLOUDINARY_IMAGE_URLS = [
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563332/_CVA4769_Original_y7efhh.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1755782376/Captura_de_pantalla_2025-08-21_a_la_s_09.18.54_v4pfog.png",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753808500/IMG_5278_zkcpuy.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/668c1c12e8a58030d5568f21_642d7a5f4d77d19c2f6fa8c2_xzGehktapAgabSW56yhCmigLzY3uCWACMrR6p4lkLfw_owddtl.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1750693911/Captura_de_pantalla_2025-06-23_a_la_s_11.51.34_c8xmcy.png",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/banner-blog-10-1024x576_g3buzv.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620085/Underground_Tracking_pg6jlu.webp",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1750693432/Captura_de_pantalla_2025-06-23_a_la_s_11.42.11_rw4lpf.png",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1750694512/Captura_de_pantalla_2025-06-23_a_la_s_12.01.42_dof0qh.png",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1750690573/ChatGPT_Image_22_jun_2025_15_40_22_lsewla.png",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1750620086/reservations_calendar_highquality_mdxwqp.webp",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1754425940/Captura_de_pantalla_2025-08-05_a_la_s_16.28.43_jfvimn.png",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1754425961/Captura_de_pantalla_2025-08-05_a_la_s_16.29.07_jxnnu8.png",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1754425987/Captura_de_pantalla_2025-08-05_a_la_s_16.29.14_rhugni.png",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753810173/_CVA4755_Original_qa2wwr.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753810158/IMG_1162_ofludo.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753810221/IMG_1555_kkzmpi.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563333/IMG_2573_cewyx0.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563330/a61a42b3-9eb2-4e08-afc5-fbbac2239ed4_rwzo9s.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563329/IMG_4685_p4j3sv.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563327/c8acddc3-a17d-46f5-8fdc-a2904564214c_nujgtbg.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563327/IMG_1700_lxv0om.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563327/06887361-3b5b-4e12-a9a0-d6b17c4f72a2_ljprgl.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563328/84bf4e38-e947-460d-a30e-22ba336c208e_t2meib.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563329/7357fed7-e020-4627-806a-fbb75bf31a8b_gu8p59.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563330/IMG_4649_sggxae.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563330/IMG_2001_qlbtqx.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563331/16eca60a-fe76-48b3-a74b-8029c2cfc872_ri8vt7.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563332/401cce6c-8556-468d-b70d-f533a08b9573_iqjify.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563332/IMG_1366_s3qs9a.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563334/e1ee1518-5172-4c7c-af63-dd68d4361974_ziqlbg.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753563331/IMG_3811_uwzew7.png",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1754192222/97687553_1364588770397246_1578362694157729792_n_jev48f.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1754192222/IMG_0069_jvvcoq.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1754192222/0c08dac3-592e-4138-b852-0d1dfc07d9db_ysqh4t.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753810153/c82c4a60-4199-4a61-99c0-bd908f87a420_tchhwy.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1754192512/39cc8b3c-4a2e-4946-8e23-3408f9f708e9_cxlggn.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1754194054/526656827_10163875433374225_7163308756814852465_n_fbpbfc.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1754194054/IMG_2014_vv2xsv.jpg",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1754194055/Captura_de_pantalla_2025-08-03_a_la_s_00.06.48_trgpdp.png",
  "https://res.cloudinary.com/dhobnlg73/image/upload/v1753742038/IMG_0183_iddtfw.jpg"
];

// Función para descargar archivo
function downloadFile(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(filename);
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => {}); // Eliminar archivo si hay error
      reject(err);
    });
  });
}

// Función para subir a Cloudflare Images
async function uploadToCloudflareImages(filePath, filename) {
  const formData = new FormData();
  formData.append('file', fs.createReadStream(filePath));
  
  const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${config.CLOUDFLARE_ACCOUNT_ID}/images/v1`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.CLOUDFLARE_API_TOKEN}`
    },
    body: formData
  });
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(`Cloudflare Images upload failed: ${JSON.stringify(result.errors)}`);
  }
  
  return result.result.id; // Retorna el ID de la imagen
}

// Función para reemplazar URLs en archivos
function replaceUrlsInFiles(mapping) {
  const files = [
    'client/src/components/sections/what-ive-been-doing.tsx',
    'client/src/components/sections/about.tsx',
    'client/src/components/sections/hero.tsx',
    'client/src/components/sections/security.tsx',
    'client/src/components/sections/maintenance.tsx',
    'client/src/components/sections/security-new.tsx',
    'client/src/components/sections/plug-and-play-solutions.tsx',
    'client/src/components/sections/speaking-events.tsx',
    'client/src/components/sections/strategic.tsx',
    'client/src/components/sections/efficiency.tsx',
    'client/src/components/sections/competitive-advantages.tsx'
  ];
  
  files.forEach(file => {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      let updated = false;
      
      Object.entries(mapping).forEach(([oldUrl, newUrl]) => {
        const escapedUrl = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedUrl, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, newUrl);
          updated = true;
          console.log(`  🔄 Replaced: ${oldUrl} → ${newUrl}`);
        }
      });
      
      if (updated) {
        fs.writeFileSync(file, content);
        console.log(`✅ Updated: ${file}`);
      }
    }
  });
}

// Función principal de migración de imágenes
async function migrateImages() {
  console.log('🚀 Starting Cloudinary to Cloudflare Images migration...\n');
  
  const mapping = {};
  const tempDir = './temp_images';
  
  // Crear directorio temporal
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }
  
  try {
    console.log(`📥 Found ${CLOUDINARY_IMAGE_URLS.length} images to migrate\n`);
    
    for (let i = 0; i < CLOUDINARY_IMAGE_URLS.length; i++) {
      const url = CLOUDINARY_IMAGE_URLS[i];
      console.log(`[${i + 1}/${CLOUDINARY_IMAGE_URLS.length}] 📥 Downloading: ${url}`);
      
      const filename = path.basename(url);
      const filePath = path.join(tempDir, filename);
      
      // Descargar archivo
      await downloadFile(url, filePath);
      console.log(`✅ Downloaded: ${filename}`);
      
      // Subir a Cloudflare Images
      console.log(`📤 Uploading to Cloudflare Images: ${filename}`);
      const imageId = await uploadToCloudflareImages(filePath, filename);
      const newUrl = `${config.IMAGES_DOMAIN}/${config.CLOUDFLARE_ACCOUNT_ID}/${imageId}/public`;
      console.log(`✅ Uploaded to Cloudflare Images: ${imageId}`);
      
      mapping[url] = newUrl;
      
      // Limpiar archivo temporal
      fs.unlinkSync(filePath);
      console.log('');
    }
    
    // Reemplazar URLs en archivos
    console.log('🔄 Updating URLs in code files...');
    replaceUrlsInFiles(mapping);
    
    // Guardar mapping para referencia
    fs.writeFileSync('images-migration-mapping.json', JSON.stringify(mapping, null, 2));
    
    console.log('\n🎉 Images migration completed successfully!');
    console.log('📋 Check images-migration-mapping.json for the URL mapping');
    console.log('💡 Videos and files remain in Cloudinary for now');
    console.log('💡 Don\'t forget to commit your changes!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    // Limpiar directorio temporal
    if (fs.existsSync(tempDir)) {
      fs.rmdirSync(tempDir, { recursive: true });
    }
  }
}

// Ejecutar migración
migrateImages();
