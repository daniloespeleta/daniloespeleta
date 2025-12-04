import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-foreground">
            <span className="text-primary">Digital</span>Mark
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
