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
  | "PB"
  | "PFV"
  | "PLB"
  | "PP"
  | "PR"
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

export type TextBreakdownSuffix =
  | "hne"
  | "kwe"
  | "hkwe"
  | "hake"
  | "heke"
  | "hak"
  | "ake"
  | "áke";

export interface TextBreakdownProps {
  as?: "span" | "div";
  breakdown: BreakdownArray;
  prefix?: BreakdownType;
  suffix?: TextBreakdownSuffix;
  typeFallback?: BreakdownType;
  whispered?: boolean;
  wrap?: "nowrap";
}

export function TextBreakdown({
  as: Tag = "span",
  breakdown: _breakdown,
  prefix,
  suffix,
  typeFallback,
  whispered: _whispered = false,
  wrap,
}: TextBreakdownProps) {
  const breakdown = getPrefixArr(prefix)
    .concat(_breakdown)
    .concat(getSuffixArr(suffix));

  return (
    <Tag>
      {breakdown.map((part, i) => {
        const innerTextProps = { wrap };
        const isLastPart = i === breakdown.length - 1;
        const whispered = isLastPart && !!_whispered;

        if (typeof part === "string") {
          const isPastTense =
            ([
              "kweʔ",
              "hkweʔ",
              "hné·",
              "hneʔ",
              "kwe̲",
              "kwe̲ʔ",
              "hkwe̲",
              "hkwe̲ʔ",
            ].includes(part) &&
              isLastPart) ||
            (["tshi", "tshaʔ"].includes(part) && i === 0);
          return (
            <InnerText
              {...innerTextProps}
              key={i}
              type={isPastTense ? "PAST" : undefined}
            >
              {whispered ? whisperizeWord(part) : part}
            </InnerText>
          );
        }

        const text = Array.isArray(part) ? part[0] : part.text;
        const type = Array.isArray(part) ? part[1] : part.type;

        const hasLeadingWhitespace = text.trimStart() !== text;
        const hasTrailingWhitespace = text.trimStart() !== text;
        return (
          <InnerText {...innerTextProps} key={i} type={type ?? typeFallback}>
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
  JOIN: "text-yellow-400",
  NOUN: "text-orange-500",
  OP: "underline decoration-wavy decoration-black",
  PAST: "text-emerald-400",
  PB: "text-blue-600",
  PFV: "text-emerald-400",
  PLB: "text-cyan-400",
  PP: "text-violet-700",
  PR: "text-red-600",
  PREP: "text-lime-500",
  PTV: "text-lime-500",
  RECP: "text-green-700",
  REFL: "text-green-700",
  REP: "text-yellow-600",
  RPL: "text-gray-400",
  SRFL: "text-green-700",
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
          : suffix === "hake"
            ? "hakeʔ"
            : suffix === "heke"
              ? "hekeʔ"
              : suffix === "hak"
                ? "hakʔ"
                : suffix === "ake"
                  ? "akeʔ"
                  : suffix === "áke"
                    ? "ákeʔ"
                    : suffix;

  if (!text) {
    return [];
  }
  return [{ text, type: "PAST" }] as const;
}

function getPrefixArr(prefix: BreakdownType | undefined): BreakdownArray {
  if (!prefix) {
    return [];
  } else if (prefix === "RECP") {
    return [{ text: "te", type: "RECP" }];
  } else if (prefix === "FUT") {
    return [{ text: "ʌ", type: "FUT" }];
  } else if (prefix === "IFUT") {
    return [{ text: "a", type: "IFUT" }];
  } else {
    return [];
  }
}

export function convertBreakdownToPlainText(
  breakdown: BreakdownArray,
  options: {
    prefix?: BreakdownType;
    suffix?: TextBreakdownSuffix;
  } = {},
) {
  const breakdownDuplicate = getPrefixArr(options.prefix)
    .concat(breakdown)
    .concat(getSuffixArr(options.suffix));

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
