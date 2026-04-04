import Link from "next/link";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/returns", label: "Returns" },
  { href: "/account/support", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-32 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-black text-white mb-6 font-headline italic tracking-tighter"
          >
            StepX Vault
          </Link>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-label text-sm text-white/40 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-white/20 text-xs font-label tracking-widest uppercase">
            &copy; {new Date().getFullYear()} StepX Vault. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
