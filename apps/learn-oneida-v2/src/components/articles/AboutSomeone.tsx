"use client";
import { Flex, Text } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { ParadigmTable } from "../ParadigmTable";
import { LinkWrapper } from "../LinkWrapper";
import { Letter } from "../Letter";
import data from "~/data/module02/aboutSomeone";
import { getAboutSomeoneExamples } from "@/data/module02";

export function AboutSomeoneArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="about-someone" level={level}>
        About Someone
      </SectionHeading>
      <Text>
        Note: The website author is unsure of the derivation of this word but it
        looks like it is comprised of the root word <Letter>-lihw-</Letter>{" "}
        which means "issue", a joiner vowel "a", and the locative suffix{" "}
        <Letter>-ke</Letter> which means "on" (discussed in{" "}
        <LinkWrapper page={10} />
        .)
      </Text>
      <ParadigmTable
        audioFolder="module02/about"
        columnVisibility={{ pronounEnglish: false }}
        data={data}
      />

      <SectionHeading
        id="about-someone-examples"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Examples
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={getAboutSomeoneExamples()}
      />
    </Flex>
  );
}
