import dataAbout from "~/data/module02/aboutSomeone";
import dataAsk from "~/data/module02/ask";
import dataAskNegated from "~/data/module02/ask-negated";
import dataTell from "~/data/module02/tell";
import dataTellNegated from "~/data/module02/tell-negated";
import dataKnowPurple from "~/data/module02/know-purple";
import dataLastNames from "~/data/module02/lastNames";
import dataLikeRecp from "~/data/module02/like-RECP";
import dataLoveRecp from "~/data/module02/love-RECP";
import dataFamiliarRecp from "~/data/module02/familiar-RECP";
import dataLikeRefl from "~/data/nuwehse-refl";
import dataLoveRefl from "~/data/nolukhwa-refl";
import dataFamiliarRefl from "~/data/yʌteli-refl";
import dataSimilarInApperance from "~/data/module02/similarInApperance";

import dataAunt from "./../family/aunt";
import dataCousin from "./../family/cousin";
import dataFather from "./../family/father";
import dataGrandfather from "./../family/grandfather";
import dataGreatGranddaughter from "./../family/great-granddaughter";
import dataNephew from "./../family/nephew";
import dataRelated from "./../family/related";
import dataSisterOlder from "./../family/sister-older";
import dataUncle from "./../family/uncle";
import dataBrotherOlder from "./../family/brother-older";
import dataDaughter from "./../family/daughter";
import dataFriend from "./../family/friend";
import dataGrandmother from "./../family/grandmother";
import dataGreatGrandson from "./../family/great-grandson";
import dataNiece from "./../family/niece";
import dataSisterYounger from "./../family/sister-younger";
import dataBrotherYounger from "./../family/brother-younger";
import dataFamily from "./../family/family";
import dataGranddaughter from "./../family/granddaughter";
import dataGrandson from "./../family/grandson";
import dataMother from "./../family/mother";
import dataSon from "./../family/son";

import dataCousins from "../family/plural/cousins";
import dataFriends from "../family/plural/friends";
import dataChildren from "../family/plural/children";
import dataGrandchildren from "../family/plural/grandchildren";
import dataGrandparents from "../family/plural/grandparents";
import dataNiblings from "../family/plural/niblings";
import dataParents from "../family/plural/parents";
import dataSiblingsOlder from "../family/plural/siblings-older";
import dataSiblingsYounger from "../family/plural/siblings-younger";
import dataUnclesAunts from "../family/plural/uncles-aunts";
import { arrayify } from "@ukwehuwehneke/language-components";
import type { ParadigmData } from "@/utils/paradigm";

export function getDeceasedRelatives() {
  const data = [
    {
      translation: "aknulhaʔkʌ́",
      en: "my late mother",
      audioFile: "module02/deceased/mother.mp3",
    },
    {
      translation: "lakeʔnikʌ́",
      en: "my late father",
      audioFile: "module02/deceased/father.mp3",
    },
    {
      translation: "aksotkʌ́",
      en: "my late grandmother",
      audioFile: "module02/deceased/grandmother.mp3",
    },
    {
      translation: "laksotkʌ́",
      en: "my late grandfather",
      audioFile: "module02/deceased/grandfather.mp3",
    },
    {
      translation: "yuknulhaʔkʌ́",
      en: "my late aunt",
      audioFile: "module02/deceased/aunt.mp3",
    },
    {
      translation: "laknulhaʔkʌ́",
      en: "my late uncle",
      audioFile: "module02/deceased/uncle.mp3",
    },
    {
      translation: "yukeʔkʌ́haʔkʌ́",
      en: "my late older sister",
      audioFile: "module02/deceased/older_sister.mp3",
    },
    {
      translation: "lakeʔkʌhaʔkʌ́",
      en: "my late older brother",
      audioFile: "module02/deceased/older_brother.mp3",
    },
    {
      translation: "kheʔkʌhaʔkʌ́",
      en: "my late younger sister(s)",
      audioFile: "module02/deceased/younger_sister.mp3",
    },
    {
      translation: "liʔkʌhaʔkʌ́",
      en: "my late younger brother",
      audioFile: "module02/deceased/younger_brother.mp3",
    },
    {
      translation: "kheyuhwatʌʔkʌ́",
      en: "my late niece(s) & nephew(s)",
      audioFile: "module02/deceased/niece.mp3",
    },
    {
      translation: "liyuhwatʌʔkʌ́",
      en: "my late nephew",
      audioFile: "module02/deceased/nephew.mp3",
    },
    {
      translation: "kheyʌhaʔkʌ́",
      en: "my late daughter",
      audioFile: "module02/deceased/daughter.mp3",
    },
    {
      translation: "liyʌhaʔkʌ́",
      en: "my late son",
      audioFile: "module02/deceased/son.mp3",
    },
    {
      translation: "kheyatlehaʔkʌ́",
      en: "my late granddaughter(s) / grandchildren",
      audioFile: "module02/deceased/granddaughter.mp3",
    },
    {
      translation: "liyatlehaʔkʌ́",
      en: "my late grandson",
      audioFile: "module02/deceased/grandson.mp3",
    },
    {
      translation: "ukyalaʔsehaʔkʌ́",
      en: "my late cousin",
      audioFile: "module02/deceased/cousin.mp3",
    },
    {
      translation: "ukyatʌloʔkʌ́",
      en: "my late friend",
      audioFile: "module02/deceased/friend.mp3",
    },
  ];

  return data;
}

