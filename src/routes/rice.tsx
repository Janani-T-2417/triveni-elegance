import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/rice")({
  head: () => ({
    meta: [
      { title: "Rice Varieties — Triveni Traders | Basmati, Sona Masuri & More" },
      { name: "description", content: "Explore 10 premium rice varieties from Triveni Traders — Basmati, Sona Masuri, Ponni, Brown Rice, Idli Rice and more." },
    ],
  }),
  component: RicePage,
});

function RicePage() {
  const rice = products.filter(p => p.category === "Rice");
  return (
    <Layout>
      <section className="container-px mx-auto max-w-7xl py-12 md:py-20">
        <SectionHeader eyebrow="Rice Collection" title="Premium Rice Varieties" subtitle="From everyday staples to celebration-worthy long grains — handpicked, cleaned and ready for your kitchen." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {rice.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
        </div>
      </section>
    </Layout>
  );
}
