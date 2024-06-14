import { Heading, HeadingProps } from "@/design/components/heading";

export interface SectionHeadingProps
  extends Pick<HeadingProps, "align" | "children" | "id" | "intent"> {
  level: 1 | 2 | 3;
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
  } as const;

  return (
    <Heading align={align} id={id} level={level} variant={variantMap[level]}>
      {children}
    </Heading>
  );
}
