import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16">
      <h1 className="font-display text-5xl">Privacy policy</h1>
      <p className="mt-2 text-sm">Last updated: September 14, 2026</p>
      <p className="mt-6 leading-relaxed">
        {company.name} operates this website to take preservation bookings and answer enquiries. This page explains what we collect when you browse, write to us, or place a demonstration checkout.
      </p>
      <h2 className="mt-10 font-display text-3xl">What we collect</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5">
        <li>Contact details you type into forms: name, email, phone, and shipping address.</li>
        <li>Order details: items, options, and notes about your event date.</li>
        <li>Technical data such as browser type, stored in your own browser for cart and account demos.</li>
      </ul>
      <h2 className="mt-10 font-display text-3xl">How we use it</h2>
      <p className="mt-4 leading-relaxed">
        On this demonstration site, form data stays in your browser or is shown as a local confirmation. It is not sent to a live payment processor. On a live store we would use the same fields to fulfill orders, answer support, and meet legal duties.
      </p>
      <h2 className="mt-10 font-display text-3xl">Contact</h2>
      <p className="mt-4 leading-relaxed">
        Privacy questions: call {company.phone} or write to the workshop at {company.addressLines.join(", ")}.
      </p>
    </article>
  );
}
