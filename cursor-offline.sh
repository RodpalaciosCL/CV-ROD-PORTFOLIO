#!/bin/bash

# Script principal para configurar Cursor offline con Ollama

echo "🎯 Configurando Cursor para funcionar offline con Ollama..."

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Función para imprimir
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# 1. Verificar Ollama
print_status "Verificando Ollama..."
if ! command -v ollama &> /dev/null; then
    print_warning "Ollama no está instalado. Instálalo desde https://ollama.ai"
    exit 1
fi

# 2. Iniciar Ollama si no está corriendo
if ! curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    print_status "Iniciando Ollama..."
    ollama serve > /dev/null 2>&1 &
    sleep 3
fi

# 3. Configurar variables de entorno
print_status "Configurando variables de entorno..."

# Crear directorio .cursor si no existe
mkdir -p .cursor

# Configurar variables en .zshrc
if ! grep -q "OLLAMA_HOST" ~/.zshrc; then
    echo "" >> ~/.zshrc
    echo "# Ollama Configuration for Cursor" >> ~/.zshrc
    echo "export OLLAMA_HOST=http://localhost:11434" >> ~/.zshrc
    echo "export CURSOR_AI_PROVIDER=ollama" >> ~/.zshrc
    echo "export CURSOR_AI_ENDPOINT=http://localhost:11434/api/generate" >> ~/.zshrc
fi

# Exportar para esta sesión
export OLLAMA_HOST=http://localhost:11434
export CURSOR_AI_PROVIDER=ollama
export CURSOR_AI_ENDPOINT=http://localhost:11434/api/generate

# 4. Crear configuración de Cursor
print_status "Creando configuración de Cursor..."

cat > .cursor/settings.json << 'EOF'
{
  "ai.provider": "ollama",
  "ai.endpoint": "http://localhost:11434/api/generate",
  "ai.model": "dolphin-mixtral:latest",
  "ai.temperature": 0.7,
  "ai.maxTokens": 1000,
  "ai.stream": true,
  "ai.offline": true,
  "ai.localModels": {
    "general": "dolphin-mixtral:latest",
    "coding": "deepseek-coder:6.7b-instruct",
    "fast": "zephyr:latest"
  }
}
EOF

# 5. Verificar que todo funciona
print_status "Verificando configuración..."

if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    print_success "Ollama está funcionando"
else
    print_warning "Ollama no responde. Intenta: ollama serve"
fi

# 6. Mostrar resumen
echo ""
echo "=========================================="
print_success "¡Configuración completada!"
echo "=========================================="
echo ""
echo "🎯 Para usar Cursor offline:"
echo ""
echo "1. Desconecta internet"
echo "2. Abre una nueva terminal (para cargar las variables)"
echo "3. Abre Cursor"
echo "4. Usa Cmd+Shift+L (modo agente)"
echo "5. ¡Cursor usará Ollama automáticamente!"
echo ""
echo "🌐 O usa la interfaz web:"
echo "   http://localhost:3000/ollama"
echo ""
echo "📋 Tus modelos disponibles:"
ollama list
echo ""
echo "🔧 Para verificar:"
echo "   echo \$OLLAMA_HOST"
echo "   curl http://localhost:11434/api/tags"
echo ""
print_success "¡Cursor está listo para funcionar offline! 🚀"
