"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { ParadigmTable } from "../ParadigmTable";
import dataLastNames from "~/data/module02/lastNames";
import { getLastNameExamples } from "@/data/module02";

export function LastNamesArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="last-names" level={level}>
        Last Names
      </SectionHeading>
      <ParadigmTable
        columnVisibility={{ pronounEnglish: false }}
        data={dataLastNames}
      />

      <SectionHeading
        id="last-names-examples"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Examples
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={getLastNameExamples()}
      />
    </Flex>
  );
}
