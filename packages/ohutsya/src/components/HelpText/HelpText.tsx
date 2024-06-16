import { InternalText } from "../../internal/InternalText";
import { type Intent } from "../../utils";

export function HelpText({
  children,
  intent = "secondary",
}: {
  children: React.ReactNode;
  intent?: Intent;
}) {
  return <InternalText intent={intent}>{children}</InternalText>;
}
