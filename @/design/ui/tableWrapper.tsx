import { TextArray } from "@/utils/TextArray";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";
import { BreakdownType, TextBreakdown } from "~/components/TextBreakdown";

type Row = Record<string, unknown>

export interface TableWrapperProps {
  columns: Array<{
    accessorKey: string;
    cell?: (
      value?: unknown,
      row?: Row
    ) => React.ReactNode;
    header: React.ReactNode;
  }>;
  data: Array<Row>;
}

export function TableWrapper ({
  columns,
  data
}: TableWrapperProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((c) => (
            <TableHead key={c.accessorKey}>
              {c.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            {columns.map((c) => (
              <TableCell>
                {c.cell ? c.cell(row[c.accessorKey], row) : row[c.accessorKey] as React.ReactNode}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

TableWrapper.textArrayCell = (value) => <TextArray>{value}</TextArray>

const EnglishCol =
  {
    accessorKey: "en",
    cell: TableWrapper.textArrayCell,
    header: "English",
  }

const createOneidaCol = (typeFallback: BreakdownType) => ({
  accessorKey: "breakdown",
  cell: (value) => <TextBreakdown breakdown={value} typeFallback={typeFallback} />,
  header: "Translation",
})

const columnsParadigmRed: TableWrapperProps["columns"] = [
  EnglishCol,
  createOneidaCol('PR')
];
const columnsParadigmBlue: TableWrapperProps["columns"] = [
  EnglishCol,
  createOneidaCol('PB')
];
const columnsParadigmPurple: TableWrapperProps["columns"] = [
  EnglishCol,
  createOneidaCol('PP')
];

TableWrapper.columnsParadigmRed = columnsParadigmRed;
TableWrapper.columnsParadigmBlue = columnsParadigmBlue;
TableWrapper.columnsParadigmPurple = columnsParadigmPurple;
