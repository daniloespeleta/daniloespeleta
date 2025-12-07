import { Award, Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const credentials = [
    {
      icon: Award,
      title: t("about.credential1.title"),
      description: t("about.credential1.description"),
    },
    {
      icon: GraduationCap,
      title: t("about.credential2.title"),
      description: t("about.credential2.description"),
    },
    {
      icon: Briefcase,
      title: t("about.credential3.title"),
      description: t("about.credential3.description"),
    },
  ];

  return (
    <section id="about" className="pt-24 lg:pt-32 pb-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
            {t("about.badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {t("about.paragraph1")}
          </p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t("about.paragraph2")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {credentials.map((credential) => (
              <div
                key={credential.title}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-card border border-border"
              >
                <credential.icon className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold text-foreground text-sm">{credential.title}</h4>
                <p className="text-xs text-muted-foreground">{credential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
