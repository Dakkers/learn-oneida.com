import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Text } from "@/design/components/text";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Select } from "@/design/components/select";
import { Button } from "@/design/primitives/button";
import {
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  Pronoun,
  arrayify,
  pronouns,
} from "~/utils";
import { useForm } from "react-hook-form";
import { sanitizeIrregularCharacters } from "~/utils/words";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/design/primitives/form";
import { Input } from "@/design/primitives/input";
import { Notice } from "@/design/components/notice";
import {
  MODULE_6_VERB_TENSE_LIST,
  Module6VerbTense,
  createModule6VerbList,
  createModule6VerbListFlat,
  module6VerbTenseMap,
} from "~/data/module06/activeVerbsList";
import { SectionHeading } from "~/components/SectionHeading";
import {
  MODULE_5_VERB_TENSE_LIST,
  Module5VerbTense,
  createModule5VerbsList,
  createModule5VerbsListFlat,
  module5VerbTenseMap,
} from "~/data/module05";

export const meta: MetaFunction = () => {
  return [
    { title: "Practice Lists of Verbs" },
    {
      name: "description",
      content: "Practice your knowledge of verbs in the Oneida language.",
    },
  ];
};

const tenseMap: Record<Module5VerbTense | Module6VerbTense, string> = {
  ...module5VerbTenseMap,
  ...module6VerbTenseMap,
} as const;

export default function PracticeTenseConjugation() {
  const [selectedVerbList, setSelectedVerbList] = React.useState("m6");
  const [selectedPronoun, setSelectedPronoun] = React.useState("i");
  const [selectedTense, setSelectedTense] = React.useState<
    Module5VerbTense | Module6VerbTense
  >("hab");
  const [hasStarted, setHasStarted] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);

  function onSubmit(values: Record<string, string>) {
    let hasErrors = false;
    for (const key in values) {
      const answer = values[key];
      const result = checkCorrectAnswer(
        key,
        answer ?? "",
        selectedVerbList,
        selectedTense,
        selectedPronoun as Pronoun,
      );
      console.log("check for", key, "---", result);
      if (result) {
        hasErrors = true;
        form.setError(key, {
          message:
            Array.isArray(result) && result.length > 1
              ? `Valid answers: ${result.join(", ")}`
              : `Answer: ${arrayify(result)[0]}`,
          type: "custom",
        });
      }
    }
    setIsCorrect(!hasErrors);
  }

  const tenseOptions = React.useMemo(() => {
    return (
      selectedVerbList === "m5"
        ? MODULE_5_VERB_TENSE_LIST
        : selectedVerbList === "m6"
          ? MODULE_6_VERB_TENSE_LIST
          : []
    ).map((t) => ({
      label: tenseMap[t],
      value: t,
    }));
  }, [selectedVerbList]);

  const pronounsOptions = React.useMemo(() => {
    let result: Pronoun[] = [];
    if (selectedVerbList === "m5") {
      result = selectedTense === "cmd" ? ["u"] : ["i"];
    } else if (selectedVerbList === "m6") {
      result = selectedTense === "cmd" ? ["u", "u2", "yall"] : pronouns;
    }
    return result.map((p) => ({
      label: `${PRONOUN_MAP_ONEIDA[p]} (${PRONOUN_MAP_EN[p]})`,
      value: p,
    }));
  }, [selectedVerbList, selectedTense]);

  const rows = React.useMemo(() => {
    if (selectedVerbList === "m5") {
      return createModule5VerbsList()
        .map((v) => {
          return {
            en: v.en,
            key: v.key,
          };
        })
        .filter(Boolean);
    } else if (selectedVerbList === "m6") {
      return createModule6VerbList().map((v) => {
        return {
          en: v.en,
          key: v.key,
        };
      });
    }
    return [];
  }, [selectedVerbList]);

  const defaultValues = React.useMemo(() => {
    const keys = (
      selectedVerbList === "m5"
        ? createModule5VerbsListFlat()
        : selectedVerbList === "m6"
          ? createModule6VerbListFlat()
          : []
    ).map((v) => v.key);

    return Object.fromEntries(keys.map((k) => [k, ""]));
  }, [selectedVerbList]);

  const form = useForm({
    defaultValues,
  });

  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>Practice Lists of Verbs</SectionHeading>

      <Text>
        Use this page to practice writing a list of verbs from a given module.
        You can pick a specific pronominal and tense to work with too.
      </Text>

      <Flex align="end" gap={2}>
        <Select
          label="Verb List"
          onChange={(value) => {
            setSelectedTense(value === "m5" ? "prs" : "hab");
            setSelectedVerbList(value);
          }}
          options={[
            { label: "Module 5", value: "m5" },
            { label: "Module 6", value: "m6" },
          ]}
          value={selectedVerbList}
        />

        <Select
          label="Tense"
          onChange={(value) =>
            setSelectedTense(value as Module5VerbTense | Module6VerbTense)
          }
          options={tenseOptions}
          value={selectedTense}
        />

        <Select
          label="Pronoun"
          onChange={setSelectedPronoun}
          options={pronounsOptions}
          value={selectedPronoun}
        />

        <Button disabled={hasStarted} onClick={() => setHasStarted(true)}>
          Start
        </Button>
      </Flex>

      {hasStarted && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Flex direction="column" gap={4}>
              <TableWrapper
                columns={[
                  {
                    accessorKey: "en",
                    header: "Word",
                  },
                  {
                    accessorKey: "value",
                    cell(value, row) {
                      return (
                        <FormField
                          control={form.control}
                          name={(row?.key ?? "") as string}
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
                      );
                    },
                    header: "Answer",
                  },
                ]}
                data={rows}
              />

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
            </Flex>
          </form>
        </Form>
      )}
    </Flex>
  );
}

function checkCorrectAnswer(
  key: string,
  answer: string,
  selectedVerbList: string,
  selectedTense: string,
  selectedPronoun: Pronoun,
) {
  if (selectedVerbList === "m5") {
    return checkCorrectAnswerForModule5(
      key,
      answer,
      selectedTense as Module5VerbTense,
      selectedPronoun,
    );
  } else if (selectedVerbList === "m6") {
    const verbDatum = createModule6VerbList().find((v) => v.key === key);
    if (verbDatum) {
      const sanitizedAnswer = sanitizeIrregularCharacters(answer);
      const tenseEntry = verbDatum[selectedTense as Module6VerbTense];
      if (!tenseEntry) {
        return null;
      }

      const correctAnswer = tenseEntry.phrases.find(
        (p) => p.pronoun === selectedPronoun,
      )?.phrase;
      if (
        !answer ||
        !correctAnswer ||
        sanitizedAnswer !== sanitizeIrregularCharacters(correctAnswer)
      ) {
        return correctAnswer;
      }
    }
  }
  return null;
}

function checkCorrectAnswerForModule5(
  key: string,
  answer: string,
  tense: Module5VerbTense,
  selectedPronoun: Pronoun,
) {
  const phraseObj = createModule5VerbsList().find((v) => v.key === key);
  if (phraseObj) {
    const sanitizedAnswer = sanitizeIrregularCharacters(answer);
    const tenseEntry = phraseObj[tense];
    if (!tenseEntry) {
      return null;
    }
    const correctAnswer = tenseEntry.phrases.find(
      (p) => p.pronoun === selectedPronoun,
    )?.phrase;

    if (
      !answer ||
      !correctAnswer ||
      sanitizedAnswer !== sanitizeIrregularCharacters(correctAnswer)
    ) {
      return correctAnswer;
    }
  }
  return null;
}
