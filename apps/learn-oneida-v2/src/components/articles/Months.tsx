"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { createMonthsData } from "@/data/module04";

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
          // @ts-expect-error TODO - TableWrapper/Table generics
          ...TableWrapper.columnsEnglishAudio,
          // @ts-expect-error TODO - TableWrapper/Table generics
          {
            accessorKey: "literal",
            header: "Literal translation",
          },
        ]}
        data={createMonthsData().months}
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
