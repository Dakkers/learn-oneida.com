"use client";
import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
  TableOfContentsSection as TocSection,
  TableOfContentsItemPhrase as TocPhrase,
} from "~/components/TableOfContents";
import { Accordion, Flex, Text } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import {
  type ContainerNoun,
  createContainerNounList,
  createModule8CharacteristicsList,
  type ObjectCharacteristicVerb,
} from "@/data/module08";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { Letter } from "@/components/Letter";
import indefinite from "indefinite";

// export const metadata: Metadata = {
//   title: "Module 8",
//   description: "Module 8 of the Oneida curriculum",
// };

export const runtime = "edge";

export default function LearnModule08() {
  const list = createModule8CharacteristicsList();
  return (
    <PageWrapper>
      <SectionHeading level={1}>Module 8</SectionHeading>

      <Box py={4}>
        <Notice intent="negative">
          <b>Note:</b> This page is new and is missing lots of content. It is
          currently a work in progress!
        </Notice>
      </Box>

      <TOC>
        <TocItem label="Introduction" value="intro" />

        <TocItem label="Object Characteristics" value="object-characteristics">
          <TocSection>
            {list.map((n) => (
              <TocItem
                key={n.key}
                label={n.en.join(", ")}
                value={n.key.toLowerCase()}
              />
            ))}
          </TocSection>
        </TocItem>

        <TocItem label="Container Nouns" value="containers" />

        {/* <TocItem label="Translation exercises" value="translation-exercises" /> */}
      </TOC>

      <Introduction />
      <ObjectCharacteristicList />
      <ContainerNouns />
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

function ObjectCharacteristicList() {
  const list = createModule8CharacteristicsList();
  return (
    <>
      <SectionHeading id="object-characteristics" level={2}>
        Object Characteristics
      </SectionHeading>

      <Accordion type="multiple">
        {list.map((n) => {
          return (
            <Accordion.Item
              id={n.key.toLowerCase()}
              key={n.key}
              title={n.en.join(", ")}
            >
              <ObjectCharacteristicEntry datum={n} />
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
}

function ObjectCharacteristicEntry({
  datum,
}: { datum: ObjectCharacteristicVerb }) {
  const en = datum.en[0];
  const indef = indefinite(en);

  return (
    <>
      <Text>
        The root is <Letter>{datum.root.join("/")}</Letter>.
      </Text>

      <TableWrapper
        columns={[
          TableWrapper.englishColumn,
          // @ts-expect-error TODO - TableWrapper/Table generics
          TableWrapper.createTextBreakdownColumn("PO"),
        ]}
        data={[
          [`it is ${en}`, datum.verb],
          [`it is not ${en}`, datum.verbNegated],
          [`it is ${indef} bag`, datum.withNoun],
          [`I have ${indef} bag`, datum.haveNoun],
          [`I have ${en} bags`, datum.haveNounPlural],
          [`it used to be ${en}`, datum.verbPast],
          [`it used to be ${indef} bag`, datum.withNounPast],
          [`I used to have ${indef} bag`, datum.haveNounPast],
          [`I used to have ${en} bags`, datum.haveNounPastPlural],
        ].map(([en, breakdown]) => ({ en, breakdown }))}
      />
    </>
  );
}

function ContainerNouns() {
  return (
    <>
      <SectionHeading id="containers" level={2}>
        Container Nouns
      </SectionHeading>

      <Text>
        The word <b>yelákhwaʔ</b> means "container" and the word{" "}
        <b>yelakhwaʔshúha</b> means "containers". Below is a list of objects
        that contain other objects.
      </Text>

      <Text>
        These words make use of noun incorporation as described in the previous
        section and also make use of the instrumental suffix{" "}
        <Letter>-hkw-</Letter>. This suffix means "do with it, use it for".
        Because it's used in the habitual tense, it ends up appearing as{" "}
        <Letter>khwaʔ</Letter>.
      </Text>

      <TableWrapper
        columns={[
          TableWrapper.englishColumn,
          {
            accessorKey: "one",
            // @ts-expect-error TODO - TableWrapper/Table generics
            cell: (value: ContainerNoun["one"]) => {
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
        data={createContainerNounList()}
      />
    </>
  );
}
