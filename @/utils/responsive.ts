export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export type Responsive<T> = Partial<Record<Breakpoint, T>>;

function formatClassName<T>(
  value: T | Responsive<T>,
  resultThingy: string | ((val: typeof value) => string),
) {
  if (typeof resultThingy === "string") {
    return `${resultThingy}${value}`;
  }
  return resultThingy(value);
}

export function responsiveClassName<T>(
  value: T | Responsive<T>,
  resultThingy: string | ((val: typeof value) => string),
) {
  if (!value) {
    return "";
  }
  if (typeof value !== "object") {
    return formatClassName(value, resultThingy);
  }
  return (["xs", "sm", "md", "lg", "xl"] as Breakpoint[])
    .map((breakpoint) => {
      if (!(breakpoint in value)) {
        return null;
      }
      // @ts-expect-error IDK why this is complaining
      const attrVal = value[breakpoint];
      const prefix = breakpoint === "xs" ? "" : `${breakpoint}:`;

      return `${prefix}${formatClassName(attrVal, resultThingy)}`;
    })
    .filter(Boolean);
}
