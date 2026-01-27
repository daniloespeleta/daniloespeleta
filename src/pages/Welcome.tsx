import { useNavigate } from "react-router-dom";
import { useLanguage, Language } from "@/contexts/LanguageContext";

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleLanguageSelect("pt")}
            className="min-w-[180px] px-8 py-4 bg-background text-foreground font-bold uppercase tracking-wide border-3 border-foreground shadow-brutal hover:bg-foreground hover:text-background hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150"
          >
            Português
          </button>
          <button
            onClick={() => handleLanguageSelect("en")}
            className="min-w-[180px] px-8 py-4 bg-background text-foreground font-bold uppercase tracking-wide border-3 border-foreground shadow-brutal hover:bg-foreground hover:text-background hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150"
          >
            English
          </button>
        </div>
      </div>
    </div>;
};
export default Welcome;