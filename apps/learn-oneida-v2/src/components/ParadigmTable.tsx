"use client";

import {
  Bleed,
  type BleedProps,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Flex,
  Form,
  PlayButton,
  PrimitiveTable,
  PrimitiveTableBody,
  PrimitiveTableCell,
  PrimitiveTableHead,
  PrimitiveTableHeader,
  PrimitiveTableRow,
  TextArray,
} from "@ukwehuwehneke/ohutsya";
import { Settings } from "lucide-react";
import React from "react";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  PURPLES_MAP_FULL,
  type Pronoun,
  pronouns,
  pronounsBlue,
  translatePhraseInteractive,
  translatePhraseV2,
} from "@ukwehuwehneke/language-components";
import {
  type BreakdownArray,
  type BreakdownType,
  TextBreakdown,
  type TextBreakdownSuffix,
} from "@ukwehuwehneke/language-components";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import _ from "lodash";
import { whisperizeWord } from "@ukwehuwehneke/language-components";

import {
  type PronounPurple,
  type PronounPurpleExtended,
  pronounsPurple,
} from "@ukwehuwehneke/language-components";

const formSchema = z.object(
  Object.fromEntries(pronouns.map((p) => [p, z.string().nullish()])),
);

const ParadigmTableContext =
  React.createContext<ParadigmTableContextProps | null>(null);

export interface ParadigmTableProps {
  allowedPronouns?: Pronoun[];
  audioFolder?: string;
  bleed?: BleedProps["mx"];
  columnVisibility?: Partial<ColumnVisibility>;
  data: ParadigmTableContextProps["data"];
  isTesting?: boolean;
  translationKeys?: Record<string, string>;
  legacyTranslationFn?: ParadigmTableContextProps["legacyTranslationFn"];
}

export function ParadigmTable({
  allowedPronouns = [],
  audioFolder,
  bleed = 0,
  columnVisibility = {},
  data,
  legacyTranslationFn,
}: ParadigmTableProps) {
  const [colVisibility, setColVisibility] = React.useState({
    pronounOneida: true,
    pronounEnglish: true,
    translation: true,
    ...columnVisibility,
  });
  const [showBreakdown, setShowBreakdown] = React.useState(true);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {},
    resolver: zodResolver(formSchema),
  });

  const rowsToShow = React.useMemo(() => {
    if (allowedPronouns.length === 0) {
      return data.phrases;
    }
    return data.phrases.filter((p) => allowedPronouns.includes(p.pronoun));
  }, [data.phrases, allowedPronouns]);

  return (
    <ParadigmTableContext.Provider
      value={{
        colVisibility,
        data,
        showBreakdown,
        legacyTranslationFn,
      }}
    >
      <Bleed mx={bleed}>
        <Flex justify="end">
          <SettingsMenu
            toggleColumn={(columnName) =>
              setColVisibility({
                ...colVisibility,
                [columnName]:
                  !colVisibility[columnName as keyof ColumnVisibility],
              })
            }
            toggleBreakdown={setShowBreakdown}
          />
        </Flex>

        <Form {...form}>
          <PrimitiveTable>
            <PrimitiveTableHeader>
              <PrimitiveTableRow>
                {colVisibility.pronounEnglish && (
                  <PrimitiveTableHead>Pronoun (EN)</PrimitiveTableHead>
                )}
                {colVisibility.pronounOneida && (
                  <PrimitiveTableHead>Pronoun</PrimitiveTableHead>
                )}
                <PrimitiveTableHead>Phrase</PrimitiveTableHead>
                {colVisibility.translation && (
                  <PrimitiveTableHead>Translation</PrimitiveTableHead>
                )}
              </PrimitiveTableRow>
            </PrimitiveTableHeader>
            <PrimitiveTableBody>
              {rowsToShow.map((row, i) => (
                <TableRowWrapper
                  audioFolder={data.audioFolder ?? audioFolder}
                  key={i}
                  row={row}
                  typeFallback={data.type}
                  whispered={data.whispered}
                />
              ))}
            </PrimitiveTableBody>
          </PrimitiveTable>
        </Form>
      </Bleed>
    </ParadigmTableContext.Provider>
  );
}

function TableRowWrapper({
  audioFolder,
  row,
  suffix,
  typeFallback,
  whispered = false,
}: {
  audioFolder?: string;
  row: Row;
  suffix?: TextBreakdownSuffix;
  typeFallback?: BreakdownType;
  whispered?: boolean;
}) {
  const context = React.useContext(ParadigmTableContext);
  if (!context) {
    throw new Error("Missing context");
  }
  const { colVisibility, data, showBreakdown } = context;
  const translatedPhrase =
    context.data.type === "PP"
      ? translatePhraseInteractive(
          // @ts-expect-error ParadigmData doesn't support purple correctly :(
          context.data,
          row.pronoun,
        )
      : translatePhraseV2(
          context.data,
          row.pronoun,
          context.legacyTranslationFn,
        );

  const audioFilenamePronoun = getAudioFilenameForPronoun(
    row.pronoun,
    typeFallback,
  );

  return (
    <PrimitiveTableRow>
      {colVisibility.pronounEnglish && data.type !== "PP" && (
        <PrimitiveTableCell>
          <TextArray>{PRONOUN_MAP_EN[row.pronoun]}</TextArray>
        </PrimitiveTableCell>
      )}
      {colVisibility.pronounOneida && (
        <PrimitiveTableCell>
          <TextArray>
            {data.type === "PP"
              ? // @ts-expect-error ParadigmData doesn't support purple correctly :(
                PURPLES_MAP_FULL[row.pronoun]
              : PRONOUN_MAP_ONEIDA[row.pronoun]}
          </TextArray>
        </PrimitiveTableCell>
      )}
      <PrimitiveTableCell>
        <Flex gap={4}>
          {showBreakdown ? (
            <TextBreakdown
              breakdown={row.breakdown}
              suffix={suffix}
              typeFallback={typeFallback}
              whispered={row.whispered ?? whispered ?? false}
            />
          ) : (
            row.phrase
          )}

          {audioFolder && (
            <PlayButton
              filepath={`/audio/${audioFolder}/${audioFilenamePronoun}.mp3`}
            />
          )}
        </Flex>
      </PrimitiveTableCell>
      {colVisibility.translation && (
        <PrimitiveTableCell>
          <TextArray>{translatedPhrase}</TextArray>
        </PrimitiveTableCell>
      )}
    </PrimitiveTableRow>
  );
}

