import dataIsHere from "./is-here";
import dataWasHere from "./was-here";
import dataWillBeHere from "./will-be-here";
import dataMightBeHere from "./might-be-here";
import dataIsNotHere from "./is-not-here";
import dataWasNotHere from "./was-not-here";
import dataWillNotBeHere from "./will-not-be-here";
import dataIsThere from "./is-there";
import dataWillBeThere from "./will-be-there";
import dataWasThere from "./was-there";
import dataMightBeThere from "./might-be-there";
import dataIsNotThere from "./is-not-there";
import dataWasNotThere from "./was-not-there";
import dataWillNotBeThere from "./will-not-be-there";
import dataIsAtHome from "./is-at-home";
import dataWasAtHome from "./was-at-home";
import dataWillBeAtHome from "./will-be-at-home";
import dataMightBeAtHome from "./might-be-at-home";
import dataIsNotAtHome from "./is-not-at-home";
import dataWasNotAtHome from "./was-not-at-home";
import dataWillNotBeAtHome from "./will-not-be-at-home";
import dataLivesThere from "./lives-there";
import dataUsedToLiveThere from "./used-to-live-there";
import dataWillLiveThere from "./will-live-there";
import dataMightLiveThere from "./might-live-there";
import dataDoesntLiveThere from "./doesnt-live-there";
import dataDidntUsedToLiveThere from "./didnt-used-to-live-there";
import dataWillNotLiveThere from "./will-not-live-there";
import dataWant from "./want";
import dataDontWant from "./dont-want";
import dataUsedToWant from "./used-to-want";
import dataDidntUsedToWant from "./didnt-used-to-want";
import dataThought from "./thought";
import type { ParadigmData } from "~/components/ParadigmTable";
import { arrayify } from "@ukwehuwehneke/language-components";

export const MODULE_4_TENSE_LIST = ["prs", "past", "fut", "ifut"] as const;
export type Module4VerbTense = (typeof MODULE_4_TENSE_LIST)[number];

interface Module4Datum {
  data: ParadigmData;
  en: string;
  key: string;
  negated?: true;
  tense: Module4VerbTense;
}

/**
 * @deprecated Maybe?
 */
