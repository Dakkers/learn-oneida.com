import {
  createContext,
  type ElementType,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  useContext,
} from "react";

export interface LinkCompatibleProps
  extends Exclude<HTMLAttributes<HTMLAnchorElement>, "target"> {
  children: ReactNode;
  href: string;
  onClick?: () => void;
}

export const DefaultLinkAs = forwardRef<HTMLAnchorElement, LinkCompatibleProps>(
  function DefaultLinkAs({ children, ...props }, ref) {
    return (
      <a {...props} ref={ref}>
        {children}
      </a>
    );
  },
);

export const LinkAsContext =
  createContext<ElementType<LinkCompatibleProps>>(DefaultLinkAs);

export function useLinkAs() {
  return useContext(LinkAsContext);
}
