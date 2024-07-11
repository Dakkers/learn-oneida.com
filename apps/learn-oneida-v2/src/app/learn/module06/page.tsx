"use client";

import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Accordion, Flex } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  BreakdownArray,
  BreakdownType,
  TextBreakdown,
} from "~/components/TextBreakdown";
import {
  Module6VerbDatum,
  Module6VerbTense,
  createModule6VerbList,
} from "~/data/module06/activeVerbsList";
import _ from "lodash";
import { ParadigmTable } from "~/components/ParadigmTable";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Pronominal, PronominalColor } from "~/components/Pronominal";
import { Letter } from "~/components/Letter";
import { Link } from "@ukwehuwehneke/ohutsya";
import { List } from "@ukwehuwehneke/ohutsya";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";
import { Bleed } from "@ukwehuwehneke/ohutsya";
import { TextArray } from "@ukwehuwehneke/ohutsya";
import { pronouns } from "~/utils";

const TENSE_LIST = ["cmd", "hab", "pfv", "def", "ifut", "fut"] as const;

const tenseMap = {
  cmd: "Command",
  def: "Definite",
  fut: "Future",
  hab: "Habitual",
  ifut: "Indefinite",
  pfv: "Perfective",
} as const;

const tenseBreakdownMap: Record<Module6VerbTense, BreakdownArray> = {
  cmd: ["tsiʔ ", ["n", "PTV"], ["a", "IFUT"], ["hs"], "átyel"],
  def: [["n", "PTV"], ["aʔ", "DEF"], ["k"], "átyele̲ʔ"],
  fut: [["n", "PTV"], ["ʌ", "FUT"], ["k"], "átyele̲ʔ"],
  hab: ["tsiʔ ", ["ni", "PTV"], ["k"], "atyélhaʔ"],
  ifut: [["n", "PTV"], ["a", "IFUT"], ["k"], "átyele̲ʔ"],
  pfv: [["ni", "PTV"], ["wak", "PB"], "átyele̲ʔ"],
};

const columnVisibility = {
  pronounEnglish: false,
  pronounOneida: false,
};

const verbsWithParadigms = [
  {
    key: "answer",
    prefix: "t/te",
    root: "-lihwaʔslakw",
    stem: "C",
  },
  {
    key: "beginToDoSomething",
    prefix: "t",
    root: "t-...-atahsawh",
    stem: "A",
  },
  {
    key: "cook",
    root: "-khuni",
    stem: "CC",
  },
  {
    key: "doSomething",
    prefix: "ni",
    root: "ni-...-atyel",
    stem: "A",
  },
  {
    key: "getSelfUp",
    root: "-atkekskw",
    stem: "A",
  },
  {
    key: "saySomething",
    root: "atu",
    stem: "irregular",
  },
  {
    key: "goToSleep",
    colour: "blue",
    root: "ita",
    stem: "I",
  },
  {
    key: "getTired",
    prefix: "te",
    root: "te-...-hwishʌheyu",
    stem: "C",
  },
  {
    key: "work",
    colour: "blue",
    root: "-yoʔtʌ-",
    stem: "C",
  },
] as const;

const meta: any = () => {
  return [
    { title: "Module 6" },
    { name: "description", content: "Module 6 of the Oneida curriculum" },
  ];
};

