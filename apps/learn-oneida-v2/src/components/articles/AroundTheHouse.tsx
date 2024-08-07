"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";

const LIST = [
  ["attic, in the", "tkanʌstó·teʔ"],
  ["basement, in the", "ohutsyá·ku"],
  ["bathroom, in the", "átsteʔ yʌtákhwaʔ"],
  ["bedroom, in the", "tsiʔ tyunuhwétstaʔ"],
  ["dining room, in the", "tsiʔ tyutekhunyá·thaʔ"],
  ["entrance, in the", "tsiʔ tyutawyaʔtákhwaʔ"],
  ["garage, in the", "tsiʔ tyuteʔslehtayʌtákhwaʔ "],
  ["kitchen, in the", "tsiʔ tyekhunyá·thaʔ"],
  ["laundry room, in the", "tsiʔ tyenohalenyutá·khwaʔ "],
  ["living room, in the", "tsiʔ tyutyʌtá·khwaʔ "],
  ["outside", "átsteʔ"],
  ["stairs", "yelathʌstá·khwaʔ"],
  ["yard, in the", "tewatʌʔʌlá·lu·heʔ"],
  ["yard, in the back", "onakʌ tyohutsyote"],
  ["yard, in the front ", "ohʌtu tyohuysyote"],
].map(([en, translation]) => ({ en, translation }));

export function AroundTheHouseArticle({ level = 1 }: { level?: 1 | 2 }) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="around-the-house" level={level}>
        Around the house
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={LIST}
      />
    </Flex>
  );
}
