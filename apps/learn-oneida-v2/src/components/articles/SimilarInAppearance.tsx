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
    translation: "{{pronoun}} look alike",
    type: "PR",
    phrases: [
      {
        breakdown: [
          "tetsi",
          { text: "ty" },
          { text: "at", type: "SRFL" },
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          "tets",
          { text: "yaky" },
          { text: "at", type: "SRFL" },
          "yelʌ́",
        ],
      },
      {
        breakdown: ["tetsi", ["tsy"], { text: "at", type: "SRFL" }, "yelʌ́"],
      },
      {
        breakdown: [
          "tes",
          { text: "hy" },
          { text: "at", type: "SRFL" },
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          "tes",
          { text: "ky" },
          { text: "at", type: "SRFL" },
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          "tetsi",
          { text: "tw" },
          { text: "at", type: "SRFL" },
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          "tets",
          { text: "yakw" },
          { text: "at", type: "SRFL" },
          "yelʌ́",
        ],
      },
      {
        breakdown: ["tetsi", ["sw"], { text: "at", type: "SRFL" }, "yelʌ́"],
      },
      {
        breakdown: ["tes", { text: "hu" }, { text: "t", type: "SRFL" }, "yelʌ́"],
      },
      {
        breakdown: ["tes", { text: "ku" }, { text: "t", type: "SRFL" }, "yelʌ́"],
      },
    ],
  },
  [...dualicPronouns, ...pluralPronouns],
);

export function SimilarInAppearanceArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="similar-in-appearance" level={level}>
        Similar in Appearance
      </SectionHeading>
      <Text>These words make use of the semi-reflexive feature.</Text>
      <ParadigmTable
        audioFolder="module02/look_alike"
        columnVisibility={{ pronounEnglish: false }}
        data={data}
      />
    </Flex>
  );
}
