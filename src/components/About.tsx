import { useLanguage } from "@/contexts/LanguageContext";

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

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-left">
            <span className="inline-block px-8 py-4 bg-primary/10 text-primary text-lg font-bold mb-6 uppercase tracking-wide">
              {t("about.badge")}
            </span>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t("about.paragraph1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.paragraph2")}
            </p>
          </div>

          <div className="flex flex-wrap justify-end gap-4 text-right lg:pt-16">
            {keywords.map((keyword, index) => (
              <span
                key={keyword}
                className={`text-xl md:text-2xl font-bold uppercase tracking-wide ${
                  index % 2 === 0 ? "text-foreground" : "text-primary"
                }`}
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
