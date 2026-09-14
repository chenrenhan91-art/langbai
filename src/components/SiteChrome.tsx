"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  List,
  MagnifyingGlass,
  ShoppingCart,
  User,
  X,
  CaretDown,
  CaretRight,
} from "@phosphor-icons/react";
import { company } from "@/lib/company";
import { useAccount } from "@/store/account";
import { cartCount, useCart } from "@/store/cart";

const shopLinks = [
  { href: "/products/pressed-flower-frames", label: "Pressed Flower Frames" },
  { href: "/products/oval-pressed-flower-frames", label: "Oval Pressed Flower Frames" },
  { href: "/products/pressed-flower-jewelry-box", label: "Pressed Flower Jewelry Box" },
  { href: "/products/preserved-flower-resin-blocks", label: "Preserved Flower Resin Blocks" },
  { href: "/products/pressed-flower-decorative-tray", label: "Preserved Flower Decorative Tray" },
  { href: "/products/preserved-flower-necklaces", label: "Pressed Flower Necklaces" },
  { href: "/collections/add-ons", label: "Add-Ons" },
];

const aboutLinks = [
  { href: "/pages/color-correction", label: "Color Correction" },
  { href: "/pages/faqs", label: "FAQs" },
  { href: "/pages/testimonial", label: "Testimonials" },
  { href: "/pages/about-us", label: "About Us" },
];

const marquee = [
  "Wedding Bouquet Preservation",
  "Last Minute Bookings Welcome",
  "International Flower Shipping",
  "Color Correction Included",
  "Thousands of Bouquets Preserved",
  "Worldwide Flower Preservation",
];

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="block text-ink no-underline">
      <span
        className={`font-display tracking-[0.18em] uppercase leading-none ${
          compact ? "text-[17px]" : "text-[22px]"
        }`}
      >
        {company.shortName}
      </span>
      <span className="mt-1 block text-[9px] tracking-[0.28em] uppercase text-rose">
        Trade Limited
      </span>
    </Link>
  );
}

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="inline-flex items-center gap-1 px-3 py-2 text-[15px] text-ink"
      >
        {label}
        <CaretDown size={12} />
      </button>
      <ul className="invisible absolute left-1/2 top-full z-50 min-w-[260px] -translate-x-1/2 border border-peach bg-blush py-2 opacity-0 shadow-[0_12px_30px_rgba(120,90,79,0.12)] transition group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block px-5 py-2 text-[14px] text-ink hover:bg-cream"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lines = useCart((s) => s.lines);
  const setOpen = useCart((s) => s.setOpen);
  const setSearchOpen = useCart((s) => s.setSearchOpen);
  const menuOpen = useCart((s) => s.menuOpen);
  const setMenuOpen = useCart((s) => s.setMenuOpen);
  const account = useAccount((s) => s.account);
  const [ready, setReady] = useState(false);
  const count = ready ? cartCount(lines) : 0;
  const [shopOpen, setShopOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpen(false);
    setSearchOpen(false);
  }, [pathname, setMenuOpen, setOpen, setSearchOpen]);

  return (
    <>
      <div className="overflow-hidden border-b border-peach bg-blush py-2 text-[13px] text-ink">
        <div className="marquee-track flex w-max gap-0">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={`${item}-${i}`} className="px-8">
              {item}
            </span>
          ))}
        </div>
      </div>

      <nav className="sticky top-0 z-40 border-b border-peach bg-blush">
        <div className="flex items-center justify-between px-4 py-3 lg:hidden">
          <button
            type="button"
            aria-label="Menu"
            className="p-1 text-ink"
            onClick={() => setMenuOpen(true)}
          >
            <List size={24} />
          </button>
          <Logo compact />
          <button
            type="button"
            aria-label={`Cart ${count}`}
            className="relative p-1 text-ink"
            onClick={() => setOpen(true)}
          >
            <ShoppingCart size={24} />
            {count > 0 && (
              <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center bg-rose px-1 text-[10px] text-blush">
                {count}
              </span>
            )}
          </button>
        </div>

        <div className="mx-auto hidden max-w-[1280px] grid-cols-12 items-center px-6 py-4 lg:grid">
          <div className="col-span-3">
            <Logo />
          </div>
          <div className="col-span-6 flex items-center justify-center gap-1">
            <Dropdown label="Shop" items={shopLinks} />
            <Link href="/products/gift-card" className="px-3 py-2 text-[15px] text-ink">
              Gift Cards
            </Link>
            <Dropdown label="About" items={aboutLinks} />
            <Link href="/pages/contact" className="px-3 py-2 text-[15px] text-ink">
              Contact Us
            </Link>
          </div>
          <div className="col-span-3 flex items-center justify-end gap-1">
            <button
              type="button"
              aria-label="Search"
              className="p-2 text-ink"
              onClick={() => setSearchOpen(true)}
            >
              <MagnifyingGlass size={22} />
            </button>
            <Link
              href={account ? "/account" : "/account/login"}
              aria-label="Account"
              className="p-2 text-ink"
            >
              <User size={22} />
            </Link>
            <button
              type="button"
              aria-label={`Cart ${count}`}
              className="relative p-2 text-ink"
              onClick={() => setOpen(true)}
            >
              <ShoppingCart size={22} />
              {count > 0 && (
                <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center bg-rose px-1 text-[10px] text-blush">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/40"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <aside className="relative h-full w-[86%] max-w-sm bg-cream">
            <div className="flex items-start justify-between bg-ink px-5 py-5 text-blush">
              <div>
                <p className="font-display text-lg">
                  {account ? `Hello ${account.name}` : "Welcome guest"}
                </p>
                <p className="mt-1 text-sm text-blush/80">
                  Please{" "}
                  <Link href="/account/login" className="underline">
                    login
                  </Link>{" "}
                  or{" "}
                  <Link href="/account/register" className="underline">
                    register
                  </Link>
                </p>
              </div>
              <button type="button" aria-label="Close" onClick={() => setMenuOpen(false)}>
                <X size={22} className="text-blush" />
              </button>
            </div>
            <div className="px-2 py-4">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-3 text-left text-ink"
                onClick={() => setShopOpen((v) => !v)}
              >
                Shop
                <CaretRight size={16} className={shopOpen ? "rotate-90" : ""} />
              </button>
              {shopOpen && (
                <ul className="pb-2">
                  {shopLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="block px-7 py-2 text-sm text-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <Link href="/products/gift-card" className="block px-4 py-3 text-ink">
                Gift Cards
              </Link>
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-3 text-left text-ink"
                onClick={() => setAboutOpen((v) => !v)}
              >
                About
                <CaretRight size={16} className={aboutOpen ? "rotate-90" : ""} />
              </button>
              {aboutOpen && (
                <ul className="pb-2">
                  {aboutLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="block px-7 py-2 text-sm text-ink">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              <Link href="/pages/contact" className="block px-4 py-3 text-ink">
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
      )}

      <main>{children}</main>
    </>
  );
}
