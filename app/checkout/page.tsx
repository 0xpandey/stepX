"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, CreditCard, Wallet, ArrowRight, ShieldCheck, Award } from "lucide-react";
import { useCart } from "@/lib/store-context";
import { formatPrice, cn } from "@/lib/utils";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const taxAmount = Math.round(cartTotal * 0.18);
  const totalAmount = cartTotal + taxAmount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Clear cart and redirect to success
    clearCart();
    router.push("/order-confirmed");
  };

  if (cart.length === 0) {
    return (
      <main className="pt-32 pb-32 px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="text-center py-20">
          <h1 className="font-headline text-5xl font-bold tracking-tighter text-on-surface mb-4">
            YOUR CART IS EMPTY
          </h1>
          <p className="text-on-surface-variant mb-8">
            Add some products before checking out
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
    <main className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Shipping & Payment */}
          <div className="lg:col-span-7 space-y-16">
            {/* Shipping Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-primary-fixed font-headline text-xl font-bold italic">
                  01
                </span>
                <h2 className="font-headline text-3xl font-bold tracking-tight uppercase">
                  Shipping Details
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                <div className="col-span-2">
                  <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary-fixed text-on-surface placeholder:text-white/10 p-4 transition-all uppercase"
                    placeholder="JOHN DOE"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary-fixed text-on-surface placeholder:text-white/10 p-4 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary-fixed text-on-surface placeholder:text-white/10 p-4 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                    Shipping Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary-fixed text-on-surface placeholder:text-white/10 p-4 transition-all uppercase"
                    placeholder="123 MAIN STREET, APARTMENT 4B"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary-fixed text-on-surface placeholder:text-white/10 p-4 transition-all uppercase"
                    placeholder="MUMBAI"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-surface-container-highest border-none focus:ring-0 focus:border-b-2 focus:border-primary-fixed text-on-surface placeholder:text-white/10 p-4 transition-all"
                    placeholder="400001"
                  />
                </div>
              </div>
            </section>

            {/* Payment Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-primary-fixed font-headline text-xl font-bold italic">
                  02
                </span>
                <h2 className="font-headline text-3xl font-bold tracking-tight uppercase">
                  Payment Method
                </h2>
              </div>

              <div className="space-y-4">
                {/* Razorpay Option */}
                <div
                  onClick={() => setPaymentMethod("razorpay")}
                  className={cn(
                    "group relative bg-surface-container-low p-6 flex items-center justify-between cursor-pointer transition-colors",
                    paymentMethod === "razorpay"
                      ? "border-l-4 border-primary-fixed"
                      : "border-l-4 border-transparent hover:bg-surface-container"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                        paymentMethod === "razorpay"
                          ? "border-primary-fixed"
                          : "border-white/20"
                      )}
                    >
                      {paymentMethod === "razorpay" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-primary-fixed" />
                      )}
                    </div>
                    <div>
                      <p className="font-headline font-bold uppercase tracking-wide">
                        Razorpay Secure
                      </p>
                      <p className="text-xs text-white/40 uppercase tracking-widest mt-1">
                        Cards, UPI, Netbanking
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <CreditCard className="w-5 h-5 text-white/30" />
                    <Wallet className="w-5 h-5 text-white/30" />
                  </div>
                </div>

                {/* COD Option */}
                <div
                  onClick={() => setPaymentMethod("cod")}
                  className={cn(
                    "group relative bg-surface-container-lowest p-6 flex items-center justify-between cursor-pointer transition-colors",
                    paymentMethod === "cod"
                      ? "border-l-4 border-primary-fixed bg-surface-container-low"
                      : "border-l-4 border-transparent hover:bg-surface-container-low"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                        paymentMethod === "cod"
                          ? "border-primary-fixed"
                          : "border-white/20"
                      )}
                    >
                      {paymentMethod === "cod" && (
                        <div className="w-2.5 h-2.5 rounded-full bg-primary-fixed" />
                      )}
                    </div>
                    <div>
                      <p className="font-headline font-bold uppercase tracking-wide">
                        Cash on Delivery
                      </p>
                      <p className="text-xs text-white/40 uppercase tracking-widest mt-1">
                        Pay upon delivery
                      </p>
                    </div>
                  </div>
                  <Wallet className="w-5 h-5 text-white/30" />
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 space-y-8">
              <div className="bg-surface-container-low p-8 rounded-lg shadow-[0_32px_64px_rgba(0,0,0,0.5)]">
                <h3 className="font-headline text-xl font-bold uppercase tracking-tight mb-8">
                  Order Summary
                </h3>

                {/* Products */}
                <div className="space-y-6 mb-10">
                  {cart.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}`}
                      className="flex gap-6 items-start"
                    >
                      <div className="w-24 h-24 bg-surface-container-high overflow-hidden rounded-lg flex-shrink-0">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h4 className="font-headline font-bold uppercase text-sm leading-tight">
                            {item.product.name}
                            <span className="text-white/40 font-normal text-xs mt-1 block">
                              UK {item.selectedSize} / {item.selectedColor} x{" "}
                              {item.quantity}
                            </span>
                          </h4>
                          <span className="font-headline font-bold text-primary-fixed">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-4 pt-8 border-t border-white/5">
                  <div className="flex justify-between text-xs uppercase tracking-widest text-white/40">
                    <span>Subtotal</span>
                    <span className="text-white">{formatPrice(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between text-xs uppercase tracking-widest text-white/40">
                    <span>Shipping</span>
                    <span className="text-primary-fixed-dim italic">FREE</span>
                  </div>
                  <div className="flex justify-between text-xs uppercase tracking-widest text-white/40">
                    <span>Taxes (GST 18%)</span>
                    <span className="text-white">{formatPrice(taxAmount)}</span>
                  </div>
                  <div className="flex justify-between items-end pt-6">
                    <span className="font-headline text-2xl font-black italic uppercase tracking-tighter">
                      Total
                    </span>
                    <div className="text-right">
                      <span className="block text-[10px] text-primary-fixed uppercase tracking-widest mb-1">
                        Final Amount
                      </span>
                      <span className="font-headline text-3xl font-black text-white">
                        {formatPrice(totalAmount)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full mt-12 bg-primary-fixed hover:bg-primary-fixed-dim text-on-primary-fixed py-6 px-8 font-headline font-black italic text-lg uppercase tracking-tighter transform active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    "Processing..."
                  ) : (
                    <>
                      Complete Purchase
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Trust Badges */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 bg-surface-container-highest/30 px-3 py-3 rounded">
                    <ShieldCheck className="w-4 h-4 text-primary-fixed" />
                    <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold leading-tight">
                      Secure SSL
                      <br />
                      Encrypted
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container-highest/30 px-3 py-3 rounded">
                    <Award className="w-4 h-4 text-primary-fixed" />
                    <span className="text-[9px] uppercase tracking-widest text-white/60 font-bold leading-tight">
                      Verified
                      <br />
                      Merchant
                    </span>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] leading-relaxed px-4">
                By clicking complete purchase, you agree to the StepX Vault
                Terms of Service and Privacy Policy. All sales are final for
                curated vault items.
              </p>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
