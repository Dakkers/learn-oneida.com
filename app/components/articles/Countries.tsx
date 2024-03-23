import { Flex } from "@/design/components/flex";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Text } from "@/design/components/text";
import { SectionHeading } from "../SectionHeading";
import { ArticleProps } from "./utils";

const LIST = [
  ["Canada", "Kolahkowánhne̲"],
  ["United States of America", "Ostʌhlonú·ke"],
  ["Europe", "Ohutsyakayú·ke̲"],
  ["China, Japan, Korea", "Tehatikahlatí·luté·ke"],
  ["North America (Turtle Island)", "Anowalé·ke"],
  ["The whole world", "Ohutsyakwekú"],
].map(([en, on]) => ({ en, on }));

export function CountriesArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="countries" level={level}>
        Countries
      </SectionHeading>
      <Text>Some continents and other words are also included.</Text>
      <TableWrapper columns={TableWrapper.columnsEnglishOneida} data={LIST} />
    </Flex>
  );
}
