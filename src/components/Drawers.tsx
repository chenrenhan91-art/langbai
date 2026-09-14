"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Minus, Plus, X } from "@phosphor-icons/react";
import { money } from "@/lib/format";
import { cartCount, cartSubtotal, useCart } from "@/store/cart";

export function CartDrawer() {
  const { lines, open, setOpen, updateQty, remove } = useCart();
  const count = cartCount(lines);
  const subtotal = cartSubtotal(lines);

  return (
    <div className={`fixed inset-0 z-[60] ${open ? "" : "pointer-events-none"}`}>
      <button
        type="button"
        aria-label="Close cart"
        className={`absolute inset-0 bg-ink/40 transition ${open ? "opacity-100" : "opacity-0"}`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-peach px-5 py-4">
          <h2 className="font-display text-2xl">Your Cart</h2>
          <button type="button" aria-label="Close" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <div className="flex-1 overflow-auto px-5 py-4">
          {count === 0 ? (
            <p className="text-ink">Your cart is currently empty</p>
          ) : (
            <ul className="space-y-5">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={line.image}
                    alt=""
                    className="h-24 w-24 object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <Link
                        href={`/products/${line.handle}`}
                        className="font-display text-lg leading-snug"
                        onClick={() => setOpen(false)}
                      >
                        {line.title}
                      </Link>
                      <button type="button" aria-label="Remove" onClick={() => remove(line.key)}>
                        <X size={16} />
                      </button>
                    </div>
                    {Object.entries(line.options).map(([k, v]) => (
                      <p key={k} className="text-sm text-ink/80">
                        {k}: {v}
                      </p>
                    ))}
                    <p className="mt-1">{money(line.price)}</p>
                    <div className="mt-2 inline-flex items-center border border-peach">
                      <button
                        type="button"
                        className="grid h-8 w-8 place-items-center"
                        onClick={() => updateQty(line.key, line.quantity - 1)}
                        aria-label="Decrease"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-sm">{line.quantity}</span>
                      <button
                        type="button"
                        className="grid h-8 w-8 place-items-center"
                        onClick={() => updateQty(line.key, line.quantity + 1)}
                        aria-label="Increase"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-peach px-5 py-5">
          {count > 0 && (
            <div className="mb-4 flex items-center justify-between text-lg">
              <span>Subtotal</span>
              <span>{money(subtotal)}</span>
            </div>
          )}
          {count === 0 ? (
            <Link
              href="/collections/all"
              onClick={() => setOpen(false)}
              className="block bg-rose py-3 text-center text-blush"
            >
              Continue shopping
            </Link>
          ) : (
            <div className="grid gap-2">
              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="block border border-ink py-3 text-center text-ink"
              >
                View cart
              </Link>
              <Link
                href="/checkout"
                onClick={() => setOpen(false)}
                className="block bg-rose py-3 text-center text-blush"
              >
                Check out
              </Link>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

export function SearchDrawer() {
  const searchOpen = useCart((s) => s.searchOpen);
  const setSearchOpen = useCart((s) => s.setSearchOpen);
  const [q, setQ] = useState("");
  const router = useRouter();

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-ink/40"
        aria-label="Close search"
        onClick={() => setSearchOpen(false)}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-cream p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl">Search our store</h2>
          <button type="button" aria-label="Close" onClick={() => setSearchOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <form
          className="mt-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSearchOpen(false);
            router.push(`/search?q=${encodeURIComponent(q)}`);
          }}
        >
          <label className="sr-only" htmlFor="store-search">
            Search
          </label>
          <input
            id="store-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products"
            className="w-full border border-peach bg-blush px-4 py-3 text-ink outline-none placeholder:text-ink/50 focus:border-rose"
          />
          <button type="submit" className="mt-4 w-full bg-rose py-3 text-blush">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
