"use client";
import { Text } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { TableWrapper } from "@/components/TableWrapper";
import { Flex } from "@ukwehuwehneke/ohutsya";
import {
  ParadigmData,
  ParadigmTable,
  createParadigmData,
} from "../ParadigmTable";
import { ArticleProps } from "./utils";
import { type Pronoun } from "~/utils";

const allowedPronouns: Pronoun[] = [
  "i",
  "u",
  "m",
  "f",
  "uni",
  "u2",
  "us",
  "yall",
  "ms",
  "fs",
];

const dataTurtles = magicThing({
  phrases: createPhrasesLol("aʔnó·wál"),
  translation: "{{pronoun}} {{refVerb}} Turtle Clan",
});
const dataBears = magicThing({
  phrases: createPhrasesLol("ohkwa·lí"),
  translation: "{{pronoun}} {{refVerb}} Bear Clan",
});
const dataWolves = magicThing({
  phrases: createPhrasesLol("othayu·ní"),
  translation: "{{pronoun}} {{refVerb}} Wolf Clan",
});

export function ClansArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="clans" level={level}>
        Clans
      </SectionHeading>
      <Text>
        Here, you can learn about clan animals and how to say someone is from a
        clan. The clans in Oneida are: bear, turtle, and wolf.
      </Text>
      <SectionHeading level={(level + 1) as SectionHeadingProps["level"]}>
        Clan Animals
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={[
          ["bear", "ohkwa·lí̲"],
          ["beaver", "tsyoní·tuʔ"],
          ["deer", "oskʌnu·tú·"],
          ["eel", "tawelú·ko"],
          ["hawk", "kalhakúha̲"],
          ["heron", "ohá·kwalut"],
          ["snipe", "tawístawiʔ"],
          ["turtle", "aʔno·wál"],
          ["wolf", "othayu·ní̲"],
        ].map(([en, translation]) => ({ en, translation }))}
      />
      <SectionHeading level={(level + 1) as SectionHeadingProps["level"]}>
        Phrases
      </SectionHeading>
      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={{ pronounEnglish: false }}
        data={dataBears}
      />
      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={{ pronounEnglish: false }}
        data={dataTurtles}
      />
      <ParadigmTable
        allowedPronouns={allowedPronouns}
        columnVisibility={{ pronounEnglish: false }}
        data={dataWolves}
      />
    </Flex>
  );
}

function createPhrasesLol(animal: string) {
  return [
    {
      breakdown: [`${animal} ni`, { text: "waki" }, "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, { text: "sʌ" }, "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, ["ho"], "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, { text: "yako" }, "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, ["yukni"], "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, ["sni"], "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, { text: "yukwʌ" }, "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, { text: "swʌ" }, "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, { text: "hoti" }, "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, { text: "yoti" }, "ʔtaló·tʌʔ"],
    },
  ];
}

function magicThing(data: any): ParadigmData {
  const result = createParadigmData(data, allowedPronouns);
  result.type = "PB";
  return result;
}
