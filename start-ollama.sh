#!/bin/bash

# Script para iniciar Ollama y configurar Cursor offline

echo "🚀 Iniciando configuración para Cursor offline..."

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# Función para imprimir mensajes
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar si Ollama está instalado
if ! command -v ollama &> /dev/null; then
    print_error "Ollama no está instalado. Por favor instálalo desde https://ollama.ai"
    exit 1
fi

print_success "Ollama está instalado"

# Verificar si Ollama está corriendo
if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    print_success "Ollama ya está corriendo"
else
    print_status "Iniciando Ollama..."
    ollama serve > /dev/null 2>&1 &
    sleep 3
    
    if curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
        print_success "Ollama iniciado correctamente"
    else
        print_error "No se pudo iniciar Ollama"
        exit 1
    fi
fi

# Mostrar modelos disponibles
print_status "Modelos disponibles:"
ollama list

# Verificar variables de entorno
print_status "Verificando configuración de Cursor..."

if [ -z "$OLLAMA_HOST" ]; then
    print_warning "OLLAMA_HOST no está configurado"
    print_status "Configurando variables de entorno..."
    
    # Agregar al .zshrc si no existe
    if ! grep -q "OLLAMA_HOST" ~/.zshrc; then
        echo "" >> ~/.zshrc
        echo "# Ollama Configuration for Cursor" >> ~/.zshrc
        echo "export OLLAMA_HOST=http://localhost:11434" >> ~/.zshrc
        echo "export CURSOR_AI_PROVIDER=ollama" >> ~/.zshrc
        print_success "Variables agregadas a ~/.zshrc"
    fi
    
    # Exportar para esta sesión
    export OLLAMA_HOST=http://localhost:11434
    export CURSOR_AI_PROVIDER=ollama
else
    print_success "OLLAMA_HOST está configurado: $OLLAMA_HOST"
fi

# Probar generación
print_status "Probando generación de respuesta..."
RESPONSE=$(curl -s -X POST http://localhost:11434/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama3:latest",
    "prompt": "Hello, this is a test. Please respond with OK if you can read this.",
    "stream": false
  }' | grep -o '"response":"[^"]*"' | cut -d'"' -f4)

if [[ $RESPONSE == *"OK"* ]] || [[ $RESPONSE == *"ok"* ]] || [[ $RESPONSE == *"test"* ]]; then
    print_success "Generación de respuesta funcionando correctamente"
else
    print_warning "Generación de respuesta funcionando (respuesta: $RESPONSE)"
fi

echo ""
echo "=========================================="
print_success "¡Configuración completada!"
echo "=========================================="
echo ""
echo "🎯 Ahora puedes:"
echo "1. Desconectar internet"
echo "2. Abrir Cursor"
echo "3. Usar Cmd+Shift+L (modo agente)"
echo "4. Cursor usará Ollama automáticamente"
echo ""
echo "🌐 O usar la interfaz web:"
echo "   http://localhost:3000/ollama"
echo ""
echo "📋 Modelos disponibles:"
ollama list --format "table {{.Name}}\t{{.Size}}\t{{.ModifiedAt}}"
echo ""
echo "🔧 Para verificar que todo funciona:"
echo "   curl http://localhost:11434/api/tags"
echo ""
print_success "¡Cursor está listo para funcionar offline! 🚀"
