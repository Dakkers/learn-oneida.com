import type { DialogueTableData } from "@/components/DialogueTable";
import { createParadigmData, type ParadigmData } from "@/utils/paradigm";

import goodKidPRS from "./goodKid-PRS";
import goodKidPAST from "./goodKid-PAST";
import badKidPAST from "./badKid-PAST";
import badKidPRS from "./badKid-PRS";
import goodPersonPRS from "./goodPerson-PRS";
import goodPersonPAST from "./goodPerson-PAST";
import badPersonPRS from "./badPerson-PRS";
import badPersonPAST from "./badPerson-PAST";
import {
  arrayify,
  type BreakdownArray,
  convertBreakdownToPlainText,
} from "@ukwehuwehneke/language-components";

export function getDialogueModule03() {
  // @ts-expect-error TODO
  const mapper = (row) => ({ ...row, hasAudio: row.hasAudio ?? true });

  const part1: DialogueTableData = [
    { one: "Lonyákheʔ kʌ́ Brad Pitt" },
    { one: "Táh, lonyá·ku nuʔú·wa̲ʔ" },
    { one: "Úhkaʔ náhteʔ lotinyakú·" },
    { one: "Angelina Jolie lotinyakú" },
    { one: "Yáh teʔwakanúhtehkwe̲ʔ" },
    { one: "ʌ́·, to·kʌ́ske̲ʔ" },
    { one: "Lotiwila·yʌ́· kʌ́" },
    { one: ["ʌ́·, yá·yak nihotiwila·yʌ̲·", "Kayé·li nihá·ti kháleʔ tehní·khʌ̲ʔ"] },
    { one: "Yáh kʌ́ tehotinyakú·neʔ Jennifer Aniston" },
    { one: ["ʌ́·, lotinyakú·neʔ nók tsiʔ tehonatekháhsyu nuʔú·wa̲ʔ"] },
    { one: "Yutatwʌni·yó kʌ́ nuʔú·wa̲ʔ" },
    { one: "Yáh tetsyutatwʌni·yó· nuʔú·wa̲ʔ" },
    { one: "Yakonyakú kʌ́" },
    {
      one: [
        "ʌ́·, tsyakonyakú á·le̲",
        "Lotinyakú né· shayá·tat né·n Justin Theroux luwa·yáts",
      ],
    },
    { one: "Úhkaʔ náhteʔ oyá· tehotinyakú·neʔ Brad" },
    { one: "Yáh tehotinyakú·neʔ Gwyneth Paltrow nók tsiʔ lotinyákhehkwe̲ʔ" },
    { one: "Yutatwʌni·yó· kʌ́ nuʔú·waʔ neʔn Gwyneth" },
    {
      one: [
        "Táh, lotinyákhehkwe ne Brad, neʔ thó·neʔ ihnéhskweʔ neʔn Ben Affleck neʔ thó·neʔ oyé·li niyohslaké tsiʔ náheʔ lotinyakú·neʔ né· Chris Martin",
        "Tehniyáhse tehotiwila·yʌ̲̲́·",
        "Shayá·tat né·n Moses luwa·yáts kháleʔ tsyeyá·tat né·n Apple yutátyats",
        "Tehonatekháhsyu nuʔú·waʔ kháleʔ ihnehseʔ né· shayá·tat neʔn Brad Falchuk luwa·yáts",
      ],
    },
    { one: ["Ok né·n Ben Affleck", "Laukwé·tayʌʔ kʌ́ né·n yakukwé· nuʔú·wa̲ʔ"] },
    {
      one: [
        "E·só· nikutí kunukwé· laukweʔtayʌ·táhkweʔ né· Ben",
        "Jennifer Lopez sʌ· ihnehskwe kháleʔ lotinyákhehkwe̲ʔ",
      ],
    },
    { one: "J-Lo kʌ́ sʌ́· loneʔkʌ́" },
    {
      one: [
        "Táh, yáh newʌ·tú tehotinyákuʔ né· J-Lo",
        "Tehonatekháhsyu nók tsiʔ lotinyakúhneʔ né· Jennifer Garner, oyé·li niyohslaké nikalì·wes",
        "Áhsʌ nihotiwila·yʌ·, shayá·tat kháleʔ tekniyáhse̲",
      ],
    },
    { one: "Shekú kʌ́ lotinyakú" },
    { one: ["Táh, tehonatekháhsyu", "Yatatwʌni·yó· né· tehnitsyalú̲"] },
    {
      one: ["Ok né·n Ben lonatʌ·ló Matt Damon", "Oh niyohtuhátiʔ né·n laulhá·"],
    },
    {
      one: "Áhsʌ nikutí lʌné·skweʔ (Minnie Driver, Winona Ryder kháleʔ tsyeyá·tat oyá·) kaló· tsiʔ niyo·lé· nihotinyakú né·n ló·ne· oyé·li niyohslaké tsiʔ náhe",
    },
    {
      one: "Ok né·n Angelina Jolie uhka náhteʔ ihnéhskwe né· kaló· tsiʔ niyo·lé· né·n Brad",
    },
    {
      one: [
        "Lotinyakú·neʔ ne Billy Bob Thornton kháleʔ oyá· shayá·tat",
        "Kháleʔ kaló· tsiʔ niyo·lé· lotinyakú·neʔ né· Billy Bob, yáh ki tsyohslaké tsiʔ náheʔ iknéhskweʔ ne tsyeyá·tat yakú·kwe̲ʔ",
      ],
    },
    { one: "Yáh náhteʔ teʔwakanúhtehkweʔ thikʌ̲̲́" },
    { one: "Nʌ ki né· sanúhte̲ʔ" },
  ].map(mapper);

  const part2: DialogueTableData = [
    { one: "To·kʌ́skeʔ kʌ́ sanyákheʔ" },
    { one: ["ʌ́·, to·kʌ́ske̲ʔ", "Tu·wís yukninyákheʔ"] },
    { one: ["Tu·wís kʌ́", "Lotinyakú né· So·s"] },
    { one: "Lotinyakú·neʔ nók tsiʔ tehonatekháhsyu nuʔú·wa̲ʔ" },
    { one: "Tó· nahe tshatehonatekháhsyu" },
    { one: "Yáh tewahu·níseʔ nók tsiʔ latatwʌni·yó nuʔú·wa̲ʔ" },
    { one: "Yáh kʌ́ tehotinyaku·né· kaló· tsiʔ niyo·lé· waʔhotinyakeʔ So·s" },
    {
      one: [
        "Kʌʔ ok naheʔ",
        "Katlí·n né·n lotinyakú·neʔ kháleʔ yáh só·tsiʔ teyakukweʔtiyó̲",
      ],
    },
    {
      one: ["Ok né·n Tu·wís", "Yáh só·tsiʔ tehlukweʔtiyó né·n laulhá·"],
    },
    {
      one: [
        "Latatwʌni·yó· kháleʔ laknolúkhwa̲ʔ",
        "Ok né·n niʔisé̲·",
        "Yáh teʔsanyákuʔ",
      ],
    },
    {
      one: "ʌ́· kháleʔ yáh teʔyukninyákheʔ úhkaʔ náhteʔ ok né·n tshaʔteyukniʔtaló·tʌ̲ʔ",
    },
    {
      one: ["Tsiʔ nihsekhsá·", "Yukninyákheʔ kháleʔ yáh niʔisé̲·"],
    },
    {
      one: "Etshlihwanu·tú·seʔ tó· nihotikhsá·tayʌʔ oskánhe né·n oyá· yakú·kwe̲",
    },
    { one: "Yáh tehokhsá·tayʌ̲ʔ" },
    { one: "Yáh e·só· tehetshyʌtelí, wahí̲" },
    { one: "Wakanúhteʔ tsiʔ laknolúkhwa̲ʔ" },
    {
      one: [
        "Yáh kʌ́ teʔsanúhteʔ tsiʔ áhsʌ nikutí kunukwé· lotinyakú·neʔ",
        "Kháleʔ oyé·li nihokhsá·tayʌ̲ʔ",
      ],
    },
    {
      one: ["Yáh to·kʌ́skeʔ té·kʌ", "Ne ok tewáhsʌ úskah niyohslaké nithoyʌ́·ha̲"],
    },
    {
      one: "Sanúhteʔ kʌ́ tsiʔ nihatikhsaʔtáksʌs ne shakoyoʔokúha̲",
    },
    {
      one: ["Yáh teʔsukweʔtiyó niʔisé̲·", "Tho wakanúhte̲ʔ"],
    },
    {
      one: [
        "Yaweluhátiʔ tsiʔ yáh teshakoyʌtelí né·n shakoyoʔokúha̲",
        "Yáh tehuwanú·wehse̲ʔ",
      ],
    },
    {
      one: [
        "Yaweluhátiʔ tó· nihokhsá·tayʌʔ, yáh úhkaʔ teʔsukwé·tayʌʔ ne·n yesanolúkhwa̲ʔ",
        "Né· ok tewáhsʌ nikutí takós sanáhskwayʌʔ kháleʔ yáh teʔyesanú·wehse̲ʔ",
      ],
    },
    {
      one: "Sanúhteʔ kʌ́ tsiʔ yáh tehonúhteʔ oh náhteʔ tethsʌná·sele̲ʔ",
    },
    { one: "Sʌ́haʔ e·só· takhló·li̲" },
  ].map(mapper);

  return { part1, part2 };
}

