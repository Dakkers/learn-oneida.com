import type { MetaFunction } from "@remix-run/node";
import React from "react";
import dataIsHere from "../data/data-ese-is-here.json";
import dataWasHere from "../data/module04/was-here";
import dataWillBeHere from "../data/module04/will-be-here";
import dataMightBeHere from "../data/module04/might-be-here";
import { Text } from "@/design/components/text";
import { ParadigmData, ParadigmTable } from "~/components/ParadigmTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/design/primitives/accordion";
import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Flex } from "@/design/components/flex";
import { SectionHeading } from "~/components/SectionHeading";
import { Box } from "@/design/components/box";
import { Notice } from "@/design/components/notice";
import { TableWrapper } from "@/design/components/tableWrapper";
import {
  characterTenseData,
  bodyTenseData,
  physicalTenseData,
  miscTenseData,
  mindTenseData,
  emotionTenseData,
} from "~/data/module05";
import { TextBreakdown } from "~/components/TextBreakdown";
import _ from "lodash";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 5" },
    { name: "description", content: "Module 5 of the Oneida curriculum" },
  ];
};

export default function LearnModule05() {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>Module 5</SectionHeading>

      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>

      <TOC>
        <TOC.Item label="Stative verbs" value="stative-verbs">
          <TOC.Section>
            <TOC.Item
              label="How stative verbs are constructed"
              value="how-stative-verbs-are-constructed"
            />
            <TOC.Item
              label="Stative verb examples"
              value="stative-verb-examples"
            />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Verbs — Character" value="verbs-character" />
        <TOC.Item label="Verbs — Mind" value="verbs-mind" />
        <TOC.Item label="Verbs — Emotions" value="verbs-emotions" />
        <TOC.Item label="Verbs — Body" value="verbs-body" />
        <TOC.Item label="Verbs — Physical" value="verbs-physical" />
        <TOC.Item label="Verbs — Misc" value="verbs-misc" />
      </TOC>

      <SectionHeading id="stative-verbs" level={2}>
        Stative Verbs
      </SectionHeading>

      <SectionHeading id="how-stative-verbs-are-constructed" level={3}>
        How Stative Verbs Are Constructed
      </SectionHeading>

      <StativeVerbExamples />

      <VerbSection data={characterTenseData} title="Character" />
      <VerbSection data={mindTenseData} title="Mind" />
      <VerbSection data={emotionTenseData} title="Emotions" />
      <VerbSection data={bodyTenseData} title="Body" />
      <VerbSection data={physicalTenseData} title="Physical" />
      <VerbSection data={miscTenseData} title="Misc" />
    </Flex>
  );
}

const FUT = { text: "ʌ", type: "FUT" };
const IFUT = { text: "a", type: "IFUT" };

