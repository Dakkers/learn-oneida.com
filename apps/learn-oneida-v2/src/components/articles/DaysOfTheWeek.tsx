"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading, SectionHeadingProps } from "../SectionHeading";
import { ArticleProps } from "./utils";

export const DATA_DAYS_OF_WEEK = [
  { en: "Sunday", on: "Yautatokʌ́htu", key: "sun" },
  { en: "Monday", on: "Yautʌtá·u", key: "mon" },
  { en: "Tuesday", on: "Tekníhatut", key: "tue" },
  { en: "Wednesday", on: "Ahsʌ́hatut", key: "wed" },
  { en: "Thursday", on: "Kayelíhatut", key: "thu" },
  { en: "Friday", on: "Wískhatut", key: "fri" },
  { en: "Saturday", on: "Ʌtáktaʔ", key: "sat" },
];

export function DaysOfTheWeekArticle({ level = 1 }: ArticleProps) {
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
    { en: "last Monday", on: "tshawʌtʌ·táneʔ" },
    { en: "last Tuesday", on: "tshaʔtekníhatuht" },
    { en: "last Wednesday", on: "tshiwahsʌ́hatuht" },
    { en: "last Thursday", on: "tshikayelíhatuht" },
    { en: "last Friday", on: "tshiwískhatut" },
    { en: "last Saturday", on: "tshiwʌtáktaʔ" },
  ];
  const daysNext = [
    { en: "next Sunday", on: "yʌswʌtatokʌ́htu" },
    { en: "next Monday", on: "oyá· yʌswʌtʌ·táneʔ" },
    { en: "next Tuesday", on: "oyá· nyaʔteskníhatuht" },
    { en: "next Wednesday", on: "oyá· nyaʔteswahsʌ́hatuht" },
    { en: "next Thursday", on: "oyá· nyaʔteskayelíhatuht" },
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

      <SectionHeading
        id="days-on"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        On a specific day
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysSpecific}
      />

      <SectionHeading
        id="days-last"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Last...
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysLast}
      />

      <SectionHeading
        id="days-next"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Next...
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysNext}
      />
    </Flex>
  );
}
