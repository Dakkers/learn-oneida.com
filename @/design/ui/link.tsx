import { Link as RemixLink } from "@remix-run/react";
import React from "react";

export interface LinkProps {
  children: React.ReactNode;
  href: string;
}

export function Link ({
  children,
  href,
}: LinkProps) {
  return (
    <RemixLink className="text-blue-600 underline" to={href}>
      {children}
    </RemixLink>
  )
}
