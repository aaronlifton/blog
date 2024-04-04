import type { Element, ElementContent, Root, RootContent } from "hast";

export function starryNightGutter(tree: Root): undefined {
	const replacement: RootContent[] = [];
	const search = /\r?\n|\r/g;
	let index = -1;
	let start = 0;
	let startTextRemainder = "";
	let lineNumber = 0;

	if (!tree.children) {
		return;
	}

	while (++index < tree.children.length) {
		const child = tree.children[index];

		if (child.type === "text") {
			let textStart = 0;
			let match = search.exec(child.value);

			while (match) {
				// Nodes in this line.
				const line: ElementContent[] = tree.children.slice(
					start,
					index,
				) as ElementContent[];

				// Prepend text from a partial matched earlier text.
				if (startTextRemainder) {
					line.unshift({ type: "text", value: startTextRemainder });
					startTextRemainder = "";
				}

				// Append text from this text.
				if (match.index > textStart) {
					line.push({
						type: "text",
						value: child.value.slice(textStart, match.index),
					});
				}

				// Add a line, and the eol.
				lineNumber += 1;
				replacement.push(createLine(line, lineNumber), {
					type: "text",
					value: match[0],
				});

				start = index + 1;
				textStart = match.index + match[0].length;
				match = search.exec(child.value);
			}

			// If we matched, make sure to not drop the text after the last line ending.
			if (start === index + 1) {
				startTextRemainder = child.value.slice(textStart);
			}
		}
	}

	const line = tree.children.slice(start) as ElementContent[];
	// Prepend text from a partial matched earlier text.
	if (startTextRemainder) {
		line.unshift({ type: "text", value: startTextRemainder });
		startTextRemainder = "";
	}

	if (line.length > 0) {
		lineNumber += 1;
		replacement.push(createLine(line as ElementContent[], lineNumber));
	}

	// Replace children with new array.
	tree.children = replacement;
}

function createLine(children: ElementContent[], line: number): Element {
	return {
		type: "element",
		tagName: "span",
		properties: { className: "line", dataLineNumber: line },
		children,
	};
}
