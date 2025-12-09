import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-foreground text-background border-t-3 border-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold uppercase tracking-wide">
            <span className="text-primary">Danilo</span>Espeleta
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:text-primary transition-colors uppercase font-bold">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-sm hover:text-primary transition-colors uppercase font-bold">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;