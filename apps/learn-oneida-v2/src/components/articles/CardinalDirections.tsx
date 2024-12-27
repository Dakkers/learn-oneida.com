"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";

export const DATA_CARDINAL_DIRECTIONS = [
  { en: "In the North", translation: "otholé·ke", key: "north" },
  { en: "In the East", translation: "tsiʔ tkaké·tohse̲ʔ", key: "east" },
  { en: "In the South", translation: ["ʌ́tyʌ", "ʌtí nukwá·"], key: "south" },
  { en: "In the West", translation: "tsiʔ tetwatshʌ́thos", key: "west" },
];

export function CardinalDirectionsArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="cardinal-directions" level={level}>
        Cardinal Directions
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={DATA_CARDINAL_DIRECTIONS}
      />
    </Flex>
  );
}
