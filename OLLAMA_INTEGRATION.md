# Ollama Integration for Cursor - Offline AI Development

This project includes a complete integration with Ollama to enable offline AI assistance in Cursor, allowing you to use your local AI models without requiring internet connection or consuming API tokens.

## 🚀 Quick Start

### 1. Prerequisites
- [Ollama](https://ollama.ai) installed on your system
- Your 5 downloaded models (you already have them!)

### 2. Setup
```bash
# Run the automated setup script
./setup-ollama.sh

# Or manually start Ollama
ollama serve
```

### 3. Access the Interface
```bash
# Start your development server
npm run dev

# Navigate to the local AI chat
open http://localhost:5173/ollama
```

## 📋 Your Available Models

Based on your `ollama list` output, you have these models ready:

| Model | Size | Best For | Performance |
|-------|------|----------|-------------|
| `dolphin-mixtral:latest` | 26 GB | General development, complex tasks | ⭐⭐⭐⭐⭐ |
| `codellama:13b` | 7.4 GB | Code generation, debugging | ⭐⭐⭐⭐ |
| `llama3:latest` | 4.7 GB | General purpose, balanced | ⭐⭐⭐⭐ |
| `zephyr:latest` | 4.1 GB | Fast responses, simple tasks | ⭐⭐⭐ |
| `deepseek-coder:6.7b-instruct` | 3.8 GB | Code-specific tasks | ⭐⭐⭐⭐ |

## 🔧 Cursor Integration

### Method 1: Direct API Integration
Your project now includes a complete API that Cursor can use:

```bash
# Environment variables for Cursor
export OLLAMA_HOST=http://localhost:11434
export CURSOR_AI_PROVIDER=ollama
```

### Method 2: Web Interface
Use the built-in chat interface at `/ollama` for:
- Testing models
- Code generation
- Debugging assistance
- Documentation help

### Method 3: API Endpoints
Direct API access for custom integrations:

```bash
# Check connection
curl http://localhost:5173/api/ollama/status

# List models
curl http://localhost:5173/api/ollama/models

# Generate response
curl -X POST http://localhost:5173/api/ollama/generate \
  -H "Content-Type: application/json" \
  -d '{
    "model": "dolphin-mixtral:latest",
    "prompt": "Write a React component for a todo list"
  }'
```

## 🎯 Use Cases

### Offline Development
- Work without internet connection
- No API token consumption
- Full privacy and data control
- Consistent performance

### Code Generation
```bash
# Use the best coding model
curl -X POST http://localhost:5173/api/ollama/generate \
  -H "Content-Type: application/json" \
  -d '{
    "model": "deepseek-coder:6.7b-instruct",
    "prompt": "Create a TypeScript function that validates email addresses"
  }'
```

### Debugging Assistance
- Error analysis
- Code review
- Performance optimization
- Best practices suggestions

## 🛠️ Advanced Configuration

### Model Selection Strategy
The system automatically selects the best model based on task:

```typescript
// For general tasks
const bestModel = await getBestAvailableModel(); // dolphin-mixtral:latest

// For coding tasks
const codingModel = await getBestCodingModel(); // deepseek-coder:6.7b-instruct
```

### Custom Model Configuration
```typescript
// Custom generation options
const response = await ollamaClient.generate({
  model: 'dolphin-mixtral:latest',
  prompt: 'Your prompt here',
  options: {
    temperature: 0.7,    // Creativity (0.0-1.0)
    top_p: 0.9,         // Nucleus sampling
    top_k: 40,          // Top-k sampling
    num_predict: 1000   // Max tokens
  }
});
```

### Streaming Responses
For real-time responses:
```typescript
await ollamaClient.generateStream(request, (chunk) => {
  console.log('Received chunk:', chunk.response);
  // Update UI in real-time
});
```

## 🔍 Troubleshooting

### Common Issues

**1. Ollama not running**
```bash
# Start Ollama server
ollama serve

# Check if it's running
curl http://localhost:11434/api/tags
```

**2. Model not found**
```bash
# Pull the model
ollama pull llama3:latest

# List available models
ollama list
```

**3. Slow responses**
- Use smaller models (zephyr:latest)
- Close other applications
- Check system resources

**4. Memory issues**
- Close unused models
- Use smaller models
- Restart Ollama server

### Performance Optimization

**For Speed:**
- Use `zephyr:latest` (4.1 GB)
- Lower temperature (0.1-0.3)
- Shorter prompts

**For Quality:**
- Use `dolphin-mixtral:latest` (26 GB)
- Higher temperature (0.7-0.9)
- Detailed prompts

**For Coding:**
- Use `deepseek-coder:6.7b-instruct`
- Include context and examples
- Specify language and framework

## 📊 Monitoring

### Check Model Status
```bash
# Via API
curl http://localhost:5173/api/ollama/status

# Via CLI
ollama list
```

### Monitor Performance
- Response times in the web interface
- Model loading times
- Memory usage

## 🔐 Security & Privacy

### Benefits
- ✅ No data sent to external servers
- ✅ No API tokens required
- ✅ Complete privacy
- ✅ No rate limits
- ✅ No usage tracking

### Considerations
- Models run locally on your machine
- Requires sufficient RAM and storage
- Initial model download required

## 🚀 Next Steps

1. **Test the Integration**
   ```bash
   npm run dev
   # Visit http://localhost:5173/ollama
   ```

2. **Configure Cursor**
   - Set environment variables
   - Test with a simple prompt
   - Verify offline functionality

3. **Optimize for Your Workflow**
   - Choose preferred models
   - Set up custom prompts
   - Create templates

4. **Extend Functionality**
   - Add more models
   - Create custom endpoints
   - Integrate with other tools

## 📚 Resources

- [Ollama Documentation](https://ollama.ai/docs)
- [Model Library](https://ollama.ai/library)
- [API Reference](https://github.com/ollama/ollama/blob/main/docs/api.md)
- [Cursor Documentation](https://cursor.sh/docs)

---

**Happy coding with local AI! 🚀**

Your setup is now complete and ready for offline AI-assisted development with Cursor.
