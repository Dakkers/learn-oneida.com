import { InternalText, InternalTextProps } from "../../internal/InternalText";

export interface TextProps
  extends Pick<
    InternalTextProps,
    "children" | "contrast" | "id" | "intent" | "variant"
  > {
  as?: "span" | "div" | "p";
}

export function Text({
  as: Tag = "div",
  children,
  contrast = "high",
  id,
  intent = "secondary",
  variant = "bodyM",
}: TextProps) {
  return (
    <InternalText
      as={Tag}
      contrast={contrast}
      id={id}
      intent={intent}
      variant={variant}
    >
      {children}
    </InternalText>
  );
}
