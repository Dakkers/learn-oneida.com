"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";
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
        breakdown: [
          ["te", "DUAL"],
          { text: "ty" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          { text: "yaky" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          { text: "tsy" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          { text: "hy" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          { text: "ky" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          { text: "tw" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          { text: "yakw" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          { text: "sw" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          { text: "hu" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          { text: "ku" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
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
      <ParadigmTable columnVisibility={{ pronounEnglish: false }} data={data} />
    </Flex>
  );
}
