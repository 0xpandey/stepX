"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

const trendingSearches = [
  "Jordan 1",
  "Air Max",
  "Limited Drop",
  "New Arrivals",
  "Running",
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
  }, [query]);

  return (
    <main className="pt-24 pb-24 min-h-screen px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Search Header */}
        <div className="mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Search the Vault
          </h1>

          {/* Search Input */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-on-surface-variant" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for sneakers, brands, categories..."
              className="w-full bg-surface-container-high border-2 border-transparent focus:border-primary-fixed rounded-lg pl-16 pr-6 py-5 text-lg font-body text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-0 transition-colors"
              autoFocus
            />
          </div>
        </div>

        {/* Results or Trending */}
        {query.trim() ? (
          <>
            {/* Results Count */}
            <div className="mb-8">
              <p className="font-label text-sm text-on-surface-variant">
                {searchResults.length} results for &ldquo;{query}&rdquo;
              </p>
            </div>

            {/* Results Grid */}
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {searchResults.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-headline text-2xl text-white/40 mb-4">
                  No products found
                </p>
                <p className="text-on-surface-variant">
                  Try searching for something else
                </p>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Trending Searches */}
            <div className="mb-16">
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tighter mb-6">
                Trending Searches
              </h2>
              <div className="flex flex-wrap gap-3">
                {trendingSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-6 py-3 bg-surface-container-high text-on-surface font-label text-sm uppercase tracking-widest hover:bg-primary-fixed hover:text-on-primary-fixed transition-all"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Products */}
            <div>
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tighter mb-8">
                Popular Right Now
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
