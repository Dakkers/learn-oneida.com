import { Text } from "@/design/components/text";
import { SectionHeading } from "../SectionHeading";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Flex } from "@/design/components/flex";
import {
  ParadigmData,
  ParadigmTable,
  createParadigmData,
} from "../ParadigmTable";
import _ from "lodash";

const allowedPronouns = [
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

export function ClansResource({ level = 1 }: { level?: 1 | 2 }) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={level}>Clans</SectionHeading>
      <Text>
        Here, you can learn about clan animals and how to say someone is from a
        clan. The clans in Oneida are: bear, turtle, and wolf.
      </Text>
      <SectionHeading level={level + 1}>Clan Animals</SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={[
          ["bear", "ohkwa·líˍ"],
          ["beaver", "tsyoní·tuʔ"],
          ["deer", "oskʌnu·tú·"],
          ["eel", "tawelú·ko"],
          ["hawk", "kalhakúha̲"],
          ["heron", "ohá·kwalut"],
          ["snipe", "tawístawiʔ"],
          ["turtle", "aʔno·wál"],
          ["wolf", "othayu·níˍ"],
        ].map(([en, on]) => ({ en, on }))}
      />
      <SectionHeading level={level + 1}>Phrases</SectionHeading>
      <ParadigmTable allowedPronouns={allowedPronouns} data={dataBears} />
      <ParadigmTable allowedPronouns={allowedPronouns} data={dataTurtles} />
      <ParadigmTable allowedPronouns={allowedPronouns} data={dataWolves} />
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
      breakdown: [`${animal} ni`, { text: "ho" }, "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, { text: "yako" }, "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, { text: "yukni" }, "ʔtaló·tʌʔ"],
    },
    {
      breakdown: [`${animal} ni`, { text: "sni" }, "ʔtaló·tʌʔ"],
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
