"use client";

import Link from "next/link";
import { ShoppingCart, Heart } from "lucide-react";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { useCart, useWishlist } from "@/lib/store-context";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export function ProductCard({
  product,
  variant = "default",
  className,
}: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes.find((s) => s.inStock)?.size || "9";
    const defaultColor = product.colors[0]?.name || "";
    addToCart(product, 1, defaultSize, defaultColor);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  if (variant === "compact") {
    return (
      <Link
        href={`/product/${product.slug}`}
        className={cn("group cursor-pointer", className)}
      >
        <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-4 relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <h3 className="font-headline text-lg font-bold uppercase tracking-tight group-hover:text-primary-fixed transition-colors">
          {product.name}
        </h3>
        <p className="text-outline font-label text-sm mt-1">
          {formatPrice(product.price)}
        </p>
      </Link>
    );
  }

  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn(
        "group cursor-pointer transition-all duration-500",
        variant === "featured"
          ? "bg-surface-container-low hover:bg-surface-container-high"
          : "",
        className
      )}
    >
      {/* Image Container */}
      <div
        className={cn(
          "relative overflow-hidden mb-6",
          variant === "featured"
            ? "p-8 pb-0 aspect-[4/5]"
            : "aspect-[4/5] bg-surface-container-low"
        )}
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 bg-primary-fixed text-on-primary-fixed px-3 py-1 font-label text-[10px] font-black uppercase tracking-widest">
            {product.badge}
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={handleAddToCart}
            className="bg-primary-fixed p-3 rounded-full text-on-primary-fixed hover:scale-110 transition-transform"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
          <button
            onClick={handleToggleWishlist}
            className={cn(
              "p-3 rounded-full transition-all hover:scale-110",
              inWishlist
                ? "bg-error text-white"
                : "bg-surface-container-highest text-white/70 hover:text-white"
            )}
          >
            <Heart className="w-4 h-4" fill={inWishlist ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Product Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            "w-full h-full object-contain transition-transform duration-700 group-hover:scale-110",
            variant === "featured" ? "-rotate-12" : ""
          )}
        />
      </div>

      {/* Product Info */}
      <div className={cn(variant === "featured" ? "p-8 pt-0" : "space-y-2")}>
        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
          {product.brand} / {product.category}
        </p>
        <h3 className="font-headline text-xl lg:text-2xl font-bold tracking-tight text-white group-hover:text-primary-fixed transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-3 pt-1">
          <span className="font-headline text-lg font-bold text-primary-fixed">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="font-body text-sm text-on-surface-variant line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
