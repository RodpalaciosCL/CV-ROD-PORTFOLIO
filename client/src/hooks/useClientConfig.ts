import { useEffect, useState } from 'react';
import { getClientConfig, type ClientConfig } from '@/config/clients';

export const useClientConfig = () => {
  const [clientConfig, setClientConfig] = useState<ClientConfig>(() => getClientConfig());

  useEffect(() => {
    // Actualizar configuración cuando cambie la URL (para navegación SPA)
    const updateConfig = () => {
      setClientConfig(getClientConfig());
    };

    // Escuchar cambios en la URL
    window.addEventListener('popstate', updateConfig);
    
    return () => {
      window.removeEventListener('popstate', updateConfig);
    };
  }, []);

  return clientConfig;
};
