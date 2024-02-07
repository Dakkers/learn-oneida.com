import { TableWrapper } from "@/design/components/tableWrapper";
import { Text } from "@/design/components/text";
import { SectionHeading } from "../SectionHeading";

export function PeopleResource({ baseLevel = 1 }: { baseLevel?: 1 | 2 }) {
  return (
    <>
      <SectionHeading id="people-resource" level={baseLevel}>
        People
      </SectionHeading>
      <Text>
        It is important to understand that the translations for two or more
        people are not literal. <i>tehniská·</i> is not the literal translation
        for &quot;2 boys&quot; – that is <i>tehniyáhse tehniská·</i>. You can
        learn more about this in the &quot;Counting&quot; resource which is part
        of module 3.
      </Text>

      <SectionHeading id="people-resource-children" level={baseLevel + 1}>
        Children
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={dataChildren}
      />

      <SectionHeading id="people-resource-adolescents" level={baseLevel + 1}>
        Adolescents
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={dataAdolescents}
      />

      <SectionHeading id="people-resource-adults" level={baseLevel + 1}>
        Adults
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsParadigmRed}
        data={dataAdults}
      />

      <SectionHeading id="people-resource-older" level={baseLevel + 1}>
        Older people
      </SectionHeading>
      <Text>
        <b>Note</b>: These words do not mean "old people", "seniors", "elders",
        etc. They mean people that are older than the speaker. Thus,{" "}
        <b>these words are not commonly used in this context (as nouns)</b>.
        Instead, they are used as verbs. You can learn more about this in the
        "Age" resource which is part of module 2.
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
    breakdown: ["te", { text: "hni" }, "ksá·"],
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
    breakdown: ["te", { text: "kni" }, "ksá·"],
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
    breakdown: ["te", { text: "hni" }, "nikʌtlúha"],
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
    breakdown: ["te", { text: "kni" }, "yaʔtaséha"],
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
    breakdown: ["te", { text: "hn" }, "u·kwé·"],
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
    breakdown: ["te", { text: "kn" }, "u·kwé·"],
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
