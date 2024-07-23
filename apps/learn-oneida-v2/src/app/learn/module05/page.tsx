"use client";

import dataWasHere from "~/data/module04/was-here";
import dataWillBeHere from "~/data/module04/will-be-here";
import dataMightBeHere from "~/data/module04/might-be-here";
import { Text } from "@ukwehuwehneke/ohutsya";
import { ParadigmTable } from "~/components/ParadigmTable";
import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  BreakdownArray,
  BreakdownType,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import iheyuData from "~/data/iheyu";
import smallData from "~/data/module05/kʌʔ_ni-a";
import { HeightWeightArticle } from "~/components/articles/Weight";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";
import { ParticlesTable } from "~/components/articles/ParticlesTable";
import { Module5VerbDatum, createModule5VerbsList } from "~/data/module05";

const meta: any = () => {
  return [
    { title: "Module 5" },
    { name: "description", content: "Module 5 of the Oneida curriculum" },
  ];
};

export default function LearnModule05() {
  return (
    <>
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

        <TOC.Item label="Other Stative Verbs" value="other-stative-verbs" />
        <TOC.Item
          label="Irregular Stative Verbs"
          value="irregular-stative-verbs"
        />
        <TOC.Item
          label="Negating Stative Verbs"
          value="negating-stative-verbs"
        />

        <TOC.Item label="Height and Weight" value="height-weight" />
        <TOC.Item label="Stative Descriptions" value="stative-descriptions" />

        <TOC.Item label="Particles" value="particles" />
        <TOC.Item label="Translation exercises" value="translation-exercises" />
      </TOC>

      <SectionHeading id="stative-verbs" level={2}>
        Stative Verbs
      </SectionHeading>

      <SectionHeading id="how-stative-verbs-are-constructed" level={3}>
        How Stative Verbs Are Constructed
      </SectionHeading>
      <Text>Not yet available.</Text>

      <StativeVerbExamples />

      <VerbSection category="character" title="Character" />
      <VerbSection category="mind" title="Mind" />
      <VerbSection category="emotion" title="Emotions" />
      <VerbSection category="body" title="Body" />
      <VerbSection category="physical" title="Physical" />
      <VerbSection category="misc" title="Misc" />

      <OtherStativeVerbs />
      <IrregularStativeVerbsSection />
      <NegatingStativeVerbsSection />

      <HeightWeightArticle level={2} />
      <SectionHeading id="particles" level={2}>
        Particles
      </SectionHeading>
      <ParticlesTable group="module05" />
      <TranslationExercisesSection group="module05" />
    </>
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
          // @ts-expect-error To be addressed in LO-12
          TableWrapper.createTextBreakdownColumn("PR", { header: "" }),
          TableWrapper.englishColumn,
        ]}
        data={data}
      />
    </>
  );
}

function VerbSection({ category, title }: { category: string; title: string }) {
  const data = createModule5VerbsList().filter((d) => d.category === category);

  return (
    <>
      <SectionHeading id={`verbs-${title.toLowerCase()}`} level={2}>
        Verbs — {title}
      </SectionHeading>
      {data.map((d) => (
        <VerbSectionItem
          {...d}
          key={d.key}
          id=""
          typeFallback={d.type ?? "PB"}
        />
      ))}
    </>
  );
}

function VerbSectionItem({
  cmd,
  en,
  fut,
  id,
  ifut,
  past,
  prs: present,
  typeFallback,
}: Module5VerbDatum & {
  id: string;
  typeFallback?: BreakdownType;
}) {
  return (
    <Flex direction="column" gap={2}>
      <SectionHeading id={id} level={3}>
        {en}
      </SectionHeading>

      <TableWrapper
        columns={[
          { accessorKey: "type", header: "" },
          {
            accessorKey: "breakdown",
            // @ts-expect-error To be addressed in LO-12
            cell: (value: BreakdownArray) => (
              <TextBreakdown typeFallback={typeFallback} breakdown={value} />
            ),
            header: "",
          },
        ]}
        data={(
          [
            ["Present", present],
            ["Past", past],
            ["Future", fut],
            ["Conditional", ifut],
            ["Command", cmd],
          ] as const
        ).map(([type, datum]) => ({
          breakdown: datum.phrases.find(
            (p) => p.pronoun === (type === "Command" ? "u" : "i"),
          )!.breakdown,
          type,
        }))}
      />
    </Flex>
  );
}

