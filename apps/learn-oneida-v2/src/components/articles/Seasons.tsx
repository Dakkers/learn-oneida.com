"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading, SectionHeadingProps } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";

export const DATA_SEASONS = [
  { en: "Spring", translation: ["kukwi·té·", "kukwité·ne"], key: "spring" },
  { en: "Summer", translation: "kwaʔkʌnhé·ke", key: "summer" },
  { en: "Autumn", translation: "kanʌná·ke", key: "fall" },
  { en: "Winter", translation: "kohslá·ke", key: "winter" },
];

export function SeasonsArticle({ level = 1 }: ArticleProps) {
  const seasonsDuring = [
    { en: "During the spring", translation: "tsiʔ nikukwite·seʔ" },
    { en: "During the summer", translation: "tsiʔ niwaʔkʌ́nhes" },
    { en: "During the autumn", translation: "tshiʔtkanʌná·ke" },
    { en: "During the winter", translation: "tsiʔ niwakóhsles" },
  ];
  const otherPhrases = [
    { en: "Seasons", translation: ["wakanhaténiʔ", "wakʌnhaténiʔ"] },
    { en: "Last summer", translation: "tshikwaʔkʌ́nheʔ" },
    { en: "Each winter", translation: "yaʔtewakohsláke" },
    { en: "Last winter", translation: "tshikohslá·ke" },
    { en: "Wintertime", translation: "kohslaʔké·ne" },
  ];

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="seasons" level={level}>
        Seasons
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={DATA_SEASONS}
      />
      <SectionHeading
        id="seasons-during"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        During a season
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={seasonsDuring}
      />
      <SectionHeading
        id="seasons-other"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Other phrases
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={otherPhrases}
      />
    </Flex>
  );
}
