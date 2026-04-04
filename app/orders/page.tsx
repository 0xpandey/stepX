"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Package, ChevronRight, Truck, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"

const orders = [
  {
    id: "STX-2024-001",
    date: "March 15, 2024",
    status: "delivered",
    total: 189,
    items: [
      {
        name: "Air Jordan 1 Retro High OG",
        image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=200&h=200&fit=crop",
        size: "US 10",
        price: 189,
      },
    ],
  },
  {
    id: "STX-2024-002",
    date: "March 20, 2024",
    status: "in-transit",
    total: 220,
    items: [
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
    ],
  },
  {
    id: "STX-2024-003",
    date: "March 25, 2024",
    status: "processing",
    total: 275,
    items: [
      {
        name: "Yeezy Boost 350 V2",
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=200&h=200&fit=crop",
        size: "US 11",
        price: 275,
      },
    ],
  },
]

const statusConfig = {
  delivered: {
    label: "Delivered",
    color: "text-green-500",
    bg: "bg-green-500/10",
    icon: CheckCircle2,
  },
  "in-transit": {
    label: "In Transit",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    icon: Truck,
  },
  processing: {
    label: "Processing",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    icon: Package,
  },
}

export default function OrdersPage() {
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
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">My Orders</h1>
              <p className="text-muted-foreground mt-1">
                Track and manage your orders
              </p>
            </div>
          </div>

          {orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
                <Package className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
              <p className="text-muted-foreground mb-6 max-w-md">
                When you place an order, it will appear here for you to track.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-medium hover:bg-foreground/90 transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => {
                const status = statusConfig[order.status as keyof typeof statusConfig]
                const StatusIcon = status.icon
                
                return (
                  <Link
                    key={order.id}
                    href={`/orders/${order.id}`}
                    className="block bg-card border border-border p-4 md:p-6 hover:border-foreground/20 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="font-mono text-sm text-muted-foreground">{order.id}</p>
                        <p className="text-sm text-muted-foreground">{order.date}</p>
                      </div>
                      <div className={`flex items-center gap-2 px-3 py-1 ${status.bg} ${status.color} text-sm font-medium`}>
                        <StatusIcon className="w-4 h-4" />
                        {status.label}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {order.items.slice(0, 3).map((item, idx) => (
                          <div
                            key={idx}
                            className="w-16 h-16 bg-muted overflow-hidden border-2 border-card"
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        {order.items.length > 3 && (
                          <div className="w-16 h-16 bg-muted flex items-center justify-center border-2 border-card text-sm font-medium">
                            +{order.items.length - 3}
                          </div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">
                          {order.items.length === 1
                            ? order.items[0].name
                            : `${order.items.length} items`}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          Total: ${order.total}
                        </p>
                      </div>

                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}
