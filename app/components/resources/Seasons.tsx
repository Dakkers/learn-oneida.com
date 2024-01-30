import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/components/heading";
import { TableWrapper } from "@/design/components/tableWrapper";

export const DATA_SEASONS = [
  { en: "Spring", on: ["kukwi·té·", "kukwité·ne"], key: "spring" },
  { en: "Summer", on: "kwaʔkʌnhé·ke", key: "summer" },
  { en: "Autumn", on: "kanʌná·ke", key: "fall" },
  { en: "Winter", on: "kohslá·ke", key: "winter" },
];

export function SeasonsResource({ level = 1 }) {
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
      <Heading id="seasons" level={level} variant="headlineL">
        Seasons
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={DATA_SEASONS}
      />
      <Heading id="seasons-during" level={level + 1} variant="headlineS">
        During a season
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={seasonsDuring}
      />
      <Heading id="seasons-other" level={level + 1} variant="headlineS">
        Other phrases
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={otherPhrases}
      />
    </Flex>
  );
}
