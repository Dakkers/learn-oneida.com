import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { SectionHeading } from "../SectionHeading";
import { ResourceProps } from "./utils";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";

const data = createParadigmData(
  {
    translation: "{{pronounPossessive}} last name",
    type: "PR",
    phrases: [
      { breakdown: ["te", { text: "k" }, "ʌná·se·le̲ʔ"] },
      { breakdown: ["te", { text: "ts" }, "hsʌná·se·le̲ʔ"] },
      { breakdown: ["te", { text: "ha" }, "hsʌná·se·le̲ʔ"] },
      { breakdown: ["te", { text: "ye" }, "hsʌná·se·le̲ʔ"] },
      { breakdown: ["te", { text: "hati" }, "hsʌná·se·le̲ʔ"] },
    ],
  },
  ["i", "u", "m", "f", "ms"]
);

const examplesList = [
  ["Is Smith your last name?", "Smith kʌ tetsʌná·se·leʔ"],
  ["Smith is not my last name", "Yah Smith thaʔtekhsʌná·se·leʔ"],
  ["Jackson is 50 Cent's last name", "Jackson né· tehahsʌná·sleʔ 50 Cent"],
  ["Knowles is Beyonce's last name", "Knowles né· teyehsʌná·sleʔ Beyonce"],
  [
    "McCartney, Lennon, Harrison & Starr are the last names of the Beatles",
    "McCartney, Lennon, Harrison & Starr né· tehatihsʌná·sleʔ Beatles",
  ],
].map(TableWrapper.mapEnglishOneida);

export function LastNamesResource({ level = 1 }: ResourceProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="last-names" level={level}>
        Last Names
      </SectionHeading>
      <ParadigmTable data={data} />

      <SectionHeading id="last-names-examples" level={level + 1}>
        Examples
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={examplesList}
      />
    </Flex>
  );
}
