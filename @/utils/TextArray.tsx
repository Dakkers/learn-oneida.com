import React from "react";
import { Text, TextProps } from "../design/components/text";

export function TextArray({ bold, children, ...props }: TextProps & {
  bold?: boolean
}) {
  const WrapperTag = bold ? 'b' : React.Fragment;
  if (!Array.isArray(children)) {
    return <Text {...props}><WrapperTag>{children}</WrapperTag></Text>;
  }
  return children.map((child, i) => (
    <Text {...props} key={i}>
      <WrapperTag>{child}</WrapperTag>
    </Text>
  ));
}