export default function LearnModule06() {
  const list = createModule6VerbList();
  return (
    <>
      <SectionHeading level={1}>Module 6</SectionHeading>

      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>

      <TOC>
        <TOC.Item label="Introduction" value="intro" />
        <TOC.Item
          label="Oneida Terms for Tenses"
          value="oneida-terms-for-tenses"
        />
        <TOC.Item
          label="How Active Verbs Are Constructed"
          value="how-its-constructed"
        />
        <TOC.Item label="Active Verb Examples" value="examples" />

        <TOC.Item label="Daily Activities" value="daily-activities">
          <TOC.Section>
            {createModule6VerbList().map((v) => (
              <TOC.Item key={v.key} label={v.en} value={_.kebabCase(v.key)} />
            ))}
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Paradigms for Select Active Verbs" value="paradigms">
          <TOC.Section>
            {verbsWithParadigms.map((v) => (
              <TOC.Item
                key={v.key}
                label={v.root}
                value={formatVerbParadigmSectionId(
                  list.find((v2) => v2.key === v.key)!,
                )}
              />
            ))}
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Translation exercises" value="translation-exercises" />
      </TOC>

      <StativeVsActiveSection />
      <OneidaTermsForTenses />
      <HowConstructedSection />
      <ExamplesSection />
      <DailyActivitiesSection />

      <VerbsParadigmsSection />

      <TranslationExercisesSection group="module06" />
    </>
  );
}

function StativeVsActiveSection() {
  const cookVerbDatum = createModule6VerbList().find((v) => v.key === "cook")!;

  return (
    <>
      <SectionHeading id="intro" level={2}>
        Introduction
      </SectionHeading>

      <Text>
        <Link href="/learn/module05">Module 5</Link> covered{" "}
        <b>stative verbs</b> which describe the{" "}
        <i>state or condition of someone or something</i>. They have 5 possible
        tenses:
      </Text>

      <TableWrapper
        columns={[
          { ...TableWrapper.englishColumn, accessorKey: "tense" },
          // @ts-expect-error LO-12
          TableWrapper.createTextBreakdownColumn("PB"),
          TableWrapper.englishColumn,
        ]}
        data={[
          {
            tense: "Present",
            en: "I am lucky",
            breakdown: [["wak"], "atlaʔswiyó"],
          },
          {
            tense: "Past",
            en: "I was lucky",
            breakdown: [["wak"], "atlaʔswiyo·", ["hné·", "PAST"]],
          },
          {
            tense: "Future",
            en: "I will be lucky",
            breakdown: [["ʌ", "FUT"], ["wak"], "atlaʔswiyó", ["hakeʔ", "FUT"]],
          },
          {
            tense: "Conditional (Indefinite Future)",
            en: "I might be lucky",
            breakdown: [
              ["a", "IFUT"],
              ["·ukw"],
              "atlaʔswiyó",
              ["hakeʔ", "IFUT"],
            ],
          },
          {
            tense: "Command",
            en: "Be lucky!",
            breakdown: [["s"], "atlaʔswiyó", ["hak", "FUT"]],
          },
        ]}
      />

      <Text>
        The verbs in module 6 are <b>active verbs</b> which decribe{" "}
        <i>actions, events, or activities</i>. They have as many as 14 possible
        forms. The 11 that will be covered by this curriculum are the following:
      </Text>

      <TableWrapper
        columns={[
          { ...TableWrapper.englishColumn, accessorKey: "tense" },
          // @ts-expect-error LO-12
          TableWrapper.createTextBreakdownColumn("PR"),
          TableWrapper.englishColumn,
        ]}
        data={[
          {
            tense: "Habitual",
            en: "I cook",
            breakdown: cookVerbDatum.hab.phrases[0].breakdown,
          },
          {
            tense: "Habitual Past",
            en: "I used to cook",
            breakdown: [["ke"], "khu·ní", ["hahkweʔ", "PAST"]],
          },
          {
            tense: "Habitual Future",
            en: "I will keep on cooking",
            breakdown: [["ʌ", "FUT"], ["ke"], "khu·ní", ["hekeʔ", "FUT"]],
          },
          {
            tense: "Definite Past",
            en: "I cooked",
            breakdown: cookVerbDatum.def.phrases[0].breakdown,
          },
          {
            tense: "Indefinite Future",
            en: "I might cook",
            breakdown: cookVerbDatum.ifut.phrases[0].breakdown,
          },
          {
            tense: "Definite Future",
            en: "I will cook",
            breakdown: cookVerbDatum.fut.phrases[0].breakdown,
          },
          {
            tense: "Perfective",
            en: "I have cooked",
            breakdown: [["wake", "PB"], "khuní"],
          },
          {
            tense: "Progressive",
            en: "I am going along cooking",
            breakdown: [["wake", "PB"], "khuni", ["háti", "PAST"]],
          },
          {
            tense: "Perfective Past",
            en: "I had cooked",
            breakdown: [["wake", "PB"], "khuni·", ["hné·", "PAST"]],
          },
          {
            tense: "Perfective Indefinite",
            en: "I should have cooked",
            breakdown: [
              ["a", "IFUT"],
              ["·uk", "PB"],
              "khuni·",
              ["keʔ", "PAST"],
            ],
          },
          {
            tense: "Command",
            en: "Cook!",

            breakdown: cookVerbDatum.cmd!.phrases[0].breakdown,
          },
        ]}
      />

      <Text>This module will cover these 6:</Text>

      <List>
        <List.Item>Habitual</List.Item>
        <List.Item>Definite Past</List.Item>
        <List.Item>Indefinite Future</List.Item>
        <List.Item>Definite Future</List.Item>
        <List.Item>Perfective</List.Item>
        <List.Item>Command</List.Item>
      </List>

      <Notice>
        If you are confused by the differences between these tenses, that is
        okay! While some of the tenses may look redundant, they are used in
        different contexts. This will be demonstrated later.
      </Notice>
    </>
  );
}

