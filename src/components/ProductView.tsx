"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, Minus, Plus } from "@phosphor-icons/react";
import { company } from "@/lib/company";
import { money } from "@/lib/format";
import {
  colorSwatches,
  resolvePrice,
  type Product,
} from "@/lib/products";
import { useCart } from "@/store/cart";

export function ProductView({ product }: { product: Product }) {
  const add = useCart((s) => s.add);
  const [index, setIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [selected, setSelected] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const opt of product.options) init[opt.name] = opt.values[0];
    return init;
  });

  const price = useMemo(
    () => resolvePrice(product, selected),
    [product, selected],
  );

  function onAdd() {
    add({
      handle: product.handle,
      title: product.title,
      image: product.images[0],
      price,
      quantity: qty,
      options: selected,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-10 lg:grid-cols-2 lg:px-6">
      <div>
        <div className="bg-blush">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.images[index] ?? product.images[0]}
            alt={product.title}
            className="aspect-square w-full object-cover"
          />
        </div>
        {product.images.length > 1 && (
          <div className="mt-3 grid grid-cols-5 gap-2">
            {product.images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => setIndex(i)}
                className={`overflow-hidden border ${
                  i === index ? "border-ink" : "border-transparent"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="aspect-square w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <p className="text-sm text-rose">
          <Link href="/">Home</Link>
          <span> / </span>
          <span>{product.title}</span>
        </p>
        <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">{product.title}</h1>
        <p className="mt-4 text-2xl">{money(price)}</p>
        {product.custom && (
          <p className="mt-3 text-sm text-ink/80">
            Custom orders must reach a {money(company.minOrder)} minimum. A {money(company.bookingFee)} booking fee is credited to your total.
          </p>
        )}

        <div className="mt-6 space-y-3 text-[16px] leading-relaxed">
          {product.description.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {product.options.map((opt) => (
          <fieldset key={opt.name} className="mt-6">
            <legend className="mb-2 text-sm">{opt.name}</legend>
            {opt.name.toLowerCase().includes("color") ? (
              <div className="flex flex-wrap gap-2">
                {opt.values.map((value) => (
                  <button
                    key={value}
                    type="button"
                    title={value}
                    onClick={() => setSelected((s) => ({ ...s, [opt.name]: value }))}
                    className={`h-9 w-9 border ${
                      selected[opt.name] === value ? "border-ink" : "border-peach"
                    }`}
                    style={{ background: colorSwatches[value] ?? "#ddd" }}
                  />
                ))}
              </div>
            ) : (
              <select
                className="w-full max-w-md border border-peach bg-blush px-3 py-2.5 text-ink outline-none focus:border-rose"
                value={selected[opt.name]}
                onChange={(e) =>
                  setSelected((s) => ({ ...s, [opt.name]: e.target.value }))
                }
              >
                {opt.values.map((value) => (
                  <option key={value}>{value}</option>
                ))}
              </select>
            )}
            {opt.name.toLowerCase().includes("color") && (
              <p className="mt-2 text-sm">{selected[opt.name]}</p>
            )}
          </fieldset>
        ))}

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center border border-peach">
            <button
              type="button"
              className="grid h-12 w-12 place-items-center"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Decrease"
            >
              <Minus size={14} />
            </button>
            <span className="w-10 text-center">{qty}</span>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center"
              onClick={() => setQty((q) => q + 1)}
              aria-label="Increase"
            >
              <Plus size={14} />
            </button>
          </div>
          <button
            type="button"
            onClick={onAdd}
            className="min-w-[200px] bg-rose px-8 py-3 text-blush active:scale-[0.98]"
          >
            {added ? (
              <span className="inline-flex items-center gap-2">
                <Check size={16} /> Added to cart
              </span>
            ) : (
              "Add to cart"
            )}
          </button>
        </div>

        <div className="mt-10 space-y-6">
          {product.details.map((block) => (
            <section key={block.heading}>
              <h2 className="font-display text-2xl">{block.heading}</h2>
              {block.body.map((p) => (
                <p key={p} className="mt-2 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
