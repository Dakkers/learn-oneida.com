import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Text } from "@/design/components/text";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import { SectionHeading } from "../SectionHeading";
import { ArticleProps } from "./utils";

const dataCountingWeight = [
  {
    en: "one pound",
    breakdown: ["s", ["ka"], "kú·tslat"],
  },
  {
    en: "two pounds",
    breakdown: [["te", "DUAL"], ["ka"], "kú·tslakeʔ"],
  },
  {
    en: "ten pounds",
    breakdown: ["oyelí ni", ["ka"], "kú·tslakeʔ"],
  },
];

const dataCountingFeet = [
  {
    en: "one foot",
    breakdown: ["s", ["w"], "ahsi·tat"],
  },
  {
    en: "two feet",
    breakdown: [["te", "DUAL"], ["w"], "ahsi·takeʔ"],
  },
  {
    en: "three feet",
    breakdown: ["áhsʌ ni", ["w"], "ahsi·takeʔ"],
  },
];

const dataCountingInches = [
  {
    en: "one inch",
    breakdown: ["s", ["ka"], "wyʌ́kalat"],
  },
  {
    en: "two inches",
    breakdown: [["te", "DUAL"], ["ka"], "wyʌ́kalakeʔ"],
  },
  {
    en: "three inches",
    breakdown: ["áhsʌ ni", ["ka"], "wyʌ́kalakeʔ"],
  },
];

const dataExamples = [
  ["How much do you weigh?", "Tó· nisayaʔtákste"],
  ["I weigh 200 pounds.", "Tékni tewʌʔnyáwelu nikakú·tslake niwakyaʔtáksteʔ"],
  [
    "I used to weigh 200 pounds.",
    "Tékni tewʌʔnyáwelu nikakú·tslakeʔ niwakyaʔtákstehkwe̲ʔ",
  ],
  [
    "Who weighs more? You or John?",
    ["Úhkaʔ náhteʔ sʌ́haʔ yakoyaʔtáksteʔ", "Isé· kʌ́ katʌ́ Sawátis"],
  ],
  [
    "She is 10 pounds heavier than me.",
    "Oyelí nikakú·tslake sʌ́haʔ niyakoyaʔtáksteʔ tsiʔ ni·yót niʔí·",
  ],
  [
    "She is 10 pounds lighter than me.",
    "Oyelí nikakú·tslakeʔ sʌ́ha yáh teyakoyaʔtáksteʔ tsiʔ ni·yót niʔí·",
  ],
  [
    "I don't want to be one pound heavier.",
    "Yáh te·kélheʔ skakú·tslat sʌ́haʔ aukyaʔtáksteke̲ʔ",
  ],
  [
    "I want to lose 20 pounds.",
    "I·kélheʔ tewáshʌ nikakú·tslakeʔ a·ukkuʔtslu·tí̲·",
  ],
  [
    "My son weighted 9 pounds when he was born.",
    "Wá·tlu nikakú·tslakeʔ nihoyaʔtáksteʔ liyʌ́ha tshahanáklate̲ʔ",
  ],
  ["How tall are you?", "Tó· nihsnʌyés"],
  [
    "Are you 2 inches taller than me?",
    "Tekawyʌ́kalakeʔ kʌ́ sʌ́haʔ snʌyés tsiʔ ni·yót ni·í·",
  ],
  [
    "She was 5 feet, 10 inches tall when she was 12 yeas old.",
    "Wisk niwahsitakeʔ, oyeli nikawyʌ́kalakeʔ niyenʌyesu·ne tekni yawʌle tshaʔteyakaosliyaku",
  ],
];

export function HeightWeightArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="height-weight" level={level}>
        Height and Weight
      </SectionHeading>
      <Text>
        Below demonstrates how to count height and weight, and some examples.
      </Text>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={dataCountingFeet}
      />
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={dataCountingInches}
      />
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={dataCountingWeight}
      />
      <Text>Examples:</Text>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={dataExamples.map(TableWrapper.mapEnglishOneida)}
      />
    </Flex>
  );
}
