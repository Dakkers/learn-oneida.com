import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { SectionHeading, SectionHeadingProps } from "../SectionHeading";
import { ResourceProps } from "./utils";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import { singlePronouns } from "~/utils";

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
  [...singlePronouns, "ms", "fs"]
);

const examplesList = [
  ["Do you know anything about me?", "Sanúhteʔ kʌ náhteʔ ní· aklihwá·ke"],
  [
    "Tell me a little bit about yourself.",
    "Takhló·li ostúha ni·isé· salihwá·ke",
  ],
  ["What do you know about David?", "Náhteʔ né· sanúhteʔ Tá·wit laolihwá·ke"],
  ["Who is this about?", "Úhkaʔ náhteʔ né· akolihwá·ke kaʔí·kʌ"],
  ["What's this about?", "Náhteʔ aolihwá·ke kaʔi·kʌ ̲"],
  [
    "I don't like anything about them.",
    "Yáh náhteʔ né· teʔknú·wehseʔ lonulhá· laotilihwá·ke",
  ],
].map(TableWrapper.mapEnglishOneida);

export function AboutSomeoneResource({ level = 1 }: ResourceProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="about-someone" level={level}>
        Last Names
      </SectionHeading>
      <ParadigmTable data={data} />

      <SectionHeading
        id="about-someone-examples"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Examples
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={examplesList}
      />
    </Flex>
  );
}
