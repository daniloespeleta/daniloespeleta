import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getInTouch": "Get in Touch",
    
    // Hero
    "hero.badge": "Digital Marketing Specialist",
    "hero.titleLine1": "CRM is not a spreadsheet.",
    "hero.titleLine2": "",
    "hero.titleHighlight": "It's empathy.",
    "hero.description": "I help businesses scale their online presence through data-driven SEO, social media campaigns, and performance marketing strategies that deliver measurable results.",
    "hero.viewWork": "View My Work",
    "hero.downloadResume": "Download Resume",
    "hero.stat.roi": "Average ROI",
    "hero.stat.clients": "Happy Clients",
    "hero.stat.leads": "Leads Generated",
    
    // Projects
    "projects.badge": "Featured Work",
    "projects.title": "Data Analytics Projects",
    "projects.description": "Explore my portfolio of data analysis and visualization projects.",
    "project.nyc.title": "NYC Collision Analysis for Prevention",
    "project.nyc.category": "Data Analysis",
    "project.nyc.description": "Excel-based analysis of NYC traffic collisions uncovering time patterns and behavioral causes. Includes line charts, heatmaps, and risk severity metrics to inform prevention strategies.",
    "project.nyc.metric1": "Tool",
    "project.nyc.metric2": "Visualization",
    "project.downtime.title": "The Downtime Diagnostic",
    "project.downtime.category": "Manufacturing Analytics",
    "project.downtime.description": "Excel-based analysis of manufacturing downtime at a soft drink company. Includes efficiency metrics, Pareto analysis, and operator-level insights to uncover the root causes of delays.",
    "project.downtime.metric1": "Tool",
    "project.downtime.metric2": "Analysis",
    "project.toys.title": "Maven Toys KPI Dashboard",
    "project.toys.category": "Business Intelligence",
    "project.toys.description": "Power BI project for Maven Toys, a Mexican toy retailer. Built an interactive dashboard to monitor sales KPIs, using DAX, data modeling, and performance trends.",
    "project.toys.metric1": "Tool",
    "project.toys.metric2": "Features",
    
    // Services
    "services.badge": "What I Do",
    "services.title": "Services & Expertise",
    "services.description": "Full-spectrum digital marketing services tailored to your business goals and growth targets.",
    "service.seo.title": "Search Engine Optimization",
    "service.seo.description": "Technical SEO audits, keyword strategy, and content optimization to dominate organic search rankings.",
    "service.ppc.title": "PPC Advertising",
    "service.ppc.description": "High-performance Google Ads and Meta campaigns with continuous optimization for maximum ROAS.",
    "service.social.title": "Social Media Marketing",
    "service.social.description": "Strategic content creation and community management across all major social platforms.",
    "service.email.title": "Email Marketing",
    "service.email.description": "Automated email sequences, newsletter campaigns, and lead nurturing workflows that convert.",
    "service.content.title": "Content Strategy",
    "service.content.description": "Data-driven content planning, creation, and distribution to attract and engage your target audience.",
    "service.analytics.title": "Analytics & Reporting",
    "service.analytics.description": "Custom dashboards and actionable insights to measure ROI and guide strategic decisions.",
    
    // About
    "about.badge": "About Me",
    "about.title": "Passionate About Digital Growth",
    "about.paragraph1": "With over 8 years of experience in digital marketing, I've helped startups and Fortune 500 companies alike achieve their growth objectives through strategic, data-driven marketing campaigns.",
    "about.paragraph2": "My approach combines creative storytelling with rigorous analytics, ensuring every dollar spent delivers measurable results. I believe in transparency, continuous optimization, and building long-term partnerships.",
    "about.credential1.title": "Google Ads Certified",
    "about.credential1.description": "Search, Display & Video",
    "about.credential2.title": "HubSpot Academy",
    "about.credential2.description": "Inbound Marketing Expert",
    "about.credential3.title": "8+ Years Experience",
    "about.credential3.description": "Agency & In-House",
    "about.role": "Digital Marketer",
    "about.specialty": "Growth Specialist",
    
    // Contact
    "contact.badge": "Get in Touch",
    "contact.title": "Let's Work Together",
    "contact.description": "Ready to take your digital marketing to the next level? I'd love to hear about your project.",
    "contact.form.firstName": "First Name",
    "contact.form.lastName": "Last Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Tell me about your project...",
    "contact.form.companyPlaceholder": "Your company name",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Let's discuss your growth goals",
    "contact.info.description": "Whether you're looking to increase organic traffic, launch a paid campaign, or need a complete digital marketing strategy, I'm here to help you achieve measurable results.",
    "contact.info.location": "Location",
    "contact.info.locationValue": "San Francisco, CA (Remote Available)",
    "contact.info.email": "Email",
    "contact.info.follow": "Follow Me",
    
    // Footer
    "footer.copyright": "Digital Marketing Portfolio. All rights reserved.",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
  },
  pt: {
    // Header
    "nav.projects": "Projetos",
    "nav.services": "Serviços",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "nav.getInTouch": "Entre em Contato",
    
    // Hero
    "hero.badge": "Especialista em Marketing Digital",
    "hero.titleLine1": "CRM não é planilha.",
    "hero.titleLine2": "",
    "hero.titleHighlight": "É empatia.",
    "hero.description": "Ajudo empresas a escalar sua presença online através de SEO orientado por dados, campanhas de mídia social e estratégias de marketing de performance que entregam resultados mensuráveis.",
    "hero.viewWork": "Ver Meu Trabalho",
    "hero.downloadResume": "Baixar Currículo",
    "hero.stat.roi": "ROI Médio",
    "hero.stat.clients": "Clientes Satisfeitos",
    "hero.stat.leads": "Leads Gerados",
    
    // Projects
    "projects.badge": "Trabalhos em Destaque",
    "projects.title": "Projetos de Análise de Dados",
    "projects.description": "Explore meu portfólio de projetos de análise e visualização de dados.",
    "project.nyc.title": "Análise de Colisões em NYC para Prevenção",
    "project.nyc.category": "Análise de Dados",
    "project.nyc.description": "Análise em Excel de colisões de trânsito em NYC revelando padrões temporais e causas comportamentais. Inclui gráficos de linha, heatmaps e métricas de severidade de risco.",
    "project.nyc.metric1": "Ferramenta",
    "project.nyc.metric2": "Visualização",
    "project.downtime.title": "Diagnóstico de Paradas",
    "project.downtime.category": "Analytics de Manufatura",
    "project.downtime.description": "Análise em Excel de paradas de produção em uma empresa de refrigerantes. Inclui métricas de eficiência, análise de Pareto e insights por operador.",
    "project.downtime.metric1": "Ferramenta",
    "project.downtime.metric2": "Análise",
    "project.toys.title": "Dashboard KPI Maven Toys",
    "project.toys.category": "Business Intelligence",
    "project.toys.description": "Projeto Power BI para Maven Toys, varejista mexicana de brinquedos. Dashboard interativo para monitorar KPIs de vendas usando DAX e modelagem de dados.",
    "project.toys.metric1": "Ferramenta",
    "project.toys.metric2": "Recursos",
    
    // Services
    "services.badge": "O Que Faço",
    "services.title": "Serviços & Expertise",
    "services.description": "Serviços completos de marketing digital adaptados aos seus objetivos de negócio e metas de crescimento.",
    "service.seo.title": "Otimização para Motores de Busca",
    "service.seo.description": "Auditorias de SEO técnico, estratégia de palavras-chave e otimização de conteúdo para dominar rankings orgânicos.",
    "service.ppc.title": "Publicidade PPC",
    "service.ppc.description": "Campanhas de alta performance no Google Ads e Meta com otimização contínua para máximo ROAS.",
    "service.social.title": "Marketing em Mídias Sociais",
    "service.social.description": "Criação estratégica de conteúdo e gestão de comunidade em todas as principais plataformas sociais.",
    "service.email.title": "Email Marketing",
    "service.email.description": "Sequências automatizadas de email, campanhas de newsletter e fluxos de nutrição de leads que convertem.",
    "service.content.title": "Estratégia de Conteúdo",
    "service.content.description": "Planejamento, criação e distribuição de conteúdo orientado por dados para atrair e engajar seu público-alvo.",
    "service.analytics.title": "Analytics & Relatórios",
    "service.analytics.description": "Dashboards personalizados e insights acionáveis para medir ROI e guiar decisões estratégicas.",
    
    // About
    "about.badge": "Sobre Mim",
    "about.title": "Apaixonado por Crescimento Digital",
    "about.paragraph1": "Com mais de 8 anos de experiência em marketing digital, ajudei tanto startups quanto empresas Fortune 500 a alcançarem seus objetivos de crescimento através de campanhas de marketing estratégicas e orientadas por dados.",
    "about.paragraph2": "Minha abordagem combina storytelling criativo com análises rigorosas, garantindo que cada real investido entregue resultados mensuráveis. Acredito em transparência, otimização contínua e construção de parcerias de longo prazo.",
    "about.credential1.title": "Certificado Google Ads",
    "about.credential1.description": "Pesquisa, Display & Vídeo",
    "about.credential2.title": "HubSpot Academy",
    "about.credential2.description": "Especialista em Inbound Marketing",
    "about.credential3.title": "8+ Anos de Experiência",
    "about.credential3.description": "Agência & In-House",
    "about.role": "Profissional de Marketing Digital",
    "about.specialty": "Especialista em Crescimento",
    
    // Contact
    "contact.badge": "Entre em Contato",
    "contact.title": "Vamos Trabalhar Juntos",
    "contact.description": "Pronto para levar seu marketing digital ao próximo nível? Adoraria ouvir sobre seu projeto.",
    "contact.form.firstName": "Nome",
    "contact.form.lastName": "Sobrenome",
    "contact.form.email": "Email",
    "contact.form.company": "Empresa",
    "contact.form.message": "Mensagem",
    "contact.form.messagePlaceholder": "Conte-me sobre seu projeto...",
    "contact.form.companyPlaceholder": "Nome da sua empresa",
    "contact.form.submit": "Enviar Mensagem",
    "contact.info.title": "Vamos discutir suas metas de crescimento",
    "contact.info.description": "Se você está procurando aumentar o tráfego orgânico, lançar uma campanha paga ou precisa de uma estratégia completa de marketing digital, estou aqui para ajudá-lo a alcançar resultados mensuráveis.",
    "contact.info.location": "Localização",
    "contact.info.locationValue": "São Paulo, SP (Remoto Disponível)",
    "contact.info.email": "Email",
    "contact.info.follow": "Siga-me",
    
    // Footer
    "footer.copyright": "Portfólio de Marketing Digital. Todos os direitos reservados.",
    "footer.privacy": "Privacidade",
    "footer.terms": "Termos",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
