import { Heading, HeadingProps } from "@/design/components/heading";

export interface SectionHeadingProps
  extends Pick<HeadingProps, "children" | "id" | "intent"> {
  level: 1 | 2 | 3;
}

export function SectionHeading({ children, id, level }: SectionHeadingProps) {
  const variantMap = {
    1: "headlineL",
    2: "headlineS",
    3: "titleM",
  } as const;

  return (
    <Heading id={id} level={level} variant={variantMap[level]}>
      {children}
    </Heading>
  );
}
