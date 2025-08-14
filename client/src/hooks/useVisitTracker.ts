import { useEffect } from 'react';

export const useVisitTracker = () => {
  useEffect(() => {
    // Track visit on page load
    // TEMPORALMENTE DESHABILITADO - Solo Google Analytics
    /*
    const trackVisit = async () => {
      try {
        const response = await fetch('/api/visits', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: window.location.pathname,
            referrer: document.referrer,
            timestamp: new Date().toISOString()
          })
        });
        
        if (response.ok) {
          console.log('📊 Visit tracked');
        }
      } catch (error) {
        console.log('Failed to track visit:', error);
      }
    };

    trackVisit();
    */
  }, []);
};
