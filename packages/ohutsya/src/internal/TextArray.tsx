import React from "react";
import { Text, TextProps } from "../components/Text/Text";

export interface TextArrayProps extends TextProps {
  bold?: boolean;
}

export function TextArray({
  bold,
  children,
  ...props
}: TextArrayProps) {
  const WrapperTag = bold ? "b" : React.Fragment;
  if (!Array.isArray(children)) {
    return (
      <Text {...props}>
        <WrapperTag>{children}</WrapperTag>
      </Text>
    );
  }
  return children.map((child, i) => (
    <Text {...props} key={i}>
      <WrapperTag>{child}</WrapperTag>
    </Text>
  ));
}
