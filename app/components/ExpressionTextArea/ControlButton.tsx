import clsx from "clsx";
import { IControlButtonProps } from "@/app/components/ExpressionTextArea/props";

const ControlButton = ({
  id,
  className,
  icon,
  onClick,
}: IControlButtonProps) => {
  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className={clsx("p-1.5 rounded-xl", className)}
    >
      {icon}
    </button>
  );
};

export default ControlButton;
