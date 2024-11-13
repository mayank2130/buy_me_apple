import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./DropDownMenu";

const CodeSnippetComponent: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedCrypto, setSelectedCrypto] = useState<string>("Select Crypto");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setSelectedCrypto(text); // Update the selected crypto text
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="bg-gray-800 rounded-md p-4 mx-auto flex flex-row absolute bottom-32">
      <pre className="text-white font-mono whitespace-pre-wrap break-all pr-20">
        {selectedCrypto}
      </pre>
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="text-gray-400 hover:text-gray-300 focus:outline-none">
              {copied ? (
                <Check className="w-6 h-6 text-green-400" />
              ) : (
                <Copy className="w-6 h-6" />
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                handleCopy("AGnkesAZChtcZF7kq2dKXdsiisX2JnTdhZdx28fs8fa7")
              }
            >
              Solana
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                handleCopy("0x3f64A9e873EFd1364CfB02aa3cabA5b3530BB5B5")
              }
            >
              Ethereum
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                handleCopy("bc1q989tqmrxey47jqgpy78cmw2ldtjk46u0dnnnc6")
              }
            >
              Bitcoin
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default CodeSnippetComponent;
