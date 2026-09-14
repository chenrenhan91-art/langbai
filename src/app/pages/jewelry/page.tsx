import type { Metadata } from "next";
import { CatalogLanding } from "@/components/CatalogLanding";

export const metadata: Metadata = { title: "Jewelry" };

export default function Page() {
  return (
    <CatalogLanding
      title="Jewelry"
      handles={["preserved-flower-necklaces"]}
      notes={[
        "Circle pendant with 16 inch sterling silver cable chain - $70",
        "Circle pendant with 16 inch sterling silver beaded chain - $80",
      ]}
    />
  );
}
