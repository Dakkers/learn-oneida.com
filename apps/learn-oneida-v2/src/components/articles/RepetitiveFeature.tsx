"use client";
import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { List } from "@ukwehuwehneke/ohutsya";
import { Letter } from "../Letter";
import { TableWrapper } from "@/components/TableWrapper";
import { Flex } from "@ukwehuwehneke/ohutsya";

export function RepetitiveFeatureArticle({ level = 1 }: { level?: 1 | 2 }) {
  const data = [
    {
      en: "It is single",
      breakdown: [["w", "PR"], "atatwʌni·yó̲·"],
    },
    {
      en: "It is single again",
      breakdown: [["s", "REP"], ["w", "PR"], "atatwʌni·yó̲·"],
    },
    {
      en: "I am married",
      breakdown: [["wake", "PB"], "nyákuʔ"],
    },
    {
      en: "I am married again",
      breakdown: [["s", "REP"], ["wake", "PB"], "nyá·kuʔ"],
    },
    {
      en: "He is single",
      breakdown: [["l", "PR"], "atatwʌni·yó̲·"],
    },
    {
      en: "He is single again",
      breakdown: [["s", "REP"], ["h", "PR"], "atatwʌni·yó̲·"],
    },
    {
      en: "He is married (to someone)",
      breakdown: [["lo", "PB"], "nyákuʔ"],
    },
    {
      en: "He is married (to someone) again",
      breakdown: [["s", "REP"], ["ho", "PB"], "nyákuʔ"],
    },
    {
      en: "He doesn't know me",
      breakdown: ["yáh te", ["hak", "PP"], "yʌtelí̲"],
    },
    {
      en: "He doesn't know me anymore",
      breakdown: ["yáh te", ["s", "REP"], ["hak", "PP"], "yʌtelí̲"],
    },
    {
      en: "I like it",
      breakdown: [["k", "PR"], "nú·wehse̲"],
    },
    {
      en: "I like it again",
      breakdown: [["s", "REP"], ["k", "PR"], "nú·wehse̲"],
    },
    {
      en: "I do not like you",
      breakdown: ["yáh teʔ", ["ku", "PP"], "nú·wehse̲"],
    },
    {
      en: "I do not like you anymore",
      breakdown: ["yáh te", ["s", "REP"], ["ku", "PP"], "nú·wehse̲"],
    },
    {
      en: "You like it",
      breakdown: [["s", "PR"], "nú·wehse̲"],
    },
    {
      en: "You like it again",
      breakdown: [["se", "REP"], ["hs", "PR"], "nú·wehse̲"],
    },
    {
      en: "He loves her/them",
      breakdown: [["shako", "PP"], "nolúkhwa̲ʔ"],
    },
    {
      en: "He loves her/them again",
      breakdown: [["se", "REP"], ["shako", "PP"], "nolúkhwa̲ʔ"],
    },
    {
      en: "I do not like her/them",
      breakdown: ["yáh teʔ", ["khe", "PP"], "nú·wehse̲"],
    },
    {
      en: "I do not like her/them anymore",
      breakdown: ["yáh te", ["se", "REP"], ["khe", "PP"], "nú·wehse̲"],
    },
    {
      en: "Someone and I are engaged",
      breakdown: [["yukni", "PB"], "nyákheʔ"],
    },
    {
      en: "Someone and I are engaged again",
      breakdown: [["ts", "REP"], ["yukni", "PB"], "nyákheʔ"],
    },
    {
      en: "I am not in a relationship (with someone)",
      breakdown: ["yáh te", ["yákn", "PR"], "ehse̲"],
    },
    {
      en: "I am not in a relationship (with someone) anymore",
      breakdown: ["yáh te", ["ts", "REP"], ["yákn", "PR"], "ehse̲"],
    },
    {
      en: "He loves her/them",
      breakdown: [["yesa", "PP"], "nolúkhwa̲ʔ"],
    },
    {
      en: "He loves her/them again",
      breakdown: [["ts", "REP"], ["yesa", "PP"], "nolúkhwa̲ʔ"],
    },
    {
      en: "You two are not married",
      breakdown: ["yáh te", ["sni", "PB"], "nyákuʔ"],
    },
    {
      en: "You two are not married anymore",
      breakdown: ["yáh te", ["tsi", "REP"], ["sni", "PB"], "nyákuʔ"],
    },
    {
      en: "Are you two single?",
      breakdown: [["tsy", "PR"], "atatwʌni·yó· kʌ́"],
    },
    {
      en: "Are you two single again?",
      breakdown: [["tsi", "REP"], ["tsy", "PR"], "atatwʌni·yó· kʌ́"],
    },
  ];

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="repetitive-s" level={level}>
        The Repetitive Conjugation
      </SectionHeading>
      <Text>
        In Oneida, a pre-pronominal prefix is used to indicate something
        &quot;being the case again&quot; and also &quot;not being the case
        anymore&quot;. Below are a number of examples. The prefix that is added
        is dependent on the letter that it comes before. The rules are:
      </Text>
      <List>
        <List.Item>
          w, h, l, k: the prefix is <Letter>s</Letter>
        </List.Item>
        <List.Item>
          y: the prefix is <Letter>ts</Letter>
        </List.Item>
        <List.Item>
          some consonant clusters: the prefix is <Letter>se</Letter> or{" "}
          <Letter>tsi</Letter>
        </List.Item>
        <List.Item>
          t: the prefix is <Letter>tsi</Letter>
        </List.Item>
      </List>

      <TableWrapper
        columns={TableWrapper.columnsEnglishBreakdown}
        data={data}
      />
    </Flex>
  );
}
