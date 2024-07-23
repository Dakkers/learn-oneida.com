"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";

const LIST = [
  ["my mom's place", "aknulhaʔké·ne"],
  ["my dad's place", "lakeʔnihné·ke"],
  ["my grandmother's place", "akhsotné·ke"],
  ["my grandparents' place", "yukhsothané·ke"],
  ["my uncle's place", "laknulhaʔké·ne"],
  ["my aunt's place", "yuknulhaké·ne"],
  ["my older brother's place", "lakeʔkʌʔné·ke·"],
  ["my little sister's place", "kheʔkʌʔné·ke·"],
  ["my niece's place", "kheyuwatʌné·ke"],
  ["my son's place", "liyʌʔné·ke·"],
  ["my cousin's place", "ukyalasé·ke·ne"],
  ["my friend's place", "ukyatʌló·ke·ne"],
  ["David's place", "Tawétné·ke·"],
  ["Mary's place", "Walíné·ke·"],
].map(([en, translation]) => ({ en, translation }));

export function AtSomeonesPlaceArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="at-someones-place" level={level}>
        At someone&lsquo;s place
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={LIST}
      />
    </Flex>
  );
}
