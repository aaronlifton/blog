import { atom } from "nanostores";

export const activeHeading = atom<HTMLLIElement | null>(null);
export const lastActiveHeading = atom<HTMLLIElement | null>(null);
