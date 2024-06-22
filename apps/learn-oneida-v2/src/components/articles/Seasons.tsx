"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading, SectionHeadingProps } from "../SectionHeading";
import { ArticleProps } from "./utils";

export const DATA_SEASONS = [
  { en: "Spring", on: ["kukwi·té·", "kukwité·ne"], key: "spring" },
  { en: "Summer", on: "kwaʔkʌnhé·ke", key: "summer" },
  { en: "Autumn", on: "kanʌná·ke", key: "fall" },
  { en: "Winter", on: "kohslá·ke", key: "winter" },
];

export function SeasonsArticle({ level = 1 }: ArticleProps) {
  const seasonsDuring = [
    { en: "During the spring", on: "tsiʔ nikukwite·seʔ" },
    { en: "During the summer", on: "tsiʔ niwaʔkʌ́nhes" },
    { en: "During the autumn", on: "tshiʔtkanʌná·ke" },
    { en: "During the winter", on: "tsiʔ niwakóhsles" },
  ];
  const otherPhrases = [
    { en: "Seasons", on: ["wakanhaténiʔ", "wakʌnhaténiʔ"] },
    { en: "Last summer", on: "tshikwaʔkʌ́nheʔ" },
    { en: "Each winter", on: "yaʔtewakohsláke" },
    { en: "Last winter", on: "tshikohslá·ke" },
    { en: "Wintertime", on: "kohslaʔké·ne" },
  ];

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="seasons" level={level}>
        Seasons
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={DATA_SEASONS}
      />
      <SectionHeading
        id="seasons-during"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        During a season
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={seasonsDuring}
      />
      <SectionHeading
        id="seasons-other"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Other phrases
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={otherPhrases}
      />
    </Flex>
  );
}
