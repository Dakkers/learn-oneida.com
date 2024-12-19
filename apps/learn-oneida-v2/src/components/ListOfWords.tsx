import { Flex, List, PlayButton } from "@ukwehuwehneke/ohutsya";

export function ListOfWords({
  filepathBase,
  offset = 0,
  words,
}: {
  filepathBase: string;
  offset?: number;
  words: string[];
}) {
  return (
    <List>
      {words.map((w, i) => (
        <List.Item key={i}>
          <Flex gap={2}>
            {w}{" "}
            <PlayButton filepath={`/audio${filepathBase}/${i + offset}.mp3`} />
          </Flex>
        </List.Item>
      ))}
    </List>
  );
}
