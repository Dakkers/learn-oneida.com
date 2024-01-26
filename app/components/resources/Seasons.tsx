import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/primitives/heading";
import { TableWrapper } from "@/design/primitives/tableWrapper";

export function SeasonsResource({ level = 1 }) {
  const seasons = [
    { en: "Spring", on: ["kukwi·té·", "kukwité·ne"] },
    { en: "Summer", on: "kwaʔkʌnhé·ke" },
    { en: "Fall / Autumn", on: "kanʌná·ke" },
    { en: "Winter", on: "kohslá·ke" },
  ];
  const seasonsDuring = [
    { en: "During the spring", on: "tsiʔ nikukwite·seʔ" },
    { en: "During the summer", on: "tsiʔ niwaʔkʌ́nhes" },
    { en: "During the fall / autumn", on: "tshiʔtkanʌná·ke" },
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
        data={seasons}
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
