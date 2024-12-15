"use client";
import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";

export function PeopleArticle({ level = 1 }: ArticleProps) {
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
        data={dataChildren}
      />

      <SectionHeading
        id="people-article-adolescents"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Adolescents
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={dataAdolescents}
      />

      <SectionHeading
        id="people-article-adults"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Adults
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={dataAdults}
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
        data={dataOlderPeople}
      />
    </>
  );
}

const dataChildren = [
  {
    en: "1 boy",
    breakdown: [{ text: "la" }, "ksá·"],
  },
  {
    en: ["2 boys", "1 boy + 1 girl"],
    breakdown: [["te", "DUAL"], { text: "hni" }, "ksá·"],
  },
  {
    en: ["3+ boys", "Mix of boys and girls"],
    breakdown: [{ text: "lati" }, "ksaʔshúha̲"],
  },
  {
    en: "1 girl",
    breakdown: [{ text: "ye" }, "ksá·"],
  },
  {
    en: "2 girls",
    breakdown: [["te", "DUAL"], { text: "kni" }, "ksá·"],
  },
  {
    en: ["3+ girls"],
    breakdown: [{ text: "kuti" }, "ksaʔshúha̲"],
  },
];

const dataAdolescents = [
  {
    en: "1 young man",
    breakdown: [{ text: "la" }, "nikʌtlúha̲"],
  },
  {
    en: ["2 young men"],
    breakdown: [["te", "DUAL"], { text: "hni" }, "nikʌtlúha̲"],
  },
  {
    en: ["3+ young men"],
    breakdown: [{ text: "lati" }, "nikʌtluʔokúha̲"],
  },
  {
    en: "1 young woman",
    breakdown: [{ text: "ye" }, "yaʔtaséha̲"],
  },
  {
    en: "2 young women",
    breakdown: [["te", "DUAL"], { text: "kni" }, "yaʔtaséha̲"],
  },
  {
    en: ["3+ young women"],
    breakdown: [{ text: "kuti" }, "yaʔtaseʔokúha̲"],
  },
];

const dataAdults = [
  {
    en: "1 man",
    breakdown: [{ text: "l" }, "u·kwé̲·"],
  },
  {
    en: ["2 men", "1 man + 1 woman"],
    breakdown: [["te", "DUAL"], { text: "hn" }, "u·kwé̲·"],
  },
  {
    en: ["3 men", "Mix of men and women"],
    breakdown: [{ text: "lʌn" }, "u·kwé̲·"],
  },
  {
    en: "1 woman",
    breakdown: [{ text: "yak" }, "u·kwé̲·"],
  },
  {
    en: "2 women",
    breakdown: [["te", "DUAL"], { text: "kn" }, "u·kwé̲·"],
  },
  {
    en: ["3+ women"],
    breakdown: [{ text: "kun" }, "u·kwé̲·"],
  },
];

const dataOlderPeople = [
  {
    en: "1 older man",
    breakdown: [{ text: "lo" }, "kstʌ́ha̲"],
  },
  {
    en: ["2 older men", "1 older man + 1 older woman"],
    breakdown: [{ text: "loti" }, "kstʌ́ha̲"],
  },
  {
    en: ["3+ older men", "Mix of older men and older women"],
    breakdown: [{ text: "loti" }, "kstʌhokúha̲"],
  },
  {
    en: "1 older woman",
    breakdown: [{ text: "ako", type: "PLB" }, "kstʌ́ha̲"],
  },
  {
    en: "2 older women",
    breakdown: [{ text: "yoti" }, "kstʌ́ha̲"],
  },
  {
    en: ["3+ older women"],
    breakdown: [{ text: "yoti" }, "kstʌhokúha̲"],
  },
];
