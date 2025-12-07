import { Users, TrendingUp, Building2, CalendarDays, BarChart3, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Users,
      title: t("service.seo.title"),
      description: t("service.seo.description"),
    },
    {
      icon: TrendingUp,
      title: t("service.ppc.title"),
      description: t("service.ppc.description"),
    },
    {
      icon: Building2,
      title: t("service.social.title"),
      description: t("service.social.description"),
    },
    {
      icon: CalendarDays,
      title: t("service.email.title"),
      description: t("service.email.description"),
    },
    {
      icon: BarChart3,
      title: t("service.content.title"),
      description: t("service.content.description"),
    },
    {
      icon: Zap,
      title: t("service.analytics.title"),
      description: t("service.analytics.description"),
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("services.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("services.description")}
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
