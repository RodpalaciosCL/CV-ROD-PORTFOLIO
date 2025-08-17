# Cursor + Ollama Setup - One Time Configuration

## 🚀 Quick Setup (One Time Only)

### Step 1: Add to your shell profile
Add these lines to your `~/.zshrc` file:

```bash
# Ollama Configuration for Cursor
export OLLAMA_HOST=http://localhost:11434
export CURSOR_AI_PROVIDER=ollama
```

### Step 2: Apply the changes
```bash
source ~/.zshrc
```

### Step 3: Test the setup
```bash
# Start Ollama
ollama serve

# Open Cursor and use Cmd+Shift+L (Agent mode)
```

## 🎯 How it works

### Auto-Model Selection
When you use Cursor in Agent mode (`Cmd+Shift+L`), it will automatically:

1. **For coding tasks** → Use `deepseek-coder:6.7b-instruct` or `codellama:13b`
2. **For general tasks** → Use `dolphin-mixtral:latest` or `llama3:latest`
3. **For fast responses** → Use `zephyr:latest`

### Offline Usage
1. **Disconnect internet**
2. **Keep Ollama running** (`ollama serve`)
3. **Use Cursor normally** - it will use local models automatically

### Manual Model Selection
If you want to choose a specific model, use the web interface:
- Go to `http://localhost:3000/ollama`
- Choose "Manual selection" mode
- Select your preferred model

## 🔧 Troubleshooting

### If Cursor doesn't use Ollama:
1. Check if Ollama is running: `curl http://localhost:11434/api/tags`
2. Restart Cursor
3. Verify environment variables: `echo $OLLAMA_HOST`

### If models are slow:
- Use smaller models (zephyr:latest)
- Close other applications
- Check system resources

## 📋 Your Models Available

| Model | Size | Best For | Speed |
|-------|------|----------|-------|
| `dolphin-mixtral:latest` | 26 GB | Complex tasks | ⭐⭐ |
| `codellama:13b` | 7.4 GB | Code generation | ⭐⭐⭐ |
| `llama3:latest` | 4.7 GB | General purpose | ⭐⭐⭐ |
| `zephyr:latest` | 4.1 GB | Fast responses | ⭐⭐⭐⭐ |
| `deepseek-coder:6.7b-instruct` | 3.8 GB | Code tasks | ⭐⭐⭐⭐ |

## 🎉 That's it!

Once configured, you can:
- ✅ Use Cursor offline
- ✅ No API tokens needed
- ✅ Full privacy
- ✅ No internet required
- ✅ Automatic model selection

**Happy coding with local AI! 🚀**
