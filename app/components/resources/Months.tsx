import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/primitives/heading";
import { TableWrapper } from "@/design/primitives/tableWrapper";

export function MonthsResource({ level = 1 }) {
  const months = [
    {
      en: "January",
      on: "Teyakohúhtyaʔks",
      translation: "Their ears are freezing",
    },
    { en: "February", on: "Tshaʔtekohsélhaʔ", translation: "Half of winter" },
    { en: "March", on: "Tewʌhníslyaʔks", translation: "The day is cut in two" },
    { en: "April", on: "Wahsakayu·té·seʔ", translation: "It's thundering" },
    { en: "May", on: "Latiyʌ́thos", translation: "They plant" },
    { en: "June", on: "Awʌhihteʔ", translation: " Strawberry" },
    { en: "July", on: "Ohyótsheliʔ", translation: "Green string bean" },
    { en: "August", on: "Onʌ́staseʔ", translation: "New corn" },
    { en: "September", on: "Yeyʌthókwas", translation: "Someone harvests" },
    { en: "October", on: "Yutékhwayʌheʔ", translation: "Someone stores food" },
    {
      en: "November",
      on: "Tehutʌnuhela·túheʔ",
      translation: "They give thanks",
    },
    { en: "December", on: "Wahsu·tés", translation: "It's a long night" },
  ];
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
        Seasons
      </Heading>
      <TableWrapper
        columns={[
          ...TableWrapper.columnsEnglishOneida,
          {
            accessorKey: "translation",
            header: "Literal translation",
          },
        ]}
        data={months}
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
