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

const ImprovedAnalytics = () => {
  useEffect(() => {
    const trackVisit = async () => {
      try {
        // No trackear visitas a la página de analytics
        if (window.location.pathname === '/analytics') {
          return;
        }

        // Obtener información básica
        const visitData: Visit = {
          id: Date.now().toString(),
          timestamp: new Date().toISOString(),
          ip: 'Unknown',
          page: window.location.pathname === '/' ? 'Home' : window.location.pathname,
          referrer: document.referrer || 'Direct',
          userAgent: navigator.userAgent,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          geo: null
        };

        // Detectar tipo de dispositivo primero
        const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
        
        // Agregar información de dispositivo
        const browserType = navigator.userAgent.includes('Chrome') 
          ? 'Chrome' 
          : navigator.userAgent.includes('Safari') 
            ? 'Safari'
            : navigator.userAgent.includes('Firefox')
              ? 'Firefox'
              : 'Browser';
              
        const deviceInfo = isMobile ? '📱' : '🖥️';
        visitData.userAgent = `${deviceInfo} ${browserType}`;

        // Intentar obtener geolocalización
        try {
          const geoResponse = await fetch('https://ipapi.co/json/');
          if (geoResponse.ok) {
            const geoData = await geoResponse.json();
            
            if (geoData && geoData.ip) {
              visitData.ip = geoData.ip;
              visitData.geo = {
                country: geoData.country_name || 'Unknown',
                city: geoData.city || 'Unknown',
                org: geoData.org || 'Unknown'
              };
            }
          }
        } catch (error) {
          console.debug('Could not get geo data');
          
          // Intentar con otro servicio de respaldo
          try {
            const fallbackResponse = await fetch('https://extreme-ip-lookup.com/json/');
            if (fallbackResponse.ok) {
              const fallbackData = await fallbackResponse.json();
              if (fallbackData && fallbackData.query) {
                visitData.ip = fallbackData.query;
                visitData.geo = {
                  country: fallbackData.country || 'Unknown',
                  city: fallbackData.city || 'Unknown',
                  org: fallbackData.isp || 'Unknown'
                };
              }
            }
          } catch (fallbackError) {
            // Ignorar silenciosamente
          }
        }

        // Enviar a servicio centralizado (webhook gratuito)
        try {
          await fetch('https://hook.eu2.make.com/yq4w8k75bxlhd5n2njvjcfhhm5r0lg0x', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(visitData),
          });
          console.debug('[Analytics] Enviado a servicio centralizado');
        } catch (webhookError) {
          console.debug('[Analytics] Error enviando a servicio central:', webhookError);
        }
        
        // También guardar localmente como respaldo
        if (!localStorage.getItem('analytics-visits')) {
          localStorage.setItem('analytics-visits', '[]');
        }
        
        const existingVisits = JSON.parse(localStorage.getItem('analytics-visits') || '[]');
        
        // Filtrar posibles entradas duplicadas (si recarga rápido en la misma página)
        const isDuplicate = existingVisits.some((visit: Visit) => {
          const timeDiff = new Date(visitData.timestamp).getTime() - new Date(visit.timestamp).getTime();
          return visit.page === visitData.page && Math.abs(timeDiff) < 5000; // 5 segundos
        });
        
        if (!isDuplicate) {
          existingVisits.push(visitData);
          
          // Mantener solo los últimos 200 registros
          if (existingVisits.length > 200) {
            existingVisits.splice(0, existingVisits.length - 200);
          }
          
          localStorage.setItem('analytics-visits', JSON.stringify(existingVisits));
        }
        
        // Debug log
        console.debug('[Analytics]', {
          path: visitData.page,
          device: isMobile ? 'Mobile' : 'Desktop',
          ip: visitData.ip,
          geo: visitData.geo
        });

      } catch (error) {
        console.debug('[Analytics] Error:', error);
        
        // Siempre registrar visita incluso con error
        try {
          const basicVisit: Visit = {
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            ip: 'Unknown',
            page: window.location.pathname === '/' ? 'Home' : window.location.pathname,
            referrer: document.referrer || 'Direct',
            userAgent: navigator.userAgent.includes('Mobile') ? '📱 Mobile' : '🖥️ Desktop',
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            geo: null
          };
          
          const existingVisits = JSON.parse(localStorage.getItem('analytics-visits') || '[]');
          existingVisits.push(basicVisit);
          localStorage.setItem('analytics-visits', JSON.stringify(existingVisits));
        } catch (fallbackError) {
          // Ignorar silenciosamente
        }
      }
    };

    // Track initial page load con un pequeño retraso
    const timer = setTimeout(trackVisit, 300);
    
    // Track page changes for SPAs
    let currentPath = window.location.pathname;
    const checkPathChange = () => {
      if (window.location.pathname !== currentPath) {
        currentPath = window.location.pathname;
        trackVisit();
      }
    };

    // Observar cambios de página cada 1 segundo
    const pathObserver = setInterval(checkPathChange, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(pathObserver);
    };
  }, []);

  return null;
};

export default ImprovedAnalytics;
