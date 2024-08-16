"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { ArticleProps } from "./utils";

const names = [
  { translation: "Alʌ́t", en: "Aaron" },
  { translation: "Á·kwilut", en: "Abraham" },
  { translation: "Tsiʔtwʌlu", en: "Albert" },
  { translation: "Tshyalé", en: "Charlie" },
  { translation: "Tá·wet", en: "David" },
  { translation: "Tsyáts", en: "George" },
  { translation: "Tshéle", en: "Jerry" },
  { translation: "Sawatís", en: "John" },
  { translation: "Kénniha", en: "Kenny" },
  { translation: "Máthyu", en: "Matthew" },
  { translation: "Níklas", en: "Nicholas" },
  { translation: "Kwítel", en: "Peter" },
  { translation: "Lítsyet", en: "Richard" },
  { translation: "Tu·wís", en: "Thomas" },
  { translation: "Wílo", en: "William" },
  { translation: "Klistí·n", en: ["Christine", "Kristin"] },
  { translation: "Tsiló·s", en: "Delores" },
  { translation: ["Aliskwe", "Alísakwe"], en: "Elizabeth" },
  { translation: "Katlí·n", en: "Katherine" },
  { translation: ["Kwáklit", "Kowáklit"], en: "Margret" },
  { translation: "Máhtih", en: "Martha" },
  { translation: "Wá·li", en: "Mary" },
  { translation: "Ní·ki", en: ["Nellie", "Amelia"] },
  { translation: "Lá·kel", en: "Rachel" },
  { translation: "Sá·l", en: "Sara" },
  { translation: "Só·s", en: "Susan" },
] as const;

export function EnglishNamesArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="english-names" level={level}>
        English Names
      </SectionHeading>
      {/* @ts-expect-error To be addressed in LO-12 */}
      <TableWrapper
        columns={TableWrapper.columnsEnglishTranslation}
        data={names}
      />
    </Flex>
  );
}