function StativeVerbExamples() {
  const data = [
    {
      breakdown: ["kʌʔ ", { text: "i·", type: "RPL" }, { text: "k" }, "é·seʔ"],
      en: "I am here",
      type: "Present",
    },
    {
      breakdown: [{ text: "ku", type: "PP" }, "nolúkhwa̲ʔ"],
      en: "I love you",
      type: "",
    },
    {
      breakdown: dataWasHere.phrases[0].breakdown,
      en: "I was here",
      type: "Past",
    },
    {
      breakdown: [
        { text: "ku", type: "PP" },
        "nolúkhwa",
        { text: "hkweʔ", type: "PAST" },
      ],
      en: "I used to love you",
      type: "",
    },
    {
      breakdown: dataWillBeHere.phrases[0].breakdown,
      en: "I will be here",
      type: "Future",
    },
    {
      breakdown: [
        FUT,
        { text: "ku", type: "PP" },
        "nolúkhw",
        { text: "akeʔ", type: "FUT" },
      ],
      en: "I will love you",
      type: "",
    },
    {
      breakdown: dataMightBeHere.phrases[0].breakdown,
      en: "I might be here",
      type: "Conditional",
    },
    {
      breakdown: [
        IFUT,
        { text: "ku", type: "PP" },
        "nolúkhw",
        { text: "akeʔ", type: "IFUT" },
      ],
      en: "I might love you",
      type: "",
    },
    {
      breakdown: ["kʌʔ ", { text: "s" }, "éhs", { text: "ek", type: "FUT" }],
      en: "Stay here!",
      type: "Command",
    },
    {
      breakdown: [
        { text: "tak", type: "PP" },
        "nolúkhw",
        { text: "ak", type: "IFUT" },
      ],
      en: "Love me!",
      type: "",
    },
    { breakdown: ["oh ni·yót"], en: "How (is it)?", type: "Present" },
    { breakdown: ["tsiʔ ni·yót"], en: "How (it is)", type: "" },
    { breakdown: ["tho ni·yót"], en: "That is how (it is)", type: "" },
    { breakdown: ["kʌʔ ni·yót"], en: "This is how (it is)", type: "" },

    {
      breakdown: ["oh niyoht", { text: "ú·ne̲ʔ̲", type: "PAST" }],
      en: "How (was it)?",
      type: "Past",
    },
    {
      breakdown: ["tsiʔ niyoht", { text: "ú·ne̲ʔ̲", type: "PAST" }],
      en: "How (it was)",
      type: "",
    },
    {
      breakdown: ["tho niyoht", { text: "ú·ne̲ʔ̲", type: "PAST" }],
      en: "That is how (it was)",
      type: "",
    },
    {
      breakdown: ["kʌʔ niyoht", { text: "ú·ne̲ʔ̲", type: "PAST" }],
      en: "This is how (it was)",
      type: "",
    },

    {
      breakdown: ["oh n", FUT, "yoht", { text: "úhake̲ʔ̲", type: "FUT" }],
      en: "How (will it be)?",
      type: "Future",
    },
    {
      breakdown: ["tsiʔ n", FUT, "yoht", { text: "úhake̲ʔ̲", type: "FUT" }],
      en: "How (it will be)",
      type: "",
    },
    {
      breakdown: ["tho n", FUT, "yoht", { text: "úhake̲ʔ̲", type: "FUT" }],
      en: "That is how (it will be)",
      type: "",
    },
    {
      breakdown: ["kʌʔ n", FUT, "yoht", { text: "úhake̲ʔ̲", type: "FUT" }],
      en: "This is how (it will be)",
      type: "",
    },

    {
      breakdown: ["oh n", IFUT, "yoht", "úhake̲ʔ̲"],
      en: "How (would it be)?",
      type: "Conditional",
    },
    {
      breakdown: ["tsiʔ n", IFUT, "yoht", "úhake̲ʔ̲"],
      en: "How (it would be)",
      type: "",
    },
    {
      breakdown: ["tho n", IFUT, "yoht", "úhake̲ʔ̲"],
      en: "That is how (it would be)",
      type: "",
    },
    {
      breakdown: ["kʌʔ n", IFUT, "yoht", "úhake̲ʔ̲"],
      en: "This is how (it would be)",
      type: "",
    },

    {
      breakdown: ["oh nayoht", { text: "úhakʔ", type: "FUT" }],
      en: "How (would it be)?",
      type: "Command",
    },
    {
      breakdown: ["tsiʔ nayoht", { text: "úhakʔ", type: "FUT" }],
      en: "How (it would be)",
      type: "",
    },
    {
      breakdown: ["tho nayoht", { text: "úhakʔ", type: "FUT" }],
      en: "Let it be how (it would be)",
      type: "",
    },
    {
      breakdown: ["kʌʔ nayoht", { text: "úhakʔ", type: "FUT" }],
      en: "This is how (it would be)",
      type: "",
    },

    { breakdown: ["ikʌ́"], en: "(it) is", type: "Present" },
    {
      breakdown: ["kʌ·", { text: "hné·", type: "PAST" }],
      en: "(it) was",
      type: "Past",
    },
    {
      breakdown: [FUT, "kʌ́", { text: "hakeʔ", type: "FUT" }],
      en: "(it) is",
      type: "Future",
    },
    {
      breakdown: [IFUT, "ikʌ́", { text: "hakeʔ", type: "IFUT" }],
      en: "(it) is",
      type: "Conditional",
    },
    {
      breakdown: ["kʌ́", { text: "hak", type: "FUT" }],
      en: "(it) is",
      type: "Command",
    },
  ];

  return (
    <>
      <SectionHeading id="stative-verb-examples" level={3}>
        Stative Verb Examples
      </SectionHeading>

      <TableWrapper
        columns={[
          { accessorKey: "type", header: "" },
          TableWrapper.createTextBreakdownColumn("PR", { header: "" }),
          TableWrapper.englishColumn,
        ]}
        data={data}
      />
    </>
  );
}

