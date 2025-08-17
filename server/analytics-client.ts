import { BetaAnalyticsDataClient } from '@google-analytics/data';
import path from 'path';

const CREDENTIALS_PATH = path.join(process.cwd(), 'server', 'analytics-credentials.json');
const PROPERTY_ID = '501346434';

// Inicializar cliente de Analytics
const analyticsDataClient = new BetaAnalyticsDataClient({
  keyFilename: CREDENTIALS_PATH,
});

export interface AnalyticsData {
  totalUsers: number;
  totalSessions: number;
  totalPageViews: number;
  averageSessionDuration: number;
  topPages: Array<{ page: string; views: number }>;
  topSources: Array<{ source: string; sessions: number }>;
  deviceCategories: Array<{ device: string; users: number }>;
  recentVisits: Array<{ date: string; users: number }>;
}

export interface DetailedAnalyticsData extends AnalyticsData {
  locations: Array<{ country: string; city: string; users: number }>;
  browsers: Array<{ browser: string; users: number }>;
  operatingSystems: Array<{ os: string; users: number }>;
  hourlyData: Array<{ hour: string; users: number }>;
  sessionData: Array<{ sessionDuration: string; sessions: number }>;
}

export async function getAnalyticsData(days: number = 30): Promise<AnalyticsData> {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: `${days}daysAgo`,
          endDate: 'today',
        },
      ],
      metrics: [
        { name: 'totalUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
      ],
      dimensions: [
        { name: 'date' },
        { name: 'pagePath' },
        { name: 'sessionSource' },
        { name: 'deviceCategory' },
      ],
      limit: 1000,
    });

    // Procesar datos
    const totalUsers = parseInt(response.rows?.[0]?.metricValues?.[0]?.value || '0');
    const totalSessions = parseInt(response.rows?.[0]?.metricValues?.[1]?.value || '0');
    const totalPageViews = parseInt(response.rows?.[0]?.metricValues?.[2]?.value || '0');
    const averageSessionDuration = parseFloat(response.rows?.[0]?.metricValues?.[3]?.value || '0');

    // Procesar páginas más vistas
    const pageViews = new Map<string, number>();
    const sources = new Map<string, number>();
    const devices = new Map<string, number>();
    const dailyVisits = new Map<string, number>();

    response.rows?.forEach((row) => {
      const page = row.dimensionValues?.[1]?.value || '';
      const source = row.dimensionValues?.[2]?.value || '';
      const device = row.dimensionValues?.[3]?.value || '';
      const date = row.dimensionValues?.[0]?.value || '';
      const views = parseInt(row.metricValues?.[2]?.value || '0');
      const users = parseInt(row.metricValues?.[0]?.value || '0');

      if (page) {
        pageViews.set(page, (pageViews.get(page) || 0) + views);
      }
      if (source) {
        sources.set(source, (sources.get(source) || 0) + users);
      }
      if (device) {
        devices.set(device, (devices.get(device) || 0) + users);
      }
      if (date) {
        dailyVisits.set(date, (dailyVisits.get(date) || 0) + users);
      }
    });

    // Convertir a arrays ordenados
    const topPages = Array.from(pageViews.entries())
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    const topSources = Array.from(sources.entries())
      .map(([source, sessions]) => ({ source, sessions }))
      .sort((a, b) => b.sessions - a.sessions)
      .slice(0, 10);

    const deviceCategories = Array.from(devices.entries())
      .map(([device, users]) => ({ device, users }))
      .sort((a, b) => b.users - a.users);

    const recentVisits = Array.from(dailyVisits.entries())
      .map(([date, users]) => ({ date, users }))
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-7); // Últimos 7 días

    return {
      totalUsers,
      totalSessions,
      totalPageViews,
      averageSessionDuration,
      topPages,
      topSources,
      deviceCategories,
      recentVisits,
    };
  } catch (error) {
    console.error('Error fetching analytics data:', error);
    throw error;
  }
}

