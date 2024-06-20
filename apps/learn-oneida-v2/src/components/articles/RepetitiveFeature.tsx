import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "../SectionHeading";
import { List } from "@ukwehuwehneke/ohutsya";
import { Letter } from "../Letter";
import { TableWrapper } from "@/components/TableWrapper";
import { BreakdownArray, BreakdownType, TextBreakdown } from "../TextBreakdown";
import { Flex } from "@ukwehuwehneke/ohutsya";

export function RepetitiveFeatureArticle({ level = 1 }: { level?: 1 | 2 }) {
  const data = [
    {
      en: ["It is single", "It is single again"],
      one: [
        [{ text: "w" }, "atatwʌni·yó̲·"],
        [{ text: "s", type: "REP" }, { text: "w" }, "atatwʌni·yó̲·"],
      ],
      type: "PR",
    },
    {
      en: ["I am married", "I am married again"],
      one: [
        [{ text: "wake" }, "nyákuʔ"],
        [{ text: "s", type: "REP" }, { text: "wake" }, "nyá·kuʔ"],
      ],
      type: "PB",
    },
    {
      en: ["He is single", "He is single again"],
      one: [
        [{ text: "l" }, "atatwʌni·yó̲·"],
        [{ text: "s", type: "REP" }, { text: "h" }, "atatwʌni·yó̲·"],
      ],
      type: "PR",
    },
    {
      en: ["He is married (to someone)", "He is married (to someone) again"],
      one: [
        [{ text: "lo" }, "nyákuʔ"],
        [{ text: "s", type: "REP" }, { text: "ho" }, "nyákuʔ"],
      ],
      type: "PB",
    },
    {
      en: ["He doesn't know me", "He doesn't know me anymore"],
      one: [
        ["yáh te", { text: "hak" }, "yʌtelíˍ"],
        ["yáh te", { text: "s", type: "REP" }, { text: "hak" }, "yʌtelíˍ"],
      ],
      type: "PP",
    },
    {
      en: ["I like it", "I like it again"],
      one: [
        [{ text: "k" }, "nú·wehse̲"],
        [{ text: "s", type: "REP" }, { text: "k" }, "nú·wehse̲"],
      ],
      type: "PR",
    },
    {
      en: ["I do not like you", "I do not like you anymore"],
      one: [
        ["yáh teʔ", { text: "ku" }, "nú·wehse̲"],
        ["yáh te", { text: "s", type: "REP" }, { text: "ku" }, "nú·wehse̲"],
      ],
      type: "PP",
    },
    {
      en: ["You like it", "You like it again"],
      one: [
        [{ text: "s" }, "nú·wehse̲"],
        [
          { text: "se", type: "REP" },
          { text: "h", type: "RPL" },
          { text: "s" },
          "nú·wehse̲",
        ],
      ],
      type: "PR",
    },
    {
      en: ["He loves her/them", "He loves her/them again"],
      one: [
        [{ text: "shako" }, "nolúkhwa̲ʔ̲"],
        [{ text: "se", type: "REP" }, { text: "shako" }, "nolúkhwa̲ʔ̲"],
      ],
      type: "PP",
    },
    {
      en: ["I do not like her/them", "I do not like her/them anymore"],
      one: [
        ["yáh teʔ", { text: "khe" }, "nú·wehse̲"],
        ["yáh te", { text: "se", type: "REP" }, { text: "khe" }, "nú·wehse̲"],
      ],
      type: "PP",
    },
    {
      en: ["Someone and I are engaged", "Someone and I are engaged again"],
      one: [
        [{ text: "yukni" }, "nyákheʔ"],
        [{ text: "ts", type: "REP" }, { text: "yukni" }, "nyákheʔ"],
      ],
      type: "PB",
    },
    {
      en: [
        "I am not in a relationship (with someone)",
        "I am not in a relationship (with someone) anymore",
      ],
      one: [
        ["yáh te", { text: "yákn" }, "ehse̲"],
        ["yáh te", { text: "ts", type: "REP" }, { text: "yákn" }, "ehse̲"],
      ],
      type: "PR",
    },
    {
      en: ["He loves her/them", "He loves her/them again"],
      one: [
        [{ text: "yesa" }, "nolúkhwa̲ʔ̲"],
        [{ text: "ts", type: "REP" }, { text: "yesa" }, "nolúkhwa̲ʔ̲"],
      ],
      type: "PP",
    },
    {
      en: ["You two are not married", "You two are not married anymore"],
      one: [
        ["yáh te", { text: "sni" }, "nyákuʔ"],
        ["yáh te", { text: "tsi", type: "REP" }, { text: "sni" }, "nyákuʔ"],
      ],
      type: "PR",
    },
    {
      en: ["Are you two single?", "Are you two single again?"],
      one: [
        [{ text: "tsy" }, "atatwʌni·yó· kʌ́"],
        [{ text: "tsi", type: "REP" }, { text: "tsy" }, "atatwʌni·yó· kʌ́"],
      ],
      type: "PR",
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
        columns={[
          TableWrapper.englishColumn,
          {
            accessorKey: "one",
            // @ts-expect-error To be fixed in LO-12
            cell: (value: BreakdownArray[], row: { type: BreakdownType }) =>
              value.map((v, i) => (
                <TextBreakdown
                  as="div"
                  breakdown={v}
                  key={i}
                  typeFallback={row.type}
                />
              )),
            header: "Translation",
          },
        ]}
        data={data}
      />
    </Flex>
  );
}
