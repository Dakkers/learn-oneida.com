import { cn } from "@/design/library/utils";
import { Text } from "./text";

export function List({
  children,
  ordered = false,
}: {
  children: React.ReactNode;
  ordered?: boolean;
}) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={cn("list-outside", ordered ? "list-decimal" : "list-disc")}>
      {children}
    </Tag>
  );
}

List.Item = function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="ml-6">
      <Text>{children}</Text>
    </li>
  );
};
