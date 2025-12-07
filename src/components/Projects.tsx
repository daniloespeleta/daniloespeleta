import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import fenixImage from "@/assets/fenix-educacao-project.jpg";
import lbvImage from "@/assets/lbv-branding-project.png";
import monchuImage from "@/assets/monchu-events-project.jpg";

const Projects = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"marketing" | "analytics">("marketing");

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
      title: t("project.lbv.title"),
      category: t("project.lbv.category"),
      description: t("project.lbv.description"),
      metrics: [
        { label: t("project.lbv.metric1"), value: "+45%" },
        { label: t("project.lbv.metric2"), value: "-25%" },
      ],
      tags: ["Branding", "360º Campaigns", "Stakeholders"],
      image: lbvImage,
    },
    {
      title: t("project.monchu.title"),
      category: t("project.monchu.category"),
      description: t("project.monchu.description"),
      metrics: [
        { label: t("project.monchu.metric1"), value: "6x" },
        { label: t("project.monchu.metric2"), value: "+150%" },
      ],
      tags: ["Events", "Social Media", "Sponsorships"],
      image: monchuImage,
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
              variant={activeTab === "marketing" ? "default" : "outline"}
              onClick={() => setActiveTab("marketing")}
              className="px-6"
            >
              {t("projects.tab.marketing")}
            </Button>
            <Button
              variant={activeTab === "analytics" ? "default" : "outline"}
              onClick={() => setActiveTab("analytics")}
              className="px-6"
            >
              {t("projects.tab.analytics")}
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
