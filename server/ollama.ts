import axios from 'axios';

export interface OllamaModel {
  name: string;
  size: number;
  modified_at: string;
  digest: string;
}

export interface OllamaResponse {
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

export interface OllamaRequest {
  model: string;
  prompt: string;
  stream?: boolean;
  options?: {
    temperature?: number;
    top_p?: number;
    top_k?: number;
    num_predict?: number;
    stop?: string[];
    seed?: number;
  };
}

class OllamaClient {
  private baseUrl: string;
  private isOnline: boolean = false;

  constructor(baseUrl: string = 'http://localhost:11434') {
    this.baseUrl = baseUrl;
  }

  async checkConnection(): Promise<boolean> {
    try {
      await axios.get(`${this.baseUrl}/api/tags`, { timeout: 5000 });
      this.isOnline = true;
      return true;
    } catch (error) {
      this.isOnline = false;
      return false;
    }
  }

  async listModels(): Promise<OllamaModel[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/api/tags`);
      return response.data.models || [];
    } catch (error) {
      console.error('Error listing Ollama models:', error);
      return [];
    }
  }

  async generate(request: OllamaRequest): Promise<OllamaResponse> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/generate`, request, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error generating response from Ollama:', error);
      throw new Error('Failed to generate response from Ollama');
    }
  }

  async generateStream(request: OllamaRequest, onChunk: (chunk: OllamaResponse) => void): Promise<void> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/generate`, 
        { ...request, stream: true },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          responseType: 'stream',
        }
      );

      response.data.on('data', (chunk: Buffer) => {
        const lines = chunk.toString().split('\n').filter(line => line.trim());
        lines.forEach(line => {
          try {
            const data = JSON.parse(line);
            onChunk(data);
          } catch (e) {
            // Skip invalid JSON lines
          }
        });
      });
    } catch (error) {
      console.error('Error in stream generation:', error);
      throw new Error('Failed to generate stream from Ollama');
    }
  }

  async pullModel(modelName: string): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/api/pull`, { name: modelName });
    } catch (error) {
      console.error('Error pulling model:', error);
      throw new Error(`Failed to pull model ${modelName}`);
    }
  }

  async deleteModel(modelName: string): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/api/delete`, { data: { name: modelName } });
    } catch (error) {
      console.error('Error deleting model:', error);
      throw new Error(`Failed to delete model ${modelName}`);
    }
  }

  getStatus(): { isOnline: boolean; baseUrl: string } {
    return {
      isOnline: this.isOnline,
      baseUrl: this.baseUrl,
    };
  }
}

export const ollamaClient = new OllamaClient();

// Función helper para obtener el mejor modelo disponible
export async function getBestAvailableModel(): Promise<string | null> {
  const models = await ollamaClient.listModels();
  
  // Prioridad de modelos (de mejor a peor para tareas generales)
  const priorityModels = [
    'dolphin-mixtral:latest',
    'codellama:13b',
    'llama3:latest',
    'zephyr:latest',
    'deepseek-coder:6.7b-instruct'
  ];

  for (const modelName of priorityModels) {
    if (models.some(model => model.name === modelName)) {
      return modelName;
    }
  }

  // Si no encuentra ninguno de los prioritarios, devuelve el primero disponible
  return models.length > 0 ? models[0].name : null;
}

// Función helper para obtener el mejor modelo para código
export async function getBestCodingModel(): Promise<string | null> {
  const models = await ollamaClient.listModels();
  
  const codingModels = [
    'deepseek-coder:6.7b-instruct',
    'codellama:13b',
    'dolphin-mixtral:latest'
  ];

  for (const modelName of codingModels) {
    if (models.some(model => model.name === modelName)) {
      return modelName;
    }
  }

  return null;
}
