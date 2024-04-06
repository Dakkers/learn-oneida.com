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
        <TOC.Item label="Daily Activities" value="daily-activities">
          <TOC.Section>
            {activeVerbsList.map((v) => (
              <TOC.Item key={v.key} label={v.en} value={_.kebabCase(v.key)} />
            ))}
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Translation exercises" value="translation-exercises" />
      </TOC>

      <DailyActivitiesSection />

      <VerbsParadigmsSection />

      {/* <TranslationExercisesSection group="module06" /> */}
    </Flex>
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
  return verbsWithParadigms.map((datum) => (
    <VerbParadigms
      {...datum}
      key={datum.key}
      verbDatum={activeVerbsList.find((v) => v.key === datum.key)!}
    />
  ));
}

function VerbParadigms({
  colour,
  prefix,
  root,
  stem,
  verbDatum,
}: {
  colour?: 'blue' | 'purple';
  prefix?: string;
  root: string;
  stem: string;
  verbDatum: ActiveVerbDatum;
}) {
  return (
    <>
      <SectionHeading id={formatVerbParadigmSectionId(verbDatum)} level={2}>
        {root} — {verbDatum.en}
      </SectionHeading>

      <Text>
        {stem === "irregular" ? (
          "This word is irregular, and its conjugations depend on context."
        ) : (
          <>
            This word has {stem.includes('C') ? 'a' : 'an'}{" "}
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
