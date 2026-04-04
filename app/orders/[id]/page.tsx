"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Package, Truck, CheckCircle2, MapPin } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"

const trackingSteps = [
  { status: "Order Placed", date: "Mar 20, 2024 at 10:32 AM", completed: true },
  { status: "Authenticated", date: "Mar 21, 2024 at 2:15 PM", completed: true },
  { status: "Shipped", date: "Mar 22, 2024 at 9:00 AM", completed: true },
  { status: "Out for Delivery", date: "Mar 25, 2024", completed: false },
  { status: "Delivered", date: "Expected Mar 25, 2024", completed: false },
]

const orderItems = [
  {
    name: "Nike Dunk Low Retro",
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=200&h=200&fit=crop",
    size: "US 9.5",
    price: 110,
  },
  {
    name: "New Balance 550",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=200&h=200&fit=crop",
    size: "US 10",
    price: 110,
  },
]

export default function OrderDetailPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-20 pb-24 md:pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link href="/orders">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">Order STX-2024-002</h1>
              <p className="text-muted-foreground text-sm">Placed on March 20, 2024</p>
            </div>
          </div>

          {/* Status Banner */}
          <div className="bg-amber-500/10 border border-amber-500/30 p-4 mb-8 flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <p className="font-semibold text-amber-500">In Transit</p>
              <p className="text-sm text-muted-foreground">
                Your order is on its way! Expected delivery: March 25, 2024
              </p>
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="bg-card border border-border p-6 mb-6">
            <h2 className="font-semibold mb-6">Tracking</h2>
            <div className="relative">
              {trackingSteps.map((step, index) => (
                <div key={step.status} className="flex gap-4 pb-6 last:pb-0">
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`w-8 h-8 flex items-center justify-center ${
                        step.completed
                          ? "bg-green-500 text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : index === 3 ? (
                        <Truck className="w-4 h-4" />
                      ) : (
                        <Package className="w-4 h-4" />
                      )}
                    </div>
                    {index < trackingSteps.length - 1 && (
                      <div
                        className={`w-0.5 flex-1 mt-2 ${
                          step.completed ? "bg-green-500" : "bg-border"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <p className={`font-medium ${!step.completed && "text-muted-foreground"}`}>
                      {step.status}
                    </p>
                    <p className="text-sm text-muted-foreground">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-card border border-border p-6 mb-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Delivery Address</h3>
                <p className="text-muted-foreground text-sm">
                  John Doe<br />
                  123 Main Street, Apt 4B<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-card border border-border p-6 mb-6">
            <h2 className="font-semibold mb-4">Items in Order</h2>
            <div className="space-y-4">
              {orderItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-20 h-20 bg-muted overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                    <p className="font-semibold mt-1">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-card border border-border p-6">
            <h2 className="font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>$220.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-green-500">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>$19.80</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border text-base font-semibold">
                <span>Total</span>
                <span>$239.80</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Link
              href="/support"
              className="flex-1 py-3 text-center border border-border hover:bg-card transition-colors font-medium"
            >
              Need Help?
            </Link>
            <button className="flex-1 py-3 bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium">
              Download Invoice
            </button>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}
