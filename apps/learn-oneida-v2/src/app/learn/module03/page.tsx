"use client";

import { Flex } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";

import { TableOfContents as TOC } from "~/components/TableOfContents";
import { TableWrapper } from "@/components/TableWrapper";
import {
  BreakdownArray,
  BreakdownType,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { GoodPeopleBadPeopleArticle } from "~/components/articles/GoodPeopleBadPeople";
import { RepetitiveFeatureArticle } from "~/components/articles/RepetitiveFeature";
import { ParticlesTable } from "~/components/articles/ParticlesTable";
import { CountingPeopleArticle } from "~/components/articles/CountingPeople";
import { DomesticatedAnimalsArticle } from "~/components/articles/DomesticatedAnimals";
import { RelationshipsArticle } from "~/components/articles/Relationships";
import { ClansArticle } from "~/components/articles/Clans";
import { NationsArticle } from "~/components/articles/Nations";
import { DialogueTable, DialogueTableData } from "~/components/DialogueTable";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";
import { TextArray } from "@ukwehuwehneke/ohutsya";
import { Letter } from "@/components/Letter";

const meta: any = () => {
  return [
    { title: "Module 3" },
    { name: "description", content: "Module 3 of the Oneida curriculum" },
  ];
};

export default function LearnModule03() {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>Module 3</SectionHeading>
      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>
      <Text>In this module, we&lsquo;ll cover the following:</Text>

      <TOC>
        <TOC.Item label="Past Tense" value="past-tense">
          <TOC.Section>
            <TOC.Item
              label="Introduction to Past Tense"
              value="past-tense-intro"
            />
            <TOC.Item
              label="Something used to be the case"
              value="used-to-be"
            />
            <TOC.Item
              label="When something was the case"
              value="past-tense-when"
            />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Repetitive feature" value="repetitive-s" />

        <TOC.Item label="Relationships" value="relationships">
          <TOC.Section>
            <TOC.Item label="Married" value="married" />
            <TOC.Item label="In a Relationship" value="in-a-relationship" />
            <TOC.Item label="Separated" value="separated" />
            <TOC.Item label="Engaged" value="engaged" />
            <TOC.Item label="Single" value="single" />
            <TOC.Item label="Old Man / Old Woman" value="old-man-old-woman" />
            <TOC.Item label="Spouse" value="spouse" />
            <TOC.Item
              label="Girlfriend / Boyfriend"
              value="girlfriend-boyfriend"
            />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Good and Bad Conjugations" value="good-bad">
          <TOC.Section>
            <TOC.Item label="Good People" value="good-people" />
            <TOC.Item label="Bad People" value="bad-people" />
            <TOC.Item label="Good Kids" value="good-kids" />
            <TOC.Item label="Bad Kids" value="bad-kids" />
          </TOC.Section>
        </TOC.Item>
        <TOC.Item label="Counting people" value="counting-people" />
        <TOC.Item label="Counting animals" value="counting-animals" />
        <TOC.Item label="Domesticated animals" value="domesticated-animals" />
        <TOC.Item
          label="Having a person or animal"
          value="having-conjugations"
        />
        <TOC.Item label="Clans" value="clans" />
        <TOC.Item label="Nations" value="nations" />
        <TOC.Item label="Particles" value="particles" />
        <TOC.Item label="Dialogue" value="dialogue" />
        <TOC.Item label="Translation exercises" value="translation-exercises" />
      </TOC>

      <PastTenseSection />

      <RepetitiveFeatureArticle level={2} />

      <RelationshipsArticle level={2} />

      <GoodPeopleBadPeopleArticle level={2} />

      <CountingPeopleArticle level={2} />

      <DomesticatedAnimalsArticle level={2} />

      <HavingConjugations />

      <ClansArticle level={2} />

      <NationsArticle level={2} />

      <SectionHeading id="particles" level={2}>
        Particles
      </SectionHeading>
      <ParticlesTable group="module03" />

      <DialogueSection />
      <TranslationExercisesSection group="module03" />
    </Flex>
  );
}

const pastTenseColumns = [
  TableWrapper.englishColumn,
  {
    accessorKey: "one",
    cell: (value: BreakdownArray[], row: { type: BreakdownType }) =>
      value.map((v, i) => (
        <TextBreakdown as="div" breakdown={v} key={i} typeFallback={row.type} />
      )),
    header: "Translation",
  },
];

