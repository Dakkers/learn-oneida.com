import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
  TableOfContentsSection as TocSection,
  TableOfContentsItemPhrase as TocPhrase,
} from "~/components/TableOfContents";
import { Accordion, Flex, List, Text } from "@ukwehuwehneke/ohutsya";
import {
  type BreakdownArray,
  SectionHeading,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import pluralize from "pluralize";
import indefinite from "indefinite";
import { Letter } from "@/components/Letter";
import { createModule9FoodsList, Module9FoodDatum } from "@/data/module09";

export const metadata: Metadata = {
  title: "Module 9",
  description: "Module 9 of the Oneida curriculum",
};

export default function LearnModule09() {
  const foodList = createModule9FoodsList();
  return (
    <PageWrapper>
      <SectionHeading level={1}>Module 9</SectionHeading>

      <Box py={4}>
        <Notice intent="negative">
          <b>Note:</b> This page is new and is missing lots of content. It is
          currently a work in progress!
        </Notice>
      </Box>

      <TOC>
        <TocItem label="Introduction" value="intro" />

        <TocItem label="New Nouns" value="foods-list">
          <TocSection>
            {foodList.map((n) => (
              <TocItem
                key={n.key}
                label={n.en[0]}
                value={_.kebabCase(n.en[0])}
              />
            ))}
          </TocSection>
        </TocItem>

        {/* <TocItem label="Translation exercises" value="translation-exercises" /> */}
      </TOC>

      <Introduction />
      <FoodNouns />
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

function FoodNouns() {
  const list = createModule9FoodsList();
  return (
    <>
      <SectionHeading id="foods-list" level={2}>
        Foods
      </SectionHeading>

      <Accordion type="multiple">
        {list.map((n) => {
          return (
            <Accordion.Item
              id={n.key.toLowerCase()}
              key={n.key}
              title={n.en[0]}
            >
              <NounEntry nounDatum={n} />
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
}

function NounEntry({ nounDatum }: { nounDatum: Module9FoodDatum }) {
  const en = nounDatum.en;
  const p = en.map((v) => pluralize(v))

  return (
    <>
      {nounDatum.root.length && (<Text>
        The root is <Letter>{nounDatum.root.join("/")}</Letter>.
      </Text>)}

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
          [en.join(', '), nounDatum.singular],
          [p.join(', '), nounDatum.plural],
        ].map(([en, breakdown]) => ({ en, breakdown }))}
      />
    </>
  );
}
