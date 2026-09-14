import { withBase } from "./paths";

export type ProductOption = {
  name: string;
  values: string[];
};

export type Product = {
  handle: string;
  title: string;
  price: number;
  priceMax?: number;
  fromPrice?: boolean;
  images: string[];
  category: "frames" | "resin" | "jewelry" | "addons" | "booking" | "gift";
  tags: string[];
  badge?: string;
  description: string[];
  details: { heading: string; body: string[] }[];
  options: ProductOption[];
  custom: boolean;
  inStock: boolean;
};

const FRAME_COLORS = [
  "White",
  "Silver",
  "Gold",
  "Natural Wood",
  "Honey",
  "Walnut",
  "Black",
];

const OVAL_COLORS = ["Walnut", "Black", "Antique Gold", "Ornate Antique Gold"];

const BACKINGS = [
  "Floating Glass",
  "Decorative Mat: White",
  "Decorative Mat: Black",
  "Decorative Mat: Cream",
  "Decorative Mat: Sky Blue",
  "Decorative Mat: Pink",
  "Decorative Mat: Baby Blue",
  "White Linen",
  "Black Linen",
  "Coffee Suede",
  "Blue Suede",
  "Green Suede",
  "Burgundy Suede",
];

const DATE_RANGES = [
  "Jan 1 - Jan 6",
  "Jan 7 - Jan 13",
  "Jan 14 - Jan 20",
  "Jan 21 - Jan 27",
  "Jan 28 - Feb 3",
  "Feb 4 - Feb 10",
  "Feb 11 - Feb 17",
  "Feb 18 - Feb 24",
  "Feb 25 - Mar 3",
  "Mar 4 - Mar 10",
  "Mar 11 - Mar 17",
  "Mar 18 - Mar 24",
  "Mar 25 - Mar 31",
  "Apr 1 - Apr 7",
  "Apr 8 - Apr 14",
  "Apr 15 - Apr 21",
  "Apr 22 - Apr 28",
  "Apr 29 - May 5",
  "May 6 - May 12",
  "May 13 - May 19",
  "May 20 - May 26",
  "May 27 - Jun 2",
  "Jun 3 - Jun 9",
  "Jun 10 - Jun 16",
  "Jun 17 - Jun 23",
  "Jun 24 - Jun 30",
  "Jul 1 - Jul 7",
  "Jul 8 - Jul 14",
  "Jul 15 - Jul 21",
  "Jul 22 - Jul 28",
  "Jul 29 - Aug 4",
  "Aug 5 - Aug 11",
  "Aug 12 - Aug 18",
  "Aug 19 - Aug 25",
  "Aug 26 - Sep 1",
  "Sep 2 - Sep 8",
  "Sep 9 - Sep 15",
  "Sep 16 - Sep 22",
  "Sep 23 - Sep 29",
  "Sep 30 - Oct 6",
  "Oct 7 - Oct 13",
  "Oct 14 - Oct 20",
  "Oct 21 - Oct 27",
  "Oct 28 - Nov 3",
  "Nov 4 - Nov 10",
  "Nov 11 - Nov 17",
  "Nov 18 - Nov 24",
  "Nov 25 - Dec 1",
  "Dec 2 - Dec 8",
  "Dec 9 - Dec 15",
  "Dec 16 - Dec 31",
];

export const colorSwatches: Record<string, string> = {
  White: "#f6f1ea",
  Silver: "#c5c0bb",
  Gold: "#c4a574",
  "Natural Wood": "#d7b48a",
  Honey: "#b8884e",
  Walnut: "#6b4636",
  Black: "#2b2422",
  "Antique Gold": "#b08a4f",
  "Ornate Antique Gold": "#9a7439",
};

function backingExtra(size: string, backing: string) {
  const suede = backing.includes("Suede");
  const linen = backing.includes("Linen");
  const table: Record<string, [number, number]> = {
    "8x8": [20, 30],
    "8x10": [30, 40],
    "11x14": [40, 50],
    "16x20": [40, 50],
  };
  const [linenAmt, suedeAmt] = table[size] ?? [20, 30];
  if (suede) return suedeAmt;
  if (linen) return linenAmt;
  return 0;
}

export function framePrice(size: string, backing: string) {
  const base: Record<string, number> = {
    "8x8": 185,
    "8x10": 285,
    "11x14": 385,
    "16x20": 515,
  };
  return (base[size] ?? 185) + backingExtra(size, backing);
}

