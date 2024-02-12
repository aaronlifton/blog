import {
  nearest,
  differenceEuclidean,
  converter
} from "https://deno.land/x/culori@v4.0.1";
import fs from "https://deno.land/std@0.203.0/fs/mod.ts";

function adjustHue(val) {
  if (val < 0) val += Math.ceil(-val / 360) * 360;

  return val % 360;
}

function createScientificPalettes(baseColor) {
  const targetHueSteps = {
    analogous: [0, 30, 60],
    triadic: [0, 120, 240],
    tetradic: [0, 90, 180, 270],
    complementary: [0, 180],
    splitComplementary: [0, 150, 210],
  };

  const palettes = {};

  for (const type of Object.keys(targetHueSteps)) {
    palettes[type] = targetHueSteps[type].map((step) => ({
      l: baseColor.l,
      c: baseColor.c,
      h: adjustHue(baseColor.h + step),
      mode: "lch",
    }));
  }

  return palettes;
}

function isColorEqual(c1, c2) {
  return c1.h === c2.h && c1.l === c2.l && c1.c === c2.c;
}

function discoverPalettes(colors) {
  const palettes = {};

  for (const color of colors) {
    const targetPalettes = createScientificPalettes(color);

    for (const paletteType of Object.keys(targetPalettes)) {
      const palette = [];
      let variance = 0;

      for (const targetColor of targetPalettes[paletteType]) {
        // filter out colors already in the palette
        const availableColors = colors.filter(
          (color1) => !palette.some((color2) => isColorEqual(color1, color2)),
        );

        const match = nearest(
          availableColors,
          differenceEuclidean("lch"),
        )(targetColor)[0];

        variance += differenceEuclidean("lch")(targetColor, match);

        palette.push(match);
      }

      if (!palettes[paletteType] || variance < palettes[paletteType].variance) {
        palettes[paletteType] = {
          colors: palette,
          variance,
        };
      }
    }
  }

  return JSON.stringify(palettes, null, 2);
console.log({ palettes });
return palettes;


const toLCH = converter("lch");

const baseColors = [
  "#FFB97A",
  "#FF957C",
  "#FF727F",
  "#FF5083",
  "#F02F87",
  "#C70084",
  "#9A007F",
  "#6A0076",
  "#33006B",
];

const baseColorsLCH = baseColors.map((color) => toLCH(color));

const palettes = discoverPalettes(baseColorsLCH);
await fs.writeFile("palettes.json", palettes);
console.log("Done.");
