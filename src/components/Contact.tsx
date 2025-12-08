import { Mail, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/danilo-espeleta/", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
            {t("contact.badge")}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const firstName = formData.get('firstName') as string;
                  const lastName = formData.get('lastName') as string;
                  const email = formData.get('email') as string;
                  const company = formData.get('company') as string;
                  const message = formData.get('message') as string;
                  
                  const subject = encodeURIComponent(`Contact from ${firstName} ${lastName}`);
                  const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`);
                  window.location.href = `mailto:daniloespeleta@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.firstName")}
                    </label>
                    <Input name="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t("contact.form.lastName")}
                    </label>
                    <Input name="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.email")}
                  </label>
                  <Input name="email" type="email" placeholder="john@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.company")}
                  </label>
                  <Input name="company" placeholder={t("contact.form.companyPlaceholder")} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    name="message"
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  {t("contact.form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("contact.cta")}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{t("contact.info.location")}</h4>
                  <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a href="mailto:daniloespeleta@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    daniloespeleta@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">WhatsApp</h4>
                  <a href="https://wa.me/5511921786184" className="text-muted-foreground hover:text-primary transition-colors">
                    +55 11 92178-6184
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">{t("contact.info.follow")}</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-12 h-12" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
