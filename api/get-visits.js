// API para obtener visitas registradas
const visits = []; // Array en memoria para almacenar visitas

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Para demo, crear algunas visitas de ejemplo
    const sampleVisits = [
      {
        id: Date.now() - 3600000,
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        ip: '186.67.89.123',
        page: 'Home',
        referrer: 'Direct',
        userAgent: '📱 Chrome',
        screenResolution: '414x896',
        geo: {
          country: 'Chile',
          city: 'Santiago',
          org: 'WOM S.A.'
        }
      },
      {
        id: Date.now() - 7200000,
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        ip: '201.215.123.45',
        page: 'Home',
        referrer: 'https://www.google.com',
        userAgent: '🖥️ Chrome',
        screenResolution: '1920x1080',
        geo: {
          country: 'Chile',
          city: 'Valparaíso',
          org: 'Movistar Chile S.A.'
        }
      }
    ];
    
    // Simular que tenemos visitas reales
    const allVisits = [...sampleVisits, ...visits];
    
    res.status(200).json({
      success: true,
      visits: allVisits,
      total: allVisits.length
    });
    
  } catch (error) {
    console.error('Error getting visits:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Error interno del servidor' 
    });
  }
}
