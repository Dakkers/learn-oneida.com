"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { getEnglishNames } from "~/data/module01";

export function EnglishNamesArticle({ level = 1 }: ArticleProps) {
  const names = getEnglishNames();
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="english-names" level={level}>
        English Names
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={names}
      />
    </Flex>
  );
}
