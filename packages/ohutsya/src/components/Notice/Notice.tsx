import { cn, type Intent } from "../../utils";

type Emphasis = "highlight" | "outline";

export interface NoticeProps {
  children: React.ReactNode;
  emphasis?: Emphasis;
  intent?: Intent;
}

const emphasisIntentMap: Record<Emphasis, Record<Intent, string>> = {
  outline: {
    primary: "border border-2 border-blue-700",
    secondary: "border border-2 border-gray-500",
    positive: "border border-2 border-green-700",
    warning: "border border-2 border-yellow-600",
    negative: "border border-2 border-red-700",
    magic: "border border-2 border-violet-700",
  },
  highlight: {
    primary: "bg-blue-100",
    secondary: "bg-gray-100",
    positive: "bg-green-100",
    warning: "bg-yellow-100",
    negative: "bg-red-100",
    magic: "bg-violet-100",
  },
};

export function Notice({
  children,
  emphasis = "highlight",
  intent = "secondary",
}: NoticeProps) {
  return (
    <div className={cn("p-4", "rounded", emphasisIntentMap[emphasis][intent])}>
      {children}
    </div>
  );
}
