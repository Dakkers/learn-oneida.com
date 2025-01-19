import { cn } from "../../utils";
import { Text } from "../Text";

export interface ListProps {
  children: React.ReactNode;
  level?: 0 | 1 | 2;
  ordered?: boolean;
}

export function List({ children, level = 0, ordered = false }: ListProps) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag
      className={cn(
        "list-outside",
        ordered ? "list-decimal" : "list-disc",
        `ml-${level * 6}`,
      )}
    >
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
