import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Eye, MapPin, Clock, TrendingUp, 
  Building2, Globe, Monitor, Smartphone,
  RefreshCw, Filter, Download, Trash2
} from 'lucide-react';

interface Visit {
  id: string;
  timestamp: string;
  ip: string;
  page: string;
  referrer: string;
  userAgent: string;
  screenResolution: string;
  isOwner: boolean;
  companyType: string;
  geo: {
    country: string;
    city: string;
    region: string;
    org: string;
    timezone?: string;
  };
}

interface AnalyticsData {
  stats: {
    totalVisits: number;
    uniqueIPs: number;
    eyVisits: number;
    miningVisits: number;
    countries: string[];
    topPages: [string, number][];
    recentVisits: Visit[];
    hourlyDistribution: Record<string, number>;
    companyTypes: [string, number][];
  };
  visits: Visit[];
}

const Analytics = () => {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7');
  const [includeOwner, setIncludeOwner] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  const fetchAnalyticsData = async () => {
    try {
      setLoading(true);
      
      // Leer desde localStorage (funciona sin servidor)
      const visitsData = JSON.parse(localStorage.getItem('analytics-visits') || '[]');
      
      const daysAgo = new Date();
      daysAgo.setDate(daysAgo.getDate() - parseInt(timeRange));
      
      let filteredData = visitsData.filter((visit: any) => 
        new Date(visit.timestamp) > daysAgo
      );
      
      const stats = {
        totalVisits: filteredData.length,
        uniqueIPs: [...new Set(filteredData.map((v: any) => v.ip))].length,
        eyVisits: 0,
        miningVisits: 0,
        countries: [...new Set(filteredData.map((v: any) => v.geo?.country || 'Unknown'))],
        topPages: Object.entries(
          filteredData.reduce((acc: any, v: any) => {
            acc[v.page] = (acc[v.page] || 0) + 1;
            return acc;
          }, {})
        ).sort(([,a], [,b]) => (b as number) - (a as number)).slice(0, 10),
        recentVisits: filteredData
          .sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
          .slice(0, 20),
        companyTypes: [['Other', filteredData.length]]
      };
      
      setData({ stats, visits: filteredData });
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const cleanupOldData = async () => {
    try {
      const response = await fetch('/api/analytics/cleanup?days=90', {
        method: 'DELETE'
      });
      const result = await response.json();
      alert(`Limpiados ${result.removed} registros antiguos. Quedan ${result.remaining} registros.`);
      fetchAnalyticsData();
    } catch (error) {
      console.error('Error cleaning up data:', error);
    }
  };

  const exportData = () => {
    if (!data) return;
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  useEffect(() => {
    fetchAnalyticsData();
    
    // Auto-refresh cada 30 segundos
    const interval = setInterval(fetchAnalyticsData, 30000);
    return () => clearInterval(interval);
  }, [timeRange, includeOwner]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ey-dark via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ey-yellow mx-auto mb-4"></div>
          <p className="text-ey-white text-lg">Cargando analytics...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ey-dark via-gray-900 to-black flex items-center justify-center">
        <p className="text-ey-white text-lg">Error cargando datos de analytics</p>
      </div>
    );
  }

  const { stats } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-ey-dark via-gray-900 to-black">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur border-b border-ey-yellow/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-ey-white">Analytics Dashboard</h1>
              <p className="text-ey-white/60 mt-1">
                Última actualización: {lastUpdate.toLocaleString()}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Controles */}
              <select 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-ey-white focus:ring-2 focus:ring-ey-yellow"
              >
                <option value="1">Último día</option>
                <option value="7">Últimos 7 días</option>
                <option value="30">Últimos 30 días</option>
                <option value="90">Últimos 90 días</option>
              </select>
              
              <label className="flex items-center space-x-2 text-ey-white">
                <input
                  type="checkbox"
                  checked={includeOwner}
                  onChange={(e) => setIncludeOwner(e.target.checked)}
                  className="rounded border-gray-600 bg-gray-800 text-ey-yellow focus:ring-ey-yellow"
                />
                <span className="text-sm">Incluir visitas propias</span>
              </label>
              
              <button
                onClick={fetchAnalyticsData}
                className="p-2 bg-ey-yellow text-black rounded-lg hover:bg-ey-yellow/90 transition-colors"
                title="Actualizar"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
              
              <button
                onClick={exportData}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                title="Exportar datos"
              >
                <Download className="w-5 h-5" />
              </button>
              
              <button
                onClick={cleanupOldData}
                className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                title="Limpiar datos antiguos"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Estadísticas principales - DATOS REALES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black/40 backdrop-blur border border-ey-yellow/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-ey-white/60 text-sm">Visitas Totales</p>
                <p className="text-3xl font-bold text-ey-white">{stats.totalVisits}</p>
              </div>
              <Eye className="w-8 h-8 text-ey-yellow" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-black/40 backdrop-blur border border-green-500/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-ey-white/60 text-sm">IPs Únicas</p>
                <p className="text-3xl font-bold text-green-400">{stats.uniqueIPs}</p>
              </div>
              <Users className="w-8 h-8 text-green-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/40 backdrop-blur border border-blue-500/20 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-ey-white/60 text-sm">Países</p>
                <p className="text-3xl font-bold text-blue-400">{stats.countries.length}</p>
              </div>
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* ISP / Proveedores */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur border border-ey-yellow/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-ey-white mb-4 flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-ey-yellow" />
              ISP / Proveedores
            </h3>
            <div className="space-y-3">
              {[...new Set(stats.recentVisits.map(v => v.geo?.org || 'Unknown'))].map((org, index) => {
                const count = stats.recentVisits.filter(v => (v.geo?.org || 'Unknown') === org).length;
                return (
                  <div key={org} className="flex justify-between items-center">
                    <span className="text-ey-white/80 truncate flex-1 mr-2">{org}</span>
                    <div className="flex items-center space-x-2">
                      <div className="bg-gray-700 rounded-full h-2 w-16 overflow-hidden">
                        <div
                          className="h-full bg-ey-yellow rounded-full"
                          style={{ width: `${Math.max(10, (count / stats.totalVisits) * 100)}%` }}
                        />
                      </div>
                      <span className="text-ey-white font-semibold w-6 text-right">{count}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Páginas más visitadas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black/40 backdrop-blur border border-ey-yellow/20 rounded-xl p-6"
          >
            <h3 className="text-xl font-semibold text-ey-white mb-4 flex items-center">
              <Eye className="w-5 h-5 mr-2 text-ey-yellow" />
              Páginas Más Visitadas
            </h3>
            <div className="space-y-3">
              {stats.topPages.slice(0, 8).map(([page, count], index) => (
                <div key={page} className="flex justify-between items-center">
                  <span className="text-ey-white/80 truncate flex-1 mr-2">
                    {page === '/' ? 'Home' : page}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-700 rounded-full h-2 w-16 overflow-hidden">
                      <div
                        className="h-full bg-ey-yellow rounded-full"
                        style={{ width: `${Math.max(10, (count / stats.topPages[0][1]) * 100)}%` }}
                      />
                    </div>
                    <span className="text-ey-white font-semibold w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Distribución por países */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/40 backdrop-blur border border-ey-yellow/20 rounded-xl p-6 mb-8"
        >
          <h3 className="text-xl font-semibold text-ey-white mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-ey-yellow" />
            Países ({stats.countries.length})
          </h3>
          <div className="flex flex-wrap gap-2">
            {stats.countries.map((country, index) => (
              <span
                key={country}
                className="px-3 py-1 bg-ey-yellow/20 text-ey-white rounded-full text-sm border border-ey-yellow/30"
              >
                {country}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visitas recientes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/40 backdrop-blur border border-ey-yellow/20 rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold text-ey-white mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-ey-yellow" />
            Visitas Recientes
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 text-ey-white/80">Tiempo</th>
                  <th className="text-left py-2 text-ey-white/80">IP</th>
                  <th className="text-left py-2 text-ey-white/80">País/Ciudad</th>
                  <th className="text-left py-2 text-ey-white/80">ISP/Proveedor</th>
                  <th className="text-left py-2 text-ey-white/80">Página</th>
                  <th className="text-left py-2 text-ey-white/80">Dispositivo</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentVisits.map((visit, index) => {
                  const browserInfo = visit.userAgent?.includes('Chrome') ? '🖥️ Chrome' :
                                    visit.userAgent?.includes('Safari') ? '🖥️ Safari' :
                                    visit.userAgent?.includes('Firefox') ? '🔥 Firefox' :
                                    visit.userAgent?.includes('Mobile') ? '📱 Móvil' : '🖥️ Desktop';
                  
                  return (
                    <tr key={visit.id} className="border-b border-gray-800">
                      <td className="py-2 text-ey-white/70">
                        {new Date(visit.timestamp).toLocaleString('es-CL', {
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </td>
                      <td className="py-2 text-ey-white/70 font-mono text-sm">
                        {visit.ip}
                      </td>
                      <td className="py-2 text-ey-white/70">
                        {visit.geo?.country || 'Unknown'} - {visit.geo?.city || 'Unknown'}
                      </td>
                      <td className="py-2 text-ey-white/70 truncate max-w-[200px]">
                        {visit.geo?.org || 'Unknown'}
                      </td>
                      <td className="py-2 text-ey-white/70">
                        {visit.page === '/' ? 'Home' : visit.page}
                      </td>
                      <td className="py-2">
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30">
                            {browserInfo}
                          </span>
                          {visit.isOwner && (
                            <span className="px-1 py-0.5 bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 rounded text-xs">
                              👑 Owner
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
