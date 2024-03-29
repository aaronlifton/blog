import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

export default function CopyToClipboard({ code }: { code: string }) {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			console.log("Copied to clipboard");
		} catch (error) {
			console.error("Error copying to clipboard", error);
		} finally {
			setTimeout(() => {
				setCopied(false);
			}, 2000);
		}
	};

	return (
		<button
			type="submit"
			onClick={copyToClipboard}
			className="text-[#646464] hover:text-[#c4c4c4] transition-colors duration-200 ease-in-out"
		>
			{copied ? <CheckIcon /> : <CopyIcon />}
		</button>
	);
}
