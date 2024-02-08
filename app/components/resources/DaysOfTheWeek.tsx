import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { SectionHeading } from "../SectionHeading";

export const DATA_DAYS_OF_WEEK = [
  { en: "Sunday", on: "Yautatokʌ́htu", key: "sun" },
  { en: "Monday", on: "Yautʌtá·u", key: "mon" },
  { en: "Tuesday", on: "Tekníhatut", key: "tue" },
  { en: "Wednesday", on: "Ahsʌ́hatut", key: "wed" },
  { en: "Thursday", on: "Kayelíhatut", key: "thu" },
  { en: "Friday", on: "Wískhatut", key: "fri" },
  { en: "Saturday", on: "Ʌtáktaʔ", key: "sat" },
];

export function DaysOfTheWeekResource({ level = 1 }: { level?: 1 | 2 }) {
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
      <SectionHeading id="days-of-week" level={level}>
        Days of the week
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={DATA_DAYS_OF_WEEK}
      />

      <SectionHeading id="days-on" level={level + 1}>
        On a specific day
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysSpecific}
      />

      <SectionHeading id="days-last" level={level + 1}>
        Last...
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysLast}
      />

      <SectionHeading id="days-next" level={level + 1}>
        Next...
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysNext}
      />
    </Flex>
  );
}
