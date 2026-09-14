import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Book Your Flower Preservation" };

export default function Page() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16">
      <h1 className="font-display text-5xl">Book Your Flower Preservation</h1>
      <p className="mt-6 font-display text-2xl">Yes, we take last-minute bookings.</p>
      <p className="mt-5 leading-relaxed">
        Choose the week of your event, or the week you plan to ship. Local collection is by appointment at our Tai Kok Tsui workshop. If you are shipping, pick the earliest available week and note SHIP on the form.
      </p>
      <p className="mt-4 leading-relaxed">
        A non-refundable ${company.bookingFee} booking fee holds your date and is credited toward your total. All orders must meet a ${company.minOrder} minimum. Invoices go out the week we receive your bouquet.
      </p>
      <p className="mt-4 leading-relaxed">
        Pricing includes color correction. Flowers should arrive within 3-5 days of your event. For 2026 bookings, packing notes are sent about a month before your date. Last-minute bookings hear from us within 24 hours.
      </p>
      <Link
        href="/products/flower-preservation-booking"
        className="mt-8 inline-block bg-rose px-6 py-3 text-blush"
      >
        Continue to booking
      </Link>
    </article>
  );
}
