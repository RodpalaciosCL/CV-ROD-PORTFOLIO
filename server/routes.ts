import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { promises as fs } from "fs";
import path from "path";
import { getAnalyticsData, getRealTimeData, getDetailedAnalyticsData, getLocationData } from "./analytics-client.js";


const analyticsFile = path.join(process.cwd(), 'visits.json');

// Función para registrar visitas
async function logVisit(req: any) {
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
    
    let visits = [];
    try {
      const data = await fs.readFile(analyticsFile, 'utf8');
      visits = JSON.parse(data);
    } catch (error) {
      visits = [];
    }
    
    visits.push(visit);
    await fs.writeFile(analyticsFile, JSON.stringify(visits, null, 2));
    
    console.log(`📊 VISIT: ${visit.date} ${visit.time} | ${realIP} | ${req.path}`);
  } catch (error) {
    console.error('Error logging visit:', error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  console.log('🚀 Registering routes...');
  
  // Super simple visits endpoint
  app.get('/api/visits', async (req, res) => {
    try {
      console.log('Visits endpoint called');
      
      let visits = [];
      try {
        const data = await fs.readFile(analyticsFile, 'utf8');
        visits = JSON.parse(data);
      } catch (error) {
        visits = [];
      }
      
      console.log(`Returning ${visits.length} visits`);
      
      res.json({
        message: 'Visit tracking is working!',
        timestamp: new Date().toISOString(),
        total: visits.length,
        recent: visits.slice(-10).reverse() // Últimas 10
      });
    } catch (error) {
      console.error('Error in visits endpoint:', error);
      res.status(500).json({ error: 'Failed to get visits' });
    }
  });
  
  console.log('✅ Simple /api/visits endpoint registered');
  
  // Google Analytics endpoints
  app.get('/api/analytics/ga', async (req, res) => {
    try {
      const days = parseInt(req.query.days as string) || 30;
      const data = await getAnalyticsData(days);
      res.json({
        success: true,
        data,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error fetching GA data:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch analytics data',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
  
  app.get('/api/analytics/realtime', async (req, res) => {
    try {
      const data = await getRealTimeData();
      res.json({
        success: true,
        data,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error fetching real-time data:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch real-time data',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
  
  app.get('/api/analytics/locations', async (req, res) => {
    try {
      const days = parseInt(req.query.days as string) || 30;
      const data = await getLocationData(days);
      res.json({
        success: true,
        data,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error fetching location data:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch location data',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
  
  console.log('✅ Google Analytics endpoints registered');
  
  app.get('/api/analytics/detailed', async (req, res) => {
    try {
      const days = parseInt(req.query.days as string) || 30;
      const data = await getDetailedAnalyticsData(days);
      res.json({
        success: true,
        data,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error fetching detailed GA data:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Failed to fetch detailed analytics data',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
  
  // Track visits
  app.post('/api/analytics/track', async (req, res) => {
    try {
      console.log('🔍 Analytics track request received:', req.body);
      const { page, referrer, userAgent, screenResolution, timestamp } = req.body;
      const clientIP = req.ip || req.headers['x-forwarded-for'] || req.connection?.remoteAddress || '127.0.0.1';
      const realIP = Array.isArray(clientIP) ? clientIP[0] : clientIP.toString().split(',')[0].trim();
      
      console.log(`📊 Tracking visit: ${realIP} -> ${page}`, {
        ip: realIP,
        userAgent: userAgent?.substring(0, 50),
        referrer,
        page
      });
      
      // Obtener geolocalización real por IP (si no es local)
      let geoData = { country: 'Unknown', city: 'Unknown', org: 'Unknown', timezone: 'Unknown' };
      
      if (!realIP.includes('127.0.0.1') && !realIP.includes('localhost') && !realIP.startsWith('192.168.')) {
        try {
          const geoResponse = await fetch(`http://ip-api.com/json/${realIP}`);
          const geoResult = await geoResponse.json();
          geoData = {
            country: geoResult.country || 'Unknown',
            city: geoResult.city || 'Unknown', 
            org: geoResult.org || geoResult.isp || 'Unknown',
            timezone: geoResult.timezone || 'Unknown'
          };
        } catch (error) {
          console.log('Could not get geo data');
        }
      } else {
        geoData = { country: 'Local', city: 'Local Dev', org: 'Local Development', timezone: 'Local' };
      }
      
      const visitData = {
        id: Date.now() + Math.random(),
        timestamp: timestamp || new Date().toISOString(),
        ip: realIP,
        page: page || '/',
        referrer: referrer || 'Direct',
        userAgent: userAgent || 'Unknown',
        screenResolution: screenResolution || 'Unknown',
        isOwner: realIP.includes('127.0.0.1') || realIP.includes('localhost'),
        geo: geoData
      };
      
      let analyticsData = [];
      try {
        const data = await fs.readFile(analyticsFile, 'utf8');
        analyticsData = JSON.parse(data);
      } catch (error) {
        analyticsData = [];
      }
      
      analyticsData.push(visitData);
      await fs.writeFile(analyticsFile, JSON.stringify(analyticsData, null, 2));
      
      res.json({ success: true, tracked: true });
    } catch (error) {
      console.error('Error tracking:', error);
      res.status(500).json({ error: 'Failed to track' });
    }
  });
  
  // Test endpoint to debug analytics
  app.get('/api/analytics/test', async (req, res) => {
    try {
      const clientIP = req.ip || req.headers['x-forwarded-for'] || req.connection?.remoteAddress || '127.0.0.1';
      const realIP = Array.isArray(clientIP) ? clientIP[0] : clientIP.toString().split(',')[0].trim();
      
      let analyticsData = [];
      try {
        const data = await fs.readFile(analyticsFile, 'utf8');
        analyticsData = JSON.parse(data);
      } catch (error) {
        console.log('📁 Analytics file does not exist or is empty');
      }
      
      res.json({
        success: true,
        debug: {
          analyticsFile,
          fileExists: await fs.access(analyticsFile).then(() => true).catch(() => false),
          dataCount: analyticsData.length,
          clientIP: realIP,
          headers: req.headers,
          lastEntries: analyticsData.slice(-3)
        }
      });
    } catch (error) {
      console.error('Debug error:', error);
      res.status(500).json({ error: error.message });
    }
  });
  


  const httpServer = createServer(app);

  return httpServer;
}

