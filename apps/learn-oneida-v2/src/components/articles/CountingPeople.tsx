"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { TableWrapper } from "@/components/TableWrapper";
import { List } from "@ukwehuwehneke/ohutsya";

export function CountingPeopleArticle({ level = 1 }: { level?: 1 | 2 }) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="counting-people" level={level}>
        Counting People
      </SectionHeading>

      <TableWrapper
        columns={[
          { accessorKey: "en", header: "English" },
          // @ts-expect-error To be addressed in LO-12
          TableWrapper.createTextBreakdownColumn("PR"),
        ]}
        data={[
          ["one human being", ["ts", ["y"], "ukwe·tát"]],
          ["two human beings", [["te", "DUAL"], ["y"], "ukwe·tákeʔ"]],
          ["three human beings", ["áhsʌ ni", ["y"], "ukwe·tákeʔ"]],
          ["four human beings", ["kayé ni", ["y"], "ukwe·tákeʔ"]],
          ["five human beings", ["wísk ni", ["y"], "ukwe·tákeʔ"]],
        ].map(([en, breakdown]) => ({ en, breakdown }))}
      />

      <TableWrapper
        columns={[
          { accessorKey: "en", header: "English" },
          // @ts-expect-error To be addressed in LO-12
          TableWrapper.createTextBreakdownColumn("PR", {
            accessorKey: "male",
            header: "Male(s)",
          }),
          // @ts-expect-error To be addressed in LO-12
          TableWrapper.createTextBreakdownColumn("PR", {
            accessorKey: "female",
            header: "Female(s)",
          }),
        ]}
        data={[
          ["one", ["s", ["ha"], "yá·tat"], ["ts", ["ye"], "yá·tat"]],
          [
            "two",
            [["te", "DUAL"], ["hni"], "yáhse"],
            [["te", "DUAL"], ["kni"], "yáhse"],
          ],
          ["three", ["áhsʌ ni", ["hati"]], ["áhsʌ ni", ["hati"]]],
          ["four", ["kayé ni", ["hati"]], ["kayé ni", ["hati"]]],
          ["five", ["wísk ni", { text: "hati" }], ["wísk ni", ["hati"]]],
        ].map(([en, male, female]) => ({ en, male, female }))}
      />
      <Text>Some concrete examples:</Text>
      <List>
        {[
          ["one boy", "shayá·tat laksá·"],
          ["three girls", "áhsʌ nikutí kutikhsaʔshúha̲"],
          ["two young men", "tehniyáhse tehninikʌhtlúha̲"],
          ["one young woman", "tsyeyá·tat yeyá·taseha̲"],
          ["three adults", "áhsʌ nihatí lʌnukwé̲·"],
          ["two older women", "tehniyáhse yotikhstʌ́ha̲"],
        ].map(([left, right], i) => (
          <List.Item key={i}>
            {left} — <b>{right}</b>
          </List.Item>
        ))}
      </List>
    </Flex>
  );
}
