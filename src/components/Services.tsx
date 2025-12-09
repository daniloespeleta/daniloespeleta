import { Users, TrendingUp, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DecorativeShapes from "./DecorativeShapes";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Users,
      title: t("service.seo.title"),
      description: t("service.seo.description"),
      color: "bg-primary",
    },
    {
      icon: TrendingUp,
      title: t("service.ppc.title"),
      description: t("service.ppc.description"),
      color: "bg-secondary",
    },
    {
      icon: Building2,
      title: t("service.social.title"),
      description: t("service.social.description"),
      color: "bg-accent",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-muted/30 overflow-hidden">
      <DecorativeShapes variant="services" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-3 bg-secondary text-secondary-foreground text-sm font-bold uppercase tracking-wider border-3 border-foreground brutal-shadow">
            {t("services.badge")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border-3 border-foreground brutal-shadow hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-200 p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 ${service.color} border-3 border-foreground brutal-shadow flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                <service.icon className="h-10 w-10 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 uppercase tracking-wide">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;