import { Flex, Text } from "@ukwehuwehneke/ohutsya";
import { TextWithAudio } from "../TextWithAudio";
import {
  BreakdownArray,
  convertBreakdownToPlainText,
  isWordWhispered,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import { formatFileWithSuffix } from "@/utils/misc";

export interface StandardEntryItem {
  audioFile?: string;
  en?: string;
  lit?: string;
  one: BreakdownArray | string;
}

export type StandardEntry = string | Array<string | StandardEntryItem>;

export interface StandardEntryDisplayProps {
  audioFile?: string;
  disableAudioMerge?: boolean;
  value: StandardEntry;
}

export function StandardEntryDisplay({
  audioFile,
  disableAudioMerge = false,
  value,
}: StandardEntryDisplayProps) {
  const getName = (val: string) =>
    !audioFile ? undefined : disableAudioMerge ? audioFile :  getAudioFileName(audioFile, val);

  return (
    <Flex direction="column" gap={4}>
      {typeof value === "string" ? (
        <TextWithAudio filepath={getName(value)}>
          <span className="font-medium">{value}</span>
        </TextWithAudio>
      ) : (
        value.map((item, index) => {
          if (typeof item === "string") {
            const filepath = audioFile
              ? formatFileWithSuffix(getName(item)!, value, index)
              : undefined;
            return (
              <TextWithAudio key={index} filepath={filepath}>
                <span className="font-medium">{item}</span>
              </TextWithAudio>
            );
          }

          const filepath =
            item.audioFile ??
            (audioFile
              ? formatFileWithSuffix(
                  getName(convertBreakdownToPlainText(item.one))!,
                  value,
                  index,
                )
              : undefined);

          return (
            <TextWithAudio filepath={filepath} key={index}>
              <Flex direction="column" gap={1} key={index}>
                {typeof item.one === "string" ? (
                  <Text>{item.one}</Text>
                ) : (
                  <TextBreakdown
                    breakdown={item.one}
                    typeFallback="PS"
                    wrap="nowrap"
                  />
                )}

                {item.en && <Text variant="bodyS">{item.en}</Text>}
                {item.lit && (
                  <Text variant="labelS">
                    lit. <i>{item.lit}</i>
                  </Text>
                )}
              </Flex>
            </TextWithAudio>
          );
        })
      )}
    </Flex>
  );
}

function getAudioFileName(audioFileBase: string, text: string) {
  const base = audioFileBase.replace(".mp3", "");
  if (isWordWhispered(text)) {
    return `${base}_merged.mp3`;
  } else {
    return `${base}.mp3`;
  }
}
