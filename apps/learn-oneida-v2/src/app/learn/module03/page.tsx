"use client";

import { Flex } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Box } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";

import { TableOfContents as TOC } from "~/components/TableOfContents";
import { TableWrapper } from "@/components/TableWrapper";
import {
  type BreakdownArray,
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
import {
  DialogueTable,
  type DialogueTableData,
} from "~/components/DialogueTable";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";
import { Letter } from "@/components/Letter";
import { getDialogueModule03 } from "@/data/module03";
import { LinkWrapper } from "@/components/LinkWrapper";

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

        <TOC.Item label="Good and Bad Conjugations" value="good-bad-people">
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
      breakdown: [["k", "PR"], "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like it",
      breakdown: [["k", "PR"], "nú·wehs", "kwe̲ʔ"],
    },
    {
      en: "it likes me",
      breakdown: [["wak", "PB"], "nú·wehse̲ʔ"],
    },
    {
      en: "it used to like me",
      breakdown: [["wak", "PB"], "nú·wehs", "kwe̲ʔ"],
    },
    {
      en: "I like you",
      breakdown: [["ku", "PP"], "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like you",
      breakdown: [["ku", "PP"], "nú·wehs", "kwe̲ʔ"],
    },
    {
      en: "I love it",
      breakdown: [["k", "PR"], "nolúkhwa̲"],
    },
    {
      en: "I used to love it",
      breakdown: [["k", "PR"], "nolúkhwa", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "it loves me",
      breakdown: [["wak", "PB"], "nolúkhwa̲"],
    },
    {
      en: "it used to love me",
      breakdown: [["wak", "PB"], "nolúkhwa", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I love you",
      breakdown: [["ku", "PP"], "nolúkhwa̲"],
    },
    {
      en: "I used to love you",
      breakdown: [["ku", "PP"], "nolúkhwa", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I know it",
      breakdown: [["k", "PR"], "yʌtelí̲"],
    },
    {
      en: "I used to know it",
      breakdown: [["k", "PR"], "yʌteli", ["hné·", "PAST"]],
    },
    {
      en: "it knows me",
      breakdown: [["wak", "PB"], "yʌtelí̲"],
    },
    {
      en: "it used to know me",
      breakdown: [["wak", "PB"], "yʌteli", ["hné·", "PAST"]],
    },
    {
      en: "I know you",
      breakdown: [["ku", "PP"], "yʌtelí̲"],
    },
    {
      en: "I used to know you",
      breakdown: [["ku", "PP"], "yʌteli", ["hné·", "PAST"]],
    },

    {
      en: "I like myself",
      breakdown: [["k", "PR"], ["atat", "REFL"], "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like myself",
      breakdown: [["k", "PR"], ["atat", "REFL"], "nú·wehs", "kwe̲ʔ"],
    },

    {
      en: "You and I like each other",
      breakdown: [["te", "DUAL"], ["ty", "PR"], ["atat", "REFL"], "nú·wehse̲ʔ"],
    },
    {
      en: "You and I used to like each other",
      breakdown: [
        ["te", "DUAL"],
        ["ty", "PR"],
        ["atat", "REFL"],
        "nú·wehs",
        "kwe̲ʔ",
      ],
    },

    {
      en: "I know",
      breakdown: [["wak", "PB"], "anúhte̲ʔ"],
    },
    {
      en: "I used to know",
      breakdown: [["wak", "PB"], "anúhte", ["hkwe̲ʔ", "PAST"]],
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
      en: "I am a child",
      breakdown: [["ke", "PR"], "khsá·"],
    },
    {
      en: "I was / used to be a child",
      breakdown: [["ke", "PR"], "khsa", ["hné·", "PAST"]],
    },
    {
      en: "I am a young man",
      breakdown: [["k", "PR"], "nikʌ́htluʔ"],
    },
    {
      en: "I was / used to be a young man",
      breakdown: [["k", "PR"], "nikʌhtlu", ["hné·", "PAST"]],
    },
    {
      en: "I am a young woman",
      breakdown: [["k", "PR"], "yaʔtaséha"],
    },
    {
      en: "I was / used to be a young woman",
      breakdown: [["k", "PR"], "yaʔtase", ["hné·", "PAST"]],
    },
    {
      en: "I am free / single",
      breakdown: [["k", "PR"], "atatwʌni·yó̲·"],
    },
    {
      en: "I was / used to be free / single",
      breakdown: [["k", "PR"], "atatwʌni·yo", ["hné·", "PAST"]],
    },
    {
      en: "I didn't used to be free / single (but I am now)",
      breakdown: ["yáh teʔ", ["k", "PR"], "atatwʌni·yo", ["hné·", "PAST"]],
    },
    {
      en: "I am engaged (to someone)",
      breakdown: [["yukni", "PB"], "nyákheʔ"],
    },
    {
      en: "I was / used to be engaged (to someone)",
      breakdown: [["yukni", "PB"], "nyákhe", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I am in a relationship (with someone)",
      breakdown: [["yákn", "PR"], "ehse̲"],
    },
    {
      en: "I was / used to be in a relationship (with someone)",
      breakdown: [["yákn", "PR"], "eh", ["skwe̲ʔ", "PAST"]],
    },
    {
      en: "I am married",
      breakdown: [["wake", "PB"], "nyákuʔ"],
    },
    {
      en: "I was / used to be married",
      breakdown: [["wake", "PB"], "nyaku", ["hné·", "PAST"]],
    },
    {
      en: "I didn't used to be married (but I am now)",
      breakdown: ["yáh teʔ", ["wake", "PB"], "nyaku", ["hné·", "PAST"]],
    },
    {
      en: "I am separated (from someone)",
      breakdown: ["te", ["yuky", "PB"], "atekháshyuʔ"],
    },
    {
      en: "I was / used to be separated (from someone)",
      breakdown: ["te", ["yuky", "PB"], "atekhashyu", ["hné·", "PAST"]],
    },
    {
      en: "my name is ...",
      breakdown: ["... ní·", ["yúk", "PP"], "yats"],
    },
    {
      en: "my name was / used to be ...",
      breakdown: ["... ní·", ["yúk", "PP"], "yat", ["skwe̲ʔ", "PAST"]],
    },
    {
      en: "I like her / them",
      breakdown: [["khe", "PP"], "nú·wehse̲ʔ"],
    },
    {
      en: "I used to like her / them",
      breakdown: [["khe", "PP"], "nú·weh", ["skwe̲ʔ", "PAST"]],
    },
    {
      en: "I didn't used to like her / them (but I do now)",
      breakdown: ["yáh teʔ", ["khe", "PP"], "nú·weh", ["skwe̲ʔ", "PAST"]],
    },
    {
      en: "I love her / them",
      breakdown: [["khe", "PP"], "nolúkhwa̲ʔ"],
    },
    {
      en: "I used to love her / them",
      breakdown: [["khe", "PP"], "nolúkhwa", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I didn't used to love her / them (but I do now)",
      breakdown: ["yáh te", ["khe", "PP"], "nolúkhwa", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I am 20 years old",
      breakdown: ["tewáhsʌ naʔte", ["wak", "PB"], "ohsliyá·ku̲"],
    },
    {
      en: "I was / used to be 20 years old",
      breakdown: [
        "tewáhsʌ naʔte",
        ["wak", "PB"],
        "ohsliyaʔku",
        ["hné·", "PAST"],
      ],
    },
    {
      en: "I know / am aware",
      breakdown: [["wak", "PB"], "anúhte̲ʔ"],
    },
    {
      en: "I used to know / be aware (but not now)",
      breakdown: [["wak", "PB"], "anúhte", ["hkwe̲ʔ", "PAST"]],
    },
    {
      en: "I didn't used to know / be aware (but I do/am now)",
      breakdown: ["yáh teʔ", ["wak", "PB"], "anúhte", ["hkwe̲ʔ", "PAST"]],
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

      <TableWrapper
        columns={TableWrapper.columnsEnglishBreakdown}
        data={data}
      />
    </>
  );
}

function PastTenseWhen() {
  const data = [
    {
      en: "I am a child",
      breakdown: [["k", "PR"], "ekhsá·"],
    },
    {
      en: "When I was / used to be a child",
      breakdown: ["tshi", ["k", "PR"], "ekhsá·"],
    },
    {
      en: "I am a young man",
      breakdown: [["k", "PR"], "nikʌ́htluʔ"],
    },
    {
      en: "When I was / used to be a young man",
      breakdown: ["tshi", ["k", "PR"], "nikʌh́tluʔ"],
    },
    {
      en: "I am a young woman",
      breakdown: [["k", "PR"], "yá·taseha̲"],
    },
    {
      en: "When I was / used to be a young woman",
      breakdown: ["tshi", ["k", "PR"], "yá·taséha̲"],
    },
    {
      en: "I am free / single",
      breakdown: [["k", "PR"], "atatwʌni·yó̲·"],
    },
    {
      en: "When I was free / single",
      breakdown: ["tshi", ["k", "PR"], "atatwʌni·yó̲·"],
    },
    {
      en: "I am engaged (to someone)",
      breakdown: [["yukni", "PB"], "nyákheʔ"],
    },
    {
      en: "When I was engaged (to someone)",
      breakdown: ["tshi", ["yukni", "PB"], "nyákheʔ"],
    },
    {
      en: "I am in a relationship (with someone)",
      breakdown: [["yákn", "PR"], "ehse̲"],
    },
    {
      en: "When I was in a relationship (with someone)",
      breakdown: ["tshi", ["yákn", "PR"], "ehse̲"],
    },
    {
      en: "I am married",
      breakdown: [["wake", "PB"], "nyákuʔ"],
    },
    {
      en: "When I was married",
      breakdown: ["tshi", ["wake", "PB"], "nyákuʔ"],
    },
    {
      en: "I am married (to someone)",
      breakdown: [["yukni", "PB"], "nyákuʔ"],
    },
    {
      en: "When I was married (to someone)",
      breakdown: ["tshi", ["yukni", "PB"], "nyá·kuʔ"],
    },
    {
      en: "I am separated (from someone)",
      breakdown: ["te", ["yukya", "PB"], "tekháshyuʔ"],
    },
    {
      en: "When I was separated (from someone)",
      breakdown: ["tshaʔ", "te", ["yukya", "PB"], "tekháshyuʔ"],
    },
    {
      en: "I love her / them",
      breakdown: [["khe", "PP"], "nolúkhwa̲ʔ"],
    },
    {
      en: "When I loved her / them",
      breakdown: ["tshi", ["khe", "PP"], "nolúkhwa̲ʔ"],
    },
    {
      en: "I am 20 years old",
      breakdown: ["tewáhsʌ naʔte", ["wak", "PB"], "ohsliyá·ku̲"],
    },
    {
      en: "When I was / used to be 20 years old",
      breakdown: [
        "tewáhsʌ ",
        ["tshaʔ", "PAST"],
        "te",
        ["wak", "PB"],
        "ohsliyá·ku̲",
      ],
    },
  ];

  return (
    <>
      <SectionHeading id="past-tense-when" level={3}>
        When something was the case
      </SectionHeading>
      <Text>
        Now, here are examples of when something was the case. This is
        communicated using a pre-pronominal prefix called the{" "}
        <LinkWrapper page="coin" />.
      </Text>

      <TableWrapper
        columns={TableWrapper.columnsEnglishBreakdown}
        data={data}
      />
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
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColsLol([
          "pronominal",
          "noun root",
          "joiner",
          "verb root",
        ])}
        data={[
          {
            col0: [["wake", "PB"]],
            col1: [["ksaʔt", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌ"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ["ksá·t", "NOUN"],
                    ...row.col2,
                    ...row.col3,
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I have a child)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [["wak", "PB"]],
            col1: [["wil", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌ"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    ...row.col2,
                    "·",
                  ].concat(["yʌ́·"])}
                />
                <Text variant="bodyS">
                  <i>(I have a baby)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [["wak", "PB"]],
            col1: [["naskw", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌ"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ["náskw", "NOUN"],
                    ...row.col2,
                    "yʌʔ",
                  ]}
                />
                <Text variant="bodyS">
                  <i>(I have an animal)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [["wak", "PB"]],
            col1: [["nikʌhtluʔtsl", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌ"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
                    ...row.col2,
                    "·",
                  ].concat(["yʌ́·"])}
                />
                <Text variant="bodyS">
                  <i>(I have a boyfriend)</i>
                </Text>
              </div>
            ),
          },
          {
            col0: [["wak", "PB"]],
            col1: [["yaʔtaseʔtsl", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌ"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ["yaʔtase·tsl", "NOUN"],
                    ...row.col2,
                    "·",
                    "yʌ́·",
                  ]}
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
        // @ts-expect-error TODO - TableWrapper/Table generics
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
            col0: [["wake", "PB"]],
            col1: [["naskw", "NOUN"]],
            col2: [["a", "JOIN"]],
            col3: ["yʌʔt"],
            col4: [["a", "JOIN"]],
            col5: [["hkweʔ", "PAST"]],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[
                    ...row.col0,
                    ...row.col1,
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
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColsLol(["pronominal", "noun root", "verb root"])}
        data={[
          {
            col0: [["wak", "PB"]],
            col1: [["naskw", "NOUN"]],
            col2: ["iyo"],
            result: (row: WeirdRow) => (
              <div>
                <TextBreakdown
                  breakdown={[...row.col0, ...row.col1, ["i·yó"]]}
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
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={createColsLol([
          "pronominal",
          "noun root",
          "verb root",
          "past tense",
        ])}
        data={[
          {
            col0: [["wak", "PB"]],
            col1: [["naskw", "NOUN"]],
            col2: ["iyo"],
            col3: [["hne", "PAST"]],
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
            col0: [["wak", "PB"]],
            col1: [["naskw", "NOUN"]],
            col2: ["aksʌ"],
            col3: [["hne", "PAST"]],
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
        accessorKey: "equals",
        cell: () => "=",
        header: "=",
      });
    }
  }
  result.push({
    accessorKey: "result",
    cell: (renderer: (row: WeirdRow) => React.ReactNode, row: WeirdRow) => (
      <Flex gap={2}>{renderer(row)}</Flex>
    ),
    header: "Result",
  });

  return result;
};

function DialogueSection() {
  const data = getDialogueModule03();

  return (
    <>
      <SectionHeading id="dialogue" level={2}>
        Dialogue
      </SectionHeading>
      <SectionHeading id="dialogue-ex1" level={3}>
        Example 1
      </SectionHeading>
      <DialogueTable audioFolder="module03/dialogue/part1" data={data.part1} />
      <SectionHeading id="dialogue-ex2" level={3}>
        Example 2
      </SectionHeading>
      <DialogueTable audioFolder="module03/dialogue/part2" data={data.part2} />
    </>
  );
}
