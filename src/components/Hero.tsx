import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return <section className="relative min-h-screen flex items-center pt-20 bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 animate-fade-in">
              {t("hero.badge")}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {t("hero.titleLine1")}
              <br />
              <span className="text-primary">{t("hero.titleHighlight")}</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                {t("hero.viewWork")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                {t("hero.downloadResume")}
              </Button>
            </div>
          </div>

          {/* Image Block */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                alt="Digital marketing analytics visualization" 
                className="w-full h-auto object-cover" 
                src="/lovable-uploads/ca8e750d-3087-4fe5-99f3-d4671abfb1ee.png" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;