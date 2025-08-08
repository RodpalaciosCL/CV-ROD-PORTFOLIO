import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones completas
const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.profile': 'Perfil',
    'nav.projects': 'Proyectos',
    'nav.pipeline': 'Pipeline',
    'nav.value': 'Valor',
    'nav.proposal': 'Propuesta',
    'nav.leadership': 'Liderazgo',
    'nav.contact': 'Contacto',
    'nav.contactButton': 'Contactar',
    'nav.whatsappButton': 'Contactar por WhatsApp',
    
    // Hero Section
    'hero.title': 'Liderazgo Tecnológico,',
    'hero.subtitle': 'Estratégico y de Negocio',
    'hero.description': 'Con un track récord trabajando para las mineras más grandes del mundo, mi background se extiende a industrias de Oil&Gas, Retail, Financial Services, Cementeras y Agro, contando con una experiencia horizontal y ampliamente enriquecida para tomar decisiones certeras de negocio.',
    'hero.cta': 'Ver Pipeline',
    'hero.metric1': 'Proyectos de la industria entregados',
    'hero.metric2': 'Clientes Mineros',
    'hero.metric3': 'Pipeline Activo',
    'hero.expert_badge': 'Mining Technology Expert',
    'hero.consulting_badge': 'Big 4 Consulting Background',
    
    // Solutions Section
    'solutions.title': 'Soluciones',
    'solutions.title_highlight': 'Altamente Demandadas por la Industria',
    'solutions.description': 'De las cuales tengo en su mayoría la',
    'solutions.description_highlight': 'capacidad de vender e implementar en tiempo récord',
    'solutions.tab_operation': 'Operación',
    'solutions.tab_security': 'Seguridad',
    'solutions.tab_maintenance': 'Mantenimiento',
    
    // Security Solutions
    'security.safeapp.title': 'SafeApp',
    'security.safeapp.subtitle': 'Plataforma digital de seguridad minera',
    'security.safeapp.bullet1': 'Checklist digital',
    'security.safeapp.bullet2': 'Registro de incidentes',
    'security.safeapp.bullet3': 'Control automático de EPP',
    'security.safeapp.bullet4': 'Dashboards de seguridad en tiempo real',
    
    'security.inspection_drones.title': 'Drones de Inspección',
    'security.inspection_drones.subtitle': 'Reconocimiento y mapeo avanzado en espacios confinados',
    'security.inspection_drones.bullet1': 'Inspección de túneles y espacios de alto riesgo',
    'security.inspection_drones.bullet2': 'Mapeo 3D en tiempo real sin exposición humana',
    'security.inspection_drones.bullet3': 'Detección temprana de fallas estructurales',
    'security.inspection_drones.bullet4': 'Reducción de 90% en tiempo de evaluación',
    
    'security.correction_drones.title': 'Drones de Corrección',
    'security.correction_drones.subtitle': 'Intervención precisa y mantenimiento remoto',
    'security.correction_drones.bullet1': 'Capacidad de maniobra omnidireccional',
    'security.correction_drones.bullet2': 'Corrección de fallas en tiempo real',
    'security.correction_drones.bullet3': 'Mantenimiento preventivo automatizado',
    'security.correction_drones.bullet4': 'Operación en condiciones extremas',
    
    'security.rescue_tag.title': 'RescueAI-Tag',
    'security.rescue_tag.subtitle': 'Localización y respuesta de emergencia inteligente',
    'security.rescue_tag.bullet1': 'Localización en tiempo real del personal',
    'security.rescue_tag.bullet2': 'Alertas automáticas en situaciones de riesgo',
    'security.rescue_tag.bullet3': 'Comunicación bidireccional de emergencia',
    'security.rescue_tag.bullet4': 'Integración con sistemas de evacuación',
    
    'security.all_access.title': 'All Access',
    'security.all_access.subtitle': 'Control inteligente de acceso seguro',
    'security.all_access.bullet1': 'Control de visitas e internos',
    'security.all_access.bullet2': 'Prevención de acoso',
    'security.all_access.bullet3': 'Acceso biométrico',
    'security.all_access.bullet4': 'Monitoreo en tiempo real',
    
    'security.cta.title': 'Seguridad Inteligente',
    'security.cta.subtitle': 'El futuro de la prevención minera',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.profile': 'Profile',
    'nav.projects': 'Projects',
    'nav.pipeline': 'Pipeline',
    'nav.value': 'Value',
    'nav.proposal': 'Proposal',
    'nav.leadership': 'Leadership',
    'nav.contact': 'Contact',
    'nav.contactButton': 'Contact',
    'nav.whatsappButton': 'Contact via WhatsApp',
    
    // Hero Section
    'hero.title': 'Technological Leadership,',
    'hero.subtitle': 'Strategic & Business',
    'hero.description': 'With a track record working for the world\'s largest mining companies, my background extends to Oil&Gas, Retail, Financial Services, Cement and Agro industries, with horizontal and broadly enriched experience to make accurate business decisions.',
    'hero.cta': 'View Pipeline',
    'hero.metric1': 'Industry projects delivered',
    'hero.metric2': 'Mining Clients',
    'hero.metric3': 'Active Pipeline',
    'hero.expert_badge': 'Mining Technology Expert',
    'hero.consulting_badge': 'Big 4 Consulting Background',
    
    // Solutions Section
    'solutions.title': 'Solutions',
    'solutions.title_highlight': 'Highly Demanded by the Industry',
    'solutions.description': 'Most of which I have the',
    'solutions.description_highlight': 'ability to sell and implement in record time',
    'solutions.tab_operation': 'Operation',
    'solutions.tab_security': 'Security',
    'solutions.tab_maintenance': 'Maintenance',
    
    // Security Solutions
    'security.safeapp.title': 'SafeApp',
    'security.safeapp.subtitle': 'Digital mining safety platform',
    'security.safeapp.bullet1': 'Digital checklist',
    'security.safeapp.bullet2': 'Incident registration',
    'security.safeapp.bullet3': 'Automatic PPE control',
    'security.safeapp.bullet4': 'Real-time safety dashboards',
    
    'security.inspection_drones.title': 'Inspection Drones',
    'security.inspection_drones.subtitle': 'Advanced reconnaissance and mapping in confined spaces',
    'security.inspection_drones.bullet1': 'Inspection of tunnels and high-risk spaces',
    'security.inspection_drones.bullet2': 'Real-time 3D mapping without human exposure',
    'security.inspection_drones.bullet3': 'Early detection of structural failures',
    'security.inspection_drones.bullet4': '90% reduction in evaluation time',
    
    'security.correction_drones.title': 'Correction Drones',
    'security.correction_drones.subtitle': 'Precise intervention and remote maintenance',
    'security.correction_drones.bullet1': 'Omnidirectional maneuvering capability',
    'security.correction_drones.bullet2': 'Real-time fault correction',
    'security.correction_drones.bullet3': 'Automated preventive maintenance',
    'security.correction_drones.bullet4': 'Operation in extreme conditions',
    
    'security.rescue_tag.title': 'RescueAI-Tag',
    'security.rescue_tag.subtitle': 'Smart emergency location and response',
    'security.rescue_tag.bullet1': 'Real-time personnel location',
    'security.rescue_tag.bullet2': 'Automatic alerts in risk situations',
    'security.rescue_tag.bullet3': 'Bidirectional emergency communication',
    'security.rescue_tag.bullet4': 'Integration with evacuation systems',
    
    'security.all_access.title': 'All Access',
    'security.all_access.subtitle': 'Smart secure access control',
    'security.all_access.bullet1': 'Visitor and internal control',
    'security.all_access.bullet2': 'Harassment prevention',
    'security.all_access.bullet3': 'Biometric access',
    'security.all_access.bullet4': 'Real-time monitoring',
    
    'security.cta.title': 'Smart Security',
    'security.cta.subtitle': 'The future of mining prevention',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Cargar idioma desde localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
