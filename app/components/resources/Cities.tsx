import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Text } from "@/design/components/text";
import { SectionHeading } from "../SectionHeading";
import { ResourceProps } from "./utils";

const CITIES_LIST = [
  ["Chippewa / Muncey", "Twakʌnhá·ke·"],
  ["London", "Kanatá·ke"],
  ["New York City", "Kanunolú·ke"],
  ["Niagara Falls", "Tsiʔ tetwaʔsʌ́thaʔ"],
  ["Oneida, NY", ["Tsiʔtkanaʔalóhaleʔ", "Tkanaʔlohaleʔ"]],
  ["Oneida, WI", "Taluʔkowane"],
  ["Ottawa", "Kanatsyohalé·ke·"],
  ["Six Nations Grand River Territory", "Oshwe·kʌ́"],
  ["St. Thomas", "Tsiʔ tkanatáheleʔ"],
  ["Strathroy", "Ohkwalihné·"],
  ["Toronto", "Tsiʔ tkaluto"],
  ["Washington, D.C.", ["Kanatakalyáhsneʔ", "Lanatakalyashnekeʔ"]],
].map(([en, on]) => ({ en, on }));

export function CitiesResource({ level = 1 }: ResourceProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="cities" level={level}>
        Cities
      </SectionHeading>
      <Text>
        Below is a list of cities. <b>Kanatá·ke</b> is the word for both
        &quot;town&quot; and &quot;London&quot; as it&lsquo;s a city near the
        Oneida of the Thames community.
      </Text>
      <TableWrapper
        columns={TableWrapper.columnsEnglishOneida}
        data={CITIES_LIST}
      />
    </Flex>
  );
}
