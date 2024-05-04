import { cn } from "@/lib/utils";
import { PaddingProps, usePadding } from "@/utils/usePadding";

type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

type JustifyContent =
  | "around"
  | "between"
  | "center"
  | "end"
  | "evenly"
  | "start"
  | "stretch";

type AlignItems = "baseline" | "center" | "end" | "start" | "stretch";

interface FlexProps extends PaddingProps {
  align?: AlignItems;
  as?: "div" | "span";
  children: React.ReactNode;
  direction?: "row" | "column";
  gap?: Gap;
  height?: "fill";
  justify?: JustifyContent;
  wrap?: boolean;
}

export function Flex({
  align,
  as: Tag = "div",
  children,
  direction = "row",
  gap,
  height,
  justify,
  wrap = false,
  p,
  px,
  py,
  pl,
  pt,
  pr,
  pb,
}: FlexProps) {
  const padding = usePadding({ p, px, py, pl, pt, pr, pb });

  return (
    <Tag
      className={cn(
        "flex",
        align && alignItemsMap[align],
        direction === "column" ? "flex-col" : "flex-row",
        gap && gapMap.get(gap),
        height === "fill" ? "h-full" : undefined,
        justify && justifyContentMap[justify],
        wrap && "flex-wrap",
        padding,
      )}
    >
      {children}
    </Tag>
  );
}

interface FlexItemProps {
  as?: FlexProps["as"];
  children: React.ReactNode;
  grow?: 0 | 1;
}

Flex.Item = function FlexItem({
  as: Tag = "div",
  children,
  grow,
}: FlexItemProps) {
  return <Tag className={cn(grow && growMap.get(grow))}>{children}</Tag>;
};

const gapMap = new Map([
  [0, "gap-0"],
  [1, "gap-1"],
  [2, "gap-2"],
  [3, "gap-3"],
  [4, "gap-4"],
  [5, "gap-5"],
  [6, "gap-6"],
  [7, "gap-7"],
  [8, "gap-8"],
]);

const growMap = new Map([
  [0, "grow-0"],
  [1, "grow"],
]);

const justifyContentMap: Record<JustifyContent, string> = {
  around: "justify-around",
  between: "justify-between",
  center: "justify-center",
  end: "justify-end",
  evenly: "justify-evenly",
  start: "justify-start",
  stretch: "justify-stretch",
} as const;

const alignItemsMap: Record<AlignItems, string> = {
  baseline: "items-baseline",
  center: "items-center",
  end: "items-end",
  start: "items-start",
  stretch: "items-stretch",
} as const;
