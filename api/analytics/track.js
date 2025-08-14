import { promises as fs } from 'fs';
import path from 'path';

const analyticsFile = path.join(process.cwd(), 'visits.json');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    console.log('🔍 Analytics track request received:', req.body);
    const { page, referrer, userAgent, screenResolution, timestamp } = req.body;
    const clientIP = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.connection?.remoteAddress || '127.0.0.1';
    const realIP = Array.isArray(clientIP) ? clientIP[0] : clientIP.toString().split(',')[0].trim();
    
    console.log(`📊 Tracking visit: ${realIP} -> ${page}`, {
      ip: realIP,
      userAgent: userAgent?.substring(0, 50),
      referrer,
      page
    });
    
    // Get geo data for non-local IPs
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
}
