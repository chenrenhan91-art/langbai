"use client";

import Link from "next/link";
import { Minus, Plus, X } from "@phosphor-icons/react";
import { money } from "@/lib/format";
import { cartCount, cartSubtotal, useCart } from "@/store/cart";

export default function CartPage() {
  const { lines, updateQty, remove } = useCart();
  const count = cartCount(lines);
  const subtotal = cartSubtotal(lines);

  return (
    <div className="mx-auto max-w-[1000px] px-6 py-12">
      <h1 className="font-display text-5xl">Your Cart</h1>
      {count === 0 ? (
        <div className="mt-10">
          <p>Your cart is currently empty</p>
          <Link href="/collections/all" className="mt-6 inline-block bg-rose px-6 py-3 text-blush">
            Continue shopping
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
          <ul className="divide-y divide-peach border-y border-peach">
            {lines.map((line) => (
              <li key={line.key} className="flex gap-4 py-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={line.image} alt="" className="h-28 w-28 object-cover" />
                <div className="flex-1">
                  <div className="flex justify-between gap-4">
                    <Link href={`/products/${line.handle}`} className="font-display text-2xl">
                      {line.title}
                    </Link>
                    <button type="button" aria-label="Remove" onClick={() => remove(line.key)}>
                      <X size={18} />
                    </button>
                  </div>
                  {Object.entries(line.options).map(([k, v]) => (
                    <p key={k} className="text-sm">
                      {k}: {v}
                    </p>
                  ))}
                  <p className="mt-2">{money(line.price)}</p>
                  <div className="mt-3 inline-flex border border-peach">
                    <button
                      type="button"
                      className="grid h-9 w-9 place-items-center"
                      onClick={() => updateQty(line.key, line.quantity - 1)}
                    >
                      <Minus size={12} />
                    </button>
                    <span className="grid w-9 place-items-center text-sm">{line.quantity}</span>
                    <button
                      type="button"
                      className="grid h-9 w-9 place-items-center"
                      onClick={() => updateQty(line.key, line.quantity + 1)}
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <aside className="h-fit bg-blush p-6">
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span>{money(subtotal)}</span>
            </div>
            <p className="mt-2 text-sm">Shipping calculated at checkout.</p>
            <Link href="/checkout" className="mt-5 block bg-rose py-3 text-center text-blush">
              Check out
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
