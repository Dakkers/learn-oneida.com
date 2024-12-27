"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import {
  dualicPronouns,
  pluralPronouns,
} from "@ukwehuwehneke/language-components";
import { Text } from "@ukwehuwehneke/ohutsya";

const data = createParadigmData(
  {
    translation: "{{pronoun}} are different",
    type: "PR",
    phrases: [
      {
        breakdown: [["te", "DUAL"], ["ty"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["yaky"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["tsy"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["hy"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["ky"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["tw"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["yakw"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["sw"], ["at", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["hu"], ["t", "SRFL"], "tíhʌ"],
      },
      {
        breakdown: [["te", "DUAL"], ["ku"], ["t", "SRFL"], "tíhʌ"],
      },
    ],
  },
  [...dualicPronouns, ...pluralPronouns],
);

export function BeingDifferentArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="being-different" level={level}>
        Being Different
      </SectionHeading>
      <Text>These words make use of the semi-reflexive feature.</Text>
      <ParadigmTable
        audioFolder="module02/being_different"
        columnVisibility={{ pronounEnglish: false }}
        data={data}
      />
    </Flex>
  );
}
