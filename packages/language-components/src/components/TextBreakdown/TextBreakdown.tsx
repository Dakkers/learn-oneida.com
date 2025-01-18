import { cn } from "@ukwehuwehneke/ohutsya";
import { arrayify } from "../../utils";
import { whisperizeWord } from "../../utils/words";

export type BreakdownType =
  | "ASP" // aspect suffix
  | "CIS"
  | "CL" // clitic
  | "DEF"
  | "DER" // derivational
  | "DUAL"
  | "EP"
  | "FUT"
  | "HAB"
  | "IFUT"
  | "JOIN"
  | "OP"
  | "NOUN"
  | "PAST"
  | "PO"
  | "PFV"
  | "PP"
  | "PI"
  | "PS"
  | "PREP" // prepronominal
  | "PTV"
  | "RECP"
  | "REFL"
  | "REP"
  | "RPL"
  | "SRFL";

export type BreakdownArray = Array<
  | string
  | [string]
  | [string, BreakdownType]
  | {
      text: string;
      type?: BreakdownType;
    }
>;

export interface TextBreakdownProps {
  as?: "span" | "div";
  breakdown: BreakdownArray;
  ignored?: BreakdownType[];
  typeFallback?: BreakdownType;
  whispered?: boolean;
  wrap?: "nowrap";
}

export function TextBreakdown({
  as: Tag = "span",
  breakdown: _breakdown,
  ignored = [],
  typeFallback,
  whispered: _whispered = false,
  wrap,
}: TextBreakdownProps) {
  const breakdown = _breakdown;

  return (
    <Tag>
      {breakdown.map((part, i) => {
        const innerTextProps = { wrap };
        const isLastPart = i === breakdown.length - 1;
        const whispered = isLastPart && !!_whispered;

        if (typeof part === "string") {
          return (
            <InnerText {...innerTextProps} key={i}>
              {whispered ? whisperizeWord(part) : part}
            </InnerText>
          );
        }

        const text = Array.isArray(part) ? part[0] : part.text;
        const type = Array.isArray(part) ? part[1] : part.type;

        const hasLeadingWhitespace = text.trimStart() !== text;
        const hasTrailingWhitespace = text.trimStart() !== text;
        const _type = type ?? typeFallback;
        return (
          <InnerText
            {...innerTextProps}
            key={i}
            type={_type && ignored.includes(_type) ? undefined : _type}
          >
            {hasLeadingWhitespace ? "&nbsp" : ""}
            {whispered ? whisperizeWord(text) : text}
            {hasTrailingWhitespace ? "&nbsp" : ""}
          </InnerText>
        );
      })}
    </Tag>
  );
}

function InnerText({
  children,
  type,
  wrap,
}: {
  children: React.ReactNode;
  type?: BreakdownType | BreakdownType[];
  wrap?: TextBreakdownProps["wrap"];
}) {
  return (
    <span
      className={cn(
        arrayify(type ?? []).map((t: BreakdownType) =>
          t ? BREAKDOWN_TYPE_MAP[t] : undefined,
        ),
        "font-bold",
        wrap === "nowrap" && "text-nowrap",
      )}
    >
      {children}
    </span>
  );
}

const BREAKDOWN_TYPE_MAP: Record<BreakdownType, string> = {
  ASP: "text-lime-500",
  CIS: "text-lime-500",
  CL: "text-emerald-500",
  DEF: "text-emerald-400",
  DER: "text-yellow-500",
  DUAL: "text-lime-500",
  EP: "text-gray-400",
  FUT: "text-emerald-400",
  HAB: "text-emerald-400",
  IFUT: "text-emerald-400",
  // JOIN: "text-yellow-600",
  JOIN: "text-gray-600",
  NOUN: "text-orange-500",
  OP: "underline decoration-wavy decoration-black",
  PAST: "text-emerald-400",
  PO: "text-blue-600",
  PFV: "text-emerald-400",
  PP: "text-cyan-400",
  PI: "text-violet-700",
  PS: "text-red-600",
  PREP: "text-lime-500",
  PTV: "text-lime-500",
  RECP: "text-green-700",
  REFL: "text-green-700",
  REP: "text-yellow-600",
  RPL: "text-gray-400",
  SRFL: "text-green-700",
} as const;

export function convertBreakdownToPlainText(breakdown: BreakdownArray) {
  const breakdownDuplicate = breakdown;

  return breakdownDuplicate
    .map((part) =>
      Array.isArray(part)
        ? part[0]
        : typeof part === "object"
          ? part.text
          : part,
    )
    .join("");
}
