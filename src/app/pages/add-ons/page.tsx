import { CatalogLanding } from "@/components/CatalogLanding";

export default function Page() {
  return (
    <CatalogLanding
      title="Add-Ons"
      handles={[
        "wine-stopper",
        "christmas-ornament",
        "brass-hanging-ornament",
        "coaster",
        "brass-hanging-flower-frame",
        "ring-cone",
        "scalloped-ring-dish",
        "trinket-tray",
        "coaster-copy",
        "christmas-ornament-6pcs-full-set",
        "brass-hanging-ornaments-6pcs-full-set",
      ]}
      notes={["All custom preservation orders must hit a $350 minimum."]}
    />
  );
}
