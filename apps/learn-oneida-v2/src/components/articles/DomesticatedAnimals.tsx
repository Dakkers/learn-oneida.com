"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { TableWrapper } from "@/components/TableWrapper";
import { List } from "@ukwehuwehneke/ohutsya";

export function DomesticatedAnimalsArticle({ level = 1 }: { level?: 1 | 2 }) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="domesticated-animals" level={level}>
        Domesticated Animals
      </SectionHeading>

      <Text>
        A <b>kanáskwaʔ</b> is a domesticated animal. The root word is{" "}
        <b>naskw</b>.
      </Text>

      <TableWrapper
        columns={[
          { accessorKey: "en", header: "English" },
          {
            accessorKey: "one",
            cell: TableWrapper.textArrayCellBold,
            header: "Oneida",
          },
        ]}
        data={[
          ["dog", "é·lhal"],
          ["cat", "takó·s"],
          ["goat", "kayaʔtáklahseʔ"],
          ["sheep", "síksik"],
          ["chicken", "kítkit"],
          ["pig", "kóskos"],
          ["cow", "tyonhúhskwalut"],
          ["horse", "kohsa·tʌ́s"],
        ].map(([en, one]) => ({ en, one }))}
      />

      <Text>
        <b>othóskaʔ</b> is a word to indicate the animal is a baby.
      </Text>

      <TableWrapper
        columns={[
          { accessorKey: "en", header: "English" },
          {
            accessorKey: "one",
            cell: TableWrapper.textArrayCellBold,
            header: "Oneida",
          },
        ]}
        data={[
          ["puppy", "é·lhal othóskaʔ"],
          ["kitten", "takó·s othóskaʔ"],
          ["kid", "kayaʔtáklahseʔ othóskaʔ"],
          ["lamb", "síksik othóskaʔ"],
          ["chick", "kítkit othóskaʔ"],
          ["piglet", "kóskos othóskaʔ"],
          ["calf", "tyonhúhskwalut othóskaʔ"],
          ["foal", "kohsa·tʌ́s othóskaʔ"],
        ].map(([en, one]) => ({ en, one }))}
      />
    </Flex>
  );
}
