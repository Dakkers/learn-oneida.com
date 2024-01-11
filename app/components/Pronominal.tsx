import { Text } from "@/design/ui/text";

export type PronominalColor =
  | "red"
  | "purple"
  | "blue"
  | "lightblue"
  | "r"
  | "b"
  | "p"
  | "lb";

export function Pronominal({
  color,
  children,
}: {
  color: PronominalColor;
  children: React.ReactNode;
}) {
  const intent = ["red", "r"].includes(color)
    ? "negative"
    : ["blue", "b"].includes(color)
    ? "primary"
    : ["purple", "p"].includes(color)
    ? "magic"
    : "secondary";

  return (
    <Text as="span" contrast="mid" intent={intent}>
      <strong>{children}</strong>
    </Text>
  );
}
