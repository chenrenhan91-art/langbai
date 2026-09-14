"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Account = {
  email: string;
  name: string;
};

type AccountState = {
  account: Account | null;
  login: (account: Account) => void;
  logout: () => void;
};

export const useAccount = create<AccountState>()(
  persist(
    (set) => ({
      account: null,
      login: (account) => set({ account }),
      logout: () => set({ account: null }),
    }),
    { name: "langbai-account" },
  ),
);
