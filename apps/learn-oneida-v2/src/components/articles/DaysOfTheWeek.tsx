"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { getDaysOfWeekData } from "@/data/module04";

export function DaysOfTheWeekArticle({ level = 1 }: ArticleProps) {
  const data = getDaysOfWeekData();
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="days-of-week" level={level}>
        Days of the week
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={data.days}
      />

      <SectionHeading
        id="days-on"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        On a specific day
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={data.daysSpecific}
      />

      <SectionHeading
        id="days-last"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Last...
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={data.daysLast}
      />

      <SectionHeading
        id="days-next"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Next...
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={data.daysNext}
      />
    </Flex>
  );
}
