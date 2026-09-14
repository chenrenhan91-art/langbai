import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Order Updates" };

export default function Page() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16">
      <h1 className="font-display text-5xl">Order updates</h1>
      <p className="mt-6 leading-relaxed">
        After we receive your flowers you will hear from the studio by phone or the email on your order. Typical notes cover arrival, drying, mock-up, and ship date.
      </p>
      <p className="mt-4 leading-relaxed">
        Lead time is {company.leadTime}. If anything shifts, we contact you before the date changes.
      </p>
      <p className="mt-4 leading-relaxed">Need a status check? Call {company.phone}.</p>
    </article>
  );
}
