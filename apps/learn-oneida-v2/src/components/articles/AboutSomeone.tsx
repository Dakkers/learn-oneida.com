"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  SectionHeading,
  SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import { singlePronouns } from "@ukwehuwehneke/language-components";

const data = createParadigmData(
  {
    translation: "About {{pronoun}}",
    type: "PLB",
    phrases: [
      { breakdown: [{ text: "ak" }, "lihwá·ke̲"] },
      { breakdown: [{ text: "sa" }, "lihwá·ke̲"] },
      { breakdown: [{ text: "lao" }, "lihwá·ke̲"] },
      { breakdown: [{ text: "ako" }, "lihwá·ke̲"] },
      { breakdown: [{ text: "ao" }, "lihwá·ke̲"] },
      { breakdown: [{ text: "laoti" }, "lihwá·ke̲"] },
      { breakdown: [{ text: "aoti" }, "lihwá·ke̲"] },
    ],
  },
  [...singlePronouns, "ms", "fs"],
);

const examplesList = [
  ["Do you know anything about me?", "Sanúhteʔ kʌ́ náhteʔ ní· aklihwá·ke̲"],
  [
    "Tell me a little bit about yourself.",
    "Takhló·li ostúha ni·isé· salihwá·ke̲",
  ],
  ["What do you know about David?", "Náhteʔ né· sanúhteʔ Tá·wit laolihwá·ke̲"],
  ["Who is this about?", "Úhkaʔ náhteʔ né· akolihwá·ke kaʔí·kʌ̲"],
  ["What's this about?", "Náhteʔ aolihwá·ke kaʔi·kʌ̲"],
  [
    "I don't like anything about them.",
    "Yáh náhteʔ né· teʔknú·wehseʔ lonulhá· laotilihwá·ke̲",
  ],
].map(TableWrapper.mapEnglishAndTranslation);

export function AboutSomeoneArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="about-someone" level={level}>
        About Someone
      </SectionHeading>
      <ParadigmTable data={data} />

      <SectionHeading
        id="about-someone-examples"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Examples
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={examplesList}
      />
    </Flex>
  );
}
