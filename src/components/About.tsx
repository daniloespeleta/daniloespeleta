import { useLanguage } from "@/contexts/LanguageContext";
import DecorativeShapes from "./DecorativeShapes";

const About = () => {
  const { t } = useLanguage();

  const keywords = [
    t("about.keyword1"),
    t("about.keyword2"),
    t("about.keyword3"),
    t("about.keyword4"),
    t("about.keyword5"),
    t("about.keyword6"),
    t("about.keyword7"),
    t("about.keyword8"),
    t("about.keyword9"),
    t("about.keyword10"),
  ];

  const colors = [
    "bg-primary text-primary-foreground",
    "bg-foreground text-background",
  ];

  return (
    <section id="about" className="relative py-24 bg-muted/30 overflow-hidden">
      <DecorativeShapes variant="about" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-left">
            <span className="inline-block px-8 py-4 bg-accent text-accent-foreground text-3xl font-bold mb-8 uppercase tracking-wider border-3 border-foreground brutal-shadow">
              {t("about.badge")}
            </span>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-secondary pl-6">
                {t("about.paragraph1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-secondary pl-6">
                {t("about.paragraph2")}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-end gap-3 lg:pt-16">
            {keywords.map((keyword, index) => (
              <span
                key={keyword}
                className={`px-4 py-2 text-sm md:text-base font-bold uppercase tracking-wide border-3 border-foreground brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all cursor-default ${colors[index % colors.length]}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;