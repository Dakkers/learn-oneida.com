"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "../SectionHeading";
import { ArticleProps } from "./utils";

export const DATA_CARDINAL_DIRECTIONS = [
  { en: "In the North", on: "otholé·ke", key: "north" },
  { en: "In the East", on: "tsiʔ tkaké·tohse̲ʔ", key: "east" },
  { en: "In the South", on: ["ʌ́tyʌ", "ʌtí nukwá·"], key: "south" },
  { en: "In the West", on: "tsiʔ tetwatshʌ́thos", key: "west" },
];

export function CardinalDirectionsArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="cardinal-directions" level={level}>
        Cardinal Directions
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={DATA_CARDINAL_DIRECTIONS}
      />
    </Flex>
  );
}
