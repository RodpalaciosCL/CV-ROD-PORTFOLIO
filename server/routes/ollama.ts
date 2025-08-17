import express from 'express';
import { ollamaClient, getBestAvailableModel, getBestCodingModel, type OllamaRequest } from '../ollama.js';

const router = express.Router();

// Verificar conexión con Ollama
router.get('/status', async (req, res) => {
  try {
    const isConnected = await ollamaClient.checkConnection();
    const status = ollamaClient.getStatus();
    
    res.json({
      success: true,
      isConnected,
      ...status
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to check Ollama status'
    });
  }
});

// Listar modelos disponibles
router.get('/models', async (req, res) => {
  try {
    const models = await ollamaClient.listModels();
    res.json({
      success: true,
      models
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to list models'
    });
  }
});

// Obtener el mejor modelo disponible
router.get('/best-model', async (req, res) => {
  try {
    const model = await getBestAvailableModel();
    res.json({
      success: true,
      model
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to get best model'
    });
  }
});

// Obtener el mejor modelo para código
router.get('/best-coding-model', async (req, res) => {
  try {
    const model = await getBestCodingModel();
    res.json({
      success: true,
      model
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to get best coding model'
    });
  }
});

// Generar respuesta (no streaming)
router.post('/generate', async (req, res) => {
  try {
    const { model, prompt, options } = req.body as OllamaRequest;
    
    if (!model || !prompt) {
      return res.status(400).json({
        success: false,
        error: 'Model and prompt are required'
      });
    }

    const response = await ollamaClient.generate({
      model,
      prompt,
      options
    });

    res.json({
      success: true,
      response
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to generate response'
    });
  }
});

// Generar respuesta con streaming
router.post('/generate-stream', async (req, res) => {
  try {
    const { model, prompt, options } = req.body as OllamaRequest;
    
    if (!model || !prompt) {
      return res.status(400).json({
        success: false,
        error: 'Model and prompt are required'
      });
    }

    // Configurar headers para streaming
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    await ollamaClient.generateStream({
      model,
      prompt,
      options
    }, (chunk) => {
      // Enviar cada chunk como JSON en una línea separada
      res.write(JSON.stringify(chunk) + '\n');
      
      if (chunk.done) {
        res.end();
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to generate stream response'
    });
  }
});

// Pull (descargar) un modelo
router.post('/pull', async (req, res) => {
  try {
    const { modelName } = req.body;
    
    if (!modelName) {
      return res.status(400).json({
        success: false,
        error: 'Model name is required'
      });
    }

    await ollamaClient.pullModel(modelName);
    
    res.json({
      success: true,
      message: `Model ${modelName} pulled successfully`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to pull model'
    });
  }
});

// Eliminar un modelo
router.delete('/delete', async (req, res) => {
  try {
    const { modelName } = req.body;
    
    if (!modelName) {
      return res.status(400).json({
        success: false,
        error: 'Model name is required'
      });
    }

    await ollamaClient.deleteModel(modelName);
    
    res.json({
      success: true,
      message: `Model ${modelName} deleted successfully`
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete model'
    });
  }
});

export default router;
