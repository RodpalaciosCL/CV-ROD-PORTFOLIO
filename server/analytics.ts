import express, { type Request, type Response } from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

// Archivo donde se guardarán los datos
const ANALYTICS_FILE = path.join(__dirname, 'analytics-data.json');

// Tu IP y información para filtrar (puedes agregar más identificadores tuyos)
const OWNER_IDENTIFIERS = {
  ips: ['127.0.0.1', '::1'], // Se actualizará automáticamente con tu IP real
  userAgents: [], // Se puede expandir si necesitas
  referrers: ['localhost', '127.0.0.1'] // Referrers locales
};

// Función para agregar IPs del owner automáticamente
function addOwnerIP(ip) {
  if (!OWNER_IDENTIFIERS.ips.includes(ip) && !ip.startsWith('192.168.') && !ip.startsWith('10.')) {
    console.log(`Adding owner IP: ${ip}`);
    OWNER_IDENTIFIERS.ips.push(ip);
  }
}

// Función para obtener información geográfica de IP
async function getGeoInfo(ip) {
  try {
    // Si es IP local, retornar info local
    if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
      return {
        country: 'Local',
        city: 'Desarrollo Local',
        region: 'Local',
        org: 'Local Development'
      };
    }

    // Usar servicio gratuito para geolocalización
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    
    return {
      country: data.country || 'Unknown',
      city: data.city || 'Unknown',
      region: data.regionName || 'Unknown',
      org: data.org || 'Unknown',
      timezone: data.timezone || 'Unknown'
    };
  } catch (error) {
    return {
      country: 'Unknown',
      city: 'Unknown',
      region: 'Unknown',
      org: 'Unknown'
    };
  }
}

// Función para detectar si es de EY o empresas relacionadas
function detectCompany(org, email, referrer, userAgent) {
  const eyIndicators = [
    'ernst', 'young', 'ey.com', 'ey.net',
    'deloitte', 'pwc', 'pricewaterhousecoopers', 'kpmg',
    'mckinsey', 'bcg', 'bain'
  ];
  
  const miningIndicators = [
    'codelco', 'bhp', 'anglo', 'antofagasta', 'escondida',
    'collahuasi', 'spence', 'centinela', 'los pelambres',
    'minera', 'mining', 'copper', 'cobre'
  ];

  const orgLower = (org || '').toLowerCase();
  const emailLower = (email || '').toLowerCase();
  const referrerLower = (referrer || '').toLowerCase();

  if (eyIndicators.some(indicator => 
    orgLower.includes(indicator) || 
    emailLower.includes(indicator) || 
    referrerLower.includes(indicator)
  )) {
    return 'EY / Big Four';
  }

  if (miningIndicators.some(indicator => 
    orgLower.includes(indicator) || 
    emailLower.includes(indicator) || 
    referrerLower.includes(indicator)
  )) {
    return 'Mining Company';
  }

  return 'Other';
}

// Función para determinar si es el owner
function isOwner(ip, userAgent, referrer) {
  return OWNER_IDENTIFIERS.ips.includes(ip) ||
         OWNER_IDENTIFIERS.referrers.some(ref => referrer && referrer.includes(ref));
}

