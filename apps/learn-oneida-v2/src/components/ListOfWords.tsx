import { standardizeAudioFileName } from "@/utils/misc";
import { Flex, List, PlayButton } from "@ukwehuwehneke/ohutsya";

export function ListOfWords({
  filepathBase,
  offset = 0,
  words,
}: {
  filepathBase?: string;
  offset?: number;
  words: string[] | Array<[string, string]>;
}) {
  return (
    <List>
      {words.map((w, i) => {
        const text = Array.isArray(w) ? w[0] : w;
        const filepath = Array.isArray(w)
          ? w[1]
          : filepathBase
            ? `/audio${filepathBase}/${i + offset}.mp3`
            : null;

        return (
          <List.Item key={i}>
            <Flex gap={2}>
              {text}{" "}
              {filepath && (
                <PlayButton filepath={standardizeAudioFileName(filepath)} />
              )}
            </Flex>
          </List.Item>
        );
      })}
    </List>
  );
}
