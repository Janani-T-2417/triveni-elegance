import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ProductCard } from "@/components/ProductCard";
import { products, type Category } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Triveni Traders | Rice, Dals & Cashews" },
      { name: "description", content: "Browse our complete range of wholesale rice, dals and premium cashews." },
    ],
  }),
  component: ProductsPage,
});

const filters: ("All" | Category)[] = ["All", "Rice", "Dals", "Kaaju"];

function ProductsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof filters)[number]>("All");

  const list = useMemo(() => products.filter(p =>
    (cat === "All" || p.category === cat) &&
    (q.trim() === "" || p.name.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase()))
  ), [q, cat]);

  return (
    <Layout>
      <section className="container-px mx-auto max-w-7xl py-12 md:py-20">
        <SectionHeader eyebrow="The Range" title="Our Complete Product Collection" subtitle="Search, filter and find the grain or pulse that fits your needs." />

        <div className="mt-12 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-sage/40 transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map(f => (
              <button key={f} onClick={() => setCat(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${cat === f ? "bg-gradient-sage text-primary-foreground shadow-soft" : "bg-card border border-border text-foreground/80 hover:bg-secondary"}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {list.map((p, i) => <ProductCard key={p.slug} product={p} index={i} />)}
        </div>

        {list.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No products match your search.</p>
        )}
      </section>
    </Layout>
  );
}
