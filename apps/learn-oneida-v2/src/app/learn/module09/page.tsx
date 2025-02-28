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
  createModule9FoodCharacteristics,
  createModule9FoodsList,
  type Module9FoodCharacteristicDatum,
  type Module9FoodDatum,
} from "@/data/module09";

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
                label={n.en.join(", ")}
                value={_.kebabCase(n.key)}
              />
            ))}
          </TocSection>
        </TocItem>

        <TocItem label="Food Characteristics" value="characteristics-list" />

        {/* <TocItem label="Translation exercises" value="translation-exercises" /> */}
      </TOC>

      <Introduction />
      <FoodNouns />
      <CharacteristicsList />
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

function NounEntry({ nounDatum }: { nounDatum: Module9FoodDatum }) {
  const en = nounDatum.en;
  const p = en.map((v) => pluralize(v));

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
            cell: (value: Module9FoodDatum["singular"]) =>
              value ? <CustomCell value={value} /> : "N/A",
            header: "Oneida",
          },
        ]}
        data={[
          ["(singular)", nounDatum.singular],
          ["(plural)", nounDatum.plural],
        ]
          .filter((pair) => !!pair[1])
          .map(([en, breakdown]) => ({ en, breakdown }))}
      />
    </>
  );
}

function CharacteristicsList() {
  return (
    <>
      <SectionHeading id="characteristics-list" level={2}>
        Food Characteristics
      </SectionHeading>

      <TableWrapper
        columns={[
          {
            accessorKey: "en",
            // @ts-expect-error Table generics
            cell: (en: string[], row: Module9FoodCharacteristicDatum) => (
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
            accessorKey: "breakdown",
            // @ts-expect-error Table generics
            cell: (value: Module9FoodCharacteristicDatum["one"]) => (
              <CustomCell value={value} />
            ),
            header: "Oneida",
          },
        ]}
        data={createModule9FoodCharacteristics().map((datum) => ({
          en: datum.en,
          breakdown: datum.one,
          dict: datum.dict,
        }))}
      />
    </>
  );
}

function CustomCell({
  value,
}: {
  value: Module9FoodCharacteristicDatum["one"];
}) {
  return (
    <Flex direction="column" gap={4}>
      {(value ?? []).map((obj, i) => (
        <Flex direction="column" gap={0} key={i}>
          <TextBreakdown breakdown={obj.one} typeFallback="PS" wrap="nowrap" />
          {obj.en && <Text variant="labelS">{obj.en}</Text>}
        </Flex>
      ))}
    </Flex>
  );
}
