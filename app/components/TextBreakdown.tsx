import { cn } from "@/lib/utils";
import { BreakdownType, arrayify } from "~/utils";

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
          return <InnerText key={i}>{part}</InnerText>;
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
        arrayify(type ?? []).map((t) =>
          t ? BREAKDOWN_TYPE_MAP[t] : undefined
        ),
        "font-bold"
      )}
    >
      {children}
    </span>
  );
}

const BREAKDOWN_TYPE_MAP: Record<BreakdownType, string> = {
  OP: "underline decoration-wavy decoration-black",
  PAST: "",
  PB: "text-blue-700",
  PLB: "text-cyan-400",
  PP: "text-violet-600",
  PR: "text-red-600",
  RPL: "text-gray-400",
};
