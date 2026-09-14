import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getProduct } from "@/lib/products";

const steps = [
  {
    title: "Choose Your Keepsake",
    body: "Browse the collection, pick your piece, and complete the booking form or deposit. We send a confirmation with next steps.",
  },
  {
    title: "Send Your Blooms",
    body: "Ship with our packing guide or drop off in Hong Kong by appointment. Flowers should arrive within 3-5 days of your event.",
  },
  {
    title: "See Your Design",
    body: "Once preserved and color-corrected, we share a digital mock-up for approval.",
  },
  {
    title: "Treasure Forever",
    body: "Your finished keepsake is packed and shipped worldwide, or held for studio collection.",
  },
];

export function HowItWorksStrip() {
  return (
    <section className="bg-blush px-6 py-12">
      <h2 className="text-center font-display text-4xl">How It Works</h2>
      <div className="mx-auto mt-8 grid max-w-[1100px] gap-6 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.title} className="text-center">
            <h3 className="font-display text-2xl">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CatalogLanding({
  title,
  handles,
  notes,
}: {
  title: string;
  handles: string[];
  notes?: string[];
}) {
  const items = handles.map((h) => getProduct(h)!).filter(Boolean);
  return (
    <div>
      <div className="px-6 py-12">
        <h1 className="text-center font-display text-5xl">{title}</h1>
      </div>
      <HowItWorksStrip />
      <div className="mx-auto max-w-[1100px] px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          {items.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
        {notes && (
          <ul className="mt-10 space-y-2 text-sm">
            {notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        )}
        <p className="mt-8">
          <Link href="/products/flower-preservation-booking" className="underline">
            Start with a $50 deposit
          </Link>
        </p>
      </div>
    </div>
  );
}
