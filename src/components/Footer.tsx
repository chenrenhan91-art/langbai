import Link from "next/link";
import { company } from "@/lib/company";

const information = [
  { href: "/pages/color-correction", label: "What Is Color Correction" },
  { href: "/pages/before-after-gallery", label: "Before & After Gallery" },
  { href: "/pages/testimonial", label: "Testimonials" },
  { href: "/pages/about-us", label: "About Us" },
  { href: "/pages/faqs", label: "FAQs" },
  { href: "/blogs/journal", label: "Blogs" },
];

const policies = [
  { href: "/policies/refund-policy", label: "Refund Policy" },
  { href: "/policies/privacy-policy", label: "Privacy Policy" },
  { href: "/policies/terms-of-service", label: "Terms of Service" },
  { href: "/pages/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-peach bg-blush">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <h3 className="font-display text-2xl text-ink">Information</h3>
          <ul className="mt-6 space-y-2 text-[15px]">
            {information.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink hover:text-rose-deep">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-2xl text-ink">Policies</h3>
          <ul className="mt-6 space-y-2 text-[15px]">
            {policies.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink hover:text-rose-deep">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-2xl text-ink">Contact Us</h3>
          <div className="mt-6 space-y-3 text-[15px] text-ink">
            <p>
              <a href={company.phoneHref}>{company.phone}</a>
            </p>
            <p>
              <Link href="/pages/contact">Send a message</Link>
            </p>
            <p className="whitespace-pre-line leading-relaxed">
              {company.name}
              {"\n"}
              {company.addressLines.join("\n")}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-peach py-5 text-center text-sm text-ink">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
