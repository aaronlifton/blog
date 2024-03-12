import fs from "node:fs";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const __dirname = dirname(fileURLToPath(import.meta.url));
export const rootPath = path.join(__dirname, "../");

const files = fs.readdirSync(".", { withFileTypes: true });
console.log({ files: files.map((f) => path.resolve(f.path, f.name)) });
