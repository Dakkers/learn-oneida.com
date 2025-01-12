"use client";
import { Text } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { TableWrapper } from "@/components/TableWrapper";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { ParadigmTable } from "../ParadigmTable";
import type { ArticleProps } from "./utils";
import { getClanAnimalList, getClanParadigms } from "@/data/module03";

export function ClansArticle({ level = 1 }: ArticleProps) {
  const data = getClanParadigms();
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="clans" level={level}>
        Clans
      </SectionHeading>
      <Text>
        Here, you can learn about clan animals and how to say someone is from a
        clan. The clans in Oneida are: bear, turtle, and wolf.
      </Text>
      <SectionHeading level={(level + 1) as SectionHeadingProps["level"]}>
        Clan Animals
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={getClanAnimalList()}
      />
      <SectionHeading level={(level + 1) as SectionHeadingProps["level"]}>
        Phrases
      </SectionHeading>
      <ParadigmTable
        columnVisibility={{ pronounEnglish: false }}
        data={data.bear}
      />
      <ParadigmTable
        columnVisibility={{ pronounEnglish: false }}
        data={data.turtle}
      />
      <ParadigmTable
        columnVisibility={{ pronounEnglish: false }}
        data={data.wolf}
      />
    </Flex>
  );
}
