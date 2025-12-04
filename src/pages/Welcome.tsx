import { useNavigate } from "react-router-dom";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
const Welcome = () => {
  const navigate = useNavigate();
  const {
    setLanguage
  } = useLanguage();
  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    navigate("/home");
  };
  return <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">DaniloEspeleta<span className="text-red-500">Danilo</span>Mark
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Select your preferred language / Selecione seu idioma preferido
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="min-w-[160px]" onClick={() => handleLanguageSelect("en")}>
            🇺🇸 English
          </Button>
          <Button size="lg" variant="outline" className="min-w-[160px]" onClick={() => handleLanguageSelect("pt")}>
            🇧🇷 Português
          </Button>
        </div>
      </div>
    </div>;
};
export default Welcome;