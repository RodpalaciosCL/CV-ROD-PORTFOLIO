#!/bin/bash

# Script para integrar modelos de Ollama en Cursor

echo "🔗 Integrando modelos de Ollama en Cursor..."

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# 1. Crear configuración avanzada de Cursor con modelos locales
print_status "Configurando modelos locales en Cursor..."

cat > ~/.cursor/settings.json << 'EOF'
{
  "ai.autoDetectProvider": true,
  "ai.fallbackProvider": "ollama",
  "ai.onlineProvider": "openai",
  "ai.offlineProvider": "ollama",
  "ai.ollamaEndpoint": "http://localhost:11434/api/generate",
  "ai.ollamaModels": [
    {
      "name": "dolphin-mixtral:latest",
      "displayName": "Dolphin Mixtral (26GB) - Mejor calidad",
      "description": "Modelo más potente para tareas complejas",
      "category": "general"
    },
    {
      "name": "codellama:13b",
      "displayName": "CodeLlama 13B (7.4GB) - Código",
      "description": "Especializado en generación de código",
      "category": "coding"
    },
    {
      "name": "llama3:latest",
      "displayName": "Llama 3 (4.7GB) - General",
      "description": "Modelo equilibrado para tareas generales",
      "category": "general"
    },
    {
      "name": "zephyr:latest",
      "displayName": "Zephyr (4.1GB) - Rápido",
      "description": "Respuestas rápidas para tareas simples",
      "category": "fast"
    },
    {
      "name": "deepseek-coder:6.7b-instruct",
      "displayName": "DeepSeek Coder (3.8GB) - Código",
      "description": "Especializado en tareas de programación",
      "category": "coding"
    }
  ],
  "ai.defaultOfflineModel": "dolphin-mixtral:latest",
  "ai.modelSelection": {
    "auto": true,
    "coding": "deepseek-coder:6.7b-instruct",
    "general": "dolphin-mixtral:latest",
    "fast": "zephyr:latest"
  },
  "ai.showLocalModels": true,
  "ai.localModelsFirst": true,
  "ai.connectionTimeout": 3000,
  "ai.offlineDetection": {
    "enabled": true,
    "timeout": 3000,
    "fallback": "ollama"
  }
}
EOF

# 2. Crear script que sincronice modelos con Cursor
print_status "Creando sincronizador de modelos..."

cat > ~/.cursor/sync-models.sh << 'EOF'
#!/bin/bash

# Script para sincronizar modelos de Ollama con Cursor

echo "🔄 Sincronizando modelos de Ollama..."