function OneidaTermsForTenses() {
  return (
    <>
      <SectionHeading id="oneida-terms-for-tenses" level={2}>
        Oneida Terms for Tenses
      </SectionHeading>

      <Text>
        At this point in the program&lsquo;s lectures, more Oneida should be
        incorporated to create a more immersive classroom. Below shows the
        Oneida terms to describe the different tenses.
      </Text>

      <SectionHeading level={3}>It is happening</SectionHeading>

      <TableWrapper
        columns={[
          { ...TableWrapper.englishColumn, accessorKey: "tense" },
          // @ts-expect-error LO-12
          TableWrapper.createTextBreakdownColumn("PB"),
          TableWrapper.englishColumn,
        ]}
        data={[
          {
            breakdown: ["thó ni", ["ya·w"], "ʌ́·seʔ"],
            en: ["That is what happens", "It's the way it happens"],
            tense: "Habitual",
          },
          {
            breakdown: ["thó n", ["aʔ", "DEF"], ["a·w"], "ʌ́", ["neʔ", "DEF"]],
            en: "That happened",
            tense: "Definite",
          },
          {
            breakdown: ["thó n", ["a", "IFUT"], ["ya·w"], "ʌ́", ["neʔ", "IFUT"]],
            en: "That would happen",
            tense: "Indefinite",
          },
          {
            breakdown: ["thó n", ["ʌ", "FUT"], ["ya·w"], "ʌ́", ["neʔ", "FUT"]],
            en: "That will happen",
            tense: "Future",
          },
          {
            breakdown: ["thó ni", ["yaw"], "ʌ́·", ["u", "PAST"]],
            en: "That has happened",
            tense: "Perfective",
          },
          {
            breakdown: ["thó ni", ["yaw"], "ʌʔu", ["háti", "DEF"]],
            en: "That is happening now",
            tense: ["Progressive", "Stative"],
          },
          {
            breakdown: ["thó niʔy", ["a·w"], "ʌ́n"],
            en: "Let it happen",
            tense: "Command",
          },
        ]}
      />

      <SectionHeading level={3}>That is what I am doing</SectionHeading>

      <TableWrapper
        columns={[
          { ...TableWrapper.englishColumn, accessorKey: "tense" },
          // @ts-expect-error LO-12
          TableWrapper.createTextBreakdownColumn("PR"),
          TableWrapper.englishColumn,
        ]}
        data={[
          {
            breakdown: ["thó ni", ["k"], "atyélhaʔ"],
            en: ["That is what I do", "That is what I am doing now"],
            tense: ["Habitual", "Stative"],
          },
          {
            breakdown: ["thó n", ["aʔ", "DEF"], ["k"], "átyeleʔ"],
            en: "That is what I did",
            tense: "Definite Past",
          },
          {
            breakdown: ["thó n", ["a", "IFUT"], ["k"], "átyeleʔ"],
            en: "That is what I would do",
            tense: "Indefinite Future",
          },
          {
            breakdown: ["thó n", ["ʌ", "FUT"], ["k"], "átyeleʔ"],
            en: "That is what I will do",
            tense: "Definite Future",
          },
          {
            breakdown: ["thó ni", ["wak", "PB"], "atyel", ["ʌ́", "PFV"]],
            en: [
              "That is what I have done",
              "That is what I'm doing right now",
            ],
            tense: "Perfective",
          },
          {
            breakdown: ["thó ni", ["wak", "PB"], "atyelʌhátiʔ"],
            en: "That is what I am going along doing right now",
            tense: ["Progressive", "Stative"],
          },
          {
            breakdown: ["thó n", ["a", "IFUT"], ["hs"], "átyel"],
            en: "Do that!",
            tense: "Command",
          },
        ]}
      />
    </>
  );
}

