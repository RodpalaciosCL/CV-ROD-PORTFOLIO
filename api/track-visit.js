// API para trackear visitas - funciona en Vercel
export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { page, referrer, userAgent, screenResolution } = req.body;
    
    // Obtener IP real del visitante
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(',')[0] : req.connection.remoteAddress || 'Unknown';
    
    // Obtener geolocalización desde IP
    let geo = { country: 'Unknown', city: 'Unknown', org: 'Unknown' };
    
    try {
      if (ip !== 'Unknown' && !ip.includes('127.0.0.1')) {
        const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=country,regionName,city,org,status`);
        const geoData = await geoResponse.json();
        
        if (geoData.status === 'success') {
          geo = {
            country: geoData.country || 'Unknown',
            city: geoData.city || 'Unknown', 
            org: geoData.org || 'Unknown'
          };
        }
      }
    } catch (geoError) {
      console.log('Geo error:', geoError);
    }
    
    // Crear registro de visita
    const visit = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      ip: ip,
      page: page,
      referrer: referrer,
      userAgent: userAgent,
      screenResolution: screenResolution,
      geo: geo
    };
    
    // Enviar a un servicio externo simple (httpbin para testing)
    try {
      await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visit)
      });
    } catch (e) {
      // No importa si falla
    }
    
    console.log('📊 NUEVA VISITA:', {
      timestamp: visit.timestamp,
      ip: visit.ip,
      page: visit.page,
      location: `${geo.city}, ${geo.country}`,
      device: visit.userAgent
    });
    
    res.status(200).json({ 
      success: true, 
      visit: visit,
      message: 'Visita registrada correctamente' 
    });
    
  } catch (error) {
    console.error('Error tracking visit:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Error interno del servidor' 
    });
  }
}
