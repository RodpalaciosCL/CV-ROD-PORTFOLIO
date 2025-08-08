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
    
    // About Section
    'about.title': 'Creando equipos, fortaleciendo relaciones',
    'about.subtitle': 'y empoderando la práctica',
    'about.description': 'para acompañar, desafiar y guiar a nuestros clientes en las decisiones más trascendentales',
    'about.relationship.title': 'Relacionamiento',
    'about.relationship.description': 'Amplia red de contactos en la Industria Minera, donde he dedicado tiempo a estar con quienes toman decisiones y en donde estas ocurren.',
    'about.understanding.title': 'Entendimiento',
    'about.understanding.description': 'Estos últimos años me he dedicado profundamente a estar en faena, comprender los reales problemas y vivir los dolores con los equipos que ejecutan, adentrándome como nunca en el real día a día de la operación minera compleja.',
    'about.growth.title': 'Crecimiento',
    'about.growth.description': 'La capacidad de tomar la oportunidad o transformar el problema y entregar TANGIBILIDAD, para generar la necesidade en el cliente desde el minuto cero.',
    
    // Projects Section  
    'projects.title': 'Trayectoria Profesional',
    'projects.airontech.title': 'AIrontech',
    'projects.airontech.role': 'Managing Director & AI Leader',
    'projects.airontech.description': 'A cargo del PNL, los negocios estratégicos, el relacionamiento con clientes y la práctica de AI y Visión Computacional Minera',
    'projects.kyndryl.title': 'Kyndryl',
    'projects.kyndryl.role': 'Partner - Líder de Consultoría',
    'projects.kyndryl.description': 'Líder de la práctica de Consultoría y de la vertical de Minería, para clientes como Codelco, Glencore, Capstone, entre otros.',
    'projects.pwc.title': 'PwC',
    'projects.pwc.role': 'Senior Director',
    'projects.pwc.description': 'Líder de la vertical de Minería y Ciberseguridad, donde también estuve a cargo del CoE Minero y el Robotics Center',
    'projects.deloitte.title': 'Deloitte', 
    'projects.deloitte.role': 'Senior Manager',
    'projects.deloitte.description': 'Lideré la Digital Transformation Immersion, Cross Industrias, y también fui Líder de la práctica de Digital en Deloitte, siendo parte del comité global de transformación de la firma.',
    'projects.rga.title': 'R/GA',
    'projects.rga.role': 'Country Manager',
    'projects.rga.description': 'Lideré el desembarco de la firma más creativa del mundo, en donde tuve que hacer desde la inscripción, hasta la configuración completa del equipo y sus primeros deals locales y regionales.',
    'projects.accenture.title': 'Accenture',
    'projects.accenture.role': 'Technology Manager & Accenture Digital Leader',
    'projects.accenture.description': 'Lideré el desembarco de Accenture Digital en Chile, trayendo los primeros negocios y siendo artífice de dos grandes contratos para la firma en ese entonces.',
    'projects.multiple.title': 'Múltiples Compañías',
    'projects.multiple.role': 'Emprendedor & Líder Ejecutivo',
    'projects.multiple.description': 'Creé empresas de nicho, las cuales vendí a grandes grupos, y también lideré empresas de industrias clave, donde gané premios y reconocimientos por haber aumentado el revenue de manera única, entre otras cosas.',
    
    // Value Section
    'value.executive.title': 'Perfil Ejecutivo',
    'value.executive.subtitle': 'Liderazgo & Estrategia',
    'value.executive.description': 'Vasta experiencia en problemas complejos, liderando equipos y desarrollando nuevos revenue streams, aportando negocios, relacionamiento, credibilidad y experiencia a las prácticas en las cuales he sido parte y donde siempre he dejado huella.',
    'value.differential.title': 'Diferencial',
    'value.differential.subtitle': 'Valor Único',
    'value.differential.description': 'Capacidad única de traducir desafíos técnicos complejos en oportunidades de negocio tangibles, combinando expertise técnico profundo con visión estratégica empresarial para generar impacto real.',
    'value.transformation.title': 'Transformación Digital',
    
    // Major Projects
    'major_projects.title': 'Logros de Proyectos Mayores',
    'major_projects.subtitle': 'Track record comprobado entregando soluciones tecnológicas complejas para empresas mineras Tier 1',
    'major_projects.goldfields.title': 'Goldfields',
    'major_projects.goldfields.subtitle': 'Puesta en Marcha Mina',
    'major_projects.goldfields.result': 'Re activación mina',
    'major_projects.goldfields.description': 'Desarrollo de sistemas anti congelantes y término de instalación faena completa',
    'major_projects.glencore.title': 'Glencore',
    'major_projects.glencore.subtitle': 'Sistema de Gestión de Activos',
    'major_projects.glencore.result': '90% eficiencia',
    'major_projects.glencore.description': 'Desarrollo plataforma de control de activos por 20 billones de dólares',
    'major_projects.codelco.title': 'CODELCO',
    'major_projects.codelco.subtitle': 'Mesa de ayuda AI',
    'major_projects.codelco.result': '97% de eficiencia versus 75% actual',
    'major_projects.codelco.description': 'Re diseño completo de la plataforma de gestión de incidentes',
    'major_projects.pwc_center.title': 'PwC',
    'major_projects.pwc_center.subtitle': 'Centro de Robótica y CoE Minero Avanzado',
    'major_projects.pwc_center.result': 'Nuevo revenue stream, participación de mercado y amplificación de scope en cuentas actuales',
    'major_projects.pwc_center.description': 'Centro especializado de robótica y excelencia operacional minera',
    'major_projects.rga_landing.title': 'R/GA',
    'major_projects.rga_landing.subtitle': 'Landing Chile y primeros deals regionales',
    'major_projects.rga_landing.result': 'Pipeline robusto en Energía, Minería y Autopistas a nivel regional',
    'major_projects.rga_landing.description': 'Establecimiento de operaciones regionales y desarrollo de cartera de clientes',
    'major_projects.accenture_practice.title': 'Accenture',
    'major_projects.accenture_practice.subtitle': 'Desarrollo de la práctica y Digitalización Vertical Minería',
    'major_projects.accenture_practice.result': 'Incremento en revenue global del negocio de Chile y la región',
    'major_projects.accenture_practice.description': 'Creación y desarrollo de práctica vertical especializada en minería',
    'major_projects.total': 'En negocios en la industria minería, de energía y Oil&Gas, en los últimos 8 años...',
    
    // Active Pipeline
    'pipeline.title': 'Pipeline de Negocios Activo',
    'pipeline.subtitle': 'en oportunidades mapeadas para asociación con EY',
    'pipeline.anglo.title': 'Anglo American',
    'pipeline.anglo.subtitle': 'Implementación Robots de Inspección',
    'pipeline.anglo.stage': 'Propuesta Final',
    'pipeline.antofagasta.title': 'Antofagasta Minerals',
    'pipeline.antofagasta.subtitle': 'Digital Twins & AI Warehouse',
    'pipeline.antofagasta.stage': 'Definición Prueba de Concepto',
    'pipeline.sierra.title': 'Sierra Gorda',
    'pipeline.sierra.subtitle': 'Optimización de Procesos IoT',
    'pipeline.sierra.stage': 'Fase Piloto',
    'pipeline.bhp.title': 'BHP Spence',
    'pipeline.bhp.subtitle': 'Warehouse Inteligente',
    'pipeline.bhp.stage': 'Aprobación Piloto',
    'pipeline.codelco_obsolete.title': 'Codelco',
    'pipeline.codelco_obsolete.subtitle': 'Sistema de Gestión Obsoletos',
    'pipeline.codelco_obsolete.stage': 'Cerrando acuerdo primera etapa',
    'pipeline.san_geronimo.title': 'Minera San Gerónimo',
    'pipeline.san_geronimo.subtitle': 'Plataforma Centralización Procesos',
    'pipeline.san_geronimo.stage': 'Acordando Alcance final',
    'pipeline.carola.title': 'Minera Carola-Coemin',
    'pipeline.carola.subtitle': 'Gestión Inteligente Bodegas Externas',
    'pipeline.carola.stage': 'Acordando fecha piloto',
    'pipeline.total_active': 'Pipeline Activo Total',
    'pipeline.subtitle_action': 'Para analizar, enlistar y asegurar!',
    'pipeline.opportunities': 'Oportunidades Activas',
    'pipeline.avg_probability': 'Probabilidad Promedio',
    'pipeline.timeline': 'Timeline',
    'pipeline.star_business': 'Negocio Estrella',
    'pipeline.obsolete.title': 'Sistema de Gestión Obsoletos',
    'pipeline.obsolete.subtitle': 'Información Detallada del Proyecto',
    'pipeline.obsolete.total_value': 'Valor Total',
    'pipeline.obsolete.sold': 'Vendido',
    'pipeline.obsolete.contract': 'Contrato',
    'pipeline.obsolete.awarded': 'Adjudicado',
    'pipeline.obsolete.expertise': 'Expertise en Codelco',
    'pipeline.obsolete.expertise_desc': 'Capacidad única en el negocio',
    'pipeline.obsolete.immediate': 'Operación Inmediata',
    'pipeline.obsolete.immediate_desc': 'Infraestructura ya establecida',
    'pipeline.obsolete.alliances': 'Alianzas Estratégicas',
    'pipeline.obsolete.alliances_desc': 'Asociación con NCA (USA)',
    'pipeline.obsolete.logistics': 'Logística Integrada',
    'pipeline.obsolete.logistics_desc': 'Despliegue con Ferronor',
    'pipeline.obsolete.advantage': 'Ventaja Competitiva: Track record on/off +24 meses haciendo remates',
    
    // What I've Been Doing
    'doing.title': 'Acá un resumen de lo que he estado haciendo',
    'doing.subtitle': 'estos últimos 6 meses en la industria mineria',
    'doing.projects_title': 'Proyectos en Acción - Últimos 6 meses',
    'doing.projects_subtitle': 'Desde bodegaje, predicción, asignación y alertas, hasta control operativo y visualización 360 de faenas',
    
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
    
    // About Section
    'about.title': 'Building teams, strengthening relationships',
    'about.subtitle': 'and empowering practice',
    'about.description': 'to accompany, challenge and guide our clients in the most transcendental decisions',
    'about.relationship.title': 'Relationships',
    'about.relationship.description': 'Extensive network of contacts in the Mining Industry, where I have dedicated time to be with those who make decisions and where they occur.',
    'about.understanding.title': 'Understanding',
    'about.understanding.description': 'In recent years I have dedicated myself deeply to being in the field, understanding the real problems and living the pains with the teams that execute, delving deeper than ever into the real day-to-day of complex mining operations.',
    'about.growth.title': 'Growth',
    'about.growth.description': 'The ability to take the opportunity or transform the problem and deliver TANGIBILITY, to generate need in the client from minute zero.',
    
    // Projects Section  
    'projects.title': 'Professional Career',
    'projects.airontech.title': 'AIrontech',
    'projects.airontech.role': 'Managing Director & AI Leader',
    'projects.airontech.description': 'In charge of NLP, strategic business, customer relationships and AI and Mining Computer Vision practice',
    'projects.kyndryl.title': 'Kyndryl',
    'projects.kyndryl.role': 'Partner - Consulting Leader',
    'projects.kyndryl.description': 'Leader of the Consulting practice and Mining vertical, for clients such as Codelco, Glencore, Capstone, among others.',
    'projects.pwc.title': 'PwC',
    'projects.pwc.role': 'Senior Director',
    'projects.pwc.description': 'Leader of the Mining and Cybersecurity vertical, where I was also in charge of the Mining CoE and the Robotics Center',
    'projects.deloitte.title': 'Deloitte', 
    'projects.deloitte.role': 'Senior Manager',
    'projects.deloitte.description': 'Led the Digital Transformation Immersion, Cross Industries, and was also Leader of the Digital practice at Deloitte, being part of the global transformation committee of the firm.',
    'projects.rga.title': 'R/GA',
    'projects.rga.role': 'Country Manager',
    'projects.rga.description': 'Led the landing of the world\'s most creative firm, where I had to do everything from registration to complete team configuration and their first local and regional deals.',
    'projects.accenture.title': 'Accenture',
    'projects.accenture.role': 'Technology Manager & Accenture Digital Leader',
    'projects.accenture.description': 'Led the landing of Accenture Digital in Chile, bringing the first businesses and being the architect of two major contracts for the firm at that time.',
    'projects.multiple.title': 'Multiple Companies',
    'projects.multiple.role': 'Entrepreneur & Executive Leader',
    'projects.multiple.description': 'Created niche companies, which I sold to large groups, and also led companies in key industries, where I won awards and recognition for having increased revenue uniquely, among other things.',
    
    // Value Section
    'value.executive.title': 'Executive Profile',
    'value.executive.subtitle': 'Leadership & Strategy',
    'value.executive.description': 'Vast experience in complex problems, leading teams and developing new revenue streams, contributing business, relationships, credibility and experience to the practices in which I have been part and where I have always left a mark.',
    'value.differential.title': 'Differential',
    'value.differential.subtitle': 'Unique Value',
    'value.differential.description': 'Unique ability to translate complex technical challenges into tangible business opportunities, combining deep technical expertise with strategic business vision to generate real impact.',
    'value.transformation.title': 'Digital Transformation',
    
    // Major Projects
    'major_projects.title': 'Major Project Achievements',
    'major_projects.subtitle': 'Proven track record delivering complex technological solutions for Tier 1 mining companies',
    'major_projects.goldfields.title': 'Goldfields',
    'major_projects.goldfields.subtitle': 'Mine Startup',
    'major_projects.goldfields.result': 'Mine reactivation',
    'major_projects.goldfields.description': 'Development of anti-freeze systems and completion of complete site installation',
    'major_projects.glencore.title': 'Glencore',
    'major_projects.glencore.subtitle': 'Asset Management System',
    'major_projects.glencore.result': '90% efficiency',
    'major_projects.glencore.description': 'Development of asset control platform for 20 billion dollars',
    'major_projects.codelco.title': 'CODELCO',
    'major_projects.codelco.subtitle': 'AI Help Desk',
    'major_projects.codelco.result': '97% efficiency versus 75% current',
    'major_projects.codelco.description': 'Complete redesign of incident management platform',
    'major_projects.pwc_center.title': 'PwC',
    'major_projects.pwc_center.subtitle': 'Advanced Mining Robotics Center and CoE',
    'major_projects.pwc_center.result': 'New revenue stream, market share and scope amplification in current accounts',
    'major_projects.pwc_center.description': 'Specialized center for robotics and mining operational excellence',
    'major_projects.rga_landing.title': 'R/GA',
    'major_projects.rga_landing.subtitle': 'Chile Landing and first regional deals',
    'major_projects.rga_landing.result': 'Robust pipeline in Energy, Mining and Highways at regional level',
    'major_projects.rga_landing.description': 'Establishment of regional operations and client portfolio development',
    'major_projects.accenture_practice.title': 'Accenture',
    'major_projects.accenture_practice.subtitle': 'Practice development and Mining Vertical Digitalization',
    'major_projects.accenture_practice.result': 'Increase in global revenue of Chile and region business',
    'major_projects.accenture_practice.description': 'Creation and development of specialized vertical mining practice',
    'major_projects.total': 'In business in mining, energy and Oil&Gas industries, in the last 8 years...',
    
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
