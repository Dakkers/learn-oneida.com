import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { SectionHeading } from "../SectionHeading";
import { Text } from "@/design/components/text";

const LIST = [
  ["Townline Road", "Kanata·yʌ́· Yoha·té·"],
  ["Longhouse Road", "Kanúhses Yoha·té·"],
  ["Fairgrounds Road", "Tethutkʌnyé·thaʔ Yoha·té·"],
  ["River Road", "Kawyhuhakta Yoha·té·"],
  ["Walker Road", "Walker Yoha·té·"],
  ["Ballpark Road", "Tehuttsihkwaʔéktaʔ Yoha·té·"],
  ["Oneida Road", "Onʌyoteʔa·ká· Yoha·té·"],
  ["Elijah Road", "Oskanu·tú· Yoha·té·"],
  ["Hazel Road", "Hazel Yoha·té·"],
  ["Old Trail Road", "Ohahaʔka·yú Yoha·té·"],
  ["Iroquois Road", "Lotiʔskʌʔlhakehtú Yoha·té·"],
  ["Clara Road", "Clara Yoha·té·"],
  ["Evan John Road", "Evan John Yoha·té·"],
  ["Nicholas Road", "Nicholas Yoha·té·"],
  ["Williams Road", "Williams Yoha·té·"],
  ["Elm Ave", "Elm Yoha·té·"],
  ["Pheasant Drive", "Pheasant Yoha·té·"],
  ["Highway 3", "Áhsʌ Niwashe·tás Yoha·té·"],
  ["Highway 2", "Tékni Niwashe·tás Yoha·té·"],
  ["Intersection", "tetyohahá·sleʔ / teyohahá·seleʔ"],
].map(([en, on]) => ({ en, on }));

export function RoadsResource({ level = 1 }) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="roads" level={level}>
        Roads
      </SectionHeading>
      <Text>
        These are roads in the Oneida of the Thames community.
      </Text>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={LIST}
      />
    </Flex>
  );
}
