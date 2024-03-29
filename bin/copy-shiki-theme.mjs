import fs from "node:fs";
import path from "node:path";

const from = path.resolve("bin/material-theme-darker.json");
const to = path.resolve(
	"node_modules/remark-shiki-twoslash/node_modules/shiki/themes/material-theme-darker.json",
);

console.log(`Copying Shiki theme from ${from} to ${to}.`);
fs.copyFileSync(from, to);
console.log("Done.");
