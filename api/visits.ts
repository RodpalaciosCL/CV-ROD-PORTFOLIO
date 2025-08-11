import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

const visitsFile = '/tmp/visits.json';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    console.log('🔵 Visits API called');
    
    if (req.method === 'GET') {
      // Get visits
      let visits = [];
      try {
        const data = fs.readFileSync(visitsFile, 'utf8');
        visits = JSON.parse(data);
      } catch (error) {
        visits = [];
      }

      console.log(`Returning ${visits.length} visits`);
      
      return res.json({
        success: true,
        total: visits.length,
        recent: visits.slice(-10).reverse(),
        timestamp: new Date().toISOString()
      });
    }
    
    if (req.method === 'POST') {
      // Log a visit
      const ip = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';
      const realIP = Array.isArray(ip) ? ip[0] : ip.toString().split(',')[0].trim();
      
      const visit = {
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('es-CL'),
        time: new Date().toLocaleTimeString('es-CL'),
        ip: realIP,
        page: req.body?.page || '/',
        userAgent: req.headers['user-agent'] || 'unknown',
        referrer: req.headers.referer || 'direct'
      };
      
      let visits = [];
      try {
        const data = fs.readFileSync(visitsFile, 'utf8');
        visits = JSON.parse(data);
      } catch (error) {
        visits = [];
      }
      
      visits.push(visit);
      fs.writeFileSync(visitsFile, JSON.stringify(visits, null, 2));
      
      console.log(`📊 VISIT LOGGED: ${visit.date} ${visit.time} | ${realIP} | ${visit.page}`);
      
      return res.json({ success: true, visit });
    }
    
    return res.status(405).json({ error: 'Method not allowed' });
    
  } catch (error) {
    console.error('Error in visits API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
