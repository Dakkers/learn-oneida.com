import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
  TableOfContentsSection as TocSection,
  TableOfContentsItemPhrase as TocPhrase,
} from "~/components/TableOfContents";
import { Accordion, Flex, List, Text } from "@ukwehuwehneke/ohutsya";
import {
  type BreakdownArray,
  BreakdownType,
  convertBreakdownToPlainText,
  SectionHeading,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import {
  createModule7NounsList,
  createColoursData,
  type Module7Noun,
  type Module7Colour,
  createModule7VerbsList,
} from "@/data/module07";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import pluralize from "pluralize";
import indefinite from "indefinite";
import { Letter } from "@/components/Letter";
import { MODULE_6_VERB_TENSE_LIST } from "@/data/module06/activeVerbsList";

export const metadata: Metadata = {
  title: "Module 7",
  description: "Module 7 of the Oneida curriculum",
};

export default function LearnModule07() {
  const nounList = createModule7NounsList();
  const verbList = createModule7VerbsList();
  return (
    <PageWrapper>
      <SectionHeading level={1}>Module 7</SectionHeading>

      <Box py={4}>
        <Notice intent="negative">
          <b>Note:</b> This page is new and is missing lots of content. It is
          currently a work in progress!
        </Notice>
      </Box>

      <TOC>
        <TocItem label="Introduction" value="intro" />

        <TocItem label="New Nouns" value="nouns-list">
          <TocSection>
            {nounList.map((n) => (
              <TocItem
                key={n.key}
                label={n.en[0]}
                value={n.key.toLowerCase()}
              />
            ))}
          </TocSection>
        </TocItem>

        <TocItem label="New Verbs" value="verbs-list">
          <TocSection>
            {verbList.map((n) => (
              <TocItem
                key={n.key}
                label={n.en.join(", ")}
                value={_.kebabCase(n.en[0])}
              />
            ))}
          </TocSection>
        </TocItem>

        <TocItem label="Colours" value="colours" />

        {/* <TocItem label="Translation exercises" value="translation-exercises" /> */}
      </TOC>

      <Introduction />
      <AllNouns />
      <AllVerbs />
      <ColourNouns />
    </PageWrapper>
  );
}

function Introduction() {
  return (
    <>
      <SectionHeading level={2}>Introduction</SectionHeading>

      <Text>(Intro not yet written.)</Text>

      <Text>TODO: Mention noun incorporation...</Text>
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
        Some nouns cannot be conjugated in certain ways so you may see empty
        table cells.
      </Text>

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

function ColourNouns() {
  return (
    <>
      <SectionHeading id="colours" level={2}>
        Colours
      </SectionHeading>

      <Text>Below is a list of colours.</Text>

      <TableWrapper
        columns={[
          TableWrapper.englishColumn,
          {
            accessorKey: "one",
            // @ts-expect-error TODO - TableWrapper/Table generics
            cell: (value: Module7Colour["one"]) => {
              return (
                <Flex direction="column" gap={4}>
                  {value.map((obj, i) => (
                    <Flex direction="column" gap={0} key={i}>
                      <TextBreakdown
                        breakdown={obj.one}
                        typeFallback="PS"
                        wrap="nowrap"
                      />
                      {obj.en && <Text variant="labelS">{obj.en}</Text>}
                    </Flex>
                  ))}
                </Flex>
              );
            },
            header: "Oneida",
          },
        ]}
        // @ts-expect-error TODO - TableWrapper/Table generics
        data={createColoursData()}
      />
    </>
  );
}

function AllVerbs() {
  return (
    <>
      <SectionHeading id="verbs-list" level={2}>
        New Verbs
      </SectionHeading>

      <Accordion type="multiple">
        {createModule7VerbsList().map((v) => {
          const data = MODULE_6_VERB_TENSE_LIST.filter(
            (tense) => !!v[tense],
          ).map((tense) => ({
            colour: v[tense]!.type,
            tense,
            text: (tense === "cmd"
              ? v[tense]!.phrases.find((p) => p.pronoun === "u")
              : (v[tense]!.phrases.find((p) => p.pronoun === "i") ??
                v[tense]!.phrases.find((p) => p.pronoun === "it")))!.breakdown,
          }));

          return (
            <Accordion.Item
              id={_.kebabCase(v.en[0])}
              key={v.key}
              title={v.en.join(", ")}
            >
              <TableWrapper
                columns={[
                  {
                    accessorKey: "text",
                    // @ts-expect-error TODO - TableWrapper/Table generics
                    cell: (
                      value: BreakdownArray,
                      row: { colour: BreakdownType },
                    ) => (
                      <TextBreakdown
                        breakdown={value}
                        typeFallback={row.colour}
                      />
                    ),
                    header: "",
                  },
                ]}
                data={data}
              />
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
}
