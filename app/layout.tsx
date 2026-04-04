import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StepX Vault | Premium Sneaker Curation",
  description:
    "Premium curated sneakers for the culture. Discover exclusive drops, limited editions, and authenticated streetwear artifacts at StepX Vault.",
  keywords: [
    "sneakers",
    "premium",
    "streetwear",
    "limited edition",
    "authentic",
    "vault",
    "drops",
  ],
  authors: [{ name: "StepX" }],
  openGraph: {
    title: "StepX Vault | Premium Sneaker Curation",
    description: "Premium curated sneakers for the culture.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#131313",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} bg-surface text-on-surface antialiased`}
      >
        <StoreProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <MobileNav />
        </StoreProvider>
      </body>
    </html>
  );
}
