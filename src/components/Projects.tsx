import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
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
