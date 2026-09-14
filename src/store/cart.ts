"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartLine = {
  key: string;
  handle: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  options: Record<string, string>;
};

type CartState = {
  lines: CartLine[];
  open: boolean;
  searchOpen: boolean;
  menuOpen: boolean;
  setOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  setMenuOpen: (open: boolean) => void;
  add: (line: Omit<CartLine, "key" | "quantity"> & { quantity?: number }) => void;
  updateQty: (key: string, quantity: number) => void;
  remove: (key: string) => void;
  clear: () => void;
};

function lineKey(handle: string, options: Record<string, string>) {
  return `${handle}::${JSON.stringify(options)}`;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      open: false,
      searchOpen: false,
      menuOpen: false,
      setOpen: (open) => set({ open }),
      setSearchOpen: (open) => set({ searchOpen: open }),
      setMenuOpen: (open) => set({ menuOpen: open }),
      add: (line) => {
        const key = lineKey(line.handle, line.options);
        const qty = line.quantity ?? 1;
        const existing = get().lines.find((l) => l.key === key);
        if (existing) {
          set({
            lines: get().lines.map((l) =>
              l.key === key ? { ...l, quantity: l.quantity + qty } : l,
            ),
            open: true,
          });
          return;
        }
        set({
          lines: [...get().lines, { ...line, key, quantity: qty }],
          open: true,
        });
      },
      updateQty: (key, quantity) => {
        if (quantity < 1) {
          set({ lines: get().lines.filter((l) => l.key !== key) });
          return;
        }
        set({
          lines: get().lines.map((l) => (l.key === key ? { ...l, quantity } : l)),
        });
      },
      remove: (key) => set({ lines: get().lines.filter((l) => l.key !== key) }),
      clear: () => set({ lines: [] }),
    }),
    {
      name: "langbai-cart",
      partialize: (s) => ({ lines: s.lines }),
    },
  ),
);

export function cartCount(lines: CartLine[]) {
  return lines.reduce((n, l) => n + l.quantity, 0);
}

export function cartSubtotal(lines: CartLine[]) {
  return lines.reduce((n, l) => n + l.price * l.quantity, 0);
}
