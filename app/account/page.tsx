"use client"

import Link from "next/link"
import { ArrowLeft, User, Package, Heart, Settings, CreditCard, MapPin, Bell, Shield, LogOut, ChevronRight, Crown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"

const menuItems = [
  {
    section: "Orders & Purchases",
    items: [
      { icon: Package, label: "My Orders", href: "/orders", badge: "3" },
      { icon: Heart, label: "Wishlist", href: "/wishlist", badge: "5" },
    ],
  },
  {
    section: "Account Settings",
    items: [
      { icon: User, label: "Personal Info", href: "/account/profile" },
      { icon: MapPin, label: "Addresses", href: "/account/addresses" },
      { icon: CreditCard, label: "Payment Methods", href: "/account/payments" },
    ],
  },
  {
    section: "Preferences",
    items: [
      { icon: Bell, label: "Notifications", href: "/account/notifications" },
      { icon: Shield, label: "Privacy & Security", href: "/account/privacy" },
      { icon: Settings, label: "Settings", href: "/account/settings" },
    ],
  },
]

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20 pb-24 md:pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="md:hidden">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Account</h1>
          </div>

          {/* Profile Card */}
          <div className="bg-card border border-border p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center text-2xl font-bold">
                JD
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-muted-foreground text-sm">john.doe@example.com</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-500/10 text-amber-500 text-xs font-medium">
                    <Crown className="w-3 h-3" />
                    Vault Member
                  </span>
                </div>
              </div>
              <Link href="/account/profile" className="text-muted-foreground hover:text-foreground">
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Membership Banner */}
          <Link
            href="/membership"
            className="block bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/30 p-4 mb-6 hover:border-amber-500/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-500/20 flex items-center justify-center">
                <Crown className="w-6 h-6 text-amber-500" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-amber-500">Vault Membership</h3>
                <p className="text-sm text-muted-foreground">
                  Exclusive access to limited drops and early releases
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-amber-500" />
            </div>
          </Link>

          {/* Menu Sections */}
          <div className="space-y-6">
            {menuItems.map((section) => (
              <div key={section.section}>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {section.section}
                </h3>
                <div className="bg-card border border-border divide-y divide-border">
                  {section.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
                    >
                      <item.icon className="w-5 h-5 text-muted-foreground" />
                      <span className="flex-1 font-medium">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 bg-foreground text-background text-xs font-medium">
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sign Out */}
          <button className="w-full mt-8 flex items-center justify-center gap-2 p-4 border border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors font-medium">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}
