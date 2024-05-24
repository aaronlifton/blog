import { CheckIcon, CopyIcon } from "lucide-react";
import { type HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends Partial<HTMLAttributes<HTMLButtonElement>> {
  code: string;
}
const CopyToClipboard: React.FC<Props> = ({ code, className }) => {
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
      className={twMerge(
        "text-[#646464] transition-colors duration-200 ease-in-out hover:text-[#c4c4c4]",
        className,
      )}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
};

export default CopyToClipboard;
