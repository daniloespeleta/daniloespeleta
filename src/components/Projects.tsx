import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("project.ecommerce.title"),
      category: t("project.ecommerce.category"),
      description: t("project.ecommerce.description"),
      metrics: [
        { label: t("project.ecommerce.metric1"), value: "+340%" },
        { label: t("project.ecommerce.metric2"), value: "+280%" },
      ],
      tags: ["Google Ads", "SEO", "Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    },
    {
      title: t("project.saas.title"),
      category: t("project.saas.category"),
      description: t("project.saas.description"),
      metrics: [
        { label: t("project.saas.metric1"), value: "2,500+" },
        { label: t("project.saas.metric2"), value: "-65%" },
      ],
      tags: ["HubSpot", "LinkedIn", "Email"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: t("project.restaurant.title"),
      category: t("project.restaurant.category"),
      description: t("project.restaurant.description"),
      metrics: [
        { label: t("project.restaurant.metric1"), value: "+450%" },
        { label: t("project.restaurant.metric2"), value: "125K" },
      ],
      tags: ["Instagram", "TikTok", "UGC"],
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
    },
    {
      title: t("project.fitness.title"),
      category: t("project.fitness.category"),
      description: t("project.fitness.description"),
      metrics: [
        { label: t("project.fitness.metric1"), value: "500K+" },
        { label: t("project.fitness.metric2"), value: "4.2x" },
      ],
      tags: ["Meta Ads", "Apple Search", "Influencer"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    },
    {
      title: t("project.realestate.title"),
      category: t("project.realestate.category"),
      description: t("project.realestate.description"),
      metrics: [
        { label: t("project.realestate.metric1"), value: "+200%" },
        { label: t("project.realestate.metric2"), value: "+180%" },
      ],
      tags: ["Schema", "Core Web Vitals", "Migration"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    },
    {
      title: t("project.healthcare.title"),
      category: t("project.healthcare.category"),
      description: t("project.healthcare.description"),
      metrics: [
        { label: t("project.healthcare.metric1"), value: "Top 3" },
        { label: t("project.healthcare.metric2"), value: "+220%" },
      ],
      tags: ["Google Business", "Reviews", "Citations"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {t("projects.badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
