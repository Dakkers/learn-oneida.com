import type { MetaFunction } from "@remix-run/node";
import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Flex } from "@/design/components/flex";
import { SectionHeading } from "~/components/SectionHeading";
import { Box } from "@/design/components/box";
import { Notice } from "@/design/components/notice";
import { TableWrapper } from "@/design/components/tableWrapper";
import {
  BreakdownArray,
  BreakdownType,
  TextBreakdown,
} from "~/components/TextBreakdown";
import {
  ActiveVerbDatum,
  activeVerbsList,
} from "~/data/module06/activeVerbsList";
import _ from "lodash";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/design/primitives/accordion";
import { ParadigmTable } from "~/components/ParadigmTable";
import { Text } from "@/design/components/text";
import { Pronominal } from "~/components/Pronominal";
import { Letter } from "~/components/Letter";
import { Link } from "@/design/primitives/link";
import { List } from "@/design/components/list";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";

const TENSE_LIST = ["cmd", "hab", "pfv", "def", "ifut", "fut"] as const;

const tenseMap = {
  cmd: "Command",
  def: "Definite",
  fut: "Future",
  hab: "Habitual",
  ifut: "Indefinite",
  pfv: "Perfective",
} as const;

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

export const meta: MetaFunction = () => {
  return [
    { title: "Module 6" },
    { name: "description", content: "Module 6 of the Oneida curriculum" },
  ];
};

export default function LearnModule06() {
  return (
    <Flex direction="column" gap={4}>
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

        <TOC.Item label="Daily Activities" value="daily-activities">
          <TOC.Section>
            {activeVerbsList.map((v) => (
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
                  activeVerbsList.find((v2) => v2.key === v.key)!
                )}
              />
            ))}
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Translation exercises" value="translation-exercises" />
      </TOC>

      <StativeVsActiveSection />
      <OneidaTermsForTenses />
      <DailyActivitiesSection />

      <VerbsParadigmsSection />

      <TranslationExercisesSection group="module06" />
    </Flex>
  );
}

function StativeVsActiveSection() {
  const cookVerbDatum = activeVerbsList.find((v) => v.key === "cook")!;

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
            breakdown: cookVerbDatum.cmd.phrases[0].breakdown,
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
            breakdown: ["thó ni", ["k"], "atyelhaʔ"],
            en: ["That is what I do", "That is what I am doing now"],
            tense: ["Habitual", "Stative"],
          },
          {
            breakdown: ["thó n", ["aʔ", "DEF"], ["k"], "atyeleʔ"],
            en: "That is what I did",
            tense: "Definite Past",
          },
          {
            breakdown: ["thó n", ["a", "IFUT"], ["k"], "atyeleʔ"],
            en: "That is what I would do",
            tense: "Indefinite Future",
          },
          {
            breakdown: ["thó n", ["ʌ", "FUT"], ["k"], "atyeleʔ"],
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
            breakdown: ["thó n", ["hs"], "átyel"],
            en: "Do that!",
            tense: "Command",
          },
        ]}
      />
    </>
  );
}

function DailyActivitiesSection() {
  return (
    <>
      <SectionHeading id="daily-activities" level={2}>
        Daily Activities
      </SectionHeading>

      <Accordion type="multiple">
        {activeVerbsList.map((v) => (
          <AccordionItem id={_.kebabCase(v.key)} key={v.key} value={v.key}>
            <AccordionTrigger>{v.en}</AccordionTrigger>
            <AccordionContent>
              <TableWrapper
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
                      row: { colour: BreakdownType }
                    ) => (
                      <TextBreakdown
                        breakdown={value}
                        typeFallback={row.colour}
                      />
                    ),
                    header: "",
                  },
                ]}
                data={TENSE_LIST.map((tense) => ({
                  colour: v[tense].type,
                  tense,
                  text: v[tense].phrases.find(
                    (p) => p.pronoun === (tense === "cmd" ? "u" : "i")
                  )?.breakdown,
                }))}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

function VerbsParadigmsSection() {
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
          verbDatum={activeVerbsList.find((v) => v.key === datum.key)!}
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
  verbDatum: ActiveVerbDatum;
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

      <Accordion type="multiple">
        {TENSE_LIST.map((tense) => (
          <AccordionItem key={tense} value={tense}>
            <AccordionTrigger>{tenseMap[tense]}</AccordionTrigger>
            <AccordionContent>
              <ParadigmTable
                columnVisibility={columnVisibility}
                data={verbDatum[tense]}
                key={tense}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

const formatVerbParadigmSectionId = (verbDatum: ActiveVerbDatum) =>
  `paradigm-${_.kebabCase(verbDatum.key)}`;
