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
      
    </div>;
};
export default Welcome;