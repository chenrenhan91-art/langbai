import type { Metadata } from "next";
import { BeforeAfter } from "@/components/BeforeAfter";
import { withBase } from "@/lib/paths";

export const metadata: Metadata = { title: "Before & After Gallery" };

export default function Page() {
  return (
    <article className="mx-auto max-w-[1000px] px-6 py-16">
      <h1 className="text-center font-display text-5xl">Before & After Gallery</h1>
      <p className="mx-auto mt-4 max-w-[60ch] text-center">
        Dried blooms on the left. Color-corrected keepsakes on the right. Drag the slider.
      </p>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <BeforeAfter before={withBase("/images/color-before.png")} after={withBase("/images/color-after.png")} />
        <BeforeAfter
          before={withBase("/images/color-before.png")}
          after={withBase("/images/product-frames.png")}
          afterLabel="Frame"
        />
        <BeforeAfter
          before={withBase("/images/color-before.png")}
          after={withBase("/images/product-resin.png")}
          afterLabel="Resin"
        />
        <BeforeAfter
          before={withBase("/images/color-before.png")}
          after={withBase("/images/product-oval.png")}
          afterLabel="Oval"
        />
      </div>
    </article>
  );
}
