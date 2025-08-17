#!/bin/bash

# Script para iniciar Ollama automáticamente

echo "🤖 Iniciando Ollama automáticamente..."

# Verificar si Ollama está corriendo
if ! curl -s http://localhost:11434/api/tags > /dev/null 2>&1; then
    echo "🚀 Iniciando Ollama..."
    ollama serve > /dev/null 2>&1 &
    sleep 3
    echo "✅ Ollama iniciado"
else
    echo "✅ Ollama ya está corriendo"
fi

# Mostrar modelos disponibles
echo "📋 Modelos disponibles:"
ollama list

echo "🎯 Cursor está listo para usar offline!"
echo "   Usa Cmd+Shift+L en Cursor"
