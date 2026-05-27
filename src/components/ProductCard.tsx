import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { type Product, inquiryUrl } from "@/lib/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border/60 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase bg-gradient-gold text-foreground/90 font-medium shadow-soft">
          Premium
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl text-foreground">{product.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-widest text-sage-deep">{product.highlight}</p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{product.description}</p>
        <a
          href={inquiryUrl(product.name)}
          target="_blank" rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sage-deep hover:text-foreground transition-colors group/btn"
        >
          <MessageCircle size={16} />
          <span>Inquiry on WhatsApp</span>
          <span className="transition-transform group-hover/btn:translate-x-1">→</span>
        </a>
      </div>
    </motion.div>
  );
}
