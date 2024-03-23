import { Flex } from "@/design/components/flex";
import { Text } from "@/design/components/text";
import { TableWrapper } from "@/design/components/tableWrapper";
import { SectionHeading } from "../SectionHeading";
import { ArticleProps } from "./utils";

export function CountingTimeArticle({ level = 1 }: ArticleProps) {
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
      days: "tewʌhnislaké",
      nights: "tewahsu·táke",
    },
    {
      num: 3,
      minutes: "áhsʌ niwasliyetaʔk",
      hours: "áhsʌ nikahwistaʔeks",
      days: "áhsʌ niwʌhnislaké",
      nights: "áhsʌ niwahsu·táke",
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
      weeks: "tewʌ·táke",
      months: "tewʌhní·take",
      years: "teyóhslakeʔ",
    },
    {
      num: 3,
      weeks: "áhsʌ niwʌ·táke",
      months: "áhsʌ niwʌhní·take",
      years: "áhsʌ niyóhslaké",
    },
  ];

  return (
    <Flex direction="column" gap={4}>
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
      <Text>
        For some reason, the word for &quot;minute&quot; here is different than
        the word you would use when saying what time it is.
      </Text>

      <TableWrapper
        columns={[
          { accessorKey: "num", header: "" },
          { accessorKey: "weeks", header: "Weeks" },
          { accessorKey: "months", header: "Months" },
          { accessorKey: "years", header: "Years" },
        ]}
        data={secondTable}
      />
    </Flex>
  );
}
