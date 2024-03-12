import fs from "node:fs";

const path = "./node_modules/@prisma/client/index-browser.js";

fs.writeFileSync(
	path,
	`const prisma = require('../../.prisma/client/index-browser');
  module.exports = prisma
`,
);
console.log("Overwrote Prisma module specifier.");
