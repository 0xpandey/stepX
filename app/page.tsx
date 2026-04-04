import Link from "next/link";
import { ArrowRight, Verified, Truck, RotateCcw, Zap, Star } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts, products } from "@/lib/data";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary-fixed-dim/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary-fixed/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-block px-3 py-1 bg-surface-container-high text-primary-fixed font-label text-[10px] tracking-[0.2em] uppercase mb-6">
              Exclusive Drop
            </div>

            {/* Headline */}
            <h1 className="font-headline font-bold text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter mb-8 italic">
              Flat 20% <br />
              <span className="text-primary-fixed-dim">OFF</span>
            </h1>

            {/* Subheadline */}
            <p className="font-body text-xl md:text-2xl text-white/60 max-w-xl mb-10 leading-relaxed">
              Premium Sneakers for the culture. Limited Stock.{" "}
              <br className="hidden md:block" />
              Free Delivery Across India.
            </p>

            {/* CTA */}
            <Link
              href="/shop"
              className="kinetic-gradient text-on-primary-fixed px-10 py-5 font-headline font-black text-lg italic tracking-tighter uppercase rounded-lg hover:brightness-110 transition-all inline-flex items-center gap-3 neon-glow"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-square md:scale-125 lg:translate-x-12">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFsXTTKsKgYW8nKS6QYpQNNRfMfvhsB80nBH1cIPDv_K5qaAK3WC_SDiw6Oz3zEuq16-jcqscaAcGh5DDt_gH2xtm88dXdGnWJTkJ23UWmrbSWqifIE5-5sRspLU5pXRzjcpXLVtvIQGfikvBuKhUT3SjSrBASry0c9d3tDBC8BB1vBIDnB4GKcTM3FqrCKOilYllRcOs0Wq1k2aaII5zeTL3CXSgwUFkhYR5T8KANMCBmy6L8mjqlb1z_H5VV4c0Rxffwv7pMDA"
                alt="Premium Nike Sneaker"
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(195,244,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Featured Products Section */}
      <section className="bg-surface-container-lowest py-32">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div>
              <h2 className="font-headline font-bold text-5xl md:text-7xl tracking-tighter italic uppercase">
                Vault <span className="text-primary-fixed-dim">Heats</span>
              </h2>
              <p className="text-white/40 font-label tracking-widest uppercase mt-4">
                Curated Artifacts of Street Culture
              </p>
            </div>
            <div className="text-right">
              <span className="text-error font-headline font-bold italic text-xl flex items-center gap-2">
                <Zap className="w-5 h-5" fill="currentColor" />
                Only a few items left
              </span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={index === 1 ? "lg:-translate-y-12" : ""}
              >
                <ProductCard product={product} variant="featured" />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-16">
            <Link
              href="/shop"
              className="px-8 py-4 border border-white/20 text-white font-headline font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-surface transition-all"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="flex flex-col gap-6">
              <Verified className="w-12 h-12 text-primary-fixed" />
              <h4 className="font-headline text-3xl font-bold italic tracking-tight">
                Guaranteed Authenticity
              </h4>
              <p className="text-white/50 leading-relaxed">
                Every pair in our vault undergoes a rigorous 10-point
                verification process by our in-house curators.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <Truck className="w-12 h-12 text-primary-fixed" />
              <h4 className="font-headline text-3xl font-bold italic tracking-tight">
                Fast Shipping
              </h4>
              <p className="text-white/50 leading-relaxed">
                Priority handling and secure dispatch within 24 hours. Your heat
                reaches you faster than anyone else.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <RotateCcw className="w-12 h-12 text-primary-fixed" />
              <h4 className="font-headline text-3xl font-bold italic tracking-tight">
                15-day Returns
              </h4>
              <p className="text-white/50 leading-relaxed">
                Not the perfect fit? We offer a no-questions-asked return policy
                within 15 days of delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative">
          {/* Background Text */}
          <h2 className="font-headline font-bold text-[8vw] leading-none text-white/5 absolute -top-12 left-0 pointer-events-none select-none uppercase">
            Verified Community
          </h2>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-12">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-primary-fixed"
                  fill="currentColor"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-headline text-3xl md:text-5xl italic font-bold tracking-tight text-white mb-10 leading-tight text-balance">
              &ldquo;The packaging was as premium as the sneakers themselves.
              StepX is the only place I trust for my collection now.&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-primary-fixed/30">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPkrVj3wtUNeBR30vPKNnvVeRgmS5loYj945QLqNoY5NOQgwGKM3zTexVmbAYojQ7Q0q1hcRkjzJpMZI-aVARJQVS-3DBcD3mkdEuBdMtANBRvWVVWUo5k-DnNB9uyA-Ugfnf3acPaHfFCw0T92-O7tZnz6wE8B-qCUefR0RA_SBnfQaaUmLF9Sft3p4kGtsz_sXtpvnvbHU1o-X4tXiFOmopy87T32f1Te5fbeUp8pXGSXVpeO6FafJdeepjych8ZaB-qPlA0LA"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-bold text-white uppercase tracking-widest text-xs font-label">
                  Rohan M. - Sneakerhead
                </p>
                <p className="text-white/30 text-xs font-label">
                  Verified Buyer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary-fixed mb-2 block">
                Fresh Drops
              </span>
              <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter uppercase">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/shop?filter=new"
              className="text-primary-fixed font-headline font-bold text-sm uppercase tracking-widest hover:underline inline-flex items-center gap-2"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(4, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
