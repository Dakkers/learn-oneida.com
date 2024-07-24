"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Text } from "@ukwehuwehneke/ohutsya";
import { ArticleProps } from "./utils";

const LIST = [
  ["Ballpark Road", "Tehuttsihkwaʔéktaʔ Yoha·té·"],
  ["Clara Road", "Clara Yoha·té·"],
  ["Elijah Road", "Oskanu·tú· Yoha·té·"],
  ["Elm Ave", "Elm Yoha·té·"],
  ["Evan John Road", "Evan John Yoha·té·"],
  ["Fairgrounds Road", "Tethutkʌnyé·thaʔ Yoha·té·"],
  ["Hazel Road", "Hazel Yoha·té·"],
  ["Highway 2", "Tékni Niwashe·tás Yoha·té·"],
  ["Highway 3", "Áhsʌ Niwashe·tás Yoha·té·"],
  ["Intersection", "tetyohahá·sleʔ / teyohahá·seleʔ"],
  ["Iroquois Road", "Lotiʔskʌʔlhakehtú Yoha·té·"],
  ["Longhouse Road", "Kanúhses Yoha·té·"],
  ["Nicholas Road", "Nicholas Yoha·té·"],
  ["Old Trail Road", "Ohahaʔka·yú Yoha·té·"],
  ["Oneida Road", "Onʌyoteʔa·ká· Yoha·té·"],
  ["Pheasant Drive", "Pheasant Yoha·té·"],
  ["River Road", "Kawyhuhakta Yoha·té·"],
  ["Townline Road", "Kanata·yʌ́· Yoha·té·"],
  ["Walker Road", "Walker Yoha·té·"],
  ["Williams Road", "Williams Yoha·té·"],
].map(([en, translation]) => ({ en, translation }));

export function RoadsArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="roads" level={level}>
        Roads
      </SectionHeading>
      <Text>These are roads in the Oneida of the Thames community.</Text>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={LIST}
      />
    </Flex>
  );
}
