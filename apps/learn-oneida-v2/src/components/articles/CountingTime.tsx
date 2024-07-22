"use client";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";

export function CountingTimeArticle({ level = 1 }: ArticleProps) {
  const [firstTable, secondTable] = createCountingTimeData();

  return (
    <>
      <SectionHeading id="counting-time" level={level}>
        Counting Lengths of Time
      </SectionHeading>
      <TableWrapper
        columns={[
          { accessorKey: "num", header: "" },
          { accessorKey: "minutes", header: "Minutes" },
          { accessorKey: "hours", header: "Hours" },
          { accessorKey: "days", header: "Days" },
          { accessorKey: "nights", header: "Nights" },
        ]}
        data={firstTable}
      />

      <TableWrapper
        columns={[
          { accessorKey: "num", header: "" },
          { accessorKey: "weeks", header: "Weeks" },
          { accessorKey: "months", header: "Months" },
          { accessorKey: "years", header: "Years" },
        ]}
        data={secondTable}
      />
    </>
  );
}

export function createCountingTimeData() {
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
