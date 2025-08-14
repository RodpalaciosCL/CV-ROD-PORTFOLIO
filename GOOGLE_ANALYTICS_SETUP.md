# Google Analytics Setup

## Configuración Rápida

### 1. Crear cuenta de Google Analytics (si no tienes una)

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Haz clic en "Crear cuenta"
3. Completa la información de la cuenta
4. Crea una nueva propiedad para tu sitio web
5. Selecciona "Web" como plataforma
6. Completa la información del sitio web

### 2. Obtener el ID de medición

1. En Google Analytics, ve a **Administrador** (⚙️)
2. En la columna **Propiedad**, haz clic en **Flujo de datos**
3. Selecciona tu flujo de datos web
4. Copia el **ID de medición** (empieza con `G-`)

### 3. Configurar en el proyecto

1. Crea un archivo `.env` en la raíz del proyecto
2. Agrega tu ID de medición:

```env
VITE_GA_TRACKING_ID=G-TU_ID_DE_MEDICION_AQUI
```

**Ejemplo:**
```env
VITE_GA_TRACKING_ID=G-ABC123DEF4
```

### 4. Reiniciar el servidor

```bash
npm run dev
```

## Verificación

1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña **Console**
3. Deberías ver: "Initializing Google Analytics with ID: G-XXXXX"
4. Ve a Google Analytics → Informes en tiempo real
5. Visita tu sitio y verifica que aparezca en tiempo real

## Eventos Personalizados

El sitio ya está configurado para trackear:
- ✅ Visitas a páginas
- ✅ Cambios de idioma
- ✅ Clicks en botones de contacto
- ✅ Interacciones con el pipeline

## Troubleshooting

- **No aparece en Google Analytics**: Verifica que el ID sea correcto
- **Errores en consola**: Revisa que el archivo `.env` esté en la raíz del proyecto
- **No se inicializa**: Verifica que el ID no sea `G-XXXXXXXXXX`
