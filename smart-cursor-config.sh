#!/bin/bash

# Script para configurar Cursor para usar Ollama solo cuando no hay internet

echo "🧠 Configurando Cursor inteligente (Ollama solo offline)..."

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

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# 1. Crear script de detección de internet
print_status "Creando detector de conexión..."

cat > ~/.cursor/check-internet.sh << 'EOF'
#!/bin/bash

# Función para verificar conexión a internet
check_internet() {
    # Intentar conectar a un servidor confiable
    if curl -s --connect-timeout 3 https://www.google.com > /dev/null 2>&1; then
        echo "online"
    elif curl -s --connect-timeout 3 https://www.cloudflare.com > /dev/null 2>&1; then
        echo "online"
    else
        echo "offline"
    fi
}

# Verificar estado
STATUS=$(check_internet)

if [ "$STATUS" = "offline" ]; then
    # Sin internet - usar Ollama
    export OLLAMA_HOST=http://localhost:11434
    export CURSOR_AI_PROVIDER=ollama
    export CURSOR_AI_ENDPOINT=http://localhost:11434/api/generate
    echo "offline"
else
    # Con internet - usar modelos en la nube
    unset OLLAMA_HOST
    unset CURSOR_AI_PROVIDER
    unset CURSOR_AI_ENDPOINT
    echo "online"
fi
EOF

chmod +x ~/.cursor/check-internet.sh

# 2. Crear configuración de Cursor que detecte automáticamente
print_status "Configurando Cursor con detección automática..."

cat > ~/.cursor/settings.json << 'EOF'
{
  "ai.autoDetectProvider": true,
  "ai.fallbackProvider": "ollama",
  "ai.onlineProvider": "openai",
  "ai.offlineProvider": "ollama",
  "ai.ollamaEndpoint": "http://localhost:11434/api/generate",
  "ai.ollamaModel": "dolphin-mixtral:latest",
  "ai.checkConnection": true,
  "ai.connectionTimeout": 3000,
  "ai.offlineModels": {
    "general": "dolphin-mixtral:latest",
    "coding": "deepseek-coder:6.7b-instruct",
    "fast": "zephyr:latest"
  },
  "ai.onlineModels": {
    "general": "gpt-4",
    "coding": "gpt-4",
    "fast": "gpt-3.5-turbo"
  }
}
EOF

# 3. Crear script de inicio que detecte automáticamente
print_status "Creando script de inicio inteligente..."

cat > ~/.cursor/start-cursor.sh << 'EOF'
#!/bin/bash

# Script para iniciar Cursor con detección automática de conexión

echo "🔍 Detectando conexión a internet..."

# Verificar conexión
if curl -s --connect-timeout 3 https://www.google.com > /dev/null 2>&1; then
    echo "✅ Conectado a internet - usando modelos en la nube"
    # No configurar Ollama - usar modelos por defecto
    unset OLLAMA_HOST
    unset CURSOR_AI_PROVIDER
    unset CURSOR_AI_ENDPOINT
else
    echo "🌐 Sin conexión - iniciando Ollama local..."
    
    # Iniciar Ollama si no está corriendo
    if ! curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
        ollama serve > /dev/null 2>&1 &
        sleep 3
    fi
    
    # Configurar para usar Ollama
    export OLLAMA_HOST=http://localhost:11434
    export CURSOR_AI_PROVIDER=ollama
    export CURSOR_AI_ENDPOINT=http://localhost:11434/api/generate
    
    echo "🤖 Ollama configurado para uso offline"
fi

# Iniciar Cursor
echo "🚀 Iniciando Cursor..."
open -a Cursor
EOF

chmod +x ~/.cursor/start-cursor.sh

# 4. Crear alias para facilitar el uso
print_status "Creando alias para inicio fácil..."

# Agregar al .zshrc
if ! grep -q "start-cursor" ~/.zshrc; then
    echo "" >> ~/.zshrc
    echo "# Cursor inteligente - detecta conexión automáticamente" >> ~/.zshrc
    echo "alias cursor='~/.cursor/start-cursor.sh'" >> ~/.zshrc
    echo "alias cursor-offline='export OLLAMA_HOST=http://localhost:11434 && export CURSOR_AI_PROVIDER=ollama && open -a Cursor'" >> ~/.zshrc
    echo "alias cursor-online='unset OLLAMA_HOST && unset CURSOR_AI_PROVIDER && open -a Cursor'" >> ~/.zshrc
fi

# 5. Crear indicador visual
print_status "Creando indicador de estado..."

cat > ~/.cursor/status.sh << 'EOF'
#!/bin/bash

# Script para mostrar el estado actual

echo "🔍 Estado actual de Cursor:"

if curl -s --connect-timeout 3 https://www.google.com > /dev/null 2>&1; then
    echo "✅ Conectado a internet"
    echo "   Cursor usará modelos en la nube"
    echo "   (más rápidos, requieren tokens)"
else
    echo "🌐 Sin conexión a internet"
    if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
        echo "🤖 Ollama está corriendo"
        echo "   Cursor usará modelos locales"
        echo "   (más lentos, sin tokens)"
    else
        echo "⚠️  Ollama no está corriendo"
        echo "   Ejecuta: ollama serve"
    fi
fi
EOF

chmod +x ~/.cursor/status.sh

# 6. Probar configuración
print_status "Probando configuración..."

# Verificar conexión actual
if curl -s --connect-timeout 3 https://www.google.com > /dev/null 2>&1; then
    print_success "Conectado a internet - Cursor usará modelos en la nube"
else
    print_warning "Sin conexión - Cursor usará Ollama local"
    # Iniciar Ollama si no está corriendo
    if ! curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
        print_status "Iniciando Ollama..."
        ollama serve > /dev/null 2>&1 &
        sleep 3
    fi
fi

echo ""
echo "=========================================="
print_success "¡Configuración inteligente completada!"
echo "=========================================="
echo ""
echo "🎯 Ahora Cursor detectará automáticamente:"
echo ""
echo "✅ CON INTERNET:"
echo "   - Usa modelos en la nube (más rápidos)"
echo "   - Consume tokens de API"
echo ""
echo "🌐 SIN INTERNET:"
echo "   - Usa Ollama local automáticamente"
echo "   - No consume tokens"
echo "   - Totalmente privado"
echo ""
echo "🚀 Comandos disponibles:"
echo "   cursor          - Inicia Cursor con detección automática"
echo "   cursor-offline  - Fuerza modo offline"
echo "   cursor-online   - Fuerza modo online"
echo "   ~/.cursor/status.sh - Muestra estado actual"
echo ""
print_success "¡Cursor ahora es inteligente! 🧠"
