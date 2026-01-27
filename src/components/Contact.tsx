import { Mail, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DecorativeShapes from "./DecorativeShapes";

const Contact = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/danilo-espeleta/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      <DecorativeShapes variant="contact" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-8 py-4 bg-accent text-accent-foreground text-3xl font-bold uppercase tracking-wider border-3 border-foreground brutal-shadow">
            {t("contact.badge")}
          </span>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide text-center mb-12">
            {t("contact.cta")}
          </h3>

          {/* Contact Info - Single Row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12">
            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary border-3 border-foreground brutal-shadow flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-muted-foreground">São Paulo, SP - Brasil</span>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-secondary border-3 border-foreground brutal-shadow flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                <Mail className="w-5 h-5 text-secondary-foreground" />
              </div>
              <a href="mailto:daniloespeleta@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                daniloespeleta@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-accent border-3 border-foreground brutal-shadow flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                <MessageCircle className="w-5 h-5 text-accent-foreground" />
              </div>
              <a href="https://wa.me/5511921786184" className="text-muted-foreground hover:text-primary transition-colors">
                +55 11 92178-6184
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h4 className="font-bold text-foreground mb-4 uppercase">{t("contact.info.follow")}</h4>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-foreground border-3 border-foreground brutal-shadow flex items-center justify-center hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all hover:bg-primary"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-background" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
