import React, { useEffect, useState } from 'react';

interface Visit {
  id: string;
  timestamp: string;
  ip: string;
  page: string;
  referrer: string;
  userAgent: string;
  screenResolution: string;
  geo: {
    country: string;
    city: string;
    org: string;
  } | null;
}

const SimpleAnalytics = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Obtener información básica
        const visitData: Visit = {
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          ip: 'Hidden', // Por privacidad en cliente
          page: window.location.pathname,
          referrer: document.referrer || 'Direct',
          userAgent: navigator.userAgent,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          geo: null
        };

        // Intentar obtener geolocalización usando servicio externo
        try {
          const geoResponse = await fetch('https://ipapi.co/json/');
          const geoData = await geoResponse.json();
          
          visitData.ip = geoData.ip || 'Unknown';
          visitData.geo = {
            country: geoData.country_name || 'Unknown',
            city: geoData.city || 'Unknown',
            org: geoData.org || 'Unknown'
          };
        } catch (error) {
          console.debug('Could not get geo data');
        }

        // Guardar en localStorage (solo para demo)
        const existingVisits = JSON.parse(localStorage.getItem('analytics-visits') || '[]');
        existingVisits.push(visitData);
        
        // Mantener solo los últimos 100 registros
        if (existingVisits.length > 100) {
          existingVisits.splice(0, existingVisits.length - 100);
        }
        
        localStorage.setItem('analytics-visits', JSON.stringify(existingVisits));
        
        // Enviar a webhook externo si existe
        if (import.meta.env.VITE_ANALYTICS_WEBHOOK) {
          fetch(import.meta.env.VITE_ANALYTICS_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(visitData)
          }).catch(console.debug);
        }

      } catch (error) {
        console.debug('Analytics tracking failed silently');
      }
    };

    trackVisit();
  }, []);

  return null;
};

export default SimpleAnalytics;
