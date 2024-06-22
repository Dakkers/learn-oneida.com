import * as React from "react";

import { cn } from "../../utils/tailwind";

export interface CardProps {
  as?: "section" | "article";

  children: React.ReactNode;
}

export function Card({ as: Tag = "article", children }: CardProps) {
  return (
    <Tag
      className={cn("rounded-lg border bg-card text-card-foreground shadow-sm")}
    >
      <div className={cn("p-6")}>{children}</div>
    </Tag>
  );
}

export interface CardFooterProps {
  children: React.ReactNode;
}

Card.Footer = function CardFooter({ children }: CardFooterProps) {
  return <footer>{children}</footer>;
};
