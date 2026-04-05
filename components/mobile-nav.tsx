"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Store, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/shop", icon: Store, label: "Shop" },
  { href: "/search", icon: Search, label: "Search" },
  { href: "/account", icon: User, label: "Profile" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full glass-nav flex justify-around items-center px-6 pb-8 pt-4 z-50 shadow-[0_-4px_40px_rgba(204,255,0,0.04)]">
      {navItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center p-3 transition-all duration-200",
              isActive
                ? "bg-primary-fixed text-on-primary-fixed rounded-full scale-110"
                : "text-white/50 hover:text-white"
            )}
          >
            <item.icon
              className="w-5 h-5"
              fill={isActive ? "currentColor" : "none"}
            />
            {!isActive && (
              <span className="font-label uppercase text-[10px] tracking-widest mt-1">
                {item.label}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
