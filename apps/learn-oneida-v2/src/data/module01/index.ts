import type { DialogueTableData } from "@/components/DialogueTable";
import type {
  BreakdownArray,
  Pronoun,
} from "@ukwehuwehneke/language-components";
import dataKnow from "@/data/module01/know-PRS";
import dataCallDown from "~/data/module01/callDown-HAB";
import dataForbid from "~/data/module01/forbid-PRS";
import dataGoToGet from "~/data/module01/goToGet-HAB";
import dataHat from "~/data/module01/hat-NOUN";
import dataHeart from "~/data/module01/heart-NOUN";
import dataHouse from "~/data/module01/house-NOUN";
import dataLikePurple from "~/data/module01/like-purple";
import dataLonelyPfv from "~/data/module01/lonely-PFV";
import dataParcel from "~/data/module01/parcel-NOUN";
import dataPullingOutHab from "~/data/module01/pullingOut-HAB";
import dataPullingOutPfv from "~/data/module01/pullingOut-PFV";
import dataRelative from "~/data/module01/relative-NOUN";
import dataTongue from "~/data/module01/tongue-NOUN";
import dataWise from "~/data/atukohtu";
import dataLookingFor from "~/data/ehsak";
import dataNamed from "~/data/yats";
import dataAtHome from "~/data/itlu";
import dataLikeRed from "~/data/nuwehse-red";
import dataLikeBlue from "~/data/nuwehse-blue";
import dataAlive from "~/data/unhe";
import dataHardToPlease from "~/data/ʌtole";
import type { ParadigmData } from "@/utils/paradigm";

