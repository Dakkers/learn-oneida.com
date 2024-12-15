"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  SectionHeading,
  SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";

const data = createParadigmData(
  {
    translation: "{{pronounPossessive}} last name",
    type: "PR",
    phrases: [
      { breakdown: [["te", "DUAL"], { text: "k" }, "hsʌná·se·le̲ʔ"] },
      { breakdown: [["te", "DUAL"], { text: "ts" }, "ʌná·se·le̲ʔ"] },
      { breakdown: [["te", "DUAL"], { text: "ha" }, "hsʌná·se·le̲ʔ"] },
      { breakdown: [["te", "DUAL"], { text: "ye" }, "hsʌná·se·le̲ʔ"] },
      { breakdown: [["te", "DUAL"], { text: "hati" }, "hsʌná·se·le̲ʔ"] },
    ],
  },
  ["i", "u", "m", "f", "ms"],
);

const examplesList = [
  ["Is Smith your last name?", "Smith kʌ́ tetsʌná·se·le̲ʔ"],
  ["Smith is not my last name", "Yáh Smith thaʔtekhsʌná·se·le̲ʔ"],
  ["Jackson is 50 Cent's last name", "Jackson né· tehahsʌná·seleʔ 50 Cent"],
  ["Knowles is Beyonce's last name", "Knowles né· teyehsʌná·seleʔ Beyonce"],
  [
    "McCartney, Lennon, Harrison and Starr are the last names of the Beatles",
    "McCartney, Lennon, Harrison kháleʔ Starr né· tehatihsʌná·seleʔ Beatles",
  ],
].map(TableWrapper.mapEnglishAndTranslation);

export function LastNamesArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="last-names" level={level}>
        Last Names
      </SectionHeading>
      <ParadigmTable columnVisibility={{ pronounEnglish: false }} data={data} />

      <SectionHeading
        id="last-names-examples"
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
