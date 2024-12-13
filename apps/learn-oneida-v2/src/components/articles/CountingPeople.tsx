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
          ["one human being", ["ts", { text: "y" }, "ukwe·tát"]],
          ["two human beings", [["te", "DUAL"], { text: "y" }, "ukwe·tákeʔ"]],
          ["three human beings", ["áhsʌ ni", { text: "y" }, "ukwe·tákeʔ"]],
          ["four human beings", ["kayé ni", { text: "y" }, "ukwe·tákeʔ"]],
          ["five human beings", ["wísk ni", { text: "y" }, "ukwe·tákeʔ"]],
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
          [
            "one",
            ["s", { text: "ha" }, "yá·tat"],
            ["ts", { text: "ye" }, "yá·tat"],
          ],
          [
            "two",
            [["te", "DUAL"], { text: "hni" }, "yáhse"],
            [["te", "DUAL"], { text: "kni" }, "yáhse"],
          ],
          [
            "three",
            ["áhsʌ ni", { text: "hati" }],
            ["áhsʌ ni", { text: "kuti" }],
          ],
          [
            "four",
            ["kayé ni", { text: "hati" }],
            ["kayé ni", { text: "kuti" }],
          ],
          [
            "five",
            ["wísk ni", { text: "hati" }],
            ["wísk ni", { text: "kuti" }],
          ],
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
