import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { collections, getProduct } from "@/lib/products";

export function generateStaticParams() {
  return Object.keys(collections).map((handle) => ({ handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  return { title: collections[handle]?.title ?? "Collection" };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const collection = collections[handle];
  if (!collection) notFound();
  const items = collection.handles.map((h) => getProduct(h)!).filter(Boolean);

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="text-center font-display text-5xl">{collection.title}</h1>
      {collection.intro && (
        <p className="mx-auto mt-4 max-w-2xl text-center">{collection.intro}</p>
      )}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProductCard key={p.handle} product={p} />
        ))}
      </div>
    </div>
  );
}