# Obtener modelos disponibles
MODELS=$(curl -s http://localhost:11434/api/tags 2>/dev/null | jq -r '.models[].name' 2>/dev/null)

if [ -z "$MODELS" ]; then
    echo "❌ No se pueden obtener modelos de Ollama"
    exit 1
fi

echo "📋 Modelos disponibles en Ollama:"
echo "$MODELS"

# Crear archivo de configuración dinámica
cat > ~/.cursor/ollama-models.json << 'MODELCONFIG'
{
  "models": [
MODELCONFIG

# Agregar cada modelo
FIRST=true
echo "$MODELS" | while read -r model; do
    if [ "$FIRST" = true ]; then
        FIRST=false
    else
        echo "    ," >> ~/.cursor/ollama-models.json
    fi
    
    # Determinar categoría basada en el nombre
    CATEGORY="general"
    if [[ "$model" == *"code"* ]] || [[ "$model" == *"coder"* ]]; then
        CATEGORY="coding"
    elif [[ "$model" == *"zephyr"* ]]; then
        CATEGORY="fast"
    fi
    
    # Determinar tamaño aproximado
    SIZE="Unknown"
    if [[ "$model" == *"dolphin-mixtral"* ]]; then
        SIZE="26GB"
    elif [[ "$model" == *"codellama:13b"* ]]; then
        SIZE="7.4GB"
    elif [[ "$model" == *"llama3"* ]]; then
        SIZE="4.7GB"
    elif [[ "$model" == *"zephyr"* ]]; then
        SIZE="4.1GB"
    elif [[ "$model" == *"deepseek-coder"* ]]; then
        SIZE="3.8GB"
    fi
    
    cat >> ~/.cursor/ollama-models.json << EOF
    {
      "name": "$model",
      "displayName": "$model ($SIZE)",
      "description": "Modelo local de Ollama",
      "category": "$CATEGORY",
      "size": "$SIZE",
      "local": true
    }
EOF
done

echo "  ]" >> ~/.cursor/ollama-models.json
echo "}" >> ~/.cursor/ollama-models.json

echo "✅ Modelos sincronizados con Cursor"
echo "📁 Configuración guardada en: ~/.cursor/ollama-models.json"
EOF

chmod +x ~/.cursor/sync-models.sh

# 3. Crear script de inicio mejorado
print_status "Mejorando script de inicio..."

cat > ~/.cursor/start-cursor-enhanced.sh << 'EOF'
#!/bin/bash

# Script mejorado para iniciar Cursor con modelos locales

echo "🔍 Detectando conexión y modelos..."

# Verificar conexión
if curl -s --connect-timeout 3 https://www.google.com > /dev/null 2>&1; then
    echo "✅ Conectado a internet - usando modelos en la nube"
    # No configurar Ollama - usar modelos por defecto
    unset OLLAMA_HOST
    unset CURSOR_AI_PROVIDER
    unset CURSOR_AI_ENDPOINT
else
    echo "🌐 Sin conexión - configurando Ollama local..."
    
    # Iniciar Ollama si no está corriendo
    if ! curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
        echo "🚀 Iniciando Ollama..."
        ollama serve > /dev/null 2>&1 &
        sleep 5
    fi
    
    # Sincronizar modelos
    if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
        echo "🔄 Sincronizando modelos locales..."
        ~/.cursor/sync-models.sh
    fi
    
    # Configurar para usar Ollama
    export OLLAMA_HOST=http://localhost:11434
    export CURSOR_AI_PROVIDER=ollama
    export CURSOR_AI_ENDPOINT=http://localhost:11434/api/generate
    
    echo "🤖 Ollama configurado con modelos locales"
fi

# Iniciar Cursor
echo "🚀 Iniciando Cursor..."
open -a Cursor
EOF

chmod +x ~/.cursor/start-cursor-enhanced.sh

# 4. Actualizar alias
print_status "Actualizando alias..."

# Actualizar .zshrc
if grep -q "cursor=" ~/.zshrc; then
    # Reemplazar alias existente
    sed -i '' 's|alias cursor=.*|alias cursor="~/.cursor/start-cursor-enhanced.sh"|' ~/.zshrc
else
    # Agregar nuevo alias
    echo "" >> ~/.zshrc
    echo "# Cursor con modelos locales" >> ~/.zshrc
    echo 'alias cursor="~/.cursor/start-cursor-enhanced.sh"' >> ~/.zshrc
fi

# 5. Crear comando para mostrar modelos
print_status "Creando comando para listar modelos..."

cat > ~/.cursor/list-models.sh << 'EOF'
#!/bin/bash

# Script para listar modelos disponibles

echo "🔍 Modelos disponibles:"
echo ""

# Verificar conexión
if curl -s --connect-timeout 3 https://www.google.com > /dev/null 2>&1; then
    echo "✅ CON INTERNET:"
    echo "   - GPT-4 (más rápido, requiere tokens)"
    echo "   - GPT-3.5-turbo (rápido, requiere tokens)"
    echo ""
fi

# Verificar Ollama
if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    echo "🤖 MODELOS LOCALES (Ollama):"
    ollama list --format "table {{.Name}}\t{{.Size}}\t{{.ModifiedAt}}"
    echo ""
    echo "💡 Para usar modelos locales:"
    echo "   1. Desconecta internet"
    echo "   2. Ejecuta: cursor"
    echo "   3. Los modelos aparecerán en la lista de Cursor"
else
    echo "⚠️  Ollama no está corriendo"
    echo "   Ejecuta: ollama serve"
fi
EOF

chmod +x ~/.cursor/list-models.sh

# 6. Probar configuración
print_status "Probando configuración..."

# Verificar Ollama
if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    print_success "Ollama está funcionando"
    ~/.cursor/sync-models.sh
else
    print_warning "Ollama no está corriendo - ejecuta: ollama serve"
fi

echo ""
echo "=========================================="
print_success "¡Integración de modelos completada!"
echo "=========================================="
echo ""
echo "🎯 Ahora cuando estés offline:"
echo ""
echo "1. Ejecuta: cursor"
echo "2. En Cursor, al usar Cmd+Shift+L:"
echo "   - Verás tus modelos locales en la lista"
echo "   - Podrás elegir entre:"
echo "     • dolphin-mixtral:latest (26GB) - Mejor calidad"
echo "     • codellama:13b (7.4GB) - Código"
echo "     • llama3:latest (4.7GB) - General"
echo "     • zephyr:latest (4.1GB) - Rápido"
echo "     • deepseek-coder:6.7b-instruct (3.8GB) - Código"
echo ""
echo "🚀 Comandos disponibles:"
echo "   cursor              - Inicia Cursor con detección automática"
echo "   ~/.cursor/list-models.sh - Muestra modelos disponibles"
echo "   ~/.cursor/sync-models.sh - Sincroniza modelos con Cursor"
echo ""
print_success "¡Tus modelos locales aparecerán en Cursor! 🎉"
