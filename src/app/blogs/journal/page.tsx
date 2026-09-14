import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Journal" };

const posts = [
  {
    slug: "packing-flowers-for-travel",
    title: "How to pack a bouquet for international travel",
    excerpt: "Overnight boxes, damp wrap, and what not to do with water tubes.",
  },
  {
    slug: "what-the-wait-is-for",
    title: "Why preservation takes months",
    excerpt: "Pressing, color work, resin cure, and why we will not rush a keepsake.",
  },
];

export default function Page() {
  return (
    <article className="mx-auto max-w-[760px] px-6 py-16">
      <h1 className="font-display text-5xl">Journal</h1>
      <ul className="mt-10 space-y-8">
        {posts.map((p) => (
          <li key={p.slug} className="border-t border-peach pt-8">
            <h2 className="font-display text-3xl">
              <Link href={`/blogs/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="mt-2">{p.excerpt}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
