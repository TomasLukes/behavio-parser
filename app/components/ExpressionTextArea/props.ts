import { ReactNode } from "react";

export interface IExpressionInputProps {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  className: string;
}

export interface IControlButtonProps {
  id: string;
  className: string;
  icon: ReactNode;
  onClick: () => void;
}
