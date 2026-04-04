"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Search, Menu, X, User, Heart } from "lucide-react";
import { useStore, useCart } from "@/lib/store-context";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections", label: "Collections" },
];

export function Navbar() {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { state, dispatch } = useStore();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    dispatch({ type: "TOGGLE_MENU" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 lg:px-8 py-4 max-w-[1600px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-8 lg:gap-12">
          <Link
            href="/"
            className="text-2xl font-black italic text-primary-fixed tracking-tighter font-headline"
          >
            StepX
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-headline font-bold tracking-tighter transition-colors duration-300",
                  pathname === link.href
                    ? "text-primary-fixed border-b-2 border-primary-fixed pb-1"
                    : "text-white/70 hover:text-primary-fixed"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center bg-surface-container-highest px-4 py-2 rounded-lg gap-3">
            <Search className="w-4 h-4 text-white/50" />
            <input
              type="text"
              placeholder="Search Vault..."
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm w-48 text-white placeholder-white/30 font-label uppercase tracking-widest"
            />
          </div>

          {/* Search Icon - Mobile/Tablet */}
          <button
            className="lg:hidden text-white/70 hover:text-primary-fixed transition-colors"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Wishlist */}
          <Link
            href="/account/wishlist"
            className="hidden sm:flex text-white/70 hover:text-primary-fixed transition-colors relative"
          >
            <Heart className="w-5 h-5" />
            {state.wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary-fixed text-on-primary-fixed text-[10px] font-bold px-1.5 rounded-full">
                {state.wishlist.length}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative text-primary-fixed hover:scale-95 active:scale-90 transition-transform"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-on-primary-fixed text-[10px] font-bold px-1.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Profile */}
          <Link
            href="/account/dashboard"
            className="hidden sm:flex items-center gap-2"
          >
            {state.user ? (
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-fixed/30 hover:border-primary-fixed transition-colors">
                <img
                  src={state.user.avatar}
                  alt={state.user.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <User className="w-5 h-5 text-white/70 hover:text-primary-fixed transition-colors" />
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={toggleMenu}
          >
            {state.isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="lg:hidden px-6 pb-4">
          <div className="flex items-center bg-surface-container-highest px-4 py-3 rounded-lg gap-3">
            <Search className="w-4 h-4 text-white/50" />
            <input
              type="text"
              placeholder="Search Vault..."
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm flex-1 text-white placeholder-white/30 font-label uppercase tracking-widest"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {state.isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-container-lowest border-t border-white/5">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => dispatch({ type: "TOGGLE_MENU", payload: false })}
                className={cn(
                  "font-headline font-bold text-xl tracking-tighter py-2 transition-colors",
                  pathname === link.href
                    ? "text-primary-fixed"
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-white/5 my-2" />
            <Link
              href="/account/dashboard"
              onClick={() => dispatch({ type: "TOGGLE_MENU", payload: false })}
              className="font-headline font-bold text-xl tracking-tighter py-2 text-white/70 hover:text-white transition-colors"
            >
              Account
            </Link>
            <Link
              href="/account/wishlist"
              onClick={() => dispatch({ type: "TOGGLE_MENU", payload: false })}
              className="font-headline font-bold text-xl tracking-tighter py-2 text-white/70 hover:text-white transition-colors"
            >
              Wishlist
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
