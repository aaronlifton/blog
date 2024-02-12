// import postcss from 'postcss';
// import postcssOKLabFunction from '@csstools/postcss-oklab-function';
//
// const opts = {
// 	subFeatures: {
// 		displayP3: false
// 	},
// 	enableProgressiveCustomProperties: false,
// 	preserve: false
// }
//
// postcss([
// 	postcssOKLabFunction(opts)
// ]).process(`oklch(75% 50 180 / 0.5)`).then(result => {
//     console.log("result", result)
// })
import * as snapshot from "https://deno.land/std@0.202.0/testing/snapshot.ts";
// import * as path from "https://deno.land/std@0.203.0/path/mod.ts";
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

export type ExportTarget = (args: {
	targetDir: string;
	palette: PaletteWithFallback;
}) => Promise<void>;
/**
 * Build CSS variables for each color in the palette in a separate css file + one index.css file with all colors.
 */
export const buildCssVars: ExportTarget = async ({ palette, targetDir }) => {
	const all: string[] = [];

	for (const [colorName, shades] of Object.entries(palette)) {
		const oklchVars = generateCssVarsForColor(colorName, shades, "oklch");
		const fallbackVars = generateCssVarsForColor(
			colorName,
			shades,
			"rgbFallback",
		);

		await Deno.writeTextFile(
			path.join(targetDir, `${colorName}.css`),
			cssFileTemplate(oklchVars, fallbackVars),
		);

		all.push(`@import "./${colorName}.css";`);
	}

	await Deno.writeTextFile(path.join(targetDir, `index.css`), all.join("\n"));
};

function cssFileTemplate(oklchVars: string[], fallbackVars: string[]) {
	return `:root {
${fallbackVars.map((v) => `  ${v}`).join("\n")}
}

@supports (color: oklch(0% 0 0)) {
	@media (color-gamut: p3) {
		:root {
${oklchVars.map((v) => `      ${v}`).join("\n")}
		}
	}
}
`;
}

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

const blue = {
    100: {
      oklch: "oklch(0.1111 0.151562 20)",
      rgbFallback: "#fc8083",
    },
    200: {
      oklch: "oklch(0.2222 0.151562 20)",
      rgbFallback: "#fc8083",
    },
  };

const res = await buildCssVars({targetDir: "./", palette: { blue }})
console.log({res})


const  DIST_DIR="./dist"
async function runExportTarget(
  targetDir: string,
  target: ExportTarget,
  palette: PaletteWithFallback,
) {
  await Deno.mkdir(targetDir, { recursive: true });
  await target({ targetDir, palette });
}

async function createDistDir(dir: string) {
  if (await fs.exists(dir)) {
    await Deno.remove(dir, { recursive: true });
  }
  await Deno.mkdir(dir);
}
await createDistDir(DIST_DIR);

const result = await runExportTarget(path.join(DIST_DIR, "css"), buildCssVars, blue)

console.log("done", {result})
