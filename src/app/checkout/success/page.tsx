"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessInner() {
  const params = useSearchParams();
  const order = params.get("order");

  return (
    <div className="mx-auto max-w-[640px] px-6 py-16 text-center">
      <h1 className="font-display text-5xl">Thank you</h1>
      <p className="mt-5 leading-relaxed">
        Your demonstration order is saved in this browser. No payment was taken.
      </p>
      {order && <p className="mt-3 text-sm">Order {order}</p>}
      <Link href="/" className="mt-8 inline-block bg-rose px-6 py-3 text-blush">
        Back to home
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessInner />
    </Suspense>
  );
}
