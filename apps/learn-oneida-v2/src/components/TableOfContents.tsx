"use client";
import { List } from "@ukwehuwehneke/ohutsya";
import type React from "react";
import { Link } from "./Link";

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

export function TableOfContentsItem({
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

export function TableOfContentsSection({
  children,
}: TableOfContentsSectionProps) {
  return <List>{children}</List>;
}

TableOfContents.Section = TableOfContentsSection;

export function TableOfContentsItemPhrase({
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
}

TableOfContentsItem.Phrase = TableOfContentsItemPhrase;
