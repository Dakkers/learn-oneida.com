"use client";
import { Flex, Text } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import { singlePronouns } from "@ukwehuwehneke/language-components";
import { LinkWrapper } from "../LinkWrapper";
import { Letter } from "../Letter";

const data = createParadigmData(
  {
    translation: "About {{pronounObjective}}",
    type: "PLB",
    phrases: [
      { breakdown: [["ak"], "lihwá·ke"] },
      { breakdown: [["sa"], "lihwá·ke"] },
      { breakdown: [["lao"], "lihwá·ke"] },
      { breakdown: [["ako"], "lihwá·ke"] },
      { breakdown: [["ao"], "lihwá·ke"] },
      { breakdown: [["laoti"], "lihwá·ke"] },
      { breakdown: [["aoti"], "lihwá·ke"] },
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
]
  .map(TableWrapper.mapEnglishAndTranslation)
  .map((row, i) => ({
    ...row,
    audioFile: `module02/about_examples/${i + 1}.mp3`,
  }));

export function AboutSomeoneArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="about-someone" level={level}>
        About Someone
      </SectionHeading>
      <Text>
        Note: The website author is unsure of the derivation of this word but it
        looks like it is comprised of the root word <Letter>-lihw-</Letter>{" "}
        which means "issue", a joiner vowel "a", and the suffix{" "}
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
        data={examplesList}
      />
    </Flex>
  );
}
