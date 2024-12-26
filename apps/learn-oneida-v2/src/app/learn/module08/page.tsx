"use client";

import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Accordion, Flex } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import { Bleed } from "@ukwehuwehneke/ohutsya";
import { createModule7NounsList } from "@/data/module07";
import { createModule8CharacteristicsList } from "@/data/module08";

const meta: any = () => {
  return [
    { title: "Module 8" },
    { name: "description", content: "Module 8 of the Oneida curriculum" },
  ];
};

export default function LearnModule07() {
  const list = createModule7NounsList();
  return (
    <>
      <SectionHeading level={1}>Module 8</SectionHeading>

      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>

      <TOC>
        <TOC.Item label="Introduction" value="intro" />

        <TOC.Item label="Paradigms for Select Active Verbs" value="paradigms">
          <TOC.Section>
            {list.map((n) => (
              <TOC.Item key={n.key} label={n.en} value={n.key.toLowerCase()} />
            ))}
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Translation exercises" value="translation-exercises" />
      </TOC>

      <Introduction />
      <AllNouns />
    </>
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
        TableWrapper.createTextBreakdownColumn("PB"),
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
