import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { ProductView } from "@/components/ProductView";
import { getProduct, products, relatedProducts } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = getProduct(handle);
  return { title: product?.title ?? "Product" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();
  const related = relatedProducts(handle);

  return (
    <div>
      <ProductView product={product} />
      {product.custom && product.category !== "booking" && (
        <p className="mx-auto max-w-[1200px] px-6 pb-6 text-sm text-ink/80">
          Add-Ons: All custom preservation orders must hit a $350 minimum.
        </p>
      )}
      <section className="mx-auto max-w-[1200px] px-6 pb-16">
        <h2 className="font-display text-3xl">You may also like</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.handle} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