export function nationsParadigm() {
  return createParadigmData(
    {
      audioFolder: "module03/nations_examples",
      phrases: [
        {
          breakdown: ["Onʌyoʔteʔa·ká· ni", ["wak"], "uhutsyó·tʌ̲ʔ"],
        },
        {
          breakdown: ["Onʌyoʔteʔa·ká· ni", ["s"], "uhutsyó·tʌ̲ʔ"],
        },
        {
          breakdown: ["Onʌyoʔteʔa·ká· ni", ["ha"], "uhutsyó·tʌ̲ʔ"],
        },
        {
          breakdown: ["Onʌyoʔteʔa·ká· ni", ["yaka"], "uhutsyó·tʌ̲ʔ"],
        },
      ],
      translation: "{{pronoun}} {{refVerb}} an Oneida",
      type: "PO",
    },
    ["i", "u", "m", "f"],
  );
}

export function getNationsList() {
  return [
    {
      en: "Mohawk",
      translation: "Kanyʌʔkeha·ká̲·",
      literal: "flint",
      key: "mohawk",
    },
    {
      en: "Oneida",
      translation: "Onʌyoʔteʔa·ká̲·",
      literal: "standing stone",
      key: "oneida",
    },
    {
      en: "Onondaga",
      translation: "Onutaʔkeha·ká̲·",
      literal: "hills",
      key: "onondaga",
    },
    {
      en: "Cayuga",
      translation: "Kayukeʔa·ká̲·",
      literal: "great swamp / pipe",
      key: "cayuga",
    },
    {
      en: "Seneca",
      translation: "Tsiʔtwanaʔa·ká̲·",
      literal: "great hill / mountain",
      key: "seneca",
    },
    {
      en: "Tuscarora",
      translation: "Taskaló·lu̲",
      literal: "hemp / shirt",
      key: "tuscarora",
    },
    {
      en: "Ojibway",
      translation: "Latitwaʔkánha̲ʔ",
      literal: "(unknown)",
      key: "ojibwe",
    },
    {
      en: "Algonquin",
      translation: "Latilu·táks",
      literal: "They eat trees",
      key: "algonquin",
    },
    {
      en: "Cree",
      translation: "Kalhakuhlonú",
      literal: "People of the forest (?)",
      key: "cree",
    },
    {
      en: "Huron",
      translation: "Thotinutáthe̲",
      literal: "They're making buttermilk",
      key: "huron",
    },
    {
      en: "Inuit",
      translation: "Otholeʔkehlo·nú",
      literal: "People of the north",
      key: "inuit",
    },
    {
      en: "American",
      translation: "Ostohlonuʔkeha·ká̲",
      literal: "(unknown)",
      key: "american",
    },
    {
      en: "French-Canadian",
      translation: "Walé·lu̲",
      literal: "(unknown)",
      key: "french",
    },
  ].map((row) => ({ ...row, audioFile: `module03/nations/${row.key}.mp3` }));
}

