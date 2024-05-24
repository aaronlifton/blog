import fs from "node:fs/promises";
import path from "node:path";
import { createClient } from "@libsql/client";

const client = createClient({
	url: process.env.TURSO_DB_URL,
	authToken: process.env.TURSO_DB_AUTH_TOKEN,
});
const sqlFilePath = path.join(process.cwd(), "bin", "create-db.sql");

async function readFileAndSeparateBySemicolon(filePath) {
	const commands = [];
	const prod = process.env.NODE_ENV === "production" || process.env.PROD;
	let lastCommand = "";
	try {
		const file = await fs.open(filePath);
		for await (const line of file.readLines({ encoding: "utf-8" })) {
			if (line[line.length - 1] === ";") {
				if (prod && line.includes("DROP DATABASE")) {
					continue;
				}
				commands.push(lastCommand + line.trim());
				lastCommand = "";
			} else {
				lastCommand += line.trim();
			}
		}
		return commands;
	} catch (error) {
		console.error("Error reading file:", error);
		return [];
	}
}

// Usage
let totalRowsAffected = 0;
readFileAndSeparateBySemicolon(sqlFilePath).then(async (commands) => {
	for (const command of commands) {
		const result = await client.execute(command);
		console.log("result\t", result);
		totalRowsAffected += result.rowsAffected;
	}
});

if (totalRowsAffected === 0) {
	console.log("No action taken.");
}