import { TextArray } from "@/utils/TextArray";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../primitives/table";
import { BreakdownType, TextBreakdown, TextBreakdownSuffix } from "~/components/TextBreakdown";
import { PRONOUN_MAP_EN, PRONOUN_MAP_ONEIDA, arrayify } from "~/utils";
import { Text } from "./text";
import { Flex } from "./flex";

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
            {columns.map((c, j) => (
              <TableCell key={`${i}-${j}`}>
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

TableWrapper.textArrayCell = (value) => (
  <Flex direction="column">
    <TextArray>{value}</TextArray>
  </Flex>
);
TableWrapper.textArrayCellBold = (value) => (
  <Flex direction="column">
    <TextArray bold>{value}</TextArray>
  </Flex>
);

const EnglishCol = {
  accessorKey: "en",
  cell: TableWrapper.textArrayCell,
  header: "English",
};

const createOneidaCol = (typeFallback: BreakdownType, options = {}) => ({
  accessorKey: options.accessorKey ?? "breakdown",
  cell: (value) => (
    <TextBreakdown breakdown={value} typeFallback={typeFallback} />
  ),
  header: options.header ?? "Translation",
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
const columnsEnglishBreakdown: TableWrapperProps["columns"] = [
  EnglishCol,
  {
    accessorKey: "breakdown",
    cell: (value) => (
      <TextBreakdown breakdown={value} />
    ),
    header: "Translation",
  },
];

interface CreatePastTenseColumnsOptions {
  headerNow?: string;
  headerPast?: string;
  suffix?: TextBreakdownSuffix;
}

const createPastTenseColumns = (
  typeFallback: BreakdownType,
  opts: CreatePastTenseColumnsOptions = {}
) => [
    ...TableWrapper.columnsPronouns,
    {
      accessorKey: "breakdown",
      cell: (value) => (
        <TextBreakdown breakdown={value} typeFallback={typeFallback} />
      ),
      header: opts?.headerNow ?? "Now",
    },
    {
      accessorKey: "breakdownPast",
      cell: (value) => (
        <TextBreakdown
          breakdown={value}
          suffix={opts.suffix}
          typeFallback={typeFallback}
        />
      ),
      header: opts?.headerPast ?? "Used to be",
    },
  ];

TableWrapper.columnsParadigmRed = columnsParadigmRed;
TableWrapper.columnsParadigmBlue = columnsParadigmBlue;
TableWrapper.columnsParadigmPurple = columnsParadigmPurple;
TableWrapper.columnsEnglishOneida = columnsEnglishOneida;
TableWrapper.columnsEnglishBreakdown = columnsEnglishBreakdown;
TableWrapper.columnsPronouns = pronounColumns;
TableWrapper.createTextBreakdownColumn = createOneidaCol;
TableWrapper.englishColumn = EnglishCol;
TableWrapper.createPastTenseColumns = createPastTenseColumns;
