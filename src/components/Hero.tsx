import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const cvFiles = {
  pt: "/CV_Danilo_Espeleta_PT.pdf",
  en: "/CV_Danilo_Espeleta_ENG.pdf"
};
const Hero = () => {
  const {
    t,
    language
  } = useLanguage();
  return <section className="relative flex items-start pt-20 pb-8 bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <span className="inline-block px-8 py-4 bg-primary/10 text-primary text-lg font-bold mb-6 animate-fade-in uppercase tracking-wide">
              {t("hero.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              <span className="block animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
                {t("hero.titleLine1")}
              </span>
              <span className="block text-primary animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                {t("hero.titleHighlight")}
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <Button size="lg" className="group" asChild>
                <a href="https://www.linkedin.com/in/danilo-espeleta/" target="_blank" rel="noopener noreferrer">
                  {t("hero.viewWork")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={cvFiles[language]} download>
                  {t("hero.downloadResume")}
                </a>
              </Button>
            </div>
          </div>

          {/* Image Block */}
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden">
              <img alt="Digital marketing analytics visualization" className="w-full h-auto object-cover" src="/lovable-uploads/32111224-2946-4ce8-8209-d1cc032ddffc.png" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;