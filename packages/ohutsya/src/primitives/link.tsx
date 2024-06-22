import React from "react";

export interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export function Link({ children, href }: LinkProps) {
  return (
    <a className="text-blue-600 underline" href={href}>
      {children}
    </a>
  );
}
