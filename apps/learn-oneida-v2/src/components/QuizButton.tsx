import { cn } from "@ukwehuwehneke/ohutsya";

type Emphasis = "fill" | "outline" | "highlight" | "highlightOutline";

type Intent = "secondary" | "positive" | "negative" | "primary" | "warning";

export interface QuizButtonProps {
  children: string;
  disabled?: boolean;
  isSelected?: boolean;
  isTheAnswer?: boolean;
  onClick: () => void;
}

export function QuizButton({
  children,
  disabled = false,
  isSelected = false,
  isTheAnswer = false,
  onClick,
}: QuizButtonProps) {
  const emphasis = !disabled
    ? "outline"
    : isSelected && isTheAnswer
      ? "fill"
      : isSelected && !isTheAnswer
        ? "fill"
        : !isSelected && isTheAnswer
          ? "highlightOutline"
          : "outline";

  const intent = !disabled
    ? "secondary"
    : isSelected && isTheAnswer
      ? "positive"
      : isSelected && !isTheAnswer
        ? "negative"
        : !isSelected && isTheAnswer
          ? "positive"
          : "secondary";

  const styles = useControlStyles({ emphasis, intent });

  return (
    <button
      className={cn(
        "p-4 border text-left cursor-pointer",
        !disabled && "hover:bg-gray-100",
        disabled && "cursor-not-allowed",
        styles.emphasisStyle,
        disabled &&
          intent === "secondary" &&
          emphasis === "outline" &&
          "text-gray-400",
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

const emphasisMap: Record<Emphasis, string> = {
  fill: "border-transparent text-white",
  outline: "bg-white",
  highlight: "border-transparent",
  highlightOutline: "",
};

const emphasisIntentMap: Record<Emphasis, Record<Intent, string>> = {
  fill: {
    primary: "bg-blue-700",
    secondary: "bg-gray-500",
    positive: "bg-green-700",
    warning: "bg-yellow-600",
    negative: "bg-red-700",
  },
  outline: {
    primary: "border-blue-700 text-blue-700",
    secondary: "border-gray-500 text-gray-700",
    positive: "border-green-700 text-green-700",
    warning: "border-yellow-600 text-yellow-600",
    negative: "border-red-700 text-red-700",
  },
  highlight: {
    primary: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    positive: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-700",
    negative: "bg-red-100 text-red-800",
  },
  highlightOutline: {
    primary: "bg-blue-100 text-blue-800 border-blue-700",
    secondary: "bg-gray-100 text-gray-800 border-gray-500",
    positive: "bg-green-100 text-green-800 border-green-700",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-600",
    negative: "bg-red-100 text-red-800 border-red-700",
  },
};

export function useControlStyles({
  disabled = false,
  emphasis = "outline",
  intent = "secondary",
}: {
  disabled?: boolean;
  emphasis?: Emphasis;
  intent?: Intent;
} = {}) {
  return {
    baseStyle: cn(
      "border-[1px] rounded placeholder-gray-500::placeholder",
      disabled && "cursor-not-allowed",
    ),
    emphasisStyle: cn(
      emphasisMap[emphasis],
      emphasisIntentMap[emphasis][intent],
    ),
  };
}