function OtherStativeVerbs() {
  const data = [
    {
      en: "bad / poor condition",
      breakdown: [["w", "PR"], "ahétkʌʔ"],
      breakdownPast: [["w", "PR"], "ahétkʌ́·", { text: "ne·", type: "PAST" }],
    },

    {
      en: "be lonesome",
      breakdown: [{ text: "yaw" }, "ʌtúnyaʔt"],
      breakdownPast: [
        { text: "yaw" },
        "ʌtunyaʔt",
        { text: "ú·ne", type: "PAST" },
      ],
    },

    {
      en: "depressing, sad, troubled",
      breakdown: [["te", "DUAL"], ["yo"], "ʔnikuhlyá·ku"],
      breakdownPast: [["te", "DUAL"], ["yo"], "ʔnikuhlyaʔk", ["ú·neʔ", "PAST"]],
    },
    {
      en: "be pitiful",
      breakdown: [["yo"], "tʌ·láht"],
      breakdownPast: [["yo"], "tʌlat", ["hné·", "PAST"]],
    },
    {
      en: "sad, low spirits",
      breakdown: [["t", "CIS"], ["yo"], "ʔnikuhlʌ́·u"],
      breakdownPast: [["t", "CIS"], ["yo"], "ʔnikuhlʌ", ["u·ne", "PAST"]],
    },
    {
      en: "ashamed, embarrassed",
      breakdown: [["yo"], "téhat"],
      breakdownPast: [["yo"], "tehát", ["kwe", "PAST"]],
    },
    {
      en: "straighten out, mediate",
      breakdown: [["t", "CIS"], ["yo"], "lihwakwalíhsyu"],
      breakdownPast: [["t", "CIS"], ["yo"], "lihwakwalihsyú", ["hneʔ", "PAST"]],
    },
    {
      en: "it is good",
      breakdown: [["yo"], "yánleʔ"],
      breakdownPast: [["yo"], "yanlé", ["hkweʔ", "PAST"]],
    },
    {
      en: "funny, be amusing",
      breakdown: [["yo"], "ste·líst"],
      breakdownPast: [["yo"], "stelist", ["ú·neʔ", "PAST"]],
    },
    {
      en: "a cause for happiness",
      breakdown: [["yo"], "tshanúnyaʔt"],
      breakdownPast: [["yo"], "tshanunyá·t", ["a", "EP"], ["hkwe", "PAST"]],
    },
    {
      en: "pleasant, enjoyable",
      breakdown: [["ya"], "uʔwéskwaʔt"],
      breakdownPast: [["ya"], "uʔweskwaʔt", ["ú·neʔ", "PAST"]],
    },
    {
      en: "amusing, entertaining",
      breakdown: [["yo"], "ʔnikuhlólyaʔt"],
      breakdownPast: [["yo"], "ʔnikuhlolyá·t", ["a", "EP"], ["hkwe", "PAST"]],
    },
    {
      en: "interesting, pull the mind",
      breakdown: [["t", "CIS"], ["yo"], "ʔnikuhlati·lúteʔ"],
      breakdownPast: [
        ["t", "CIS"],
        ["yo"],
        "ʔnikuhlatilute",
        ["hkweʔ", "PAST"],
      ],
    },
    {
      en: "satisfying",
      breakdown: [["t", "CIS"], ["yo"], "ʔnikuhliyó"],
      breakdownPast: [["t", "CIS"], ["yo"], "ʔnikuhliyo", ["hné·", "PAST"]],
    },
    {
      en: "amazing, surprising, awesome",
      breakdown: [["yo"], "nehlákwaʔt"],
      breakdownPast: [["yo"], "nehlakwa·t", ["á", "EP"], ["hkwe", "PAST"]],
    },
    {
      en: "awful, mess(e.g.the weather)",
      breakdown: [["te", "DUAL"], ["yo"], "tanú·yanit"],
      breakdownPast: [
        "te",
        ["yo"],
        "tanuyani·t",
        ["á", "EP"],
        ["hkweʔ", "PAST"],
      ],
    },
    {
      en: "dangerous, hazardous",
      breakdown: [["te", "DUAL"], ["yo"], "telyʌ́·talu"],
      breakdownPast: [["te", "DUAL"], ["yo"], "telyatalu", ["hné·", "PAST"]],
    },
    {
      en: "difficult",
      breakdown: [["w", "PR"], "ʌto·lé·"],
      breakdownPast: [["w", "PR"], "ʌtolé", ["hkweʔ", "PAST"]],
    },
    {
      en: "disgraceful",
      breakdown: [["yo"], "kʌ́·lat"],
      breakdownPast: [["yo"], "kʌla·t", ["á", "EP"], ["hkweʔ", "PAST"]],
    },
    {
      en: "maddening, upsetting",
      breakdown: [["yo"], "naʔkúnyaʔt"],
      breakdownPast: [["yo"], "naʔkunyaʔt", ["ú·neʔ", "PAST"]],
    },
    {
      en: "poor",
      breakdown: [["yo"], "·tʌ́t"],
      breakdownPast: [["yo"], "·tʌht", ["ú·neʔ", "PAST"]],
    },
    {
      en: "dead tired, weary, exhausted",
      breakdown: ["teyohwishʌhe·yát"],
      breakdownPast: ["teyohwishʌheyu·t", ["á", "EP"], ["hkweʔ", "PAST"]],
    },
    {
      en: "bothersome",
      breakdown: [["yo"], "yoʔta·tíheʔ"],
      breakdownPast: [["yo"], "yoʔta·tihá", ["hkweʔ", "PAST"]],
    },
    {
      en: "cheap, available, willing",
      breakdown: [["w", "PR"], "atyesʌ́"],
      breakdownPast: [["w", "PR"], "atyesʌ́", ["·neʔ", "PAST"]],
    },
    {
      en: "probably, it seems",
      breakdown: ["wé·ne"],
      breakdownPast: ["we·né", ["hkweʔ", "PAST"]],
    },
  ];

  return (
    <>
      <SectionHeading id="other-stative-verbs" level={2}>
        Other Stative Verbs
      </SectionHeading>
      <TableWrapper
        columns={[
          TableWrapper.englishColumn,
          // @ts-expect-error To be addressed in LO-12
          TableWrapper.createTextBreakdownColumn("PB", { header: "It is..." }),
          // @ts-expect-error To be addressed in LO-12
          TableWrapper.createTextBreakdownColumn("PB", {
            accessorKey: "breakdownPast",
            header: "It used to be...",
          }),
        ]}
        data={data}
      />
    </>
  );
}

