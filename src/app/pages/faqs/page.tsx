import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "FAQs" };

const faqs = [
  {
    q: "How do I get my flowers to you?",
    a: `Hong Kong local clients can drop blooms at our Tai Kok Tsui workshop by appointment, Monday through Friday, 10 AM to 5 PM. If you are shipping, you will receive a packing guide after booking so the bouquet arrives ready for preservation.`,
  },
  {
    q: "How soon do I need to send my flowers?",
    a: "The sooner the better. Aim for 2-5 days after your event. We can still work with flowers up to 7 days later, but fresher blooms always keep more color and form.",
  },
  {
    q: "How do I keep my flowers fresh before shipping?",
    a: "Keep them in water, away from sun and heat. If they droop, trim the stems and change the water daily. Skip the bouquet toss if you can. Fragile heads travel better intact.",
  },
  {
    q: "How much does shipping cost?",
    a: "After booking you receive box sizes and packing notes. Use an overnight or express international service to Hong Kong. Rates depend on origin, so we ask you to compare carriers before you send.",
  },
  {
    q: "What size frame should I get?",
    a: "16x20 suits a full bouquet. 11x14 works for a medium bunch. 8x10 holds a smaller selection. 8x8 is right for a boutonniere or a gift. Unsure? Write to us and we will help you choose.",
  },
  {
    q: "When will I get my keepsake?",
    a: `The full process takes ${company.leadTime}. Preservation is slow on purpose. If the timeline shifts, you will hear from us.`,
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16">
      <h1 className="font-display text-5xl">FAQs</h1>
      <div className="mt-10 space-y-8">
        {faqs.map((item) => (
          <section key={item.q}>
            <h2 className="font-display text-2xl">{item.q}</h2>
            <p className="mt-3 leading-relaxed">{item.a}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
