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
import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Module 7",
  description: "Module 7 of the Oneida curriculum",
};

export default function LearnModule07() {
  const list = createModule7NounsList();
  return (
    <PageWrapper>
      <SectionHeading level={1}>Module 7</SectionHeading>

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
  const list = createModule7NounsList();
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
              <NounTable nounDatum={n} />
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Bleed>
  );
}

function NounTable({ nounDatum }: { nounDatum: any }) {
  return (
    <TableWrapper
      columns={[
        TableWrapper.englishColumn,
        // @ts-expect-error TODO - TableWrapper/Table generics
        TableWrapper.createTextBreakdownColumn("PS"),
      ]}
      data={[
        ["it is a...", nounDatum.single],
        ["they are...", nounDatum.plural],
        ["I have...", nounDatum.have],
        ["I have many...", nounDatum.havePlural],
        ["it is a good...", nounDatum.good],
        ["they are good...", nounDatum.goodPlural],
        ["I have good...", nounDatum.haveGood],
        ["I have many good....", nounDatum.haveGoodPlural],
        ["I have big...", nounDatum.big],
        ["I have many big...", nounDatum.bigPlural],
        ["1", nounDatum.count1],
        ["2", nounDatum.count2],
        ["3", nounDatum.count3],
      ].map(([en, breakdown]) => ({ en, breakdown }))}
    />
  );
}
