"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { company } from "@/lib/company";
import { money } from "@/lib/format";
import { cartCount, cartSubtotal, useCart } from "@/store/cart";

const shippingOptions = [
  { id: "express", label: "International express (5-10 days)", price: 45 },
  { id: "standard", label: "International standard (10-20 days)", price: 28 },
  { id: "hk", label: "Hong Kong studio collection", price: 0 },
];

export default function CheckoutPage() {
  const router = useRouter();
  const { lines, clear } = useCart();
  const count = cartCount(lines);
  const subtotal = cartSubtotal(lines);
  const [ship, setShip] = useState(shippingOptions[0].id);
  const [error, setError] = useState("");
  const shipping = shippingOptions.find((s) => s.id === ship)?.price ?? 0;
  const total = subtotal + shipping;
  const customTotal = useMemo(
    () =>
      lines
        .filter((l) => l.handle !== "gift-card")
        .reduce((n, l) => n + l.price * l.quantity, 0),
    [lines],
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (customTotal > 0 && customTotal < company.minOrder) {
      setError(
        `Custom preservation orders must reach ${money(company.minOrder)}. Add another keepsake or a booking deposit.`,
      );
      return;
    }
    const form = new FormData(e.currentTarget);
    const order = {
      id: `LB${Date.now().toString().slice(-8)}`,
      email: String(form.get("email") || ""),
      name: String(form.get("name") || ""),
      total,
      lines,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("langbai-last-order", JSON.stringify(order));
    clear();
    router.push(`/checkout/success?order=${order.id}`);
  }

  if (count === 0) {
    return (
      <div className="mx-auto max-w-[640px] px-6 py-16 text-center">
        <h1 className="font-display text-4xl">Checkout</h1>
        <p className="mt-4">Your cart is empty.</p>
        <Link href="/collections/all" className="mt-6 inline-block bg-rose px-6 py-3 text-blush">
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-[1100px] gap-10 px-6 py-12 lg:grid-cols-[1fr_360px]">
      <form onSubmit={onSubmit} className="space-y-8">
        <h1 className="font-display text-4xl">Checkout</h1>
        <p className="text-sm text-ink/80">
          Demonstration checkout. No payment is processed. Do not enter a real card.
        </p>

        <section>
          <h2 className="font-display text-2xl">Contact</h2>
          <label className="mt-3 block text-sm" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
          />
        </section>

        <section>
          <h2 className="font-display text-2xl">Shipping address</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-sm" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-1 w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm" htmlFor="address">
                Address
              </label>
              <input
                id="address"
                name="address"
                required
                className="mt-1 w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
              />
            </div>
            <div>
              <label className="block text-sm" htmlFor="city">
                City
              </label>
              <input
                id="city"
                name="city"
                required
                className="mt-1 w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
              />
            </div>
            <div>
              <label className="block text-sm" htmlFor="country">
                Country
              </label>
              <input
                id="country"
                name="country"
                required
                defaultValue="Hong Kong"
                className="mt-1 w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                required
                className="mt-1 w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl">Shipping method</h2>
          <ul className="mt-3 space-y-2">
            {shippingOptions.map((opt) => (
              <li key={opt.id}>
                <label className="flex cursor-pointer items-center justify-between border border-peach bg-blush px-4 py-3">
                  <span className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={ship === opt.id}
                      onChange={() => setShip(opt.id)}
                    />
                    {opt.label}
                  </span>
                  <span>{opt.price === 0 ? "Free" : money(opt.price)}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl">Payment</h2>
          <p className="mt-2 text-sm">Card fields are visual only.</p>
          <div className="mt-3 grid gap-3">
            <input
              placeholder="Card number"
              className="border border-peach bg-blush px-3 py-2.5 outline-none"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="MM / YY"
                className="border border-peach bg-blush px-3 py-2.5 outline-none"
              />
              <input
                placeholder="CVC"
                className="border border-peach bg-blush px-3 py-2.5 outline-none"
              />
            </div>
          </div>
        </section>

        {error && <p className="text-sm text-rose-deep">{error}</p>}

        <button type="submit" className="bg-rose px-8 py-3 text-blush">
          Place order
        </button>
      </form>

      <aside className="h-fit bg-blush p-6">
        <h2 className="font-display text-2xl">Order summary</h2>
        <ul className="mt-4 space-y-3">
          {lines.map((l) => (
            <li key={l.key} className="flex gap-3 text-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={l.image} alt="" className="h-14 w-14 object-cover" />
              <div className="flex-1">
                <p>
                  {l.title} × {l.quantity}
                </p>
                <p>{money(l.price * l.quantity)}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 space-y-1 border-t border-peach pt-4 text-sm">
          <p className="flex justify-between">
            <span>Subtotal</span>
            <span>{money(subtotal)}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : money(shipping)}</span>
          </p>
          <p className="flex justify-between pt-2 text-base">
            <span>Total</span>
            <span>{money(total)}</span>
          </p>
        </div>
      </aside>
    </div>
  );
}
