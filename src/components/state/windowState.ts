import { atom } from "nanostores";

export const windowWidth = atom<number | null>(null);
export const isMobile = atom<boolean | null>(null);
windowWidth.subscribe((value) => {
  if (value) {
    isMobile.set(value < 768);
    console.log({ isMobile: isMobile.get() });
  }
});