function HowConstructedSection() {
  const data: {
    key: Module6VerbTense;
    ending?: string;
    prepronominal?: string[];
    colors?: PronominalColor[];
  }[] = [
    {
      key: "cmd",
    },
    {
      key: "hab",
      ending: "habitual",
    },
    {
      key: "def",
      ending: "punctual",
      prepronominal: ["waʔ", "wa", "we"],
    },
    {
      key: "ifut",
      ending: "punctual",
      prepronominal: ["a", "ae"],
    },
    {
      key: "fut",
      ending: "punctual",
      prepronominal: ["ʌ"],
    },
    {
      key: "pfv",
      ending: "perfective",
      colors: ["blue", "purple"],
    },
  ];

  return (
    <>
      <SectionHeading id="how-its-constructed" level={2}>
        How Active Verbs Are Constructed
      </SectionHeading>

      <TableWrapper
        columns={[
          {
            accessorKey: "key",
            // @ts-expect-error To be addressed
            cell: (key: Module6VerbTense, row: (typeof data)[0]) => (
              <TextArray>
                {tenseMap[key]}
                <TextBreakdown
                  breakdown={tenseBreakdownMap[row.key]}
                  typeFallback="PR"
                />
              </TextArray>
            ),
            header: "Tense",
          },
          {
            accessorKey: "prepronominal",
            // @ts-expect-error To be addressed
            cell: (prepronominal: string[]) => (
              <TextArray>{prepronominal ?? []}</TextArray>
            ),
            header: "Prepronominal",
          },
          {
            accessorKey: "colors",
            // @ts-expect-error To be addressed
            cell: (colors: data[0]["colors"]) => (
              <TextArray>
                {(colors ?? (["red", "blue", "purple"] as const)).map(
                  (name: PronominalColor) => (
                    <Pronominal color={name} key={name}>
                      {name}
                    </Pronominal>
                  ),
                )}
              </TextArray>
            ),
            header: "Colours",
          },
          {
            accessorKey: "root",
            cell: () => "root",
            header: "",
          },
          {
            accessorKey: "ending",
            // @ts-expect-error To be addressed
            cell: (ending: string) => (ending ? `${ending} ending` : ""),
            header: "Ending",
          },
        ]}
        data={data}
      />

      <Text>
        Examples of habitual, punctual, and perfective endings can be found on
        page 20 of the Oneida-English dictionary.
      </Text>
    </>
  );
}

