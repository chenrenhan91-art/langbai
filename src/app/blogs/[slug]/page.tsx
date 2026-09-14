import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

const posts: Record<string, { title: string; body: string[] }> = {
  "packing-flowers-for-travel": {
    title: "How to pack a bouquet for international travel",
    body: [
      "Fresh flowers hate heat, crushed heads, and standing water sealed in plastic. After checkout we send a packing note. The short version is below.",
      "Trim stems, wrap them in a damp paper towel, then in a dry towel. Nest the bouquet in tissue so heads cannot rattle. Use an overnight or express service to Hong Kong.",
      "Do not freeze the bouquet. Do not add extra water to the box. If a bloom is already spent, leave it. We will work with what arrives.",
    ],
  },
  "what-the-wait-is-for": {
    title: "Why preservation takes months",
    body: [
      "Pressing is slow on purpose. Petals need time to dry flat without mold. Color correction happens after that, then the layout mock-up, then framing or resin.",
      "Resin needs a full cure. Rushing that step traps moisture and clouds the block. Twenty to thirty-two weeks is the honest window.",
      "If a date moves, we write to you. We would rather keep the piece honest than ship early.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: posts[slug]?.title ?? "Journal" };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[760px] px-6 py-16">
      <p className="text-sm">
        <Link href="/blogs/journal" className="underline">
          Journal
        </Link>
      </p>
      <h1 className="mt-4 font-display text-5xl">{post.title}</h1>
      {post.body.map((p) => (
        <p key={p} className="mt-5 leading-relaxed">
          {p}
        </p>
      ))}
    </article>
  );
}