// Endpoint para trackear visitas
router.post('/track', async (req, res) => {
  try {
    const {
      page,
      referrer,
      userAgent,
      screenResolution,
      timestamp
    } = req.body;

    // Obtener IP real del cliente
    const ip = req.headers['x-forwarded-for'] || 
               req.headers['x-real-ip'] || 
               req.connection.remoteAddress || 
               req.socket.remoteAddress || 
               req.ip || 
               '127.0.0.1';
    
    // Si viene como string con múltiples IPs, tomar la primera
    const clientIP = Array.isArray(ip) ? ip[0] : ip.split(',')[0].trim();
    
    console.log(`📊 Tracking visit from IP: ${clientIP}, Page: ${page}, UA: ${userAgent?.substring(0, 50)}...`);
    
    // Debug info
    console.log('Headers:', {
      'x-forwarded-for': req.headers['x-forwarded-for'],
      'x-real-ip': req.headers['x-real-ip'],
      'connection': req.connection.remoteAddress,
      'user-agent': userAgent?.substring(0, 100)
    });
    
    // Obtener información geográfica
    const geoInfo = await getGeoInfo(clientIP);
    
    // Determinar si es el owner
    const isOwnerVisit = isOwner(clientIP, userAgent, referrer);
    
    // Detectar tipo de empresa
    const companyType = detectCompany(geoInfo.org, '', referrer, userAgent);
    
    const visitData = {
      id: Date.now() + Math.random(),
      timestamp: timestamp || new Date().toISOString(),
      ip: clientIP,
      page: page || '/',
      referrer: referrer || 'Direct',
      userAgent: userAgent || 'Unknown',
      screenResolution: screenResolution || 'Unknown',
      isOwner: isOwnerVisit,
      companyType: companyType,
      geo: geoInfo,
      sessionDuration: 0 // Se puede expandir para trackear tiempo en página
    };

    // Leer datos existentes
    let analyticsData = [];
    try {
      const data = await fs.readFile(ANALYTICS_FILE, 'utf8');
      analyticsData = JSON.parse(data);
    } catch (error) {
      // Archivo no existe, crear nuevo array
      analyticsData = [];
    }

    // Agregar nueva visita
    analyticsData.push(visitData);

    // Guardar datos
    await fs.writeFile(ANALYTICS_FILE, JSON.stringify(analyticsData, null, 2));

    res.json({ success: true, tracked: !isOwnerVisit });
  } catch (error) {
    console.error('Error tracking visit:', error);
    res.status(500).json({ error: 'Failed to track visit' });
  }
});

// Endpoint para obtener datos de analytics
router.get('/data', async (req, res) => {
  try {
    const { includeOwner = 'false', days = '30' } = req.query;
    
    let analyticsData = [];
    try {
      const data = await fs.readFile(ANALYTICS_FILE, 'utf8');
      analyticsData = JSON.parse(data);
    } catch (error) {
      analyticsData = [];
    }

    // Filtrar por fecha
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - parseInt(days));
    
    let filteredData = analyticsData.filter(visit => 
      new Date(visit.timestamp) > daysAgo
    );

    // Filtrar owner si no se incluye
    if (includeOwner === 'false') {
      filteredData = filteredData.filter(visit => !visit.isOwner);
    }

    // Generar estadísticas
    const stats = {
      totalVisits: filteredData.length,
      uniqueIPs: [...new Set(filteredData.map(v => v.ip))].length,
      eyVisits: filteredData.filter(v => v.companyType === 'EY / Big Four').length,
      miningVisits: filteredData.filter(v => v.companyType === 'Mining Company').length,
      countries: [...new Set(filteredData.map(v => v.geo.country))],
      topPages: Object.entries(
        filteredData.reduce((acc, v) => {
          acc[v.page] = (acc[v.page] || 0) + 1;
          return acc;
        }, {})
      ).sort(([,a], [,b]) => b - a).slice(0, 10),
      recentVisits: filteredData
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
        .slice(0, 20),
      hourlyDistribution: filteredData.reduce((acc, v) => {
        const hour = new Date(v.timestamp).getHours();
        acc[hour] = (acc[hour] || 0) + 1;
        return acc;
      }, {}),
      companyTypes: Object.entries(
        filteredData.reduce((acc, v) => {
          acc[v.companyType] = (acc[v.companyType] || 0) + 1;
          return acc;
        }, {})
      )
    };

    res.json({
      stats,
      visits: filteredData
    });
  } catch (error) {
    console.error('Error getting analytics data:', error);
    res.status(500).json({ error: 'Failed to get analytics data' });
  }
});

// Endpoint para marcar tu IP como owner
router.post('/mark-owner', async (req, res) => {
  try {
    const ip = req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'];
    addOwnerIP(ip);
    res.json({ success: true, ip, ownerIPs: OWNER_IDENTIFIERS.ips });
  } catch (error) {
    console.error('Error marking owner IP:', error);
    res.status(500).json({ error: 'Failed to mark owner IP' });
  }
});

