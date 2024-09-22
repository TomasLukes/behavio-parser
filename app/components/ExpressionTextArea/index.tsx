import Icons from "@/app/components/ui/Icons";
import ControlButton from "@/app/components/ExpressionTextArea/ControlButton";
import { IExpressionInputProps } from "@/app/components/ExpressionTextArea/props";
import { useState } from "react";
import clsx from "clsx";

const ExpressionTextArea = ({
  inputValue,
  setInputValue,
  className,
}: IExpressionInputProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleInputChange = (inputValue: string) => {
    setInputValue(inputValue);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(inputValue);
    setCopied(!copied);
  };

  const handleInputReset = () => {
    setInputValue("");
  };

  const controlButtonsConfig = [
    {
      buttonId: "copyToClipboard",
      className: "bg-emerald-500 hover:bg-emerald-400",
      icon: <Icons.Clipboard />,
      onClick: handleCopyToClipboard,
    },
    {
      buttonId: "deleteAll",
      className: "bg-red-500 hover:bg-red-400",
      icon: <Icons.Trash />,
      onClick: handleInputReset,
    },
  ];

  return (
    <div className="relative w-full h-full">
      <textarea
        placeholder="Put you S-Expression here..."
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
        className={clsx("resize-none", className)}
      ></textarea>
      <div className="absolute bottom-4 right-6 flex items-center gap-2">
        {controlButtonsConfig.map(({ buttonId, className, icon, onClick }) => (
          <ControlButton
            key={buttonId}
            id={buttonId}
            className={className}
            icon={icon}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpressionTextArea;
