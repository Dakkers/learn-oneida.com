import {
  TableWrapper,
  TableWrapperProps,
} from "@/design/components/tableWrapper";
import React from "react";
import { SectionHeading } from "../SectionHeading";

const oneidaToEnglishModule01 = [
  ["1", "Né· lokstʌ́ha lanú·wehseʔ oní né· khaleʔ akokstʌ́ha yenú·wehse̲ʔ"],
  ["2", "Yah kʌ tesanúhteʔ oh náhte yutátyats né· thikʌ́ yeksá·"],
  ["3", "Kutikwekú kutiksaʔshúha luwanú·wehseʔ né· laulhá·"],
  ["4", "Kwítel kʌ luwa·yáts thikʌ́ laksá·"],
  ["5", "Sʌ́haʔ yakninú·wehseʔ ne thí·kʌ̲"],
  ["6", "Yah tehonúhteʔ tsiʔ náhteʔ luwati·yáts thikʌ́ latiksaʔshúha̲ʔ"],
  ["7", "Yah ki só·tsiʔ tehinú·wehseʔ Wílo"],
  ["8", "Akwekú shakonú·wehseʔ ne thikʌ́ lokstʌ́ha,nok tsiʔ yah neʔn Wá·li"],
  ["9", "Sanúhteʔ kʌ úhkaʔ náhteʔ yenú·wehseʔ kaʔí·kʌ"],
  ["10", "Sʌ́haʔ snú·wehseʔ kaʔikʌ́ tsiʔ ni·yóht thikʌ́, wahi"],
  ["11", "Yah kʌ tehninú·wehse̲ʔ (tehniyáhse)"],
  ["12", "Wakanúhteʔ tsiʔ shukwanú·wehseʔ thikʌ́ lokstʌ́ha̲"],
  ["13", "Kunú·wehseʔ niʔisé·, kwah né·n tsiʔ niyot niʔisé· sknú·wehse̲ʔ"],
  ["14", "Tokʌ́skeʔ kʌ tsiʔ lonúhteʔ oh náhteʔ yúkyats"],
  ["15", "Wé·ne tsiʔ yah tehinú·wehseʔ thikʌ́ lú·kwe̲"],
];

const englishToOneidaModule01 = [
  ["16", "Do those women know anything?"],
  ["17", "Who else doesn't like this?"],
  ["18", "I don't like the girl that you like."],
  ["19", "Does that old woman like us?"],
  ["20", "That woman's not Mary, it's Elizabeth."],
  ["21", "Who do you like more, George Jones or Justin Bieber?"],
  ["22", "Who knows the old woman named Elizabeth?"],
  ["23", "This young man doesn't know your name."],
  ["24", "I only like Mary a little bit."],
  ["25", "I like David, but I still don't like Charlie."],
  ["26", "How does Mary know that?"],
  ["27", "I know the names of those old men."],
  ["28", "I know that you like him, but do you know if he likes you?"],
  ["29", "Who else knows the names of the young men?"],
  ["30", "That old man really likes this, but I know that he likes that more."],
];