// Endpoint para limpiar datos antiguos
router.delete('/cleanup', async (req, res) => {
  try {
    const { days = '90' } = req.query;
    
    let analyticsData = [];
    try {
      const data = await fs.readFile(ANALYTICS_FILE, 'utf8');
      analyticsData = JSON.parse(data);
    } catch (error) {
      return res.json({ success: true, removed: 0 });
    }

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - parseInt(days));
    
    const beforeCount = analyticsData.length;
    analyticsData = analyticsData.filter(visit => 
      new Date(visit.timestamp) > cutoffDate
    );
    const afterCount = analyticsData.length;

    await fs.writeFile(ANALYTICS_FILE, JSON.stringify(analyticsData, null, 2));

    res.json({ 
      success: true, 
      removed: beforeCount - afterCount,
      remaining: afterCount 
    });
  } catch (error) {
    console.error('Error cleaning up data:', error);
    res.status(500).json({ error: 'Failed to cleanup data' });
  }
});

const CREDENTIALS_PATH = path.join(process.cwd(), 'server', 'analytics-credentials.json');
const PROPERTY_ID = '501346434';

// Inicializar cliente de Analytics
const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: CREDENTIALS_PATH,
});

export interface AnalyticsData {
  totalUsers: number;
  totalSessions: number;
  totalPageViews: number;
  averageSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  topSources: Array<{ source: string; sessions: number }>;
  deviceCategories: Array<{ device: string; users: number }>;
  recentVisits: Array<{ date: string; users: number }>;
}

export async function getAnalyticsData(days: number = 30): Promise<AnalyticsData> {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: `${days}daysAgo`,
          endDate: 'today',
        },
      ],
      metrics: [
        { name: 'totalUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
      ],
      dimensions: [
        { name: 'date' },
        { name: 'pagePath' },
        { name: 'sessionSource' },
        { name: 'deviceCategory' },
      ],
      limit: 1000,
    });

    // Procesar datos
    const totalUsers = parseInt(response.rows?.[0]?.metricValues?.[0]?.value || '0');
    const totalSessions = parseInt(response.rows?.[0]?.metricValues?.[1]?.value || '0');
    const totalPageViews = parseInt(response.rows?.[0]?.metricValues?.[2]?.value || '0');
    const averageSessionDuration = parseFloat(response.rows?.[0]?.metricValues?.[3]?.value || '0');

    // Procesar páginas más vistas
    const pageViews = new Map<string, number>();
    const sources = new Map<string, number>();
    const devices = new Map<string, number>();
    const dailyVisits = new Map<string, number>();

    response.rows?.forEach((row) => {
      const page = row.dimensionValues?.[1]?.value || '';
      const source = row.dimensionValues?.[2]?.value || '';
      const device = row.dimensionValues?.[3]?.value || '';
      const date = row.dimensionValues?.[0]?.value || '';
      const views = parseInt(row.metricValues?.[2]?.value || '0');
      const users = parseInt(row.metricValues?.[0]?.value || '0');

      if (page) {
        pageViews.set(page, (pageViews.get(page) || 0) + views);
      }
      if (source) {
        sources.set(source, (sources.get(source) || 0) + users);
      }
      if (device) {
        devices.set(device, (devices.get(device) || 0) + users);
      }
      if (date) {
        dailyVisits.set(date, (dailyVisits.get(date) || 0) + users);
      }
    });

    // Convertir a arrays ordenados
    const topPages = Array.from(pageViews.entries())
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    const topSources = Array.from(sources.entries())
      .map(([source, sessions]) => ({ source, sessions }))
      .sort((a, b) => b.sessions - a.sessions)
      .slice(0, 10);

    const deviceCategories = Array.from(devices.entries())
      .map(([device, users]) => ({ device, users }))
      .sort((a, b) => b.users - a.users);

    const recentVisits = Array.from(dailyVisits.entries())
      .map(([date, users]) => ({ date, users }))
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-7); // Últimos 7 días

    return {
      totalUsers,
      totalSessions,
      totalPageViews,
      averageSessionDuration,
      topPages,
      topSources,
      deviceCategories,
      recentVisits,
    };
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    throw error;
  }
}

export async function getRealTimeData(): Promise<{ activeUsers: number }> {
  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${PROPERTY_ID}`,
      metrics: [{ name: 'activeUsers' }],
    });

    const activeUsers = parseInt(response.rows?.[0]?.metricValues?.[0]?.value || '0');
    return { activeUsers };
  } catch (error) {
    console.error('Error fetching real-time data:', error);
    return { activeUsers: 0 };
  }
}

export default router;
