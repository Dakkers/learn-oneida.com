import { Text, TextProps } from "@/design/ui/text";

export function TextArray({ children, ...props }: TextProps) {
  if (!Array.isArray(children)) {
    return <Text {...props}>{children}</Text>;
  }
  return children.map((child, i) => (
    <Text {...props} key={i}>
      {child}
    </Text>
  ));
}
