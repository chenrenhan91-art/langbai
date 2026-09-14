import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";
import { withBase } from "@/lib/paths";

export const metadata: Metadata = { title: "About Us" };

export default function Page() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16">
      <h1 className="font-display text-5xl">Meet the studio</h1>
      <p className="mt-8 leading-relaxed">
        {company.name} is a Hong Kong workshop built on a simple belief: flowers carry meaning. They mark love, celebration, remembrance, and the days people want to keep.
      </p>
      <p className="mt-4 leading-relaxed">
        We preserve wedding bouquets and special arrangements, turning them into keepsakes meant to last. Each piece is made by hand, with a digital mock-up and color correction included.
      </p>
      <p className="mt-4 leading-relaxed">
        These are not just flowers. They are a day, held still. We work with you on layout, then press, restore, and finish the piece in Tai Kok Tsui before it ships.
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={withBase("/images/studio-process.png")}
        alt="Pressed petals arranged at the Hong Kong workshop"
        className="mt-10 w-full object-cover"
      />
      <p className="mt-8 leading-relaxed">
        Thank you for trusting us with something that cannot be replaced.
      </p>
      <p className="mt-6">
        <Link href="/pages/contact" className="underline">
          Send a message
        </Link>
      </p>
    </article>
  );
}
