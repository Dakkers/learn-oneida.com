import { cn } from "@/lib/utils";
import { BreakdownType } from "~/utils";

export function TextBreakdown({
  breakdown,
  typeFallback,
}: {
  breakdown: Array<
    | string
    | {
        text: string;
        type?: BreakdownType;
      }
  >;
  typeFallback?: BreakdownType;
}) {
  return (
    <span>
      {breakdown.map((part, i) => {
        if (typeof part === "string") {
          return (
            <InnerText key={i} type={typeFallback}>
              {part}
            </InnerText>
          );
        }

        const wsPrefix = part.text.trimStart() !== part.text;
        const wsSuffix = part.text.trimStart() !== part.text;
        return (
          <InnerText key={i} type={part.type ?? typeFallback}>
            {wsPrefix ? "&nbsp" : ""}
            {part.text}
            {wsSuffix ? "&nbsp" : ""}
          </InnerText>
        );
      })}
    </span>
  );
}

function InnerText({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: BreakdownType | BreakdownType[];
}) {
  return (
    <span
      className={cn(
        Array.isArray(type)
          ? (type ?? []).map((t) => BREAKDOWN_TYPE_MAP[t])
          : type
          ? BREAKDOWN_TYPE_MAP[type]
          : undefined,
        "font-bold"
      )}
    >
      {children}
    </span>
  );
}

const BREAKDOWN_TYPE_MAP: Record<BreakdownType, string> = {
  RPL: "text-gray-400",
  PR: "text-red-600",
  PB: "text-blue-700",
  PP: "text-violet-600",
  PLB: "",
  PAST: "",
  OP: "underline decoration-wavy",
};
