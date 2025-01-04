"use client";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import type { ArticleProps } from "./utils";
import { createCountingTimeData } from "@/data/module04";

export function CountingTimeArticle({ level = 1 }: ArticleProps) {
  return (
    <>
      <SectionHeading id="counting-time" level={level}>
        Counting Lengths of Time
      </SectionHeading>

      <TableWrapper
        // @ts-expect-error TODO - TableWrapper/Table generics
        columns={TableWrapper.columnsEnglishAudio}
        data={createCountingTimeData()}
      />
    </>
  );
}

// Legacy function I'm keeping for now because I'm lazy
export function createCountingTimeDataLegacy() {
  const firstTable = [
    {
      num: 1,
      minutes: "swasliyetaʔk",
      hours: "uska kahwistaʔeks",
      days: "swʌhníslat",
      nights: "swahsu·tát",
    },
    {
      num: 2,
      minutes: "tewasliyetaʔk",
      hours: "tekahwistaʔeks",
      days: "tewʌhnislaké̲",
      nights: "tewahsu·táke̲",
    },
    {
      num: 3,
      minutes: "áhsʌ niwasliyetaʔk",
      hours: "áhsʌ nikahwistaʔeks",
      days: "áhsʌ niwʌhnislaké̲",
      nights: "áhsʌ niwahsu·táke̲",
    },
  ];
  const secondTable = [
    {
      num: 1,
      weeks: "swʌ·tát",
      months: "swʌhní·tat",
      years: "tsyóhslat",
    },
    {
      num: 2,
      weeks: "tewʌ·táke̲",
      months: "tewʌhní·take̲",
      years: "teyóhslake̲ʔ",
    },
    {
      num: 3,
      weeks: "áhsʌ niwʌ·táke̲",
      months: "áhsʌ niwʌhní·take̲",
      years: "áhsʌ niyóhslaké̲",
    },
  ];
  return [firstTable, secondTable] as const;
}