function PastTenseSection() {
  return (
    <>
      <SectionHeading id="past-tense" level={2}>
        Past Tense
      </SectionHeading>
      <Text>
        The past tense in Oneida can be communicated using either prefixes or
        suffixes on words.
      </Text>

      <PastTenseIntroduction />
      <PastTenseUsedToBe />
      <PastTenseWhen />
    </>
  );
}

function PastTenseIntroduction() {
  const data = [
    {
      en: "I like it",
      breakdown: [{ text: "k", type: "PR" }, "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like it",
      breakdown: [{ text: "k", type: "PR" }, "nú·wehs", "kweʔ"],
    },
    {
      en: "it likes me",
      breakdown: [{ text: "wak", type: "PB" }, "nú·wehse̲ʔ"],
    },
    {
      en: "it used to like me",
      breakdown: [{ text: "wak", type: "PB" }, "nú·wehs", "kweʔ"],
    },
    {
      en: "I like you",
      breakdown: [{ text: "ku", type: "PP" }, "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like you",
      breakdown: [{ text: "ku", type: "PP" }, "nú·wehs", "kweʔ"],
    },
    {
      en: "I love it",
      breakdown: [{ text: "k", type: "PR" }, "nolúkhwa̲"],
    },
    {
      en: "I used to love it",
      breakdown: [{ text: "k", type: "PR" }, "nolúkhwa", "hkweʔ"],
    },
    {
      en: "it losé me",
      breakdown: [{ text: "wak", type: "PB" }, "nolúkhwa̲"],
    },
    {
      en: "it used to love me",
      breakdown: [{ text: "wak", type: "PB" }, "nolúkhwa", "hkweʔ"],
    },
    {
      en: "I love you",
      breakdown: [{ text: "ku", type: "PP" }, "nolúkhwa̲"],
    },
    {
      en: "I used to love you",
      breakdown: [{ text: "ku", type: "PP" }, "nolúkhwa", "hkweʔ"],
    },
    {
      en: "I know it",
      breakdown: [{ text: "k", type: "PR" }, "yʌtelíˍ"],
    },
    {
      en: "I used to know it",
      breakdown: [{ text: "k", type: "PR" }, "yʌteli", "hné·"],
    },
    {
      en: "it knows me",
      breakdown: [{ text: "wak", type: "PB" }, "yʌtelíˍ"],
    },
    {
      en: "it used to know me",
      breakdown: [{ text: "wak", type: "PB" }, "yʌteli", "hné·"],
    },
    {
      en: "I know you",
      breakdown: [{ text: "ku", type: "PP" }, "yʌtelíˍ"],
    },
    {
      en: "I used to know you",
      breakdown: [{ text: "ku", type: "PP" }, "yʌteli", "hné·"],
    },

    {
      en: "I like myself",
      breakdown: [
        { text: "k", type: "PR" },
        { text: "atat", type: "REFL" },
        "nú·wehse̲ʔ",
      ],
    },
    {
      en: "I used to like myself",
      breakdown: [
        { text: "k", type: "PR" },
        { text: "atat", type: "REFL" },
        "nú·wehs",
        "kweʔ",
      ],
    },

    {
      en: "You and I like each other",
      breakdown: [
        { text: "te", type: "RECP" },
        { text: "ty", type: "PR" },
        { text: "atat", type: "REFL" },
        "nú·wehse̲ʔ",
      ],
    },
    {
      en: "You and I used to like each other",
      breakdown: [
        { text: "te", type: "RECP" },
        { text: "ty", type: "PR" },
        { text: "atat", type: "REFL" },
        "nú·wehs",
        "kweʔ",
      ],
    },

    {
      en: "I know",
      breakdown: [{ text: "wak", type: "PB" }, "anúhteʔ"],
    },
    {
      en: "I used to know",
      breakdown: [{ text: "wak", type: "PB" }, "anúhte", "hkweʔ"],
    },
  ];

  return (
    <>
      <SectionHeading id="past-tense-intro" level={3}>
        Introduction
      </SectionHeading>
      <Text>
        We&lsquo;ll start with common suffixes <Letter>hne</Letter> and{" "}
        <Letter>kweʔ</Letter>. Note that sometimes the suffix replaces the last
        syllable, whereas in other cases it is a new syllable added to the end.
      </Text>
      <TableWrapper
        columns={TableWrapper.columnsEnglishBreakdown}
        data={data}
      />
    </>
  );
}

function PastTenseUsedToBe() {
  const data = [
    {
      en: ["I am a child", "I was / used to be a child"],
      one: [
        [{ text: "ke" }, "khsá·"],
        [{ text: "ke" }, "khsa", "hné·"],
      ],
      type: "PR",
    },
    {
      en: ["I am a young man", "I was / used to be a young man"],
      one: [
        [{ text: "k" }, "nikʌ́htluʔ"],
        [{ text: "k" }, "nikʌhtlu", "hné·"],
      ],
      type: "PR",
    },
    {
      en: ["I am a young woman", "I was / used to be a young woman"],
      one: [
        [{ text: "k" }, "yaʔtaséha"],
        [{ text: "k" }, "yaʔtase", "hné·"],
      ],
      type: "PR",
    },
    {
      en: [
        "I am free / single",
        "I was / used to be free / single",
        "I didn't used to be free / single (but I am now)",
      ],
      one: [
        [{ text: "k" }, "atatwʌni·yó̲·"],
        [{ text: "k" }, "atatwʌni·yo", "hné·"],
        ["yáh teʔ", { text: "k" }, "atatwʌni·yo", "hné·"],
      ],
      type: "PR",
    },
    {
      en: [
        "I am engaged (to someone)",
        "I was / used to be engaged (to someone)",
      ],
      one: [
        [{ text: "yukni" }, "nyákheʔ"],
        [{ text: "yukni" }, "nyákhe", "hkweʔ"],
      ],
      type: "PB",
    },
    {
      en: [
        "I am in a relationship (with someone)",
        "I was / used to be in a relationship (with someone)",
      ],
      one: [
        [{ text: "yákn" }, "ehse̲"],
        [{ text: "yákn" }, "eh", "skweʔ"],
      ],
      type: "PR",
    },
    {
      en: [
        "I am married",
        "I was / used to be married",
        "I didn't used to be married (but I am now)",
      ],
      one: [
        [{ text: "wake" }, "nyákuʔ"],
        [{ text: "wake" }, "nyaku", "hné·"],
        ["yáh teʔ", { text: "wake" }, "nyaku", "hné·"],
      ],
      type: "PB",
    },
    {
      en: [
        "I am separated (from someone)",
        "I was / used to be separated (from someone)",
      ],
      one: [
        ["te", { text: "yuky" }, "atekháshyuʔ"],
        ["te", { text: "yuky" }, "atekhashyu", "hné·"],
      ],
      type: "PB",
    },
    {
      en: ["my name is ...", "my name was / used to be ..."],
      one: [
        ["... ní·", { text: "yúk" }, "yats"],
        ["... ní·", { text: "yúk" }, "yat", "skweʔ"],
      ],
      type: "PP",
    },
    {
      en: [
        "I like her / them",
        "I used to like her / them",
        "I didn't used to like her / them (but I do now)",
      ],
      one: [
        [{ text: "khe" }, "nú·wehse̲ʔ"],
        [{ text: "khe" }, "nú·weh", "skweʔ"],
        ["yáh teʔ", { text: "khe" }, "nú·weh", "skweʔ"],
      ],
      type: "PP",
    },
    {
      en: [
        "I love her / them",
        "I used to love her / them",
        "I didn't used to love her / them (but I do now)",
      ],
      one: [
        [{ text: "khe" }, "nolúkhwa̲ʔ"],
        [{ text: "khe" }, "nolúkhwa", "hkweʔ"],
        ["yáh te", { text: "khe" }, "nolúkhwa", "hkweʔ"],
      ],
      type: "PP",
    },
    {
      en: ["I am 20 years old", "I was / used to be 20 years old"],
      one: [
        ["tewáhsʌ naʔte", { text: "wak" }, "ohsliyá·ku̲"],
        ["tewáhsʌ naʔte", { text: "wak" }, "ohsliyaʔku", "hné·"],
      ],
      type: "PB",
    },
    {
      en: [
        "I know / am aware",
        "I used to know / be aware (but not now)",
        "I didn't used to know / be aware (but I do now)",
      ],
      one: [
        [{ text: "wak" }, "anúhte̲ʔ"],
        [{ text: "wak" }, "anúhte", "hkweʔ"],
        ["yáh teʔ", { text: "wak" }, "anúhte", "hkweʔ"],
      ],
      type: "PB",
    },
  ];

  return (
    <>
      <SectionHeading id="used-to-be" level={3}>
        Something used to be the case
      </SectionHeading>
      <Text>
        Here are some more examples of when something used to be the case.
      </Text>

      {/* @ts-expect-error To be addressed in LO-12 */}
      <TableWrapper columns={pastTenseColumns} data={data} />
    </>
  );
}

function PastTenseWhen() {
  const data = [
    {
      en: ["I am a child", "When I was / used to be a child"],
      one: [
        [{ text: "k" }, "ekhsá·"],
        ["tshi", { text: "k" }, "ekhsá·"],
      ],
      type: "PR",
    },
    {
      en: ["I am a young man", "When I was / used to be a young man"],
      one: [
        [{ text: "k" }, "nikʌ́htluʔ"],
        ["tshi", { text: "k" }, "nikʌh́tluʔ"],
      ],
      type: "PR",
    },
    {
      en: ["I am a young woman", "When I was / used to be a young woman"],
      one: [
        [{ text: "k" }, "yá·taseha̲"],
        ["tshi", { text: "k" }, "yá·taséha̲"],
      ],
      type: "PR",
    },
    {
      en: ["I am free / single", "When I was free / single"],
      one: [
        [{ text: "k" }, "atatwʌni·yó̲·"],
        ["tshi", { text: "k" }, "atatwʌni·yó̲·"],
      ],
      type: "PR",
    },
    {
      en: ["I am engaged (to someone)", "When I was engaged (to someone)"],
      one: [
        [{ text: "yukni" }, "nyákheʔ"],
        ["tshi", { text: "yukni" }, "nyákheʔ"],
      ],
      type: "PB",
    },
    {
      en: [
        "I am in a relationship (with someone)",
        "When I was in a relationship (with someone)",
      ],
      one: [
        [{ text: "yákn" }, "ehse̲"],
        ["tshi", { text: "yákn" }, "ehse̲"],
      ],
      type: "PR",
    },
    {
      en: ["I am married", "When I was married"],
      one: [
        [{ text: "wake" }, "nyákuʔ"],
        ["tshi", { text: "wake" }, "nyákuʔ"],
      ],
      type: "PB",
    },
    {
      en: ["I am married (to someone)", "When I was married (to someone)"],
      one: [
        [{ text: "yukni" }, "nyákuʔ"],
        ["tshi", { text: "yukni" }, "nyá·kuʔ"],
      ],
      type: "PB",
    },
    {
      en: [
        "I am separated (from someone)",
        "When I was separated (from someone)",
      ],
      one: [
        ["te", { text: "yukya" }, "tekháshyuʔ"],
        ["tshaʔ", "te", { text: "yukya" }, "tekháshyuʔ"],
      ],
      type: "PB",
    },
    {
      en: ["I love her / them", "When I loved her / them"],
      one: [
        [["khe"], "nolúkhwa̲ʔ"],
        ["tshi", { text: "khe" }, "nolúkhwa̲ʔ"],
      ],
      type: "PR",
    },
    {
      en: ["I am 20 years old", "When I was / used to be 20 years old"],
      one: [
        ["tewáhsʌ naʔte", { text: "wak" }, "ohsliyá·ku̲"],
        [
          "tewáhsʌ ",
          { text: "tshaʔ", type: "PAST" },
          "te",
          { text: "wak" },
          "ohsliyá·ku̲",
        ],
      ],
      type: "PB",
    },
  ];

  // @ts-expect-error To be addressed in LO-12
  return (
    <>
      <SectionHeading id="past-tense-when" level={3}>
        Something used to be the case
      </SectionHeading>
      <Text>
        Now, here are examples of when something was the case. This is
        communicated using a pre-pronominal prefix.
      </Text>

      <TableWrapper columns={pastTenseColumns} data={data} />
    </>
  );
}

interface WeirdRow {
  col0: BreakdownArray;
  col1: BreakdownArray;
  col2: BreakdownArray;
  col3: BreakdownArray;
  col4: BreakdownArray;
  col5: BreakdownArray;
}

function HavingConjugations() {
  return (
    <>
      <SectionHeading id="having-conjugations" level={2}>
        &quot;Having&quot; Conjugations
      </SectionHeading>
      <Text>Below is an introduction into more conjugations in Oneida.</Text>
      <SectionHeading level={3}>
        &quot;Having&quot; a person or animal
      </SectionHeading>

      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={createColsLol([
          "pronominal",
          "noun root",
          "joiner",
          "verb root",
        ])}
        data={[
          {
            col0: [
              { text: "wak", type: "PB" },
              { text: "e", type: "EP" },
            ],
            col1: ["ksaʔt"],
            col2: [{ text: "a", type: "JOIN" }],
            col3: [{ text: "yʌ", type: "REP" }],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[...row.col0, "ksá·t", ...row.col2, ...row.col3]}
                />
                <Text variant="bodyS">
                  <i>(I have a child)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [{ text: "wak", type: "PB" }],
            col1: ["wil"],
            col2: [{ text: "a", type: "JOIN" }],
            col3: [{ text: "yʌ", type: "REP" }],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    ...row.col2,
                    "·",
                  ].concat([{ text: "yʌ́·", type: "REP" }])}
                />
                <Text variant="bodyS">
                  <i>(I have a baby)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [{ text: "wak", type: "PB" }],
            col1: ["naskw"],
            col2: [{ text: "a", type: "JOIN" }],
            col3: [{ text: "yʌ", type: "REP" }],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[...row.col0, "náskw", ...row.col2].concat([
                    { text: "yʌʔ", type: "REP" },
                  ])}
                />
                <Text variant="bodyS">
                  <i>(I have an animal)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [{ text: "wak", type: "PB" }],
            col1: ["nikʌhtluʔtsl"],
            col2: [{ text: "a", type: "JOIN" }],
            col3: [{ text: "yʌ", type: "REP" }],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    ...row.col2,
                    "·",
                  ].concat([{ text: "yʌ́·", type: "REP" }])}
                />
                <Text variant="bodyS">
                  <i>(I have a boyfriend)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [{ text: "wak", type: "PB" }],
            col1: ["yaʔtaseʔtsl"],
            col2: [{ text: "a", type: "JOIN" }],
            col3: [{ text: "yʌ", type: "REP" }],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    "yaʔtase·tsl",
                    ...row.col2,
                    "·",
                  ].concat([{ text: "yʌ́·", type: "REP" }])}
                />
                <Text variant="bodyS">
                  <i>(I have a girlfriend)</i>
                </Text>
              </div>
            ),
          },
        ]}
      />

      <SectionHeading level={3}>
        &quot;Having&quot; a person or animal in the past
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={createColsLol([
          "pronominal",
          "noun root",
          "joiner",
          "verb root",
          "joiner",
          "past tense",
        ])}
        data={[
          {
            col0: [
              { text: "wak", type: "PB" },
              { text: "e", type: "EP" },
            ],
            col1: ["naskw"],
            col2: [{ text: "a", type: "JOIN" }],
            col3: [{ text: "yʌʔt", type: "REP" }],
            col4: [{ text: "a", type: "JOIN" }],
            col5: [{ text: "hkweʔ", type: "PAST" }],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    "ksá·t",
                    ...row.col2,
                    ...row.col3,
                    ...row.col4,
                    ...row.col5,
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I used to have an animal)</i>
                </Text>
              </div>
            ),
          },
        ]}
      />

      <SectionHeading level={3}>
        &quot;Having&quot; a good animal
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={createColsLol(["pronominal", "noun root", "verb root"])}
        data={[
          {
            col0: [{ text: "wak", type: "PB" }],
            col1: ["naskw"],
            col2: [{ text: "iyo", type: "REP" }],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    { text: "i·yó", type: "REP" },
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I have a good animal)</i>
                </Text>
              </div>
            ),
          },
        ]}
      />

      <SectionHeading level={3}>
        &quot;Having&quot; an animal in the past
      </SectionHeading>
      <TableWrapper
        // @ts-expect-error To be addressed in LO-12
        columns={createColsLol([
          "pronominal",
          "noun root",
          "verb root",
          "past tense",
        ])}
        data={[
          {
            col0: [{ text: "wak", type: "PB" }],
            col1: ["naskw"],
            col2: [{ text: "iyo", type: "REP" }],
            col3: [{ text: "hne", type: "PAST" }],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    ...row.col2,
                    "·",
                    "hné·",
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I used to have a good animal)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [{ text: "wak", type: "PB" }],
            col1: ["naskw"],
            col2: [{ text: "aksʌ", type: "REP" }],
            col3: [{ text: "hne", type: "PAST" }],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    ...row.col2,
                    "·",
                    "hné·",
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I used to have a bad animal)</i>
                </Text>
              </div>
            ),
          },
        ]}
      />
    </>
  );
}

