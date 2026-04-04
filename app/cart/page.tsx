"use client";

import Link from "next/link";
import { Trash2, Minus, Plus, ShieldCheck, Lock, CreditCard, Shield } from "lucide-react";
import { useCart } from "@/lib/store-context";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <main className="pt-32 pb-32 px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="text-center py-20">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-on-surface mb-4">
            YOUR VAULT IS EMPTY
          </h1>
          <p className="text-on-surface-variant mb-8">
            Add some premium sneakers to your collection
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-primary-fixed text-on-primary-fixed font-headline font-bold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-32 px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <header className="mb-16">
        <h1 className="font-headline text-5xl font-bold tracking-tighter text-on-surface mb-2">
          YOUR VAULT
        </h1>
        <p className="font-body text-on-surface-variant/60 uppercase tracking-widest text-xs">
          {cart.length} Items Selected for Curated Delivery
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-8">
          {cart.map((item) => (
            <div
              key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
              className="group flex flex-col md:flex-row gap-8 bg-surface-container-low p-6 rounded-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full md:w-48 h-48 bg-surface-container-high rounded overflow-hidden">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Details */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-2xl font-bold text-white tracking-tight mb-1">
                      {item.product.name}
                    </h3>
                    <p className="font-label text-on-surface-variant uppercase text-[10px] tracking-widest">
                      {item.selectedColor} / Size {item.selectedSize}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-on-surface-variant/40 hover:text-error transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-wrap items-end justify-between gap-4 mt-8">
                  <div className="flex items-center gap-8">
                    {/* Size */}
                    <div className="flex flex-col gap-1">
                      <span className="font-label text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
                        Size
                      </span>
                      <span className="font-headline font-bold text-lg">
                        UK {item.selectedSize}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="flex flex-col gap-1">
                      <span className="font-label text-[10px] text-on-surface-variant/50 uppercase tracking-widest">
                        Quantity
                      </span>
                      <div className="flex items-center bg-surface-container-highest rounded-full px-3 py-1 mt-1 border border-outline-variant/10">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="text-on-surface hover:text-primary-fixed p-1"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="mx-4 font-headline font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="text-on-surface hover:text-primary-fixed p-1"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <span className="font-headline text-2xl font-bold text-primary-fixed tracking-tight">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <aside className="lg:col-span-4 lg:sticky lg:top-32">
          <div className="bg-surface-container-high p-8 rounded-lg">
            <h2 className="font-headline text-xl font-bold mb-8 uppercase tracking-widest">
              Order Summary
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between font-body text-on-surface-variant">
                <span>Subtotal</span>
                <span className="text-white">{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between font-body text-on-surface-variant">
                <span>Shipping</span>
                <span className="text-primary-fixed-dim uppercase text-sm font-bold tracking-widest">
                  Free
                </span>
              </div>
              <div className="flex justify-between font-body text-on-surface-variant">
                <span>Estimated Tax</span>
                <span className="text-white">Calculated at checkout</span>
              </div>
            </div>

            <div className="pt-6 border-t border-outline-variant/20 mb-8">
              <div className="flex justify-between items-baseline">
                <span className="font-headline text-sm font-bold uppercase tracking-widest">
                  Total Amount
                </span>
                <span className="font-headline text-4xl font-bold text-primary-fixed tracking-tighter">
                  {formatPrice(cartTotal)}
                </span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="block w-full bg-primary-fixed text-on-primary-fixed font-headline font-bold py-5 rounded-md text-center neon-glow transition-all duration-300 hover:brightness-110 active:scale-95 mb-6 uppercase tracking-widest"
            >
              Proceed to Checkout
            </Link>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-outline-variant/10">
              <div className="flex flex-col items-center gap-4 opacity-40">
                <span className="font-label text-[10px] uppercase tracking-widest">
                  Guaranteed Safe Checkout
                </span>
                <div className="flex justify-center gap-6">
                  <ShieldCheck className="w-5 h-5" />
                  <Lock className="w-5 h-5" />
                  <CreditCard className="w-5 h-5" />
                  <Shield className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
