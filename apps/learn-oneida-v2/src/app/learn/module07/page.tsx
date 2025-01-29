import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
  TableOfContentsSection as TocSection,
  TableOfContentsItemPhrase as TocPhrase,
} from "~/components/TableOfContents";
import { Accordion, Flex, List, Text } from "@ukwehuwehneke/ohutsya";
import {
  BreakdownArray,
  SectionHeading,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import { Bleed } from "@ukwehuwehneke/ohutsya";
import { createModule7NounsList, Module7Noun } from "@/data/module07";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import pluralize from "pluralize";
import indefinite from "indefinite";
import { Letter } from "@/components/Letter";

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
  return (
    <>
      <SectionHeading level={2}>Introduction</SectionHeading>
      <Text>(Intro not yet written.)</Text>
    </>
  );
}

function AllNouns() {
  const list = createModule7NounsList();
  return (
    <>
      <SectionHeading id="nouns-list" level={2}>
        Noun List
      </SectionHeading>

      <Text>
        This section contains a long list of nouns that state the noun in a
        couple different forms:
      </Text>
      <List>
        <List.Item>standalone</List.Item>
        <List.Item>incorporated</List.Item>
        <List.Item>counted</List.Item>
      </List>
      <Text>
        Some nouns cannot be conjugated in certain ways so you may see missing
        table rows.
      </Text>

      <Accordion type="multiple">
        {list.map((n) => {
          return (
            <Accordion.Item id={n.key.toLowerCase()} key={n.key} title={n.en}>
              <NounEntry nounDatum={n} />
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
}

function NounEntry({ nounDatum }: { nounDatum: Module7Noun }) {
  const p = pluralize(nounDatum.en[0]);
  const indef = indefinite(nounDatum.en[0]);

  return (
    <>
      <Text>
        The root is <Letter>{nounDatum.root.join("/")}</Letter>.
      </Text>

      <TableWrapper
        columns={[
          TableWrapper.englishColumn,
          {
            accessorKey: "breakdown",
            // @ts-expect-error TODO - TableWrapper/Table generics
            cell: (value: BreakdownArray | null) =>
              value ? (
                <TextBreakdown breakdown={value} typeFallback="PS" />
              ) : (
                "N/A"
              ),
            header: "Oneida",
          },
        ]}
        data={[
          [`it is ${indef}`, nounDatum.single],
          [`they are ${p}`, nounDatum.plural],
          [`I have ${indef}`, nounDatum.have],
          [`I have many ${p}`, nounDatum.havePlural],
          [`it is a good ${nounDatum.en}`, nounDatum.good],
          [`they are good ${p}`, nounDatum.goodPlural],
          [`I have a good ${nounDatum.en}`, nounDatum.haveGood],
          [`I have many good ${p}`, nounDatum.haveGoodPlural],
          [`I have a big ${nounDatum.en}`, nounDatum.big],
          [`I have many big ${p}`, nounDatum.bigPlural],
          [`one ${nounDatum.en}`, nounDatum.count1],
          [`two ${p}`, nounDatum.count2],
          [`three ${p}`, nounDatum.count3],
        ].map(([en, breakdown]) => ({ en, breakdown }))}
      />
    </>
  );
}
