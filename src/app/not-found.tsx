import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[640px] px-6 py-20 text-center">
      <h1 className="font-display text-5xl">Page not found</h1>
      <p className="mt-4">That link does not exist on this store.</p>
      <Link href="/" className="mt-8 inline-block bg-rose px-6 py-3 text-blush">
        Back to home
      </Link>
    </div>
  );
}
