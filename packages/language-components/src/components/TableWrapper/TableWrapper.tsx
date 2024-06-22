import {
  BreakdownArray,
  BreakdownType,
  TextBreakdown,
  TextBreakdownSuffix,
} from "./TextBreakdown";
import { PRONOUN_MAP_EN, PRONOUN_MAP_ONEIDA, Pronoun } from "../utils";
import { Flex, Text, Table, TableProps, TextArray } from '@ukwehuwehneke/ohutsya'

export function TableWrapper(props: TableProps) {
  return (
    <Table {...props} />
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

interface BreakdownColOptions {
  accessorKey?: string;
  header?: string;
}

const createBreakdownCol = (
  typeFallback?: BreakdownType,
  options: BreakdownColOptions = {},
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

const oneidaPronounColumns: TableWrapperProps["columns"] = [
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
    header: "Pronoun",
    key: "pronoun_lang",
  },
];

const columnsParadigmRed: TableWrapperProps["columns"] = [
  EnglishCol,
  // @ts-expect-error To be addressed in LO-12
  createBreakdownCol("PR"),
];
const columnsParadigmBlue: TableWrapperProps["columns"] = [
  EnglishCol,
  // @ts-expect-error To be addressed in LO-12
  createBreakdownCol("PB"),
];
const columnsParadigmPurple: TableWrapperProps["columns"] = [
  EnglishCol,
  // @ts-expect-error To be addressed in LO-12
  createBreakdownCol("PP"),
];
const columnsEnglishTranslation: TableWrapperProps["columns"] = [
  EnglishCol,
  {
    accessorKey: "translation",
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

export type EnglishTranslationPairData = Array<{
  en: string | string[];
  translation: string | string[]
}>

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
TableWrapper.columnsEnglishTranslation = columnsEnglishTranslation;
TableWrapper.columnsEnglishBreakdown = columnsEnglishBreakdown;
TableWrapper.columnsOneidaPronouns = oneidaPronounColumns;
TableWrapper.createTextBreakdownColumn = createBreakdownCol;
TableWrapper.englishColumn = EnglishCol;
TableWrapper.createPastTenseColumns = createPastTenseColumns;

type MapperArgs = unknown | unknown[];
TableWrapper.mapLeftRight = ([left, right]: MapperArgs[]) => ({ left, right });
TableWrapper.mapEnglishAndTranslation = ([en, translation]: MapperArgs[]) => ({ en, translation });