export function getDialogueModule01() {
  const part1: DialogueTableData = [
    { one: "Úhkaʔ náhteʔ niʔí·", en: "Who am I?" },
    { one: "Kwítel niʔisé̲·", en: "You are Peter." },
    { one: "Úhkaʔ náhteʔ niʔisé̲·", en: "Who are you?" },
    { one: "Wá·li niʔí·", en: "I am Mary." },
    { one: "Úhkaʔ náhteʔ neʔn laulhá·", en: "Who is he?" },
    { one: "Tá·wet neʔn laulhá·", en: "He is David." },
    { one: "Úhkaʔ náhteʔ neʔn akaulhá·", en: "Who is she?" },
    { one: "Klistí·n neʔn akaulhá·", en: "She is Christine." },
    { one: "Úhkaʔ náhteʔ nʌʔ né·", en: "Who is it?" },
    { one: "Kwítel nʌʔ né·", en: "It is Peter." },
  ];
  const part2: DialogueTableData = [
    { one: "Tshyalé kʌ́ niʔí·", en: "Am I Charlie?" },
    { one: "Λ́·, Tshyalé niʔisé̲·", en: "Yes. You are Charlie" },
    { one: "Wá·li kʌ́ niʔisé̲·", en: "Are you Mary?" },
    { one: "Λ́·, Wá·li niʔí·", en: "Yes. I am Mary." },
    { one: "Tá·wet kʌ́ neʔn laulhá·", en: "Is he David?" },
    { one: "Λ́·, Tá·wet neʔn laulhá·", en: "Yes. He is David." },
    { one: "Klistí·n kʌ́ neʔn akaulhá·", en: "Is she Christine?" },
    { one: "Λ́·, Klistí·n neʔn akaulhá·", en: "Yes. She is Christine." },
  ];
  const part3: DialogueTableData = [
    { one: "Í· kʌ́ neʔn Tshyalé", en: "Am I Charlie?" },
    { one: "Λ́·, isé· né· Tshyalé", en: "Yes, you are Charlie." },
    { one: "Isé· kʌ́ neʔn Wá·li", en: "Are you Mary?" },
    { one: "Λ́·, í· né· Wá·li", en: "Yes, I am Mary." },
    { one: "Laulhá· kʌ́ neʔn Tá·wet", en: "Is he David?" },
    { one: "Λ́·, laulhá· né· Tá·wet", en: "Yes, he is David." },
    { one: "Akaulhá· kʌ́ neʔn Ní·ki", en: "Is she Amelia?" },
    { one: "Λ́·, akaulhá· né· Ní·ki", en: "Yes, she is Amelia." },
  ];
  const part4: DialogueTableData = [
    { one: "Wá·li kʌ́ niʔí·", en: "Am I Mary?" },
    {
      one: ["Táh, yáh Wá·li té·kʌ nisé·", "Só·s niʔisé̲·"],
      en: ["No. You're not Mary.", "You are Susan."],
    },
    { one: "Tshyalé kʌ́ niʔisé̲·", en: "Are you Charlie?" },
    {
      one: ["Táh, yáh Tshyalé té·kʌ niʔí·", "Wá·li niʔí·"],
      en: ["No. I'm not Charlie.", "I'm Mary."],
    },
    { one: "Wílo kʌ́ neʔn laulhá·", en: "Is he William?" },
    {
      one: ["Táh, yáh Wílo té·kʌ neʔn laulhá·", "Tá·wet neʔn laulhá·"],
      en: ["No. He's not William.", "He's David."],
    },
    { one: "Lá·kel kʌ́ neʔn akaulhá·", en: "Is she Rachel?" },
    {
      one: ["Táh, yáh Lá·kel té·kʌ neʔn akaulhá·", "Só·s neʔn akaulhá·"],
      en: ["No. She's not Rachel.", "She's Susan."],
    },
  ];
  const part5: DialogueTableData = [
    { one: "Í· kʌ́ neʔn Wá·li", en: "Am I Mary?" },
    {
      one: ["Táh, yáh Wá·li té·kʌ niʔisé̲·", "Só·s ni·sé·"],
      en: ["No. You're not Mary.", "You're Susan."],
    },
    { one: "Isé· kʌ́ neʔn Tu·wís", en: "Are you Thomas?" },
    {
      one: ["Táh, yáh Tu·wís té·kʌ niʔí·", "Wílo niʔí·"],
      en: ["No. I'm not Thomas.", "I'm William."],
    },
    { one: "Laulhá· kʌ́ neʔn Tshyalé", en: "Is he Charlie?" },
    {
      one: ["Táh, yáh Tshyalé té·kʌ neʔn laulhá·", "Ta·wet neʔn laulhá·"],
      en: ["No. He's not Charlie.", "He's David."],
    },
    { one: "Akaulhá· kʌ́ neʔn Ní·ki", en: "Is she Amelia?" },
    {
      one: ["Táh, yáh Ní·ki té·kʌ neʔn akaulhá·", "Só·s neʔn akaulhá·"],
      en: ["No. She's not Amelia.", "She's Susan."],
    },
  ];
  const part6: DialogueTableData = [
    { one: "Sknú·wehseʔ kʌ́ niʔí·", en: "Do you like me?" },
    {
      one: [
        "Λ́·, kunú·wehseʔ niʔisé̲·",
        "Kunú·wehseʔ niʔisé· kwáh ne·n tsiʔ niyot sknú·wehseʔ niʔí·",
      ],
      en: ["Yes, I like you.", "I like you just like you like me."],
    },
    { one: "Etsnú·wehseʔ kʌ́ neʔn laulhá·", en: "Do you like him?" },
    { one: "Λ́·, linú·wehseʔ né· laulhá·", en: "Yes, I like him." },
    { one: "Etsnú·wehseʔ kʌ́ neʔn Wílo", en: "Do you like William?" },
    { one: "Λ́·, linú·wehseʔ né· Wílo", en: "Yes, I like William." },
    { one: "Shenú·wehseʔ kʌ́ neʔn akaulhá·", en: "Do you like her?" },
    { one: "Λ́·, khenú·wehseʔ né· akaulhá·", en: "Yes, I like her." },
    { one: "Shenú·wehseʔ kʌ́ neʔn Kowaklít", en: "Do you like Margaret?" },
    { one: "Λ́·, khenú·wehseʔ né· Kowaklít", en: "Yes, I like Margaret." },
    { one: "Shenú·wehseʔ kʌ́ neʔn lonulhá·", en: "Do you like them?" },
    { one: "Λ́·, khenú·wehseʔ né· lonulhá·", en: "Yes, I like them." },
    { one: "Shenú·wehseʔ kʌ́ neʔn Beatles", en: "Do you like the Beatles?" },
    { one: "Λ́·, khenú·wehseʔ né· Beatles", en: "Yes, I like the Beatles." },
  ];
  const part7: DialogueTableData = [
    { one: "I·sé· kʌ́ sknú·wehse̲ʔ", en: "Do you like me?" },
    { one: "Λ́·, í· kunú·wehse̲ʔ", en: "Yes, I like you." },
    { one: "Laulhá· kʌ́ etsnú·wehse̲ʔ", en: "Do you like him?" },
    { one: "Λ́·, laulhá· linú·wehse̲ʔ", en: "Yes, I like him." },
    { one: "Kwítel kʌ́ etsnú·wehse̲ʔ", en: "Do you like Peter?" },
    { one: "Λ́·, Kwítel linú·wehse̲ʔ", en: "Yes, I like Peter." },
    { one: "Akaulhá· kʌ́ shenú·wehse̲ʔ", en: "Do you like her?" },
    { one: "Λ́·, akaulhá· khenú·wehse̲ʔ", en: "Yes, I like her." },
    { one: "Kowaklit kʌ́ shenú·wehse̲ʔ", en: "Do you like Margaret?" },
    { one: "Λ́·, Kowaklít khenú·wehse̲ʔ", en: "Yes, I like Margaret." },
    { one: "Lonulhá· kʌ́ shenú·wehse̲ʔ", en: "Do you like them?" },
    { one: "Λ́·, lonulhá· khenú·wehse̲ʔ", en: "Yes, I like them." },
    {
      one: "Rolling Stones kʌ́ shenú·wehse̲ʔ",
      en: "Do you like the Rolling Stones?",
    },
    {
      one: "Λ́·, Rolling Stones khenú·wehse̲ʔ",
      en: "Yes, I like the Rolling Stones.",
    },
  ];
  const part8: DialogueTableData = [
    { one: "Úhkaʔ náhteʔ khenú·wehseʔ", en: "Who do I like?" },
    {
      one: [
        "Í· sknú·wehse̲ʔ",
        "Kwítel etsnú·wehse̲ʔ",
        "Klistí·n shenú·wehse̲ʔ",
        "Beatles shenú·wehse̲ʔ",
      ],
      en: [
        "You like me.",
        "You like Peter.",
        "You like Kristin.",
        "You like the Beatles.",
      ],
    },

    { one: "Úhkaʔ náhteʔ shenú·wehse̲ʔ", en: "Who do you like?" },
    {
      one: [
        "Isé· kunú·wehse̲ʔ",
        "Kwítel linú·wehse̲ʔ",
        "Klistí·n khenú·wehse̲ʔ",
        "Beatles khenú·wehse̲ʔ",
        "Akwekú khenú·wehse̲ʔ",
        "Háti úhkaʔ ok náhteʔ niʔisé· shenú·wehseʔ, í· khenú·wehse̲ʔ",
      ],
      en: [
        "I like you.",
        "I like Peter.",
        "I like Kristin.",
        "I like the Beatles.",
        "I like everyone.",
        "Anyone you like, I like them too.",
      ],
    },

    { one: "Úhkaʔ oyá· shenú·wehse̲ʔ", en: "Who else do you like?" },
    {
      one: "Rolling Stones ú·niʔ khenú·wehse̲ʔ",
      en: "I also like the Rolling Stones.",
    },

    { one: "Úhkaʔ shakonú·wehseʔ né· Kwítel", en: "Who does Peter like?" },
    {
      one: ["Í· laknú·wehseʔ né· Kwítel", "I·sé· yanú·wehseʔ né· Kwítel"],
      en: ["Peter likes me.", "Peter likes you."],
    },

    {
      one: "Úhkaʔ oyá· shakonú·wehseʔ neʔn Kwítel",
      en: "Who else does Peter like?",
    },
    {
      one: "Rolling Stones oniʔ shakonú·wehseʔ neʔn Kwítel",
      en: "Peter also likes the Rolling Stones.",
    },

    {
      one: "Úhkaʔ náhteʔ yutatnú·wehseʔ neʔn Só·s",
      en: "Who does Susan like?",
    },
    {
      one: ["Í· yuknú·wehseʔ neʔn Só·s", "I·sé· yesanú·wehseʔ né· Só·s"],
      en: ["Susan likes me.", "Susan likes you."],
    },
  ];
  const part9: DialogueTableData = [
    { one: "Náhte snú·wehse̲ʔ", en: "What do you like?" },
    {
      one: [
        "Kaʔikʌ́ knú·wehse̲ʔ",
        "Thikʌ́· knú·wehse̲ʔ",
        "Akwekú knú·wehse̲ʔ",
        "Háti náhte ne·n isé· snú·wehseʔ, í· ú·ni knú·wehse̲ʔ",
      ],
      en: [
        "I like this.",
        "I like that.",
        "I like everything.",
        "Whatever you like, I also like.",
      ],
    },
  ];
  const part10: DialogueTableData = [
    {
      one: "Úhkaʔ náhteʔ sʌ́haʔ shenú·wehseʔ Beatles tá·thuniʔ Rolling Stones",
      en: "Who do you like more, the Beatles or the Rolling Stones?",
    },
    {
      one: "Beatles sʌ́haʔ khenú·wehseʔ tsiʔ ni·yót né· Rolling Stones",
      en: "I like the Beatles more than the Rolling Stones.",
    },
    {
      one: "Úhkaʔ náhteʔ sʌ́haʔ shenú·wehseʔ tsiʔ ni·yót né·n Rolling Stones",
      en: "Who do you like more than the Rolling Stones?",
    },
    {
      one: "Beatles sʌ́haʔ khenú·wehseʔ tsiʔ ni·yót né· Rolling Stones",
      en: "I like the Beatles more than the Rolling Stones.",
    },
    {
      one: "Úhkaʔ náhteʔ sʌ́haʔ shenú·wehseʔ tsiʔ ni·yót né· Beatles",
      en: "Who do you like more than the Beatles?",
    },
    {
      one: "Yáh úhkaʔ náhteʔ sʌ́haʔ teʔkhenú·wehseʔ tsiʔ ni·yót né· Beatles",
      en: "There's no one I like more than the Beatles.",
    },
    {
      one: "Sʌ́haʔ kʌ́ shenú·wehseʔ neʔn Beach Boys tsiʔ ni·yót neʔn Beatles",
      en: "Do you like the Beach Boys more than the Beatles?",
    },
    {
      one: "Táh. Yáh sʌ́haʔ tekhenú·wehseʔ né· Beach Boys tsiʔ ni·yót né· Beatles",
      en: "No. I don't like the Beach Boys more than the Beatles.",
    },
    {
      one: "Sʌ́haʔ kʌ́ etsnú·wehseʔ neʔn Nelson Mandela tsiʔ ni·yót neʔn Stephen Harper",
      en: "Do you like Nelson Mandela more than Stephen Harper?",
    },
    {
      one: "Λ́·, kwáh ikʌ́ tsiʔ sʌ́haʔ linú·wehseʔ Nelson Mandela tsiʔ ni·yót neʔn Stephen Harper",
      en: "Yes, I really like Nelson Mandela more than Stephen Harper.",
    },
    {
      one: "Úhka ó·ya sʌ́haʔ shenú·wehseʔ tsiʔ ni·yót né· Stephen Harper",
      en: "Who else do you like more than Stephen Harper?",
    },
    {
      one: "Tom Porter uní sʌ́haʔ linú·wehseʔ tsiʔ ni·yót né·n Stephen Harper",
      en: "I also like Tom Porter more than Stephen Harper.",
    },
    {
      one: "Lonúhteʔ kʌ́ neʔn Tshyalé oh náhte luwatí·yats neʔn Beatles",
      en: "Does Charlie know what the Beatles' names are?",
    },
    {
      one: "Λ́·, lonúhteʔ neʔn Tshyalé oh náhte luwati·yáts neʔn Beatles",
      en: "Yes, Charlie knows what the Beatles' names are.",
    },
    {
      one: "Lonanúhteʔ kʌ́ né· thikʌ́ latiksaʔshúha oh náhte kuwatí·yats né· thikʌ́ otikhstʌʔokúha̲",
      en: "Do those children know what those old women's names are?",
    },
    {
      one: "Táh. Yáh tehonanúhteʔ né· thikʌ́ latiksaʔshúha oh náhte kuwati·yáts thikʌ́ otikhstʌʔokúha̲",
      en: "No. Those children don't know what those old women's names are.",
    },
    {
      one: "Laulhá· kʌ́ lonúhteʔ náhte yesá·yats",
      en: "Does he know what your name is?",
    },
    {
      one: "Táh. Yáh tehonúhteʔ náhte ní· yúkyats",
      en: "No. He doesnʔt know what my name is.",
    },
    {
      one: "Klistí·n kʌ́ yutátyats né· thikʌ́ yakú·kwe̲",
      en: "Is that woman's name Christine?",
    },
    {
      one: "Λ́·, Klistí·n yutátyats né· thikʌ́ yakú·kwe̲ʔ",
      en: "Yes, that woman's name is Christine.",
    },
    {
      one: "Onulhá· kʌ́ yonanúhteʔ náhte luwati·yáts neʔn Rolling Stones",
      en: "Do they know what the Rolling Stones names are?",
    },
    {
      one: "Λ́·, yonanúhteʔ náhte luwati·yáts neʔn Rolling Stones. Mick, Keith, Charlie kháleʔ Ronnie luwati·yáts",
      en: "Yes, they know what the the Rolling Stones names are. They are called Mick, Keith, Charlie, and Ronnie.",
    },
  ];
  const part11: DialogueTableData = [
    {
      one: "Sanúhteʔ kʌ́ náhte ní· yúkyats",
      en: "Do you know what my name is?",
    },
    { one: "Lá·kel kʌ́ yesa·yáts", en: "Is your name Rachel?" },
    {
      one: [
        "Táh. Yáh Lá·kel teyúkyats",
        "Thikʌ́ akokstʌ́·haʔ neʔn Lá·kel yutátyats",
      ],
      en: ["No. My name is not Rachel.", "That old woman is named Rachel."],
    },
    { one: "Kowáklit kʌ́ yesa·yáts", en: "Is your name Margaret?" },
    {
      one: [
        "Táh. Yáh uni Kowáklit teyúkyats",
        "Thikʌ́ yeksá· neʔn Kowáklit yutátyats",
      ],
      en: [
        "No. Margaret isn't my name either.",
        "That girl's name is Margaret.",
      ],
    },
    {
      one: "Tá·t yáh Lá·kel tathu·ní· yáh Kowáklit teyesa·yáts nahte káti yesa·yáts",
      en: "If your name is not Rachel or Margaret, then what is your name?",
    },
    { one: "Aliskwet ní· yúkyats", en: "My name is Elizabeth" },
    {
      one: "Onʌ wakanúhteʔ náhte yesa·yáts",
      en: "Now I know what your name is.",
    },
  ];

  return {
    part1,
    part2,
    part3,
    part4,
    part5,
    part6,
    part7,
    part8,
    part9,
    part10,
    part11,
  };
}

