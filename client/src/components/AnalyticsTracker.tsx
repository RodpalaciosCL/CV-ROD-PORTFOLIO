import { useEffect } from 'react';

const AnalyticsTracker = () => {
  useEffect(() => {
    // Función para enviar datos de tracking
    const trackVisit = async () => {
      try {
        const visitData = {
          page: window.location.pathname,
          referrer: document.referrer,
          userAgent: navigator.userAgent,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          timestamp: new Date().toISOString()
        };

        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(visitData)
        });
      } catch (error) {
        // Fail silently - no queremos que errores de tracking afecten la UX
        console.debug('Analytics tracking failed:', error);
      }
    };

    // Track initial page load
    trackVisit();

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

    // Track cuando la página se está cerrando
    const handleBeforeUnload = () => {
      // Usar sendBeacon para envío confiable al cerrar
      if (navigator.sendBeacon) {
        const visitData = {
          page: window.location.pathname,
          referrer: document.referrer,
          userAgent: navigator.userAgent,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          timestamp: new Date().toISOString(),
          isExit: true
        };
        
        navigator.sendBeacon('/api/analytics/track', JSON.stringify(visitData));
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      clearInterval(pathObserver);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Este componente no renderiza nada
  return null;
};

export default AnalyticsTracker;
