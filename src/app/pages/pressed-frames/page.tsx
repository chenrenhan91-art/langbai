import type { Metadata } from "next";
import { CatalogLanding } from "@/components/CatalogLanding";

export const metadata: Metadata = { title: "Pressed Frames" };

export default function Page() {
  return (
    <CatalogLanding
      title="Pressed Frames"
      handles={[
        "pressed-flower-frames",
        "oval-pressed-flower-frames",
        "pressed-flower-jewelry-box",
      ]}
      notes={[
        "8x8 boutonniere frame from $185",
        "8x10 pressed frame from $285",
        "6x8 jewelry box $350, plus $40 for dividers",
        "11x14 pressed frame from $385",
        "16x20 vow frame from $515",
        "Layouts: Invitation, Traditional / Centered, Meadow",
      ]}
    />
  );
}
