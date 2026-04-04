"use client"

import Link from "next/link"
import { ArrowLeft, Crown, Check, Zap, Shield, Gift, Star } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"

const benefits = [
  {
    icon: Zap,
    title: "Early Access",
    description: "Get first dibs on all new releases and restocks 24 hours before everyone else",
  },
  {
    icon: Shield,
    title: "Exclusive Drops",
    description: "Access to member-only releases and limited edition collaborations",
  },
  {
    icon: Gift,
    title: "Free Shipping",
    description: "Complimentary express shipping on all orders, no minimum required",
  },
  {
    icon: Star,
    title: "Priority Support",
    description: "Dedicated concierge service for all your sneaker needs",
  },
]

const plans = [
  {
    name: "Monthly",
    price: 14.99,
    period: "month",
    popular: false,
  },
  {
    name: "Annual",
    price: 99.99,
    period: "year",
    popular: true,
    savings: "Save $80",
  },
]

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20 pb-24 md:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/account" className="md:hidden">
              <ArrowLeft className="w-6 h-6" />
            </Link>
          </div>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-500/10 mb-6">
              <Crown className="w-10 h-10 text-amber-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Join the Vault
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Unlock exclusive access to limited drops, early releases, and premium benefits reserved for our most dedicated collectors.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-card border border-border p-6">
                <div className="w-12 h-12 bg-amber-500/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-card border p-6 ${
                  plan.popular ? "border-amber-500" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-background text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6 pt-4">
                  <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <span className="inline-block mt-2 px-3 py-1 bg-green-500/10 text-green-500 text-sm font-medium">
                      {plan.savings}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {["Early access to drops", "Member-only releases", "Free express shipping", "Priority support"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/membership/checkout"
                  className={`block w-full py-3 text-center font-medium transition-colors ${
                    plan.popular
                      ? "bg-amber-500 text-background hover:bg-amber-600"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="text-center">
            <p className="text-muted-foreground">
              Questions? Check out our{" "}
              <Link href="/support" className="text-foreground underline">
                FAQ
              </Link>
              {" "}or{" "}
              <Link href="/support" className="text-foreground underline">
                contact support
              </Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}
