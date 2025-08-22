// Configuración para migración de Cloudinary a Cloudflare
// Reemplaza estos valores con tus credenciales reales

module.exports = {
  // Cloudinary Configuration (para descargar assets)
  CLOUDINARY_CONFIG: {
    cloud_name: 'dhobnlg73',
    api_key: '227653479882513',
    api_secret: 'D_A2fla9hgUxwAi59B99Ko0ccDg'
  },

  // Cloudflare R2 Configuration
  R2_ENDPOINT: 'https://307db0fe02dea6e144176d9a7150c4a9.r2.cloudflarestorage.com',
  R2_ACCESS_KEY_ID: '7abd4d4789f9c2d0777f6b8f958ea55a',
  R2_SECRET_ACCESS_KEY: '4320cfe7316b5d818be1ae16091e55a944842406c80f12b349553092d454e646',
  R2_BUCKET_NAME: 'rodcv',

  // Cloudflare Images Configuration
  CLOUDFLARE_ACCOUNT_ID: '307db0fe02dea6e144176d9a7150c4a9',
  CLOUDFLARE_ACCOUNT_HASH: 'ggT8OoJUg8TvMm3OHVNsdQ',
  CLOUDFLARE_API_TOKEN: 'dy_pi-3VW40AlD-MB8F_aQ8O9EvcNpFNQ6zrklYR',

  // Cloudflare Images Domain
  IMAGES_DOMAIN: 'https://imagedelivery.net' // Dominio de Cloudflare Images
};

/*
INSTRUCCIONES PARA OBTENER CREDENCIALES:

1. CLOUDINARY API KEY: ✅ OBTENIDO
   - Ve a https://cloudinary.com/console
   - En "Account Details" busca "API Key"

2. CLOUDINARY API SECRET: ✅ OBTENIDO
   - Ve a https://cloudinary.com/console
   - En "Account Details" busca "API Secret"

3. CLOUDFLARE ACCOUNT ID: ✅ OBTENIDO
   - Ve a https://dash.cloudflare.com/
   - En la barra lateral derecha, verás tu Account ID

4. CLOUDFLARE API TOKEN: ✅ OBTENIDO
   - Ve a https://dash.cloudflare.com/profile/api-tokens
   - Crea un nuevo token con estos permisos:
     * Account > Cloudflare Images > Edit
     * Zone > Zone > Edit (si usas dominio personalizado)

5. R2 ACCESS KEY ID: ✅ OBTENIDO
   - Ve a https://dash.cloudflare.com/r2/overview
   - Ve a "Manage R2 API tokens"
   - Crea un nuevo token con permisos de escritura

6. R2 SECRET ACCESS KEY: ✅ OBTENIDO
   - Ve a https://dash.cloudflare.com/r2/overview
   - Ve a "Manage R2 API tokens"
   - Crea un nuevo token con permisos de escritura

7. R2 ENDPOINT: ✅ OBTENIDO
   - En R2, ve a "Settings" > "S3 API"
   - Copia el endpoint que aparece

8. R2 BUCKET NAME: ✅ OBTENIDO
   - Crea un bucket en R2 o usa uno existente
   - El nombre del bucket

9. R2 DOMAIN (opcional):
   - Si tienes un dominio personalizado configurado en R2
   - Si no, usa el endpoint por defecto
*/
