import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    t,
    language,
    setLanguage
  } = useLanguage();

  const navLinks = [{
    label: t("nav.projects"),
    href: "#projects"
  }, {
    label: t("nav.services"),
    href: "#services"
  }, {
    label: t("nav.about"),
    href: "#about"
  }, {
    label: t("nav.contact"),
    href: "#contact"
  }];

  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/home" className="text-2xl font-bold text-foreground">
          <span className="text-primary">Danilo</span>Espeleta
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium">
              {link.label}
            </a>)}
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium outline-none">
              <Globe size={18} />
              <span className="uppercase">{language}</span>
              <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border-border z-50">
              <DropdownMenuItem 
                onClick={() => setLanguage("pt")}
                className={language === "pt" ? "bg-primary/10 text-primary" : ""}
              >
                Português
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => setLanguage("en")}
                className={language === "en" ? "bg-primary/10 text-primary" : ""}
              >
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium py-2 outline-none">
                <Globe size={18} />
                <span className="uppercase">{language}</span>
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border z-50">
                <DropdownMenuItem 
                  onClick={() => setLanguage("pt")}
                  className={language === "pt" ? "bg-primary/10 text-primary" : ""}
                >
                  Português
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "bg-primary/10 text-primary" : ""}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {navLinks.map(link => <a key={link.href} href={link.href} className="text-muted-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>)}
          </div>
        </nav>}
    </header>;
};

export default Header;