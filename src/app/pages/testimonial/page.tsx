import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = { title: "Testimonials" };

const quotes = [
  {
    quote:
      "We booked a few days after the wedding. The studio took the bouquet quickly, sent layout options, and shipped the finished shadow-style piece in perfect condition.",
    name: "Chelsea W.",
  },
  {
    quote:
      "I ordered keepsakes for my mother, grandmother, and mother-in-law as well as my own frame. Every piece came back as something I would hang with the wedding photos.",
    name: "Ashley F.",
  },
  {
    quote:
      "The process stayed clear the whole way. They checked my original choices months later before finishing, then packed care notes with the pieces.",
    name: "Raileen A.",
  },
  {
    quote:
      "I did not know flower preservation existed until a week before the wedding. We found the studio in time. The work is the part of the day we still look at.",
    name: "Nathalie",
  },
  {
    quote:
      "We wanted vows and flowers in one piece. The tray, ring holders, coasters, and frames arrived as a set we actually use.",
    name: "Renee P.",
  },
  {
    quote:
      "They dried my sister's bouquet with care. Easy to work with, and a lovely arrangement at the end.",
    name: "Tatumn W.",
  },
  {
    quote:
      "Drop-off after the wedding was simple. Communication stayed clear, and the wait was worth it.",
    name: "Kacey K.",
  },
  {
    quote:
      "Regular updates, and a jewelry box we open every morning.",
    name: "Brittany M.",
  },
  {
    quote:
      "I booked the day after the wedding. They took the flowers the same week, sent layouts, and kept me posted. I still have that day on the wall.",
    name: "Caitlin V.",
  },
  {
    quote:
      "Pressing each petal takes months. I would tell any future bride it is worth the wait.",
    name: "Stephanie M.",
  },
  {
    quote:
      "I ordered a resin block as a bridal gift. Color correction brought the bouquet back. Updates arrived the whole way through.",
    name: "Michaela R.",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-[900px] px-6 py-16">
      <h1 className="text-center font-display text-5xl">What people are saying</h1>
      <p className="mt-4 text-center text-sm">
        Notes from clients of {company.name}. Names are first name and initial, as shared with the studio.
      </p>
      <div className="mt-12 space-y-8">
        {quotes.map((q) => (
          <blockquote key={q.name} className="border-t border-peach pt-8">
            <p className="leading-relaxed">“{q.quote}”</p>
            <footer className="mt-3 text-sm"> - {q.name}</footer>
          </blockquote>
        ))}
      </div>
    </article>
  );
}
