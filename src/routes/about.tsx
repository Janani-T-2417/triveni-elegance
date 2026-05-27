import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Target, Eye, ShieldCheck, Sprout } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Triveni Traders | Wholesale Rice & Dals, Odisha" },
      { name: "description", content: "Learn about Triveni Traders — a Jeypore-based wholesale supplier of rice, dals and cashews built on quality and trust." },
    ],
  }),
  component: About,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

function About() {
  const stats = [
    { value: 500, suffix: "+", label: "Happy Customers" },
    { value: 19, suffix: "+", label: "Product Varieties" },
    { value: 10000, suffix: "+", label: "Orders Delivered" },
    { value: 25, suffix: "+", label: "Cities Served" },
  ];

  return (
    <Layout>
      <section className="container-px mx-auto max-w-7xl py-12 md:py-20">
        <SectionHeader eyebrow="Our Story" title="A family-run name in wholesale grains" subtitle="From the lanes of MG Road, Jeypore — Triveni Traders has been quietly building trust, one sack of grain at a time." />
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="container-px mx-auto max-w-6xl grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", desc: "To bring honestly-priced, consistently high-quality rice, dals and cashews to every household, retailer and restaurant we serve." },
            { icon: Eye, title: "Our Vision", desc: "To become Odisha's most trusted wholesale partner for staple grains — known for purity, reliability and warmth of service." },
            { icon: ShieldCheck, title: "Quality Assurance", desc: "Every batch is hand-checked for cleanliness, moisture and grain integrity before it leaves our warehouse." },
          ].map((c, i) => (
            <motion.div key={c.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-card transition-shadow">
              <div className="size-14 rounded-2xl bg-gradient-gold flex items-center justify-center text-foreground/80 mb-5">
                <c.icon size={24} />
              </div>
              <h3 className="font-display text-2xl">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="text-center bg-card border border-border rounded-2xl p-8 shadow-soft">
              <p className="font-display text-5xl md:text-6xl text-sage-deep">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20 md:py-28">
        <div className="container-px mx-auto max-w-5xl">
          <SectionHeader eyebrow="Why Choose Us" title="What makes Triveni different" />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {[
              { t: "Direct sourcing", d: "We work directly with farmers and mills — cutting middlemen, keeping prices fair and quality high." },
              { t: "Wholesale-first", d: "Built for retailers, restaurants and bulk buyers. Reliable supply, transparent rates." },
              { t: "Odisha rooted", d: "Based in Jeypore, Koraput — we understand the regional market and ship across the state and beyond." },
              { t: "Personal service", d: "Talk to a real person on WhatsApp. We treat every order — small or large — with the same care." },
            ].map((x, i) => (
              <motion.div key={x.t} initial={{ opacity: 0, x: i % 2 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card border border-border rounded-2xl p-6 flex gap-4">
                <div className="size-11 rounded-xl bg-sage/15 text-sage-deep flex items-center justify-center shrink-0">
                  <Sprout size={20} />
                </div>
                <div>
                  <h4 className="font-display text-xl">{x.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