export function createModule4Data() {
  const result: Module4Datum[] = [
    {
      data: dataIsHere,
      en: "Someone is here",
      key: "data-is-here",
      tense: "prs",
    },
    {
      data: dataWasHere,
      en: "Someone was here",
      key: "data-was-here",
      tense: "past",
    },
    {
      data: dataWillBeHere,
      en: "Someone will be here",
      key: "data-will-be-here",
      tense: "fut",
    },
    {
      data: dataMightBeHere,
      en: "Someone might be here",
      key: "data-might-be-here",
      tense: "ifut",
    },
    {
      data: dataIsNotHere,
      en: "Someone is not here",
      key: "data-is-not-here",
      negated: true,
      tense: "prs",
    },
    {
      data: dataWasNotHere,
      en: "Someone was not here",
      key: "data-was-not-here",
      negated: true,
      tense: "past",
    },
    {
      data: dataWillNotBeHere,
      en: "Someone will not be here",
      key: "data-will-not-be-here",
      negated: true,
      tense: "ifut",
    },
    {
      data: dataIsThere,
      en: "Someone is there",
      key: "data-is-there",
      tense: "prs",
    },
    {
      data: dataWillBeThere,
      en: "Someone will be there",
      key: "data-will-be-there",
      tense: "fut",
    },
    {
      data: dataWasThere,
      en: "Someone was there",
      key: "data-was-there",
      tense: "past",
    },
    {
      data: dataMightBeThere,
      en: "Someone might be there",
      key: "data-might-be-there",
      tense: "ifut",
    },
    {
      data: dataIsNotThere,
      en: "Someone is not there",
      key: "data-is-not-there",
      negated: true,
      tense: "prs",
    },
    {
      data: dataWasNotThere,
      en: "Someone was not there",
      key: "data-was-not-there",
      negated: true,
      tense: "past",
    },
    {
      data: dataWillNotBeThere,
      en: "Someone will not be there",
      key: "data-will-not-be-there",
      negated: true,
      tense: "ifut",
    },
    {
      data: dataIsAtHome,
      en: "Someone is at home",
      key: "data-is-at-home",
      tense: "prs",
    },
    {
      data: dataWasAtHome,
      en: "Someone was at home",
      key: "data-was-at-home",
      tense: "past",
    },
    {
      data: dataWillBeAtHome,
      en: "Someone will be at home",
      key: "data-will-be-at-home",
      tense: "fut",
    },
    {
      data: dataMightBeAtHome,
      en: "Someone might be at home",
      key: "data-might-be-at-home",
      tense: "ifut",
    },
    {
      data: dataIsNotAtHome,
      en: "Someone is not at home",
      key: "data-is-not-at-home",
      negated: true,
      tense: "prs",
    },
    {
      data: dataWasNotAtHome,
      en: "Someone was not at home",
      key: "data-was-not-at-home",
      negated: true,
      tense: "past",
    },
    {
      data: dataWillNotBeAtHome,
      en: "Someone will not be at home",
      key: "data-will-not-be-at-home",
      negated: true,
      tense: "ifut",
    },
    {
      data: dataLivesThere,
      en: "Someone lives there",
      key: "data-lives-there",
      tense: "prs",
    },
    {
      data: dataUsedToLiveThere,
      en: "Someone used to live there",
      key: "data-used-to-live-there",
      tense: "past",
    },
    {
      data: dataWillLiveThere,
      en: "Someone will live there",
      key: "data-will-live-there",
      tense: "fut",
    },
    {
      data: dataMightLiveThere,
      en: "Someone might live there",
      key: "data-might-live-there",
      tense: "ifut",
    },
    {
      data: dataDoesntLiveThere,
      en: "Someone doesn't live there",
      key: "data-doesnt-live-there",
      negated: true,
      tense: "prs",
    },
    {
      data: dataDidntUsedToLiveThere,
      en: "Someone didn't used to live there",
      key: "data-didnt-used-to-live-there",
      negated: true,
      tense: "past",
    },
    {
      data: dataWillNotLiveThere,
      en: "Someone will not live there",
      key: "data-will-not-live-there",
      negated: true,
      tense: "ifut",
    },
    {
      data: dataWant,
      en: "Someone want",
      key: "data-want",
      tense: "prs",
    },
    {
      data: dataDontWant,
      en: "Someone doesn't want",
      key: "data-doesnt-want",
      negated: true,
      tense: "prs",
    },
    {
      data: dataUsedToWant,
      en: "Someone used to want",
      key: "data-used-to-want",
      tense: "past",
    },
    {
      data: dataDidntUsedToWant,
      en: "Someone didn't used to want",
      key: "data-didnt-used-to-want",
      negated: true,
      tense: "past",
    },
    {
      data: dataThought,
      en: "Someone thought",
      key: "data-thought",
      tense: "prs",
    },
  ];
  return result;
}

export function getDaysOfWeekData() {
  const mapUtil = (obj: {
    en: string;
    key?: string;
    translation: string;
  }) => ({
    ...obj,
    audioFile: `module04/days/${obj.en.toLowerCase().replaceAll(" ", "_")}.mp3`,
    en: arrayify(obj.en),
  });
  const days = [
    { en: "Sunday", translation: "Yautatokʌ́htu", key: "sun" },
    { en: "Monday", translation: "Yautʌtá·u", key: "mon" },
    { en: "Tuesday", translation: "Tekníhatut", key: "tue" },
    { en: "Wednesday", translation: "Ahsʌ́hatut", key: "wed" },
    { en: "Thursday", translation: "Kayelíhatut", key: "thu" },
    { en: "Friday", translation: "Wískhatut", key: "fri" },
    { en: "Saturday", translation: "Ʌtáktaʔ", key: "sat" },
  ].map(mapUtil);

  const daysSpecific = [
    { en: "on Sunday", translation: "Yautatokʌhtu·ne̲ʔ" },
    { en: "on Monday", translation: "Yautʌtaʔú·ne̲ʔ" },
    { en: "on Tuesday", translation: "Teknihatútneʔ" },
    { en: "on Wednesday", translation: "Ahsʌhatútneʔ" },
    { en: "on Thursday", translation: "Kayelihatútneʔ" },
    { en: "on Friday", translation: "Wiskhatútneʔ" },
    { en: "on Saturday", translation: "Ʌtaktáhne̲ʔ" },
  ].map(mapUtil);
  const daysLast = [
    { en: "last Sunday", translation: "tshawʌtatokʌ́htu" },
    { en: "last Monday", translation: "tshawʌtʌ·táne̲ʔ" },
    { en: "last Tuesday", translation: "tshaʔtekníhatuht" },
    { en: "last Wednesday", translation: "tshiwahsʌ́hatuht" },
    { en: "last Thursday", translation: "tshikayelíhatuht" },
    { en: "last Friday", translation: "tshiwískhatut" },
    { en: "last Saturday", translation: "tshiwʌtákta̲ʔ" },
  ].map(mapUtil);
  const daysNext = [
    { en: "next Sunday", translation: "yʌswʌtatokʌ́htu" },
    { en: "next Monday", translation: "oyá· yʌswʌtʌ·táne̲ʔ" },
    { en: "next Tuesday", translation: "oyá· nyaʔtekníhatuht" },
    { en: "next Wednesday", translation: "oyá· nyaʔteswahsʌ́hatuht" },
    { en: "next Thursday", translation: "oyá· nyaʔtekayelíhatuht" },
    { en: "next Friday", translation: "oyá· yʌswískhatut" },
    { en: "next Saturday", translation: "oyá· yʌswʌtákta̲ʔ" },
  ].map(mapUtil);

  return { days, daysSpecific, daysLast, daysNext };
}

