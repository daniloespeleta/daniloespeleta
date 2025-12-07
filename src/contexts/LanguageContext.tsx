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
    "projects.title": "Projects That Drive Results",
    "projects.description": "Explore my portfolio of successful projects across data analytics and digital marketing.",
    "projects.tab.analytics": "Data Analytics",
    "projects.tab.marketing": "Digital Marketing",
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
    "project.fenix.title": "Fênix Educação - CRM & Automation",
    "project.fenix.category": "Marketing Automation",
    "project.fenix.description": "Built a robust CRM and automation operation that increased email open rates by 400%, achieving 50%+ engagement. Managed 50K segmented leads with personalized journeys using RD Station, Mautic, Mailchimp, and SendPulse, reducing operational costs by 25%.",
    "project.fenix.metric1": "Email Open Rate",
    "project.fenix.metric2": "Enrollments",
    "project.lbv.title": "LBV - Institutional Marketing & Branding",
    "project.lbv.category": "Branding & Communications",
    "project.lbv.description": "Strengthened institutional brand positioning, increasing campaign reach by 45% through innovative 360º strategies. Structured cross-department communication routines, improving delivery predictability by 30% and reducing production costs by 25% through media partnerships.",
    "project.lbv.metric1": "Campaign Reach",
    "project.lbv.metric2": "Cost Reduction",
    "project.monchu.title": "Monchu - Events & Experiential Marketing",
    "project.monchu.category": "Event Production",
    "project.monchu.description": "Scaled event audiences from 500 to 3,000+ participants over 3 years, increasing social media engagement by 150%. Negotiated sponsorships that boosted indirect revenue by 40% while reducing operational timelines by 25%.",
    "project.monchu.metric1": "Audience Growth",
    "project.monchu.metric2": "Engagement",
    
    // Services
    "services.badge": "What I Do",
    "services.title": "Services & Expertise",
    "services.description": "8+ years transforming leads into customers through CRM, automation, and data-driven strategies.",
    "service.seo.title": "CRM & Marketing Automation",
    "service.seo.description": "End-to-end CRM operations with RD Station, Mautic, Mailchimp, and SendPulse. Segmented journeys, A/B testing, and automation that increased open rates by 400%.",
    "service.ppc.title": "Growth & Lead Nurturing",
    "service.ppc.description": "Acquisition, activation, engagement, and reactivation journeys. Behavioral segmentation that boosted engagement by 50% and enrollments by 20%.",
    "service.social.title": "Branding & Institutional Marketing",
    "service.social.description": "Strategic brand positioning and 360° campaigns. Campaign governance, cross-department alignment, and media partnership negotiations.",
    "service.email.title": "Events & Experiential Marketing",
    "service.email.description": "B2C event marketing that grew audiences from 500 to 3,000+. Sponsorship negotiations and festival production for DGTL and Red Bull Music Academy.",
    "service.content.title": "Data Analytics & BI",
    "service.content.description": "Custom dashboards in Power BI, Excel, and Google Sheets. KPI modeling for acquisition, retention, revenue, and campaign performance.",
    "service.analytics.title": "Workflow Automation",
    "service.analytics.description": "Process automation with Make, N8n, and chatbot integrations (Manychat, BotConversa). Reduced operational costs by 25% through smart workflows.",
    
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
    "contact.info.locationValue": "São Paulo, SP - Brasil",
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
    "projects.title": "Projetos que Geram Resultados",
    "projects.description": "Explore meu portfólio de projetos em análise de dados e marketing digital.",
    "projects.tab.analytics": "Análise de Dados",
    "projects.tab.marketing": "Marketing Digital",
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
    "project.fenix.title": "Fênix Educação - CRM & Automação",
    "project.fenix.category": "Automação de Marketing",
    "project.fenix.description": "Estruturei uma operação robusta de CRM e automação que aumentou a taxa de abertura de e-mails em 400%, com engajamento médio superior a 50%. Gerenciei 50 mil leads segmentados com jornadas personalizadas usando RD Station, Mautic, Mailchimp e SendPulse, reduzindo custos operacionais em 25%.",
    "project.fenix.metric1": "Taxa de Abertura",
    "project.fenix.metric2": "Matrículas",
    "project.lbv.title": "LBV - Marketing Institucional & Branding",
    "project.lbv.category": "Branding & Comunicação",
    "project.lbv.description": "Fortaleci o posicionamento institucional da marca, aumentando o alcance das campanhas 360º em 45%. Estruturei rotinas de comunicação entre áreas, melhorando a previsibilidade das entregas em 30% e reduzindo custos de produção em 25% através de negociações de contrapartidas de mídia.",
    "project.lbv.metric1": "Alcance de Campanhas",
    "project.lbv.metric2": "Redução de Custos",
    "project.monchu.title": "Monchu - Eventos & Marketing de Experiência",
    "project.monchu.category": "Produção de Eventos",
    "project.monchu.description": "Ampliei a audiência de eventos de 500 para mais de 3.000 participantes em 3 anos, aumentando o engajamento em redes sociais em 150%. Negociei patrocínios que elevaram o faturamento indireto em 40%, reduzindo prazos operacionais em 25%.",
    "project.monchu.metric1": "Crescimento de Audiência",
    "project.monchu.metric2": "Engajamento",
    
    // Services
    "services.badge": "O Que Faço",
    "services.title": "Serviços & Expertise",
    "services.description": "8+ anos transformando leads em clientes através de CRM, automação e estratégias orientadas por dados.",
    "service.seo.title": "CRM & Automação de Marketing",
    "service.seo.description": "Operações completas de CRM com RD Station, Mautic, Mailchimp e SendPulse. Jornadas segmentadas, testes A/B e automação que aumentaram taxa de abertura em 400%.",
    "service.ppc.title": "Growth & Nutrição de Leads",
    "service.ppc.description": "Jornadas de aquisição, ativação, engajamento e reativação. Segmentação comportamental que elevou engajamento em 50% e matrículas em 20%.",
    "service.social.title": "Branding & Marketing Institucional",
    "service.social.description": "Posicionamento estratégico de marca e campanhas 360°. Governança de campanhas, alinhamento entre áreas e negociação de contrapartidas de mídia.",
    "service.email.title": "Eventos & Marketing de Experiência",
    "service.email.description": "Marketing de eventos B2C que cresceu audiências de 500 para 3.000+. Negociação de patrocínios e produção de festivais como DGTL e Red Bull Music Academy.",
    "service.content.title": "Análise de Dados & BI",
    "service.content.description": "Dashboards personalizados em Power BI, Excel e Google Sheets. Modelagem de KPIs de aquisição, retenção, receita e performance de campanhas.",
    "service.analytics.title": "Automação de Processos",
    "service.analytics.description": "Automação de processos com Make, N8n e integrações de chatbot (Manychat, BotConversa). Redução de 25% nos custos operacionais através de fluxos inteligentes.",
    
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
    "contact.info.locationValue": "São Paulo, SP - Brasil",
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
