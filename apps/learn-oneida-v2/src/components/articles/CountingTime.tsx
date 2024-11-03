"use client";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";

export function CountingTimeArticle({ level = 1 }: ArticleProps) {
  return (
    <>
      <SectionHeading id="counting-time" level={level}>
        Counting Lengths of Time
      </SectionHeading>

      <TableWrapper
        columns={TableWrapper.columnsEnglishAudio}
        data={createCountingTimeData()}
      />
    </>
  );
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
    ["2 days", "tewʌhnislakéˍ"],
    ["3 days", "áhsʌ niwʌhnislakéˍ"],
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
    ["3 years", "áhsʌ niyóhslakéˍ"],
  ].map(([en, translation]) => ({
    en,
    translation,
    audioFile: `module04/counting_time/${en.replaceAll(" ", "_")}.mp3`,
  }));
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
      days: "tewʌhnislakéˍ",
      nights: "tewahsu·táke̲",
    },
    {
      num: 3,
      minutes: "áhsʌ niwasliyetaʔk",
      hours: "áhsʌ nikahwistaʔeks",
      days: "áhsʌ niwʌhnislakéˍ",
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
      years: "áhsʌ niyóhslakéˍ",
    },
  ];
  return [firstTable, secondTable] as const;
}
