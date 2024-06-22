"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import { SectionHeading } from "../SectionHeading";
import { ArticleProps } from "./utils";
import { Pronoun } from "~/utils";

const allowedPronouns: Pronoun[] = ["i", "u", "m", "f"];

const NATIONS_LIST = [
  {
    en: "Mohawk",
    on: "Kanyʌʔkeha·ká·",
    translation: "flint",
    key: "mohawk",
  },
  {
    en: "Oneida",
    on: "Onʌyoʔteʔa·ká·",
    translation: "standing stone",
    key: "oneida",
  },
  {
    en: "Onondaga",
    on: "Onutaʔkeha·ká·",
    translation: "hills",
    key: "onondaga",
  },
  {
    en: "Cayuga",
    on: "Kayukeʔa·ká·",
    translation: "great swamp / pipe",
    key: "cayuga",
  },
  {
    en: "Seneca",
    on: "Tsiʔtwanaʔa·ká·",
    translation: "great hill / mountain",
    key: "seneca",
  },
  {
    en: "Tuscarora",
    on: "Taskaló·lu",
    translation: "hemp / shirt",
    key: "tuscarora",
  },
  {
    en: "Ojibway",
    on: "Latitwaʔkánhaʔ",
    translation: "(unknown)",
    key: "ojibway",
  },
  {
    en: "Algonquin",
    on: "Latilu·táks",
    translation: "They eat trees",
    key: "algonquin",
  },
  {
    en: "Cree",
    on: "Kalhakuhlonú",
    translation: "People of the forest (?)",
    key: "cree",
  },
  {
    en: "Huron",
    on: "Thotinutáthe",
    translation: "They're making buttermilk",
    key: "huron",
  },
  {
    en: "Inuit",
    on: "Otholeʔkehlo·nú",
    translation: "People of the north",
    key: "inuit",
  },
  {
    en: "American",
    on: "Ostohlonuʔkeha·ká",
    translation: "(unknown)",
    key: "american",
  },
  {
    en: "French-Canadian",
    on: "Walé·lu",
    translation: "(unknown)",
    key: "french-canadian",
  },
];

const dataNations = createParadigmData(
  {
    phrases: [
      {
        breakdown: [`Onʌyoteʔa·ká· ni`, { text: "wak" }, "uhutsyó·tʌ̲ʔ"],
      },
      {
        breakdown: [`Onʌyoteʔa·ká· ni`, { text: "s" }, "uhutsyó·tʌ̲ʔ"],
      },
      {
        breakdown: [`Onʌyoteʔa·ká· ni`, { text: "ha" }, "uhutsyó·tʌ̲ʔ"],
      },
      {
        breakdown: [`Onʌyoteʔa·ká· ni`, { text: "yaka" }, "uhutsyó·tʌ̲ʔ"],
      },
    ],
    translation: "{{pronoun}} {{refVerb}} an Oneida",
    type: "PB",
  },
  allowedPronouns,
);

export function NationsArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="nations" level={level}>
        Nations
      </SectionHeading>
      <Text>
        Below is a list of nations and nationalities. These include nations part
        of the Haudenosaunee confederacy and others outside.
      </Text>
      <TableWrapper
        columns={[
          ...TableWrapper.columnsEnglishOneida,
          {
            accessorKey: "translation",
            header: "Literal translation",
          },
        ]}
        data={NATIONS_LIST}
      />
      <Text>Here are a couple examples that you can use in sentences:</Text>
      <ParadigmTable allowedPronouns={allowedPronouns} data={dataNations} />
    </Flex>
  );
}
