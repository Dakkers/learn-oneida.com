import NextLink from "next/link";
import React from "react";

export interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export function Link({ children, href }: LinkProps) {
  return (
    <NextLink className="text-blue-600 underline" href={href}>
      {children}
    </NextLink>
  );
}
