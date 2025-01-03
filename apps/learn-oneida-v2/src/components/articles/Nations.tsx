"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import {
  type Pronoun,
  SectionHeading,
} from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { getNationsList, nationsParadigm } from "@/data/module03";

export function NationsArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="nations" level={level}>
        Nations
      </SectionHeading>
      <Text>
        Below is a list of nations and nationalities. These include nations part
        of the Haudenosaunee confederacy and others outside.
      </Text>
      <TableWrapper
        columns={[
          // @ts-expect-error TODO: table generics
          ...TableWrapper.columnsEnglishAudio,
          // @ts-expect-error TODO: table generics
          {
            accessorKey: "literal",
            header: "Literal translation",
          },
        ]}
        data={getNationsList()}
      />
      <Text>Here are a couple examples that you can use in sentences:</Text>
      <ParadigmTable
        columnVisibility={{ pronounEnglish: false }}
        data={nationsParadigm()}
      />
    </Flex>
  );
}
