import { TableWrapper } from "@/design/components/tableWrapper";
import { Text } from "@/design/components/text";
import { SectionHeading, SectionHeadingProps } from "../SectionHeading";
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
    en: "Boy",
    breakdown: [{ text: "la" }, "ksá·"],
  },
  {
    en: ["Boys (2)", "Boy and girl"],
    breakdown: [["te", "DUAL"], { text: "hni" }, "ksá·"],
  },
  {
    en: ["Boys (3+)", "Mix of boys and girls"],
    breakdown: [{ text: "lati" }, "ksaʔshúha"],
  },
  {
    en: "Girl",
    breakdown: [{ text: "ye" }, "ksá·"],
  },
  {
    en: "Girls (2)",
    breakdown: [["te", "DUAL"], { text: "kni" }, "ksá·"],
  },
  {
    en: ["Girls (3+)"],
    breakdown: [{ text: "kuti" }, "ksaʔshúha"],
  },
];

const dataAdolescents = [
  {
    en: "Young man",
    breakdown: [{ text: "la" }, "nikʌtlúha"],
  },
  {
    en: ["Young men (2)"],
    breakdown: [["te", "DUAL"], { text: "hni" }, "nikʌtlúha"],
  },
  {
    en: ["Young men (3+)"],
    breakdown: [{ text: "lati" }, "nikʌtluʔokúha"],
  },
  {
    en: "Young woman",
    breakdown: [{ text: "ye" }, "yaʔtaséha"],
  },
  {
    en: "Young women (2)",
    breakdown: [["te", "DUAL"], { text: "kni" }, "yaʔtaséha"],
  },
  {
    en: ["Young women (3+)"],
    breakdown: [{ text: "kuti" }, "yaʔtaseʔokúha"],
  },
];

const dataAdults = [
  {
    en: "Man",
    breakdown: [{ text: "l" }, "u·kwé·"],
  },
  {
    en: ["Men (2)", "Man and woman"],
    breakdown: [["te", "DUAL"], { text: "hn" }, "u·kwé·"],
  },
  {
    en: ["Men (3+)", "Mix of men and women"],
    breakdown: [{ text: "lʌn" }, "u·kwé·"],
  },
  {
    en: "Woman",
    breakdown: [{ text: "yak" }, "u·kwé·"],
  },
  {
    en: "Women (2)",
    breakdown: [["te", "DUAL"], { text: "kn" }, "u·kwé·"],
  },
  {
    en: ["Women (3+)"],
    breakdown: [{ text: "kun" }, "u·kwé·"],
  },
];

const dataOlderPeople = [
  {
    en: "Older man",
    breakdown: [{ text: "lo" }, "kstʌ́ha"],
  },
  {
    en: ["Older men (2)", "Older man and older woman"],
    breakdown: [{ text: "loti" }, "kstʌ́ha"],
  },
  {
    en: ["Older men (3+)", "Mix of older men and older women"],
    breakdown: [{ text: "loti" }, "kstʌhokúha"],
  },
  {
    en: "Older woman",
    breakdown: [{ text: "ako", type: "PLB" }, "kstʌ́ha"],
  },
  {
    en: "Older women (2)",
    breakdown: [{ text: "yoti" }, "kstʌ́ha"],
  },
  {
    en: ["Older women (3+)"],
    breakdown: [{ text: "yoti" }, "kstʌhokúha"],
  },
];
