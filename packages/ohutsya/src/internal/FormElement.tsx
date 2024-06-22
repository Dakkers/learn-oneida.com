import { Flex } from "../components/Flex";
import { HelpText } from "../components/HelpText";
import { Text } from "../components/Text";

export function FormElement({
  children,
  helpText,
  invalid,
  label,
}: {
  children: React.ReactNode;
  helpText?: string;
  invalid?: boolean;
  label?: string;
  required?: boolean;
}) {
  return (
    <Flex direction="column" gap={2}>
      {label && <Text variant="labelL">{label}</Text>}

      {children}

      {!!helpText && (
        <HelpText intent={invalid ? "negative" : "secondary"}>
          {helpText}
        </HelpText>
      )}
    </Flex>
  );
}
