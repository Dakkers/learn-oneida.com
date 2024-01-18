import { Link } from "@/design/ui/link";
import { List } from "@/design/ui/list";
import React from "react";

interface TableOfContentsProps {
  children: React.ReactNode;
}

export function TableOfContents({ children }: TableOfContentsProps) {
  return <List>{children}</List>;
}

interface TableOfContentsItemProps {
  children?: React.ReactNode;
  label: React.ReactNode;
  value: React.ReactNode;
}

function TableOfContentsItem({
  children,
  label,
  value,
}: TableOfContentsItemProps) {
  return (
    <List.Item>
      <Link href={`#${value}`}>{label}</Link>
      {children}
    </List.Item>
  );
}

TableOfContents.Item = TableOfContentsItem;

interface TableOfContentsSectionProps {
  children: React.ReactNode;
}

TableOfContents.Section = function TableOfContentsSection({
  children,
}: TableOfContentsSectionProps) {
  return <List>{children}</List>;
};

TableOfContentsItem.Phrase = function TocItemPhrase({ label, word, value }) {
  return (
    <TableOfContentsItem
      label={
        <>
          <i>{word}</i>: {label}
        </>
      }
      value={value}
    />
  );
};
