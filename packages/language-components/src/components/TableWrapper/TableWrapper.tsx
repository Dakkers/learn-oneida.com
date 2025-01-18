import {
  type BreakdownArray,
  type BreakdownType,
  TextBreakdown,
} from "./../TextBreakdown";
import { PRONOUN_MAP_EN, PRONOUN_MAP_ONEIDA, type Pronoun } from "../../utils";
import {
  Flex,
  PlayButton,
  Table,
  type TableProps,
  TextArray,
} from "@ukwehuwehneke/ohutsya";

export type { TableProps as TableWrapperProps };

export function TableWrapper(props: TableProps) {
  return <Table {...props} />;
}

interface BreakdownColOptions {
  accessorKey?: string;
  header?: string;
}

interface CreatePastTenseColumnsOptions {
  headerNow?: string;
  headerPast?: string;
}

export type EnglishTranslationPairData = Array<{
  en: string | string[];
  translation: string | string[];
}>;

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

function createBreakdownCol(
  typeFallback?: BreakdownType,
  options: BreakdownColOptions = {},
) {
  return {
    accessorKey: options.accessorKey ?? "breakdown",
    cell: (
      value: BreakdownArray,
      row: {
        audioFile: string;
      },
    ) => (
      <Flex gap={2}>
        <TextBreakdown
          breakdown={value}
          typeFallback={typeFallback}
          wrap="nowrap"
        />

        {row.audioFile && <PlayButton filepath={`/audio/${row.audioFile}`} />}
      </Flex>
    ),
    header: options.header ?? "Oneida",
  };
}

const oneidaPronounColumns: TableProps["columns"] = [
  {
    accessorKey: "pronoun",
    // @ts-expect-error TODO - TableWrapper/Table generics
    cell: (value: Pronoun) => <TextArray>{PRONOUN_MAP_EN[value]}</TextArray>,
    header: "Pronoun (en)",
    key: "pronoun_en",
  },
  {
    accessorKey: "pronoun",
    // @ts-expect-error TODO - TableWrapper/Table generics
    cell: (value: Pronoun) => (
      <TextArray>{PRONOUN_MAP_ONEIDA[value]}</TextArray>
    ),
    header: "Pronoun",
    key: "pronoun_lang",
  },
];

const columnsParadigmRed: TableProps["columns"] = [
  EnglishCol,
  // @ts-expect-error TODO - TableWrapper/Table generics
  createBreakdownCol("PS"),
];
const columnsParadigmBlue: TableProps["columns"] = [
  EnglishCol,
  // @ts-expect-error TODO - TableWrapper/Table generics
  createBreakdownCol("PO"),
];
const columnsParadigmPurple: TableProps["columns"] = [
  EnglishCol,
  // @ts-expect-error TODO - TableWrapper/Table generics
  createBreakdownCol("PI"),
];
const columnsEnglishTranslation: TableProps["columns"] = [
  EnglishCol,
  {
    accessorKey: "translation",
    cell: TableWrapper.textArrayCellBold,
    header: "Oneida",
  },
];
const columnsEnglishBreakdown: TableProps["columns"] = [
  EnglishCol,
  {
    accessorKey: "breakdown",
    // @ts-expect-error TODO - TableWrapper/Table generics
    cell: (value: BreakdownArray) => (
      <TextBreakdown breakdown={value} wrap="nowrap" />
    ),
    header: "Oneida",
  },
];

const audioCell = (
  value: string,
  row: {
    audioFile: string;
  },
) => (
  <Flex gap={4}>
    {value}

    <PlayButton filepath={`/audio/${row.audioFile}`} />
  </Flex>
);

const columnsEnglishAudio = [
  columnsEnglishTranslation[0],
  {
    ...columnsEnglishTranslation[1],
    cell: audioCell,
  },
];

const createPastTenseColumns = (
  typeFallback: BreakdownType,
  opts: CreatePastTenseColumnsOptions = {},
) => [
  ...oneidaPronounColumns,
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
      <TextBreakdown breakdown={value} typeFallback={typeFallback} />
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
TableWrapper.columnsEnglishAudio = columnsEnglishAudio;
TableWrapper.audioCell = audioCell;

type MapperArgs = unknown | unknown[];
TableWrapper.mapLeftRight = ([left, right]: MapperArgs[]) => ({ left, right });
TableWrapper.mapTranslationAndEnglish = ([translation, en]: MapperArgs[]) => ({
  en,
  translation,
});
TableWrapper.mapEnglishAndTranslation = ([en, translation]: MapperArgs[]) => ({
  en,
  translation,
});
