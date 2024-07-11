"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading, SectionHeadingProps } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";

export const DATA_MONTHS = [
  {
    en: "January",
    translation: "Teyakohúhtyaʔks",
    literal: "Their ears are freezing",
    key: "jan",
  },
  {
    en: "February",
    translation: "Tshaʔtekohsélhaʔ",
    literal: "Half of winter",
    key: "feb",
  },
  {
    en: "March",
    translation: "Tewʌhníslyaʔks",
    literal: "The day is cut in two",
    key: "mar",
  },
  {
    en: "April",
    translation: "Wahsakayu·té·seʔ",
    literal: "It's thundering",
    key: "apr",
  },
  { en: "May", translation: "Latiyʌ́thos", literal: "They plant", key: "may" },
  { en: "June", translation: "Awʌhihteʔ", literal: " Strawberry", key: "jun" },
  {
    en: "July",
    translation: "Ohyótsheliʔ",
    literal: "Green string bean",
    key: "jul",
  },
  { en: "August", translation: "Onʌ́staseʔ", literal: "New corn", key: "aug" },
  {
    en: "September",
    translation: "Yeyʌthókwas",
    literal: "Someone harvests",
    key: "sep",
  },
  {
    en: "October",
    translation: "Yutékhwayʌheʔ",
    literal: "Someone stores food",
    key: "oct",
  },
  {
    en: "November",
    translation: "Tehutʌnuhela·túheʔ",
    literal: "They give thanks",
    key: "nov",
  },
  {
    en: "December",
    translation: "Wahsu·tés",
    literal: "It's a long night",
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
          ...TableWrapper.columnsEnglishTranslation,
          {
            accessorKey: "literal",
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
        columns={TableWrapper.columnsEnglishTranslation}
        data={monthsLast}
      />

      <SectionHeading
        id="months-next"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Next month
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={monthsNext}
      />
    </Flex>
  );
}
