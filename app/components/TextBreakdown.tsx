import { cn } from "@/lib/utils";
import { arrayify } from "~/utils";

export type BreakdownType =
  | "EP"
  | "FUT"
  | "JOIN"
  | "OP"
  | "PAST"
  | "PB"
  | "PLB"
  | "PP"
  | "PR"
  | "RECP"
  | "REFL"
  | "REP"
  | "RPL";

type BreakdownArray = Array<
  | string
  | {
      text: string;
      type?: BreakdownType;
    }
>;

export type TextBreakdownSuffix = "hne" | "kwe" | "hkwe";

export function TextBreakdown({
  as: Tag = "span",
  breakdown: _breakdown,
  prefix,
  suffix,
  typeFallback,
}: {
  as?: "span" | "div";
  breakdown: BreakdownArray;
  prefix?: BreakdownType;
  suffix?: TextBreakdownSuffix;
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
  )
    .concat(_breakdown)
    .concat(getSuffixArr(suffix));

  return (
    <Tag>
      {breakdown.map((part, i) => {
        if (typeof part === "string") {
          const isPastTense =
            (["kweʔ", "hkweʔ", "hné·", "hneʔ"].includes(part) &&
              i === breakdown.length - 1) ||
            (["tshi", "tshaʔ"].includes(part) && i === 0);
          return (
            <InnerText key={i} type={isPastTense ? "PAST" : undefined}>
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
    </Tag>
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
  EP: "text-gray-400",
  FUT: "text-emerald-400",
  JOIN: "text-gray-400",
  OP: "underline decoration-wavy decoration-black",
  PAST: "text-orange-500",
  PB: "text-blue-600",
  PLB: "text-cyan-400",
  PP: "text-violet-500",
  PR: "text-red-600",
  RECP: "text-green-700",
  REFL: "text-green-700",
  REP: "text-yellow-600",
  RPL: "text-gray-400",
} as const;

function getSuffixArr(suffix: TextBreakdownSuffix | undefined) {
  if (!suffix) {
    return [];
  }
  const text =
    suffix === "hne"
      ? "hné·"
      : suffix === "kwe"
      ? "kweʔ"
      : suffix === "hkwe"
      ? "hkweʔ"
      : undefined;
  if (!text) {
    return [];
  }
  return [{ text, type: "PAST" }] as const;
}