function ExamplesSection() {
  const cookVerbDatum = createModule6VerbList().find((v) => v.key === "cook")!;
  const data = [
    {
      key: "cmd",
      tense: "Command",
      en: "Cook!",
      breakdown: cookVerbDatum.cmd!.phrases[0].breakdown,
      negation: ["Tákʌʔ ", ["ʌ", "FUT"], ["se"], "khuni"],
      negationEn: "Don't cook!",
      desc: ["Used to tell someone to do something right now."],
    },
    {
      key: "hab",
      tense: "Habitual",
      en: "I cook",
      breakdown: cookVerbDatum.hab.phrases[0].breakdown,
      negation: ["Yáh teʔ", ["ke"], "khu·níheʔ"],
      negationEn: "I do not cook",
      desc: [
        "Describes events that happen regularly, whether once an hour or once a year. There is an expectation that the event will occur again.",
        'Describes "what people do" or "what they are."',
        "Sometimes describes actions that are happening right now.",
      ],
    },
    {
      key: "def",
      tense: "Definite Past",
      en: "I cooked",
      breakdown: cookVerbDatum.def.phrases[0].breakdown,
      negation: ["Yáh teʔ", ["wake", "PB"], "khu·ní·"],
      negationEn: "I did not cook",
      desc: [
        "Describes a completed event (verbs that end in -ed in English)",
        "Describes an event in which someone is en route or going to do something",
      ],
    },
    {
      key: "ifut",
      tense: "Indefinite Future",
      en: "I might cook",
      breakdown: cookVerbDatum.ifut.phrases[0].breakdown,
      negation: ["Yáh th", ["a", "IFUT"], ["ke"], "khu·ní·"],
      negationEn: "I will not cook",
      desc: [
        "Describes an event that might or could happen in the future",
        "Describes an event that might or could have happened in the past",
      ],
    },
    {
      key: "fut",
      tense: "Definite Future",
      en: "I will cook",
      breakdown: cookVerbDatum.fut.phrases[0].breakdown,
      negation: ["Yáh th", ["a", "IFUT"], ["ke"], "khu·ní·"],
      negationEn: "I might not cook",
      desc: ["Describes an event that likely will occur in the future"],
    },
    {
      key: "pfv",
      tense: "Perfective",
      en: "I have cooked",
      negation: ["Yáh teʔ", ["wake", "PB"], "khu·ní·"],
      negationEn: "I have not cooked",
      desc: [
        "Describes one (or many) events that have been completed, either recently or long ago",
        "Describes a change that has occurred",
        "Describes an event that is happening right now",
      ],
    },
  ];

  return (
    <>
      <SectionHeading id="examples" level={2}>
        Active Verb Examples
      </SectionHeading>

      <Text>
        Below is a table with each of the six tenses we&lsquo;re looking at,
        their negations, and descriptions as to how they&lsquo;re used.
      </Text>

      <TableWrapper
        columns={[
          {
            accessorKey: "key",
            // @ts-expect-error To be addressed
            cell: (key: Module6VerbTense, row: (typeof data)[0]) => (
              <TextArray>
                <span className="underline">{tenseMap[key]}</span>
                <TextBreakdown
                  breakdown={tenseBreakdownMap[key]}
                  typeFallback="PR"
                  wrap="nowrap"
                />
                <div></div>
                {row.en}
              </TextArray>
            ),
            header: "Tense",
          },
          {
            accessorKey: "desc",
            // @ts-expect-error To be addressed
            cell: (desc: string[]) => (
              <Flex direction="column" gap={2}>
                <TextArray>{desc}</TextArray>
              </Flex>
            ),
            header: "Description",
          },
          {
            accessorKey: "negation",
            // @ts-expect-error To be addressed
            cell: (negation: BreakdownArray, row: (typeof data)[0]) => (
              <TextArray>
                <TextBreakdown
                  breakdown={negation}
                  typeFallback="PR"
                  wrap="nowrap"
                />
                {row.negationEn}
              </TextArray>
            ),
            header: "Negation",
          },
        ]}
        data={data}
      />

      <Text>There are two things to note here:</Text>
      <List ordered>
        <List.Item>
          The &quot;Indefinite Future&quot; and &quot;Future&quot; negations are
          the same, just like in previous modules
        </List.Item>
        <List.Item>
          The &quot;Perfective&quot; and &quot;Definite&quot; negations are the
          same, and use blue pronominals (the Perfective form)
        </List.Item>
      </List>
    </>
  );
}

