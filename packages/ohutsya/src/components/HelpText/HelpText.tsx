import { InternalText } from "../../internal/InternalText";
import { type Intent } from "../../utils";

export interface HelpTextProps {
  children: React.ReactNode;
  intent?: Intent;
}

export function HelpText({
  children,
  intent = "secondary",
}: HelpTextProps) {
  return <InternalText intent={intent}>{children}</InternalText>;
}
