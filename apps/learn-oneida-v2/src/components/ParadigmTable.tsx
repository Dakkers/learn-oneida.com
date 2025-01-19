"use client";

import {
  Bleed,
  type BleedProps,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Flex,
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
  type TextBreakdownProps,
  translatePhraseInteractive,
  translatePhraseV2,
} from "@ukwehuwehneke/language-components";
import {
  type BreakdownType,
  TextBreakdown,
} from "@ukwehuwehneke/language-components";
import _ from "lodash";

import type { ParadigmData, ParadigmTableRow } from "@/utils/paradigm";
import { getAudioFilenameForPronoun } from "@/utils/misc";

const ParadigmTableContext =
  React.createContext<ParadigmTableContextProps | null>(null);

export interface ParadigmTableProps {
  allowedPronouns?: Pronoun[];
  audioFolder?: string;
  bleed?: BleedProps["mx"];
  columnVisibility?: Partial<ColumnVisibility>;
  data: ParadigmTableContextProps["data"];
  ignoredBreakdownTypes?: TextBreakdownProps["ignored"];
  legacyTranslationFn?: ParadigmTableContextProps["legacyTranslationFn"];
}

export function ParadigmTable({
  allowedPronouns = [],
  audioFolder,
  bleed = 0,
  columnVisibility = {},
  data,
  ignoredBreakdownTypes,
  legacyTranslationFn,
}: ParadigmTableProps) {
  const [colVisibility, setColVisibility] = React.useState({
    pronounOneida: true,
    pronounEnglish: true,
    translation: true,
    ...columnVisibility,
  });
  const [showBreakdown, setShowBreakdown] = React.useState(true);

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
                ignoredBreakdownTypes={ignoredBreakdownTypes}
                key={i}
                row={row}
                typeFallback={data.type}
                whispered={data.whispered}
              />
            ))}
          </PrimitiveTableBody>
        </PrimitiveTable>
      </Bleed>
    </ParadigmTableContext.Provider>
  );
}

function TableRowWrapper({
  audioFolder,
  ignoredBreakdownTypes,
  row,
  typeFallback,
  whispered = false,
}: {
  audioFolder?: string;
  ignoredBreakdownTypes: TextBreakdownProps["ignored"];
  row: ParadigmTableRow;
  typeFallback?: BreakdownType;
  whispered?: boolean;
}) {
  const context = React.useContext(ParadigmTableContext);
  if (!context) {
    throw new Error("Missing context");
  }
  const { colVisibility, data, showBreakdown } = context;
  const translatedPhrase =
    context.data.type === "PI" && !context.data.categories?.includes("kinship")
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
      {colVisibility.pronounEnglish && data.type !== "PI" && (
        <PrimitiveTableCell>
          <TextArray>{PRONOUN_MAP_EN[row.pronoun]}</TextArray>
        </PrimitiveTableCell>
      )}
      {colVisibility.pronounOneida && (
        <PrimitiveTableCell>
          <TextArray>
            {data.type === "PI"
              ? // @ts-expect-error ParadigmData doesn't support purple correctly :(
                (PURPLES_MAP_FULL[row.pronoun] ??
                PRONOUN_MAP_ONEIDA[row.pronoun])
              : // Note for ^: some of the paradigms with type='PI' are the kinship terms which are weird
                // as they're purple but we don't refer to them with e.g. "Her -> me", just "I"
                PRONOUN_MAP_ONEIDA[row.pronoun]}
          </TextArray>
        </PrimitiveTableCell>
      )}
      <PrimitiveTableCell>
        <Flex gap={4}>
          {showBreakdown ? (
            <TextBreakdown
              breakdown={row.breakdown}
              ignored={ignoredBreakdownTypes}
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
        {data.type !== "PI" && (
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

interface ParadigmTableContextProps {
  colVisibility: ColumnVisibility;
  data: ParadigmData;
  showBreakdown?: boolean;
  legacyTranslationFn?: ({
    pronoun,
  }: { pronoun: Pronoun }) => Record<string, string>;
}