function SettingsMenu({
  toggleBreakdown,
  toggleColumn,
}: {
  toggleBreakdown: (value: boolean) => void;
  toggleColumn: (value: string) => void;
}) {
  const context = React.useContext(ParadigmTableContext);
  if (!context) {
    throw new Error("Missing context");
  }
  const { colVisibility, data, showBreakdown } = context;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Settings className="print:hidden" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {data.type !== "PP" && (
          <DropdownMenuItem onClick={() => toggleColumn("pronounEnglish")}>
            {colVisibility.pronounEnglish
              ? "Hide Pronoun (EN) column"
              : "Show Pronoun (EN) column"}
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => toggleColumn("pronounOneida")}>
          {colVisibility.pronounOneida
            ? "Hide Pronoun column"
            : "Show Pronoun column"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleColumn("translation")}>
          {colVisibility.translation
            ? "Hide Translation column"
            : "Show Translation column"}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => toggleBreakdown(!showBreakdown)}>
          {showBreakdown ? "Hide text colors" : "Show text colors"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

interface ColumnVisibility {
  pronounOneida: boolean;
  pronounEnglish: boolean;
  translation: boolean;
}

export interface ParadigmData {
  audioFolder?: string;
  phrases: Row[];
  translation: string;
  translationFn?: (pronoun: Pronoun) => string;
  type: "PR" | "PB" | "PLB" | "PP";
  whispered?: boolean;
}

interface Row {
  breakdown: BreakdownArray;
  phrase: string;
  pronoun: Pronoun;
  whispered?: boolean;
}

interface ParadigmTableContextProps {
  colVisibility: ColumnVisibility;
  data: ParadigmData;
  showBreakdown?: boolean;
  legacyTranslationFn?: ({
    pronoun,
  }: { pronoun: Pronoun }) => Record<string, string>;
}

function createParadigmDataUtil(
  data: Pick<
    ParadigmData,
    "audioFolder" | "translation" | "translationFn" | "type" | "whispered"
  > & {
    phrases: Array<{ breakdown: BreakdownArray }>;
  },
) {
  const result = _.cloneDeep(data) as ParadigmData;
  for (let i = 0; i < result.phrases.length; i++) {
    const element = result.phrases[i];
    const endIndex = element.breakdown.length - 1;
    if (element.whispered ?? data.whispered ?? true) {
      const lastElement = element.breakdown[endIndex];
      const lastPartOfBreakdown = getBreakdownTextPart(
        getBreakdownTextPart(lastElement),
      );
      const lastPartWhispered = whisperizeWord(lastPartOfBreakdown);
      element.breakdown[endIndex] =
        typeof lastElement === "string"
          ? lastPartWhispered
          : {
              text: lastPartWhispered,
              type: Array.isArray(lastElement)
                ? lastElement[1]
                : (lastElement.type ?? undefined),
            };
    }

    element.phrase = element.breakdown
      .map((part) => getBreakdownTextPart(part))
      .join("");
  }

  result.whispered = data.whispered ?? true;

  return result;
}

export function createInteractiveParadigmData(
  data: Omit<Parameters<typeof createParadigmDataUtil>[0], "translationFn"> & {
    translationFn?: (pronoun: PronounPurple | PronounPurpleExtended) => string;
  },
  allowedPronouns?: PronounPurple[] | PronounPurpleExtended[],
): ParadigmData {
  // @ts-expect-error Argh! ParadigmData expects Pronoun, not the purples
  const result = createParadigmDataUtil(data);

  const pronounsToUse = allowedPronouns ?? pronounsPurple;
  for (let i = 0; i < result.phrases.length; i++) {
    if (pronounsToUse) {
      // @ts-expect-error Argh! ParadigmData expects Pronoun, not the purples
      result.phrases[i].pronoun = pronounsToUse[i];
    }
  }
  return result;
}

export function createParadigmData(
  data: Parameters<typeof createParadigmDataUtil>[0],
  allowedPronouns?: Pronoun[],
): ParadigmData {
  const result = createParadigmDataUtil(data);
  const pronounsToUse =
    allowedPronouns ?? (result.type === "PB" ? pronounsBlue : pronouns);
  for (let i = 0; i < result.phrases.length; i++) {
    if (pronounsToUse) {
      result.phrases[i].pronoun = pronounsToUse[i];
    }
  }
  return result;
}

const getBreakdownTextPart = (part: BreakdownArray[number]) =>
  typeof part === "string" ? part : Array.isArray(part) ? part[0] : part.text;

export function getAudioFilenameForPronoun(
  pronoun: Pronoun,
  typeFallback?: BreakdownType,
) {
  return typeFallback !== "PB"
    ? pronoun
    : pronoun === "theyni"
      ? "us"
      : pronoun === "soni"
        ? "uni"
        : pronoun === "ms"
          ? "2m"
          : pronoun === "fs"
            ? "2f"
            : pronoun;
}
