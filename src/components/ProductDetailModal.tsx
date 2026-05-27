import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, ShoppingBag, ShieldCheck, Package, Truck } from "lucide-react";
import { useEffect } from "react";
import { type Product, inquiryUrl } from "@/lib/products";

interface Props {
  product: Product | null;
  onClose: () => void;
  onBuy: (product: Product) => void;
}

export function ProductDetailModal({ product, onClose, onBuy }: Props) {
  useEffect(() => {
    if (!product) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", esc); };
  }, [product, onClose]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-foreground/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", damping: 26, stiffness: 240 }}
            className="relative bg-background rounded-3xl overflow-hidden shadow-card max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 size-10 rounded-full glass border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative aspect-square md:aspect-auto bg-secondary">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] tracking-widest uppercase bg-gradient-gold text-foreground/90 font-medium shadow-soft">
                  Premium
                </span>
              </div>

              <div className="p-6 md:p-10 flex flex-col">
                <p className="text-xs uppercase tracking-[0.3em] text-sage-deep">{product.category}</p>
                <h2 className="mt-2 font-display text-3xl md:text-4xl text-foreground leading-tight">{product.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{product.highlight}</p>

                <div className="mt-5 flex items-end gap-3">
                  <span className="font-display text-4xl text-sage-deep">₹{product.price}</span>
                  <span className="text-sm text-muted-foreground pb-1.5">/ {product.unit} · wholesale starting price</span>
                </div>

                <p className="mt-5 text-foreground/80 leading-relaxed">{product.description}</p>

                <div className="mt-6 grid grid-cols-1 gap-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/60 border border-border">
                    <ShieldCheck size={18} className="text-sage-deep mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Quality</p>
                      <p className="text-sm text-foreground">{product.quality}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/60 border border-border">
                      <Package size={18} className="text-sage-deep mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">Status</p>
                        <p className="text-sm text-foreground">{product.availability}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-secondary/60 border border-border">
                      <Truck size={18} className="text-sage-deep mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">Delivery</p>
                        <p className="text-sm text-foreground">Pan-India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onBuy(product)}
                    className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-sage text-primary-foreground font-medium shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all flex-1"
                  >
                    <ShoppingBag size={18} /> Buy Now
                  </button>
                  <a
                    href={inquiryUrl(product.name)}
                    target="_blank" rel="noreferrer"
                    className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-cream border border-border text-foreground font-medium hover:bg-secondary transition-colors flex-1"
                  >
                    <MessageCircle size={18} className="text-sage-deep" /> WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