function VerbSection({ data, title }) {
  return (
    <>
      <SectionHeading id={`verbs-${title.toLowerCase()}`} level={2}>
        Verbs — {title}
      </SectionHeading>
      {data.map((d) => (
        <VerbSectionThingy {...d} typeFallback={d.type ?? "PB"} />
      ))}
    </>
  );
}

function VerbSectionThingy({
  dict,
  id,
  root,
  stem,
  en,
  typeFallback,
  fut,
  past,
  present,
  ifut,
  cmd,
}: {}) {
  const dictionaryLabel = dict.length > 1 ? "pages" : "page";
  return (
    <Flex direction="column" gap={2}>
      <SectionHeading id={id} level={3}>
        {en}
      </SectionHeading>
      <Text></Text>

      <TableWrapper
        columns={[
          { accessorKey: "type", header: "" },
          {
            accessorKey: "breakdown",
            cell: (value) => (
              <TheCell typeFallback={typeFallback} value={value} />
            ),
            header: "",
          },
        ]}
        data={[
          ["Present", present],
          ["Past", past],
          ["Future", fut],
          ["Conditional", ifut],
          ["Command", cmd],
        ].map(([type, breakdown], i) => ({
          breakdown: createBreakdown(breakdown, i),
          type,
        }))}
      />
    </Flex>
  );
}

function TheCell({ typeFallback, value }) {
  if (_.isPlainObject(value)) {
    const items = value.items ?? [value];
    return (
      <Flex direction="column" gap={4}>
        {items.map((item) => (
          <Flex direction="column" gap={1}>
            <TextBreakdown breakdown={item.on} typeFallback={typeFallback} />
            <Text variant="bodyS">{item.en}</Text>
          </Flex>
        ))}
      </Flex>
    );
  }

  return <TextBreakdown breakdown={value} typeFallback={typeFallback} />;
}

function createBreakdown(stuff: any, type: number) {
  if (Array.isArray(stuff)) {
    return createBreakdownHelper(stuff, type);
  } else if (stuff.items) {
    return {
      items: stuff.items.map((item) => ({
        on: createBreakdownHelper(item.on, type),
        en: item.en,
      })),
    };
  } else {
    return {
      on: createBreakdownHelper(stuff.on, type),
      en: stuff.en,
    };
  }
}

const PRONOMINALS = [
  "·uk", // ???
  "·ukw",
  "hs",
  "k",
  "s",
  "sa",
  "sʌ",
  "ts",
  "tsy",
  "wak",
  "wák",
  "yuky",
];

const FUTURE_TENSE_ENDINGS = [
  "ak",
  "ák",
  "akeʔ",
  "ákeʔ",
  "éhk",
  "ek",
  "ék",
  "éke",
  "ekeʔ",
  "ékeʔ",
  "hak",
  "hakeʔ",
  "hek",
  "hekeʔ",
  "sekeʔ",
  "sek",
];

const PAST_TENSE_ENDINGS = [
  "hkweʔ",
  "hne·",
  "hné·",
  "hné",
  "ke",
  "kweʔ",
  "né·",
  "u·né·",
  "ú·ne·",
  "ú·ne",
  "ú·neʔ",
  "u·neʔ",
  "úne·",
  "·neʔ", // Weird one
];

function createBreakdownHelper(stuff: string[], type: number) {
  const result = stuff.slice();

  for (let i = 0; i < result.length; i++) {
    const text = result[i];
    if (PRONOMINALS.includes(text)) {
      result[i] = { text };
    } else if (FUTURE_TENSE_ENDINGS.includes(text) && i === result.length - 1) {
      result[i] = { text, type: "FUT" };
    } else if (["a", "ʌ", "u"].includes(text) && i <= 2) {
      result[i] = { text, type: "FUT" };
    } else if (PAST_TENSE_ENDINGS.includes(text) && i === result.length - 1) {
      result[i] = { text, type: "PAST" };
    } else if (
      ["e", "há", "á", "y"].includes(text) &&
      i !== 0 &&
      i !== result.length - 1
    ) {
      result[i] = { text, type: "EP" };
    }
  }
  return result;
}
