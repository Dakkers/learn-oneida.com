import { InternalText } from "../internal/internalText";
import { Intent } from "../primitives/types";
import { Text } from "./text";

export function HelpText({
  children,
  intent = "secondary",
}: {
  children: React.ReactNode;
  intent?: Intent;
}) {
  return <InternalText intent={intent}>{children}</InternalText>;
}
