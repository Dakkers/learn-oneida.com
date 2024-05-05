import { TextArray } from "@/utils/TextArray";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../primitives/table";
import {
  BreakdownArray,
  BreakdownType,
  TextBreakdown,
  TextBreakdownSuffix,
} from "~/components/TextBreakdown";
import { PRONOUN_MAP_EN, PRONOUN_MAP_ONEIDA, Pronoun } from "~/utils";
import { Text } from "./text";
import { Flex } from "./flex";
import { Bleed, BleedProps } from "./Bleed";

type Row = Record<string, unknown>;

export interface TableWrapperProps {
  bleed?: BleedProps['mx']
  columns: Array<{
    accessorKey: string;
    cell?: (value?: unknown, row?: Row) => React.ReactNode;
    header: React.ReactNode;
    key?: string;
  }>;
  data: Array<Row>;
}

export function TableWrapper({ bleed = 32, columns, data }: TableWrapperProps) {
  const hasHeader = !!columns.find((col) => !!col.header)

  return (
    <Bleed mx={bleed}>
      <Table>
        {hasHeader && (
          <TableHeader>
            <TableRow>
              {columns.map((c) => (
                <TableHead key={c.key ?? c.accessorKey}>{c.header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
        )}
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
    </Bleed>
  );
}

TableWrapper.textArrayCell = (value: any) => (
  <Flex direction="column">
    <TextArray>{value}</TextArray>
  </Flex>
);
TableWrapper.textArrayCellBold = (value: any) => (
  <Flex direction="column">
    <TextArray bold>{value}</TextArray>
  </Flex>
);

const EnglishCol = {
  accessorKey: "en",
  cell: TableWrapper.textArrayCell,
  header: "English",
};

interface OneidaColOptions {
  accessorKey?: string;
  header?: string;
}

const createOneidaCol = (
  typeFallback?: BreakdownType,
  options: OneidaColOptions = {},
) => ({
  accessorKey: options.accessorKey ?? "breakdown",
  cell: (value: BreakdownArray) => (
    <TextBreakdown breakdown={value} typeFallback={typeFallback} />
  ),
  header: options.header ?? "Translation",
});

const pronounColumns: TableWrapperProps["columns"] = [
  {
    accessorKey: "pronoun",
    // @ts-expect-error To be addressed in LO-12
    cell: (value: Pronoun) => <Text>{PRONOUN_MAP_EN[value]}</Text>,
    header: "Pronoun (en)",
    key: "pronoun_en",
  },
  {
    accessorKey: "pronoun",
    // @ts-expect-error To be addressed in LO-12
    cell: (value: Pronoun) => <Text>{PRONOUN_MAP_ONEIDA[value]}</Text>,
    header: "Pronoun (one)",
    key: "pronoun_one",
  },
];

const columnsParadigmRed: TableWrapperProps["columns"] = [
  EnglishCol,
  // @ts-expect-error To be addressed in LO-12
  createOneidaCol("PR"),
];
const columnsParadigmBlue: TableWrapperProps["columns"] = [
  EnglishCol,
  // @ts-expect-error To be addressed in LO-12
  createOneidaCol("PB"),
];
const columnsParadigmPurple: TableWrapperProps["columns"] = [
  EnglishCol,
  // @ts-expect-error To be addressed in LO-12
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
    cell: (value) => <TextBreakdown breakdown={value as BreakdownArray} />,
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
  opts: CreatePastTenseColumnsOptions = {},
) => [
  ...TableWrapper.columnsPronouns,
  {
    accessorKey: "breakdown",
    cell: (value: BreakdownArray) => (
      <TextBreakdown breakdown={value} typeFallback={typeFallback} />
    ),
    header: opts?.headerNow ?? "Now",
  },
  {
    accessorKey: "breakdownPast",
    cell: (value: BreakdownArray) => (
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

type MapperArgs = unknown | unknown[];
TableWrapper.mapLeftRight = ([left, right]: MapperArgs[]) => ({ left, right });
TableWrapper.mapEnglishOneida = ([en, on]: MapperArgs[]) => ({ en, on });
