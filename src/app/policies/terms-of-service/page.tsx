import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Terms of Service" };

export default function Page() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16">
      <h1 className="font-display text-5xl">Terms of service</h1>
      <p className="mt-6 leading-relaxed">
        By using this website you agree to these terms with {company.name}, RM F17, Workshop 8, 11/F, Walnut 9, 9 Walnut Street, Tai Kok Tsui, Hong Kong.
      </p>
      <h2 className="mt-10 font-display text-3xl">Orders</h2>
      <p className="mt-4 leading-relaxed">
        Custom preservation is made from flowers you send. Results vary by species, age, and packing. A $50 booking fee is credited to the order and is not refundable. Custom work must meet a $350 minimum. Lead time is typically 20-32 weeks.
      </p>
      <h2 className="mt-10 font-display text-3xl">Checkout on this site</h2>
      <p className="mt-4 leading-relaxed">
        The cart and checkout here are a demonstration. No real payment is taken. Do not enter live card numbers. A live store would process payment only after you confirm the order.
      </p>
      <h2 className="mt-10 font-display text-3xl">Intellectual property</h2>
      <p className="mt-4 leading-relaxed">
        Site design, product copy, and photographs on this storefront belong to {company.name} unless noted. Please do not reuse them without permission.
      </p>
      <h2 className="mt-10 font-display text-3xl">Contact</h2>
      <p className="mt-4 leading-relaxed">
        <a href={company.emailHref}>{company.email}</a>
        <br />
        {company.phone}
      </p>
    </article>
  );
}
