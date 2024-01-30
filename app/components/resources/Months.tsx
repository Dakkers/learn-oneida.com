import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/components/heading";
import { TableWrapper } from "@/design/components/tableWrapper";

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

export function MonthsResource({ level = 1 }) {
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
      <Heading id="months" level={level} variant="headlineL">
        Months
      </Heading>
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

      <Heading id="months-last" level={level + 1} variant="headlineS">
        Last month
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={monthsLast}
      />

      <Heading id="months-next" level={level + 1} variant="headlineS">
        Next month
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={monthsNext}
      />
    </Flex>
  );
}