const fixAudioFileName = (filename: string) =>
  filename
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll("?", "")
    .replaceAll(" ", "_");

export const determineTimesOfDayAudioFileName = (
  phrase: string | string[],
  translations: string | string[],
  index: number,
) => {
  const name = fixAudioFileName(arrayify(phrase)[0]);
  const hasMultiple = Array.isArray(translations);
  const suffix = hasMultiple ? `_${index + 1}` : "";
  return `${name}${suffix}`;
};

export function createMonthsData() {
  const months = [
    {
      en: "January",
      translation: "Teyakohúhtyaʔks",
      literal: "Their ears are freezing",
      key: "jan",
    },
    {
      en: "February",
      translation: "Tshaʔtekohsélha̲ʔ",
      literal: "Half of winter",
      key: "feb",
    },
    {
      en: "March",
      translation: "Tewʌhníslyaʔks",
      literal: "The day is cut in two",
      key: "mar",
    },
    {
      en: "April",
      translation: "Wahsakayu·té·se̲ʔ",
      literal: "It's thundering",
      key: "apr",
    },
    { en: "May", translation: "Latiyʌ́thos", literal: "They plant", key: "may" },
    { en: "June", translation: "Awʌhihte̲ʔ", literal: "Strawberry", key: "jun" },
    {
      en: "July",
      translation: "Ohyótsheli̲ʔ",
      literal: "Green string bean",
      key: "jul",
    },
    { en: "August", translation: "Onʌ́stase̲ʔ", literal: "New corn", key: "aug" },
    {
      en: "September",
      translation: "Yeyʌthókwas",
      literal: "Someone harvests",
      key: "sep",
    },
    {
      en: "October",
      translation: "Yutékhwayʌhe̲ʔ",
      literal: "Someone stores food",
      key: "oct",
    },
    {
      en: "November",
      translation: "Tehutʌnuhela·túhe̲ʔ",
      literal: "They give thanks",
      key: "nov",
    },
    {
      en: "December",
      translation: "Wahsu·tés",
      literal: "It's a long night",
      key: "dec",
    },
  ].map((m) => ({
    ...m,
    audioFile: `module04/months/${m.en.toLowerCase()}.mp3`,
  }));

  //TODO: past/future months

  return { months };
}

export function createCountingTimeData() {
  return [
    ["1 minute", "swasliyetaʔk"],
    ["2 minutes", "tewasliyetaʔk"],
    ["3 minutes", "áhsʌ niwasliyetaʔk"],
    ["1 hour", "úska kahwistaʔeks"],
    ["2 hours", "tekahwístaʔeks"],
    ["3 hours", "áhsʌ nikahwístaʔeks"],
    ["1 day", "swʌhníslat"],
    ["2 days", "tewʌhnislaké̲"],
    ["3 days", "áhsʌ niwʌhnislaké̲"],
    ["1 night", "swahsu·tát"],
    ["2 nights", "tewahsu·táke̲"],
    ["3 nights", "áhsʌ niwahsu·táke̲"],
    ["1 week", "swʌ·tát"],
    ["2 weeks", "tewʌ·táke̲"],
    ["3 weeks", "áhsʌ niwʌ·táke̲"],
    ["1 month", "swʌhní·tat"],
    ["2 months", "tewʌhní·take̲"],
    ["3 months", "áhsʌ niwʌhní·take̲"],
    ["1 year", "tsyóhslat"],
    ["2 years", "teyóhslake̲ʔ"],
    ["3 years", "áhsʌ niyóhslaké̲"],
  ].map(([en, translation]) => ({
    en: arrayify(en),
    translation,
    audioFile: `module04/counting_time/${en.replaceAll(" ", "_")}.mp3`,
  }));
}

