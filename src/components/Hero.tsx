import { useLanguage } from "@/contexts/LanguageContext";
import DecorativeShapes from "./DecorativeShapes";
import { Linkedin } from "lucide-react";




const Hero = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative flex items-center pt-16 pb-8 bg-background overflow-hidden">
      <DecorativeShapes variant="hero" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <span 
              className="inline-block px-6 py-3 bg-secondary text-secondary-foreground text-sm font-bold mb-8 uppercase tracking-wider border-3 border-foreground brutal-shadow animate-bounce-in"
              style={{ animationDelay: '0.1s' }}
            >
              {t("hero.badge")}
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-8">
              <span 
                className="block animate-slide-in-left"
                style={{ animationDelay: '0.2s' }}
              >
                {t("hero.titleLine1")}
              </span>
              <span 
                className="block text-primary animate-slide-in-left"
                style={{ animationDelay: '0.4s' }}
              >
                {t("hero.titleHighlight")}
              </span>
            </h1>

            <div 
              className="animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <a
                href="https://www.linkedin.com/in/danilo-espeleta"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 border-3 border-foreground shadow-brutal bg-background text-foreground font-bold uppercase tracking-wide hover:bg-foreground hover:text-background hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Image Block */}
          <div 
            className="relative hidden lg:block animate-slide-in-right"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative border-3 border-foreground brutal-shadow-lg bg-card p-4">
              <img 
                alt="Digital marketing analytics visualization" 
                className="w-full h-auto object-cover" 
                src="/lovable-uploads/32111224-2946-4ce8-8209-d1cc032ddffc.png" 
              />
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent border-3 border-foreground -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;