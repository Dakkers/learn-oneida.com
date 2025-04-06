"use client";
import {
  TableOfContents as TOC,
  TableOfContentsItem as TocItem,
} from "~/components/TableOfContents";
import { Flex, Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import {
  type Module12AnimalDatum,
  createModule12BirdsList,
  createModule12InsectsList,
  createModule12MammalsList,
  getAudioFileBaseForModule12AnimalDatum,
} from "@/data/module12";
import { LinkWrapper } from "@/components/LinkWrapper";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { StandardEntryDisplay } from "@/components/StandardEntryDisplay";
import { AnimalsTable } from "@/components/AnimalsTable";

// export const metadata: Metadata = {
//   title: "Module 12",
//   description: "Module 12 of the Oneida curriculum.",
// };

export default function LearnModule12() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Module 12</SectionHeading>

      <Box py={4}>
        <Notice intent="negative">
          <b>Note:</b> This page is new and is missing lots of content. It is
          currently a work in progress!
        </Notice>
      </Box>

      <TOC>
        <TocItem label="Introduction" value="intro" />
        <TocItem label="Mammals" value="mammals" />
        <TocItem label="Birds" value="birds" />
        <TocItem label="Insects" value="insects" />
      </TOC>

      <Introduction />
      <MammalsList />
      <BirdsList />
      <InsectsList />
    </PageWrapper>
  );
}

function Introduction() {
  return (
    <>
      <SectionHeading id="intro" level={2}>
        Introduction
      </SectionHeading>

      <div>(Intro not yet written)</div>
    </>
  );
}

function MammalsList() {
  const list = createModule12MammalsList();
  return (
    <>
      <SectionHeading id="mammals" level={2}>
        Mammals
      </SectionHeading>
      <AnimalsTable data={list} />
    </>
  );
}

function BirdsList() {
  const list = createModule12BirdsList();
  return (
    <>
      <SectionHeading id="birds" level={2}>
        Birds
      </SectionHeading>
      <AnimalsTable data={list} />
    </>
  );
}

function InsectsList() {
  const list = createModule12InsectsList();
  return (
    <>
      <SectionHeading id="insects" level={2}>
        Insects
      </SectionHeading>
      <AnimalsTable data={list} />
    </>
  );
}
