"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAccount } from "@/store/account";

export default function AccountPage() {
  const router = useRouter();
  const account = useAccount((s) => s.account);
  const logout = useAccount((s) => s.logout);

  useEffect(() => {
    if (!account) router.replace("/account/login");
  }, [account, router]);

  if (!account) return null;

  return (
    <div className="mx-auto max-w-[640px] px-6 py-16">
      <h1 className="font-display text-4xl">Account</h1>
      <p className="mt-4">Signed in as {account.name}</p>
      <p className="text-sm">{account.email}</p>
      <p className="mt-6 text-sm">
        Order history is local to this browser on the demonstration checkout.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/collections/all" className="bg-rose px-5 py-3 text-blush">
          Shop
        </Link>
        <button
          type="button"
          className="border border-ink px-5 py-3"
          onClick={() => {
            logout();
            router.push("/");
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
