"use client";

import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Flex, Text, TextArray } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import {
  BodyPartNounData,
  createModule11BodyPartNounList,
} from "@/data/module11";
import { LinkWrapper } from "@/components/LinkWrapper";

const meta: any = () => {
  return [
    { title: "Module 11" },
    { name: "description", content: "Module 11 of the Oneida curriculum" },
  ];
};

export default function LearnModule11() {
  const list = createModule11BodyPartNounList();
  return (
    <>
      <SectionHeading level={1}>Module 11</SectionHeading>

      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>

      <TOC>
        <TOC.Item label="Introduction" value="intro" />
        <TOC.Item label="Body Parts" value="body-parts" />
      </TOC>

      <Introduction />
      <BodyPartsList />
    </>
  );
}

function Introduction() {
  return <div>(Intro not yet written)</div>;
}

function BodyPartsList() {
  const list = createModule11BodyPartNounList();
  return (
    <>
      <SectionHeading id="body-parts" level={2}>
        Body Parts
      </SectionHeading>
      <Text>
        Many of these words have tricky consonant clusters. Make sure to check
        out the <LinkWrapper page="soundchart" /> if you need a refresher!
      </Text>
      <DatumTable data={list} />
    </>
  );
}

function DatumTable({ data }: { data: BodyPartNounData[] }) {
  return (
    <TableWrapper
      columns={[
        {
          accessorKey: "en",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (en: string[], row: BodyPartNounData) => (
            <Flex direction="column" gap={1}>
              <Text>{en.join(", ")}</Text>
              {row.dict.length > 0 && (
                <Text variant="labelS">pg. {row.dict.join(", ")}</Text>
              )}
            </Flex>
          ),
          header: "English",
        },
        {
          accessorKey: "root",
          cell: TableWrapper.textArrayCell,
          header: "Root",
        },
        {
          accessorKey: "standalone",
          cell: TableWrapper.textArrayCell,
          header: "Standalone",
        },
        {
          accessorKey: "onNoun",
          // @ts-expect-error TODO - TableWrapper/Table generics
          cell: (onNoun: BodyPartNounData["onNoun"]) => {
            return (
              <Flex direction="column" gap={4}>
                {onNoun.map((obj) => (
                  <Flex direction="column" gap={0}>
                    <TextBreakdown
                      breakdown={obj.one}
                      typeFallback="PR"
                      wrap="nowrap"
                    />
                    {obj.en && <Text variant="labelS">{obj.en}</Text>}
                  </Flex>
                ))}
              </Flex>
            );
          },
          header: "Usage",
        },
      ]}
      data={data}
    />
  );
}
