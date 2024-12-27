import {
  TableWrapper,
  type EnglishTranslationPairData,
} from "../components/TableWrapper";
import { SectionHeading } from "../components/SectionHeading";
import type { ArticleProps } from "./utils";
import { Flex } from "@ukwehuwehneke/ohutsya";

export type PlacesInTheCommunityArticleProps = ArticleProps & {
  data: EnglishTranslationPairData;
};

export function PlacesInTheCommunityArticle({
  data,
  level = 1,
}: PlacesInTheCommunityArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="places-in-community" level={level}>
        Places in the community
      </SectionHeading>
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={data}
      />
    </Flex>
  );
}
