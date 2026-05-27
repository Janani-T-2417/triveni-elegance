import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/products";

export function FloatingWhatsApp() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank" rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-gradient-sage text-primary-foreground shadow-card flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle size={26} />
        <span className="absolute inset-0 rounded-full bg-sage animate-ping opacity-30" />
      </a>
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-50 size-11 rounded-full glass border border-border text-sage-deep shadow-soft flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
