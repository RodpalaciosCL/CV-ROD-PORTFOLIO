import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Alert, AlertDescription } from './ui/alert';
import { Loader2, Send, Bot, User, Wifi, WifiOff, Download, Trash2 } from 'lucide-react';

interface OllamaModel {
  name: string;
  size: number;
  modified_at: string;
  digest: string;
}

interface OllamaResponse {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
  context?: number[];
  total_duration?: number;
  load_duration?: number;
  prompt_eval_count?: number;
  prompt_eval_duration?: number;
  eval_count?: number;
  eval_duration?: number;
}

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  model?: string;
}

export default function OllamaChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [models, setModels] = useState<OllamaModel[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [bestModel, setBestModel] = useState<string>('');
  const [bestCodingModel, setBestCodingModel] = useState<string>('');
  const [modelSelectionMode, setModelSelectionMode] = useState<'auto' | 'manual'>('auto');
  const [streamingResponse, setStreamingResponse] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Verificar conexión y cargar modelos al montar el componente
  useEffect(() => {
    checkConnection();
    loadModels();
  }, []);

  // Auto-scroll al último mensaje
  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages, streamingResponse]);

  const checkConnection = async () => {
    try {
      const response = await fetch('/api/ollama/status');
      const data = await response.json();
      setIsConnected(data.isConnected);
      
      if (data.isConnected) {
        // Obtener mejores modelos
        const bestResponse = await fetch('/api/ollama/best-model');
        const bestData = await bestResponse.json();
        if (bestData.success) {
          setBestModel(bestData.model);
          setSelectedModel(bestData.model);
        }

        const bestCodingResponse = await fetch('/api/ollama/best-coding-model');
        const bestCodingData = await bestCodingResponse.json();
        if (bestCodingData.success) {
          setBestCodingModel(bestCodingData.model);
        }
      }
    } catch (error) {
      console.error('Error checking Ollama connection:', error);
      setIsConnected(false);
    }
  };

  const loadModels = async () => {
    try {
      const response = await fetch('/api/ollama/models');
      const data = await response.json();
      if (data.success) {
        setModels(data.models);
      }
    } catch (error) {
      console.error('Error loading models:', error);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Auto-select model if in auto mode and no model selected
    let modelToUse = selectedModel;
    if (modelSelectionMode === 'auto' && !selectedModel) {
      if (input.toLowerCase().includes('code') || input.toLowerCase().includes('function') || input.toLowerCase().includes('react') || input.toLowerCase().includes('typescript') || input.toLowerCase().includes('javascript')) {
        modelToUse = bestCodingModel || bestModel;
      } else {
        modelToUse = bestModel;
      }
    }

    if (!modelToUse) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Error: No model selected. Please choose a model from the dropdown above.",
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setStreamingResponse('');
    setIsStreaming(true);

    try {
      const response = await fetch('/api/ollama/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: modelToUse,
          prompt: input,
          options: {
            temperature: 0.7,
            top_p: 0.9,
          }
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.response.response,
          role: 'assistant',
          timestamp: new Date(),
          model: data.response.model,
        };
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error(data.error || 'Failed to generate response');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Error: ${error instanceof Error ? error.message : 'Failed to get response'}`,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
      setStreamingResponse('');
    }
  };

  const sendMessageStream = async () => {
    if (!input.trim() || !selectedModel || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setStreamingResponse('');
    setIsStreaming(true);

    try {
      const response = await fetch('/api/ollama/generate-stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: selectedModel,
          prompt: input,
          options: {
            temperature: 0.7,
            top_p: 0.9,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to start stream');
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No reader available');
      }

      let fullResponse = '';
      let isDone = false;

      while (!isDone) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n').filter(line => line.trim());

        for (const line of lines) {
          try {
            const data: OllamaResponse = JSON.parse(line);
            fullResponse += data.response;
            setStreamingResponse(fullResponse);
            isDone = data.done;
          } catch (e) {
            // Skip invalid JSON
          }
        }
      }

      // Agregar mensaje completo al historial
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: fullResponse,
        role: 'assistant',
        timestamp: new Date(),
        model: selectedModel,
      };
      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      console.error('Error in stream:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Error: ${error instanceof Error ? error.message : 'Failed to get response'}`,
        role: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
      setStreamingResponse('');
    }
  };

  const pullModel = async (modelName: string) => {
    try {
      const response = await fetch('/api/ollama/pull', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ modelName }),
      });

      const data = await response.json();
      if (data.success) {
        await loadModels(); // Recargar modelos
        alert(`Model ${modelName} pulled successfully!`);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Error pulling model:', error);
      alert(`Error pulling model: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const deleteModel = async (modelName: string) => {
    if (!confirm(`Are you sure you want to delete ${modelName}?`)) return;

    try {
      const response = await fetch('/api/ollama/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ modelName }),
      });

      const data = await response.json();
      if (data.success) {
        await loadModels(); // Recargar modelos
        if (selectedModel === modelName) {
          setSelectedModel(bestModel || '');
        }
        alert(`Model ${modelName} deleted successfully!`);
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      console.error('Error deleting model:', error);
      alert(`Error deleting model: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const formatModelSize = (size: number) => {
    const gb = size / (1024 * 1024 * 1024);
    return `${gb.toFixed(1)} GB`;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      {/* Status and Connection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {isConnected ? <Wifi className="text-green-500" /> : <WifiOff className="text-red-500" />}
            Ollama Local AI
            <Badge variant={isConnected ? "default" : "destructive"}>
              {isConnected ? "Connected" : "Disconnected"}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {isConnected 
                  ? "Connected to local Ollama instance" 
                  : "Ollama not running. Start Ollama to use local AI models."
                }
              </p>
              {bestModel && (
                <p className="text-sm">
                  <strong>Best model:</strong> {bestModel}
                </p>
              )}
              {bestCodingModel && (
                <p className="text-sm">
                  <strong>Best coding model:</strong> {bestCodingModel}
                </p>
              )}
            </div>
            <Button onClick={checkConnection} variant="outline" size="sm">
              Refresh
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Model Selection */}
      <Card>
        <CardHeader>
          <CardTitle>Model Selection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Selection Mode */}
            <div className="flex items-center gap-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="auto-mode"
                  name="selection-mode"
                  checked={modelSelectionMode === 'auto'}
                  onChange={() => setModelSelectionMode('auto')}
                  className="w-4 h-4"
                />
                <label htmlFor="auto-mode" className="text-sm font-medium">
                  Auto-select (Recommended)
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="manual-mode"
                  name="selection-mode"
                  checked={modelSelectionMode === 'manual'}
                  onChange={() => setModelSelectionMode('manual')}
                  className="w-4 h-4"
                />
                <label htmlFor="manual-mode" className="text-sm font-medium">
                  Manual selection
                </label>
              </div>
            </div>

            {/* Model Selection */}
            <div className="flex items-center gap-4">
              <Select 
                value={selectedModel} 
                onValueChange={setSelectedModel}
                disabled={modelSelectionMode === 'auto'}
              >
                <SelectTrigger className="w-64">
                  <SelectValue placeholder={
                    modelSelectionMode === 'auto' 
                      ? "Auto-selecting best model..." 
                      : "Select a model"
                  } />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Auto-select best model</SelectItem>
                  {models.map((model) => (
                    <SelectItem key={model.name} value={model.name}>
                      {model.name} ({formatModelSize(model.size)})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button onClick={loadModels} variant="outline" size="sm">
                Refresh Models
              </Button>
            </div>

            {/* Quick Model Buttons */}
            {modelSelectionMode === 'manual' && (
              <div className="flex gap-2 flex-wrap">
                <Button
                  onClick={() => setSelectedModel(bestModel)}
                  variant="outline"
                  size="sm"
                  className="text-green-600"
                >
                  Best General: {bestModel}
                </Button>
                <Button
                  onClick={() => setSelectedModel(bestCodingModel)}
                  variant="outline"
                  size="sm"
                  className="text-blue-600"
                >
                  Best Coding: {bestCodingModel}
                </Button>
                <Button
                  onClick={() => setSelectedModel('zephyr:latest')}
                  variant="outline"
                  size="sm"
                  className="text-purple-600"
                >
                  Fast: zephyr:latest
                </Button>
              </div>
            )}

            {/* Current Selection Info */}
            {modelSelectionMode === 'auto' && (
              <div className="text-sm text-muted-foreground">
                <p>🤖 Auto-selection will choose:</p>
                <ul className="list-disc list-inside ml-4 mt-1">
                  <li><strong>Best General:</strong> {bestModel || 'Not available'}</li>
                  <li><strong>Best Coding:</strong> {bestCodingModel || 'Not available'}</li>
                  <li><strong>Fast:</strong> zephyr:latest</li>
                </ul>
                <p className="mt-2 text-xs">
                  💡 Tip: Include words like "code", "function", "React" to auto-select coding models
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Available Models */}
      <Card>
        <CardHeader>
          <CardTitle>Available Models ({models.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            {models.map((model) => (
              <div key={model.name} className="flex items-center justify-between p-2 border rounded">
                <div>
                  <p className="font-medium">{model.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatModelSize(model.size)} • Modified: {new Date(model.modified_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => deleteModel(model.name)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
            {models.length === 0 && (
              <p className="text-muted-foreground">No models available</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card className="h-96">
        <CardHeader>
          <CardTitle>Chat with Local AI</CardTitle>
        </CardHeader>
        <CardContent className="h-full flex flex-col">
          <ScrollArea ref={scrollAreaRef} className="flex-1 mb-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.role === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                      <span className="text-xs opacity-70">
                        {message.role === 'assistant' && message.model && `(${message.model})`}
                      </span>
                    </div>
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isStreaming && streamingResponse && (
                <div className="flex gap-3 justify-start">
                  <div className="max-w-[80%] p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div className="flex items-center gap-2 mb-1">
                      <Bot className="w-4 h-4" />
                      <span className="text-xs opacity-70">({selectedModel})</span>
                    </div>
                    <p className="whitespace-pre-wrap">{streamingResponse}</p>
                    {isStreaming && <span className="animate-pulse">▋</span>}
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={
                  modelSelectionMode === 'auto' 
                    ? "Type your message... (Auto-selecting best model)" 
                    : selectedModel 
                      ? `Type your message... (Using: ${selectedModel})` 
                      : "Type your message... (Select a model first)"
                }
                disabled={!isConnected || isLoading}
                className="flex-1"
              />
              {modelSelectionMode === 'auto' && (
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Badge variant="secondary" className="text-xs">
                    🤖 Auto
                  </Badge>
                </div>
              )}
            </div>
            <Button
              onClick={sendMessage}
              disabled={!isConnected || isLoading || !input.trim()}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 flex-wrap">
            <Button
              onClick={() => pullModel('llama3:latest')}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Pull Llama 3
            </Button>
            <Button
              onClick={() => pullModel('codellama:13b')}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Pull CodeLlama 13B
            </Button>
            <Button
              onClick={() => pullModel('deepseek-coder:6.7b-instruct')}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Pull DeepSeek Coder
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Connection Alert */}
      {!isConnected && (
        <Alert>
          <WifiOff className="h-4 w-4" />
          <AlertDescription>
            Ollama is not running. To use local AI models:
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Install Ollama from <a href="https://ollama.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">ollama.ai</a></li>
              <li>Start Ollama: <code className="bg-gray-100 px-1 rounded">ollama serve</code></li>
              <li>Pull a model: <code className="bg-gray-100 px-1 rounded">ollama pull llama3:latest</code></li>
              <li>Refresh this page</li>
            </ol>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
