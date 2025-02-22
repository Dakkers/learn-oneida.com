import { cn } from "@ukwehuwehneke/ohutsya";
import { arrayify } from "../../utils";
import { whisperizeWord } from "../../utils/words";

export type BreakdownType =
  | "ASP" // aspect suffix
  | "CIS" // cislocative
  | "CL" // clitic
  | "DEF"
  | "DER" // derivational
  | "DUAL"
  | "EP"
  | "EXAS" // expanded aspect suffix
  | "FUT"
  | "HAB"
  | "IFUT"
  | "INST2" // instrumental II
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
  | "PUNC" // punctual
  | "RECP"
  | "REFL"
  | "REP"
  | "RPL"
  | "SRFL"
  | "TRAN"; // translocative

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
  ignored: _ignored = undefined,
  typeFallback,
  whispered: _whispered = false,
  wrap,
}: TextBreakdownProps) {
  const breakdown = _breakdown;
  const ignored = _ignored ?? (["HAB", "DERIV", "PUNC"] as BreakdownType[]);

  return (
    <Tag className="text-xsBodyM md:text-mdBodyM">
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
        const hasTrailingWhitespace = text.trimEnd() !== text;
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
        "font-medium",
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
  DEF: "text-lime-500",
  DER: "text-yellow-500",
  DUAL: "text-lime-500",
  EP: "text-gray-400",
  EXAS: "text-lime-500",
  FUT: "text-emerald-400",
  HAB: "text-emerald-400",
  IFUT: "text-emerald-400",
  INST2: "text-yellow-500",
  // JOIN: "text-yellow-600",
  JOIN: "text-gray-600",
  NOUN: "underline decoration-dotted decoration-[0.09rem] decoration-black",
  OP: "underline decoration-wavy decoration-black",
  PAST: "text-emerald-400",
  PO: "text-blue-600",
  PFV: "text-emerald-400",
  PP: "text-cyan-400",
  PI: "text-violet-700",
  PS: "text-red-600",
  PREP: "text-lime-500",
  PTV: "text-lime-500",
  PUNC: "text-emerald-400",
  RECP: "text-green-700",
  REFL: "text-green-700",
  REP: "text-lime-500",
  RPL: "text-gray-400",
  SRFL: "text-green-700",
  TRAN: "text-lime-500",
} as const;

export function convertBreakdownToPlainText(
  breakdown: BreakdownArray | string,
) {
  if (typeof breakdown === "string") {
    return breakdown;
  }

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