export function getEnglishNames() {
  const exceptions = ["george"];

  return [
    { key: "aaron", translation: "Alʌ́t", en: "Aaron" },
    { key: "abraham", translation: "Á·kwilut", en: "Abraham" },
    { key: "albert", translation: "Tsiʔtwʌlu", en: "Albert" },
    { key: "charlie", translation: "Tshyalé", en: "Charlie" },
    { key: "david", translation: "Tá·wet", en: "David" },
    { key: "george", translation: "Tsyáts", en: "George" },
    { key: "jerry", translation: "Tshéle", en: "Jerry" },
    { key: "john", translation: "Sawatís", en: "John" },
    { key: "kenny", translation: "Kénniha", en: "Kenny" },
    { key: "matthew", translation: "Máthyu", en: "Matthew" },
    { key: "nicholas", translation: "Níklas", en: "Nicholas" },
    { key: "peter", translation: "Kwítel", en: "Peter" },
    { key: "richard", translation: "Lítsyet", en: "Richard" },
    { key: "thomas", translation: "Tu·wís", en: "Thomas" },
    { key: "william", translation: "Wílo", en: "William" },
    { key: "christine", translation: "Klistí·n", en: ["Christine", "Kristin"] },
    { key: "delores", translation: "Tsiló·s", en: "Delores" },
    { key: "elizabeth", translation: ["Aliskwe", "Alísakwe"], en: "Elizabeth" },
    { key: "katherine", translation: "Katlí·n", en: "Katherine" },
    { key: "margaret", translation: ["Kwáklit", "Kowáklit"], en: "Margaret" },
    { key: "martha", translation: "Máhtih", en: "Martha" },
    { key: "mary", translation: "Wá·li", en: "Mary" },
    { key: "amelia", translation: "Ní·ki", en: ["Nellie", "Amelia"] },
    { key: "rachel", translation: "Lá·kel", en: "Rachel" },
    { key: "sarah", translation: "Sá·lʌ̲", en: "Sara" },
    { key: "susan", translation: "Só·s", en: "Susan" },
  ].map((row) => ({
    ...row,
    audioFile: exceptions.includes(row.key)
      ? undefined
      : `module01/english_names/${row.key}.mp3`,
  }));
}

