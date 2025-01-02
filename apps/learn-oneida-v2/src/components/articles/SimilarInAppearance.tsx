"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { ParadigmTable } from "../ParadigmTable";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Letter } from "../Letter";
import { LinkWrapper } from "../LinkWrapper";
import data from "~/data/module02/similarInApperance";

export function SimilarInAppearanceArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="similar-in-appearance" level={level}>
        Similar in Appearance
      </SectionHeading>
      <Text>
        The root word is <Letter>-yelutal-</Letter> with the dualic feature and
        the <LinkWrapper page="rep" />.
      </Text>
      <ParadigmTable columnVisibility={{ pronounEnglish: false }} data={data} />
    </Flex>
  );
}
