import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading, SectionHeadingProps } from "../SectionHeading";
import { ArticleProps } from "./utils";

export const DATA_MONTHS = [
  {
    en: "January",
    on: "Teyakohúhtyaʔks",
    translation: "Their ears are freezing",
    key: "jan",
  },
  {
    en: "February",
    on: "Tshaʔtekohsélhaʔ",
    translation: "Half of winter",
    key: "feb",
  },
  {
    en: "March",
    on: "Tewʌhníslyaʔks",
    translation: "The day is cut in two",
    key: "mar",
  },
  {
    en: "April",
    on: "Wahsakayu·té·seʔ",
    translation: "It's thundering",
    key: "apr",
  },
  { en: "May", on: "Latiyʌ́thos", translation: "They plant", key: "may" },
  { en: "June", on: "Awʌhihteʔ", translation: " Strawberry", key: "jun" },
  {
    en: "July",
    on: "Ohyótsheliʔ",
    translation: "Green string bean",
    key: "jul",
  },
  { en: "August", on: "Onʌ́staseʔ", translation: "New corn", key: "aug" },
  {
    en: "September",
    on: "Yeyʌthókwas",
    translation: "Someone harvests",
    key: "sep",
  },
  {
    en: "October",
    on: "Yutékhwayʌheʔ",
    translation: "Someone stores food",
    key: "oct",
  },
  {
    en: "November",
    on: "Tehutʌnuhela·túheʔ",
    translation: "They give thanks",
    key: "nov",
  },
  {
    en: "December",
    on: "Wahsu·tés",
    translation: "It's a long night",
    key: "dec",
  },
];

export function MonthsArticle({ level = 1 }: ArticleProps) {
  const monthsNext = [
    { en: "next January", on: "Tʌyakohúhtyaʔks" },
    { en: "next February", on: "Tshaʔtʌkohsélhaʔ" },
  ];
  const monthsLast = [
    { en: "last January", on: "Tshaʔteyakohúhtyaʔkskʌ́" },
    { en: "last February", on: "Tshaʔtekohselhaʔkʌ́" },
  ];

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="months" level={level}>
        Months
      </SectionHeading>
      <TableWrapper
        columns={[
          ...TableWrapper.columnsEnglishOneida,
          {
            accessorKey: "translation",
            header: "Literal translation",
          },
        ]}
        data={DATA_MONTHS}
      />

      <SectionHeading
        id="months-last"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Last month
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={monthsLast}
      />

      <SectionHeading
        id="months-next"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Next month
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={monthsNext}
      />
    </Flex>
  );
}
