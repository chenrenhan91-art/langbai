import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "More Info" };

export default function Page() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16">
      <h1 className="font-display text-5xl">More info</h1>
      <ul className="mt-8 space-y-3">
        <li>
          <Link href="/pages/faqs" className="underline">
            FAQs
          </Link>
        </li>
        <li>
          <Link href="/pages/color-correction" className="underline">
            Color correction
          </Link>
        </li>
        <li>
          <Link href="/pages/book-your-flower-preservation" className="underline">
            Booking
          </Link>
        </li>
      </ul>
    </article>
  );
}
