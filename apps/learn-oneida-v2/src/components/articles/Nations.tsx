"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import {
  type Pronoun,
  SectionHeading,
} from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";

const allowedPronouns: Pronoun[] = ["i", "u", "m", "f"];

const NATIONS_LIST = [
  {
    en: "Mohawk",
    translation: "Kanyʌʔkeha·ká·",
    literal: "flint",
    key: "mohawk",
  },
  {
    en: "Oneida",
    translation: "Onʌyoʔteʔa·ká·",
    literal: "standing stone",
    key: "oneida",
  },
  {
    en: "Onondaga",
    translation: "Onutaʔkeha·ká·",
    literal: "hills",
    key: "onondaga",
  },
  {
    en: "Cayuga",
    translation: "Kayukeʔa·ká·",
    literal: "great swamp / pipe",
    key: "cayuga",
  },
  {
    en: "Seneca",
    translation: "Tsiʔtwanaʔa·ká·",
    literal: "great hill / mountain",
    key: "seneca",
  },
  {
    en: "Tuscarora",
    translation: "Taskaló·lu",
    literal: "hemp / shirt",
    key: "tuscarora",
  },
  {
    en: "Ojibway",
    translation: "Latitwaʔkánhaʔ",
    literal: "(unknown)",
    key: "ojibway",
  },
  {
    en: "Algonquin",
    translation: "Latilu·táks",
    literal: "They eat trees",
    key: "algonquin",
  },
  {
    en: "Cree",
    translation: "Kalhakuhlonú",
    literal: "People of the forest (?)",
    key: "cree",
  },
  {
    en: "Huron",
    translation: "Thotinutáthe",
    literal: "They're making buttermilk",
    key: "huron",
  },
  {
    en: "Inuit",
    translation: "Otholeʔkehlo·nú",
    literal: "People of the north",
    key: "inuit",
  },
  {
    en: "American",
    translation: "Ostohlonuʔkeha·ká",
    literal: "(unknown)",
    key: "american",
  },
  {
    en: "French-Canadian",
    translation: "Walé·lu",
    literal: "(unknown)",
    key: "french-canadian",
  },
];

const dataNations = createParadigmData(
  {
    phrases: [
      {
        breakdown: [`Onʌyoʔteʔa·ká· ni`, { text: "wak" }, "uhutsyó·tʌ̲ʔ"],
      },
      {
        breakdown: [`Onʌyoʔteʔa·ká· ni`, ["s"], "uhutsyó·tʌ̲ʔ"],
      },
      {
        breakdown: [`Onʌyoʔteʔa·ká· ni`, { text: "ha" }, "uhutsyó·tʌ̲ʔ"],
      },
      {
        breakdown: [`Onʌyoʔteʔa·ká· ni`, { text: "yaka" }, "uhutsyó·tʌ̲ʔ"],
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
          ...TableWrapper.columnsEnglishTranslation,
          {
            accessorKey: "literal",
            header: "Literal translation",
          },
        ]}
        data={NATIONS_LIST}
      />
      <Text>Here are a couple examples that you can use in sentences:</Text>
      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={{ pronounEnglish: false }}
        data={dataNations}
      />
    </Flex>
  );
}
