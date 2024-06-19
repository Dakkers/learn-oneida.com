import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading, SectionHeadingProps } from "../SectionHeading";
import { Text } from "@/design/components/text";
import { ArticleProps } from "./utils";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import { pronounsBlue } from "~/utils";

const dataAtSomeonesOwnHouse = createParadigmData(
  {
    translation: "At {{pronounPossessive}} own house",
    type: "PB",
    phrases: [
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "wak" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], { text: "s" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "h" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "yako" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "y" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "yukni" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], { text: "sni" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "yukwa" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], { text: "swa" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "hoti" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "yot" }, "yoʔtʌ́staʔ"] },
    ],
  },
  pronounsBlue,
);

const dataAtSomeonesOwnWork = createParadigmData(
  {
    translation: "At {{pronounPossessive}} own work",
    type: "PB",
    phrases: [
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "wak" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], { text: "s" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "h" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "yako" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "y" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "yukni" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], { text: "sni" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "yukwa" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], { text: "swa" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "hoti" }, "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], { text: "yot" }, "yoʔtʌ́staʔ"] },
    ],
  },
  pronounsBlue,
);

const examplesList = [
  ["A telephone", ["teyethalákhwaʔ", "yutwʌnataʔástaʔ"]],
  [
    "What's your phone number?",
    "Náhteʔ niwashe·tás né· isé· sawʌ́ teyethalákhwa̲ʔ",
  ],
  ["My phone number is 445-1234.", "445-1234 niwashe·tás tsiʔ teyethalákhwa̲ʔ"],
  [
    "What's the phone number where you work?",
    "Tó· niwashe·tás né· teyethalákhwaʔ tsiʔ nú· tisayoʔtʌ́staʔ",
  ],
  [
    "My phone number at work is 765-1234.",
    "765-1234 niwashe·tás tsiʔ twakyo·té·ˍ",
  ],
  [
    "What's the phone number where you live?",
    "Tó· niwashe·tás né· teyethalákhwaʔ isé· sawʌ́ tsiʔ tisatʌtíˍ",
  ],
  [
    "The phone number where I live is 445-1234.",
    "445-1234 teyethalákhwaʔ niwashe·tás tsiʔ twakatʌtíˍ",
  ],
  [
    "What's the phone number at your house?",
    "Tó· niwashe·tás teyethalákhwaʔ tsiʔ tisanúhsote̲ʔ",
  ],
  [
    "The phone number at my house is 445-1234.",
    "445-1234 niwashe·tás tsiʔ twaknúhsote̲ʔ",
  ],
  ["What's your address (at your house)?", "Tó· niwashe·tás tsiʔ tisanúhsote̲ʔ"],
  [
    "I live at 1234 Oneida Road.",
    "1234 niwashe·tás Onʌyoteʔa·ká· yoha·té· tsiʔ tkí·tlu̲ʔ",
  ],
].map(([en, on]) => ({ en, on }));

export function PhoneNumbersArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="phone-numbers" level={level}>
        Phone Numbers
      </SectionHeading>
      <Text>
        The word for phone number is <b>niwashe·tás</b>. Below you will find the
        paradigms for &quot;at someone&lsquo;s (own) house&quot; and &quot;at
        someone&lsquo;s (own) place of work&quot;, and some examples for how to
        use the word for phone number with the paradigms.
      </Text>

      <SectionHeading
        id="at-someones-house"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        At Someone&lsquo;s House
      </SectionHeading>
      <ParadigmTable data={dataAtSomeonesOwnHouse} />

      <SectionHeading
        id="at-someones-work"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        At Someone&lsquo;s Work
      </SectionHeading>
      <ParadigmTable data={dataAtSomeonesOwnWork} />

      <SectionHeading
        id="phone-number-examples"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Examples
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={examplesList}
      />
    </Flex>
  );
}
