import fs from 'fs';

// Leer el archivo de visitas
const visitsData = JSON.parse(fs.readFileSync('visits.json', 'utf8'));

// Identificar patrones de tus visitas
const ownerPatterns = {
  ips: ['127.0.0.1'],
  screenResolutions: ['1710x1107', '1920x1080'],
  userAgents: ['🖥️ Chrome'],
  geo: {
    country: 'Local',
    city: 'Local Dev',
    org: 'Local Development'
  }
};

// Función para identificar si una visita es del propietario
function isOwnerVisit(visit) {
  return (
    ownerPatterns.ips.includes(visit.ip) ||
    ownerPatterns.screenResolutions.includes(visit.screenResolution) ||
    ownerPatterns.userAgents.includes(visit.userAgent) ||
    (visit.geo && visit.geo.country === ownerPatterns.geo.country)
  );
}

// Filtrar visitas
const ownerVisits = visitsData.filter(isOwnerVisit);
const otherVisits = visitsData.filter(visit => !isOwnerVisit(visit));

// Estadísticas
console.log('📊 ANÁLISIS DE VISITAS');
console.log('=====================\n');

console.log(`🔍 Total de visitas: ${visitsData.length}`);
console.log(`👤 Tus visitas: ${ownerVisits.length}`);
console.log(`👥 Visitas de otros: ${otherVisits.length}\n`);

if (otherVisits.length > 0) {
  console.log('🎉 ¡HAY VISITAS DE OTRAS PERSONAS!\n');
  
  console.log('📋 Detalles de visitas externas:');
  console.log('================================');
  
  otherVisits.forEach((visit, index) => {
    console.log(`\n${index + 1}. Visita ${visit.id}`);
    console.log(`   📅 Fecha: ${new Date(visit.timestamp).toLocaleString('es-CL')}`);
    console.log(`   🌐 IP: ${visit.ip}`);
    console.log(`   📱 Dispositivo: ${visit.userAgent}`);
    console.log(`   🖥️ Resolución: ${visit.screenResolution}`);
    console.log(`   📍 País: ${visit.geo?.country || 'Desconocido'}`);
    console.log(`   🏢 ISP: ${visit.geo?.org || 'Desconocido'}`);
    console.log(`   📄 Página: ${visit.page}`);
    console.log(`   🔗 Referrer: ${visit.referrer}`);
  });
  
  // Análisis de patrones
  const uniqueIPs = [...new Set(otherVisits.map(v => v.ip))];
  const uniqueCountries = [...new Set(otherVisits.map(v => v.geo?.country).filter(Boolean))];
  const uniqueOrgs = [...new Set(otherVisits.map(v => v.geo?.org).filter(Boolean))];
  
  console.log('\n📈 Resumen de visitas externas:');
  console.log('==============================');
  console.log(`🌍 Países únicos: ${uniqueCountries.length} (${uniqueCountries.join(', ')})`);
  console.log(`🏢 ISPs únicos: ${uniqueOrgs.length} (${uniqueOrgs.join(', ')})`);
  console.log(`🌐 IPs únicas: ${uniqueIPs.length}`);
  
} else {
  console.log('😔 No hay visitas de otras personas aún.');
  console.log('💡 Esto puede significar:');
  console.log('   - El sitio aún no está desplegado en producción');
  console.log('   - Los enlaces no han sido compartidos');
  console.log('   - Las personas no han visitado el sitio');
  console.log('   - El tracking no está funcionando en producción');
}

console.log('\n🔧 Patrones identificados como tuyos:');
console.log('===================================');
console.log(`IPs: ${ownerPatterns.ips.join(', ')}`);
console.log(`Resoluciones: ${ownerPatterns.screenResolutions.join(', ')}`);
console.log(`User Agents: ${ownerPatterns.userAgents.join(', ')}`);
console.log(`Geolocalización: ${ownerPatterns.geo.country}, ${ownerPatterns.geo.city}`);

// Guardar visitas filtradas
if (otherVisits.length > 0) {
  fs.writeFileSync('external-visits.json', JSON.stringify(otherVisits, null, 2));
  console.log('\n💾 Visitas externas guardadas en: external-visits.json');
}
