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
import { ParadigmData } from "~/components/ParadigmTable";

export const MODULE_4_TENSE_LIST = ["prs", "past", "fut", "ifut"] as const;
export type Module4VerbTense = (typeof MODULE_4_TENSE_LIST)[number];

interface Module4Datum {
  data: ParadigmData;
  en: string;
  key: string;
  negated?: true;
  tense: Module4VerbTense;
}

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
