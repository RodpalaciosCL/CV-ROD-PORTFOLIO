import React from 'react';
import OllamaChat from '../components/OllamaChat';

export default function OllamaPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Local AI Chat</h1>
          <p className="text-muted-foreground">
            Chat with your local AI models using Ollama. No internet connection required!
          </p>
        </div>
        <OllamaChat />
      </div>
    </div>
  );
}
