import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/components/heading";
import { TableWrapper } from "@/design/components/tableWrapper";

export const DATA_DAYS_OF_WEEK = [
  { en: "Sunday", on: "Yautatokʌ́htu", key: "sun" },
  { en: "Monday", on: "Yautʌtá·u", key: "mon" },
  { en: "Tuesday", on: "Tekníhatut", key: "tue" },
  { en: "Wednesday", on: "Ahsʌ́hatut", key: "wed" },
  { en: "Thursday", on: "Kayelíhatut", key: "thu" },
  { en: "Friday", on: "Wískhatut", key: "fri" },
  { en: "Saturday", on: "Ʌtáktaʔ", key: "sat" },
];

export function DaysOfTheWeekResource({ level = 1 }) {
  const daysSpecific = [
    { en: "on Sunday", on: "Yautatokʌhtu·neʔ" },
    { en: "on Monday", on: "Yautʌtaʔú·neʔ" },
    { en: "on Tuesday", on: "Teknihatútneʔ" },
    { en: "on Wednesday", on: "Ahsʌhatútneʔ" },
    { en: "on Thursday", on: "Kayelihatútneʔ" },
    { en: "on Friday", on: "Wiskhatútneʔ" },
    { en: "on Saturday", on: "Ʌtaktáhneʔ" },
  ];
  const daysLast = [
    { en: "last Sunday", on: "tshawʌtatokʌ́htu" },
    { en: "last Friday", on: "tshiwískhatut" },
    { en: "last Saturday", on: "tshiwʌtáktaʔ" },
  ];
  const daysNext = [
    { en: "next Sunday", on: "yʌswʌtatokʌ́htu" },
    { en: "next Friday", on: "oyá· yʌswískhatut" },
    { en: "next Saturday", on: "oyá· yʌswʌtáktaʔ" },
  ];

  return (
    <Flex direction="column" gap={4}>
      <Heading id="days" level={level} variant="headlineL">
        Days of the week
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={DATA_DAYS_OF_WEEK}
      />

      <Heading id="days-on" level={level + 1} variant="headlineS">
        On a specific day
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysSpecific}
      />

      <Heading id="days-last" level={level + 1} variant="headlineS">
        Last...
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysLast}
      />

      <Heading id="days-next" level={level + 1} variant="headlineS">
        Next...
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysNext}
      />
    </Flex>
  );
}
