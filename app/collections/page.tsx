import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collections } from "@/lib/data";

export default function CollectionsPage() {
  return (
    <main className="pt-24 pb-24 min-h-screen">
      {/* Header */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary-fixed mb-4 block">
            Vault Collections
          </span>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
            Shop by Collection
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Explore our curated collections, each telling a unique story of
            style, culture, and craftsmanship.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <Link
                key={collection.id}
                href={`/shop?collection=${collection.slug}`}
                className={`group relative overflow-hidden bg-surface-container-low ${
                  index === 0 ? "md:col-span-2 aspect-[21/9]" : "aspect-[4/3]"
                }`}
              >
                {/* Background Image */}
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary-fixed mb-2">
                    {collection.productCount} Products
                  </span>
                  <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4 group-hover:text-primary-fixed transition-colors">
                    {collection.name}
                  </h2>
                  <p className="font-body text-on-surface-variant mb-6 max-w-md">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary-fixed font-headline font-bold text-sm uppercase tracking-widest">
                    Explore Collection
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
