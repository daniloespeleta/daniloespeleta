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
    "hero.title": "Driving Growth Through",
    "hero.titleHighlight": "Strategic Digital Marketing",
    "hero.description": "I help businesses scale their online presence through data-driven SEO, social media campaigns, and performance marketing strategies that deliver measurable results.",
    "hero.viewWork": "View My Work",
    "hero.downloadResume": "Download Resume",
    "hero.stat.roi": "Average ROI",
    "hero.stat.clients": "Happy Clients",
    "hero.stat.leads": "Leads Generated",
    
    // Projects
    "projects.badge": "Featured Work",
    "projects.title": "Projects That Drive Results",
    "projects.description": "Explore my portfolio of successful digital marketing campaigns across various industries and channels.",
    "project.ecommerce.title": "E-Commerce Revenue Boost",
    "project.ecommerce.category": "SEO & PPC",
    "project.ecommerce.description": "Comprehensive digital strategy for a fashion retailer resulting in record-breaking sales and organic traffic growth.",
    "project.ecommerce.metric1": "Revenue Increase",
    "project.ecommerce.metric2": "Organic Traffic",
    "project.saas.title": "SaaS Lead Generation",
    "project.saas.category": "Content Marketing",
    "project.saas.description": "Built a content engine that generated qualified B2B leads through strategic blog posts, whitepapers, and email sequences.",
    "project.saas.metric1": "Leads Generated",
    "project.saas.metric2": "Cost per Lead",
    "project.restaurant.title": "Restaurant Chain Rebrand",
    "project.restaurant.category": "Social Media",
    "project.restaurant.description": "Complete social media overhaul for a 20-location restaurant chain, creating viral content and community engagement.",
    "project.restaurant.metric1": "Engagement Rate",
    "project.restaurant.metric2": "Followers Gained",
    "project.fitness.title": "Fitness App Launch",
    "project.fitness.category": "Performance Marketing",
    "project.fitness.description": "Orchestrated a multi-channel launch campaign for a fitness app, achieving top 10 Health & Fitness ranking.",
    "project.fitness.metric1": "App Downloads",
    "project.fitness.metric2": "ROAS",
    "project.realestate.title": "Real Estate Portal SEO",
    "project.realestate.category": "Technical SEO",
    "project.realestate.description": "Technical SEO audit and implementation for a real estate marketplace with millions of property listings.",
    "project.realestate.metric1": "Indexed Pages",
    "project.realestate.metric2": "Organic Sessions",
    "project.healthcare.title": "Healthcare Clinic Network",
    "project.healthcare.category": "Local SEO",
    "project.healthcare.description": "Local SEO campaign for a network of 15 clinics, dominating local search results across multiple cities.",
    "project.healthcare.metric1": "Map Pack Rankings",
    "project.healthcare.metric2": "Appointment Bookings",
    
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
    "hero.title": "Impulsionando o Crescimento Através de",
    "hero.titleHighlight": "Marketing Digital Estratégico",
    "hero.description": "Ajudo empresas a escalar sua presença online através de SEO orientado por dados, campanhas de mídia social e estratégias de marketing de performance que entregam resultados mensuráveis.",
    "hero.viewWork": "Ver Meu Trabalho",
    "hero.downloadResume": "Baixar Currículo",
    "hero.stat.roi": "ROI Médio",
    "hero.stat.clients": "Clientes Satisfeitos",
    "hero.stat.leads": "Leads Gerados",
    
    // Projects
    "projects.badge": "Trabalhos em Destaque",
    "projects.title": "Projetos que Geram Resultados",
    "projects.description": "Explore meu portfólio de campanhas de marketing digital bem-sucedidas em diversos setores e canais.",
    "project.ecommerce.title": "Aumento de Receita E-Commerce",
    "project.ecommerce.category": "SEO & PPC",
    "project.ecommerce.description": "Estratégia digital abrangente para uma varejista de moda resultando em vendas recordes e crescimento de tráfego orgânico.",
    "project.ecommerce.metric1": "Aumento de Receita",
    "project.ecommerce.metric2": "Tráfego Orgânico",
    "project.saas.title": "Geração de Leads SaaS",
    "project.saas.category": "Marketing de Conteúdo",
    "project.saas.description": "Construí um motor de conteúdo que gerou leads B2B qualificados através de posts estratégicos, whitepapers e sequências de email.",
    "project.saas.metric1": "Leads Gerados",
    "project.saas.metric2": "Custo por Lead",
    "project.restaurant.title": "Rebranding de Rede de Restaurantes",
    "project.restaurant.category": "Mídias Sociais",
    "project.restaurant.description": "Reformulação completa das mídias sociais para uma rede de 20 restaurantes, criando conteúdo viral e engajamento comunitário.",
    "project.restaurant.metric1": "Taxa de Engajamento",
    "project.restaurant.metric2": "Seguidores Conquistados",
    "project.fitness.title": "Lançamento de App Fitness",
    "project.fitness.category": "Marketing de Performance",
    "project.fitness.description": "Orquestrei uma campanha de lançamento multicanal para um app fitness, alcançando o top 10 na categoria Saúde & Fitness.",
    "project.fitness.metric1": "Downloads do App",
    "project.fitness.metric2": "ROAS",
    "project.realestate.title": "SEO Portal Imobiliário",
    "project.realestate.category": "SEO Técnico",
    "project.realestate.description": "Auditoria e implementação de SEO técnico para um marketplace imobiliário com milhões de anúncios de imóveis.",
    "project.realestate.metric1": "Páginas Indexadas",
    "project.realestate.metric2": "Sessões Orgânicas",
    "project.healthcare.title": "Rede de Clínicas de Saúde",
    "project.healthcare.category": "SEO Local",
    "project.healthcare.description": "Campanha de SEO local para uma rede de 15 clínicas, dominando os resultados de busca local em múltiplas cidades.",
    "project.healthcare.metric1": "Rankings Map Pack",
    "project.healthcare.metric2": "Agendamentos",
    
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
