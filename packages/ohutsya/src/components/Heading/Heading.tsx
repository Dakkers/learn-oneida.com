import {
  InternalText,
  type InternalTextProps,
} from "../../internal/InternalText";

export interface HeadingProps
  extends Pick<
    InternalTextProps,
    "align" | "children" | "contrast" | "id" | "intent" | "variant"
  > {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({
  align = "start",
  children,
  contrast = "high",
  id,
  intent = "secondary",
  level,
  variant = "bodyM",
}: HeadingProps) {
  return (
    <InternalText
      align={align}
      as={
        (
          {
            1: "h1",
            2: "h2",
            3: "h3",
            4: "h4",
            5: "h5",
            6: "h6",
          } as const
        )[level]
      }
      contrast={contrast}
      id={id}
      intent={intent}
      variant={variant}
    >
      {children}
    </InternalText>
  );
}
