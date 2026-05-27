import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function DalsPage() {
  const dals = products.filter(p => p.category === "Dals");
  return (
    <Layout>
      <section className="container-px mx-auto max-w-7xl py-12 md:py-20">
        <SectionHeader eyebrow="Dals Collection" title="Wholesome Pulses & Lentils" subtitle="Protein-rich, freshly stocked and graded for purity — the dals every Indian kitchen relies on." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dals.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
        </div>
      </section>
    </Layout>
  );
}
