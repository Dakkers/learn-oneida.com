"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { Text } from "@ukwehuwehneke/ohutsya";
import type { ArticleProps } from "./utils";
import { ParadigmTable, createParadigmData } from "../ParadigmTable";
import { pronounsBlue } from "@ukwehuwehneke/language-components";

const dataAtSomeonesOwnHouse = createParadigmData(
  {
    translation: "At {{pronounPossessive}} own house",
    type: "PB",
    phrases: [
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["wak"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], ["s"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["h"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["yako"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["y"], "oʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["yukni"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], ["sni"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["yukwa"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], ["swa"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["hoti"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["yoti"], "yoʔtʌ́staʔ"] },
    ],
  },
  pronounsBlue,
);

const dataAtSomeonesOwnWork = createParadigmData(
  {
    translation: "At {{pronounPossessive}} own work",
    type: "PB",
    phrases: [
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["wak"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], ["s"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["h"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["yako"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["yo"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["yukni"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], ["sni"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["yukwa"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["ti", "CIS"], ["swa"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["hoti"], "yoʔtʌ́staʔ"] },
      { breakdown: ["tsiʔ ", ["t", "CIS"], ["yoti"], "yoʔtʌ́staʔ"] },
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
    "Tó· niwashe·tás né· teyethalákhwaʔ isé· sawʌ́ tsiʔ tisatʌtí̲",
  ],
  [
    "The phone number where I live is 445-1234.",
    "445-1234 teyethalákhwaʔ niwashe·tás tsiʔ twakatʌtí̲",
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
    "1234 niwashe·tás Oneida yoha·té· tsiʔ tkí·tlu̲ʔ",
  ],
].map(([en, translation]) => ({ en, translation }));

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
      <ParadigmTable
        columnVisibility={{ pronounEnglish: false }}
        data={dataAtSomeonesOwnHouse}
      />

      <SectionHeading
        id="at-someones-work"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        At Someone&lsquo;s Work
      </SectionHeading>
      <ParadigmTable
        columnVisibility={{ pronounEnglish: false }}
        data={dataAtSomeonesOwnWork}
      />

      <SectionHeading
        id="phone-number-examples"
        level={(level + 1) as SectionHeadingProps["level"]}
      >
        Examples
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={examplesList}
      />
    </Flex>
  );
}
