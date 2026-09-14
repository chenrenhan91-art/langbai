"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <article className="mx-auto grid max-w-[1000px] gap-12 px-6 py-16 lg:grid-cols-2">
      <div>
        <h1 className="font-display text-5xl">Say Hello</h1>
        <p className="mt-6 leading-relaxed">
          At {company.name}, every piece is made to order, from first note to packed box.
        </p>
        <p className="mt-4 leading-relaxed">
          The fastest way to hold a date is to choose a keepsake and check out. We take a limited number of bouquets at a time, so earlier is better.
        </p>
        <p className="mt-4 leading-relaxed">
          Questions before you book? Send a note. We answer.
        </p>
        <div className="mt-8 space-y-2 text-[15px]">
          <p>{company.phone}</p>
          <p className="whitespace-pre-line">{company.addressLines.join("\n")}</p>
        </div>
      </div>
      <div>
        {sent ? (
          <p className="border border-peach bg-blush p-6">
            Message received. This is a demonstration form, so nothing was emailed. Please call {company.phone} if you need a reply.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                className="w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
              />
            </div>
            <button type="submit" className="bg-rose px-6 py-3 text-blush">
              Send a message
            </button>
          </form>
        )}
      </div>
    </article>
  );
}
