import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/primitives/heading";
import { TableWrapper } from "@/design/primitives/tableWrapper";

export function DaysOfTheWeekResource({ level = 1 }) {
  const days = [
    { en: "Sunday", on: "Yautatokʌ́htu" },
    { en: "Monday", on: "Yautʌtá·u" },
    { en: "Tuesday", on: "Tekníhatut" },
    { en: "Wednesday", on: "Ahsʌ́hatut" },
    { en: "Thursday", on: "Kayelíhatut" },
    { en: "Friday", on: "Wískhatut" },
    { en: "Saturday", on: "Ʌtáktaʔ" },
  ];
  const daysSpecific = [
    { en: "on Sunday", on: "Yautatokʌhtu·neʔ" },
    { en: "on Monday", on: "Yautʌtaʔú·neʔ" },
    { en: "on Tuesday", on: "Teknihatútneʔ" },
    { en: "on Wednesday", on: "Ahsʌhatútneʔ" },
    { en: "on Thursday", on: "Kayelihatútneʔ" },
    { en: "on Friday", on: "Wiskhatútneʔ" },
    { en: "on Saturday", on: "Ʌtaktáhneʔ" },
  ];
  const daysLast = [
    { en: "last Sunday", on: "tshawʌtatokʌ́htu" },
    { en: "last Friday", on: "tshiwískhatut" },
    { en: "last Saturday", on: "tshiwʌtáktaʔ" },
  ];
  const daysNext = [
    { en: "next Sunday", on: "yʌswʌtatokʌ́htu" },
    { en: "next Friday", on: "oyá· yʌswískhatut" },
    { en: "next Saturday", on: "oyá· yʌswʌtáktaʔ" },
  ];

  return (
    <Flex direction="column" gap={4}>
      <Heading id="days" level={level} variant="headlineL">
        Days of the week
      </Heading>
      <TableWrapper columns={TableWrapper.columnsEnglishOneida} data={days} />

      <Heading id="days-on" level={level + 1} variant="headlineS">
        On a specific day
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysSpecific}
      />

      <Heading id="days-last" level={level + 1} variant="headlineS">
        Last...
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysLast}
      />

      <Heading id="days-next" level={level + 1} variant="headlineS">
        Next...
      </Heading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={daysNext}
      />
    </Flex>
  );
}
