import { Search, Share2, Target, Mail, PenTool, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Technical SEO audits, keyword strategy, and content optimization to dominate organic search rankings.",
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "High-performance Google Ads and Meta campaigns with continuous optimization for maximum ROAS.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic content creation and community management across all major social platforms.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email sequences, newsletter campaigns, and lead nurturing workflows that convert.",
  },
  {
    icon: PenTool,
    title: "Content Strategy",
    description: "Data-driven content planning, creation, and distribution to attract and engage your target audience.",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Custom dashboards and actionable insights to measure ROI and guide strategic decisions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            What I Do
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Services & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-spectrum digital marketing services tailored to your business goals and growth targets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group bg-card hover:bg-primary/5 border-border hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
