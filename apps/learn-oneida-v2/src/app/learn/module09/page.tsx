import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
  TableOfContentsSection as TocSection,
} from "~/components/TableOfContents";
import { Accordion, Flex, Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { Letter } from "@/components/Letter";
import {
  createModule9FoodCharacteristics,
  createModule9FoodsList,
  type Module9FoodCharacteristicDatum,
  type Module9FoodDatum,
} from "@/data/module09";
import { EnglishDisplay, StandardEntryDisplay } from "@/components";

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
              value ? <StandardEntryDisplay value={value} /> : "N/A",
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
              <EnglishDisplay value={{ dict: row.dict, en }} />
            ),
            header: "English",
          },
          {
            accessorKey: "breakdown",
            // @ts-expect-error Table generics
            cell: (value: Module9FoodCharacteristicDatum["usage"]) => (
              <StandardEntryDisplay value={value} />
            ),
            header: "Oneida",
          },
        ]}
        data={createModule9FoodCharacteristics().map((datum) => ({
          en: datum.en,
          breakdown: datum.usage,
          dict: datum.dict,
        }))}
      />
    </>
  );
}
