"use client";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";

const categories = ["All", "Lifestyle", "Running", "Basketball", "Training"];
const sizes = ["7", "8", "9", "10", "11", "12"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([5000, 25000]);

  const filteredProducts = products.filter((product) => {
    // Category filter
    if (selectedCategory !== "All" && product.category !== selectedCategory) {
      return false;
    }

    // Size filter
    if (selectedSizes.length > 0) {
      const hasSize = product.sizes.some(
        (s) => selectedSizes.includes(s.size) && s.inStock
      );
      if (!hasSize) return false;
    }

    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false;
    }

    return true;
  });

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-4">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary-fixed">
            Vault Curated Series
          </span>
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-4">
            Explore the Vault
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Curated Premium Sneakers. Artifacts of street culture, sourced for
            the discerning collector.
          </p>
        </div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-fixed/10 blur-[120px] rounded-full pointer-events-none" />
      </section>

      <div className="px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 mb-32">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0 space-y-12">
          {/* Category Filter */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-6 text-primary">
              Category
            </h3>
            <div className="space-y-4">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="w-5 h-5 rounded border-outline-variant bg-surface-container-high text-primary-fixed focus:ring-offset-surface focus:ring-primary-fixed"
                  />
                  <span
                    className={cn(
                      "font-body text-sm transition-colors",
                      selectedCategory === category
                        ? "text-primary"
                        : "text-on-surface-variant group-hover:text-primary"
                    )}
                  >
                    {category}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-6 text-primary">
              Size (UK)
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={cn(
                    "py-3 text-xs font-bold rounded transition-all",
                    selectedSizes.includes(size)
                      ? "bg-primary-fixed text-on-primary-fixed"
                      : "border border-outline-variant hover:border-primary-fixed"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-headline text-lg font-bold mb-6 text-primary">
              Price Range
            </h3>
            <div className="space-y-6">
              <input
                type="range"
                min="5000"
                max="25000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary-fixed"
              />
              <div className="flex justify-between font-label text-xs text-on-surface-variant">
                <span>₹{priceRange[0].toLocaleString()}</span>
                <span>₹{priceRange[1].toLocaleString()}+</span>
              </div>
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSelectedSizes([]);
              setPriceRange([5000, 25000]);
            }}
            className="w-full py-3 border border-white/20 text-white/60 font-label text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
          >
            Clear All Filters
          </button>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Results Count */}
          <div className="flex justify-between items-center mb-8">
            <p className="font-label text-sm text-on-surface-variant">
              Showing {filteredProducts.length} products
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-headline text-2xl text-white/40 mb-4">
                No products found
              </p>
              <p className="text-on-surface-variant">
                Try adjusting your filters
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
