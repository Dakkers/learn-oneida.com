import { Flex } from "@/design/components/flex";
import { Text } from "@/design/components/text";
import { SectionHeading } from "../SectionHeading";
import { TableWrapper } from "@/design/components/tableWrapper";
import { List } from "@/design/components/list";

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
          ["two human beings", ["te", { text: "y" }, "ukwe·tákeʔ"]],
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
            ["te", { text: "hni" }, "yáhse"],
            ["te", { text: "kni" }, "yáhse"],
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
          ["three girls", "áhsʌ nikutí kutikhsa’shúha"],
          ["two young men", "tehniyáhse tehninikʌhtlúha"],
          ["one young woman", "tsyeyá·tat yeyá·tase"],
          ["three adults", "áhsʌ nihatí lʌnukwé·"],
          ["two older women", "tehniyáhse yotikhstʌ́ha"],
        ].map(([left, right], i) => (
          <List.Item key={i}>
            {left} — <b>{right}</b>
          </List.Item>
        ))}
      </List>
    </Flex>
  );
}
