import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

export const __dirname = dirname(fileURLToPath(import.meta.url));
export const rootPath = path.join(__dirname, "../");

const files = fs.readdirSync(".", { withFileTypes: true });
console.log({ files: files.map((f) => path.resolve(f.path, f.name)) });
