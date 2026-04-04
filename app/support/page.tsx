"use client"

import Link from "next/link"
import { ArrowLeft, HelpCircle, Package, CreditCard, RefreshCw, Shield, ChevronRight, MessageCircle, Mail, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"

const categories = [
  { icon: Package, title: "Orders & Shipping", href: "/support/orders", description: "Track orders, shipping info" },
  { icon: RefreshCw, title: "Returns & Exchanges", href: "/support/returns", description: "Return policy, how to return" },
  { icon: CreditCard, title: "Payments & Billing", href: "/support/payments", description: "Payment methods, refunds" },
  { icon: Shield, title: "Authentication", href: "/support/auth", description: "Product verification" },
]

const faqs = [
  {
    question: "How do I track my order?",
    answer: "You can track your order by visiting the Orders page in your account. Once your order ships, you'll receive a tracking number via email.",
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 14 days of delivery for unworn items in original packaging. All items must pass authentication before a refund is processed.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. Vault members receive complimentary express shipping.",
  },
  {
    question: "Are all products authentic?",
    answer: "Yes, every item sold on STEPX is 100% authentic. Our team of experts verifies each product before it ships to you.",
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20 pb-24 md:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/" className="md:hidden">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Support</h1>
              <p className="text-muted-foreground mt-1">
                How can we help you today?
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <HelpCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full bg-card border border-border pl-12 pr-4 py-3 focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 gap-4 mb-12">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="bg-card border border-border p-4 hover:border-foreground/20 transition-colors"
              >
                <category.icon className="w-6 h-6 mb-3 text-muted-foreground" />
                <h3 className="font-semibold mb-1">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </Link>
            ))}
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group bg-card border border-border">
                  <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                    <span className="font-medium">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-4 pb-4 text-muted-foreground">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-card border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Still need help?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to assist you.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 border border-border hover:bg-muted/50 transition-colors">
                <MessageCircle className="w-5 h-5" />
                Live Chat
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-border hover:bg-muted/50 transition-colors">
                <Mail className="w-5 h-5" />
                Email Us
              </button>
              <button className="flex items-center justify-center gap-2 py-3 border border-border hover:bg-muted/50 transition-colors">
                <Phone className="w-5 h-5" />
                Call Us
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}
