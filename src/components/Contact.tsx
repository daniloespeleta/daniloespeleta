import { useState } from "react";
import { Mail, Linkedin, MapPin, MessageCircle, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import DecorativeShapes from "./DecorativeShapes";

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/danilo-espeleta/", label: "LinkedIn" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name,
          email,
          message,
        },
      });

      if (error) throw error;

      toast({
        title: t("contact.success.title"),
        description: t("contact.success.description"),
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: t("contact.error.title"),
        description: t("contact.error.description"),
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      <DecorativeShapes variant="contact" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-8 py-4 bg-accent text-accent-foreground text-3xl font-bold uppercase tracking-wider border-3 border-foreground brutal-shadow">
            {t("contact.badge")}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border-3 border-foreground brutal-shadow p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                  {t("contact.form.name")}
                </label>
                <Input 
                  name="name" 
                  placeholder="John Doe" 
                  required 
                  disabled={isLoading}
                  className="border-3 border-foreground bg-background focus:ring-0 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                  {t("contact.form.email")}
                </label>
                <Input 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  disabled={isLoading}
                  className="border-3 border-foreground bg-background focus:ring-0 focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2 uppercase tracking-wide">
                  {t("contact.form.message")}
                </label>
                <Textarea
                  name="message"
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="min-h-[120px] border-3 border-foreground bg-background focus:ring-0 focus:border-primary"
                  required
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full border-3 border-foreground brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all bg-primary text-primary-foreground font-bold uppercase tracking-wide" 
                size="lg"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t("contact.form.sending")}
                  </>
                ) : (
                  <>
                    {t("contact.form.submit")}
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
              {t("contact.cta")}
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-primary border-3 border-foreground brutal-shadow flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase">{t("contact.info.location")}</h4>
                  <p className="text-muted-foreground">São Paulo, SP - Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-secondary border-3 border-foreground brutal-shadow flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <Mail className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase">Email</h4>
                  <a href="mailto:daniloespeleta@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    daniloespeleta@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-14 h-14 bg-accent border-3 border-foreground brutal-shadow flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform">
                  <MessageCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase">WhatsApp</h4>
                  <a href="https://wa.me/5511921786184" className="text-muted-foreground hover:text-primary transition-colors">
                    +55 11 92178-6184
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4 uppercase">{t("contact.info.follow")}</h4>
              <div className="flex gap-4">
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
      </div>
    </section>
  );
};

export default Contact;
