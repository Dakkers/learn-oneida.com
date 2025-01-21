"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { TableWrapper } from "@/components/TableWrapper";
import {
  getCountingPeopleExamples,
  getCountingPeopleLists,
} from "@/data/module03";

export function CountingPeopleArticle({ level = 1 }: { level?: 1 | 2 }) {
  const data = getCountingPeopleLists();
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="counting-people" level={level}>
        Counting People
      </SectionHeading>

      <TableWrapper
        columns={[
          { accessorKey: "en", header: "English" },
          // @ts-expect-error TODO - TableWrapper/Table generics
          TableWrapper.createTextBreakdownColumn("PS"),
        ]}
        data={data.people}
      />

      <TableWrapper columns={TableWrapper.columnsParadigmRed} data={data.men} />

      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={data.women}
      />

      <Text>Some concrete examples:</Text>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={getCountingPeopleExamples()}
      />
    </Flex>
  );
}
