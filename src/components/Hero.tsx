import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
const Hero = () => {
  const {
    t
  } = useLanguage();
  return <section className="relative min-h-screen flex items-center pt-8 bg-[#ffffff]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            
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
                <a href="/CV_Danilo_Espeleta_ATS.pdf" download>
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