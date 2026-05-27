import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Eye } from "lucide-react";
import { useState } from "react";
import { type Product, inquiryUrl } from "@/lib/products";
import { ProductDetailModal } from "@/components/ProductDetailModal";
import { PaymentModal } from "@/components/PaymentModal";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const [openDetail, setOpenDetail] = useState(false);
  const [buyProduct, setBuyProduct] = useState<Product | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
        className="group relative bg-card rounded-2xl overflow-hidden border border-border/60 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 cursor-pointer flex flex-col"
        onClick={() => setOpenDetail(true)}
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
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider bg-background/85 backdrop-blur text-sage-deep font-medium border border-border">
            {product.availability}
          </span>
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/95 text-foreground text-sm font-medium shadow-card">
              <Eye size={16} /> View Details
            </span>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display text-xl text-foreground">{product.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-widest text-sage-deep">{product.highlight}</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">{product.description}</p>

          <div className="mt-4 flex items-baseline justify-between">
            <div>
              <span className="font-display text-2xl text-sage-deep">₹{product.price}</span>
              <span className="text-xs text-muted-foreground ml-1">/ {product.unit}</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Wholesale</span>
          </div>

          <div className="mt-4 pt-4 border-t border-border flex gap-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setBuyProduct(product)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-gradient-sage text-primary-foreground text-xs font-medium shadow-soft hover:shadow-card transition-all"
            >
              <ShoppingBag size={14} /> Buy Now
            </button>
            <a
              href={inquiryUrl(product.name)}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-cream border border-border text-foreground text-xs font-medium hover:bg-secondary transition-colors"
              aria-label="WhatsApp Inquiry"
            >
              <MessageCircle size={14} className="text-sage-deep" />
            </a>
          </div>
        </div>
      </motion.div>

      <ProductDetailModal
        product={openDetail ? product : null}
        onClose={() => setOpenDetail(false)}
        onBuy={(p) => { setOpenDetail(false); setBuyProduct(p); }}
      />
      <PaymentModal product={buyProduct} onClose={() => setBuyProduct(null)} />
    </>
  );
}
