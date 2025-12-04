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
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
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
                  className="flex flex-col items-center sm:items-start text-center sm:text-left p-4 rounded-xl bg-card border border-border"
                >
                  <credential.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground text-sm">{credential.title}</h4>
                  <p className="text-xs text-muted-foreground">{credential.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-1">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <span className="text-5xl font-bold text-primary">DM</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{t("about.role")}</h3>
                  <p className="text-muted-foreground">{t("about.specialty")}</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
