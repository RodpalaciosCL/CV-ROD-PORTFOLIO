// Google Analytics Configuration
export const GA_TRACKING_ID = process.env.VITE_GA_TRACKING_ID || 'G-D0JD86GNND';

// Analytics configuration
export const analyticsConfig = {
  gaTrackingId: GA_TRACKING_ID,
  enabled: GA_TRACKING_ID !== 'G-XXXXXXXXXX', // Only enable if a real ID is provided
};
