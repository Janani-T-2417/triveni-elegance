import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function KaajuPage() {
  const kaaju = products.filter(p => p.category === "Kaaju");
  return (
    <Layout>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute -top-32 -right-32 size-96 rounded-full bg-gold/25 blur-3xl animate-float-slow" />
        <div className="absolute top-20 -left-32 size-80 rounded-full bg-sage/20 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="container-px mx-auto max-w-7xl py-16 md:py-24 text-center relative">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-sage-deep bg-cream/70 border border-border rounded-full px-4 py-2">
            <Sparkles size={14} className="text-gold-deep" /> Premium Kaaju Collection
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 font-display text-5xl md:text-6xl text-balance">
            Whole Cashew Kernels, <span className="italic text-sage-deep">graded to perfection</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From king-size W180 to the popular W320 — plus salted and roasted favourites. Every kernel is sortex-cleaned and hand-picked.
          </motion.p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["W180", "W210", "W240", "W320", "Salted", "Roasted"].map(g => (
              <span key={g} className="px-4 py-1.5 rounded-full text-xs uppercase tracking-widest bg-card border border-border text-sage-deep font-medium">
                <Award size={12} className="inline mr-1.5 -mt-0.5" /> {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeader eyebrow="The Range" title="Every Grade, Pure Quality" subtitle="Tap any cashew to view details, pricing and place an order." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kaaju.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
        </div>
      </section>
    </Layout>
  );
}
