import { cn } from "@/lib/utils";

export function List ({
  children,
  ordered = false
}) {
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag className={cn(
      'list-outside',
      ordered ? 'list-decimal' : 'list-disc'
    )}>
      {children}
    </Tag>
  )
}

List.Item = function ListItem ({ children }) {
  return (
    <li className="ml-6">{children}</li>
  )
}
