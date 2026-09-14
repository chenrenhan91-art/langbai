import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Refund Policy" };

export default function Page() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16">
      <h1 className="font-display text-5xl">Refund policy</h1>
      <p className="mt-6 leading-relaxed">
        At {company.name}, each floral piece is made to your order. Because keepsakes are custom, we do not accept returns, exchanges, or cancellations once an order is placed.
      </p>
      <h2 className="mt-10 font-display text-3xl">Why returns are not possible</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        <li>Every piece uses your original flowers. Once work begins, it cannot be reversed or resold.</li>
        <li>Resin, pressed frames, and small objects are fragile art. The finished piece is made for you alone.</li>
        <li>We follow a slow preservation process to give the bouquet the best chance of holding form and color.</li>
      </ul>
      <h2 className="mt-10 font-display text-3xl">Damage in transit</h2>
      <p className="mt-4 leading-relaxed">
        If a keepsake arrives damaged, contact us within 48 hours with photos of the piece and the packaging. We will review the issue and offer a path forward.
      </p>
      <h2 className="mt-10 font-display text-3xl">Questions</h2>
      <p className="mt-4 leading-relaxed">
        If you have concerns before you order, email{" "}
        <a href={company.emailHref}>{company.email}</a> or call {company.phone}. We would rather answer first than rush a custom piece.
      </p>
    </article>
  );
}