export function getLastNameExamples() {
  return [
    ["Is Smith your last name?", "Smith kʌ́ tetsʌná·se·le̲ʔ"],
    ["Smith is not my last name", "Yáh Smith thaʔtekhsʌná·se·le̲ʔ"],
    ["Jackson is 50 Cent's last name", "Jackson né· tehahsʌná·seleʔ 50 Cent"],
    ["Knowles is Beyonce's last name", "Knowles né· teyehsʌná·seleʔ Beyonce"],
    [
      "McCartney, Lennon, Harrison and Starr are the last names of the Beatles",
      "McCartney, Lennon, Harrison kháleʔ Starr né· tehatihsʌná·seleʔ Beatles",
    ],
  ].map(([en, translation], i) => ({
    en: arrayify(en),
    translation,
    audioFile: `module02/last_name_examples/${i + 1}.mp3`,
  }));
}

export function getThingsThatAreTheSameExamples() {
  return [
    ["They are the same", "Né· tshá·kat"],
    ["Are they the same?", "Né· kʌ́ tshá·kat"],
    ["They are not the same", "yáh né· tshá·kat té·kʌ"],
    ["Someone and I are the same age", "tshaʔteyuknohsliyá·ku̲"],
    ["You two are the same age", "tshaʔtesnohsliyá·ku̲"],
    ["We are all the same age", "tshaʔteyukyohsliyá·ku̲"],
    ["You all are the same age", "tshaʔtetsyohsliyá·ku̲"],
    ["They (males) are the same age", "tshaʔtehonohsliyá·ku̲"],
    ["They (females) are the same age", "tshaʔteyonohsliyá·ku̲"],
    ["You and I have the same last name", "tshaʔteyót tsiʔ tetnihsʌná·se·le̲ʔ"],
    [
      "Someone and I have the same last name",
      "tshaʔteyót tsiʔ teʔyaknihsʌná·se·le̲ʔ",
    ],
    ["You two have the same last name", "tshaʔteyót tsiʔ tehsnihsʌná·se·le̲ʔ"],
    ["Two males have the same last name", "tshaʔteyót tsiʔ tehnihsʌná·se·le̲ʔ"],
    [
      "Two females have the same last name",
      "tshaʔteyót tsiʔ teknihsʌná·se·le̲ʔ",
    ],
    ["We all have the same last name", "tshaʔteyót tsiʔ tetwahsʌná·se·le̲ʔ"],
    [
      "They and l have the same last name",
      "tshaʔteyót tsiʔ teyakwahsʌná·se·le̲ʔ",
    ],
    ["You all have the same last name", "tshaʔteyót tsiʔ tehswahsʌná·se·le̲ʔ"],
    [
      "They (males) have the same last name",
      "tshaʔteyót tsiʔ tehatihsʌná·se·le̲ʔ",
    ],
    [
      "They (females) have the same last name",
      "tshaʔteyót tsiʔ tekutihsʌná·se·le̲ʔ",
    ],
  ].map(([en, translation], i) => ({
    audioFile: `module02/things_that_are_the_same/${i + 1}.mp3`,
    en: arrayify(en),
    translation,
  }));
}

export function getAboutSomeoneExamples() {
  return [
    ["Do you know anything about me?", "Sanúhteʔ kʌ́ náhteʔ ní· aklihwá·ke̲"],
    [
      "Tell me a little bit about yourself.",
      "Takhló·li ostúha ni·isé· salihwá·ke̲",
    ],
    ["What do you know about David?", "Náhteʔ né· sanúhteʔ Tá·wit laolihwá·ke̲"],
    ["Who is this about?", "Úhkaʔ náhteʔ né· akolihwá·ke kaʔí·kʌ̲"],
    ["What's this about?", "Náhteʔ aolihwá·ke kaʔi·kʌ̲"],
    [
      "I don't like anything about them.",
      "Yáh náhteʔ né· teʔknú·wehseʔ lonulhá· laotilihwá·ke̲",
    ],
  ].map(([en, translation], i) => ({
    en: arrayify(en),
    translation,
    audioFile: `module02/about_examples/${i + 1}.mp3`,
  }));
}

export function getFamilyParadigms(): ParadigmData[] {
  return [
    dataAunt,
    dataCousin,
    dataFather,
    dataGrandfather,
    dataGreatGranddaughter,
    dataNephew,
    dataRelated,
    dataSisterOlder,
    dataUncle,
    dataBrotherOlder,
    dataDaughter,
    dataFriend,
    dataGrandmother,
    dataGreatGrandson,
    dataNiece,
    dataSisterYounger,
    dataBrotherYounger,
    dataFamily,
    dataGranddaughter,
    dataGrandson,
    dataMother,
    dataSon,
    dataCousins,
    dataFriends,
    dataChildren,
    dataGrandchildren,
    dataGrandparents,
    dataNiblings,
    dataParents,
    dataSiblingsOlder,
    dataSiblingsYounger,
    dataUnclesAunts,
  ];
}

export function getAllModule02Paradigms(): ParadigmData[] {
  return [
    dataAbout,
    dataAsk,
    dataAskNegated,
    dataTell,
    dataTellNegated,
    dataKnowPurple,
    dataLastNames,
    dataLikeRecp,
    dataLoveRecp,
    dataFamiliarRecp,
    dataLikeRefl,
    dataLoveRefl,
    dataFamiliarRefl,
    dataSimilarInApperance,
    ...getFamilyParadigms(),
  ];
}
