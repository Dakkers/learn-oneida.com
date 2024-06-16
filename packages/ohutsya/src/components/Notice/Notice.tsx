import { cn, type Intent } from "../../utils";

interface NoticeProps {
  children: React.ReactNode;
  intent?: Intent;
}

export function Notice({ children, intent }: NoticeProps) {
  return (
    <div className={cn("p-4", "rounded", intentMap[intent ?? "secondary"])}>
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
