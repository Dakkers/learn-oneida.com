import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { SectionHeading } from "../SectionHeading";
import { ArticleProps } from "./utils";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import { dualicPronouns, pluralPronouns } from "~/utils";
import { Text } from "@/design/components/text";

const data = createParadigmData(
  {
    translation: "{{pronoun}} look alike",
    type: "PLB",
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
        breakdown: [
          "tetsi",
          { text: "tsy" },
          { text: "at", type: "SRFL" },
          "yelʌ́",
        ],
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
        breakdown: [
          "tetsi",
          { text: "sw" },
          { text: "at", type: "SRFL" },
          "yelʌ́",
        ],
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
      <ParadigmTable data={data} />
    </Flex>
  );
}
