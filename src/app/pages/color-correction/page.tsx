import type { Metadata } from "next";
import { BeforeAfter } from "@/components/BeforeAfter";
import { company } from "@/lib/company";
import { withBase } from "@/lib/paths";

export const metadata: Metadata = { title: "Color Correction" };

export default function Page() {
  return (
    <article className="mx-auto max-w-[900px] px-6 py-16">
      <h1 className="text-center font-display text-5xl">
        Flower Color Correction Before & After
      </h1>
      <p className="mx-auto mt-6 max-w-[60ch] text-center leading-relaxed">
        Every preserved bouquet from {company.name} includes professional color correction. No add-on. No extra charge.
      </p>
      <div className="mx-auto mt-10 max-w-3xl">
        <BeforeAfter before={withBase("/images/color-before.png")} after={withBase("/images/color-after.png")} />
      </div>
      <h2 className="mt-14 font-display text-3xl">
        What is color correction and why is it important?
      </h2>
      <p className="mt-5 leading-relaxed">
        Flowers fade and shift as they dry. Color correction is a careful studio step that restores tone so the piece stays closer to how you remember the bouquet on the day.
      </p>
      <p className="mt-4 leading-relaxed">
        We include it with every keepsake because shape alone is not enough. The color of that hour matters too. Unlike untreated drying, correction keeps whites bright and hues readable for years.
      </p>
    </article>
  );
}
