import type { Metadata } from "next";
import { CatalogLanding } from "@/components/CatalogLanding";

export const metadata: Metadata = { title: "Resin Blocks" };

export default function Page() {
  return (
    <CatalogLanding
      title="Resin Blocks"
      handles={[
        "preserved-flower-resin-blocks",
        "pressed-flower-decorative-tray",
      ]}
      notes={[
        '6" bookend set - $530',
        '8" square - $550',
        '8" hexagon - $550',
        '9" arch - $600',
        "11x14 decorative tray - $650",
      ]}
    />
  );
}