const createColsLol = (cols: string[]) => {
  const result = [];
  for (let i = 0; i < cols.length; i++) {
    result.push({
      accessorKey: `col${i}`,
      cell: (value: BreakdownArray) => <TextBreakdown breakdown={value} />,
      header: cols[i],
    });
    if (i !== cols.length - 1) {
      result.push({
        accessorKey: `plus-${i}`,
        cell: () => "+",
        header: "+",
      });
    } else {
      result.push({
        accessorKey: `equals`,
        cell: () => "=",
        header: "=",
      });
    }
  }
  result.push({
    accessorKey: `result`,
    cell: (renderer: (row: WeirdRow) => React.ReactNode, row: WeirdRow) => (
      <Flex gap={2}>{renderer(row)}</Flex>
    ),
    header: "Result",
  });

  return result;
};

function DialogueSection() {
  const part2: DialogueTableData = [
    ["To·kʌ́skeʔ kʌ́ sanyákheʔ", ["ʌ́·, to·kʌ́skeʔ", "Tu·wís yukninyákheʔ"]],
    [
      ["Tu·wís kʌ́", "Lotinyakú né· So·s"],
      "Lotinyakú·neʔ nok tsiʔ tehonatekháhsyu nuʔú·waʔ",
    ],
    [
      "Tó· nahe tshatehonatekháhsyu",
      "Yáh tewahu·níseʔ nok tsiʔ latatwʌni·yó nuʔú·waʔ",
    ],
    [
      "Yáh kʌ́ tehotinyaku·né· kaló· tsiʔ niyo·lé· waʔhotinyakeʔ So·s",
      [
        "Kʌʔ ok naheʔ",
        "Katlí·n né·n lotinyakú·neʔ kháleʔ yáh só·tsiʔ teyakukweʔtiyó",
      ],
    ],
    [
      ["Ok né·n Tu·wís", "Yáh só·tsiʔ tehlukweʔtiyó né·n laulhá·"],
      [
        "Latatwʌni·yó· kháleʔ laknolúkhwa̲ʔ",
        "Ok né·n niʔisé·",
        "Yáh teʔsanyákuʔ",
      ],
    ],
    [
      "ʌ́· kháleʔ yáh teʔyukninyákheʔ úhkaʔ náhteʔ ok né·n tshaʔteyukniʔtaló·tʌ̲ʔ",
      ["Tsiʔ nihsekhsá·", "Yukninyákheʔ kháleʔ yáh niʔisé͟·"],
    ],
    [
      "Etshlihwanu·tú·seʔ tó· nihotikhsá·tayʌʔ oskánhe né·n oyá· yakúkwe",
      "Yáh tehokhsá·tayʌʔ",
    ],
    ["Yáh e·só· tehetshyʌtelí, wahíˍ", "Wakanúhteʔ tsiʔ laknolúkhwa̲ʔ"],
    [
      [
        "Yáh kʌ́ teʔsanúhteʔ tsiʔ áhsʌ nikutí kunukwé· lotinyakú·neʔ",
        "Kháleʔ oyé·li nihokhsá·tayʌʔ",
      ],
      ["Yáh to·kʌ́skeʔ té·kʌ", "Ne ok tewáhsʌ úskah niyohslaké nitho·yʌ́·"],
    ],
    [
      "Sanúhteʔ kʌ́ tsiʔ nihatikhsaʔtáksʌs ne shakoyoʔokúha̲",
      ["Yáh teʔsukweʔtiyó niʔisé͟·", "Tho wakanúhte̲ʔ"],
    ],
    [
      "Yaweluhátiʔ tsiʔ yáh teshakoyʌtelí né·n shakoyoʔokúha, yáh tehuwanú·wehseʔ",
      [
        "Yaweluhátiʔ tó· nihokhsá·tayʌʔ, yáh úhkaʔ teʔsukwé·tayʌʔ ne·n yesanolúkhwaʔ",
        "Né· ok tewáhsʌ nikutí takós sanáhskwayʌʔ kháleʔ yáh teʔyesanú·wehseʔ",
      ],
    ],
    [
      "Sanúhteʔ kʌ́ tsiʔ yáh tehonúhteʔ oh náhteʔ tethsʌná·sleʔ",
      "Sʌ́haʔ e·só· takhló·li̲",
    ],
  ];

  return (
    <>
      <SectionHeading id="dialogue" level={2}>
        Dialogue
      </SectionHeading>
      <SectionHeading id="dialogue-ex1" level={3}>
        Example 1
      </SectionHeading>
      <Text>(Not yet available)</Text>
      <SectionHeading id="dialogue-ex2" level={3}>
        Example 2
      </SectionHeading>
      <DialogueTable data={part2} />
    </>
  );
}
