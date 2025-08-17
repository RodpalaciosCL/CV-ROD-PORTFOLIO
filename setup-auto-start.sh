#!/bin/bash

# Script para configurar todo automáticamente

echo "🤖 Configurando inicio automático de Ollama..."

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

# 1. Hacer el script ejecutable
chmod +x auto-start-ollama.sh

# 2. Configurar inicio automático
print_status "Configurando inicio automático..."

# Crear directorio si no existe
sudo mkdir -p /Library/LaunchDaemons

# Copiar el archivo de configuración
sudo cp com.ollama.startup.plist /Library/LaunchDaemons/

# Cargar el servicio
sudo launchctl load /Library/LaunchDaemons/com.ollama.startup.plist

print_success "Ollama se iniciará automáticamente al arrancar el sistema"

# 3. Configurar variables de entorno globales
print_status "Configurando variables de entorno..."

# Crear archivo de configuración global
sudo tee /etc/paths.d/ollama << 'EOF'
export OLLAMA_HOST=http://localhost:11434
export CURSOR_AI_PROVIDER=ollama
export CURSOR_AI_ENDPOINT=http://localhost:11434/api/generate
EOF

# 4. Configurar Cursor globalmente
print_status "Configurando Cursor..."

# Crear configuración global de Cursor
mkdir -p ~/.cursor
cat > ~/.cursor/settings.json << 'EOF'
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

# 5. Iniciar Ollama ahora
print_status "Iniciando Ollama..."
./auto-start-ollama.sh

echo ""
echo "=========================================="
print_success "¡Configuración automática completada!"
echo "=========================================="
echo ""
echo "🎯 Ahora puedes:"
echo "1. Desconectar internet"
echo "2. Abrir Cursor"
echo "3. Usar Cmd+Shift+L (modo agente)"
echo "4. ¡Todo funcionará automáticamente!"
echo ""
echo "🔄 Ollama se iniciará automáticamente:"
echo "   - Al arrancar el sistema"
echo "   - Si se cae, se reiniciará solo"
echo "   - Sin necesidad de terminal"
echo ""
print_success "¡Cursor está listo para funcionar offline sin intervención! 🚀"
