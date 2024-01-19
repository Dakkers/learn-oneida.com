import { cn } from "@/lib/utils";
import { arrayify } from "~/utils";

export type BreakdownType =
  | "FUT"
  | "OP"
  | "PAST"
  | "PB"
  | "PLB"
  | "PP"
  | "PR"
  | "RECP"
  | "REFL"
  | "RPL";

type BreakdownArray = Array<
  | string
  | {
      text: string;
      type?: BreakdownType;
    }
>;

export function TextBreakdown({
  breakdown: _breakdown,
  prefix,
  typeFallback,
}: {
  breakdown: BreakdownArray;
  prefix?: BreakdownType;
  typeFallback?: BreakdownType;
}) {
  const breakdown = (
    prefix === "RECP"
      ? ([
          {
            text: "te",
            type: "RECP",
          },
        ] as BreakdownArray)
      : []
  ).concat(_breakdown);

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
  FUT: "text-emerald-400",
  OP: "underline decoration-wavy decoration-black",
  PAST: "text-green-700",
  PB: "text-blue-600",
  PLB: "text-cyan-400",
  PP: "text-violet-500",
  PR: "text-red-600",
  RPL: "text-gray-400",
  RECP: "text-green-700",
  REFL: "text-green-700",
};