function DailyActivitiesSection() {
  return (
    <>
      <SectionHeading id="daily-activities" level={2}>
        Daily Activities
      </SectionHeading>

      <Bleed
        mx={{
          xs: 0,
          md: 16,
          lg: 32,
        }}
      >
        <Accordion type="multiple">
          {createModule6VerbList().map((v) => {
            const data = TENSE_LIST.filter((tense) => !!v[tense]).map(
              (tense) => ({
                colour: v[tense]!.type,
                tense,
                text: (tense === "cmd"
                  ? v[tense]!.phrases.find((p) => p.pronoun === "u")
                  : v[tense]!.phrases.find((p) => p.pronoun === "i") ??
                    v[tense]!.phrases.find((p) => p.pronoun === "it"))!
                  .breakdown,
              }),
            );

            return (
              <Accordion.Item id={_.kebabCase(v.key)} key={v.key} title={v.en}>
                {v.exceptions?.includes(1) ? (
                  <Text>This uses the &quot;it&quot; pronominals.</Text>
                ) : null}

                <TableWrapper
                  bleed={0}
                  columns={[
                    {
                      accessorKey: "tense",
                      // @ts-expect-error To be fixed in LO-12
                      cell: (value: keyof typeof tenseMap) => tenseMap[value],
                      header: "Tense",
                    },
                    {
                      accessorKey: "text",
                      // @ts-expect-error To be fixed in LO-12
                      cell: (
                        value: BreakdownArray,
                        row: { colour: BreakdownType },
                      ) => (
                        <TextBreakdown
                          breakdown={value}
                          typeFallback={row.colour}
                        />
                      ),
                      header: "",
                    },
                  ]}
                  data={data}
                />
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Bleed>
    </>
  );
}

function VerbsParadigmsSection() {
  const list = createModule6VerbList();
  return (
    <>
      <SectionHeading id="paradigms" level={2}>
        Paradigms for Select Active Verbs
      </SectionHeading>

      <Text>
        This section covers paradigms for a select number of verbs from the
        previous section.
      </Text>

      {verbsWithParadigms.map((datum) => (
        <VerbParadigms
          {...datum}
          key={datum.key}
          verbDatum={list.find((v) => v.key === datum.key)!}
        />
      ))}
    </>
  );
}

function VerbParadigms({
  colour,
  prefix,
  root,
  stem,
  verbDatum,
}: {
  colour?: "blue" | "purple";
  prefix?: string;
  root: string;
  stem: string;
  verbDatum: Module6VerbDatum;
}) {
  return (
    <>
      <SectionHeading id={formatVerbParadigmSectionId(verbDatum)} level={3}>
        {root} — {verbDatum.en}
      </SectionHeading>

      <Text>
        {stem === "irregular" ? (
          "This word is irregular, and its conjugations depend on context."
        ) : (
          <>
            This word has {stem.includes("C") ? "a" : "an"}{" "}
            <Pronominal color={colour || "r"}>{stem}</Pronominal> stem
            {prefix && (
              <>
                {" "}
                with a <Letter>{prefix}</Letter> prefix
              </>
            )}
            .
          </>
        )}
      </Text>

      <Bleed
        mx={{
          xs: 0,
          md: 16,
          lg: 32,
        }}
      >
        <Accordion type="multiple">
          {TENSE_LIST.map((tense) =>
            verbDatum[tense] ? (
              <Accordion.Item key={tense} id={tense} title={tenseMap[tense]}>
                <ParadigmTable
                  bleed={0}
                  columnVisibility={columnVisibility}
                  data={verbDatum[tense]!}
                  key={tense}
                  allowedPronouns={verbDatum.pronouns ?? pronouns}
                />
              </Accordion.Item>
            ) : null,
          )}
        </Accordion>
      </Bleed>
    </>
  );
}

const formatVerbParadigmSectionId = (verbDatum: Module6VerbDatum) =>
  `paradigm-${_.kebabCase(verbDatum.key)}`;
