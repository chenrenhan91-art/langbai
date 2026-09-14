"use client";

import { FormEvent, useState } from "react";
import { company } from "@/lib/company";

type Status = "idle" | "sending" | "sent" | "activate" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if ((form.elements.namedItem("company") as HTMLInputElement)?.value) {
      setStatus("sent");
      return;
    }
    setStatus("sending");
    setError("");
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${company.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: String(data.get("name") || ""),
          email: String(data.get("email") || ""),
          phone: String(data.get("phone") || ""),
          message: String(data.get("message") || ""),
          _subject: `${company.shortName} website enquiry`,
          _template: "table",
          _captcha: "false",
          _replyto: String(data.get("email") || ""),
        }),
      });
      const json = (await res.json()) as { success?: string | boolean; message?: string };
      const message = (json.message || "").toLowerCase();
      if (!res.ok) {
        throw new Error(json.message || "Could not send the message.");
      }
      if (message.includes("activate") || message.includes("confirm")) {
        setStatus("activate");
        return;
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Could not send the message.");
    }
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
          <p>
            <a href={company.emailHref}>{company.email}</a>
          </p>
          <p>
            <a href={company.phoneHref}>{company.phone}</a>
          </p>
          <p className="whitespace-pre-line">{company.addressLines.join("\n")}</p>
        </div>
      </div>
      <div>
        {status === "sent" ? (
          <p className="border border-peach bg-blush p-6">
            Message sent. We will reply to the email you entered.
          </p>
        ) : status === "activate" ? (
          <p className="border border-peach bg-blush p-6">
            Check {company.email} (including junk) and click the FormSubmit confirmation link. After that, new messages will arrive in the inbox.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" tabIndex={-1} autoComplete="off" />
            </div>
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
            {status === "error" && <p className="text-sm text-rose-deep">{error}</p>}
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-rose px-6 py-3 text-blush disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send a message"}
            </button>
          </form>
        )}
      </div>
    </article>
  );
}
