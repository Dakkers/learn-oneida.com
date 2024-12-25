"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import {
  dualicPronouns,
  pluralPronouns,
} from "@ukwehuwehneke/language-components";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Letter } from "../Letter";
import { LinkWrapper } from "../LinkWrapper";

const data = createParadigmData(
  {
    translation: "{{pronoun}} look alike",
    type: "PR",
    phrases: [
      {
        breakdown: [
          ["te", "DUAL"],
          ["tsi", "REP"],
          ["ty"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["ts", "REP"],
          ["yaky"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["tsi", "REP"],
          ["tsy"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["s", "REP"],
          ["hy"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["s", "REP"],
          ["ky"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["tsi", "REP"],
          ["tw"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["ts", "REP"],
          ["yakw"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["tsi", "REP"],
          ["sw"],
          ["at", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["s", "REP"],
          ["hu"],
          ["t", "SRFL"],
          "yelʌ́",
        ],
      },
      {
        breakdown: [
          ["te", "DUAL"],
          ["s", "REP"],
          ["ku"],
          ["t", "SRFL"],
          "yelʌ́",
        ],
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
      <Text>
        The root word is <Letter>-yelutal-</Letter> with the dualic feature and
        the <LinkWrapper page="rep" />.
      </Text>
      <ParadigmTable
        audioFolder="module02/look_alike"
        columnVisibility={{ pronounEnglish: false }}
        data={data}
      />
    </Flex>
  );
}
