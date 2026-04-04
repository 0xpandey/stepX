"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Truck, ShieldCheck, History, Heart } from "lucide-react";
import { getProductBySlug, products } from "@/lib/data";
import { formatPrice, cn } from "@/lib/utils";
import { useCart, useWishlist } from "@/lib/store-context";
import { ProductCard } from "@/components/product-card";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const [selectedSize, setSelectedSize] = useState(
    product.sizes.find((s) => s.inStock)?.size || ""
  );
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]?.name || ""
  );
  const [selectedImage, setSelectedImage] = useState(0);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1, selectedSize, selectedColor);
  };

  const handleBuyNow = () => {
    addToCart(product, 1, selectedSize, selectedColor);
    window.location.href = "/checkout";
  };

  const handleToggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product, selectedSize, selectedColor);
    }
  };

  // Get related products (same category, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="pt-24 pb-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary-fixed transition-colors font-label text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Shop
        </Link>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Gallery */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Image */}
          <div className="aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden group">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={cn(
                    "aspect-square bg-surface-container-low rounded-lg overflow-hidden transition-all",
                    selectedImage === index
                      ? "ring-2 ring-primary-fixed"
                      : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Info */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32 space-y-10">
            {/* Product Header */}
            <div>
              {product.badge && (
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-primary-fixed mb-2 block">
                  {product.badge}
                </span>
              )}
              <h1 className="font-headline text-4xl lg:text-5xl font-black tracking-tighter leading-none mb-4 uppercase">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-4">
                <span className="font-headline text-3xl font-bold text-primary-fixed">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="font-headline text-xl text-outline line-through opacity-50">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.stock <= 5 && (
                <p className="mt-4 text-primary-fixed-dim font-label text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary-fixed rounded-full animate-pulse" />
                  Only {product.stock} units left in stock!
                </p>
              )}
            </div>

            {/* Options */}
            <div className="space-y-6">
              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label className="font-label text-[10px] uppercase tracking-widest text-outline">
                    Select Size (UK)
                  </label>
                  <button className="text-[10px] uppercase tracking-widest text-primary-fixed-dim hover:underline transition-all">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => size.inStock && setSelectedSize(size.size)}
                      disabled={!size.inStock}
                      className={cn(
                        "py-3 font-label text-sm rounded-md transition-all",
                        !size.inStock
                          ? "bg-surface-container-high opacity-30 cursor-not-allowed text-on-surface-variant"
                          : selectedSize === size.size
                          ? "bg-primary-fixed text-on-primary-fixed font-bold shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                          : "bg-surface-container-high text-on-surface-variant border border-transparent hover:border-outline-variant"
                      )}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <label className="font-label text-[10px] uppercase tracking-widest text-outline mb-4 block">
                  Vault Colorways
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        "w-10 h-10 rounded-full p-0.5 cursor-pointer transition-all",
                        selectedColor === color.name
                          ? "border-2 border-primary-fixed"
                          : "border-2 border-transparent hover:border-outline-variant"
                      )}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      <div className="w-full h-full rounded-full border border-black/20" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-4">
              <button
                onClick={handleBuyNow}
                className="w-full py-5 kinetic-gradient text-on-primary-fixed font-headline text-lg font-black tracking-widest uppercase rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl neon-glow"
              >
                Buy Now
              </button>
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-5 bg-transparent border border-outline/30 text-white font-headline text-lg font-black tracking-widest uppercase rounded-lg hover:bg-white/5 transition-all"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleToggleWishlist}
                  className={cn(
                    "px-5 py-5 border rounded-lg transition-all",
                    inWishlist
                      ? "bg-error/20 border-error text-error"
                      : "border-outline/30 text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  <Heart
                    className="w-6 h-6"
                    fill={inWishlist ? "currentColor" : "none"}
                  />
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 gap-4 pt-6 border-t border-outline-variant/20">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-surface-container-high rounded-full text-primary-fixed group-hover:scale-110 transition-transform">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider">
                    Free India Delivery
                  </h4>
                  <p className="text-[10px] text-outline">
                    Complimentary express shipping on all vault orders.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-surface-container-high rounded-full text-primary-fixed group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider">
                    Secure Payments
                  </h4>
                  <p className="text-[10px] text-outline">
                    PCI-DSS certified encrypted transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-surface-container-high rounded-full text-primary-fixed group-hover:scale-110 transition-transform">
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-label text-xs font-bold uppercase tracking-wider">
                    Easy Returns
                  </h4>
                  <p className="text-[10px] text-outline">
                    14-day window for exchange or vault credit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Story Section */}
      <section className="mt-32 lg:mt-48">
        <div className="max-w-4xl">
          <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary-fixed mb-4 block">
            The Narrative
          </span>
          <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-12 uppercase">
            Heritage <br /> Meets Street.
          </h2>
          <div className="space-y-6 text-outline font-body text-lg leading-relaxed">
            <p>{product.description}</p>
            <p>
              Every pair is a testament to craftsmanship and culture. At StepX
              Vault, we curate only the most pristine examples of contemporary
              classics.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-32 lg:mt-48">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-outline mb-2 block">
                Curated Selection
              </span>
              <h2 className="font-headline text-4xl font-black tracking-tighter uppercase">
                You Might Also Like
              </h2>
            </div>
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 flex items-center justify-center border border-outline/20 rounded-full text-white/50 hover:text-white hover:border-white transition-all">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center border border-outline/20 rounded-full text-white/50 hover:text-white hover:border-white transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} variant="compact" />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
