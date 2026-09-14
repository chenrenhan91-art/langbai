import type { Metadata } from "next";
import { Baskervville, Libre_Baskerville } from "next/font/google";
import { CartDrawer, SearchDrawer } from "@/components/Drawers";
import { Footer } from "@/components/Footer";
import { SiteChrome } from "@/components/SiteChrome";
import { company } from "@/lib/company";
import "./globals.css";

const display = Baskervville({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const body = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} – Pressed Flower Frames, Resin & More`,
    template: `%s – ${company.name}`,
  },
  description:
    "LANGBAI TRADE LIMITED preserves wedding bouquets and special-occasion flowers into lasting keepsakes. International shipping from Hong Kong.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <SiteChrome>
          {children}
          <Footer />
        </SiteChrome>
        <CartDrawer />
        <SearchDrawer />
      </body>
    </html>
  );
}
