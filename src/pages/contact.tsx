import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { WHATSAPP_URL, PHONE, EMAIL, ADDRESS } from "@/lib/products";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const msg = `Hello TRIVENI TRADERS,%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AMessage: ${data.get("message")}`;
    window.open(`https://wa.me/919438426292?text=${msg}`, "_blank");
    setSent(true);
  };

  const cards = [
    { icon: Phone, label: "Call / WhatsApp", value: PHONE, href: `tel:${PHONE}` },
    { icon: Mail, label: "Email Us", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: "Visit Us", value: ADDRESS, href: "#map" },
    { icon: Clock, label: "Business Hours", value: "Mon–Sat: 9 AM – 8 PM", href: "#" },
  ];

  return (
    <Layout>
      <section className="container-px mx-auto max-w-7xl py-12 md:py-20">
        <SectionHeader eyebrow="Get in Touch" title="We'd love to hear from you" subtitle="Wholesale inquiries, custom orders or simply a quick question — pick your favourite way to reach us." />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="block bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="size-12 rounded-xl bg-gradient-sage text-primary-foreground flex items-center justify-center">
                <c.icon size={20} />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-sage-deep">{c.label}</p>
              <p className="mt-1 font-medium text-foreground break-words">{c.value}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-3xl p-8 md:p-10 shadow-soft">
            <h3 className="font-display text-3xl">Send us a message</h3>
            <p className="mt-2 text-muted-foreground">Fill the form and we'll continue on WhatsApp.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-foreground/80">Your Name</label>
                <input required name="name" className="mt-1 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-sage/40" />
              </div>
              <div>
                <label className="text-sm text-foreground/80">Phone</label>
                <input required name="phone" type="tel" className="mt-1 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-sage/40" />
              </div>
              <div>
                <label className="text-sm text-foreground/80">Message</label>
                <textarea required name="message" rows={4} className="mt-1 w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-sage/40 resize-none" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-sage text-primary-foreground font-medium shadow-soft hover:shadow-card transition-all">
                <Send size={16} /> Send via WhatsApp
              </button>
              {sent && <p className="text-sm text-sage-deep">Opening WhatsApp…</p>}
            </form>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-sage-deep">
              <MessageCircle size={16} /> Or chat with us directly
            </a>
          </motion.div>

          <motion.div id="map" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden border border-border shadow-soft min-h-[400px] bg-secondary">
            <iframe
              title="Triveni Traders location"
              src="https://www.google.com/maps?q=MG+Road,+Jeypore,+Koraput,+Odisha&output=embed"
              width="100%" height="100%"
              style={{ border: 0, minHeight: 400 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
