import {
  type Emphasis,
  type Size,
  useControlStyles,
} from "../../design/controlStyles";
import { type Intent, cn } from "../../utils";

export interface ButtonProps {
  children: string;
  disabled?: boolean;
  emphasis?: Emphasis;
  intent?: Intent;
  onClick?: () => void;
  size?: Size;
  type?: "button" | "submit";
}

export function Button({
  children,
  disabled = false,
  emphasis = "outline",
  intent = "secondary",
  onClick,
  size = "md",
  type = "button",
}: ButtonProps) {
  const styles = useControlStyles({ emphasis, intent, size });

  return (
    <button
      className={cn(
        styles.baseStyle,
        "inline-flex items-center justify-center whitespace-nowrap",
        "text-sm font-medium",
        "disabled:pointer-events-none disabled:opacity-50",
        "px-4",
        styles.emphasisStyle,
        styles.sizeStyle,
      )}
      disabled={disabled}
      onClick={() => onClick?.()}
      type={type}
    >
      {children}
    </button>
  );
}
