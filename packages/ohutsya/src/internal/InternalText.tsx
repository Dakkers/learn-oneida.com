import type React from "react";
import type { Intent } from "../utils/types";
import { cn } from "../utils";

type Contrast = "high" | "mid" | "low";

type TypographyToken =
  | "bodyL"
  | "bodyM"
  | "bodyS"
  | "headlineL"
  | "headlineM"
  | "headlineS"
  | "footnote"
  | "labelL"
  | "labelM"
  | "labelS"
  | "titleL"
  | "titleM"
  | "titleS";

const typographyClasses = {
  bodyL: "text-xsBodyL md:text-mdBodyL",
  bodyM: "text-xsBodyM md:text-mdBodyM",
  bodyS: "text-xsBodyS md:text-mdBodyS",
  footnote: "text-xsFootnote md:text-mdFootnote",
  headlineL: "text-xsHeadlineL md:text-mdHeadlineL",
  headlineM: "text-xsHeadlineM md:text-mdHeadlineM",
  headlineS: "text-xsHeadlineS md:text-mdHeadlineS",
  labelL: "text-xsLabelL md:text-mdLabelL",
  labelM: "text-xsLabelM md:text-mdLabelM",
  labelS: "text-xsLabelS md:text-mdLabelS",
  titleL: "text-xsTitleL md:text-mdTitleL",
  titleM: "text-xsTitleM md:text-mdTitleM",
  titleS: "text-xsTitleS md:text-mdTitleS",
} as const;

const alignMap = {
  start: "text-start",
  center: "text-center",
  end: "text-end",
} as const;

export interface InternalTextProps {
  align?: "start" | "center" | "end";
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  contrast?: Contrast;
  id?: string;
  intent?: Intent;
  variant?: TypographyToken;
}

export function InternalText({
  align,
  as: Tag = "div",
  children,
  contrast = "high",
  id,
  intent = "secondary",
  variant = "bodyM",
}: InternalTextProps) {
  return (
    <Tag
      className={typographyClasses[variant]
        .concat(" ")
        .concat(cn(textColorMap[contrast][intent], align && alignMap[align]))}
      id={id}
    >
      {children}
    </Tag>
  );
}

const textColorMap: Record<Contrast, Record<Intent, string>> = {
  high: {
    magic: "text-violet-700",
    negative: "text-red-700",
    positive: "text-green-700",
    primary: "text-blue-700",
    secondary: "text-gray-800",
    warning: "text-amber-700",
  },
  mid: {
    magic: "text-violet-500",
    negative: "text-red-500",
    positive: "text-green-500",
    primary: "text-blue-500",
    secondary: "text-gray-500",
    warning: "text-amber-500",
  },
  low: {
    magic: "text-violet-300",
    negative: "text-red-300",
    positive: "text-green-300",
    primary: "text-blue-300",
    secondary: "text-gray-300",
    warning: "text-amber-300",
  },
} as const;
