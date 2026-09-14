"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "@/store/account";

export default function RegisterPage() {
  const router = useRouter();
  const login = useAccount((s) => s.login);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    login({
      email: String(form.get("email") || ""),
      name: String(form.get("name") || "Guest"),
    });
    router.push("/account");
  }

  return (
    <div className="mx-auto max-w-[440px] px-6 py-16">
      <h1 className="font-display text-4xl">Create account</h1>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
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
          <label htmlFor="password" className="mb-1 block text-sm">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={4}
            className="w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
          />
        </div>
        <button type="submit" className="w-full bg-rose py-3 text-blush">
          Register
        </button>
      </form>
    </div>
  );
}