export function getDomesticatedAnimalList() {
  return [
    ["dog", "é·lhal"],
    ["cat", "takó·s"],
    ["goat", "kayaʔtáklahse̲ʔ"],
    ["sheep", "síksik"],
    ["chicken", "kítkit"],
    ["pig", "kóskos"],
    ["cow", "tyonhúhskwalut"],
    ["horse", "kohsa·tʌ́s"],
  ].map(([en, translation]) => ({
    audioFile: `module03/animals/${en}.mp3`,
    en,
    translation,
  }));
}

export function getDomesticatedBabyAnimalList() {
  return [
    ["dog", "puppy", "é·lhal othóska̲ʔ"],
    ["cat", "kitten", "takó·s othóska̲ʔ"],
    ["goat", "kid", "kayaʔtáklahseʔ othóska̲ʔ"],
    ["sheep", "lamb", "síksik othóska̲ʔ"],
    ["chicken", "chick", "kítkit othóska̲ʔ"],
    ["pig", "piglet", "kóskos othóska̲ʔ"],
    ["cow", "calf", "tyonhúhskwalut othóska̲ʔ"],
    ["horse", "foal", "kohsa·tʌ́s othóska̲ʔ"],
  ].map(([key, en, translation]) => ({
    audioFile: `module03/baby_animals/${key}.mp3`,
    en,
    translation,
  }));
}

