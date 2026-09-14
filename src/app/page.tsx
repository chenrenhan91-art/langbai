"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AirplaneTilt,
  ChatCircle,
  CheckCircle,
  House,
} from "@phosphor-icons/react";
import { BeforeAfter } from "@/components/BeforeAfter";
import { ProductCard } from "@/components/ProductCard";
import { company } from "@/lib/company";
import { withBase } from "@/lib/paths";
import { bestsellers, getProduct } from "@/lib/products";

const slides = [
  {
    src: withBase("/images/hero-bouquet.png"),
    title: "Your Blooms, Preserved Forever as Art",
  },
  {
    src: withBase("/images/hero-keepsakes.png"),
    title: "Your Blooms, Preserved Forever as Art",
  },
];

const features = [
  { icon: AirplaneTilt, title: "Worldwide Shipping", body: "Bouquets and finished keepsakes travel internationally from our Hong Kong workshop." },
  { icon: ChatCircle, title: "Personalized Support", body: "One studio team from booking through mock-up approval." },
  { icon: CheckCircle, title: "Transparent Process", body: "A clear timeline, a digital layout, and no surprise add-on fees." },
  { icon: House, title: "Hong Kong Studio", body: "Hand-finished in Tai Kok Tsui, then packed for worldwide delivery." },
];

const steps = [
  {
    title: "Choose Your Keepsake",
    body: "Browse the collection, pick your pieces, and enter your event date at checkout. We send a confirmation with next steps.",
  },
  {
    title: "Send Your Blooms",
    body: "Ship with our packing guide, or book a Hong Kong studio drop-off. Flowers should arrive within 3-5 days of your event.",
  },
  {
    title: "See Your Design",
    body: "Once preserved and color-corrected, we share a digital mock-up for your approval.",
  },
  {
    title: "Treasure Forever",
    body: "Your finished keepsake is packed and shipped worldwide, or held for local collection.",
  },
];

