import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Revenue Boost",
    category: "SEO & PPC",
    description: "Comprehensive digital strategy for a fashion retailer resulting in record-breaking sales and organic traffic growth.",
    metrics: [
      { label: "Revenue Increase", value: "+340%" },
      { label: "Organic Traffic", value: "+280%" },
    ],
    tags: ["Google Ads", "SEO", "Analytics"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "SaaS Lead Generation",
    category: "Content Marketing",
    description: "Built a content engine that generated qualified B2B leads through strategic blog posts, whitepapers, and email sequences.",
    metrics: [
      { label: "Leads Generated", value: "2,500+", },
      { label: "Cost per Lead", value: "-65%" },
    ],
    tags: ["HubSpot", "LinkedIn", "Email"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Restaurant Chain Rebrand",
    category: "Social Media",
    description: "Complete social media overhaul for a 20-location restaurant chain, creating viral content and community engagement.",
    metrics: [
      { label: "Engagement Rate", value: "+450%" },
      { label: "Followers Gained", value: "125K" },
    ],
    tags: ["Instagram", "TikTok", "UGC"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
  },
  {
    title: "Fitness App Launch",
    category: "Performance Marketing",
    description: "Orchestrated a multi-channel launch campaign for a fitness app, achieving top 10 Health & Fitness ranking.",
    metrics: [
      { label: "App Downloads", value: "500K+" },
      { label: "ROAS", value: "4.2x" },
    ],
    tags: ["Meta Ads", "Apple Search", "Influencer"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  },
  {
    title: "Real Estate Portal SEO",
    category: "Technical SEO",
    description: "Technical SEO audit and implementation for a real estate marketplace with millions of property listings.",
    metrics: [
      { label: "Indexed Pages", value: "+200%" },
      { label: "Organic Sessions", value: "+180%" },
    ],
    tags: ["Schema", "Core Web Vitals", "Migration"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Healthcare Clinic Network",
    category: "Local SEO",
    description: "Local SEO campaign for a network of 15 clinics, dominating local search results across multiple cities.",
    metrics: [
      { label: "Map Pack Rankings", value: "Top 3" },
      { label: "Appointment Bookings", value: "+220%" },
    ],
    tags: ["Google Business", "Reviews", "Citations"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Projects That Drive Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of successful digital marketing campaigns across various industries and channels.
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
