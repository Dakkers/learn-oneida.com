import { TableWrapper, TableWrapperProps } from "@/design/ui/tableWrapper";

const names = [
  { oneida: "Alʌt", en: "Aaron" },
  { oneida: "Á·kwilut", en: "Abraham" },
  { oneida: "Tsiʔtwʌlu", en: "Albert" },
  { oneida: "Tshyalé", en: "Charlie" },
  { oneida: "Tá·wet", en: "David" },
  { oneida: "Tysáts", en: "George" },
  { oneida: "Tshéle", en: "Jerry" },
  { oneida: "Sawatís", en: "John" },
  { oneida: "Kénniha", en: "Kenny" },
  { oneida: "Mathyu", en: "Matthew" },
  { oneida: "Niklas", en: "Nicholas" },
  { oneida: "Kwítel", en: "Peter" },
  { oneida: "Litsyet", en: "Richard" },
  { oneida: "Tu·wís", en: "Thomas" },
  { oneida: "Wílo", en: "William" },
  { oneida: "Klistí·n", en: ["Christine", "Kristin"] },
  { oneida: "Tsiló·s", en: "Delores" },
  { oneida: ["Aliskwet", "Alísakwet"], en: "Elizabeth" },
  { oneida: "Katlí·n", en: "Katherine" },
  { oneida: ["Kwáklit", "Kowáklit"], en: "Margret" },
  { oneida: "Mahtih", en: "Martha" },
  { oneida: "Wá·li", en: "Mary" },
  { oneida: "Ní·ki", en: ["Nellie", "Amelia"] },
  { oneida: "Lá·kel", en: "Rachel" },
  { oneida: "Sá·l", en: "Sara" },
  { oneida: "Só·s", en: "Susan" },
] as const;

const basicColumns: TableWrapperProps["columns"] = [
  {
    accessorKey: "en",
    cell: TableWrapper.textArrayCell,
    header: "English",
  },
  {
    accessorKey: "oneida",
    cell: TableWrapper.textArrayCell,
    header: "Oneida",
  },
];

export function EnglishNames() {
  return <TableWrapper columns={basicColumns} data={names} />;
}