export function ovalPrice(size: string, color: string, backing: string) {
  const base: Record<string, number> = {
    "8x10": 450,
    "11x14": 550,
    "16x20": 700,
  };
  const colorExtra =
    color === "Ornate Antique Gold" ? 125 : color === "Antique Gold" ? 50 : 0;
  return (base[size] ?? 450) + colorExtra + backingExtra(size, backing);
}

export function resinPrice(shape: string) {
  if (shape.includes("Bookend")) return 530;
  if (shape.includes("Arch")) return 600;
  return 550;
}

const shippingCopy = {
  heading: "How to send your bouquet",
  body: [
    "After checkout you will receive packing notes by email. Flowers travel best when they leave within 3-5 days of your event.",
    "Use overnight or express international shipping to our Hong Kong workshop. Keep stems in a damp wrap, never sealed in plastic with standing water.",
    "Studio collection in Tai Kok Tsui is available by appointment after you place your order.",
  ],
};

const termsCopy = {
  heading: "Terms",
  body: [
    "Please allow 20-32 weeks for completion. Every piece is handmade and may show small marks such as tiny bubbles, dust, or slight unevenness that do not affect the piece.",
    "Custom keepsakes are non-refundable. Flowers change as they dry. Color and form depend on species and how quickly we receive them.",
    "Finished work may be shown in studio photography unless you ask us not to.",
  ],
};

const approvalCopy = {
  heading: "Final design approval",
  body: [
    "You will receive a digital mock-up before we finish the piece. Up to three layout adjustments are included, then we complete your order.",
  ],
};

