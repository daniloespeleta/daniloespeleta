import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const keywords = [
    "Integrated Marketing",
    "Brand Leadership",
    "Growth Marketing",
    "Campaign Planning",
    "CRM Strategy & Automation",
    "Lifecycle Management",
    "Data-Driven Optimization",
    "Customer Engagement & Retention",
    "Analytics",
    "Content Development",
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            {t("about.badge")}
          </span>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {t("about.paragraph1")}
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t("about.paragraph2")}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {keywords.map((keyword, index) => (
              <span
                key={keyword}
                className={`text-4xl md:text-5xl font-bold uppercase tracking-wide ${
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
