import Link from "next/link";
import { money, moneyFrom } from "@/lib/format";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group">
      <Link href={`/products/${product.handle}`} className="block">
        <div className="aspect-square overflow-hidden bg-blush">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <h3 className="mt-4 font-display text-xl text-ink">{product.title}</h3>
        <p className="mt-1 text-ink">
          {product.fromPrice ? moneyFrom(product.price) : money(product.price)}
        </p>
      </Link>
    </article>
  );
}
