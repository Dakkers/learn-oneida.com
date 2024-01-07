import { cn } from "@/lib/utils";
import { BreakdownType } from "~/utils";

export function TextBreakdown({
  breakdown,
}: {
  breakdown: Array<{
    text: string;
    type?: BreakdownType;
  }>;
}) {
  return (
    <span>
      {breakdown.map((part, i) => {
        const wsPrefix = part.text.trimStart() !== part.text;
        const wsSuffix = part.text.trimStart() !== part.text;
        return (
          <span
            className={cn(
              part.type && BREAKDOWN_TYPE_COLOR_MAP[part.type],
              "font-bold"
            )}
            key={i}
          >
            {wsPrefix ? "&nbsp" : ""}
            {part.text}
            {wsSuffix ? "&nbsp" : ""}
          </span>
        );
      })}
    </span>
  );
}

const BREAKDOWN_TYPE_COLOR_MAP: Record<BreakdownType, string> = {
  RPL: "text-gray-400",
  PR: "text-red-600",
  PB: "text-blue-700",
  PP: "text-violet-600",
  PLB: "",
  PAST: "",
};
