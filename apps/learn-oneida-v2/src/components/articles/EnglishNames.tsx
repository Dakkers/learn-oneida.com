import { Flex } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { SectionHeading } from "../SectionHeading";
import { ArticleProps } from "./utils";

const names = [
  { on: "Alʌt", en: "Aaron" },
  { on: "Á·kwilut", en: "Abraham" },
  { on: "Tsiʔtwʌlu", en: "Albert" },
  { on: "Tshyalé", en: "Charlie" },
  { on: "Tá·wet", en: "David" },
  { on: "Tysáts", en: "George" },
  { on: "Tshéle", en: "Jerry" },
  { on: "Sawatís", en: "John" },
  { on: "Kénniha", en: "Kenny" },
  { on: "Mathyu", en: "Matthew" },
  { on: "Niklas", en: "Nicholas" },
  { on: "Kwítel", en: "Peter" },
  { on: "Litsyet", en: "Richard" },
  { on: "Tu·wís", en: "Thomas" },
  { on: "Wílo", en: "William" },
  { on: "Klistí·n", en: ["Christine", "Kristin"] },
  { on: "Tsiló·s", en: "Delores" },
  { on: ["Aliskwe", "Alísakwe"], en: "Elizabeth" },
  { on: "Katlí·n", en: "Katherine" },
  { on: ["Kwáklit", "Kowáklit"], en: "Margret" },
  { on: "Mahtih", en: "Martha" },
  { on: "Wá·li", en: "Mary" },
  { on: "Ní·ki", en: ["Nellie", "Amelia"] },
  { on: "Lá·kel", en: "Rachel" },
  { on: "Sá·l", en: "Sara" },
  { on: "Só·s", en: "Susan" },
] as const;

export function EnglishNamesArticle({ level = 1 }: ArticleProps) {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading id="english-names" level={level}>
        English Names
      </SectionHeading>
      {/* @ts-expect-error To be addressed in LO-12 */}
      <TableWrapper columns={TableWrapper.columnsEnglishOneida} data={names} />
    </Flex>
  );
}
