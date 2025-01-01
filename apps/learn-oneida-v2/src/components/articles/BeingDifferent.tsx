"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { ParadigmTable } from "../ParadigmTable";
import { Text } from "@ukwehuwehneke/ohutsya";
import data from "~/data/module02/different";

export function BeingDifferentArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="being-different" level={level}>
        Being Different
      </SectionHeading>
      <Text>These words make use of the semi-reflexive feature.</Text>
      <ParadigmTable columnVisibility={{ pronounEnglish: false }} data={data} />
    </Flex>
  );
}
