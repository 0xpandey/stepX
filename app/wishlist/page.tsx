"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag, Trash2, ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"
import { useWishlist, useCart } from "@/lib/store-context"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleAddToCart = (item: typeof wishlist[0]) => {
    addToCart(
      item.product,
      1,
      item.selectedSize || item.product.sizes[0]?.size || "US 10",
      item.selectedColor || item.product.colors[0]?.name || ""
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="md:hidden">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Wishlist</h1>
              <p className="text-muted-foreground mt-1">
                {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
              </p>
            </div>
          </div>

          {wishlist.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6 max-w-md">
                Start adding items you love to your wishlist. They&apos;ll appear here for easy access.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-medium hover:bg-foreground/90 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                Browse Collection
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {wishlist.map((wishlistItem) => {
                const product = wishlistItem.product;
                return (
                <div key={product.id} className="group relative">
                  <Link href={`/product/${product.id}`}>
                    <div className="aspect-square bg-card overflow-hidden mb-3">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                  
                  {/* Actions */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-medium text-sm truncate">{product.name}</h3>
                    <p className="text-muted-foreground text-sm">{product.brand}</p>
                    <p className="font-semibold">${product.price}</p>
                  </div>

                  <button
                    onClick={() => handleAddToCart(wishlistItem)}
                    className="mt-3 w-full bg-foreground text-background py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              )})}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}
