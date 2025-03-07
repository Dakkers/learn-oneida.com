import { Flex, PlayButton, Text, type TextProps } from "@ukwehuwehneke/ohutsya";
import type { ReactNode } from "react";

export interface TextWithAudioProps {
  children: ReactNode;
  filepath?: string;
  variant?: TextProps["variant"];
}

export function TextWithAudio({
  children,
  filepath,
  variant,
}: TextWithAudioProps) {
  return (
    <Flex gap={2}>
      {filepath && <PlayButton filepath={filepath} />}
      <Text variant={variant}>{children}</Text>
    </Flex>
  );
}