export async function getDetailedAnalyticsData(days: number = 30): Promise<DetailedAnalyticsData> {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: `${days}daysAgo`,
          endDate: 'today',
        },
      ],
      metrics: [
        { name: 'totalUsers' },
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'averageSessionDuration' },
      ],
      dimensions: [
        { name: 'date' },
        { name: 'pagePath' },
        { name: 'sessionSource' },
        { name: 'deviceCategory' },
        { name: 'country' },
        { name: 'city' },
        { name: 'browser' },
        { name: 'operatingSystem' },
        { name: 'hour' },
        { name: 'sessionDuration' },
      ],
      limit: 1000,
    });

    // Procesar datos básicos
    const totalUsers = parseInt(response.rows?.[0]?.metricValues?.[0]?.value || '0');
    const totalSessions = parseInt(response.rows?.[0]?.metricValues?.[1]?.value || '0');
    const totalPageViews = parseInt(response.rows?.[0]?.metricValues?.[2]?.value || '0');
    const averageSessionDuration = parseFloat(response.rows?.[0]?.metricValues?.[3]?.value || '0');

    // Procesar datos detallados
    const pageViews = new Map<string, number>();
    const sources = new Map<string, number>();
    const devices = new Map<string, number>();
    const dailyVisits = new Map<string, number>();
    const locations = new Map<string, number>();
    const browsers = new Map<string, number>();
    const operatingSystems = new Map<string, number>();
    const hourlyData = new Map<string, number>();
    const sessionData = new Map<string, number>();

    response.rows?.forEach((row) => {
      const page = row.dimensionValues?.[1]?.value || '';
      const source = row.dimensionValues?.[2]?.value || '';
      const device = row.dimensionValues?.[3]?.value || '';
      const date = row.dimensionValues?.[0]?.value || '';
      const country = row.dimensionValues?.[4]?.value || '';
      const city = row.dimensionValues?.[5]?.value || '';
      const browser = row.dimensionValues?.[6]?.value || '';
      const os = row.dimensionValues?.[7]?.value || '';
      const hour = row.dimensionValues?.[8]?.value || '';
      const sessionDuration = row.dimensionValues?.[9]?.value || '';
      const views = parseInt(row.metricValues?.[2]?.value || '0');
      const users = parseInt(row.metricValues?.[0]?.value || '0');

      if (page) {
        pageViews.set(page, (pageViews.get(page) || 0) + views);
      }
      if (source) {
        sources.set(source, (sources.get(source) || 0) + users);
      }
      if (device) {
        devices.set(device, (devices.get(device) || 0) + users);
      }
      if (date) {
        dailyVisits.set(date, (dailyVisits.get(date) || 0) + users);
      }
      if (country && city) {
        const location = `${city}, ${country}`;
        locations.set(location, (locations.get(location) || 0) + users);
      }
      if (browser) {
        browsers.set(browser, (browsers.get(browser) || 0) + users);
      }
      if (os) {
        operatingSystems.set(os, (operatingSystems.get(os) || 0) + users);
      }
      if (hour) {
        hourlyData.set(hour, (hourlyData.get(hour) || 0) + users);
      }
      if (sessionDuration) {
        sessionData.set(sessionDuration, (sessionData.get(sessionDuration) || 0) + users);
      }
    });

    // Convertir a arrays ordenados
    const topPages = Array.from(pageViews.entries())
      .map(([page, views]) => ({ page, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 10);

    const topSources = Array.from(sources.entries())
      .map(([source, sessions]) => ({ source, sessions }))
      .sort((a, b) => b.sessions - a.sessions)
      .slice(0, 10);

    const deviceCategories = Array.from(devices.entries())
      .map(([device, users]) => ({ device, users }))
      .sort((a, b) => b.users - a.users);

    const recentVisits = Array.from(dailyVisits.entries())
      .map(([date, users]) => ({ date, users }))
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-7);

    const locationData = Array.from(locations.entries())
      .map(([location, users]) => {
        const [city, country] = location.split(', ');
        return { country, city, users };
      })
      .sort((a, b) => b.users - a.users)
      .slice(0, 10);

    const browserData = Array.from(browsers.entries())
      .map(([browser, users]) => ({ browser, users }))
      .sort((a, b) => b.users - a.users)
      .slice(0, 5);

    const osData = Array.from(operatingSystems.entries())
      .map(([os, users]) => ({ os, users }))
      .sort((a, b) => b.users - a.users)
      .slice(0, 5);

    const hourlyVisits = Array.from(hourlyData.entries())
      .map(([hour, users]) => ({ hour, users }))
      .sort((a, b) => parseInt(a.hour) - parseInt(b.hour));

    const sessionDurationData = Array.from(sessionData.entries())
      .map(([duration, sessions]) => ({ sessionDuration: duration, sessions }))
      .sort((a, b) => parseInt(a.sessionDuration) - parseInt(b.sessionDuration));

    return {
      totalUsers,
      totalSessions,
      totalPageViews,
      averageSessionDuration,
      topPages,
      topSources,
      deviceCategories,
      recentVisits,
      locations: locationData,
      browsers: browserData,
      operatingSystems: osData,
      hourlyData: hourlyVisits,
      sessionData: sessionDurationData,
    };
  } catch (error) {
    console.error('Error fetching detailed analytics data:', error);
    throw error;
  }
}

