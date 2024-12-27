"use client";
import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";

export function PeopleArticle({ level = 1 }: ArticleProps) {
  const dataChildren = [
    {
      en: "1 boy",
      breakdown: [["la"], "ksá·"],
      pronoun: "m",
    },
    {
      en: ["2 boys", "1 boy + 1 girl"],
      breakdown: [["te", "DUAL"], ["hni"], "ksá·"],
      pronoun: "2m",
    },
    {
      en: ["3+ boys", "Mix of boys and girls"],
      breakdown: [["lati"], "ksaʔshúha̲"],
      pronoun: "ms",
    },
    {
      en: "1 girl",
      breakdown: [["ye"], "ksá·"],
      pronoun: "f",
    },
    {
      en: "2 girls",
      breakdown: [["te", "DUAL"], ["kni"], "ksá·"],
      pronoun: "2f",
    },
    {
      en: ["3+ girls"],
      breakdown: [["kuti"], "ksaʔshúha̲"],
      pronoun: "fs",
    },
  ];

  const dataAdolescents = [
    {
      en: "1 young man",
      breakdown: [["la"], "nikʌtlúha̲"],
      pronoun: "m",
    },
    {
      en: ["2 young men"],
      breakdown: [["te", "DUAL"], ["hni"], "nikʌtlúha̲"],
      pronoun: "2m",
    },
    {
      en: ["3+ young men"],
      breakdown: [["lati"], "nikʌtluʔokúha̲"],
      pronoun: "ms",
    },
    {
      en: "1 young woman",
      breakdown: [["ye"], "yaʔtaséha̲"],
      pronoun: "f",
    },
    {
      en: "2 young women",
      breakdown: [["te", "DUAL"], ["kni"], "yaʔtaséha̲"],
      pronoun: "2f",
    },
    {
      en: ["3+ young women"],
      breakdown: [["kuti"], "yaʔtaseʔokúha̲"],
      pronoun: "fs",
    },
  ];

  const dataAdults = [
    {
      en: "1 man",
      breakdown: [["l"], "u·kwé̲·"],
      pronoun: "m",
    },
    {
      en: ["2 men", "1 man + 1 woman"],
      breakdown: [["te", "DUAL"], ["hn"], "u·kwé̲·"],
      pronoun: "2m",
    },
    {
      en: ["3 men", "Mix of men and women"],
      breakdown: [["lʌn"], "u·kwé̲·"],
      pronoun: "ms",
    },
    {
      en: "1 woman",
      breakdown: [["yak"], "u·kwé̲·"],
      pronoun: "f",
    },
    {
      en: "2 women",
      breakdown: [["te", "DUAL"], ["kn"], "u·kwé̲·"],
      pronoun: "2f",
    },
    {
      en: ["3+ women"],
      breakdown: [["kun"], "u·kwé̲·"],
      pronoun: "fs",
    },
  ];

  const dataOlderPeople = [
    {
      en: "1 older man",
      breakdown: [["lo"], "kstʌ́ha̲"],
      pronoun: "m",
    },
    {
      en: ["2 older men", "1 older man + 1 older woman"],
      breakdown: [["loti"], "kstʌ́ha̲"],
      pronoun: "2m",
    },
    {
      en: ["3+ older men", "Mix of older men and older women"],
      breakdown: [["loti"], "kstʌhokúha̲"],
      pronoun: "ms",
    },
    {
      en: "1 older woman",
      breakdown: [["ako"], "kstʌ́ha̲"],
      pronoun: "f",
    },
    {
      en: "2 older women",
      breakdown: [["yoti"], "kstʌ́ha̲"],
      pronoun: "2f",
    },
    {
      en: ["3+ older women"],
      breakdown: [["yoti"], "kstʌhokúha̲"],
      pronoun: "fs",
    },
  ];

  return (
    <>
      <SectionHeading id="people-article" level={level}>
        People
      </SectionHeading>
      <Text>
        It is important to understand that the translations for two or more
        people are not literal. <b>tehniská·</b> is not the literal translation
        for &quot;2 boys&quot; — that is <b>tehniyáhse tehniská·</b>. You can
        learn more about this in the &quot;Counting&quot; article which is part
        of module 3.
      </Text>

      <SectionHeading
        id="people-article-children"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Children
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={dataChildren.map((val) => ({
          ...val,
          audioFile: `module01/children/${val.pronoun}.mp3`,
        }))}
      />

      <SectionHeading
        id="people-article-adolescents"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Adolescents
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={dataAdolescents.map((val) => ({
          ...val,
          audioFile: `module01/adolescents/${val.pronoun}.mp3`,
        }))}
      />

      <SectionHeading
        id="people-article-adults"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Adults
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={dataAdults.map((val) => ({
          ...val,
          audioFile: `module01/adults/${val.pronoun}.mp3`,
        }))}
      />

      <SectionHeading
        id="people-article-older"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Older people
      </SectionHeading>
      <Text>
        <b>Note</b>: These words do not mean &quot;old people&quot;,
        &quot;seniors&quot;, &quot;elders&quot;, etc. They mean people that are
        older than the speaker. Thus,{" "}
        <b>these words are not commonly used in this context (as nouns)</b>.
        Instead, they are used as verbs. You can learn more about this in the
        &quot;Age&quot; article which is part of module 2.
      </Text>
      <TableWrapper
        columns={TableWrapper.columnsParadigmBlue}
        data={dataOlderPeople.map((val) => ({
          ...val,
          audioFile: `module01/older_people/${val.pronoun}.mp3`,
        }))}
      />
    </>
  );
}
