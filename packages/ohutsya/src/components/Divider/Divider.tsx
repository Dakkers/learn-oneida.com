import { Separator } from "../../primitives/separator";

export interface DividerProps {
  decorative?: boolean;
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  orientation = "horizontal",
  decorative = true,
}: DividerProps) {
  return <Separator decorative={decorative} orientation={orientation} />;
}
