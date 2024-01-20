import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/design/ui/dropdown-menu";
import { Flex } from "@/design/ui/flex";
import { Input } from "@/design/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/design/ui/table";
import { Settings } from "lucide-react";
import React from "react";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  Pronoun,
  pronouns,
  REF_VERB_MAP,
  formatTranslation,
  PRONOUN_MAP_EN_OBJECTIVE,
  REF_VERB_PASTTENSE_MAP,
} from "~/utils";
import { BreakdownType, TextBreakdown } from "./TextBreakdown";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/design/ui/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/design/ui/button";
import { Notice } from "@/design/ui/notice";

const formSchema = z.object(
  Object.fromEntries(pronouns.map((p) => [p, z.string().nullish()]))
);

const ParadigmTableContext =
  React.createContext<ParadigmTableContextProps | null>(null);

export function ParadigmTable({
  allowedPronouns = [],
  columnVisibility = {},
  data,
  isTesting = false,
  translationFn,
}: {
  allowedPronouns?: Pronoun[];
  columnVisibility?: Partial<ColumnVisibility>;
  data: Data;
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
      if (!!phraseObj) {
        if (
          !value ||
          sanitizePhrase(value) !== sanitizePhrase(phraseObj.phrase)
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
      <div>
        <Flex justify="end">
          <SettingsMenu
            toggleColumn={(columnName: keyof ColumnVisibility) =>
              setColVisibility({
                ...colVisibility,
                [columnName]: !colVisibility[columnName],
              })
            }
            toggleBreakdown={setShowBreakdown}
          />
        </Flex>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Table>
              <TableHeader>
                <TableRow>
                  {colVisibility.pronounEnglish && (
                    <TableHead>Pronoun (EN)</TableHead>
                  )}
                  {colVisibility.pronounOneida && (
                    <TableHead>Pronoun</TableHead>
                  )}
                  {isTesting ? (
                    <>
                      {colVisibility.translation && (
                        <TableHead>Translation</TableHead>
                      )}
                      <TableHead>---</TableHead>
                    </>
                  ) : (
                    <>
                      <TableHead>Phrase</TableHead>
                      {colVisibility.translation && (
                        <TableHead>Translation</TableHead>
                      )}
                    </>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rowsToShow.map((row, i) => (
                  <TableRowWrapper key={i} row={row} typeFallback={data.type} />
                ))}
              </TableBody>
            </Table>

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
      </div>
    </ParadigmTableContext.Provider>
  );
}

function TableRowWrapper({
  row,
  typeFallback,
}: {
  row: Row;
  typeFallback?: BreakdownType;
}) {
  const context = React.useContext(ParadigmTableContext);
  if (!context) {
    throw new Error("Missing context");
  }
  const { colVisibility, showBreakdown } = context;
  const translatedPhrase = formatTranslation(context.translation, {
    pronoun: PRONOUN_MAP_EN[row.pronoun],
    pronounObjective: PRONOUN_MAP_EN_OBJECTIVE[row.pronoun],
    refVerb: REF_VERB_MAP[row.pronoun],
    refVerbPast: REF_VERB_PASTTENSE_MAP[row.pronoun],
    ...(context.translationFn
      ? context.translationFn({ pronoun: row.pronoun })
      : {}),
  });

  return (
    <TableRow>
      {colVisibility.pronounEnglish && (
        <TableCell>{PRONOUN_MAP_EN[row.pronoun]}</TableCell>
      )}
      {colVisibility.pronounOneida && (
        <TableCell>{PRONOUN_MAP_ONEIDA[row.pronoun]}</TableCell>
      )}
      {context.isTesting ? (
        <>
          {colVisibility.translation && (
            <TableCell>{translatedPhrase}</TableCell>
          )}
          <TableCell>
            <FormField
              control={context.form.control}
              name={row.pronoun}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Type here..."
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
        </>
      ) : (
        <>
          <TableCell>
            {showBreakdown ? (
              <TextBreakdown
                breakdown={row.breakdown}
                typeFallback={typeFallback}
              />
            ) : (
              row.phrase
            )}
          </TableCell>
          {colVisibility.translation && (
            <TableCell>{translatedPhrase}</TableCell>
          )}
        </>
      )}
    </TableRow>
  );
}

function SettingsMenu({ toggleBreakdown, toggleColumn }) {
  const context = React.useContext(ParadigmTableContext);
  if (!context) {
    throw new Error("Missing context");
  }
  const { colVisibility, isTesting, showBreakdown } = context;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Settings />
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

interface Data {
  phrases: Row[];
  translation: string;
  type?: BreakdownType;
}

interface Row {
  breakdown: Array<
    | string
    | {
        text: string;
        type?: BreakdownType;
      }
  >;
  phrase: string;
  pronoun: Pronoun;
}

interface ParadigmTableContextProps {
  colVisibility: ColumnVisibility;
  isTesting?: boolean;
  showBreakdown?: boolean;
  translation: string;
  translationFn?: ({ pronoun }: { pronoun: Pronoun }) => Record<string, string>;
}

function removeAccents(value: string) {
  return value
    .replaceAll("á", "a")
    .replaceAll("é", "e")
    .replaceAll("í", "i")
    .replaceAll("ó", "o")
    .replaceAll("ú", "u")
    .replaceAll("ʌ́", "ʌ");
}

function removeWhisper(value: string) {
  return value
    .replaceAll("a̲", "a")
    .replaceAll("e̲", "e")
    .replaceAll("i̲", "i")
    .replaceAll("o̲", "o")
    .replaceAll("u̲", "u")
    .replaceAll("ʌ̲", "ʌ")
    .replaceAll("ˍ", "");
}

function removeGlottalStop(value: string) {
  return value.replaceAll("ʔ", "").replaceAll("ʼ", "").replaceAll("'", "");
}

function removeLongStress(value: string) {
  return value.replaceAll("·", "").replaceAll(":", "");
}

function sanitizePhrase(value: string) {
  return [
    removeAccents,
    removeWhisper,
    removeGlottalStop,
    removeLongStress,
  ].reduce((result, fn) => fn(result), value);
}
