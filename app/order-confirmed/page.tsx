import Link from "next/link";
import { CheckCircle, Package, ArrowRight } from "lucide-react";

export default function OrderConfirmedPage() {
  // Generate a random order ID
  const orderId = `SX-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  return (
    <main className="pt-32 pb-32 px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-primary-fixed/20 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-primary-fixed" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">
          Order <span className="text-primary-fixed">Secured</span>
        </h1>

        <p className="font-body text-xl text-on-surface-variant mb-8">
          Your vault items are being prepared for secure dispatch.
        </p>

        {/* Order Details Card */}
        <div className="bg-surface-container-low p-8 rounded-lg mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Package className="w-6 h-6 text-primary-fixed" />
            <span className="font-headline text-lg font-bold uppercase tracking-widest">
              Order #{orderId}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-6 text-left">
            <div>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                Status
              </p>
              <p className="font-headline font-bold text-primary-fixed">
                Confirmed
              </p>
            </div>
            <div>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                Estimated Delivery
              </p>
              <p className="font-headline font-bold">3-5 Business Days</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-outline-variant/20">
            <p className="text-sm text-on-surface-variant">
              A confirmation email has been sent to your registered email
              address with tracking details.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/account/orders"
            className="px-8 py-4 bg-primary-fixed text-on-primary-fixed font-headline font-bold uppercase tracking-widest hover:brightness-110 transition-all inline-flex items-center justify-center gap-2"
          >
            Track Order
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/shop"
            className="px-8 py-4 border border-white/20 text-white font-headline font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
