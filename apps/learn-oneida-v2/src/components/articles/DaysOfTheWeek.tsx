"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading, SectionHeadingProps } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";

export const DATA_DAYS_OF_WEEK = [
  { en: "Sunday", translation: "Yautatokʌ́htu", key: "sun" },
  { en: "Monday", translation: "Yautʌtá·u", key: "mon" },
  { en: "Tuesday", translation: "Tekníhatut", key: "tue" },
  { en: "Wednesday", translation: "Ahsʌ́hatut", key: "wed" },
  { en: "Thursday", translation: "Kayelíhatut", key: "thu" },
  { en: "Friday", translation: "Wískhatut", key: "fri" },
  { en: "Saturday", translation: "Ʌtáktaʔ", key: "sat" },
];

export function DaysOfTheWeekArticle({ level = 1 }: ArticleProps) {
  const daysSpecific = [
    { en: "on Sunday", translation: "Yautatokʌhtu·neʔ" },
    { en: "on Monday", translation: "Yautʌtaʔú·neʔ" },
    { en: "on Tuesday", translation: "Teknihatútneʔ" },
    { en: "on Wednesday", translation: "Ahsʌhatútneʔ" },
    { en: "on Thursday", translation: "Kayelihatútneʔ" },
    { en: "on Friday", translation: "Wiskhatútneʔ" },
    { en: "on Saturday", translation: "Ʌtaktáhneʔ" },
  ];
  const daysLast = [
    { en: "last Sunday", translation: "tshawʌtatokʌ́htu" },
    { en: "last Monday", translation: "tshawʌtʌ·táneʔ" },
    { en: "last Tuesday", translation: "tshaʔtekníhatuht" },
    { en: "last Wednesday", translation: "tshiwahsʌ́hatuht" },
    { en: "last Thursday", translation: "tshikayelíhatuht" },
    { en: "last Friday", translation: "tshiwískhatut" },
    { en: "last Saturday", translation: "tshiwʌtáktaʔ" },
  ];
  const daysNext = [
    { en: "next Sunday", translation: "yʌswʌtatokʌ́htu" },
    { en: "next Monday", translation: "oyá· yʌswʌtʌ·táneʔ" },
    { en: "next Tuesday", translation: "oyá· nyaʔteskníhatuht" },
    { en: "next Wednesday", translation: "oyá· nyaʔteswahsʌ́hatuht" },
    { en: "next Thursday", translation: "oyá· nyaʔteskayelíhatuht" },
    { en: "next Friday", translation: "oyá· yʌswískhatut" },
    { en: "next Saturday", translation: "oyá· yʌswʌtáktaʔ" },
  ];

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="days-of-week" level={level}>
        Days of the week
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={DATA_DAYS_OF_WEEK}
      />

      <SectionHeading
        id="days-on"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        On a specific day
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={daysSpecific}
      />

      <SectionHeading
        id="days-last"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Last...
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={daysLast}
      />

      <SectionHeading
        id="days-next"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Next...
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={daysNext}
      />
    </Flex>
  );
}
