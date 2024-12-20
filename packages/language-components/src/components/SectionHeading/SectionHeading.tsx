// @ts-expect-error TODO
import { Heading, HeadingProps } from "@ukwehuwehneke/ohutsya";

export interface SectionHeadingProps
  extends Partial<Pick<HeadingProps, "align" | "children" | "id" | "intent">> {
  level: 1 | 2 | 3 | 4;
}

export function SectionHeading({
  align,
  children,
  id,
  level,
}: SectionHeadingProps) {
  const variantMap = {
    1: "headlineL",
    2: "headlineS",
    3: "titleM",
    4: "titleS",
  } as const;

  return (
    <Heading align={align} id={id} level={level} variant={variantMap[level]}>
      {children}
    </Heading>
  );
}
