import { cn, type Intent } from "../../utils";

export interface NoticeProps {
  children: React.ReactNode;
  emphasis?: "fill" | "outline";
  intent?: Intent;
}

export function Notice({ children, emphasis = "fill", intent }: NoticeProps) {
  return (
    <div
      className={cn(
        "p-4",
        "rounded",
        emphasis === "fill" && intentMap[intent ?? "secondary"],
        emphasis === "outline" &&
          `border border-2 ${borderIntentMap[intent ?? "secondary"]}`,
      )}
    >
      {children}
    </div>
  );
}

const intentMap: Record<Intent, string> = {
  magic: "bg-violet-200",
  negative: "bg-red-200",
  positive: "bg-green-200",
  primary: "bg-blue-100",
  secondary: "bg-gray-200",
  warning: "bg-amber-200",
} as const;

const borderIntentMap: Record<Intent, string> = {
  magic: "border-violet-400",
  negative: "border-red-400",
  positive: "border-green-400",
  primary: "border-blue-400",
  secondary: "border-gray-400",
  warning: "border-amber-400",
} as const;
