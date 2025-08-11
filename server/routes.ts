import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { promises as fs } from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Analytics endpoints
  const analyticsFile = path.join(process.cwd(), 'analytics-data.json');
  
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
  
  // Delete/Clear analytics data
  app.delete('/api/analytics/clear', async (req, res) => {
    try {
      await fs.writeFile(analyticsFile, JSON.stringify([], null, 2));
      console.log('🗑️ Analytics data cleared');
      res.json({ success: true, message: 'Analytics data cleared' });
    } catch (error) {
      console.error('Error clearing analytics:', error);
      res.status(500).json({ error: 'Failed to clear analytics' });
    }
  });
  
  // Get analytics data
  app.get('/api/analytics/data', async (req, res) => {
    try {
      const { includeOwner = 'true', days = '7' } = req.query;
      
      let analyticsData = [];
      try {
        const data = await fs.readFile(analyticsFile, 'utf8');
        analyticsData = JSON.parse(data);
      } catch (error) {
        analyticsData = [];
      }
      
      const daysAgo = new Date();
      daysAgo.setDate(daysAgo.getDate() - parseInt(days as string));
      
      let filteredData = analyticsData.filter((visit: any) => 
        new Date(visit.timestamp) > daysAgo
      );
      
      if (includeOwner === 'false') {
        filteredData = filteredData.filter((visit: any) => !visit.isOwner);
      }
      
      const stats = {
        totalVisits: filteredData.length,
        uniqueIPs: [...new Set(filteredData.map((v: any) => v.ip))].length,
        eyVisits: 0,
        miningVisits: 0,
        countries: [...new Set(filteredData.map((v: any) => v.geo?.country || 'Unknown'))],
        topPages: Object.entries(
          filteredData.reduce((acc: any, v: any) => {
            acc[v.page] = (acc[v.page] || 0) + 1;
            return acc;
          }, {})
        ).sort(([,a], [,b]) => (b as number) - (a as number)).slice(0, 10),
        recentVisits: filteredData
          .sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
          .slice(0, 20),
        companyTypes: [['Other', filteredData.length]]
      };
      
      res.json({ stats, visits: filteredData });
    } catch (error) {
      console.error('Error getting analytics:', error);
      res.status(500).json({ error: 'Failed to get analytics' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

