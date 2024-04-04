import { all, createStarryNight } from "@wooorm/starry-night";
import type { Root } from "hast";
import { toHtml } from "hast-util-to-html";
const starryNight = await createStarryNight(all);

export type Transformer = (root: Root) => void;
export const codeToHtml = (
	code: string,
	lang: string,
	transformers: Transformer[] = [],
): string | null => {
	const scope = starryNight.flagToScope(lang);
	if (!scope) {
		return null;
	}
	const root = starryNight.highlight(code, scope);
	for (const t of transformers) {
		t(root);
	}
	return toHtml(root);
};
