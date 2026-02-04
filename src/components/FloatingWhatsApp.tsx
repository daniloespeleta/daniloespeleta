import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5511921786184"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] border-3 border-foreground brutal-shadow flex items-center justify-center hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default FloatingWhatsApp;
