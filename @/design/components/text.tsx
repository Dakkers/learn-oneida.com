import React from "react";
import { InternalText, InternalTextProps } from "../internal/internalText";

export interface TextProps
  extends Pick<
    InternalTextProps,
    "children" | "contrast" | "intent" | "variant"
  > {
  as?: "span" | "div" | "p";
}

export function Text({
  as: Tag = "div",
  children,
  contrast = "high",
  intent = "secondary",
  variant = "bodyM",
}: TextProps) {
  return (
    <InternalText
      as={Tag}
      contrast={contrast}
      intent={intent}
      variant={variant}
    >
      {children}
    </InternalText>
  );
}
