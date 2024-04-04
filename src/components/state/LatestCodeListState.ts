import { atom } from "nanostores";
import type { CodeResults } from "$util/markdown";

export const latestCodes = atom<CodeResults>([]);
export const isPaused = atom(false);
export const isManuallyPaused = atom(false);
