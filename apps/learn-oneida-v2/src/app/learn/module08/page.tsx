import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
  TableOfContentsSection as TocSection,
  TableOfContentsItemPhrase as TocPhrase,
} from "~/components/TableOfContents";
import { Accordion, Flex } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import { Bleed } from "@ukwehuwehneke/ohutsya";
import { createModule7NounsList } from "@/data/module07";
import { createModule8CharacteristicsList } from "@/data/module08";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Module 8",
  description: "Module 8 of the Oneida curriculum",
};

export default function LearnModule07() {
  const list = createModule7NounsList();
  return (
    <PageWrapper>
      <SectionHeading level={1}>Module 8</SectionHeading>

      <Box py={4}>
        <Notice intent="warning">
          <b>Note:</b> This page is still under construction!
        </Notice>
      </Box>

      <TOC>
        <TocItem label="Introduction" value="intro" />

        <TocItem label="Paradigms for Select Active Verbs" value="paradigms">
          <TocSection>
            {list.map((n) => (
              <TocItem key={n.key} label={n.en} value={n.key.toLowerCase()} />
            ))}
          </TocSection>
        </TocItem>

        <TocItem label="Translation exercises" value="translation-exercises" />
      </TOC>

      <Introduction />
      <AllNouns />
    </PageWrapper>
  );
}

function Introduction() {
  return <div>(Intro not yet written)</div>;
}

function AllNouns() {
  const list = createModule8CharacteristicsList();
  return (
    <Bleed
      mx={{
        xs: 0,
        md: 16,
        lg: 32,
      }}
    >
      <Accordion type="multiple">
        {list.map((n) => {
          return (
            <Accordion.Item id={n.key.toLowerCase()} key={n.key} title={n.en}>
              <DatumTable datum={n} />
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Bleed>
  );
}

function DatumTable({ datum }: { datum: any }) {
  return (
    <TableWrapper
      columns={[
        TableWrapper.englishColumn,
        // @ts-expect-error TODO - TableWrapper/Table generics
        TableWrapper.createTextBreakdownColumn("PO"),
      ]}
      data={[
        ["it is...", datum.verb],
        ["it used to be...", datum.verbPast],
        ["it is not...", datum.verbNegated],
        ["it is a ... bag", datum.withNoun],
        ["they are ... bags", datum.withNounPlural],
        ["it used to be a ... bag", datum.withNounPast],
        ["I have a ... bag", datum.haveNoun],
        ["I have ... bags", datum.haveNounPlural],
        ["I used to have a ... bag", datum.haveNounPast],
      ].map(([en, breakdown]) => ({ en, breakdown }))}
    />
  );
}
