import {
  TableWrapper,
  TableWrapperProps,
} from "@/components/TableWrapper";
import React from "react";
import { SectionHeading } from "../SectionHeading";

const oneidaToEnglishModule01 = [
  ["1", "Né· lokstʌ́ha lanú·wehseʔ oní né· khaleʔ akokstʌ́ha yenú·wehse̲ʔ"],
  ["2", "Yah kʌ́ tesanúhteʔ oh náhte yutátyats né· thikʌ́ yeksá·"],
  ["3", "Kutikwekú kutiksaʔshúha luwanú·wehseʔ né· laulhá·"],
  ["4", "Kwítel kʌ́ luwa·yáts thikʌ́ laksá·"],
  ["5", "Sʌ́haʔ yakninú·wehseʔ ne thí·kʌ̲"],
  ["6", "Yah tehonúhteʔ tsiʔ náhteʔ luwati·yáts thikʌ́ latiksaʔshúha̲ʔ"],
  ["7", "Yah ki só·tsiʔ tehinú·wehseʔ Wílo"],
  ["8", "Akwekú shakonú·wehseʔ ne thikʌ́ lokstʌ́ha,nok tsiʔ yah neʔn Wá·li"],
  ["9", "Sanúhteʔ kʌ́ úhkaʔ náhteʔ yenú·wehseʔ kaʔí·kʌ̲"],
  ["10", "Sʌ́haʔ snú·wehseʔ kaʔi·kʌ́· tsiʔ ni·yóht thikʌ́, wáhi̲"],
  ["11", "Yah kʌ́ tehninú·wehse̲ʔ (tehniyáhse)"],
  ["12", "Wakanúhteʔ tsiʔ shukwanú·wehseʔ thikʌ́ lokstʌ́ha̲"],
  ["13", "Kunú·wehseʔ niʔisé·, kwah né·n tsiʔ niyot niʔisé· sknú·wehse̲ʔ"],
  ["14", "Tokʌ́skeʔ kʌ́ tsiʔ lonúhteʔ oh náhteʔ yúkyats"],
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
  ["1", "Akwekú neʔn teyakwatahnu·teleʔ yesanú·wehse̲ʔ"],
  ["2", "Lawʌheyú kʌ́ neʔn Wílo lohsótha̲"],
  ["3", "Sheyʌtelí kʌ́ úhkaʔ ok náhteʔ neʔn lutátnuhkweʔ Tu·wís"],
  ["4", "Shekú kʌ́ tehnúnheʔ yesayoʔokúha̲"],
  ["5", "Yah úhkaʔ teʔkheyʌtelí thikʌ́ lutátnuhkweʔ Tshyalé"],
  ["6", "Íhsi kʌ́ nú· né· oyé·li naʔtehaohsliyá·ku né· etsheʔkʌha̲"],
  ["7", "Yah tehyatátnuhkweʔ Tu·wís kháleʔ tsyalá·seʔ nok tsiʔ teshyatyelʌ́"],
  ["8", "Smith kʌ́ tehnihsʌná·sleʔ né· Tshyalé luwayoʔokuha̲"],
  ["9", "Náhteʔ ok kʌ́ sanuhte né· liʔkʌ́ha laolihwá·ke̲"],
  ["10", "Tó· sʌ́haʔ kʌʔnithoyʌ·ha né· Kwítel tsiʔ ni·yót niʔisé͟·"],
  [
    "11",
    "Latikwekú kaló nʌʔ né· oyé·li naʔtehonohsliyá·ku neʔn luwatiyʌʔokúha̲",
  ],
  ["12", "Sʌ́haʔ kʌ́ kʌʔnitisayʌ́ha tsiʔ ni·yót swatʌloʔshúha̲"],
  ["13", "Yah úhkaʔ náhteʔ teyuknú·wehseʔ né· yaʔníha laohwa·tsíle̲ʔ"],
  ["14", "Tákʌʔ ʌshehlo·lí· yukeʔkʌha tsiʔ yakawʌheyú né· yonatʌ·ló͟·"],
  ["15", "Yah thaʔtetsitsyatyelʌ né· tsyalá·seʔ Kwítel"],
  ["16", "Shekú kʌ́ tehnúnheʔ né· Tá·wet luwayʌ́ha̲"],
  ["17", "Akwekú luwá·nuwehseʔ thikʌ́ lokstʌ́ha̲"],
  ["18", "Yah thaʔteyakyatatyʌtelí né· tsyalá·seʔ Wílo"],
  [
    "19",
    "To niyohslaké sʌ́haʔ kʌʔnitho·yʌ · neʔn yanulhá· tsiʔ ni·yót neʔn yaʔníha",
  ],
  ["20", "Akwekú kʌ́ shakoyʌtelí neʔn sheyatleʔokúha"],
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

const oneidaToEnglishModule03 = [
  ["1", "Lotikhsá·tayʌʔ kʌ́ né· akwekú sheyoʔokúha̲"],
  ["2", "Sukwé·tayʌʔ kʌ́́ ukha ok yesanolukhwaʔ"],
  ["3", "Yah só·tsiʔ tehlukweʔtiyó né·n etshuhwatʌ́ha̲"],
  ["4", "Úhkaʔ náhteʔ sninyakú"],
  ["5", "Tekniyáhse kʌ́ yakokhsá·tayʌʔ né· shekhstʌ́ha yutateʔkʌ́ha̲"],
  ["6", "Né· kʌ́ thikʌ́ lanikʌhtlúha né·n Wá·li akonikʌhtlú·tsliʔ"],
  ["7", "Tó· náheʔ onʌ tshaʔtehonatekháhsyu né·n Só·s luwayʌ́ha̲"],
  ["8", "Yáh thaʔtehyatatnú·wehseʔ nok tsiʔ shekú ihnehse"],
  ["9", "Skayá·tat tá·thuní tekniyáhse síksik yakonáskwayʌ"],
  ["10", "Shekú yutatwʌni·yó· né· aolíwaʔ tsiʔ yáh teʔyakukweʔtiyó"],
  ["11", "Yáh úhkaʔ náhteʔ tehonanúhteʔ tsiʔ Onutaʔkeha·ká· nisuhutsyó·tʌʔ"],
  ["12", "Tehnitsyalú kʌ́ lotikwáho né·n yesayʌ́ha"],
  ["13", "Kutikwekú kʌ́ kutatwʌni·yó· né· kutiyaʔtaseʔshúha̲"],
  [
    "14",
    "Yáh úhkaʔ náhteʔ sʌ́haʔ luwanolukhwa thikʌ́ lanikʌhtlúha tsiʔ ni·yót niʔí·",
  ],
  ["15", "Sʌ́haʔ wahu·níseʔ yuknináskwayʌʔ tsiʔ ni·yót yuknikhsá·tayʌʔ"],
  ["16", "E·so kʌ́ hyanolúkhwaʔ né· etshekstʌ́há"],
  ["17", "Akwekú luwatinú·wehseʔ né· lotinyáhtʌ"],
  ["18", "Akwekú lotikhsá·tayʌʔ né· ukwatʌló·shuha, yáh niʔisé͟·"],
];

const englishToOneidaModule03 = [
  ["19", "Is it true that you and your significant other are separated?"],
  [
    "20",
    "Those young men are not good people, that's why they are still not married",
  ],
  ["21", "How many horses does the old man have?"],
  ["22", "Didn't you and your old man used to have a dog?"],
  ["23", "Both his parents are of the Bear Clan."],
  ["24", "I don't know anyone who is Cree."],
  ["25", "My wife and I aren't married but we have ten kids."],
  ["26", "My cousin's wife and I used to hate each other."],
  ["27", "How many kids does your older sister have?"],
  ["28", "How long have Thomas's parents been married?"],
  ["29", "My cousin Peter used to have three cows and one horse."],
  [
    "30",
    "My husband and I used to love one another very much, not so much now.",
  ],
  ["31", "Does your cousin Peter have more kids than you?"],
  ["32", "Have you two been separated for a long time?"],
  [
    "33",
    "The Oneida Homemakers are good people, the Oneida Choir and I love them a lot.",
  ],
  ["34", "Do you and your old lady love one another?"],
  ["35", "Peter hates it that we are not in a relationship now."],
  ["36", "Amelia and her husband have six girls."],
  ["37", "She used to have two lambs."],
  ["38", "They were engaged. They're married now."],
  ["39", "All of my friends are still single."],
  ["40", "My nephew is a rotten kid but I don't hate him."],
];

const oneidaToEnglishModule05 = [
  ["1", "Teyukwaʔnikú·lhaleʔ né· tsiʔ shekú yáh teʔyakoyé·ʔu"],
  ["2", "Sʌ́haʔ aukyeshúhakeʔ tá·t a·ukwatlaʔswiyóhakeʔ"],
  ["3", "Yáh teʔyohste·líst tsiʔ nihoti·wʌ́"],
  ["4", "Yáh tewakatshanuní tá·t yáh teʔsatekhu·niheʔ"],
  ["5", "Yonaʔkunyáht né· tsiʔ oʔslu·ní· ok tho thotiyo·té·"],
  ["6", "Yakonyaʔtáthʌs ne tsiʔ só·tsiʔ wahu·níseʔ yakóthaleʔ"],
  ["7", "E·só· sʌ́haʔ yakoyaʔtákstehkweʔ tsí ni·yóht kheʔkʌ·ha̲"],
  ["8", "Yakoslʌ́htalahse né· tsiʔ yutuhkályaʔks"],
  ["9", "Loʔnikuhlowanʌ́ nok tsiʔ ostúha tehanahalawʌ́lyeheʔ"],
  ["10", "Yáh teʔwakatshanú·ni né·tsiʔ nihʌnʌtó·le̲ʔ"],
  ["11", "Yakotsiʔyóha kháleʔ yáh teʔ yakotaʔkalité·"],
  ["12", "Yáh kʌ́ teʔsanehlákwas tsiʔ tehonatekháshyu"],
  ["13", "Lotiʔnikuhlákhsʌseʔ né·n Kwi·tel luwayʌ́ha né· tsiʔ yáh tehonyakú̲"],
];
const englishToOneidaModule05 = [
  ["1", "It's better to be rich than poor."],
  ["2", "Are you angry because you are short?"],
  ["3", "He always used to be drunk when he was single."],
  ["4", "They aren't working because they are too lazy."],
  ["5", "I would be happier if she was still alive."],
  ["6", "He's always tired because he's too heavy."],
  ["7", "It's surprising that none of them are ready."],
  ["8", "He's depressed because he is always sick."],
  ["9", "It's surprising how tall you are."],
  ["10", "They (females) are shy but they are not lonely."],
  ["11", "It's tiring for me to be waiting all day."],
  [
    "12",
    "He used to have the same kind of body as Brad Pitt when he was young.",
  ],
];
const oneidaToEnglishModule06 = [
  ["1", "Yáh teʔwakekhuní nuʔú·waʔ, yáh náhteʔ teʔkatyélhaʔ"],
  ["2", "Tá·t akenho·tú·, ʌhsatatewyʌnʌ·táneʔ kʌ́"],
  ["3", "Yáh thayuníʔtayʌʔ tá·t ʌhatló·lokeʔ"],
  ["4", "Waʔtkatohtálhoʔ né· tshahutyaʔtóhaleʔ"],
  ["5", "Wahʌ́·luʔ kʌ́ tʌhya·túteʔ"],
  ["6", "Waʔakyatslu·ní· né· ayukniyóʔtʌʔ átsteʔ"],
  ["7", "Yáh tehakhlolí kanke tshihoyo·té̲·"],
  ["8", "Wahshakotiyaʔtakénhaʔ akutinhotu·kó"],
  ["9", "Waʔakwatkáhthoʔ né· shakoyoʔokúha tsiʔ nahútyele"],
  ["10", "Yáh tehuwayaʔtakénhʌ latatlihunyʌ·níheʔ"],
  ["11", "Thó naʔa·wʌ́neʔ tshiyokʌno·lʌ́"],
  ["12", "Yáh tehonatahséhtu tshahʌníhstyá·keʔ"],
  ["13", "Ahotinóhaleʔ kaló· tsiʔ niyo·lé nʌ· tshaʔokʌ·nóleʔ"],
  ["14", "Satahúhsatat tsiʔ náhteʔ yu·tú·"],
  ["15", "Knú·wehseʔ kʌs katló·loks tsiʔ wataʔklókwas"],
];
const englishToOneidaModule06 = [
  ["1", "We (you and I) should wake up and get ready before noon."],
  ["2", "Do you ever get tired of taking a bath?"],
  ["3", "He says that she didn’t begin it."],
  ["4", "They (females) won’t say when they studied."],
  ["5", "It has snowed every day but it won’t happen tomorrow."],
  ["6", "We (they & I) got tired but we didn’t sleep."],
  ["7", "They can’t help you now, they’re taking a break."],
  ["8", "She can’t cook now because she’s not up."],
  ["9", "Why didn’t you open the door? Weren’t you dressed?"],
  ["10", "They didn’t do anything when they (Ms) woke up."],
  ["11", "You didn’t ask me, you just told me."],
  ["12", "The dog won’t eat when it rains."],
  ["13", "Listen you two, I want you to get up right now."],
  ["14", "We (all of you and I) should take a break when we get tired."],
  ["15", "I would have tidied up, but I was too tired."],
];

type Group = "module01" | "module02" | "module03" | "module05" | "module06";

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
          cell: (value) => <span className="w-16">{value as string}</span>,
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
        ...oneidaToEnglishModule03,
        ...englishToOneidaModule03,
        ...oneidaToEnglishModule05,
        ...englishToOneidaModule05,
        ...oneidaToEnglishModule06,
        ...englishToOneidaModule06,
      ].map((value, index) => [(index + 1).toString(), value[1]]);
    }
    const mapping: Record<Group, string[][]> = {
      module01: [...oneidaToEnglishModule01, ...englishToOneidaModule01],
      module02: [...oneidaToEnglishModule02, ...englishToOneidaModule02],
      module03: [...oneidaToEnglishModule03, ...englishToOneidaModule03],
      module05: [...oneidaToEnglishModule05, ...englishToOneidaModule05],
      module06: [...oneidaToEnglishModule06, ...englishToOneidaModule06],
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
