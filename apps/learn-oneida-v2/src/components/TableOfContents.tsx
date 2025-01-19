"use client";
import { Link, List } from "@ukwehuwehneke/ohutsya";
import type React from "react";

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
  level?: 0 | 1 | 2;
}

TableOfContents.Section = function TableOfContentsSection({
  children,
  level = 0,
}: TableOfContentsSectionProps) {
  return <List level={level}>{children}</List>;
};

TableOfContentsItem.Phrase = function TocItemPhrase({
  label,
  word,
  value,
}: {
  label: string;
  word: string;
  value: string;
}) {
  return (
    <TableOfContentsItem
      label={
        <>
          <b>{word}</b> — {label}
        </>
      }
      value={value}
    />
  );
};
