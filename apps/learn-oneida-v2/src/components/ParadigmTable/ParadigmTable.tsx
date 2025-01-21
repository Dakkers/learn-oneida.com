"use client";

import {
  Bleed,
  type BleedProps,
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
import { type ColumnVisibility, SettingsMenu } from "./SettingsMenu";

export interface ParadigmTableProps {
  allowedPronouns?: Pronoun[];
  audioFolder?: string;
  bleed?: BleedProps["mx"];
  columnVisibility?: Partial<ColumnVisibility>;
  data: ParadigmData;
  ignoredBreakdownTypes?: TextBreakdownProps["ignored"];
  legacyTranslationFn?: ({
    pronoun,
  }: { pronoun: Pronoun }) => Record<string, string>;
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
    <>
      <Bleed mx={bleed}>
        <Flex justify="end">
          <SettingsMenu
            colVisibility={colVisibility}
            data={data}
            showBreakdown={showBreakdown}
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
                colVisibility={colVisibility}
                data={data}
                ignoredBreakdownTypes={ignoredBreakdownTypes}
                legacyTranslationFn={legacyTranslationFn}
                key={i}
                row={row}
                showBreakdown={showBreakdown}
                typeFallback={data.type}
                whispered={data.whispered}
              />
            ))}
          </PrimitiveTableBody>
        </PrimitiveTable>
      </Bleed>
    </>
  );
}

function TableRowWrapper({
  audioFolder,
  colVisibility,
  data,
  ignoredBreakdownTypes,
  legacyTranslationFn,
  row,
  showBreakdown,
  typeFallback,
  whispered = false,
}: {
  audioFolder?: string;
  colVisibility: ColumnVisibility;
  data: ParadigmData;
  ignoredBreakdownTypes: TextBreakdownProps["ignored"];
  legacyTranslationFn?: ParadigmTableProps["legacyTranslationFn"];
  row: ParadigmTableRow;
  showBreakdown?: boolean;
  typeFallback?: BreakdownType;
  whispered?: boolean;
}) {
  const translatedPhrase =
    data.type === "PI" && !data.categories?.includes("kinship")
      ? translatePhraseInteractive(
          // @ts-expect-error ParadigmData doesn't support purple correctly :(
          data,
          row.pronoun,
        )
      : translatePhraseV2(data, row.pronoun, legacyTranslationFn);

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
