import { TextArray } from "@/utils/TextArray";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { BreakdownType, TextBreakdown } from "~/components/TextBreakdown";
import { PRONOUN_MAP_EN, PRONOUN_MAP_ONEIDA } from "~/utils";
import { Text } from "../components/text";

type Row = Record<string, unknown>;

export interface TableWrapperProps {
  columns: Array<{
    accessorKey: string;
    cell?: (value?: unknown, row?: Row) => React.ReactNode;
    header: React.ReactNode;
  }>;
  data: Array<Row>;
}

export function TableWrapper({ columns, data }: TableWrapperProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((c) => (
            <TableHead key={c.accessorKey}>{c.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            {columns.map((c) => (
              <TableCell>
                {c.cell
                  ? c.cell(row[c.accessorKey], row)
                  : (row[c.accessorKey] as React.ReactNode)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

TableWrapper.textArrayCell = (value) => <TextArray>{value}</TextArray>;
TableWrapper.textArrayCellBold = (value) => (
  <TextArray>
    <b>{value}</b>
  </TextArray>
);

const EnglishCol = {
  accessorKey: "en",
  cell: TableWrapper.textArrayCell,
  header: "English",
};

const createOneidaCol = (typeFallback: BreakdownType) => ({
  accessorKey: "breakdown",
  cell: (value) => (
    <TextBreakdown breakdown={value} typeFallback={typeFallback} />
  ),
  header: "Translation",
});

const pronounColumns: TableWrapperProps["columns"] = [
  {
    accessorKey: "pronoun",
    cell: (value) => <Text>{PRONOUN_MAP_EN[value]}</Text>,
    header: "Pronoun (en)",
  },
  {
    accessorKey: "pronoun",
    cell: (value) => <Text>{PRONOUN_MAP_ONEIDA[value]}</Text>,
    header: "Pronoun (one)",
  },
];

const columnsParadigmRed: TableWrapperProps["columns"] = [
  EnglishCol,
  createOneidaCol("PR"),
];
const columnsParadigmBlue: TableWrapperProps["columns"] = [
  EnglishCol,
  createOneidaCol("PB"),
];
const columnsParadigmPurple: TableWrapperProps["columns"] = [
  EnglishCol,
  createOneidaCol("PP"),
];
const columnsEnglishOneida: TableWrapperProps["columns"] = [
  EnglishCol,
  {
    accessorKey: "on",
    cell: TableWrapper.textArrayCellBold,
    header: "Translation",
  },
];

TableWrapper.columnsParadigmRed = columnsParadigmRed;
TableWrapper.columnsParadigmBlue = columnsParadigmBlue;
TableWrapper.columnsParadigmPurple = columnsParadigmPurple;
TableWrapper.columnsEnglishOneida = columnsEnglishOneida;
TableWrapper.columnsPronouns = pronounColumns;
