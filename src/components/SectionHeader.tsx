import { motion } from "framer-motion";

export function SectionHeader({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-sage-deep mb-3">
          <span className="inline-block w-8 h-px bg-gold align-middle mr-2" />
          {eyebrow}
          <span className="inline-block w-8 h-px bg-gold align-middle ml-2" />
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-lg leading-relaxed text-balance">{subtitle}</p>}
    </motion.div>
  );
}
