import { ArrowRight, TrendingUp, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  const {
    t
  } = useLanguage();
  const stats = [{
    icon: TrendingUp,
    value: "250%",
    label: t("hero.stat.roi")
  }, {
    icon: Users,
    value: "50+",
    label: t("hero.stat.clients")
  }, {
    icon: BarChart3,
    value: "1M+",
    label: t("hero.stat.leads")
  }];
  return <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img alt="Digital marketing analytics visualization" className="w-full h-full object-cover" src="/lovable-uploads/ca8e750d-3087-4fe5-99f3-d4671abfb1ee.png" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in">
            {t("hero.badge")}
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            {t("hero.titleLine1")}
            <br />
            <span className="text-primary">{t("hero.titleHighlight")}</span>
          </h1>
          
          

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="group">
              {t("hero.viewWork")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              {t("hero.downloadResume")}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
            {stats.map(stat => <div key={stat.label} className="text-center sm:text-left">
                <stat.icon className="h-6 w-6 text-primary mb-2 mx-auto sm:mx-0" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;