"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { searchProducts } from "@/lib/products";

function SearchInner() {
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const results = searchProducts(q);

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <h1 className="font-display text-4xl">Search</h1>
      <p className="mt-2 text-sm">{q ? `Results for “${q}”` : "All products"}</p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((p) => (
          <ProductCard key={p.handle} product={p} />
        ))}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchInner />
    </Suspense>
  );
}
