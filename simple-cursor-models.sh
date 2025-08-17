#!/bin/bash

# Script simple para integrar modelos de Ollama en Cursor

echo "🔗 Integrando modelos de Ollama en Cursor..."

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# 1. Crear configuración de Cursor con modelos locales
print_status "Configurando modelos locales en Cursor..."

mkdir -p ~/.cursor

cat > ~/.cursor/settings.json << 'EOF'
{
  "ai.autoDetectProvider": true,
  "ai.fallbackProvider": "ollama",
  "ai.onlineProvider": "openai",
  "ai.offlineProvider": "ollama",
  "ai.ollamaEndpoint": "http://localhost:11434/api/generate",
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

# 2. Crear archivo de modelos locales
print_status "Creando lista de modelos locales..."

cat > ~/.cursor/local-models.json << 'EOF'
{
  "models": [
    {
      "name": "dolphin-mixtral:latest",
      "displayName": "Dolphin Mixtral (26GB) - Mejor calidad",
      "description": "Modelo más potente para tareas complejas",
      "category": "general",
      "size": "26GB",
      "local": true
    },
    {
      "name": "codellama:13b",
      "displayName": "CodeLlama 13B (7.4GB) - Código",
      "description": "Especializado en generación de código",
      "category": "coding",
      "size": "7.4GB",
      "local": true
    },
    {
      "name": "llama3:latest",
      "displayName": "Llama 3 (4.7GB) - General",
      "description": "Modelo equilibrado para tareas generales",
      "category": "general",
      "size": "4.7GB",
      "local": true
    },
    {
      "name": "zephyr:latest",
      "displayName": "Zephyr (4.1GB) - Rápido",
      "description": "Respuestas rápidas para tareas simples",
      "category": "fast",
      "size": "4.1GB",
      "local": true
    },
    {
      "name": "deepseek-coder:6.7b-instruct",
      "displayName": "DeepSeek Coder (3.8GB) - Código",
      "description": "Especializado en tareas de programación",
      "category": "coding",
      "size": "3.8GB",
      "local": true
    }
  ]
}
EOF

# 3. Crear script de inicio mejorado
print_status "Creando script de inicio mejorado..."

cat > ~/.cursor/start-cursor.sh << 'EOF'
#!/bin/bash

# Script para iniciar Cursor con modelos locales

echo "🔍 Detectando conexión..."

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
    
    # Configurar para usar Ollama
    export OLLAMA_HOST=http://localhost:11434
    export CURSOR_AI_PROVIDER=ollama
    export CURSOR_AI_ENDPOINT=http://localhost:11434/api/generate
    
    echo "🤖 Ollama configurado con modelos locales"
    echo "📋 Modelos disponibles:"
    ollama list
fi

# Iniciar Cursor
echo "🚀 Iniciando Cursor..."
open -a Cursor
EOF

chmod +x ~/.cursor/start-cursor.sh

# 4. Actualizar alias
print_status "Actualizando alias..."

# Agregar al .zshrc
if ! grep -q "cursor=" ~/.zshrc; then
    echo "" >> ~/.zshrc
    echo "# Cursor con modelos locales" >> ~/.zshrc
    echo 'alias cursor="~/.cursor/start-cursor.sh"' >> ~/.zshrc
fi

# 5. Crear comando para mostrar modelos
print_status "Creando comando para listar modelos..."

cat > ~/.cursor/list-models.sh << 'EOF'
#!/bin/bash

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
    ollama list
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
else
    print_status "Ollama no está corriendo - ejecuta: ollama serve"
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
echo ""
print_success "¡Tus modelos locales aparecerán en Cursor! 🎉"
