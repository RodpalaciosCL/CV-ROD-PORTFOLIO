export interface ClientConfig {
  name: string;
  logo: string;
  logoFilters?: string;
  industry: string;
  whatsappMessage: string;
  colors?: {
    primary: string;
    dark: string;
  };
}

export const clientConfigs: Record<string, ClientConfig> = {
  metso: {
    name: 'Metso',
    logo: 'https://companieslogo.com/img/orig/METSO.HE_BIG.D-51c666e1.png?t=1720244492',
    logoFilters: 'brightness-0 invert',
    industry: 'minería',
    whatsappMessage: 'Hola Rodrigo, me interesa conversar sobre la propuesta estratégica para Metso'
  },
  bhp: {
    name: 'BHP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/BHP_2017_logo.svg/2560px-BHP_2017_logo.svg.png',
    logoFilters: '',
    industry: 'minería',
    whatsappMessage: 'Hola Rodrigo, me interesa conversar sobre la propuesta estratégica para BHP',
    colors: {
      primary: '#F37021',
      dark: '#1B1B1B'
    }
  },
  angloamerican: {
    name: 'Anglo American',
    logo: 'https://companieslogo.com/img/orig/AAL-f3b63d2a.png',
    logoFilters: '',
    industry: 'minería',
    whatsappMessage: 'Hola Rodrigo, me interesa conversar sobre la propuesta estratégica para Anglo American'
  },
  antofagasta: {
    name: 'Antofagasta Minerals',
    logo: 'https://companieslogo.com/img/orig/ANTO-1039e80b.png',
    logoFilters: '',
    industry: 'minería',
    whatsappMessage: 'Hola Rodrigo, me interesa conversar sobre la propuesta estratégica para Antofagasta Minerals'
  },
  generic: {
    name: 'Rodrigo Palacios',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8dGV4dCB4PSIxMDAiIHk9IjU4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjRkZGRkZGIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5SUDwvdGV4dD4KPC9zdmc+Cg==',
    logoFilters: '',
    industry: 'múltiples industrias',
    whatsappMessage: 'Hola Rodrigo, me interesa conversar sobre tus servicios de consultoría tecnológica',
    colors: {
      primary: '#FF6900',
      dark: '#1B1B1B'
    }
  },
  default: {
    name: 'Cliente',
    logo: '/default-logo.png',
    logoFilters: '',
    industry: 'industria',
    whatsappMessage: 'Hola Rodrigo, me interesa conversar sobre tu propuesta estratégica'
  }
};

export const getClientConfig = (): ClientConfig => {
  if (typeof window === 'undefined') return clientConfigs.generic;
  
  const hostname = window.location.hostname;
  
  // Para desarrollo local y URLs de Vercel, usar generic como default
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.includes('vercel.app')) {
    return clientConfigs.generic;
  }
  
  const subdomain = hostname.split('.')[0];
  return clientConfigs[subdomain] || clientConfigs.generic;
};
