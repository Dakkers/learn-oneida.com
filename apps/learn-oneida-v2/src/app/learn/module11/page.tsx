import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
} from "~/components/TableOfContents";
import { Flex, Text, TextArray } from "@ukwehuwehneke/ohutsya";
import {
  type BreakdownArray,
  SectionHeading,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import {
  type BodyPartNounData,
  createModule11BodilyFluidsList,
  createModule11BodyAilmentsList,
  createModule11BodyPartNounList,
  type Module11AilmentEntry,
} from "@/data/module11";
import { LinkWrapper } from "@/components/LinkWrapper";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { StandardEntryDisplay } from "@/components/StandardEntryDisplay";

export const metadata: Metadata = {
  title: "Module 11",
  description: "Module 11 of the Oneida curriculum.",
};

export default function LearnModule11() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Module 11</SectionHeading>

      <Box py={4}>
        <Notice intent="negative">
          <b>Note:</b> This page is new and is missing lots of content. It is
          currently a work in progress!
        </Notice>
      </Box>

      <TOC>
        <TocItem label="Introduction" value="intro" />
        <TocItem label="Body Parts" value="body-parts" />
        <TocItem label="Bodily Fluids" value="bodily-fluids" />
        <TocItem label="Ailments" value="ailments" />
      </TOC>

      <Introduction />
      <BodyPartsList />
      <FluidsList />
      <AilmentsList />
    </PageWrapper>
  );
}

function Introduction() {
  return (
    <>
      <SectionHeading id="intro" level={2}>
        Introduction
      </SectionHeading>

      <div>(Intro not yet written)</div>
    </>
  );
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
      <BodyPartTable data={list} />
    </>
  );
}

function BodyPartTable({ data }: { data: BodyPartNounData[] }) {
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
            return <StandardEntryDisplay value={onNoun} />;
          },
          header: "Usage",
        },
      ]}
      // @ts-expect-error TODO - TableWrapper/Table generics
      data={data}
    />
  );
}

function AilmentsList() {
  return (
    <>
      <SectionHeading id="ailments" level={2}>
        Ailments
      </SectionHeading>

      <TableWrapper
        columns={[
          {
            accessorKey: "en",
            // @ts-expect-error Table generics
            cell: (en: string[], row: Module11AilmentEntry) => (
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
            accessorKey: "usage",
            // @ts-expect-error Table generics
            cell: (value: Module11AilmentEntry["usage"]) => (
              <StandardEntryDisplay value={value} />
            ),
            header: "Oneida",
          },
        ]}
        data={createModule11BodyAilmentsList().map((datum) => ({
          en: datum.en,
          usage: datum.usage,
          dict: datum.dict,
        }))}
      />
    </>
  );
}

function FluidsList() {
  return (
    <>
      <SectionHeading id="bodily-fluids" level={2}>
        Bodily Fluids
      </SectionHeading>

      <TableWrapper
        columns={[
          TableWrapper.englishColumn,
          {
            accessorKey: "root",
            cell: TableWrapper.textArrayCell,
            header: "Root",
          },
          // @ts-expect-error TODO - TableWrapper/Table generics
          TableWrapper.createTextBreakdownColumn("PO"),
        ]}
        data={createModule11BodilyFluidsList().map((datum) => ({
          en: datum.en,
          breakdown: datum.breakdown,
          dict: datum.dict,
          root: datum.root,
        }))}
      />
    </>
  );
}
