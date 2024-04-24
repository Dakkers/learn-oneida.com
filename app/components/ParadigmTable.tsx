import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/design/primitives/dropdown-menu";
import { Flex } from "@/design/components/flex";
import { Input } from "@/design/primitives/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/design/primitives/table";
import { Settings } from "lucide-react";
import React from "react";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  Pronoun,
  pronouns,
  translatePhrase,
} from "~/utils";
import {
  BreakdownArray,
  BreakdownType,
  TextBreakdown,
  TextBreakdownSuffix,
} from "./TextBreakdown";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/design/primitives/form";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/design/primitives/button";
import { Notice } from "@/design/components/notice";
import _ from "lodash";
import { sanitizeIrregularCharacters, whisperizeWord } from "~/utils/words";

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
          sanitizeIrregularCharacters(value) !==
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
      <div>
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
                  <TableRowWrapper
                    key={i}
                    row={row}
                    typeFallback={data.type}
                    whispered={data.whispered}
                  />
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
  suffix,
  typeFallback,
  whispered = false,
}: {
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
    context.translationFn
  );

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
                suffix={suffix}
                typeFallback={typeFallback}
                whispered={row.whispered ?? whispered ?? false}
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
  allowedPronouns?: Pronoun[]
): ParadigmData {
  const result = _.cloneDeep(data) as ParadigmData;
  for (let i = 0; i < result.phrases.length; i++) {
    const element = result.phrases[i];
    const endIndex = element.breakdown.length - 1;
    if (element.whispered ?? data.whispered ?? true) {
      const lastElement = element.breakdown[endIndex];
      const lastPartOfBreakdown = getBreakdownTextPart(
        getBreakdownTextPart(lastElement)
      );
      const lastPartWhispered = whisperizeWord(lastPartOfBreakdown);
      element.breakdown[endIndex] =
        typeof lastElement === "string"
          ? lastPartWhispered
          : {
              text: lastPartWhispered,
              type: Array.isArray(lastElement)
                ? lastElement[1]
                : lastElement.type ?? undefined,
            };
    }

    element.phrase = element.breakdown
      .map((part) => getBreakdownTextPart(part))
      .join("");

    if (allowedPronouns) {
      element.pronoun = allowedPronouns[i];
    }
  }

  result.whispered = data.whispered ?? true;

  return result;
}

const getBreakdownTextPart = (part: BreakdownArray[number]) =>
  typeof part === "string" ? part : Array.isArray(part) ? part[0] : part.text;
