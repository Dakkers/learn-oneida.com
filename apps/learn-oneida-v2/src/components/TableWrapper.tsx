import {
  BreakdownArray,
  BreakdownType,
  TextBreakdown,
  TextBreakdownSuffix,
} from "~/components/TextBreakdown";
import { PRONOUN_MAP_EN, PRONOUN_MAP_ONEIDA, Pronoun } from "~/utils";
import {
  Flex,
  Text,
  Table,
  TableProps,
  TextArray,
} from "@ukwehuwehneke/ohutsya";

export function TableWrapper(props: TableProps) {
  return <Table {...props} />;
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
    <TextBreakdown
      breakdown={value}
      typeFallback={typeFallback}
      wrap="nowrap"
    />
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
    // @ts-expect-error TODO
    cell: (value: BreakdownArray) => (
      <TextBreakdown breakdown={value} wrap="nowrap" />
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
