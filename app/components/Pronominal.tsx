import { Text, TextProps } from "@/design/components/text";
import { cn } from "@/lib/utils";

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
  color?: PronominalColor;
  children: React.ReactNode;
}) {
  const textColorClass = ["red", "r"].includes(color ?? "")
    ? "text-red-500"
    : ["blue", "b"].includes(color ?? "")
      ? "text-blue-700"
      : ["purple", "p"].includes(color ?? "")
        ? "text-violet-700"
        : ["lightblue", "lb"].includes(color ?? "")
          ? "text-cyan-400"
          : "text-gray-700";

  return <span className={cn(textColorClass, "font-bold")}>{children}</span>;
}
