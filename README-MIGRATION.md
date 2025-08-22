# 🚀 Migración Automática: Cloudinary → Cloudflare

Este script migra automáticamente todos los assets de Cloudinary a Cloudflare R2 + Images y actualiza todas las URLs en tu código.

## 📋 Resumen de lo que hace:

1. **Descarga** todos los assets de Cloudinary (imágenes, videos, archivos)
2. **Sube** imágenes a Cloudflare Images (con optimización automática)
3. **Sube** videos y archivos a Cloudflare R2
4. **Actualiza** automáticamente todas las URLs en tu código
5. **Preserva** la funcionalidad de transformaciones de imágenes

## 🛠️ Configuración Requerida:

### 1. Instalar Dependencias
```bash
npm install @aws-sdk/client-s3 node-fetch form-data
```

### 2. Configurar Credenciales
Edita `cloudflare-config.js` con tus credenciales reales:

```javascript
module.exports = {
  R2_CONFIG: {
    endpoint: 'https://tu-account-id.r2.cloudflarestorage.com',
    region: 'auto',
    credentials: {
      accessKeyId: 'TU_ACCESS_KEY_ID',
      secretAccessKey: 'TU_SECRET_ACCESS_KEY'
    }
  },
  CLOUDFLARE_ACCOUNT_ID: 'TU_ACCOUNT_ID',
  CLOUDFLARE_API_TOKEN: 'TU_API_TOKEN',
  R2_BUCKET_NAME: 'tu-bucket-name',
  R2_DOMAIN: 'https://tu-dominio.com' // opcional
};
```

### 3. Obtener Credenciales

#### Cloudflare Account ID:
- Ve a https://dash.cloudflare.com/
- En la barra lateral derecha, verás tu Account ID

#### Cloudflare API Token:
- Ve a https://dash.cloudflare.com/profile/api-tokens
- Crea un nuevo token con estos permisos:
  - Account > Cloudflare Images > Edit
  - Zone > Zone > Edit (si usas dominio personalizado)

#### R2 Credenciales:
- Ve a https://dash.cloudflare.com/r2/overview
- Ve a "Manage R2 API tokens"
- Crea un nuevo token con permisos de escritura

#### R2 Endpoint:
- En R2, ve a "Settings" > "S3 API"
- Copia el endpoint que aparece

## 🚀 Ejecutar Migración:

```bash
node migrate-cloudinary-to-cloudflare.js
```

## 📊 Assets que se migrarán:

### Videos (7 archivos):
- warehouse_sgukjf_lfssd2.mp4
- ELIOS_3_SURVEYING_PAYLOAD_LOW_BITRATE_meuwtn.mp4
- voliro_homepage_video_hpsjm3.mp4
- Crew_Companion_1.3_ddgusl.mov
- 3_msvtot.mov
- 1_gxiukm.mov
- prevu3d_ezb9kn.mov

### Imágenes (50+ archivos):
- Todas las imágenes de speaking events
- Imágenes de hero, about, security, etc.
- Capturas de pantalla y assets varios

### Archivos (1 archivo):
- KSO_2024_V1_rcymfs.xlsx

## 🔄 Transformaciones de URLs:

### Cloudinary → Cloudflare Images:
```
https://res.cloudinary.com/dhobnlg73/image/upload/v1753563332/_CVA4769_Original_y7efhh.jpg
↓
https://imagedelivery.net/TU_ACCOUNT_ID/IMAGE_ID/public
```

### Cloudinary → Cloudflare R2:
```
https://res.cloudinary.com/dhobnlg73/video/upload/v1753753423/warehouse_sgukjf_lfssd2.mp4
↓
https://tu-dominio.com/warehouse_sgukjf_lfssd2.mp4
```

## 🎯 Beneficios de la Migración:

### ✅ Cloudflare Images:
- **Optimización automática** de imágenes
- **Transformaciones dinámicas** (width, height, fit, etc.)
- **Formatos modernos** (WebP, AVIF)
- **CDN global** para mejor rendimiento

### ✅ Cloudflare R2:
- **Almacenamiento económico** (sin egress fees)
- **Compatibilidad S3** completa
- **CDN integrado** para videos y archivos
- **Dominio personalizado** opcional

## 📁 Archivos que se actualizarán:

- `client/src/components/sections/what-ive-been-doing.tsx`
- `client/src/components/sections/about.tsx`
- `client/src/components/sections/hero.tsx`
- `client/src/components/sections/security.tsx`
- `client/src/components/sections/maintenance.tsx`
- `client/src/components/sections/security-new.tsx`
- `client/src/components/sections/plug-and-play-solutions.tsx`
- `client/src/components/sections/speaking-events.tsx`
- `client/src/components/sections/strategic.tsx`
- `client/src/components/sections/efficiency.tsx`
- `client/src/components/sections/competitive-advantages.tsx`

## 📋 Output:

El script generará:
- `migration-mapping.json`: Mapeo completo de URLs antiguas → nuevas
- Logs detallados del proceso
- Actualización automática de todos los archivos

## ⚠️ Importante:

1. **Backup**: Haz commit de tus cambios antes de ejecutar
2. **Credenciales**: Asegúrate de tener todas las credenciales correctas
3. **Bucket**: Crea el bucket en R2 antes de ejecutar
4. **Permisos**: Verifica que los tokens tengan los permisos correctos

## 🆘 Troubleshooting:

### Error de configuración:
```
❌ Configuración incompleta. Faltan estos valores:
   - CLOUDFLARE_ACCOUNT_ID
```
→ Actualiza `cloudflare-config.js` con tus credenciales reales

### Error de permisos:
```
Cloudflare Images upload failed: [{"code":10000,"message":"Authentication error"}]
```
→ Verifica que tu API token tenga permisos de Images

### Error de bucket:
```
AccessDenied: Access Denied
```
→ Verifica que el bucket existe y las credenciales R2 son correctas

## 🎉 Después de la migración:

1. **Revisa** el archivo `migration-mapping.json`
2. **Prueba** tu sitio localmente
3. **Haz commit** de los cambios
4. **Deploy** a Vercel

¡Listo! Tu sitio ahora usa Cloudflare en lugar de Cloudinary. 🚀