export const products: Product[] = [
  {
    handle: "pressed-flower-frames",
    title: "Pressed Flower Frames",
    price: 185,
    priceMax: 565,
    fromPrice: true,
    images: [
      "/images/product-frames.png",
      "/images/wood-frames.png",
      "/images/hero-keepsakes.png",
      "/images/studio-process.png",
    ],
    category: "frames",
    tags: ["Pressed Frames"],
    description: [
      "Turn a wedding bouquet or special-occasion flowers into a custom pressed frame you can keep for years.",
      "Each piece is made to order and includes a digital mock-up, color correction, and your approval before we finish.",
      "International shipping from Hong Kong is available.",
    ],
    details: [shippingCopy, termsCopy, approvalCopy],
    options: [
      { name: "Size", values: ["8x8", "8x10", "11x14", "16x20"] },
      { name: "Frame Color", values: FRAME_COLORS },
      { name: "Backing Options", values: BACKINGS },
    ],
    custom: true,
    inStock: true,
  },
  {
    handle: "oval-pressed-flower-frames",
    title: "Oval Pressed Flower Frames",
    price: 450,
    priceMax: 885,
    fromPrice: true,
    images: [
      "/images/product-oval.png",
      "/images/product-frames.png",
      "/images/studio-process.png",
    ],
    category: "frames",
    tags: ["Pressed Frames"],
    description: [
      "A hand-painted oval frame for your wedding flowers, built to order with a digital mock-up and color correction included.",
      "Choose size, moulding, and backing, then approve the layout before we complete the piece.",
    ],
    details: [shippingCopy, termsCopy, approvalCopy],
    options: [
      { name: "Size", values: ["8x10", "11x14", "16x20"] },
      { name: "Frame Color", values: OVAL_COLORS },
      { name: "Backing Options", values: BACKINGS },
    ],
    custom: true,
    inStock: true,
  },
  {
    handle: "pressed-flower-jewelry-box",
    title: "Pressed Flower Jewelry Box",
    price: 350,
    images: [
      "/images/product-jewelry-box.png",
      "/images/product-frames.png",
      "/images/studio-process.png",
    ],
    category: "frames",
    tags: ["Pressed Frames"],
    description: [
      "A 6x8 jewelry box with your real pressed flowers under a double-glass lid.",
      "Felt-padded dividers can be added for $40 at checkout notes. Includes a digital mock-up and approval before completion.",
    ],
    details: [shippingCopy, termsCopy, approvalCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "preserved-flower-resin-blocks",
    title: "Preserved Flower Resin Blocks",
    price: 530,
    priceMax: 600,
    fromPrice: true,
    images: [
      "/images/product-resin.png",
      "/images/product-bookends.png",
      "/images/hero-keepsakes.png",
    ],
    category: "resin",
    tags: ["Resin Blocks"],
    description: [
      "Preserve your bouquet in a clear resin keepsake for a shelf, mantel, or desk.",
      "Custom designed with a digital mock-up and your approval before we pour.",
    ],
    details: [shippingCopy, termsCopy, approvalCopy],
    options: [
      {
        name: "Shape",
        values: ['2 x 6" Bookends', '8" Square', '8" Hexagon', '9" Arch'],
      },
    ],
    custom: true,
    inStock: true,
  },
  {
    handle: "pressed-flower-decorative-tray",
    title: "Preserved Flower Decorative Tray",
    price: 650,
    images: [
      "/images/product-tray.png",
      "/images/product-resin.png",
      "/images/product-coasters.png",
    ],
    category: "resin",
    tags: ["Resin Blocks"],
    description: [
      "An 11x14 resin tray made with your pressed flowers. Functional art for a vanity, entryway, or table.",
      "Includes a digital design mock-up and approval before we begin.",
    ],
    details: [shippingCopy, termsCopy, approvalCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "preserved-flower-necklaces",
    title: "Pressed Flower Necklace",
    price: 70,
    images: ["/images/product-necklace.png", "/images/product-ring-dish.png"],
    category: "jewelry",
    tags: ["Jewelry"],
    description: [
      "A sterling silver or gold-filled pendant that holds real petals from your bouquet in resin.",
      "Available as a round pendant on a 16 inch cable chain. Custom made with your approval before completion.",
    ],
    details: [shippingCopy, termsCopy, approvalCopy],
    options: [
      {
        name: "Chain",
        values: ["16 inch sterling cable, $70", "16 inch sterling beaded, $80"],
      },
    ],
    custom: true,
    inStock: true,
  },
  {
    handle: "brass-hanging-flower-frame",
    title: "Brass Hanging Flower Frame",
    price: 70,
    images: ["/images/product-brass-frame.png", "/images/product-frames.png"],
    category: "addons",
    tags: ["Add Ons"],
    description: [
      "A brass hanging frame with pressed blooms between glass. A smaller keepsake that pairs well with a larger frame order.",
    ],
    details: [termsCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "christmas-ornament",
    title: "Christmas Ornaments",
    price: 45,
    images: ["/images/product-ornament.png"],
    category: "addons",
    tags: ["Add Ons"],
    description: [
      "A single resin ornament holding petals from your bouquet. A small seasonal keepsake.",
    ],
    details: [termsCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "christmas-ornament-6pcs-full-set",
    title: "Christmas Ornament (Set of 6)",
    price: 260,
    images: ["/images/product-ornament.png", "/images/product-coasters.png"],
    category: "addons",
    tags: ["Add Ons"],
    description: ["A set of six resin ornaments made with your flowers."],
    details: [termsCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "brass-hanging-ornament",
    title: "Brass Hanging Ornament",
    price: 45,
    images: ["/images/product-brass-frame.png", "/images/product-ornament.png"],
    category: "addons",
    tags: ["Add Ons"],
    description: [
      "A brass hanging ornament with preserved flowers in resin.",
    ],
    details: [termsCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "brass-hanging-ornaments-6pcs-full-set",
    title: "Brass Hanging Ornaments (Set of 6)",
    price: 260,
    images: ["/images/product-brass-frame.png"],
    category: "addons",
    tags: ["Add Ons"],
    description: ["A set of six brass hanging ornaments with your flowers."],
    details: [termsCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "coaster",
    title: "Coasters",
    price: 55,
    images: ["/images/product-coasters.png"],
    category: "addons",
    tags: ["Add Ons"],
    description: ["A single resin coaster with real pressed flowers."],
    details: [termsCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "coaster-copy",
    title: "Coasters (Set of 4)",
    price: 210,
    images: ["/images/product-coasters.png", "/images/product-tray.png"],
    category: "addons",
    tags: ["Add Ons"],
    description: ["A set of four resin floral coasters."],
    details: [termsCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "ring-cone",
    title: "Ring Cone",
    price: 70,
    images: ["/images/product-ring-dish.png"],
    category: "addons",
    tags: ["Add Ons"],
    description: ["A resin ring cone with preserved flowers."],
    details: [termsCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "scalloped-ring-dish",
    title: "Scalloped Ring Dish",
    price: 75,
    images: ["/images/product-ring-dish.png", "/images/product-necklace.png"],
    category: "addons",
    tags: ["Add Ons"],
    description: ["A scalloped resin dish for rings, made with your petals."],
    details: [termsCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "trinket-tray",
    title: "Trinket Tray",
    price: 75,
    images: ["/images/product-tray.png", "/images/product-ring-dish.png"],
    category: "addons",
    tags: ["Add Ons"],
    description: ["A small resin trinket tray with pressed flowers."],
    details: [termsCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "wine-stopper",
    title: "Wine Stopper",
    price: 45,
    images: ["/images/product-wine-stopper.png"],
    category: "addons",
    tags: ["Add Ons"],
    description: ["A resin wine stopper topped with preserved flowers."],
    details: [termsCopy],
    options: [],
    custom: true,
    inStock: true,
  },
  {
    handle: "gift-card",
    title: "Gift Card",
    price: 50,
    priceMax: 500,
    fromPrice: true,
    images: ["/images/product-gift-card.png"],
    category: "gift",
    tags: [],
    description: [
      "Give someone the chance to keep their flowers. We will follow up to coordinate the details after the card is used.",
      "Gift cards do not expire and can be applied to any keepsake on this site.",
    ],
    details: [],
    options: [
      {
        name: "Value",
        values: [
          "$50",
          "$100",
          "$150",
          "$200",
          "$250",
          "$300",
          "$350",
          "$400",
          "$450",
          "$500",
        ],
      },
    ],
    custom: false,
    inStock: true,
  },
  {
    handle: "flower-preservation-booking",
    title: "Flower Preservation Booking",
    price: 50,
    images: ["/images/hero-bouquet.png"],
    category: "booking",
    tags: [],
    badge: "Deposit",
    description: [
      "A $50 booking fee holds your date and is credited toward your total.",
      "Select the week your event falls in, or the week you plan to ship your bouquet. All custom orders must meet a $350 minimum.",
      "Invoices go out after we receive your flowers. Color correction is included.",
    ],
    details: [shippingCopy, termsCopy],
    options: [{ name: "Date", values: DATE_RANGES }],
    custom: true,
    inStock: true,
  },
];

export const collections: Record<
  string,
  { title: string; handles: string[]; intro?: string }
> = {
  all: {
    title: "All",
    handles: products.map((p) => p.handle),
  },
  "pressed-frames": {
    title: "Pressed Frames",
    handles: [
      "pressed-flower-frames",
      "oval-pressed-flower-frames",
      "pressed-flower-jewelry-box",
    ],
  },
  "resin-blocks": {
    title: "Resin Blocks",
    handles: [
      "preserved-flower-resin-blocks",
      "pressed-flower-decorative-tray",
    ],
  },
  jewelry: {
    title: "Jewelry",
    handles: ["preserved-flower-necklaces"],
  },
  "shadow-boxes": {
    title: "Shadow Boxes",
    handles: ["pressed-flower-frames", "oval-pressed-flower-frames"],
  },
  "add-ons": {
    title: "Add-Ons",
    intro: "All custom preservation orders must hit a $350 minimum.",
    handles: [
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
    ],
  },
};

export const bestsellers = [
  "pressed-flower-frames",
  "preserved-flower-resin-blocks",
  "oval-pressed-flower-frames",
  "pressed-flower-jewelry-box",
  "pressed-flower-decorative-tray",
  "preserved-flower-necklaces",
];

function withAssets(product: Product): Product {
  return { ...product, images: product.images.map(withBase) };
}

export function getProduct(handle: string) {
  const product = products.find((p) => p.handle === handle);
  return product ? withAssets(product) : undefined;
}

export function searchProducts(q: string) {
  const n = q.trim().toLowerCase();
  const list = !n
    ? products
    : products.filter(
        (p) =>
          p.title.toLowerCase().includes(n) ||
          p.tags.join(" ").toLowerCase().includes(n) ||
          p.description.join(" ").toLowerCase().includes(n),
      );
  return list.map(withAssets);
}

export function relatedProducts(handle: string, limit = 4) {
  const current = products.find((p) => p.handle === handle);
  const list = !current
    ? products.slice(0, limit)
    : products
        .filter((p) => p.handle !== handle && p.category === current.category)
        .concat(products.filter((p) => p.handle !== handle))
        .filter((p, i, arr) => arr.findIndex((x) => x.handle === p.handle) === i)
        .slice(0, limit);
  return list.map(withAssets);
}

export function resolvePrice(product: Product, selected: Record<string, string>) {
  if (product.handle === "pressed-flower-frames") {
    return framePrice(selected.Size || "8x8", selected["Backing Options"] || "Floating Glass");
  }
  if (product.handle === "oval-pressed-flower-frames") {
    return ovalPrice(
      selected.Size || "8x10",
      selected["Frame Color"] || "Walnut",
      selected["Backing Options"] || "Floating Glass",
    );
  }
  if (product.handle === "preserved-flower-resin-blocks") {
    return resinPrice(selected.Shape || '2 x 6" Bookends');
  }
  if (product.handle === "preserved-flower-necklaces") {
    return (selected.Chain || "").includes("$80") ? 80 : 70;
  }
  if (product.handle === "gift-card") {
    const n = Number((selected.Value || "$50").replace("$", ""));
    return Number.isFinite(n) ? n : 50;
  }
  return product.price;
}
