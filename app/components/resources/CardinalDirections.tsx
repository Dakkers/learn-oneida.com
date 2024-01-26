import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/primitives/heading";
import { TableWrapper } from "@/design/primitives/tableWrapper";

export function CardinalDirectionsResource({ level = 1 }) {
  const directions = [
    { en: "In the North", on: "otholé·ke" },
    { en: "In the East", on: "tsiʔ tkaké·tohse̲ʔ" },
    { en: "In the South", on: ["ʌ́tyʌ", "ʌtí nukwá·"] },
    { en: "In the West", on: "tsiʔ tetwatshʌ́thos" },
  ];
  return (
    <Flex direction="column" gap={4}>
      <Heading id="cardinal-directions" level={level} variant="headlineL">
        Cardinal Directions
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={directions}
      />
    </Flex>
  );
}
