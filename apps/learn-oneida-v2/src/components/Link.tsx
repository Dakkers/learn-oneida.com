import { forwardRef, ReactNode } from "react";

export const Link = forwardRef<HTMLAnchorElement, {
  children: ReactNode;
  href: string;
}>(
  function LinkWrapper({ children, ...props }, ref) {
    const Tag = props.href.startsWith("/") ? Link : "a";
    return (
      <Tag className="text-blue-600 underline" href={props.href} ref={ref}>
        {children}
      </Tag>
    );
  },
);
