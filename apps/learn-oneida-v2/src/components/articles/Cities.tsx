"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";

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
].map(([en, translation]) => ({ en, translation }));

export function CitiesArticle({ level = 1 }: ArticleProps) {
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
        columns={TableWrapper.columnsEnglishTranslation}
        data={CITIES_LIST}
      />
    </Flex>
  );
}
