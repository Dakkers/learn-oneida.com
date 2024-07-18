import { Intent, cn } from "../utils";

export type Size = "md";

export type Emphasis = "fill" | "outline";

const emphasisMap: Record<Emphasis, string> = {
  fill: "border-transparent text-white",
  outline: "bg-white",
};

const emphasisIntentMap: Record<Emphasis, Record<Intent, string>> = {
  fill: {
    primary: "bg-blue-700",
    secondary: "bg-gray-500",
    magic: "bg-violet-700",
    positive: "bg-green-700",
    warning: "bg-yellow-600",
    negative: "bg-red-700",
  },
  outline: {
    primary: "border-blue-700 text-blue-700",
    secondary: "border-gray-500 text-gray-700",
    magic: "border-violet-700 text-violet-700",
    positive: "border-green-700 text-green-700",
    warning: "border-yellow-600 text-yellow-600",
    negative: "border-red-700 text-red-700",
  },
};

const sizeMap: Record<Size, string> = {
  md: "h-[48px]",
} as const;

export function useControlStyles({
  emphasis = "outline",
  intent = "secondary",
  size = "md",
}: {
  emphasis?: Emphasis;
  intent?: Intent;
  size?: Size;
} = {}) {
  return {
    baseStyle: cn("border-[1px] rounded"),
    emphasisStyle: cn(
      emphasisMap[emphasis],
      emphasisIntentMap[emphasis][intent],
    ),
    sizeStyle: cn(sizeMap[size]),
  };
}
