"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccount } from "@/store/account";

export default function LoginPage() {
  const router = useRouter();
  const login = useAccount((s) => s.login);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "");
    const password = String(form.get("password") || "");
    if (!email || password.length < 4) {
      setError("Enter an email and a password of at least 4 characters.");
      return;
    }
    login({ email, name: email.split("@")[0] });
    router.push("/account");
  }

  return (
    <div className="mx-auto max-w-[440px] px-6 py-16">
      <h1 className="font-display text-4xl">Login</h1>
      <p className="mt-3 text-sm">
        Demonstration account stored in this browser only.
      </p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
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
            className="w-full border border-peach bg-blush px-3 py-2.5 outline-none focus:border-rose"
          />
        </div>
        {error && <p className="text-sm text-rose-deep">{error}</p>}
        <button type="submit" className="w-full bg-rose py-3 text-blush">
          Sign in
        </button>
      </form>
      <p className="mt-4 text-sm">
        New here?{" "}
        <Link href="/account/register" className="underline">
          Create account
        </Link>
      </p>
    </div>
  );
}