export function getAudioFileForEnglishName(
  datum: {
    en: string | string[];
    key: string;
    translation: string | string[];
  },
  index = 0,
) {
  const suffix = Array.isArray(datum.translation) ? `_${index + 1}` : "";
  return `/audio/module01/english_names/${datum.key}${suffix}.mp3`;
}

interface PeopleTerm {
  en: string | string[];
  breakdown: BreakdownArray;
  pronoun: Pronoun;
  audioFile: string;
}

export function getPeopleTerms(): {
  adolescents: PeopleTerm[];
  adults: PeopleTerm[];
  children: PeopleTerm[];
  olderPeople: PeopleTerm[];
} {
  const dataChildren = [
    {
      en: "Boy",
      breakdown: [["la"], "ksá·"],
      pronoun: "m",
    } as PeopleTerm,
    {
      en: ["2 boys", "1 boy + 1 girl"],
      breakdown: [["te", "DUAL"], ["hni"], "ksá·"],
      pronoun: "2m",
    } as PeopleTerm,
    {
      en: ["3+ boys", "Mix of boys and girls"],
      breakdown: [["lati"], "ksaʔshúha̲"],
      pronoun: "ms",
    } as PeopleTerm,
    {
      en: "Girl",
      breakdown: [["ye"], "ksá·"],
      pronoun: "f",
    } as PeopleTerm,
    {
      en: "2 girls",
      breakdown: [["te", "DUAL"], ["kni"], "ksá·"],
      pronoun: "2f",
    } as PeopleTerm,
    {
      en: ["3+ girls"],
      breakdown: [["kuti"], "ksaʔshúha̲"],
      pronoun: "fs",
    } as PeopleTerm,
  ].map((val) => ({
    ...val,
    audioFile: `module01/children/${val.pronoun}.mp3`,
  }));

  const dataAdolescents = [
    {
      en: "Young man",
      breakdown: [["la"], "nikʌtlúha̲"],
      pronoun: "m",
    } as PeopleTerm,
    {
      en: ["2 young men"],
      breakdown: [["te", "DUAL"], ["hni"], "nikʌtlúha̲"],
      pronoun: "2m",
    } as PeopleTerm,
    {
      en: ["3+ young men"],
      breakdown: [["lati"], "nikʌtluʔokúha̲"],
      pronoun: "ms",
    } as PeopleTerm,
    {
      en: "Young woman",
      breakdown: [["ye"], "yaʔtaséha̲"],
      pronoun: "f",
    } as PeopleTerm,
    {
      en: "2 young women",
      breakdown: [["te", "DUAL"], ["kni"], "yaʔtaséha̲"],
      pronoun: "2f",
    } as PeopleTerm,
    {
      en: ["3+ young women"],
      breakdown: [["kuti"], "yaʔtaseʔokúha̲"],
      pronoun: "fs",
    } as PeopleTerm,
  ].map((val) => ({
    ...val,
    audioFile: `module01/adolescents/${val.pronoun}.mp3`,
  }));

  const dataAdults = [
    {
      en: "Man",
      breakdown: [["l"], "u·kwé̲·"],
      pronoun: "m",
    } as PeopleTerm,
    {
      en: ["2 men", "1 man + 1 woman"],
      breakdown: [["te", "DUAL"], ["hn"], "u·kwé̲·"],
      pronoun: "2m",
    } as PeopleTerm,
    {
      en: ["3 men", "Mix of men and women"],
      breakdown: [["lʌn"], "u·kwé̲·"],
      pronoun: "ms",
    } as PeopleTerm,
    {
      en: "Woman",
      breakdown: [["yak"], "u·kwé̲·"],
      pronoun: "f",
    } as PeopleTerm,
    {
      en: "2 women",
      breakdown: [["te", "DUAL"], ["kn"], "u·kwé̲·"],
      pronoun: "2f",
    } as PeopleTerm,
    {
      en: ["3+ women"],
      breakdown: [["kun"], "u·kwé̲·"],
      pronoun: "fs",
    } as PeopleTerm,
  ].map((val) => ({
    ...val,
    audioFile: `module01/adults/${val.pronoun}.mp3`,
  }));

  const dataOlderPeople = [
    {
      en: "Older man",
      breakdown: [["lo"], "kstʌ́ha̲"],
      pronoun: "m",
    } as PeopleTerm,
    {
      en: ["2 older men", "1 older man + 1 older woman"],
      breakdown: [["loti"], "kstʌ́ha̲"],
      pronoun: "2m",
    } as PeopleTerm,
    {
      en: ["3+ older men", "Mix of older men and older women"],
      breakdown: [["loti"], "kstʌhokúha̲"],
      pronoun: "ms",
    } as PeopleTerm,
    {
      en: "Older woman",
      breakdown: [["ako"], "kstʌ́ha̲"],
      pronoun: "f",
    } as PeopleTerm,
    {
      en: "2 older women",
      breakdown: [["yoti"], "kstʌ́ha̲"],
      pronoun: "2f",
    } as PeopleTerm,
    {
      en: ["3+ older women"],
      breakdown: [["yoti"], "kstʌhokúha̲"],
      pronoun: "fs",
    } as PeopleTerm,
  ].map((val) => ({
    ...val,
    audioFile: `module01/older_people/${val.pronoun}.mp3`,
  }));

  return {
    children: dataChildren,
    adolescents: dataAdolescents,
    adults: dataAdults,
    olderPeople: dataOlderPeople,
  };
}

export function getAllModule01Paradigms(): ParadigmData[] {
  return [
    dataKnow,
    dataCallDown,
    dataForbid,
    dataGoToGet,
    dataHat,
    dataHeart,
    dataHouse,
    dataLikePurple,
    dataLonelyPfv,
    dataParcel,
    dataPullingOutHab,
    dataPullingOutPfv,
    dataRelative,
    dataTongue,
    dataWise,
    dataLookingFor,
    dataNamed,
    dataAtHome,
    dataLikeRed,
    dataLikeBlue,
    dataAlive,
    dataHardToPlease,
  ];
}