function IrregularStativeVerbsSection() {
  return (
    <>
      <SectionHeading id="irregular-stative-verbs" level={2}>
        Irregular Stative Verbs
      </SectionHeading>
      <SectionHeading id="irregular-died" level={2}>
        -iheyu-
      </SectionHeading>
      <ParadigmTable data={iheyuData} />
      <SectionHeading id="irregular-small" level={2}>
        -kʌ- ni-a
      </SectionHeading>
      <ParadigmTable data={smallData} />
    </>
  );
}

function NegatingStativeVerbsSection() {
  const data = [
    [
      {
        on: [["wak"], "atshanuní"],
        en: "I am happy",
      },
      {
        on: ["yah teʔ", ["wak"], "atshanuní"],
        en: "I am not happy",
      },
    ],
    [
      {
        on: [["wak"], "atshanuni·", ["hné·", "PAST"]],
        en: "I was happy",
      },
      {
        on: ["yah teʔ", ["wak"], "atshanuni·", ["hné·", "PAST"]],
        en: "I was not happy",
      },
    ],
    [
      {
        on: ["ʌ", ["wak"], "atshanuní", "hakeʔ"],
        en: "I will be happy",
      },
      {
        on: ["yah th", ["a", "IFUT"], ["·ukw"], "atshanuní", "hakeʔ"],
        en: "I would not be happy",
      },
    ],
    [
      {
        on: [["a", "IFUT"], ["·ukw"], "atshanuní", "hakeʔ"],
        en: "I would be happy",
      },
      {
        on: ["yah th", ["a", "IFUT"], ["·ukw"], "atshanuní", "hakeʔ"],
        en: "I would not be happy",
      },
    ],
    [
      {
        on: [["s"], "atshanuní", "hak"],
        en: "You be happy!",
      },
      {
        on: ["Tákʌʔ ", "ʌ", ["s"], "atshanuní", "hak"],
        en: "Don't you be happy!",
      },
    ],
  ];

  return (
    <>
      <SectionHeading id="negating-stative-verbs" level={2}>
        Negating Stative Verbs
      </SectionHeading>

      <TableWrapper
        columns={[
          {
            accessorKey: "left",
            // @ts-expect-error To be addressed in LO-12
            cell: (value: { on: BreakdownArray; en: string }) => (
              <>
                <TextBreakdown breakdown={value.on} typeFallback="PB" />
                <Text variant="bodyS">{value.en}</Text>
              </>
            ),
            header: "",
          },
          {
            accessorKey: "right",
            // @ts-expect-error To be addressed in LO-12
            cell: (value: { on: BreakdownArray; en: string }) => (
              <>
                <TextBreakdown breakdown={value.on} typeFallback="PB" />
                <Text variant="bodyS">{value.en}</Text>
              </>
            ),
            header: "",
          },
        ]}
        data={data.map(([left, right]) => ({
          left,
          right,
        }))}
      />
    </>
  );
}
