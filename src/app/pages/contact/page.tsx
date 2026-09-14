"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    void navigator.clipboard.writeText(company.email).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const lines = [`Name: ${name}`, `Email: ${email}`];
    if (phone) lines.push(`Phone: ${phone}`);
    const body = [...lines, "", message].join("\n");
    window.location.href = `${company.emailHref}?subject=${encodeURIComponent(
      `${company.shortName} website enquiry`,
    )}&body=${encodeURIComponent(body)}`;
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
          Questions before you book? Email us directly. No third-party form, no activation step.
        </p>
        <div className="mt-8 space-y-3 text-[15px]">
          <p>
            <a href={company.emailHref} className="break-all underline">
              {company.email}
            </a>
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={company.emailHref} className="bg-rose px-6 py-3 text-blush">
              Email us
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="border border-ink px-6 py-3"
            >
              {copied ? "Copied" : "Copy email"}
            </button>
          </div>
          <p>
            <a href={company.phoneHref}>{company.phone}</a>
          </p>
          <p className="whitespace-pre-line">{company.addressLines.join("\n")}</p>
        </div>
      </div>
      <div>
        <p className="mb-5 text-sm text-ink/80">
          Send opens your email app addressed to {company.email}. If nothing opens, copy the address and write us there.
        </p>
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
      </div>
    </article>
  );
}
