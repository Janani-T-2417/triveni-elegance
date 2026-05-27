import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Truck, Award, Sparkles, MessageCircle, ArrowRight, Star } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { products, WHATSAPP_URL } from "@/lib/products";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Triveni Traders — Premium Rice, Dals & Cashews | Odisha Wholesale" },
      { name: "description", content: "Trusted wholesale supplier of premium quality rice, dals and cashews from Jeypore, Odisha. Explore our curated range." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = products.filter(p => ["basmati","sona-masuri","toor-dal","cashews","masoor-dal","brown-rice"].includes(p.slug));

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-gold/20 blur-3xl animate-float-slow" />
          <div className="absolute top-40 -left-32 size-96 rounded-full bg-sage/20 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container-px mx-auto max-w-7xl py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-sage-deep bg-cream/60 border border-border rounded-full px-4 py-2">
              <Sparkles size={14} className="text-gold-deep" />
              Wholesale from Odisha
            </p>
            <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.05] text-balance">
              Premium Quality<br />
              <span className="italic text-sage-deep">Rice, Dals</span> & <span className="italic text-gold-deep">Cashews</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Trusted wholesale supplier from Odisha — bringing the finest grains and pulses from trusted farms to your kitchen and business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-sage text-primary-foreground font-medium shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all">
                Explore Products <ArrowRight size={18} />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cream border border-border text-foreground font-medium hover:bg-secondary transition-colors">
                <MessageCircle size={18} className="text-sage-deep" /> Contact on WhatsApp
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => <div key={i} className="size-8 rounded-full bg-gradient-gold border-2 border-background" />)}
              </div>
              <div>
                <div className="flex gap-0.5 text-gold-deep">{Array.from({length: 5}).map((_,i) => <Star key={i} size={14} fill="currentColor" />)}</div>
                <p className="mt-0.5">Trusted by 500+ wholesalers & retailers</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative px-6 md:px-10 lg:px-6 pt-6 lg:pt-10">
            <div className="absolute inset-6 md:inset-10 lg:inset-6 bg-gradient-gold opacity-25 blur-2xl rounded-[3rem]" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-card border border-border/60">
              <img src={hero} alt="Premium rice, dals and cashews" className="w-full h-full object-cover" width={1600} height={1200} />
            </div>

            {/* Top-right floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 glass border border-border rounded-2xl px-4 py-3 shadow-card flex items-center gap-3 max-w-[210px]"
            >
              <div className="size-10 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <ShieldCheck size={18} className="text-foreground" />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-widest text-gold-deep">100%</p>
                <p className="font-display text-base text-foreground">Quality Assured</p>
              </div>
            </motion.div>

            {/* Bottom-left floating badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 glass border border-border rounded-2xl px-4 py-3 shadow-card flex items-center gap-3 max-w-[230px]"
            >
              <div className="size-10 rounded-full bg-gradient-sage flex items-center justify-center shrink-0">
                <Award size={18} className="text-primary-foreground" />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-widest text-sage-deep">Trusted by 500+</p>
                <p className="font-display text-base text-foreground">Wholesalers</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs uppercase tracking-[0.3em] text-sage-deep mb-3">About Triveni Traders</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">Rooted in Odisha, <span className="italic text-sage-deep">growing with trust</span></h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For years, Triveni Traders has been a trusted name in the wholesale supply of rice, dals and cashews across Odisha and beyond. We work directly with trusted farmers and mills to bring you grains that are clean, consistent and full of character.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every sack we deliver is a promise — of quality, freshness and the warmth of family-run service.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sage-deep font-medium hover:gap-3 transition-all">
              Learn more about us <ArrowRight size={18} />
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Leaf, label: "Naturally Sourced", desc: "Direct from trusted farms across Odisha" },
              { icon: ShieldCheck, label: "Quality Assured", desc: "Hand-checked, cleaned & graded" },
              { icon: Truck, label: "Wholesale Supply", desc: "Reliable bulk delivery, on time" },
              { icon: Award, label: "Premium Grades", desc: "Only the finest grains make the cut" },
            ].map((f, i) => (
              <motion.div key={f.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow">
                <div className="size-12 rounded-xl bg-gradient-sage flex items-center justify-center text-primary-foreground">
                  <f.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-xl">{f.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="Explore" title="Our Product Categories" subtitle="A curated range built for households, kitchens and wholesalers alike." />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { to: "/rice", title: "Rice", desc: "10 premium varieties from Basmati to Idli rice", img: products.find(p=>p.slug==="basmati")!.image },
              { to: "/dals", title: "Dals", desc: "8 wholesome pulses — split, whole and skinless", img: products.find(p=>p.slug==="toor-dal")!.image },
              { to: "/kaaju", title: "Kaaju", desc: "Premium whole cashews — W180 to W320 grades", img: products.find(p=>p.slug==="kaju-w320")!.image },
            ].map((c, i) => (
              <motion.div key={c.to} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={c.to} className="group block relative rounded-3xl overflow-hidden aspect-[4/5] shadow-soft hover:shadow-card transition-shadow">
                  <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-primary-foreground">
                    <h3 className="font-display text-3xl">{c.title}</h3>
                    <p className="mt-1 text-sm text-primary-foreground/85">{c.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">View Collection <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader eyebrow="Featured" title="Bestselling Selections" subtitle="A glimpse into the grains, lentils and nuts our customers come back for." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
        </div>
        <div className="mt-12 text-center">
          <Link to="/products" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-sage text-primary-foreground font-medium shadow-soft hover:shadow-card transition-all">
            View All Products <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeader eyebrow="Customer Voices" title="Built on relationships, not just orders" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { name: "Ramesh K.", role: "Wholesaler, Bhubaneswar", q: "Consistent quality every order. Triveni's basmati and toor dal are now staples in my shop." },
              { name: "Anita P.", role: "Restaurant Owner, Cuttack", q: "Their sona masuri cooks beautifully — my customers can tell the difference. Reliable supply too." },
              { name: "Sandeep M.", role: "Retailer, Koraput", q: "Honest people, honest grain. The cashews are premium and pricing is fair for wholesale." },
            ].map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-7 shadow-soft">
                <div className="flex gap-0.5 text-gold-deep mb-4">{Array.from({length:5}).map((_,j) => <Star key={j} size={16} fill="currentColor" />)}</div>
                <p className="text-foreground/85 leading-relaxed font-display text-lg italic">"{t.q}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-sage text-primary-foreground p-10 md:p-16 shadow-card">
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-gold/40 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-balance">Looking for wholesale pricing?</h2>
              <p className="mt-4 text-primary-foreground/85 text-lg max-w-xl">Send us a quick message on WhatsApp — we'll share our latest rates and arrange delivery to your location.</p>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cream text-foreground font-medium hover:bg-background transition-colors shadow-card">
              <MessageCircle size={20} className="text-sage-deep" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