export function getClanAnimalList() {
  return [
    ["bear", "ohkwa·lí̲"],
    ["beaver", "tsyoní·tu̲ʔ"],
    ["deer", "oskʌnu·tú̲·"],
    ["eel", "tawelú·ko̲"],
    ["hawk", "kalhakúha̲"],
    ["heron", "ohá·kwalut"],
    ["snipe", "tawístawiʔ"],
    ["turtle", "aʔno·wál"],
    ["wolf", "othayu·ní̲"],
  ].map(([en, translation]) => ({
    en,
    translation,
    audioFile: `module03/clan_animals/${en}.mp3`,
  }));
}

export function getClanParadigms() {
  const generateParadigm = (animalOne: string, animalEn: string) =>
    createParadigmData(
      {
        audioFolder: `module03/${animalEn}_clan`,
        translation: `{{pronoun}} {{refVerb}} ${animalEn} clan`,
        type: "PO",
        phrases: [
          {
            breakdown: [`${animalOne} ni`, ["wak"], "iʔtaló·tʌʔ"],
          },
          {
            breakdown: [`${animalOne} ni`, ["sʌ"], "ʔtaló·tʌʔ"],
          },
          {
            breakdown: [`${animalOne} ni`, ["ho"], "ʔtaló·tʌʔ"],
          },
          {
            breakdown: [`${animalOne} ni`, ["yako"], "ʔtaló·tʌʔ"],
          },
          {
            breakdown: [`${animalOne} ni`, ["yukn"], "iʔtaló·tʌʔ"],
          },
          {
            breakdown: [`${animalOne} ni`, ["sn"], "iʔtaló·tʌʔ"],
          },
          {
            breakdown: [`${animalOne} ni`, ["yukwʌ"], "ʔtaló·tʌʔ"],
          },
          {
            breakdown: [`${animalOne} ni`, ["swʌ"], "ʔtaló·tʌʔ"],
          },
          {
            breakdown: [`${animalOne} ni`, ["hot"], "iʔtaló·tʌʔ"],
          },
          {
            breakdown: [`${animalOne} ni`, ["yot"], "iʔtaló·tʌʔ"],
          },
        ],
      },
      ["i", "u", "m", "f", "uni", "u2", "us", "yall", "ms", "fs"],
    );

  return {
    turtle: generateParadigm("aʔnó·wál", "turtle"),
    wolf: generateParadigm("othayu·ní", "wolf"),
    bear: generateParadigm("ohkwa·lí", "bear"),
  };
}

