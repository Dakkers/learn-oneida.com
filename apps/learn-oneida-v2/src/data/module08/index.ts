import type { BreakdownArray } from "@ukwehuwehneke/language-components";

export interface ContainerNoun {
  en: string[];
  key: string;
  one: Array<{
    en?: string;
    one: BreakdownArray;
  }>;
}

export interface ObjectCharacteristicVerb {
  key: string;
  en: string[];
  dict: number[];
  root: string[];
  verb: BreakdownArray;
  verbNegated: BreakdownArray;
  withNoun: BreakdownArray;
  haveNoun: BreakdownArray;
  haveNounPlural: BreakdownArray;
  verbPast: BreakdownArray;
  withNounPast: BreakdownArray;
  haveNounPast: BreakdownArray;
  haveNounPastPlural: BreakdownArray;
}

const I_HAD_PAST = [
  ["wak", "PO"],
  "yʌ·tá",
  ["kweʔ", "PAST"],
  " ",
] as BreakdownArray;

export function createModule8CharacteristicsList() {
  const objBig: ObjectCharacteristicVerb = {
    key: "Big",
    root: ["-owanʌ-"],
    en: ["big", "large"],
    dict: [],
    verb: [["k", "PS"], "wanʌ́"],
    verbNegated: ["yáh te", ["k", "PS"], "wanʌ́"],
    withNoun: [["ka", "PS"], ["yal", "NOUN"], "owanʌ́"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "owanʌ́"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "owa·nʌ́·", ["seʔ", "CL"]],
    verbPast: [["k", "PS"], "wanʌ·", ["hné·", "PAST"]],
    withNounPast: [["ka", "PS"], ["yal", "NOUN"], "owanʌ·", ["hné·", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "owanʌ·", ["hné·", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["ka", "PS"],
      ["yal", "NOUN"],
      "owa·nʌ́·",
      ["seʔ", "CL"],
    ],
  };
  const objDark: ObjectCharacteristicVerb = {
    key: "Dark",
    root: ["tet...a’kala-"],
    en: ["dark"],
    dict: [],
    verb: [["te", "DUAL"], ["t", "CIS"], ["yo", "PO"], "hsohkwá·kalas"],
    verbNegated: [
      "yáh tha",
      ["te", "DUAL"],
      ["t", "CIS"],
      ["yo", "PO"],
      "hsohkwá·kalas",
    ],
    withNoun: [
      ["te", "DUAL"],
      ["t", "CIS"],
      ["yo", "PO"],
      ["yal", "NOUN"],
      "á·kalas",
    ],
    haveNoun: [
      ["te", "DUAL"],
      ["t", "CIS"],
      ["wak", "PO"],
      ["yal", "NOUN"],
      "á·kalas",
    ],
    haveNounPlural: [
      ["te", "DUAL"],
      ["t", "CIS"],
      ["wak", "PO"],
      ["yal", "NOUN"],
      "á·kalah",
      ["seʔ", "CL"],
    ],
    verbPast: [
      ["te", "DUAL"],
      ["t", "CIS"],
      ["yo", "PO"],
      "hsohkwá·kalas",
      ["kweʔ", "PAST"],
    ],
    withNounPast: [
      ["te", "DUAL"],
      ["t", "CIS"],
      ["yo", "PO"],
      ["yal", "NOUN"],
      "á·kalas",
      ["kweʔ", "PAST"],
    ],
    haveNounPast: [
      ["te", "DUAL"],
      ["t", "CIS"],
      ["wak", "PO"],
      ["yal", "NOUN"],
      "á·kalas",
      ["kweʔ", "PAST"],
    ],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["te", "DUAL"],
      ["t", "CIS"],
      ["yo", "PO"],
      ["yal", "NOUN"],
      "á·kalahseʔ",
      ["shúha", "CL"],
    ],
  };
  const objDirty: ObjectCharacteristicVerb = {
    key: "Dirty",
    root: ["te...anuhyaniht-"],
    en: ["dirty", "soiled"],
    dict: [],
    verb: [["te", "DUAL"], ["yo", "PO"], "nú·yanit"],
    verbNegated: ["yáh tha", ["te", "DUAL"], ["yo", "PO"], "nú·yanit"],
    withNoun: [["te", "DUAL"], ["yo", "PO"], ["yal", "NOUN"], "nú·yanit"],
    haveNoun: [["te", "DUAL"], ["wak", "PO"], ["yal", "NOUN"], "nú·yanit"],
    haveNounPlural: [
      ["te", "DUAL"],
      ["wak", "PO"],
      ["yal", "NOUN"],
      "anuyanith",
      ["okúha", "CL"],
    ],
    verbPast: [["te", "DUAL"], ["yo", "PO"], "anuyanith", ["ú·neʔ", "PAST"]],
    withNounPast: [
      ["te", "DUAL"],
      ["yo", "PO"],
      ["yal", "NOUN"],
      "anuyanith",
      ["ú·neʔ", "PAST"],
    ],
    haveNounPast: [
      ["te", "DUAL"],
      ["wak", "PO"],
      ["yal", "NOUN"],
      "anuyanith",
      ["ú·neʔ", "PAST"],
    ],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["te", "DUAL"],
      ["yo", "PO"],
      ["yal", "NOUN"],
      "anuyanith",
      ["okúha", "CL"],
    ],
  };
  const objDry: ObjectCharacteristicVerb = {
    key: "Dry",
    root: ["-astathʌ-"],
    en: ["dry"],
    dict: [],
    verb: [["yo", "PO"], "hstáthʌ"],
    verbNegated: ["yáh te", ["yo", "PO"], "hstáthʌ"],
    withNoun: [["yo", "PO"], ["yal", "NOUN"], "astáthʌ"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "astáthʌ"],
    haveNounPlural: [
      ["wak", "PO"],
      ["yal", "NOUN"],
      "astathʌʔ",
      ["shúha", "CL"],
    ],
    verbPast: [["yo", "PO"], "hstathʌ́", ["·ne·", "PAST"]],
    withNounPast: [["yo", "PO"], ["yal", "NOUN"], "astathʌ́", ["·ne·", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "astathʌ́", ["·ne·", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["yo", "PO"],
      ["yal", "NOUN"],
      "astathʌʔ",
      ["shúha", "CL"],
    ],
  };
  const objExpensive: ObjectCharacteristicVerb = {
    key: "Expensive",
    root: ["-nolu-"],
    en: ["expensive", "rare", "precious"],
    dict: [],
    verb: [["ka", "PS"], "no·lú·"],
    verbNegated: ["yáh te", ["ka", "PS"], "no·lú·"],
    withNoun: [["ka", "PS"], ["yal", "NOUN"], "ano·lú·"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "ano·lú·"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "ano·lú·", ["seʔ", "CL"]],
    verbPast: [["ka", "PS"], "nolu", ["hné·", "PAST"]],
    withNounPast: [["ka", "PS"], ["yal", "NOUN"], "anolu", ["hné·", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "anolu", ["hné·", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["ka", "PS"],
      ["yal", "NOUN"],
      "ano·lú·",
      ["seʔ", "CL"],
    ],
  };
  const objHard: ObjectCharacteristicVerb = {
    key: "Hard",
    root: ["-hnil-"],
    en: ["hard"],
    dict: [],
    verb: [["yo", "PO"], "hnilú"],
    verbNegated: ["yáh te", ["yo", "PO"], "hnilú"],
    withNoun: [["yo", "PO"], ["yal", "NOUN"], "ahnilú"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "ahnilú"],
    haveNounPlural: [
      ["wak", "PO"],
      "yʌ ",
      ["yo", "PO"],
      ["yal", "NOUN"],
      "ahniluʔ",
      ["se", "CL"],
    ],
    verbPast: [["yo", "PO"], "hnilu", ["hné·", "PAST"]],
    withNounPast: [["yo", "PO"], ["yal", "NOUN"], "ahnilu", ["hné·", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "ahnilu", ["hné·", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["yo", "PO"],
      ["yal", "NOUN"],
      "ahniluʔ",
      ["shúha", "CL"],
    ],
  };
  const objHeavy: ObjectCharacteristicVerb = {
    key: "Heavy",
    root: ["-kste-"],
    en: ["heavy"],
    dict: [],
    verb: [["yó", "PO"], "ksteʔ"],
    verbNegated: ["yáh te", ["yó", "PO"], "ksteʔ"],
    withNoun: [["yo", "PO"], ["yal", "NOUN"], "áksteʔ"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "áksteʔ"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "aksteʔ", ["shúha", "CL"]],
    verbPast: [["yo", "PO"], "kste", ["hkweʔ", "PAST"]],
    withNounPast: [["yo", "PO"], ["yal", "NOUN"], "ákste", ["hkweʔ", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "ákste", ["hkweʔ", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["yo", "PO"],
      ["yal", "NOUN"],
      "aksteʔ",
      ["shúha", "CL"],
    ],
  };
  const objHole: ObjectCharacteristicVerb = {
    key: "Hole",
    root: ["-kahlut-"],
    en: ["hole (in something)"],
    dict: [],
    verb: [["yo", "PO"], "ká·luteʔ"],
    verbNegated: ["yáh te", ["yo", "PO"], "ká·luteʔ"],
    withNoun: [["yo", "PO"], ["yal", "NOUN"], "aká·luteʔ"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "aká·luteʔ"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "akahlu·", ["tú·", "CL"]],
    verbPast: [["yo", "PO"], "kahlu·tá", ["hkweʔ", "PAST"]],
    withNounPast: [
      ["yo", "PO"],
      ["yal", "NOUN"],
      "akahlu·tá",
      ["hkweʔ", "PAST"],
    ],
    haveNounPast: [
      ["wak", "PO"],
      ["yal", "NOUN"],
      "akahlu·tá",
      ["hkweʔ", "PAST"],
    ],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["yo", "PO"],
      ["yal", "NOUN"],
      "akahlu·",
      ["tú·", "CL"],
    ],
  };
  const objLight: ObjectCharacteristicVerb = {
    key: "Light",
    root: ["-wiskl-"],
    en: ["light in colour"],
    dict: [],
    verb: ["owísklaʔ"],
    verbNegated: ["yáh te", ["ka", "PS"], "wískla"],
    withNoun: [["ka", "PS"], ["yal", "NOUN"], "awísklaʔ"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "awísklaʔ"],
    haveNounPlural: [
      ["wak", "PO"],
      "yʌ owísklaʔ ka",
      ["yal", "NOUN"],
      "eʔ",
      ["shúha", "CL"],
    ],
    verbPast: ["owísklaʔ niyotu·né"],
    withNounPast: [["ka", "PS"], ["yal", "NOUN"], "awísklaʔ", " niyotu·né"],
    haveNounPast: [
      ["ka", "PS"],
      ["yal", "NOUN"],
      "awísklaʔ ",
      ["wak", "PO"],
      "yʌ·tá",
      ["hkweʔ", "PAST"],
    ],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      "owísklaʔ ka",
      ["yal", "NOUN"],
      "eʔ",
      ["shúha", "CL"],
    ],
  };
  const objLong: ObjectCharacteristicVerb = {
    key: "Long",
    root: ["-es-", "-us-"],
    en: ["long"],
    dict: [],
    verb: ["i·yús"],
    verbNegated: ["yáh teʔyús"],
    withNoun: [["ka", "PS"], ["ya·l", "NOUN"], "és"],
    haveNoun: [["wak", "PO"], ["ya·l", "NOUN"], "és"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "e·sú·", ["seʔ", "CL"]],
    verbPast: ["i·yús", ["kweʔ", "PAST"]],
    withNounPast: [["ka", "PS"], ["ya·l", "NOUN"], "és", ["kweʔ", "PAST"]],
    haveNounPast: [["wak", "PO"], ["ya·l", "NOUN"], "és", ["kweʔ", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["ka", "PS"],
      ["yal", "NOUN"],
      "e·sú·",
      ["seʔ", "CL"],
    ],
  };
  const objLotsOf: ObjectCharacteristicVerb = {
    key: "Lots",
    root: ["-ka’te-"],
    en: ["lots of"],
    dict: [],
    verb: [["yo", "PO"], "ká·teʔ"],
    verbNegated: ["yáh teʔ", ["yo", "PO"], "ká·teʔ"],
    withNoun: [["yo", "PO"], ["yal", "NOUN"], "aká·teʔ"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "aká·teʔ"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "aká·teʔ", ["seʔ", "CL"]],
    verbPast: [["yo", "PO"], "ká·te", ["hkweʔ", "PAST"]],
    withNounPast: [["yo", "PO"], ["yal", "NOUN"], "aká·teʔ", ["hkweʔ", "PAST"]],
    haveNounPast: [
      ["wak", "PO"],
      ["yal", "NOUN"],
      "aká·teʔ",
      ["hkweʔ", "PAST"],
    ],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["yo", "PO"],
      ["yal", "NOUN"],
      "aká·teʔ",
    ],
  };
  const objNegative: ObjectCharacteristicVerb = {
    key: "Negative",
    root: ["-aksʌ-"],
    en: ["negative", "bad"],
    dict: [],
    verb: ["yáh te", ["yo", "PO"], "yántle"],
    verbNegated: [["yo", "PO"], "yántle"],
    withNoun: [["ka", "PS"], ["yal", "NOUN"], "áksʌ"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "áksʌ"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "áksʌ", ["hseʔ", "CL"]],
    verbPast: ["yáh te", ["yo", "PO"], "yántle", ["hkweʔ", "PAST"]],
    withNounPast: [["ka", "PS"], ["yal", "NOUN"], "áksʌ", ["hné·", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "áksʌ", ["hné·", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["ka", "PS"],
      ["yal", "NOUN"],
      "áksʌ",
      ["hseʔ", "CL"],
    ],
  };
  const objNew: ObjectCharacteristicVerb = {
    key: "New",
    root: ["-ase-"],
    en: ["new"],
    dict: [],
    verb: ["a·sé·"],
    verbNegated: ["yáh te", ["w", "PO"], "a·sé·"],
    withNoun: ["o", ["yál", "NOUN"], "aseʔ"],
    haveNoun: [["wak", "PO"], ["yál", "NOUN"], "aseʔ"],
    haveNounPlural: [["ak", "PP"], ["yal", "NOUN"], "aseʔ", ["shúha", "CL"]],
    verbPast: [["w", "PS"], "ase", ["hkweʔ", "PAST"]],
    withNounPast: ["o", ["yal", "NOUN"], "asé", ["hkweʔ", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "asé", ["hahkweʔ", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      "o",
      ["yal", "NOUN"],
      "aseʔ",
      ["shúha", "CL"],
    ],
  };
  const objOld: ObjectCharacteristicVerb = {
    key: "Old",
    root: ["-akayu-"],
    en: ["old"],
    dict: [],
    verb: ["akayú"],
    verbNegated: ["yáh te", ["w", "PS"], "akayú"],
    withNoun: ["o", ["yal", "NOUN"], "akayú"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "akayú"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "akayú·", ["seʔ", "CL"]],
    verbPast: ["akayu", ["hné·", "PAST"]],
    withNounPast: ["o", ["yal", "NOUN"], "akayu", ["hné·", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "akayu", ["hné·", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      "o",
      ["yal", "NOUN"],
      "akayú·",
      ["seʔ", "CL"],
    ],
  };
  const objPretty: ObjectCharacteristicVerb = {
    key: "Pretty",
    root: ["-iyo-"],
    en: ["pretty", "good"],
    dict: [],
    verb: [["yo", "PO"], "yántleʔ"],
    verbNegated: ["yáh te", ["yo", "PO"], "yántleʔ"],
    withNoun: [["ka", "PS"], ["yal", "NOUN"], "iyó"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "iyó"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "i·yó·", ["seʔ", "CL"]],
    verbPast: [["yo", "PO"], "yántle", ["hkweʔ", "PAST"]],
    withNounPast: [["ka", "PS"], ["yal", "NOUN"], "iyo", ["hné·", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "iyo", ["hné·", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["yo", "PO"],
      ["yal", "NOUN"],
      "i·yó·",
      ["seʔ", "CL"],
    ],
  };
  const objShort: ObjectCharacteristicVerb = {
    key: "Short",
    root: ["kʌ’ n...esha"],
    en: ["short"],
    dict: [],
    verb: ["kʌʔ niyúsa"],
    verbNegated: ["yáh kʌʔ teyúsa"],
    withNoun: ["kʌʔ ni", ["ka", "PS"], ["yal", "NOUN"], "ésa"],
    haveNoun: ["kʌʔ ni", ["wak", "PO"], ["yal", "NOUN"], "ésa"],
    haveNounPlural: [
      "kʌʔ ni",
      ["wak", "PO"],
      ["yal", "NOUN"],
      "e·sú·",
      ["seʔ", "CL"],
    ],
    verbPast: ["kʌʔ niyús", ["kweʔ", "PAST"]],
    withNounPast: [
      "kʌʔ ni",
      ["ka", "PS"],
      ["yal", "NOUN"],
      "és",
      ["kweʔ", "PAST"],
    ],
    haveNounPast: [
      "kʌʔ ni",
      ["wak", "PO"],
      ["ya·l", "NOUN"],
      "és",
      ["kweʔ", "PAST"],
    ],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      "kʌʔ ni",
      ["yo", "PO"],
      ["yal", "NOUN"],
      "e·sú·",
      ["seʔ", "CL"],
    ],
  };
  const objSmall: ObjectCharacteristicVerb = {
    key: "Small",
    root: ["kʌ’ n...a’"],
    en: ["small"],
    dict: [],
    verb: ["kʌʔ  ni", ["w", "PS"], "á·"],
    verbNegated: ["yáh kʌʔ te", ["w", "PS"], "á·"],
    withNoun: ["kʌʔ ni", ["ka", "PS"], ["yal", "NOUN"], "á·"],
    haveNoun: ["kʌʔ ni", ["wak", "PO"], ["yal", "NOUN"], "á·"],
    haveNounPlural: [
      "kʌʔ ni",
      ["wak", "PO"],
      ["yal", "NOUN"],
      "á·",
      ["saʔ", "CL"],
    ],
    verbPast: ["kʌʔ ni", ["w", "PS"], "á", ["hkweʔ", "PAST"]],
    withNounPast: [
      "kʌʔ ni",
      ["ka", "PS"],
      ["yal", "NOUN"],
      "á·",
      ["kweʔ", "PAST"],
    ],
    haveNounPast: [
      "kʌʔ ni",
      ["wak", "PO"],
      ["ya·l", "NOUN"],
      "á",
      ["hkweʔ", "PAST"],
    ],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      "kʌʔ ni",
      ["ka", "PS"],
      ["yal", "NOUN"],
      "á·",
      ["saʔ", "CL"],
    ],
  };
  const objSmelly: ObjectCharacteristicVerb = {
    key: "Smelly",
    root: ["-akla’-"],
    en: ["smelly"],
    dict: [],
    verb: [["w", "PS"], "áklahseʔ"],
    verbNegated: ["yáh te", ["w", "PS"], "áklahseʔ"],
    withNoun: [["ka", "PS"], ["yal", "NOUN"], "áklahseʔ"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "áklahseʔ"],
    haveNounPlural: [
      ["wak", "PO"],
      ["yal", "NOUN"],
      "aklaseʔ",
      ["shúha", "CL"],
    ],
    verbPast: [["w", "PS"], "akláhs", ["kweʔ", "PAST"]],
    withNounPast: [["ka", "PS"], ["yal", "NOUN"], "akláhs", ["kweʔ", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "akláhs", ["kweʔ", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["ka", "PS"],
      ["yal", "NOUN"],
      "aklaseʔ",
      ["shúha", "CL"],
    ],
  };
  const objSoft: ObjectCharacteristicVerb = {
    key: "Soft",
    root: ["-’netskʌ-"],
    en: ["soft"],
    dict: [],
    verb: [["yo", "PO"], "ʔnétskʌ"],
    verbNegated: ["yáh te", ["yo", "PO"], "ʔnétskʌ"],
    withNoun: [["yo", "PO"], ["yal", "NOUN"], "ʔnétskʌ"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "ʔnétskʌ"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "ʔnétskʌ", ["hseʔ", "CL"]],
    verbPast: [["yo", "PO"], "ʔnétskʌ", ["kweʔ", "PAST"]],
    withNounPast: [["yo", "PO"], ["yal", "NOUN"], "ʔnétskʌ", ["kweʔ", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "ʔnétskʌ", ["kweʔ", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["yo", "PO"],
      ["yal", "NOUN"],
      "ʔnétskʌ",
      ["hseʔ", "CL"],
    ],
  };
  const objUgly: ObjectCharacteristicVerb = {
    key: "Ugly",
    root: ["-ahetkʌ-"],
    en: ["ugly"],
    dict: [],
    verb: [["w", "PS"], "ahétkʌʔ"],
    verbNegated: ["yáh te", ["w", "PS"], "ahétkʌʔ"],
    withNoun: [["ka", "PS"], ["yal", "NOUN"], "ahétkʌʔ"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "ahétkʌʔ"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "ahétkʌ", ["hseʔ", "CL"]],
    verbPast: [["w", "PS"], "ahetkʌ", ["hné·", "PAST"]],
    withNounPast: [["ka", "PS"], ["yal", "NOUN"], "ahetkʌ", ["hné·", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "ahetkʌ", ["hné·", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["ka", "PS"],
      ["yal", "NOUN"],
      "ahétkʌ",
      ["hseʔ", "CL"],
    ],
  };
  const objWet: ObjectCharacteristicVerb = {
    key: "Wet",
    root: ["-na’nawʌ-"],
    en: ["wet"],
    dict: [],
    verb: [["yo", "PO"], "ná·nawʌ"],
    verbNegated: ["yáh te", ["yo", "PO"], "ná·nawʌ"],
    withNoun: [["yo", "PO"], ["yal", "NOUN"], "anawʌ́"],
    haveNoun: [["wak", "PO"], ["yal", "NOUN"], "anawʌ́"],
    haveNounPlural: [["wak", "PO"], ["yal", "NOUN"], "anawʌ́·", ["seʔ", "CL"]],
    verbPast: [["yo", "PO"], "naʔnawʌ", ["kweʔ", "PAST"]],
    withNounPast: [["yo", "PO"], ["yal", "NOUN"], "anawʌ", ["kweʔ", "PAST"]],
    haveNounPast: [["wak", "PO"], ["yal", "NOUN"], "anawʌ", ["kweʔ", "PAST"]],
    haveNounPastPlural: [
      ...I_HAD_PAST,
      ["yo", "PO"],
      ["yal", "NOUN"],
      "anawʌ́·",
      ["seʔ", "CL"],
    ],
  };
  return [
    objBig,
    objDark,
    objDirty,
    objDry,
    objExpensive,
    objHard,
    objHeavy,
    objHole,
    objLight,
    objLong,
    objLotsOf,
    objNegative,
    objNew,
    objOld,
    objPretty,
    objShort,
    objSmall,
    objSmelly,
    objSoft,
    objUgly,
    objWet,
  ];
}

export function createContainerNounList() {
  const objAmmoClip: ContainerNoun = {
    key: "AmmoClip",
    en: ["ammo clip", "ammo magazine", "marble bag"],
    one: [
      {
        one: [["ye", "PS"], "nʌyalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objBabySling: ContainerNoun = {
    key: "BabySling",
    en: [
      "baby sling",
      "wrap",
      "cradleboard",
      "jolly jumper",
      "playpen",
      "stroller",
    ],
    one: [
      {
        one: [["ye", "PS"], "wilalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objBottleCase: ContainerNoun = {
    key: "BottleCase",
    en: ["bottle case", "pop", "juice", "alcohol"],
    one: [
      {
        one: [["ye", "PS"], "tsheʔtalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objBookRack: ContainerNoun = {
    key: "BookRack",
    en: ["book rack", "magazines", "toilet paper", "napkins"],
    one: [
      {
        one: [["ye", "PS"], "hyatuhslalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objButtonJar: ContainerNoun = {
    key: "ButtonJar",
    en: ["button jar"],
    one: [
      {
        one: [["ye", "PS"], "tsihkwalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objCigaretteCase: ContainerNoun = {
    key: "CigaretteCase",
    en: ["cigarette case", "tobacco pouch"],
    one: [
      {
        one: [["ye", "PS"], "hloʔkwalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
      {
        one: [["ye", "PS"], "yuʔkwalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objCupboard: ContainerNoun = {
    key: "Cupboard",
    en: ["cupboard", "dish rack", "china cabinet"],
    one: [
      {
        one: [["ye", "PS"], "ksalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objEyeglassCase: ContainerNoun = {
    key: "EyeglassCase",
    en: ["eyeglass case"],
    one: [
      {
        one: [
          ["yu", "PS"],
          "twisutakhwaʔtslalá",
          ["khw", "INST2"],
          ["a̲ʔ", "HAB"],
        ],
      },
    ],
  };
  const objFeatherCase: ContainerNoun = {
    key: "FeatherCase",
    en: ["feather case"],
    one: [
      {
        one: [["ye", "PS"], "stoslalakhwa̲ʔ"],
      },
    ],
  };
  const objGunRack: ContainerNoun = {
    key: "GunRack",
    en: ["gun rack"],
    one: [
      {
        one: [["ye", "PS"], "hulalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objHatRack: ContainerNoun = {
    key: "HatRack",
    en: ["hat rack", "hat box"],
    one: [
      {
        one: [["yu", "PS"], "nalotslalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objHopeChest: ContainerNoun = {
    key: "HopeChest",
    en: ["hope chest", "blanket box"],
    one: [
      {
        one: [["ye", "PS"], "kʌhalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objIceCubeTray: ContainerNoun = {
    key: "IceCubeTray",
    en: ["ice cube tray"],
    one: [
      {
        one: [["ye", "PS"], "wisalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
      {
        one: [["ye", "PS"], "wisunyátha"],
      },
    ],
  };
  const objJewelryBox: ContainerNoun = {
    key: "JewelryBox",
    en: ["jewelry box"],
    one: [
      {
        one: [["ye", "PS"], "stalotalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objKnifeDrawer: ContainerNoun = {
    key: "KnifeDrawer",
    en: ["knife drawer", "knife holder", "sheath"],
    one: [
      {
        one: [["yu", "PS"], "ʔshalalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objMoneyClip: ContainerNoun = {
    key: "MoneyClip",
    en: ["money clip", "billfold", "wallet"],
    one: [
      {
        one: [["ye", "PS"], "hwistalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objPencilCase: ContainerNoun = {
    key: "PencilCase",
    en: ["pencil case"],
    one: [
      {
        one: [
          ["ye", "PS"],
          "hyatukhwaʔtslalá",
          ["khw", "INST2"],
          ["a̲ʔ", "HAB"],
        ],
      },
    ],
  };
  const objPetCage: ContainerNoun = {
    key: "PetCage",
    en: ["pet cage", "holder", "crate"],
    one: [
      {
        one: [["ye", "PS"], "nahskwalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objPillBottle: ContainerNoun = {
    key: "PillBottle",
    en: ["pill bottle", "medicine chest"],
    one: [
      {
        one: [["ye", "PS"], "nuhkwaʔtslalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objShoeRack: ContainerNoun = {
    key: "ShoeRack",
    en: ["shoe rack"],
    one: [
      {
        one: [["yu", "PS"], "htahkwalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objSockDrawer: ContainerNoun = {
    key: "SockDrawer",
    en: ["sock drawer"],
    one: [
      {
        one: [["yu", "PS"], "tlahtiʔtslalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objSugarBowl: ContainerNoun = {
    key: "SugarBowl",
    en: ["sugar bowl", "candy dish"],
    one: [
      {
        one: [["ye", "PS"], "nuʔtakliʔtslalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objVase: ContainerNoun = {
    key: "Vase",
    en: ["vase"],
    one: [
      {
        one: [["ye", "PS"], "tsiʔtsyalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  const objWoodRack: ContainerNoun = {
    key: "WoodRack",
    en: ["wood rack"],
    one: [
      {
        one: [["ye", "PS"], "yʌtalá", ["khw", "INST2"], ["a̲ʔ", "HAB"]],
      },
    ],
  };
  return [
    objAmmoClip,
    objBabySling,
    objBottleCase,
    objBookRack,
    objButtonJar,
    objCigaretteCase,
    objCupboard,
    objEyeglassCase,
    objFeatherCase,
    objGunRack,
    objHatRack,
    objHopeChest,
    objIceCubeTray,
    objJewelryBox,
    objKnifeDrawer,
    objMoneyClip,
    objPencilCase,
    objPetCage,
    objPillBottle,
    objShoeRack,
    objSockDrawer,
    objSugarBowl,
    objVase,
    objWoodRack,
  ];
}

export function getEnglishTranslation(
  datum: {
    en: string[];
  },
  key: string,
) {
  let result = "";
  if (key === "verb") {
    result = "it is {{WORD}}";
  } else if (key === "verbNegated") {
    result = "it is not {{WORD}}";
  } else if (key === "withNoun") {
    result = "it is {{A}} {{WORD}} bag";
  } else if (key === "haveNoun") {
    result = "I have {{A}} {{WORD}} bag";
  } else if (key === "haveNounPlural") {
    result = "I have {{WORD}} bags";
  } else if (key === "verbPast") {
    result = "it used to be {{WORD}}";
  } else if (key === "withNounPast") {
    result = "it used to be {{A}} {{WORD}} bag";
  } else if (key === "haveNounPast") {
    result = "I used to have {{A}} {{WORD}} bag";
  } else if (key === "haveNounPastPlural") {
    result = "I used to have {{WORD}} bags";
  }
  return result
    .replace("{{WORD}}", datum.en[0])
    .replace(
      "{{A}}",
      ["a", "e", "i", "o", "u"].find((vowel) => datum.en[0].startsWith(vowel))
        ? "an"
        : "a",
    );
}
