import type { BreakdownArray } from "@ukwehuwehneke/language-components";
import indefinite from "indefinite";
import pluralize from "pluralize";

export interface Module7Noun {
  key: string;
  en: string[];
  dict: number[];
  root: string[];
  single: BreakdownArray;
  plural: BreakdownArray | null;
  have: BreakdownArray;
  havePlural: BreakdownArray | null;
  good: BreakdownArray;
  goodPlural: BreakdownArray | null;
  haveGood: BreakdownArray;
  haveGoodPlural: BreakdownArray | null;
  big: BreakdownArray;
  bigPlural: BreakdownArray | null;
  count1: BreakdownArray;
  count2: BreakdownArray;
  count3: BreakdownArray;
}

export interface Module7ContainerNoun {
  en: string[];
  key: string;
  one: Array<{
    en?: string;
    one: BreakdownArray;
  }>;
}

export type Module7Colour = Module7ContainerNoun;

export function createModule7NounsList(): Module7Noun[] {
  const nounAnimal: Module7Noun = {
    key: "Animal",
    en: ["animal"],
    dict: [890],
    root: ["-naskw-", "-nʌskw-"],
    single: [["ka", "PS"], "náskwaʔ"],
    plural: [["ka", "PS"], "náskwaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], ["náskw", "NOUN"], ["a", "JOIN"], "yʌ̲ʔ"],
    havePlural: [
      ["wak", "PO"],
      ["náskw", "NOUN"],
      ["a", "JOIN"],
      ["ká·te̲ʔ", "CIS"],
    ],
    good: [["ka", "PS"], ["náskw", "NOUN"], "iyó̲"],
    goodPlural: [["ka", "PS"], ["náskw", "NOUN"], "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], ["náskw", "NOUN"], "í·yo̲"],
    haveGoodPlural: [["wak", "PO"], ["náskw", "NOUN"], "i·yó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], ["násk", "NOUN"], "owa·nʌ̲́"],
    bigPlural: [["wak", "PO"], ["násk", "NOUN"], "owa·nʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "náskw", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "náskw", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "náskw", "ake̲"],
  };
  const nounBaby: Module7Noun = {
    key: "Baby",
    en: ["baby"],
    dict: [897],
    root: ["-wil-"],
    single: ["owi·lá·"],
    plural: ["owi·lá·", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "wí·la", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "wi·la", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "wil", "iyó̲"],
    goodPlural: [["ka", "PS"], "wil", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "wil", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "wil", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "wil", "owa·nʌ̲́"],
    bigPlural: [["wak", "PO"], "wil", "owa·nʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "wi·l", "á", "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "wi·l", ["áke̲", "PAST"]],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "wi·l", ["áke̲", "PAST"]],
  };
  const nounBag: Module7Noun = {
    key: "Bag",
    en: ["bag"],
    dict: [899],
    root: ["-yal-"],
    single: [["ka·", "PS"], "yáleʔ"],
    plural: [["ka·", "PS"], "yál", ["iʔshúha", "PAST"]],
    have: [["wak", "PO"], "yála·", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "yála", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "yal", "iyó̲"],
    goodPlural: [["ka", "PS"], "yal", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "yal", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "yal", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "yal", "owa·nʌ̲́"],
    bigPlural: [["wak", "PO"], "yal", "owa·nʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "ya·l", "á", "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "ya·l", ["áke̲", "PAST"]],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "ya·l", ["áke̲", "PAST"]],
  };
  const nounBall: Module7Noun = {
    key: "Ball",
    en: ["ball"],
    dict: [899],
    root: ["-ahta’nawʌ’tsl-"],
    single: ["ahtá·nawʌ̲ʔ"],
    plural: ["ahtá·nawʌʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "ahtaʔnawʌ́·tsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "ahtaʔnawʌ́·tsla", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "ahtanawʌʔtsl", "iyó̲"],
    goodPlural: [["w", "PS"], "ahtanawʌʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "ahtanawʌʔtsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "ahtanawʌʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "ahtanawʌʔtsl", "owa·nʌ̲́"],
    bigPlural: [["wak", "PO"], "ahtanawʌʔtsl", "owa·nʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "ahtanawʌ́·tsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "ahtanawʌ́·tsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "ahtanawʌ́·tsl", "ake̲"],
  };
  const nounBasket: Module7Noun = {
    key: "Basket",
    en: ["basket"],
    dict: [901],
    root: ["-a’ahsl-"],
    single: ["aʔáhsliʔ"],
    plural: ["aʔáhsliʔ", ["okúha̲", "PAST"]],
    have: [["wak", "PO"], "aʔahslá", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "aʔahslá", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "aʔahsl", "iyó̲"],
    goodPlural: [["w", "PS"], "aʔahsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "aʔahsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "aʔahsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "aʔahsl", "owa·nʌ̲́"],
    bigPlural: [["wak", "PO"], "aʔahsl", "owa·nʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "aʔáhsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "aʔáhsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "aʔáhsl", "ake̲"],
  };
  const nounBed: Module7Noun = {
    key: "Bed",
    en: ["bed", "place", "room"],
    dict: [904],
    root: ["-nakt-"],
    single: [["ka·", "PS"], "nákteʔ"],
    plural: [["ka·", "PS"], "náktaʔ", ["shúha", "PAST"]],
    have: [["wak", "PO"], ["nákt", "NOUN"], "a·", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], ["nákt", "NOUN"], "a", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "nakt", ["i·yó̲", "PAST"]],
    goodPlural: [["ka", "PS"], "nakt", "i·yó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], ["nakt", "NOUN"], "iyó̲"],
    haveGoodPlural: [["wak", "PO"], ["nakt", "NOUN"], "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], ["nakt", "NOUN"], "owa·nʌ̲́"],
    bigPlural: [["wak", "PO"], ["nakt", "NOUN"], "owa·nʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "nakt", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "nakt", ["áke̲", "PAST"]],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "nakt", ["áke̲", "PAST"]],
  };
  const nounBelt: Module7Noun = {
    key: "Belt",
    en: ["belt"],
    dict: [289, 906],
    root: ["-atu’kwanha’tsl-"],
    single: ["atuʔkwánhaʔ"],
    plural: ["atuʔkwánhaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "atuʔkwanhá·tsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "atuʔkwanha·tsla", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "atuʔkwanhaʔtsl", "iyó̲"],
    goodPlural: [["w", "PS"], "atuʔkwanhaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "atuʔkwanhaʔtsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "atuʔkwanhaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "atuʔkwanhaʔtsl", "owa·nʌ̲́"],
    bigPlural: [["wak", "PO"], "atuʔkwanhaʔtsl", "owa·nʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "atuʔkwanhá·tsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "atuʔkwanhá·tsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "atuʔkwanhá·tsl", "ake̲"],
  };
  const nounBlanket: Module7Noun = {
    key: "Blanket",
    en: ["blanket"],
    dict: [289, 906],
    root: ["-kʌh-"],
    single: ["okʌ́haʔ"],
    plural: ["okʌ́haʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "kʌ́ha", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "kʌ́ha", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "kʌh", "iyó̲"],
    goodPlural: [["ka", "PS"], "kʌh", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "kʌh", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "kʌh", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "kʌh", "owa·nʌ̲́"],
    bigPlural: [["wak", "PO"], "kʌh", "owa·nʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "kʌ́h", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "kʌh", ["áke̲", "PAST"]],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "kʌh", ["áke̲", "PAST"]],
  };
  const nounBook: Module7Noun = {
    key: "Book",
    en: ["book"],
    dict: [419, 1117],
    root: ["-hyatuhsl-"],
    single: [["ka", "PS"], "hyatúhsliʔ"],
    plural: [["ka", "PS"], "hyatúhsliʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "hyatúhsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "hyatúhsla", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "hyatuhsl", "iyó̲"],
    goodPlural: [["ka", "PS"], "hyatuhsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "hyatuhsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "hyatuhsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "hyatuhsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "hyatuhsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "hyatúhsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "hyatúhsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "hyatúhsl", "ake̲"],
  };
  const nounBottle: Module7Noun = {
    key: "Bottle",
    en: ["bottle", "jar"],
    dict: [719, 913],
    root: ["-tshe’t-"],
    single: [["ká", "PS"], "tsheʔ"],
    plural: [["ká", "PS"], "tsheʔ", ["okúha̲", "PAST"]],
    have: [["wake", "PO"], "tshé·ta", "yʌ̲ʔ"],
    havePlural: [["wake", "PO"], "tshé·ta", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "tsheʔt", "iyó̲"],
    goodPlural: [["ka", "PS"], "tsheʔt", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wake", "PO"], "tsheʔt", "iyó̲"],
    haveGoodPlural: [["wake", "PO"], "tsheʔt", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wake", "PO"], "tsheʔt", "owanʌ̲́"],
    bigPlural: [["wake", "PO"], "tsheʔt", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "tshé·t", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "tshé·t", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "tshé·t", "ake̲"],
  };
  const nounBox: Module7Noun = {
    key: "Box",
    en: ["box", "crate"],
    dict: [914],
    root: ["-nuto’tsl-"],
    single: [["ka", "PS"], "nutó·tsliʔ"],
    plural: [["ka", "PS"], "nutó·tsliʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "nutótsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "nutótsla", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "nutoʔtsl", "iyó̲"],
    goodPlural: [["ka", "PS"], "nutoʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "nutoʔtsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "nutoʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "nutoʔtsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "nutoʔtsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "nutó·tsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "nutó·tsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "nutó·tsl", "ake̲"],
  };
  const nounBusiness: Module7Noun = {
    key: "Business",
    en: ["business", "matter", "news", "issue"],
    dict: [925],
    root: ["-lihw-"],
    single: ["olí·waʔ"],
    plural: ["olí·waʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], ["lí·wa", "NOUN"], "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], ["lihw", "NOUN"], "ayʌ", ["tú", "CIS"]],
    // havePlural: [["wak", "PO"], ["li·w", 'NOUN'], 'a', ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], ["lihw", "NOUN"], "iyó̲"],
    goodPlural: [["ka", "PS"], ["lihw", "NOUN"], "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], ["lihw", "NOUN"], "iyó̲"],
    haveGoodPlural: [["wak", "PO"], ["lihw", "NOUN"], "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], ["lih", "NOUN"], "owanʌ̲́"],
    bigPlural: [["wak", "PO"], ["lih", "NOUN"], "owanʌ́", ["se̲ʔ", "EXAS"]],
    // count1: [["s", "REP"], ["ka", "PS"], ["lí·w", 'NOUN'], ["a", 'JOIN'], 't'],
    // count2: [["te", "DUAL"], ["ka", "PS"], ["lí·w", 'NOUN'], "ake̲"],
    // count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], ["lí·w", 'NOUN'], "ake̲"],
    count1: [
      ["ts", "PREP"],
      ["yo", "PO"],
      ["lí·w", "NOUN"],
      ["a", "JOIN"],
      "t",
    ],
    count2: [["te", "DUAL"], ["yo", "PO"], ["lí·w", "NOUN"], "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["yo", "PO"], ["lí·w", "NOUN"], "ake̲"],
  };
  const nounButton: Module7Noun = {
    key: "Button",
    en: ["button", "beets", "knot", "fist"],
    dict: [926],
    root: ["-tsihkw-"],
    single: ["otsíhkwaʔ"],
    plural: ["otsíhkwaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "tsíhkw", "a", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "tsíhkw", "a", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "tsihkw", "iyó̲"],
    goodPlural: [["ka", "PS"], "tsihkw", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "tsihkw", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "tsihkw", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "tsihk", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "tsihk", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "tsíhkw", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "tsíhkw", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "tsíhkw", "ake̲"],
  };
  const nounCar: Module7Noun = {
    key: "Car",
    en: ["car", "truck", "jeep"],
    dict: [871, 1250],
    root: ["-’sleht-"],
    single: [["ká·", "PS"], "sleht"],
    plural: [["ká·", "PS"], "sleht", ["okúha̲", "CL"]],
    have: [["wake", "PO"], "ʔsléhta", "yʌ̲ʔ"],
    havePlural: [["wake", "PO"], "ʔslehta", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "ʔsleht", "iyó̲"],
    goodPlural: [["ka", "PS"], "ʔsleht", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wake", "PO"], "ʔsleht", "iyó̲"],
    haveGoodPlural: [["wake", "PO"], "ʔsleht", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wake", "PO"], "ʔsleht", "owanʌ̲́"],
    bigPlural: [["wake", "PO"], "ʔsleht", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "ʔsléht", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "ʔsléht", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "ʔsléht", "ake̲"],
  };
  const nounChair: Module7Noun = {
    key: "Chair",
    en: ["chair"],
    dict: [931],
    root: ["-anitskwahla’tsl"],
    single: ["anitskwahlákhwaʔ"],
    plural: ["anitskwahlákhwaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "anitskwahlá·tsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "anitskwahla·tsla", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "anitskwahlaʔtsl", "iyó̲"],
    goodPlural: [["w", "PS"], "anitskwahlaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "anitskwahla·tsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "anitskwahla·tsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "anitskwahlaʔtsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "anitskwahlaʔtsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "anitskwahlá·tsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "anitskwahlá·tsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "anitskwahlá·tsl", "ake̲"],
  };
  const nounChild: Module7Noun = {
    key: "Child",
    en: ["child (human)"],
    dict: [489, 934],
    root: ["-ksa’t-", "-ksa’-"],
    single: ["oksá·ta"],
    plural: ["oksá·ta", ["shúha̲", "CL"]],
    have: [["wake", "PO"], "ksá·ta", "yʌ̲ʔ"],
    havePlural: [["wake", "PO"], "ksa·ta", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "ksaʔt", "iyó̲"],
    goodPlural: [["ka", "PS"], "ksaʔt", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wake", "PO"], "ksaʔt", "iyó̲"],
    haveGoodPlural: [["wake", "PO"], "ksaʔt", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wake", "PO"], "ksaʔt", "owanʌ̲́"],
    bigPlural: [["wake", "PO"], "ksaʔt", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "ksát", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "ksát", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "ksát", "ake̲"],
  };
  const nounClothes: Module7Noun = {
    key: "Clothes",
    en: ["clothes"],
    dict: [267, 939],
    root: ["-atslunyahkw-", "-atslunyakhw-"],
    single: ["atslunyáhkwaʔ"],
    plural: ["atslunyáhkwaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "atslunyáhkwa", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "atslunyáhkwa", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "atslunyahkw", "iyó̲"],
    goodPlural: [["w", "PS"], "atslunyahkw", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "atslunyahkw", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "atslunyahkw", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "atslunyahk", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "atslunyahk", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "atslunyáhkw", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "atslunyáhkw", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "atslunyáhkw", "ake̲"],
  };
  const nounDish: Module7Noun = {
    key: "Dish",
    en: ["dish", "bowl", "plate"],
    dict: [965],
    root: ["-ks-"],
    single: [["ká", "PS"], "ksa"],
    plural: [["ka", "PS"], "ksa", ["shúha̲", "CL"]],
    have: [["wake", "PO"], "ksa", "yʌ̲́"],
    havePlural: [["wake", "PO"], "ksa", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "ks", "iyó̲"],
    goodPlural: [["ka", "PS"], "ks", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wake", "PO"], "ks", "iyó̲"],
    haveGoodPlural: [["wake", "PO"], "ks", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wake", "PO"], "ks", "owanʌ̲́"],
    bigPlural: [["wake", "PO"], "ks", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ká", "PS"], "ks", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ká", "PS"], "ks", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ká", "PS"], "ks", "ake̲"],
  };
  const nounFamily: Module7Noun = {
    key: "Family",
    en: ["family"],
    dict: [988],
    root: ["-hwatsil-"],
    single: [["ka", "PS"], "hwa·tsíle̲ʔ"],
    plural: [["ka", "PS"], "hwa·tsíleʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "hwatsi·lá", "yʌ̲ʔ"],
    havePlural: null,
    good: [["ka", "PS"], "hwatsil", "iyó̲"],
    goodPlural: [["ka", "PS"], "hwatsil", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "hwatsil", "iyó̲"],
    haveGoodPlural: null,
    big: [["wak", "PO"], "hwatsil", "owanʌ̲́"],
    bigPlural: null,
    count1: [["s", "REP"], ["ka", "PS"], "hwatsi·l", ["át", "PAST"]],
    count2: [["te", "DUAL"], ["ka", "PS"], "hwatsi·l", ["áke̲", "PAST"]],
    count3: [
      "áhsʌ ",
      ["ni", "PREP"],
      ["ka", "PS"],
      "hwatsi·l",
      ["áke̲", "PAST"],
    ],
  };
  const nounFlower: Module7Noun = {
    key: "Flower",
    en: ["flower", "blossom"],
    dict: [738],
    root: ["-tsi’tsy-"],
    single: ["otsí·tsi"],
    plural: ["otsí·tsyaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "tsí·tsya", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "tsí·tsya", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "tsiʔts", "iyó̲"],
    goodPlural: [["ka", "PS"], "tsiʔts", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "tsiʔts", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "tsiʔts", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "tsiʔtsy", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "tsiʔtsy", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "tsí·tsy", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "tsí·tsy", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "tsí·tsy", "ake̲"],
  };
  const nounFork: Module7Noun = {
    key: "Fork",
    en: ["fork"],
    dict: [119, 1006],
    root: ["-ahsekwa’l-"],
    single: ["áshekwe̲’"],
    plural: ["áshekwe̲’", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "ahsé·kwal", "a", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "ahsekwala’tsl", "a", ["káte̲ʔ", "CIS"]],
    good: [["w", "PS"], "ahsekwa’tsl", "iyó̲"],
    goodPlural: [["w", "PS"], "ahsekwa’tsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "ahsekwa’tsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "ahsekwa’tsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "ahsekwa’tsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "ahsekwa’tsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "ahsekwá·tsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "ahsekwá·tsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "ahsekwá·tsl", "ake̲"],
  };
  const nounGlass: Module7Noun = {
    key: "Glass",
    en: ["glass"],
    dict: [772, 1051],
    root: ["-wis-"],
    single: ["o·wíse̲ʔ"],
    plural: ["o·wíseʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "wi·s", "á", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "wi·s", "a", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "wis", "iyó̲"],
    goodPlural: [["ka", "PS"], "wis", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "wis", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "wis", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "wis", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "wis", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "wi·s", ["át", "PAST"]],
    count2: [["te", "DUAL"], ["ka", "PS"], "wi·s", ["áke̲", "PAST"]],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "wi·s", ["áke̲", "PAST"]],
  };
  const nounGroup: Module7Noun = {
    key: "Group",
    en: ["group"],
    dict: [439, 1027],
    root: ["-ityohkw-"],
    single: [["kʌ", "PS"], "tyóhkwaʔ"],
    plural: [["kʌ", "PS"], "tyóhkwaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "ityóhkwa", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "ityóhkwa", ["ká·te̲ʔ", "CIS"]],
    good: [["kʌ", "PS"], "tyóhkw", "iyó̲"],
    goodPlural: [["kʌ", "PS"], "tyóhkw", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "ityohkw", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "ityohkw", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "ityohk", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "ityohk", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["kʌ", "PS"], "tyóhkw", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["kʌ", "PS"], "tyóhkw", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["kʌ", "PS"], "tyóhkw", "ake̲"],
  };
  const nounGun: Module7Noun = {
    key: "Gun",
    en: ["gun"],
    dict: [410],
    root: ["-hul-"],
    single: [["ká", "PS"], "huleʔ"],
    plural: [["ká", "PS"], "huleʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "hu·lá", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "hu·la", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "hul", "iyó̲"],
    goodPlural: [["ka", "PS"], "hul", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "hul", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "hul", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "hul", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "hul", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "hu·l", ["át", "PAST"]],
    count2: [["te", "DUAL"], ["ka", "PS"], "hu·l", ["áke̲", "PAST"]],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "hu·l", ["áke̲", "PAST"]],
  };
  const nounHat: Module7Noun = {
    key: "Hat",
    en: ["hat"],
    dict: [102],
    root: ["-ana’alo’tsl-"],
    single: ["aná·loleʔ"],
    plural: ["aná·loleʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "anaʔaló·tsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "anaʔaló·tsla", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "anaʔalóʔtsl", "iyó̲"],
    goodPlural: [["w", "PS"], "anaʔalóʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "anaʔaloʔtsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "anaʔaloʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "anaʔaloʔtsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "anaʔaloʔtsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "anaʔaló·tsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "anaʔaló·tsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "anaʔaló·tsl", "ake̲"],
  };
  const nounHouse: Module7Noun = {
    key: "House",
    en: ["house"],
    dict: [602],
    root: ["-nuhs-"],
    single: [["ka", "PS"], "núhsaʔ"],
    plural: [["ka", "PS"], "núhsaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "núhs", "a", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "núhs", "a", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "nuhs", "iyó̲"],
    goodPlural: [["ka", "PS"], "nuhs", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "nuhs", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "nuhs", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "nuhs", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "nuhs", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "núhs", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "núhs", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "núhs", "ake̲"],
  };
  const nounJob: Module7Noun = {
    key: "Job",
    en: ["job", "work"],
    dict: [838],
    root: ["-yo’tʌhsl-"],
    single: [["ka", "PS"], "yoʔtʌ́hsliʔ"],
    plural: [["ka", "PS"], "yoʔtʌhsla", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "yoʔtʌ́·sla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "yoʔtʌ́hsl", "a", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "yoʔtʌhsl", "iyó̲"],
    goodPlural: [["ka", "PS"], "yoʔtʌhsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "yoʔtʌhsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "yoʔtʌhsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "yoʔtʌhsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "yoʔtʌhsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "yoʔtʌ́hsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "yoʔtʌ́hsl", ["ake̲", "PAST"]],
    count3: [
      "áhsʌ ",
      ["ni", "PREP"],
      ["ka", "PS"],
      "yoʔtʌ́hsl",
      ["ake̲", "PAST"],
    ],
  };
  const nounKnife: Module7Noun = {
    key: "Knife",
    en: ["knife"],
    dict: [323],
    root: ["-a’shal-"],
    single: ["á·shaleʔ"],
    plural: ["á·shaleʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "aʔsha·lá", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "aʔsha·la", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "aʔshal", "iyó̲"],
    goodPlural: [["w", "PS"], "aʔshal", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "aʔshal", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "aʔshal", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "aʔshal", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "aʔshal", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "aʔsha·l", ["át", "PAST"]],
    count2: [["te", "DUAL"], ["w", "PS"], "aʔsha·l", ["áke̲", "PAST"]],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "aʔsha·l", ["áke̲", "PAST"]],
  };
  const nounMedicine: Module7Noun = {
    key: "Medicine",
    en: ["medicine"],
    dict: [600, 1094],
    root: ["-nuhkwa’t-", "-nuhkwa’tsl"],
    single: ["onúhkwaʔt"],
    plural: ["onúhkwaʔt", ["hokúha̲", "PAST"]],
    have: [["wak", "PO"], "nuhkwá·tsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "nuhkwa·tsla", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "nuhkwaʔtsl", "iyó̲"],
    goodPlural: [["ka", "PS"], "nuhkwaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "nuhkwaʔtsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "nuhkwaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "nuhkwaʔtsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "nuhkwaʔtsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "nuhkwá·tsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "nuhkwá·tsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "nuhkwá·tsl", "ake̲"],
  };
  const nounMetal: Module7Noun = {
    key: "Metal",
    en: ["metal", "iron", "steel", "bell"],
    dict: [536, 1056],
    root: ["-list-"],
    single: [["ka", "PS"], "líhstatsiʔ"],
    plural: [["ka", "PS"], "líhstatsiʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "líhsta", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "líhsta", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "lihst", "iyó̲"],
    goodPlural: [["ka", "PS"], "lihst", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "lihst", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "lihst", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "lihst", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "lihst", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "líhst", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "líhst", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "líhst", "ake̲"],
  };
  const nounMind: Module7Noun = {
    key: "Mind",
    en: ["mind"],
    dict: [855],
    root: ["-’nikuhl-"],
    single: ["oʔnikú·la̲ʔ"],
    plural: ["oʔnikú·laʔ", ["shúha̲", "CL"]],
    have: [["wake", "PO"], "ʔnikú·l", ["a", "JOIN"], "t"],
    havePlural: null,
    good: [["ka", "PS"], "ʔnikuhl", "iyó̲"],
    goodPlural: null,
    haveGood: [["wake", "PO"], "ʔnikuhl", "iyó̲"],
    haveGoodPlural: null,
    big: [["wake", "PO"], "ʔnikuhl", "owanʌ̲́"],
    bigPlural: null,
    count1: [["s", "REP"], ["ka", "PS"], "ʔnikú·l", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "ʔnikú·l", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "ʔnikú·l", "ake̲"],
  };
  const nounMitts: Module7Noun = {
    key: "Mitts",
    en: ["mitts"],
    dict: [320],
    root: ["-a’nyanawʌ-", "-a’nyanawʌ’tsl-"],
    single: ["aʔnya·náwʌ̲ʔ"],
    plural: ["aʔnya·náwʌʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "aʔnyanawʌ́·tsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "aʔnyanawʌ·tsla", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "aʔnyanawʌʔtsl", "iyó̲"],
    goodPlural: [["w", "PS"], "aʔnyanawʌʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "aʔnyanawʌʔtsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "aʔnyanawʌʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "aʔnyanawʌʔtsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "aʔnyanawʌʔtsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "aʔnyanawʌ́ʔtsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "aʔnyanawʌʔtsl", ["aké", "PAST"]],
    count3: [
      "áhsʌ ",
      ["ni", "PREP"],
      ["w", "PS"],
      "aʔnyanawʌʔtsl",
      ["aké", "PAST"],
    ],
  };
  const nounMoney: Module7Noun = {
    key: "Money",
    en: ["money", "currency", "dollars"],
    dict: [416],
    root: ["-hwist-"],
    single: ["ohwístaʔ"],
    plural: null,
    have: [["wak", "PO"], "hwísta", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "hwísta", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "hwist", "iyó̲"],
    goodPlural: [["ka", "PS"], "hwist", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "hwist", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "hwist", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "hwist", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "hwist", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "hwíst", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "hwíst", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "hwíst", "ake̲"],
  };
  const nounName: Module7Noun = {
    key: "Name",
    en: ["name"],
    dict: [402, 1104],
    root: ["-hsʌn-"],
    single: [["ka", "PS"], "hsʌ́·na"],
    plural: [["ka", "PS"], "hsʌ́·na", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "hsʌ·ná", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "hsʌ·na", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "hsʌn", "iyó̲"],
    goodPlural: [["ka", "PS"], "hsʌn", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "hsʌn", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "hsʌn", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "hsʌn", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "hsʌn", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "hsʌ́·n", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "hsʌ́·n", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "hsʌ́·n", "ake̲"],
  };
  const nounPants: Module7Noun = {
    key: "Pants",
    en: ["pants"],
    dict: [318, 1117],
    root: ["-a’nhuskwa’lh’tsl-"],
    single: ["aʔnhuskwá·lhaʔ"],
    plural: ["aʔnhuskwá·lhaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "aʔnhuskwá·lha", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "aʔnhuskwaʔlha", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "aʔnhuskwaʔlhaʔtsl", "iyó̲"],
    goodPlural: [["w", "PS"], "aʔnhuskwaʔlhaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "aʔnhuskwaʔlh", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "aʔnhuskwaʔlh", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "aʔnhuskwaʔlh", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "aʔnhuskwaʔlh", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "aʔnhuskwá·lh", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "aʔnhuskwá·lh", "ake"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "aʔnhuskwá·lh", "ake"],
  };
  const nounPen: Module7Noun = {
    key: "Pen",
    en: ["pen", "pencil", "marker"],
    dict: [419, 1120],
    root: ["-hyatukhwa’tsl-"],
    single: [["ye", "PS"], "hyatúkhwaʔ"],
    plural: [["ye", "PS"], "hyatúkhwaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "hyatukhwá·tsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "hyatukhwa·tsla", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "hyatukhwaʔtsl", "iyó̲"],
    goodPlural: [["ka", "PS"], "hyatukhwaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "hyatukhwaʔtsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "hyatukhwaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "hyatukhwaʔtsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "hyatukhwaʔtsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "hyatukhwá·tsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "hyatukhwá·tsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "hyatukhwá·tsl", "ake̲"],
  };
  const nounPot: Module7Noun = {
    key: "Pot",
    en: ["pot", "pail", "bucket", "kettle"],
    dict: [568],
    root: ["-na’tsy-"],
    single: [["ka", "PS"], "ná·tsiʔ"],
    plural: [["ka", "PS"], "ná·tsyaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "ná·tsya", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "na·tsya", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "naʔts", "iyó̲"],
    goodPlural: [["ka", "PS"], "naʔts", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "naʔts", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "naʔts", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "naʔtsy", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "naʔtsy", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "ná·tsy", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "ná·tsy", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "ná·tsy", "ake̲"],
  };
  const nounPurse: Module7Noun = {
    key: "Purse",
    en: ["purse"],
    dict: [385],
    root: ["-hna’tal-", "-hna’tatsl-"],
    single: [["ka", "PS"], "hná·tal"],
    plural: [["ka", "PS"], "hná·tal", ["okúha̲", "PAST"]],
    have: [["wak", "PO"], "hnaʔtátsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "hnaʔtátsla", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "hnaʔtatsl", "iyó̲"],
    goodPlural: [["ka", "PS"], "hnaʔtatsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "hnaʔtatsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "hnaʔtatsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "hnaʔtatsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "hnaʔtatsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "hnaʔtátsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "hnaʔtátsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "hnaʔtátsl", "ake̲"],
  };
  const nounRing: Module7Noun = {
    key: "Ring",
    en: ["ring"],
    dict: [104, 1153],
    root: ["-anishnuhsohlokta’tsl-"],
    single: ["anisnuhsohlóktaʔ"],
    plural: ["anisnuhsohlóktaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "anisnuhsohloktá·tsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "anisnuhsohlokta·tsla", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "anisnuhsohloktaʔtsl", "iyó̲"],
    goodPlural: [["w", "PS"], "anisnuhsohloktaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "anisnuhsohloktaʔtsl", "iyó̲"],
    haveGoodPlural: [
      ["wak", "PO"],
      "anisnuhsohloktaʔtsl",
      "iyó",
      ["se̲ʔ", "EXAS"],
    ],
    big: [["wak", "PO"], "anisnuhsohloktaʔtsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "anisnuhsohloktaʔtsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [
      ["s", "REP"],
      ["w", "PS"],
      "anisnuhsohloktá·tsl",
      ["a", "JOIN"],
      "t",
    ],
    count2: [["te", "DUAL"], ["w", "PS"], "anisnuhsohloktá·tsl", "ake̲"],
    count3: ["áhsʌ", ["ni", "PREP"], ["w", "PS"], "anisnuhsohloktá·tsl", "ake̲"],
  };
  const nounSheetOfPaper: Module7Noun = {
    key: "SheetOfPaper",
    en: ["sheet of paper"],
    dict: [515],
    root: ["-la’wist-"],
    single: ["olá·wisteʔ"],
    plural: ["olá·wisteʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "laʔwista·", "yʌ̲́ʔ"],
    havePlural: [["wak", "PO"], "laʔwista", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "laʔwist", "iyó̲"],
    goodPlural: [["ka", "PS"], "laʔwist", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "laʔwist", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "laʔwist", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "laʔwist", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "laʔwist", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "laʔwíst", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "laʔwíst", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "laʔwíst", "ake̲"],
  };
  const nounShirt: Module7Noun = {
    key: "Shirt",
    en: ["shirt", "coat", "dress", "jacket", "blouse"],
    dict: [301, 973],
    root: ["-atya’tawi’t-", "-atya’tawi’tsl-"],
    single: ["atyá·tawiʔt"],
    plural: ["atyá·tawiʔt", ["hokúha̲", "PAST"]],
    have: [["wak", "PO"], "atyaʔtawiʔtslá", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "atyaʔtawiʔtsla", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "atyaʔtawiʔtsl", "iyó̲"],
    goodPlural: [["w", "PS"], "atyaʔtawiʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "atyaʔtawiʔtsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "atyaʔtawiʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "atyaʔtawiʔtsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "atyaʔtawiʔtsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "atyaʔtawí·tsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "atyaʔtawí·tsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "atyaʔtawí·tsl", "ake̲"],
  };
  const nounShoe: Module7Noun = {
    key: "Shoe",
    en: ["shoe"],
    dict: [76, 1174],
    root: ["-aht-", "-ahtahkw-"],
    single: ["áhtaʔ"],
    plural: ["áhtaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "atahkwá·", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "atahkwá", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "atahkw", "iyó̲"],
    goodPlural: [["w", "PS"], "atahkw", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "atahkw", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "atahkw", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "atahk", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "atahk", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "atáhkw", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "atáhkw", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "atáhkw", "ake̲"],
  };
  const nounSkirt: Module7Noun = {
    key: "Skirt",
    en: ["skirt"],
    dict: [317, 1183],
    root: ["-a’kohs-"],
    single: ["oʔkóhsaʔ"],
    plural: ["oʔkóhsaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "aʔkóhsa", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "aʔkóhsa", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "aʔkohs", "iyó̲"],
    goodPlural: [["w", "PS"], "aʔkohs", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "aʔkohs", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "aʔkohs", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "aʔkohs", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "aʔkohs", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "aʔkóhs", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "aʔkóhs", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "aʔkóhs", "ake̲"],
  };
  const nounSong: Module7Noun = {
    key: "Song",
    en: ["song"],
    dict: [516, 1192],
    root: ["-lʌn-"],
    single: [["ka", "PS"], "lʌ·ná·"],
    plural: [["ka", "PS"], "lʌ·ná·", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "lʌná·", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "lʌná", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "lʌn", "iyó̲"],
    goodPlural: [["ka", "PS"], "lʌn", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "lʌn", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "lʌn", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "lʌn", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "lʌn", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "lʌ·n", ["át", "PAST"]],
    count2: [["te", "DUAL"], ["ka", "PS"], "lʌ·n", ["áke̲", "PAST"]],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "lʌ·n", ["áke̲", "PAST"]],
  };
  const nounSpoon: Module7Noun = {
    key: "Spoon",
    en: ["spoon"],
    dict: [255, 1196],
    root: ["-atokwa’t-", "-atokwa’tsl-"],
    single: ["atókwaʔt"],
    plural: ["atókwaʔt", ["hokúha̲", "PAST"]],
    have: [["wak", "PO"], "atokwá·tsla", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "atokwa·tsla", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "atokwaʔtsl", "iyó̲"],
    goodPlural: [["w", "PS"], "atokwaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "atokwaʔtsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "atokwaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "atokwaʔtsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "atokwaʔtsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "atokwá·tsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "atokwá·tsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "atokwá·tsl", "ake̲"],
  };
  const nounStone: Module7Noun = {
    key: "Stone",
    en: ["stone", "bullet", "marble", "pellet", "brick", "ball bearing"],
    dict: [583, 1207],
    root: ["-nʌy-"],
    single: ["onʌ·yá̲·"],
    plural: ["onʌ·yá·", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "nʌ·yá", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "nʌ·ya", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "nʌh", "iyó̲"],
    goodPlural: [["ka", "PS"], "nʌh", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "nʌh", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "nʌh", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "nʌy", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "nʌy", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "nʌ·y", ["á", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "nʌ·y", ["áke̲", "PAST"]],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "nʌ·y", ["áke̲", "PAST"]],
  };
  const nounStory: Module7Noun = {
    key: "Story",
    en: ["story"],
    dict: [454, 1208],
    root: ["-kal-"],
    single: ["oka·lá·"],
    plural: ["oka·lá·", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "kalá·", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "kala", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "kal", "iyó̲"],
    goodPlural: [["ka", "PS"], "kal", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "kal", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "kal", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "kal", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "kal", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "ká·l", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "ká·l", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "ká·l", "ake̲"],
  };
  const nounString: Module7Noun = {
    key: "String",
    en: ["string", "thread", "yarn"],
    dict: [73, 405, 1210],
    root: ["-ahsliye-", "-ahsliye’t-", "-hsliye’t"],
    single: ["ahsli·yé·"],
    plural: ["ahsli·yé·t", "a", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "ahsliyé·t", "a", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "ahsliye·t", "a", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "ahsliyeʔt", "iyó̲"],
    goodPlural: [["w", "PS"], "ahsliyeʔt", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "ahsliyeʔt", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "ahsliyeʔt", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "ahsliyeʔt", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "ahsliyeʔt", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "ahsliyé·t", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "ahsliyé·t", ["ake̲", "PAST"]],
    count3: [
      "áhsʌ ",
      ["ni", "PREP"],
      ["w", "PS"],
      "ahsliyé·t",
      ["ake̲", "PAST"],
    ],
  };
  const nounTable: Module7Noun = {
    key: "Table",
    en: ["table"],
    dict: [159, 1216],
    root: ["-atekhwahlakkhw-", "-atekhwahla’tsl-"],
    single: ["atekhwahlákhwaʔ"],
    plural: ["atekhwahlákhwaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "atekhwahlaʔtsla·", "yʌ̲́·"],
    havePlural: [["wak", "PO"], "atekhwahlaʔtsla", ["ká·te̲ʔ", "CIS"]],
    good: [["w", "PS"], "atekhwahlaʔtsl", "iyó̲"],
    goodPlural: [["w", "PS"], "atekhwahlaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "atekhwahlaʔtsl", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "atekhwahlaʔtsl", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "atekhwahlaʔtsl", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "atekhwahlaʔtsl", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["w", "PS"], "atekhwahlá·tsl", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["w", "PS"], "atekhwahlá·tsl", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["w", "PS"], "atekhwahlá·tsl", "ake̲"],
  };
  const nounTobacco: Module7Noun = {
    key: "Tobacco",
    en: ["tobacco"],
    dict: [845],
    root: ["-yu’kw-"],
    single: ["oyú·kwaʔ"],
    plural: ["oyú·kwaʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "yú·kwa", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "yu·kwa", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "yuʔkw", "iyó̲"],
    goodPlural: [["ka", "PS"], "yuʔkw", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "yuʔkw", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "yuʔkw", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "yuʔk", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "yuʔk", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "yú·kw", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "yú·kw", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "yú·kw", "ake̲"],
  };
  const nounTube: Module7Noun = {
    key: "Tube",
    en: ["tube", "pipe", "cylinder"],
    dict: [398, 955],
    root: ["-holo’t-"],
    single: ["oholó·taʔ"],
    plural: ["oholó·taʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "holó·ta", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "holó·ta", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "holoʔt", "iyó̲"],
    goodPlural: [["ka", "PS"], "holoʔt", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "holoʔt", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "holoʔt", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "holoʔt", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "holoʔt", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "holó·t", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "holó·t", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "holó·t", "ake̲"],
  };
  const nounWire: Module7Noun = {
    key: "Wire",
    en: ["wire", "nail", "needle", "pin"],
    dict: [617, 1103],
    root: ["-nuwal-", "-luwal-"],
    single: [["ka", "PS"], "lu·wáleʔ"],
    plural: [["ka", "PS"], "lu·wáleʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "luwalá", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "luwala", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "luwal", "iyó̲"],
    goodPlural: [["ka", "PS"], "luwal", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "luwal", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "luwal", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "luwal", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "luwal", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "lu·wál", ["a", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "lu·wál", "ake̲"],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "lu·wál", "ake̲"],
  };
  const nounWood: Module7Noun = {
    key: "Wood",
    en: ["wood (cord of)"],
    dict: [826, 1268],
    root: ["-yʌt-"],
    single: ["o·yʌ́teʔ"],
    plural: ["o·yʌ́teʔ", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "yʌ·tá", "yʌ̲ʔ"],
    havePlural: [["wak", "PO"], "yʌ·tá", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "yʌt", "iyó̲"],
    goodPlural: [["ka", "PS"], "yʌt", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "yʌt", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "yʌt", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "yʌt", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "yʌt", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "yʌ·t", ["át", "PAST"]],
    count2: [["te", "DUAL"], ["ka", "PS"], "yʌ·t", ["áke̲", "PAST"]],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "yʌ·t", ["áke̲", "PAST"]],
  };
  const nounWord: Module7Noun = {
    key: "Word",
    en: ["word"],
    dict: [769],
    root: ["-wʌn-"],
    single: ["owʌ·ná̲·"],
    plural: ["owʌ·ná·", ["shúha̲", "CL"]],
    have: [["wak", "PO"], "wʌ·na·", "yʌ̲́·"],
    havePlural: [["wak", "PO"], "wʌ·na", ["ká·te̲ʔ", "CIS"]],
    good: [["ka", "PS"], "wʌn", "iyó̲"],
    goodPlural: [["ka", "PS"], "wʌn", "iyó", ["se̲ʔ", "EXAS"]],
    haveGood: [["wak", "PO"], "wʌn", "iyó̲"],
    haveGoodPlural: [["wak", "PO"], "wʌn", "iyó", ["se̲ʔ", "EXAS"]],
    big: [["wak", "PO"], "wʌn", "owanʌ̲́"],
    bigPlural: [["wak", "PO"], "wʌn", "owanʌ́", ["se̲ʔ", "EXAS"]],
    count1: [["s", "REP"], ["ka", "PS"], "wʌ·n", ["á", "JOIN"], "t"],
    count2: [["te", "DUAL"], ["ka", "PS"], "wʌ·n", ["áke̲", "PAST"]],
    count3: ["áhsʌ ", ["ni", "PREP"], ["ka", "PS"], "wʌ·n", ["áke̲", "PAST"]],
  };

  return [
    nounAnimal,
    nounBaby,
    nounBag,
    nounBall,
    nounBasket,
    nounBed,
    nounBelt,
    nounBlanket,
    nounBook,
    nounBottle,
    nounBox,
    nounBusiness,
    nounButton,
    nounCar,
    nounChair,
    nounChild,
    nounClothes,
    nounDish,
    nounFamily,
    nounFlower,
    nounFork,
    nounGlass,
    nounGroup,
    nounGun,
    nounHat,
    nounHouse,
    nounJob,
    nounKnife,
    nounMedicine,
    nounMetal,
    nounMind,
    nounMitts,
    nounMoney,
    nounName,
    nounPants,
    nounPen,
    nounPot,
    nounPurse,
    nounRing,
    nounSheetOfPaper,
    nounShirt,
    nounShoe,
    nounSkirt,
    nounSong,
    nounSpoon,
    nounStone,
    nounStory,
    nounString,
    nounTable,
    nounTobacco,
    nounTube,
    nounWire,
    nounWood,
    nounWord,
  ];
}

export function createModule7ContainerList() {
  const objAmmoClip: Module7ContainerNoun = {
    key: "AmmoClip",
    en: ["ammo clip", "ammo magazine", "marble bag"],
    one: [
      {
        one: [["ye", "PS"], "nʌyalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objBabySling: Module7ContainerNoun = {
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
        one: [["ye", "PS"], "wilalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objBottleCase: Module7ContainerNoun = {
    key: "BottleCase",
    en: ["bottle case", "pop", "juice", "alcohol"],
    one: [
      {
        one: [["ye", "PS"], "tshe’talá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objBookRack: Module7ContainerNoun = {
    key: "BookRack",
    en: ["book rack", "magazines", "toilet paper", "napkins"],
    one: [
      {
        one: [["ye", "PS"], "hyatuhslalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objButtonJar: Module7ContainerNoun = {
    key: "ButtonJar",
    en: ["button jar"],
    one: [
      {
        one: [["ye", "PS"], "tsihkwalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objCigaretteCase: Module7ContainerNoun = {
    key: "CigaretteCase",
    en: ["cigarette case", "tobacco pouch"],
    one: [
      {
        one: [["ye", "PS"], "hlo’kwalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
      {
        one: [["ye", "PS"], "yu’kwalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objCupboard: Module7ContainerNoun = {
    key: "Cupboard",
    en: ["cupboard", "dish rack", "china cabinet"],
    one: [
      {
        one: [["ye", "PS"], "ksalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objEyeglassCase: Module7ContainerNoun = {
    key: "EyeglassCase",
    en: ["eyeglass case"],
    one: [
      {
        one: [
          ["yu", "PS"],
          "twisutakhwa’tslalá",
          ["khw", "INST2"],
          ["a̲’", "HAB"],
        ],
      },
    ],
  };
  const objFeatherCase: Module7ContainerNoun = {
    key: "FeatherCase",
    en: ["feather case"],
    one: [
      {
        one: [["ye", "PS"], "stoslalakhwa̲’"],
      },
    ],
  };
  const objGunRack: Module7ContainerNoun = {
    key: "GunRack",
    en: ["gun rack"],
    one: [
      {
        one: [["ye", "PS"], "hulalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objHatRack: Module7ContainerNoun = {
    key: "HatRack",
    en: ["hat rack", "hat box"],
    one: [
      {
        one: [["yu", "PS"], "nalotslalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objHopeChest: Module7ContainerNoun = {
    key: "HopeChest",
    en: ["hope chest", "blanket box"],
    one: [
      {
        one: [["ye", "PS"], "kʌhalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objIceCubeTray: Module7ContainerNoun = {
    key: "IceCubeTray",
    en: ["ice cube tray"],
    one: [
      {
        one: [["ye", "PS"], "wisalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
      {
        one: [["ye", "PS"], "wisunyátha"],
      },
    ],
  };
  const objJewelryBox: Module7ContainerNoun = {
    key: "JewelryBox",
    en: ["jewelry box"],
    one: [
      {
        one: [["ye", "PS"], "stalotalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objKnifeDrawer: Module7ContainerNoun = {
    key: "KnifeDrawer",
    en: ["knife drawer", "knife holder", "sheath"],
    one: [
      {
        one: [["yu", "PS"], "’shalalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objMoneyClip: Module7ContainerNoun = {
    key: "MoneyClip",
    en: ["money clip", "billfold", "wallet"],
    one: [
      {
        one: [["ye", "PS"], "hwistalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objPencilCase: Module7ContainerNoun = {
    key: "PencilCase",
    en: ["pencil case"],
    one: [
      {
        one: [
          ["ye", "PS"],
          "hyatukhwa’tslalá",
          ["khw", "INST2"],
          ["a̲’", "HAB"],
        ],
      },
    ],
  };
  const objPetCage: Module7ContainerNoun = {
    key: "PetCage",
    en: ["pet cage", "holder", "crate"],
    one: [
      {
        one: [["ye", "PS"], "nahskwalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objPillBottle: Module7ContainerNoun = {
    key: "PillBottle",
    en: ["pill bottle", "medicine chest"],
    one: [
      {
        one: [["ye", "PS"], "nuhkwa’tslalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objShoeRack: Module7ContainerNoun = {
    key: "ShoeRack",
    en: ["shoe rack"],
    one: [
      {
        one: [["yu", "PS"], "htahkwalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objSockDrawer: Module7ContainerNoun = {
    key: "SockDrawer",
    en: ["sock drawer"],
    one: [
      {
        one: [["yu", "PS"], "tlahti’tslalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objSugarBowl: Module7ContainerNoun = {
    key: "SugarBowl",
    en: ["sugar bowl", "candy dish"],
    one: [
      {
        one: [["ye", "PS"], "nu’takli’tslalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objVase: Module7ContainerNoun = {
    key: "Vase",
    en: ["vase"],
    one: [
      {
        one: [["ye", "PS"], "tsi’tsyalá", ["khw", "INST2"], ["a̲’", "HAB"]],
      },
    ],
  };
  const objWoodRack: Module7ContainerNoun = {
    key: "WoodRack",
    en: ["wood rack"],
    one: [
      {
        one: [["ye", "PS"], "yʌtalá", ["khw", "INST2"], ["a̲’", "HAB"]],
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
  const p = pluralize(datum.en[0]);
  const indef = indefinite(datum.en[0]);
  if (key === "single") {
    return `it is ${indef}`;
  } else if (key === "plural") {
    return `they are ${p}`;
  } else if (key === "have") {
    return `I have ${indef}`;
  } else if (key === "havePlural") {
    return `I have ${p}`;
  } else if (key === "good") {
    return `it is a good ${datum.en}`;
  } else if (key === "goodPlural") {
    return `they are good ${p}`;
  } else if (key === "haveGood") {
    return `I have a good ${datum.en}`;
  } else if (key === "haveGoodPlural") {
    return `I have good ${p}`;
  } else if (key === "big") {
    return `it is ${indef} big ${datum.en}`;
  } else if (key === "bigPlural") {
    return `they are big ${p}`;
  } else if (key === "count1") {
    return `one ${datum.en}`;
  } else if (key === "count2") {
    return `two ${p}`;
  } else if (key === "count3") {
    return `three ${p}`;
  }
  return "";
}

export function createColoursData(): Module7Colour[] {
  const objBlue: Module7Colour = {
    key: "Blue",
    en: ["blue"],
    one: [
      {
        one: ["olú·ya̲’"],
      },
    ],
  };
  const objGreen: Module7Colour = {
    key: "Green",
    en: ["green"],
    one: [
      {
        one: ["awʌ·lá̲·"],
      },
    ],
  };
  const objRed: Module7Colour = {
    key: "Red",
    en: ["red"],
    one: [
      {
        one: ["onikwʌhtala̲’"],
      },
    ],
  };
  const objYellow: Module7Colour = {
    key: "Yellow",
    en: ["yellow"],
    one: [
      {
        one: ["otsí·nkwala̲’"],
      },
    ],
  };
  const objLight: Module7Colour = {
    key: "Light",
    en: ["light", "white"],
    one: [
      {
        one: ["owískehla̲’"],
      },
      {
        one: ["owískla’"],
      },
    ],
  };
  const objDark: Module7Colour = {
    key: "Dark",
    en: ["dark", "black"],
    one: [
      {
        one: ["o’swʌ́·ta̲’"],
      },
    ],
  };
  const objPink: Module7Colour = {
    key: "Pink",
    en: ["pink"],
    one: [
      {
        one: [["ka", "PS"], "nikwʌhtalawískela̲’"],
      },
      {
        one: [["ka", "PS"], "nikwʌhtalawískla’"],
      },
    ],
  };
  const objOrange: Module7Colour = {
    key: "Orange",
    en: ["orange"],
    one: [
      {
        one: [["ka", "PS"], "tsi’nkwalahú·tsi’"],
      },
    ],
  };
  const objBrown: Module7Colour = {
    key: "Brown",
    en: ["brown"],
    one: [
      {
        one: ["athéhsa̲’"],
      },
    ],
  };
  const objGray: Module7Colour = {
    key: "Gray",
    en: ["gray"],
    one: [
      {
        one: ["ata’kʌ́·la̲’"],
      },
    ],
  };
  const objDarkRed: Module7Colour = {
    key: "DarkRed",
    en: ["dark red", "maroon"],
    one: [
      {
        one: [["ka", "PS"], "nikwʌhtalahú·tsi’"],
      },
      {
        one: ["tet", ["yo", "PO"], "nikwʌtalá·kalas"],
      },
    ],
  };
  const objDarkBlue: Module7Colour = {
    key: "DarkBlue",
    en: ["dark blue", "navy"],
    one: [
      {
        one: [["ka", "PS"], "luhyahú·tsi"],
      },
    ],
  };
  const objLightBlue: Module7Colour = {
    key: "LightBlue",
    en: ["light blue"],
    one: [
      {
        one: ["kaluhyawískela̲’"],
      },
      {
        one: [["ka", "PS"], "luhyawískla’"],
      },
    ],
  };
  const objPurple: Module7Colour = {
    key: "Purple",
    en: ["purple"],
    one: [
      {
        one: ["ohalanʌ́·ta̲’"],
      },
    ],
  };
  const objJetBlack: Module7Colour = {
    key: "JetBlack",
    en: ["jet black", "very dark"],
    one: [
      {
        one: ["o’swʌ’tóhsku̲"],
      },
    ],
  };
  const objPureWhite: Module7Colour = {
    key: "PureWhite",
    en: ["pure white"],
    one: [
      {
        one: ["owisklóhsku̲"],
      },
    ],
  };
  const objSilver: Module7Colour = {
    key: "Silver",
    en: ["silver"],
    one: [
      {
        one: [["ka", "PS"], "hwistano·lú̲·"],
      },
    ],
  };
  const objGold: Module7Colour = {
    key: "Gold",
    en: ["gold", "copper"],
    one: [
      {
        one: ["ohwistano·lú̲·"],
      },
    ],
  };
  const objBright: Module7Colour = {
    key: "Bright",
    en: ["bright colour"],
    one: [
      {
        one: [["yo", "PO"], "hsóshwatet"],
      },
    ],
  };
  const objDarkColour: Module7Colour = {
    key: "DarkColour",
    en: ["dark colour"],
    one: [
      {
        one: ["tet", ["yo", "PO"], "hsohkwá·kalas"],
      },
    ],
  };

  return [
    objBlue,
    objGreen,
    objRed,
    objYellow,
    objLight,
    objDark,
    objPink,
    objOrange,
    objBrown,
    objGray,
    objDarkRed,
    objDarkBlue,
    objLightBlue,
    objPurple,
    objJetBlack,
    objPureWhite,
    objSilver,
    objGold,
    objBright,
    objDarkColour,
  ];
}
