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
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-3 border-foreground">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/home" className="text-2xl font-bold text-foreground uppercase tracking-wide">
          <span className="text-primary">Danilo</span>Espeleta
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-bold uppercase tracking-wide text-sm border-2 border-transparent hover:border-foreground"
            >
              {link.label}
            </a>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors font-bold uppercase tracking-wide text-sm border-2 border-foreground brutal-shadow outline-none">
              <Globe size={18} />
              <span>{language}</span>
              <ChevronDown size={14} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border-3 border-foreground brutal-shadow z-50">
              <DropdownMenuItem
                onClick={() => setLanguage("pt")}
                className={`font-bold uppercase cursor-pointer ${language === "pt" ? "bg-primary text-primary-foreground" : ""}`}
              >
                Português
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setLanguage("en")}
                className={`font-bold uppercase cursor-pointer ${language === "en" ? "bg-primary text-primary-foreground" : ""}`}
              >
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 border-2 border-foreground brutal-shadow hover:bg-primary hover:text-primary-foreground transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-t-3 border-foreground">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-3 text-foreground font-bold uppercase tracking-wide border-2 border-foreground brutal-shadow outline-none w-full justify-center">
                <Globe size={18} />
                <span>{language}</span>
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-3 border-foreground brutal-shadow z-50 w-full">
                <DropdownMenuItem
                  onClick={() => setLanguage("pt")}
                  className={`font-bold uppercase cursor-pointer ${language === "pt" ? "bg-primary text-primary-foreground" : ""}`}
                >
                  Português
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={`font-bold uppercase cursor-pointer ${language === "en" ? "bg-primary text-primary-foreground" : ""}`}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-bold uppercase tracking-wide text-center border-2 border-foreground brutal-shadow"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;