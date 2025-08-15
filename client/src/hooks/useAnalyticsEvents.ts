import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const useAnalyticsEvents = () => {
  useEffect(() => {
    // Track navigation menu clicks
    const trackMenuClick = (section: string) => {
      if (window.gtag) {
        window.gtag('event', 'menu_click', {
          event_category: 'Navigation',
          event_label: section,
          value: 1
        });
        console.log(`📊 Menu click tracked: ${section}`);
      }
    };

    // Track contact button clicks
    const trackContactClick = (method: string) => {
      if (window.gtag) {
        window.gtag('event', 'contact_click', {
          event_category: 'Contact',
          event_label: method,
          value: 1
        });
        console.log(`📊 Contact click tracked: ${method}`);
      }
    };

    // Track language changes
    const trackLanguageChange = (language: string) => {
      if (window.gtag) {
        window.gtag('event', 'language_change', {
          event_category: 'User Interaction',
          event_label: language,
          value: 1
        });
        console.log(`📊 Language change tracked: ${language}`);
      }
    };

    // Track section views (when user scrolls to sections)
    const trackSectionView = (section: string) => {
      if (window.gtag) {
        window.gtag('event', 'section_view', {
          event_category: 'Content',
          event_label: section,
          value: 1
        });
        console.log(`📊 Section view tracked: ${section}`);
      }
    };

    // Track pipeline interactions
    const trackPipelineInteraction = (action: string, company?: string) => {
      if (window.gtag) {
        window.gtag('event', 'pipeline_interaction', {
          event_category: 'Pipeline',
          event_label: action,
          custom_parameter_1: company || 'Unknown',
          value: 1
        });
        console.log(`📊 Pipeline interaction tracked: ${action} - ${company}`);
      }
    };

    // Track scroll depth
    const trackScrollDepth = (depth: number) => {
      if (window.gtag) {
        window.gtag('event', 'scroll_depth', {
          event_category: 'Engagement',
          event_label: `${depth}%`,
          value: depth
        });
      }
    };

    // Track time on page
    const trackTimeOnPage = (seconds: number) => {
      if (window.gtag) {
        window.gtag('event', 'time_on_page', {
          event_category: 'Engagement',
          event_label: `${Math.round(seconds)}s`,
          value: Math.round(seconds)
        });
      }
    };

    // Expose functions globally for use in components
    (window as any).trackMenuClick = trackMenuClick;
    (window as any).trackContactClick = trackContactClick;
    (window as any).trackLanguageChange = trackLanguageChange;
    (window as any).trackSectionView = trackSectionView;
    (window as any).trackPipelineInteraction = trackPipelineInteraction;
    (window as any).trackScrollDepth = trackScrollDepth;
    (window as any).trackTimeOnPage = trackTimeOnPage;

    // Track scroll depth automatically
    let maxScrollDepth = 0;
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
        if (scrollPercent % 25 === 0) { // Track every 25%
          trackScrollDepth(scrollPercent);
        }
      }
    };

    // Track time on page
    let startTime = Date.now();
    const trackTimeInterval = setInterval(() => {
      const timeSpent = (Date.now() - startTime) / 1000;
      if (timeSpent >= 30) { // Track every 30 seconds
        trackTimeOnPage(timeSpent);
        startTime = Date.now();
      }
    }, 30000);

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(trackTimeInterval);
    };
  }, []);

  return null;
};