export function getCountingPeopleLists() {
  return {
    men: [
      ["one male", ["s", ["ha"], "yá·tat"], "m"],
      ["two males", [["te", "DUAL"], ["kni"], "yáhse̲"], "2m"],
      ["three males", ["áhsʌ ni", ["hatí"]], "ms"],
      ["four males", ["kayé ni", ["hatí"]]],
      ["five males", ["wísk ni", ["hatí"]]],
    ].map(([en, breakdown, key]) => ({
      audioFile: key ? `module03/counting_people/${key}.mp3` : undefined,
      en,
      breakdown,
      translation: convertBreakdownToPlainText(breakdown as BreakdownArray),
    })),
    people: [
      ["one human being", ["ts", ["y"], "ukwe·tát"]],
      ["two human beings", [["te", "DUAL"], ["y"], "ukwe·táke̲ʔ"]],
      ["three human beings", ["áhsʌ ni", ["y"], "ukwe·táke̲ʔ"]],
      ["four human beings", ["kayé ni", ["y"], "ukwe·táke̲ʔ"]],
      ["five human beings", ["wísk ni", ["y"], "ukwe·táke̲ʔ"]],
    ].map(([en, breakdown], i) => ({
      audioFile: i < 3 ? `module03/counting_people/${i + 1}.mp3` : undefined,
      en,
      breakdown,
      translation: convertBreakdownToPlainText(breakdown as BreakdownArray),
    })),
    women: [
      ["one female", ["ts", ["ye"], "yá·tat"], "f"],
      ["two females", [["te", "DUAL"], ["kni"], "yáhse̲"], "2f"],
      ["three females", ["áhsʌ ni", ["kutí"]], "fs"],
      ["four females", ["kayé ni", ["kutí"]]],
      ["five females", ["wísk ni", ["kutí"]]],
    ].map(([en, breakdown, key]) => ({
      audioFile: key ? `module03/counting_people/${key}.mp3` : undefined,
      en: arrayify(en),
      breakdown,
      translation: convertBreakdownToPlainText(breakdown as BreakdownArray),
    })),
  };
}

export function getCountingPeopleExamples() {
  return [
    ["one boy", "shayá·tat laksá·"],
    ["three girls", "áhsʌ nikutí kutikhsaʔshúha̲"],
    ["two young men", "tehniyáhse tehninikʌhtlúha̲"],
    ["one young woman", "tsyeyá·tat yeyá·taseha̲"],
    ["three adults", "áhsʌ nihatí lʌnukwé̲·"],
    ["two older women", "tekniyáhse yotikhstʌ́ha̲"],
  ].map(([en, translation], i) => ({
    en: arrayify(en),
    translation,
    audioFile: `module03/counting_people_examples/${i + 1}.mp3`,
  }));
}

export function getGoodAndBadPeopleLists() {
  return {
    goodKid: goodKidPRS,
    goodKidPAST: goodKidPAST,
    badKidPAST: badKidPAST,
    badKid: badKidPRS,
    goodPerson: goodPersonPRS,
    goodPersonPAST: goodPersonPAST,
    badPerson: badPersonPRS,
    badPersonPAST: badPersonPAST,
  };
}

export function getAllModule03Paradigms(): ParadigmData[] {
  return [
    ...Object.values(getGoodAndBadPeopleLists()),
    ...Object.values(getClanParadigms()),
    nationsParadigm(),
  ];
}
