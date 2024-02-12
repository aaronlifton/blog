import * as fs from "https://deno.land/std@0.203.0/fs/mod.ts";
import * as path from "https://deno.land/std@0.215.0/path/mod.ts";



export type PaletteWithFallback = {
	[key: string]: {
		[key: string]: {
			oklch: string;
			rgbFallback: string;
		};
	};
};

export type SimplePalette = {
	[key: string]: {
		[key: string]: string;
	};
};



export function generateCssVarsForColor(
	color: string,
	shades: Record<string, { oklch: string; rgbFallback: string }>,
	prop: keyof PaletteWithFallback[string][string],
) {
	const cssVars = [];
	for (const [shade, value] of Object.entries(shades)) {
		cssVars.push(`--${color}-${shade}:${value[prop]};`);
	}
	return cssVars;
}
let allColors = []
	for (const [colorName, shades] of Object.entries(palette)) {
		const oklchVars = generateCssVarsForColor(colorName, shades, "oklch");
		// const fallbackVars = generateCssVarsForColor(
		// 	colorName,
		// 	shades,
		// 	"rgbFallback",
		// );
	  allColors.push(oklchVars)
}


