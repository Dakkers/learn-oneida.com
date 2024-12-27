"use client";

import {
  Bleed,
  type BleedProps,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Flex,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Notice,
  PlayButton,
  PrimitiveTable,
  PrimitiveTableBody,
  PrimitiveTableCell,
  PrimitiveTableHead,
  PrimitiveTableHeader,
  PrimitiveTableRow,
  TextArray,
  TextInput,
} from "@ukwehuwehneke/ohutsya";
import { Settings } from "lucide-react";
import React from "react";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  type Pronoun,
  pronouns,
} from "@ukwehuwehneke/language-components";
import {
  BreakdownArray,
  BreakdownType,
  standardizeCharacters,
  TextBreakdown,
  TextBreakdownSuffix,
} from "@ukwehuwehneke/language-components";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import _ from "lodash";
import {
  sanitizeIrregularCharacters,
  translatePhrase,
  whisperizeWord,
} from "@ukwehuwehneke/language-components";

import { pronounsPurple } from "@ukwehuwehneke/language-components";

const formSchema = z.object(
  Object.fromEntries(pronouns.map((p) => [p, z.string().nullish()])),
);

const ParadigmTableContext =
  React.createContext<ParadigmTableContextProps | null>(null);

export function ParadigmTable({
  allowedPronouns = [],
  audioFolder,
  bleed = 0,
  columnVisibility = {},
  data,
  isTesting = false,
  translationFn,
}: {
  allowedPronouns?: Pronoun[];
  audioFolder?: string;
  bleed?: BleedProps["mx"];
  columnVisibility?: Partial<ColumnVisibility>;
  data: ParadigmData;
  isTesting?: boolean;
  translationKeys?: Record<string, string>;
  translationFn?: ParadigmTableContextProps["translationFn"];
}) {
  const [colVisibility, setColVisibility] = React.useState({
    pronounOneida: true,
    pronounEnglish: true,
    translation: true,
    ...columnVisibility,
  });
  const [showBreakdown, setShowBreakdown] = React.useState(true);
  const [isCorrect, setIsCorrect] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {},
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    let hasErrors = false;
    for (const key in values) {
      const value = values[key];
      const phraseObj = data.phrases.find((p) => p.pronoun === key);
      if (phraseObj) {
        if (
          !value ||
          sanitizeIrregularCharacters(standardizeCharacters(value)) !==
            sanitizeIrregularCharacters(phraseObj.phrase)
        ) {
          hasErrors = true;
          form.setError(key, {
            message: `Answer: ${phraseObj.phrase}`,
            type: "custom",
          });
        }
      }
    }
    setIsCorrect(!hasErrors);
  }

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
        form,
        isTesting,
        showBreakdown,
        translation: data.translation,
        translationFn,
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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <PrimitiveTable>
              <PrimitiveTableHeader>
                <PrimitiveTableRow>
                  {colVisibility.pronounEnglish && (
                    <PrimitiveTableHead>Pronoun (EN)</PrimitiveTableHead>
                  )}
                  {colVisibility.pronounOneida && (
                    <PrimitiveTableHead>Pronoun</PrimitiveTableHead>
                  )}
                  {isTesting ? (
                    <>
                      {colVisibility.translation && (
                        <PrimitiveTableHead>Translation</PrimitiveTableHead>
                      )}
                      <PrimitiveTableHead>---</PrimitiveTableHead>
                    </>
                  ) : (
                    <>
                      <PrimitiveTableHead>Phrase</PrimitiveTableHead>
                      {colVisibility.translation && (
                        <PrimitiveTableHead>Translation</PrimitiveTableHead>
                      )}
                    </>
                  )}
                </PrimitiveTableRow>
              </PrimitiveTableHeader>
              <PrimitiveTableBody>
                {rowsToShow.map((row, i) => (
                  <TableRowWrapper
                    audioFolder={audioFolder}
                    key={i}
                    row={row}
                    typeFallback={data.type}
                    whispered={data.whispered}
                  />
                ))}
              </PrimitiveTableBody>
            </PrimitiveTable>

            {isTesting && (
              <>
                {form.formState.submitCount > 0 && (
                  <Notice intent={isCorrect ? "positive" : "negative"}>
                    {isCorrect
                      ? "Good job! You answered each prompt correctly."
                      : "There were some mistakes with your answers. Scroll up to take a look."}
                  </Notice>
                )}

                <Flex justify="end">
                  <Button type="submit">Submit</Button>
                </Flex>
              </>
            )}
          </form>
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
  const { colVisibility, showBreakdown } = context;
  const translatedPhrase = translatePhrase(
    context.translation,
    row.pronoun,
    context.translationFn,
  );

  const audioFilenamePronoun =
    typeFallback !== "PB"
      ? row.pronoun
      : row.pronoun === "theyni"
        ? "us"
        : row.pronoun === "soni"
          ? "uni"
          : row.pronoun === "ms"
            ? "2m"
            : row.pronoun === "fs"
              ? "2f"
              : row.pronoun;

  return (
    <PrimitiveTableRow>
      {colVisibility.pronounEnglish && (
        <PrimitiveTableCell>
          <TextArray>{PRONOUN_MAP_EN[row.pronoun]}</TextArray>
        </PrimitiveTableCell>
      )}
      {colVisibility.pronounOneida && (
        <PrimitiveTableCell>
          <TextArray>{PRONOUN_MAP_ONEIDA[row.pronoun]}</TextArray>
        </PrimitiveTableCell>
      )}
      {context.isTesting ? (
        <>
          {colVisibility.translation && (
            <PrimitiveTableCell>
              <TextArray>{translatedPhrase}</TextArray>
            </PrimitiveTableCell>
          )}
          <PrimitiveTableCell>
            <FormField
              control={context.form.control}
              name={row.pronoun}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <TextInput
                      placeholder="Type here..."
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </PrimitiveTableCell>
        </>
      ) : (
        <>
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
        </>
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
  const { colVisibility, isTesting, showBreakdown } = context;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Settings className="print:hidden" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={() => toggleColumn("pronounEnglish")}>
          {colVisibility.pronounEnglish
            ? "Hide Pronoun (EN) column"
            : "Show Pronoun (EN) column"}
        </DropdownMenuItem>
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
        {!isTesting && (
          <DropdownMenuItem onClick={() => toggleBreakdown(!showBreakdown)}>
            {showBreakdown ? "Hide text colors" : "Show text colors"}
          </DropdownMenuItem>
        )}
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
  phrases: Row[];
  translation: string;
  type?: BreakdownType;
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
  // @ts-expect-error To be addressed in LO-15
  form: SpecialFormType;
  isTesting?: boolean;
  showBreakdown?: boolean;
  translation: string;
  translationFn?: ({ pronoun }: { pronoun: Pronoun }) => Record<string, string>;
}

export function createParadigmData(
  data: Pick<ParadigmData, "translation" | "type" | "whispered"> & {
    phrases: Array<{ breakdown: BreakdownArray }>;
  },
  allowedPronouns?: Pronoun[] | typeof pronounsPurple,
): ParadigmData {
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

    if (allowedPronouns) {
      // @ts-expect-error TODO
      element.pronoun = allowedPronouns[i];
    }
  }

  result.whispered = data.whispered ?? true;

  return result;
}

const getBreakdownTextPart = (part: BreakdownArray[number]) =>
  typeof part === "string" ? part : Array.isArray(part) ? part[0] : part.text;
