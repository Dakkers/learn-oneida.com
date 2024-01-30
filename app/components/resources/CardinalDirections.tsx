import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/components/heading";
import { TableWrapper } from "@/design/components/tableWrapper";

export const DATA_CARDINAL_DIRECTIONS = [
  { en: "In the North", on: "otholé·ke", key: "north" },
  { en: "In the East", on: "tsiʔ tkaké·tohse̲ʔ", key: "east" },
  { en: "In the South", on: ["ʌ́tyʌ", "ʌtí nukwá·"], key: "south" },
  { en: "In the West", on: "tsiʔ tetwatshʌ́thos", key: "west" },
];

export function CardinalDirectionsResource({ level = 1 }) {
  return (
    <Flex direction="column" gap={4}>
      <Heading id="cardinal-directions" level={level} variant="headlineL">
        Cardinal Directions
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={DATA_CARDINAL_DIRECTIONS}
      />
    </Flex>
  );
}
