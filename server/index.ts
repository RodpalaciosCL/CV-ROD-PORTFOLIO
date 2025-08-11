import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
// Configurar para obtener IP real del cliente
app.set('trust proxy', true);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple visit tracking
const logVisit = async (req: any) => {
  try {
    const ip = req.ip || req.headers['x-forwarded-for'] || req.connection?.remoteAddress || 'unknown';
    const realIP = Array.isArray(ip) ? ip[0] : ip.toString().split(',')[0].trim();
    
    const visit = {
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString('es-CL'),
      time: new Date().toLocaleTimeString('es-CL'),
      ip: realIP,
      page: req.path,
      userAgent: req.headers['user-agent'] || 'unknown',
      referrer: req.headers.referer || 'direct'
    };
    
    console.log(`📊 VISIT: ${visit.date} ${visit.time} | ${realIP} | ${req.path} | ${req.headers['user-agent']?.substring(0, 50)}`);
  } catch (error) {
    console.error('Error logging visit:', error);
  }
};

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  // Track visits to main pages
  if (!path.startsWith('/assets') && !path.startsWith('/api') && req.method === 'GET') {
    logVisit(req);
  }

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Simple test endpoint BEFORE everything else
app.get('/api/test', (req, res) => {
  console.log('TEST endpoint hit!');
  res.json({ message: 'API is working!', timestamp: new Date().toISOString() });
});

// Simple visits endpoint BEFORE everything else  
app.get('/api/visits', (req, res) => {
  console.log('VISITS endpoint hit!');
  res.json({ 
    message: 'Visits endpoint working!',
    total: 0,
    recent: [],
    timestamp: new Date().toISOString()
  });
});

console.log('🔧 Direct API routes registered');

(async () => {
  // Register API routes FIRST
  const server = await registerRoutes(app);
  
  console.log('✅ API routes registered');

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    console.log('📁 Setting up static file serving...');
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 3000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '3000', 10);
  server.listen(port, '0.0.0.0', () => {
    log(`serving on port ${port}`);
  });
})();
