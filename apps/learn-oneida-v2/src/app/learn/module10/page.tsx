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
import { Letter } from "@/components/Letter";
import {
  createModule10EnvironmentNounsList,
  type Module10EnvironmentNounDatum,
} from "@/data/module10";

export const metadata: Metadata = {
  title: "Module 10",
  description: "Module 10 of the Oneida curriculum",
};

export const runtime = "edge";

export default function LearnModule10() {
  const envNounList = createModule10EnvironmentNounsList();
  return (
    <PageWrapper>
      <SectionHeading level={1}>Module 10</SectionHeading>

      <Box py={4}>
        <Notice intent="negative">
          <b>Note:</b> This page is new and is missing lots of content. It is
          currently a work in progress!
        </Notice>
      </Box>

      <TOC>
        <TocItem label="Introduction" value="intro" />

        <TocItem label="New Nouns" value="env-nouns-list">
          <TocSection>
            {envNounList.map((n) => (
              <TocItem
                key={n.key}
                label={n.en.join(", ")}
                value={_.kebabCase(n.key)}
              />
            ))}
          </TocSection>
        </TocItem>

        {/* <TocItem label="Translation exercises" value="translation-exercises" /> */}
      </TOC>

      <Introduction />
      <EnvironmentNounsList />
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

function EnvironmentNounsList() {
  const list = createModule10EnvironmentNounsList();
  return (
    <>
      <SectionHeading id="env-nouns-list" level={2}>
        Environment Nouns
      </SectionHeading>

      <Accordion type="multiple">
        {list.map((n) => {
          return (
            <Accordion.Item
              id={_.kebabCase(n.key)}
              key={n.key}
              title={n.en.join(", ")}
            >
              <NounEntry nounDatum={n} />
            </Accordion.Item>
          );
        })}
      </Accordion>
    </>
  );
}

function NounEntry({ nounDatum }: { nounDatum: Module10EnvironmentNounDatum }) {
  const en = nounDatum.en[0];

  return (
    <>
      {nounDatum.root.length > 0 && (
        <Text>
          The root is <Letter>{nounDatum.root.join("/")}</Letter>.
        </Text>
      )}

      <TableWrapper
        columns={[
          {
            accessorKey: "en",
            header: "English",
          },
          {
            accessorKey: "breakdown",
            // @ts-expect-error Table generics
            cell: (value: Module10EnvironmentNounDatum["onNoun"]) =>
              value ? <CustomCell value={value} /> : "N/A",
            header: "Oneida",
          },
        ]}
        data={[
          [`${en} (standalone)`, nounDatum.standalone],
          [`on the ${en}`, nounDatum.onNoun],
          [`in the ${en}`, nounDatum.inNoun],
          [`where the ${en} is`, nounDatum.whereTheNoun],
        ]
          .filter((pair) => !!pair[1])
          .map(([en, breakdown]) => ({ en, breakdown }))}
      />
    </>
  );
}

function CustomCell({
  value,
}: {
  value:
    | string
    | string[]
    | Array<{
        one: BreakdownArray;
        en: string;
      }>;
}) {
  return (
    <Flex direction="column" gap={4}>
      {typeof value === "string"
        ? value
        : (value ?? []).map((obj, i) => (
            <Flex direction="column" gap={0} key={i}>
              {typeof obj === "string" ? (
                obj
              ) : (
                <>
                  <TextBreakdown
                    breakdown={obj.one}
                    typeFallback="PS"
                    wrap="nowrap"
                  />
                  {obj.en && <Text variant="labelS">{obj.en}</Text>}
                </>
              )}
            </Flex>
          ))}
    </Flex>
  );
}