export function createTimesOfDayData() {
  const mapUtil = (
    obj: {
      en: string | string[];
      translation: string | string[];
    },
    index: number,
  ) => ({
    ...obj,
    en: arrayify(obj.en),
    audioFile: `/audio/module04/time_phrases/${determineTimesOfDayAudioFileName(obj.en, obj.translation, index)}.mp3`,
    translation: arrayify(obj.translation)[0],
  });

  const dayPhrases = [
    { en: "day", translation: "awʌhnísla̲ʔ" },
    { en: "all day", translation: "kwʌʔtáti̲ʔ" },
    { en: "during the day", translation: "tsiʔniwʌhnísles" },
    { en: "this day", translation: "Tó· niwʌhnisla·ké͟" },
    { en: "daytime", translation: "kwaʔté·ke̲" },
    { en: "every day", translation: "yaʔtewʌhnislaké͟" },
  ].map(mapUtil);

  const eveningPhrases = [
    {
      en: ["evening", "early evening", "late afternoon"],
      translation: ["yoʔkaláshʌ̲", "yoʔkaláshu̲"],
    },
    {
      en: "when it was evening",
      translation: "tshiyoʔkaláshu̲",
    },
    {
      en: ["this evening", "tonight", "later this evening"],
      translation: "ʌyó·kalahwe̲ʔ",
    },
  ].map(mapUtil);

  const monthPhrases = [
    { en: "month", translation: "awʌhní·taʔ" },
    { en: "during the month", translation: "tsiʔ niwʌhní·tes" },
    { en: "last month", translation: "swʌhniʔtatkʌ́" },
    { en: "next month", translation: "yʌswʌ́hniʔtat" },
    { en: "how many months?", translation: "Tó· niwʌhní·take̲ʔ" },
  ].map(mapUtil);

  const morningPhrases = [
    { en: "(earlier) this morning", translation: "sʌhaʔ astéhtsi̲ʔ" },
    { en: ["early morning", "in the morning"], translation: "astéhtsi̲" },
    { en: "the other morning", translation: "oyá· tshitwastéhtsi̲ʔ" },
    { en: ["morning", "morning time"], translation: "astehtsiwé·ke̲" },
  ].map(mapUtil);

  const nightPhrases = [
    { en: "night", translation: "né· wahsuta·té̲·" },
    { en: "night-time", translation: "kwaʔshuté·ke̲" },
    { en: "all night", translation: "kwaʔshutátiʔ" },
    { en: "during the night", translation: "tsiʔ niwahsu·tés" },
    { en: "every night", translation: "yaʔtewahsu·táke̲" },
    { en: "midnight", translation: "ashú·tha̲" },
    { en: "(when it got dark) last night", translation: "kwaʔshu·té̲·" },
    { en: ["this night", "tonight"], translation: "kaʔi·kʌ́· wahsuta·té̲·" },
    { en: "the other night", translation: "oyá· tshitkwaʔshu·té̲·" },
    { en: "how many nights?", translation: "Tó· niwahsu·táke̲ʔ" },
    { en: "when it gets dark", translation: "tshityó·kalas" },
  ].map(mapUtil);

  const timePhrases = [
    { en: "a long time", translation: "wahu·níse̲ʔ" },
    { en: "a short time", translation: "kʌʔ nikalí·wes" },
    { en: "all the time", translation: "yaʔteka·kú·te̲" },
    {
      en: "how long of a time?",
      translation: ["Tó· niwahu·niʔsé̲", "Tó· náhe"],
    },
  ].map(mapUtil);

  const tomorrowPhrases = [
    { en: "tomorrow", translation: "ʌyólhʌne̲ʔ" },
    { en: "tomorrow night", translation: "ʌyólhʌneʔ ʌyó·kalawe̲ʔ" },
    { en: "tomorrow evening", translation: "ʌyólhʌneʔ yoʔkala·sne̲ʔ" },
    { en: "the day after tomorrow", translation: "oyá· yʌtsyólhʌne̲ʔ" },
  ].map(mapUtil);

  const weekendPhrases = [
    { en: "weekend", translation: "yawʌtokta·u" },
    { en: "this (coming) weekend", translation: "ʌwʌtokta" },
    { en: "this past weekend", translation: "yautokta·u" },
  ].map(mapUtil);

  const weekPhrases = [
    { en: "all week", translation: "yaʔtewʌ·tá·ke̲" },
    { en: "during the week", translation: "tsiʔ niwʌ·tés" },
    { en: "every week", translation: "yaʔtewʌ·táke" },
    { en: "last week", translation: "swʌtatkʌ́" },
    { en: "next week", translation: "yʌswʌ·tát" },
    { en: "how many weeks?", translation: "Tó· niwʌ·táke̲" },
  ].map(mapUtil);

  const yearPhrases = [
    { en: "all year", translation: "ohslakwekú̲" },
    {
      en: ["during the year", "through the year"],
      translation: "tsiʔ niyóhsles",
    },
    { en: "every year", translation: "nyaʔteyohsla·ké͟" },
    { en: "last year", translation: "tsyohslatkʌ́" },
    { en: "next year", translation: "yʌtsyohslá·te̲ʔ" },
    { en: "the other year", translation: "oyá· tshikohslá·ke̲" },
    { en: "a particular year", translation: "kaʔi·kʌ́· yohsla·té̲·" },
    { en: "how many years?", translation: "Tó· niyohslaké̲" },
    { en: "one year after another", translation: "yohslaténi" },
  ].map(mapUtil);

  const yesterdayPhrases = [
    { en: "yesterday", translation: "the·tʌ̲̲́·" },
    { en: "the day before yesterday", translation: "oyá tshithe·tʌ̲̲́" },
  ].map(mapUtil);

  const afternoonPhrases = [
    { en: "afternoon", translation: "yotukóhtu ʌt́i" },
    { en: "noon", translation: ["ʌ́ti", "ʌ́tyʌ ni·kále̲ʔ"] },
  ].map(mapUtil);

  const otherPhrases = [
    { en: "always", translation: "tyóhtkut" },
    { en: "eclipse", translation: "utʌhniʔtáhtuʔ" },
    { en: "more often", translation: "sʌ́haʔ yotká·teʔ" },
    { en: "never", translation: "yáh newʌtú" },
    { en: ["now", "today"], translation: ["nuʔú·wa̲ʔ", "nʌʔú·wa̲ʔ"] },
    { en: "often", translation: "yotká·teʔ" },
    { en: "sometimes", translation: "swatye·lʌ̲̲́" },
  ].map(mapUtil);

  const result = {
    dayPhrases,
    eveningPhrases,
    monthPhrases,
    morningPhrases,
    nightPhrases,
    timePhrases,
    tomorrowPhrases,
    weekendPhrases,
    weekPhrases,
    yearPhrases,
    yesterdayPhrases,
    afternoonPhrases,
    otherPhrases,
  };
  return result;
}

export function getAllModule04Paradigms(): ParadigmData[] {
  const keys = [
    "data-is-here",
    "data-was-here",
    "data-will-be-here",
    "data-might-be-here",
    "data-is-not-here",
    "data-was-not-here",
    "data-will-not-be-here",
    "data-is-there",
    "data-will-be-there",
    "data-was-there",
    "data-might-be-there",
    "data-is-not-there",
    "data-was-not-there",
    "data-will-not-be-there",
    "data-is-at-home",
    "data-was-at-home",
    "data-will-be-at-home",
    "data-might-be-at-home",
    "data-is-not-at-home",
    "data-was-not-at-home",
    "data-will-not-be-at-home",
    "data-lives-there",
    "data-used-to-live-there",
    "data-will-live-there",
    "data-might-live-there",
    "data-doesnt-live-there",
    "data-didnt-used-to-live-there",
    "data-will-not-live-there",
    "data-want",
    "data-doesnt-want",
    "data-used-to-want",
    "data-didnt-used-to-want",
    "data-thought",
  ];
  return createModule4Data()
    .filter((datum) => keys.includes(datum.key))
    .map((datum) => datum.data);
}
