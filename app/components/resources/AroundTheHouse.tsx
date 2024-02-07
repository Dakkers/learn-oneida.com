import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { SectionHeading } from "../SectionHeading";

const LIST = [
  ['attic, in the', 'tkanʌstó·teʔ'],
  ['basement, in the', 'ohutsyá·ku'],
  ['bathroom, in the', 'átsteʔ yʌtákhwaʔ'],
  ['bedroom, in the', 'tsiʔ tyunuhwétstaʔ'],
  ['dining room, in the', 'tsiʔ tyutekhunyá·thaʔ'],
  ['entrance, in the', 'tsiʔ tyutawyaʔtákhwaʔ'],
  ['garage, in the', 'tsiʔ tyuteʔslehtayʌtákhwaʔ '],
  ['kitchen, in the', 'tsiʔ tyekhunyá·thaʔ'],
  ['living room, in the', 'tsiʔ tyutyʌtá·khwaʔ '],
  ['stairs', 'yelathʌstá·khwaʔ'],
  ['laundry room, in the', 'tsiʔ tyenohalenyutá·khwaʔ '],
  ['outside', 'átsteʔ'],
  ['yard, in the', 'tewatʌʔʌlá·lu·heʔ'],
  ['yard, in the front ', 'ohʌtu tyohuysyote'],
  ['yard, in the back', 'onakʌ tyohutsyote'],
].map(([en, on]) => ({ en, on }));

export function AroundTheHouseResource({ level = 1 }) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="countries" level={level}>
        Around the house
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={LIST}
      />
    </Flex>
  );
}
