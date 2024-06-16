import React from "react";
import { InternalText, InternalTextProps } from "../internal/internalText";

export interface HeadingProps
  extends Pick<
    InternalTextProps,
    "align" | "children" | "contrast" | "id" | "intent" | "variant"
  > {
  level: 1 | 2 | 3 | 4 | 5;
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
