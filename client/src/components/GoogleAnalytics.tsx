import React, { useEffect } from 'react';
import { analyticsConfig } from '@/config/analytics';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GoogleAnalytics = () => {
  useEffect(() => {
    // Only initialize if analytics is enabled and we have a valid tracking ID
    if (!analyticsConfig.enabled || analyticsConfig.gaTrackingId === 'G-XXXXXXXXXX') {
      console.log('Google Analytics disabled - no valid tracking ID provided');
      return;
    }

    // Prevent duplicate initialization
    if (window.gtag) {
      console.log('Google Analytics already initialized');
      return;
    }

    console.log('Initializing Google Analytics with ID:', analyticsConfig.gaTrackingId);

    // Create the Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.gaTrackingId}`;
    document.head.appendChild(script1);

    // Configure gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${analyticsConfig.gaTrackingId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    `;
    document.head.appendChild(script2);

    // Initialize gtag function
    window.gtag = window.gtag || function() {
      (window.dataLayer = window.dataLayer || []).push(arguments);
    };

    // Track initial page view
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_referrer: document.referrer
    });

    console.log('Google Analytics initialized successfully');

    // Cleanup function
    return () => {
      try {
        if (script1.parentNode) document.head.removeChild(script1);
        if (script2.parentNode) document.head.removeChild(script2);
      } catch (error) {
        console.warn('Error cleaning up Google Analytics scripts:', error);
      }
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
