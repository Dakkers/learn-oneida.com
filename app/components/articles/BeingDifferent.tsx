import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { SectionHeading } from "../SectionHeading";
import { ArticleProps } from "./utils";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import { dualicPronouns, pluralPronouns } from "~/utils";
import { Text } from "@/design/components/text";

const data = createParadigmData(
  {
    translation: "{{pronoun}} are different",
    type: "PR",
    phrases: [
      {
        breakdown: ["te", { text: "ty" }, { text: "at", type: "SRFL" }, "tíhʌ"],
      },
      {
        breakdown: [
          "te",
          { text: "yaky" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: [
          "te",
          { text: "tsy" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: ["te", { text: "hy" }, { text: "at", type: "SRFL" }, "tíhʌ"],
      },
      {
        breakdown: ["te", { text: "ky" }, { text: "at", type: "SRFL" }, "tíhʌ"],
      },
      {
        breakdown: ["te", { text: "tw" }, { text: "at", type: "SRFL" }, "tíhʌ"],
      },
      {
        breakdown: [
          "te",
          { text: "yakw" },
          { text: "at", type: "SRFL" },
          "tíhʌ",
        ],
      },
      {
        breakdown: ["te", { text: "sw" }, { text: "at", type: "SRFL" }, "tíhʌ"],
      },
      {
        breakdown: ["te", { text: "hu" }, { text: "at", type: "SRFL" }, "tíhʌ"],
      },
      {
        breakdown: ["te", { text: "ku" }, { text: "at", type: "SRFL" }, "tíhʌ"],
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
      <ParadigmTable data={data} />
    </Flex>
  );
}