export async function getRealTimeData(): Promise<{ activeUsers: number }> {
  try {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${PROPERTY_ID}`,
      metrics: [{ name: 'activeUsers' }],
    });

    const activeUsers = parseInt(response.rows?.[0]?.metricValues?.[0]?.value || '0');
    return { activeUsers };
  } catch (error) {
    console.error('Error fetching real-time data:', error);
    return { activeUsers: 0 };
  }
}

export async function getLocationData(days: number = 30): Promise<{
  locations: Array<{ country: string; city: string; users: number }>;
  browsers: Array<{ browser: string; users: number }>;
  operatingSystems: Array<{ os: string; users: number }>;
}> {
  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: `${days}daysAgo`,
          endDate: 'today',
        },
      ],
      metrics: [{ name: 'totalUsers' }],
      dimensions: [
        { name: 'country' },
        { name: 'city' },
        { name: 'browser' },
        { name: 'operatingSystem' },
      ],
      limit: 1000,
    });

    const locations = new Map<string, number>();
    const browsers = new Map<string, number>();
    const operatingSystems = new Map<string, number>();

    response.rows?.forEach((row) => {
      const country = row.dimensionValues?.[0]?.value || '';
      const city = row.dimensionValues?.[1]?.value || '';
      const browser = row.dimensionValues?.[2]?.value || '';
      const os = row.dimensionValues?.[3]?.value || '';
      const users = parseInt(row.metricValues?.[0]?.value || '0');

      if (country && city) {
        const location = `${city}, ${country}`;
        locations.set(location, (locations.get(location) || 0) + users);
      }
      if (browser) {
        browsers.set(browser, (browsers.get(browser) || 0) + users);
      }
      if (os) {
        operatingSystems.set(os, (operatingSystems.get(os) || 0) + users);
      }
    });

    const locationData = Array.from(locations.entries())
      .map(([location, users]) => {
        const [city, country] = location.split(', ');
        return { country, city, users };
      })
      .sort((a, b) => b.users - a.users);

    const browserData = Array.from(browsers.entries())
      .map(([browser, users]) => ({ browser, users }))
      .sort((a, b) => b.users - a.users);

    const osData = Array.from(operatingSystems.entries())
      .map(([os, users]) => ({ os, users }))
      .sort((a, b) => b.users - a.users);

    return {
      locations: locationData,
      browsers: browserData,
      operatingSystems: osData,
    };
  } catch (error) {
    console.error('Error fetching location data:', error);
    return {
      locations: [],
      browsers: [],
      operatingSystems: [],
    };
  }
}
