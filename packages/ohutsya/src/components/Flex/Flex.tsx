import {
  cn,
  type Responsive,
  responsiveClassName,
  type PaddingProps,
  usePadding,
} from "../../utils";

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

type Direction = "row" | "column";

export interface FlexProps extends PaddingProps {
  align?: AlignItems | Responsive<AlignItems>;
  as?: "div" | "span";
  children: React.ReactNode;
  direction?: Direction | Responsive<Direction>;
  gap?: Gap | Responsive<Gap>;
  height?: "fill";
  inline?: boolean;
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
  inline = false,
  justify,
  wrap = false,
  p,
  pb,
  pl,
  pr,
  pt,
  px,
  py,
}: FlexProps) {
  const padding = usePadding({ p, px, py, pl, pt, pr, pb });

  return (
    <Tag
      className={cn(
        "flex",
        responsiveClassName(align, "items-"),
        responsiveClassName(
          direction,
          (val) => `flex-${val === "column" ? "col" : "row"}`,
        ),
        responsiveClassName(gap, "gap-"),
        height === "fill" ? "h-full" : undefined,
        justify && justifyContentMap[justify],
        wrap && "flex-wrap",
        inline && "inline-flex",
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