const oneidaToEnglishModule02 = [
  ["1", "Akwekú neʔn teyakwatahnu·teleʔ yesanú·wehse"],
  ["2", "Lawʌheyú kʌ neʔn Wílo lohsótha"],
  ["3", "Sheyʌtelí kʌ úhkaʔ ok náhteʔ neʔn lutátnuhkweʔ Tu·wís"],
  ["4", "Shekú kʌ tehnúnheʔ yesayoʔokúha"],
  ["5", "Yah úhkaʔ teʔkheyʌtelí thikʌ lutátnuhkweʔ Tshyalé"],
  ["6", "Íhsi kʌ nú· né· oyé·li naʔtehaohsliyá·ku né· etsheʔkʌ ha"],
  ["7", "Yah tehyatátnuhkweʔ Tu·wís kháleʔ tsyalá·seʔ nok tsiʔ teshyatyelʌ"],
  ["8", "Smith kʌ tehnihsʌná·sleʔ né· Tshyalé luwayoʔokuha"],
  ["9", "Náhteʔ ok kʌ sanuhte né· liʔkʌ ha laolihwá·ke"],
  ["10", "Tó· sʌ haʔ kʌʔnitho·yʌ ·ha né· Kwítel tsiʔ ni·yót niʔisé·"],
  ["11", "Latikwekú kaló nʌ né· oyé·li naʔtehonohsliyá·ku neʔn luwatiyʌʔokúha"],
  ["12", "Sʌ haʔ kʌ kʌʔnitisayʌ ha tsiʔ ni·yót swatʌloʔshúha"],
  ["13", "Yah úhkaʔ náhteʔ teyuknú·wehseʔ né· yaʔníha laohwa·tsíleʔ"],
  ["14", "Tákʌʔ ʌshehlo·lí· yukeʔkʌ ha tsiʔ yakawʌheyú né· yonatʌ·ló·"],
  ["15", "Yah thaʔtetsitsyatyelʌ né· tsyalá·seʔ Kwítel"],
  ["16", "Shekú kʌ tehnúnheʔ né· Tá·wet luwayʌ ha"],
  ["17", "Akwekú luwá·nuwehseʔ thikʌ lokstʌ ha"],
  ["18", "Yah thaʔteyakyatatyʌtelí né· tsyalá·seʔ Wílo"],
  [
    "19",
    "To niyohslaké sʌ haʔ kʌʔnitho·yʌ · neʔn yanulhá· tsiʔ ni·yót neʔn yaʔníha",
  ],
  ["20", "Akwekú kʌ shakoyʌtelí neʔn sheyatleʔokúha"],
];

const englishToOneidaModule02 = [
  ["21", "Her granddaughter is less than 10 years old."],
  ["22", "Is your cousin Paul younger than you?"],
  ["23", "I don't know all of your younger sisters."],
  ["24", "Her late grandmother's name is Ellen."],
  ["25", "What are your brothers' and sisters' names?"],
  ["26", "Is Margaret's older sister still alive?"],
  ["27", "My parents don't know your parents."],
  ["28", "Is your late grandfather's name Joe?"],
  ["29", "He doesn't know anyone in my uncle's family."],
  ["30", "My niece is just eight years younger than me."],
  ["31", "He's almost 50 years old, he's not that young."],
  ["32", "John's parents are not alive. They're dead."],
  ["33", "What is Mary's granddaughter's last name?"],
  ["34", "Tell us who you are related to."],
  ["35", "How much older is your older sister than you?"],
  ["36", "Are you related to that young good- looking woman named Kathy?"],
  ["37", "How many of his kids are still alive?"],
  ["38", "Who do you look like in your family?"],
  ["39", "She doesn't know me but she still hates me."],
  ["40", "Do my parents and your parents know one another?"],
];

type Group = "module01" | "module02";

function TranslationExerciseTable({
  data,
}: {
  data: TableWrapperProps["data"];
}) {
  return (
    <TableWrapper
      columns={[
        {
          accessorKey: "num",
          cell: (value) => <span className="w-16">{value}</span>,
          header: "",
        },
        { accessorKey: "question", header: "" },
        {
          accessorKey: "answer",
          cell: () => <span className="w-96">&nbsp;</span>,
          header: "",
        },
      ]}
      data={data}
    />
  );
}

export function TranslationExercises({ group }: { group?: Group }) {
  const data = React.useMemo(() => {
    if (!group) {
      return [
        ...oneidaToEnglishModule01,
        ...englishToOneidaModule01,
        ...oneidaToEnglishModule02,
        ...englishToOneidaModule02,
      ].map((value, index) => [(index + 1).toString(), value[1]]);
    }
    const mapping: Record<Group, string[][]> = {
      module01: [...oneidaToEnglishModule01, ...englishToOneidaModule01],
      module02: [...oneidaToEnglishModule02, ...englishToOneidaModule02],
    };
    return mapping[group];
  }, [group]);

  return (
    <TranslationExerciseTable
      data={data.map(([num, question]) => ({ num, question, answer: "" }))}
    />
  );
}

export function TranslationExercisesSection({
  group,
  level = 2,
}: {
  group?: Group;
  level?: 1 | 2;
}) {
  return (
    <>
      <SectionHeading id="translation-exercises" level={level}>
        Translation Exercises
      </SectionHeading>
      <TranslationExercises group={group} />
    </>
  );
}
