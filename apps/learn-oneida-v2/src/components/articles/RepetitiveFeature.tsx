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
      breakdown: [["w", "PS"], "atatwʌni·yó̲·"],
    },
    {
      en: "It is single again",
      breakdown: [["s", "REP"], ["w", "PS"], "atatwʌni·yó̲·"],
    },
    {
      en: "I am married",
      breakdown: [["wake", "PO"], "nyákuʔ"],
    },
    {
      en: "I am married again",
      breakdown: [["s", "REP"], ["wake", "PO"], "nyá·kuʔ"],
    },
    {
      en: "He is single",
      breakdown: [["l", "PS"], "atatwʌni·yó̲·"],
    },
    {
      en: "He is single again",
      breakdown: [["s", "REP"], ["h", "PS"], "atatwʌni·yó̲·"],
    },
    {
      en: "He is married (to someone)",
      breakdown: [["lo", "PO"], "nyákuʔ"],
    },
    {
      en: "He is married (to someone) again",
      breakdown: [["s", "REP"], ["ho", "PO"], "nyákuʔ"],
    },
    {
      en: "He doesn't know me",
      breakdown: ["yáh te", ["hak", "PI"], "yʌtelí̲"],
    },
    {
      en: "He doesn't know me anymore",
      breakdown: ["yáh te", ["s", "REP"], ["hak", "PI"], "yʌtelí̲"],
    },
    {
      en: "I like it",
      breakdown: [["k", "PS"], "nú·wehse̲"],
    },
    {
      en: "I like it again",
      breakdown: [["s", "REP"], ["k", "PS"], "nú·wehse̲"],
    },
    {
      en: "I do not like you",
      breakdown: ["yáh teʔ", ["ku", "PI"], "nú·wehse̲"],
    },
    {
      en: "I do not like you anymore",
      breakdown: ["yáh te", ["s", "REP"], ["ku", "PI"], "nú·wehse̲"],
    },
    {
      en: "You like it",
      breakdown: [["s", "PS"], "nú·wehse̲"],
    },
    {
      en: "You like it again",
      breakdown: [["se", "REP"], ["hs", "PS"], "nú·wehse̲"],
    },
    {
      en: "He loves her/them",
      breakdown: [["shako", "PI"], "nolúkhwa̲ʔ"],
    },
    {
      en: "He loves her/them again",
      breakdown: [["se", "REP"], ["shako", "PI"], "nolúkhwa̲ʔ"],
    },
    {
      en: "I do not like her/them",
      breakdown: ["yáh teʔ", ["khe", "PI"], "nú·wehse̲"],
    },
    {
      en: "I do not like her/them anymore",
      breakdown: ["yáh te", ["se", "REP"], ["khe", "PI"], "nú·wehse̲"],
    },
    {
      en: "Someone and I are engaged",
      breakdown: [["yukni", "PO"], "nyákheʔ"],
    },
    {
      en: "Someone and I are engaged again",
      breakdown: [["ts", "REP"], ["yukni", "PO"], "nyákheʔ"],
    },
    {
      en: "I am not in a relationship (with someone)",
      breakdown: ["yáh te", ["yákn", "PS"], "ehse̲"],
    },
    {
      en: "I am not in a relationship (with someone) anymore",
      breakdown: ["yáh te", ["ts", "REP"], ["yákn", "PS"], "ehse̲"],
    },
    {
      en: "He loves her/them",
      breakdown: [["yesa", "PI"], "nolúkhwa̲ʔ"],
    },
    {
      en: "He loves her/them again",
      breakdown: [["ts", "REP"], ["yesa", "PI"], "nolúkhwa̲ʔ"],
    },
    {
      en: "You two are not married",
      breakdown: ["yáh te", ["sni", "PO"], "nyákuʔ"],
    },
    {
      en: "You two are not married anymore",
      breakdown: ["yáh te", ["tsi", "REP"], ["sni", "PO"], "nyákuʔ"],
    },
    {
      en: "Are you two single?",
      breakdown: [["tsy", "PS"], "atatwʌni·yó· kʌ́"],
    },
    {
      en: "Are you two single again?",
      breakdown: [["tsi", "REP"], ["tsy", "PS"], "atatwʌni·yó· kʌ́"],
    },
  ];

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="repetitive-s" level={level}>
        The Repetitive Feature
      </SectionHeading>
      <Text>
        In Oneida, a pre-pronominal prefix is used to indicate something
        &quot;being the case again&quot; and also &quot;not being the case
        anymore&quot;. This is called the <b>repetitive feature</b>. Below are a
        number of examples. The prefix that is added is dependent on the letter
        that it comes before. The rules are:
      </Text>
      <List>
        <List.Item>
          h, k, l, w: the prefix is <Letter>s</Letter>
        </List.Item>
        <List.Item>
          s: the prefix is <Letter>se</Letter>
        </List.Item>
        <List.Item>
          t: the prefix is <Letter>tsi</Letter>
        </List.Item>
        <List.Item>
          y: the prefix is <Letter>ts</Letter>
        </List.Item>
        <List.Item>
          some consonant clusters: the prefix is <Letter>se</Letter> or{" "}
          <Letter>tsi</Letter>
        </List.Item>
      </List>

      <TableWrapper
        columns={TableWrapper.columnsEnglishBreakdown}
        data={data}
      />
    </Flex>
  );
}
