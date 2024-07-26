"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  SectionHeading,
  SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
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
    translation: "Tshaʔtekohsélha̲ʔ",
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
    translation: "Wahsakayu·té·se̲ʔ",
    literal: "It's thundering",
    key: "apr",
  },
  { en: "May", translation: "Latiyʌ́thos", literal: "They plant", key: "may" },
  { en: "June", translation: "Awʌhihte̲ʔ", literal: "Strawberry", key: "jun" },
  {
    en: "July",
    translation: "Ohyótsheli̲ʔ",
    literal: "Green string bean",
    key: "jul",
  },
  { en: "August", translation: "Onʌ́stase̲ʔ", literal: "New corn", key: "aug" },
  {
    en: "September",
    translation: "Yeyʌthókwas",
    literal: "Someone harvests",
    key: "sep",
  },
  {
    en: "October",
    translation: "Yutékhwayʌhe̲ʔ",
    literal: "Someone stores food",
    key: "oct",
  },
  {
    en: "November",
    translation: "Tehutʌnuhela·túhe̲ʔ",
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
    { en: "next January", translation: "Tʌyakohúhtyaʔks" },
    { en: "next February", translation: "Tshaʔtʌkohsélhaʔ" },
  ];
  const monthsLast = [
    { en: "last January", translation: "Tshaʔteyakohúhtyaʔkskʌ́" },
    { en: "last February", translation: "Tshaʔtekohselhaʔkʌ́" },
  ];

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="months" level={level}>
        Months
      </SectionHeading>
      <TableWrapper
        columns={[
          ...TableWrapper.columnsEnglishAudio,
          {
            accessorKey: "literal",
            header: "Literal translation",
          },
        ]}
        data={DATA_MONTHS.map((m) => ({
          ...m,
          audioFile: `module04/months/${m.en.toLowerCase()}.mp3`,
        }))}
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
