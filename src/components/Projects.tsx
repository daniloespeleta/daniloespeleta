import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import fenixImage from "@/assets/fenix-educacao-project.jpg";

const Projects = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"marketing" | "analytics">("analytics");

  const analyticsProjects = [
    {
      title: t("project.nyc.title"),
      category: t("project.nyc.category"),
      description: t("project.nyc.description"),
      metrics: [
        { label: t("project.nyc.metric1"), value: "Excel" },
        { label: t("project.nyc.metric2"), value: "Heatmaps" },
      ],
      tags: ["Data Analysis", "Visualization", "Policy"],
      image: "https://cdn.mavenanalytics.io/public/profile/58616360-8031-7029-a800-44ebe23c0ed4/projects/Project-featured-image-for-Preventing-NYC-Collisions.png",
      link: "https://mavenshowcase.com/project/36424",
    },
    {
      title: t("project.downtime.title"),
      category: t("project.downtime.category"),
      description: t("project.downtime.description"),
      metrics: [
        { label: t("project.downtime.metric1"), value: "Excel" },
        { label: t("project.downtime.metric2"), value: "Pareto" },
      ],
      tags: ["Manufacturing", "Efficiency", "Analytics"],
      image: "https://cdn.mavenanalytics.io/public/profile/58616360-8031-7029-a800-44ebe23c0ed4/projects/20250716_0304_Manufacturing-Efficiency-Analysis_remix_01k08x7zb4e6abkxyr4rnez4jc.png",
      link: "https://mavenshowcase.com/project/36736",
    },
    {
      title: t("project.toys.title"),
      category: t("project.toys.category"),
      description: t("project.toys.description"),
      metrics: [
        { label: t("project.toys.metric1"), value: "Power BI" },
        { label: t("project.toys.metric2"), value: "DAX" },
      ],
      tags: ["Dashboard", "KPIs", "Retail"],
      image: "https://cdn.mavenanalytics.io/public/profile/58616360-8031-7029-a800-44ebe23c0ed4/projects/featured-image.png",
      link: "https://mavenshowcase.com/project/41219",
    },
  ];

  const marketingProjects = [
    {
      title: t("project.fenix.title"),
      category: t("project.fenix.category"),
      description: t("project.fenix.description"),
      metrics: [
        { label: t("project.fenix.metric1"), value: "+400%" },
        { label: t("project.fenix.metric2"), value: "+20%" },
      ],
      tags: ["CRM", "Email Automation", "Power BI"],
      image: fenixImage,
    },
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
  ];

  const projects = activeTab === "analytics" ? analyticsProjects : marketingProjects;

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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("projects.description")}
          </p>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4">
            <Button
              variant={activeTab === "analytics" ? "default" : "outline"}
              onClick={() => setActiveTab("analytics")}
              className="px-6"
            >
              {t("projects.tab.analytics")}
            </Button>
            <Button
              variant={activeTab === "marketing" ? "default" : "outline"}
              onClick={() => setActiveTab("marketing")}
              className="px-6"
            >
              {t("projects.tab.marketing")}
            </Button>
          </div>
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
