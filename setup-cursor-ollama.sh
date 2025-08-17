#!/bin/bash

# Setup script for permanent Cursor + Ollama configuration

echo "🔧 Setting up permanent Cursor + Ollama configuration..."

# Get the shell profile file
SHELL_PROFILE=""
if [[ "$SHELL" == *"zsh"* ]]; then
    SHELL_PROFILE="$HOME/.zshrc"
elif [[ "$SHELL" == *"bash"* ]]; then
    SHELL_PROFILE="$HOME/.bashrc"
else
    SHELL_PROFILE="$HOME/.profile"
fi

echo "📝 Adding configuration to $SHELL_PROFILE"

# Check if configuration already exists
if grep -q "OLLAMA_HOST" "$SHELL_PROFILE"; then
    echo "✅ Ollama configuration already exists in $SHELL_PROFILE"
else
    # Add configuration to shell profile
    echo "" >> "$SHELL_PROFILE"
    echo "# Ollama Configuration for Cursor" >> "$SHELL_PROFILE"
    echo "export OLLAMA_HOST=http://localhost:11434" >> "$SHELL_PROFILE"
    echo "export CURSOR_AI_PROVIDER=ollama" >> "$SHELL_PROFILE"
    echo "✅ Added Ollama configuration to $SHELL_PROFILE"
fi

# Create .env file in project
if [ ! -f .env ]; then
    echo "OLLAMA_HOST=http://localhost:11434" > .env
    echo "CURSOR_AI_PROVIDER=ollama" >> .env
    echo "✅ Created .env file in project"
else
    echo "✅ .env file already exists"
fi

# Apply configuration to current session
export OLLAMA_HOST=http://localhost:11434
export CURSOR_AI_PROVIDER=ollama

echo ""
echo "🎉 Configuration completed!"
echo ""
echo "To apply changes:"
echo "1. Restart your terminal, OR"
echo "2. Run: source $SHELL_PROFILE"
echo ""
echo "Now Cursor will automatically use Ollama when available!"
echo ""
echo "To test:"
echo "1. Start Ollama: ollama serve"
echo "2. Open Cursor"
echo "3. Use Cmd+Shift+L (Agent mode)"
echo "4. Disconnect internet and test offline mode"
