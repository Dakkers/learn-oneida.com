import { standardizeAudioFileName } from "@/utils/misc";
import { Flex, PlayButton, Text, type TextProps } from "@ukwehuwehneke/ohutsya";
import type { ReactNode } from "react";

export interface TextWithAudioProps {
  children: ReactNode;
  filepath?: string;
  inline?: boolean;
  variant?: TextProps["variant"];
}

export function TextWithAudio({
  children,
  filepath,
  inline = false,
  variant,
}: TextWithAudioProps) {
  return (
    <Flex gap={2} inline={inline}>
      {filepath && <PlayButton filepath={standardizeAudioFileName(filepath)} />}
      <Text variant={variant}>{children}</Text>
    </Flex>
  );
}