const quotes = [
  {
    quote:
      "The studio dried and pressed my sister's wedding bouquet with real care. The layout was lovely, and the process was easy from first note to delivery.",
    name: "Tatumn W.",
  },
  {
    quote:
      "Updates arrived throughout the wait. The jewelry box is a piece we use every day, not something boxed away.",
    name: "Brittany M.",
  },
  {
    quote:
      "Worth the months of pressing each petal. I would recommend this to any future bride who wants the bouquet to last.",
    name: "Stephanie M.",
  },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const products = bestsellers.map((h) => getProduct(h)!).filter(Boolean);

  return (
    <div>
      <section className="relative min-h-[70dvh] bg-ink-deep">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slides[slide].src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="relative mx-auto flex min-h-[70dvh] max-w-[1100px] flex-col items-center justify-center px-6 py-16 text-center text-blush">
          <h1 className="font-display text-4xl leading-[1.15] md:text-6xl">
            {slides[slide].title}
          </h1>
        </div>
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-2.5 w-2.5 rounded-full ${
                i === slide ? "bg-blush" : "bg-blush/40"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] gap-10 px-6 py-14 md:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <f.icon size={42} className="mx-auto text-rose" />
            <h3 className="mt-4 font-display text-2xl">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed">{f.body}</p>
          </div>
        ))}
      </section>

      <section className="px-6 py-8">
        <h2 className="text-center font-display text-4xl md:text-5xl">Best Sellers</h2>
        <div className="mx-auto mt-10 grid max-w-[1200px] gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/images/studio-process.png")} alt="Pressed flowers being arranged in the studio" className="w-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-4xl">Preservation With Love</h2>
          <p className="mt-5 leading-relaxed">
            Flowers hold more than a season. They mark a wedding, a memorial, a birthday, an engagement. We press and cast those blooms into keepsakes meant to last.
          </p>
          <p className="mt-4 leading-relaxed">
            Brides keep the bouquet. Families keep funeral flowers. Friends keep a gift that would otherwise fade. From pressed frames to resin, each piece is made to honor that day.
          </p>
          <p className="mt-4 leading-relaxed">
            The workshop is in Tai Kok Tsui, Hong Kong. Preservation is available worldwide. Wherever you are, we can make a lasting piece with you.
          </p>
        </div>
      </section>

      <section className="bg-blush px-6 py-16">
        <h2 className="text-center font-display text-4xl">How It Works</h2>
        <div className="mx-auto mt-10 grid max-w-[1100px] gap-8 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="text-center">
              <p className="font-display text-3xl text-rose">{i + 1}</p>
              <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl">Genuine Wood Frames</h2>
          <p className="mt-5 leading-relaxed">
            Frames are made from genuine pine, not laminated or synthetic moulding. A local framer cuts each one. Color correction is included with every keepsake. No extra fees.
          </p>
          <p className="mt-4 leading-relaxed">
            Not ready to choose every piece, but want to hold a date? Start with a {company.bookingFee === 50 ? "$50" : ""} deposit and the booking form.
          </p>
          <Link
            href="/products/flower-preservation-booking"
            className="mt-6 inline-block bg-rose px-6 py-3 text-blush"
          >
            Book preservation
          </Link>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/images/wood-frames.png")} alt="Pine wood frames in the workshop" className="w-full object-cover" />
        </div>
      </section>

      <section className="px-6 py-10">
        <h2 className="text-center font-display text-4xl">Color Correction Service</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm">
          Slide to compare before and after
        </p>
        <div className="mx-auto mt-8 max-w-3xl">
          <BeforeAfter before={withBase("/images/color-before.png")} after={withBase("/images/color-after.png")} />
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-6 py-12 text-center">
        <h2 className="font-display text-4xl">What Sets Us Apart?</h2>
        <p className="mt-5 leading-relaxed">
          Color correction is included with every keepsake, not sold as an add-on. As blooms fade, we restore whites, deepen color, and keep petals closer to how you remember them.
        </p>
        <p className="mt-4 leading-relaxed">
          No hidden fees. Your flowers, kept with care.
        </p>
      </section>

      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-6 py-12 md:grid-cols-2">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/images/studio-process.png")} alt="Studio worktable with pressed petals" className="w-full object-cover" />
        </div>
        <div>
          <h2 className="font-display text-4xl">The Studio</h2>
          <p className="mt-5 leading-relaxed">
            {company.name} grew from a simple idea: flowers should outlast the week they arrive. Today the workshop preserves blooms from weddings and other days worth keeping.
          </p>
          <p className="mt-4 leading-relaxed">
            Each layout is designed with you, then pressed, corrected, and finished by hand in Hong Kong.
          </p>
          <Link href="/pages/about-us" className="mt-6 inline-block border border-ink px-6 py-3">
            About us
          </Link>
        </div>
      </section>

      <section className="bg-blush px-6 py-16">
        <h2 className="text-center font-display text-4xl">What people are saying</h2>
        <div className="mx-auto mt-10 grid max-w-[1100px] gap-8 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote key={q.name} className="bg-cream p-6">
              <p className="leading-relaxed">“{q.quote}”</p>
              <footer className="mt-4 text-sm"> - {q.name}</footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/pages/testimonial" className="underline">
            Read more
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[800px] px-6 py-16 text-center">
        <h2 className="font-display text-4xl">Last-Minute? No Problem</h2>
        <p className="mt-5 leading-relaxed">
          Wedding days move fast, and plans sometimes land at the last hour. We take last-minute bookings. Add preservation to the cart and check out. No advance notice required.
        </p>
        <p className="mt-4 leading-relaxed">
          Prefer to talk first? Contact us any time. We will still work to keep your flowers.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/products/flower-preservation-booking" className="bg-rose px-6 py-3 text-blush">
            Book now
          </Link>
          <Link href="/pages/contact" className="border border-ink px-6 py-3">
            Contact us
          </Link>
        </div>
      </section>

      <section className="px-6 pb-16">
        <h2 className="text-center font-display text-4xl">From the studio</h2>
        <div className="mx-auto mt-8 grid max-w-[1100px] grid-cols-2 gap-2 md:grid-cols-4">
          {[
            withBase("/images/product-frames.png"),
            withBase("/images/product-resin.png"),
            withBase("/images/product-oval.png"),
            withBase("/images/product-necklace.png"),
          ].map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt="" className="aspect-square w-full object-cover" />
          ))}
        </div>
      </section>
    </div>
  );
}
