import { promises as fs } from 'fs';
import path from 'path';

const analyticsFile = path.join(process.cwd(), 'visits.json');

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

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
}
