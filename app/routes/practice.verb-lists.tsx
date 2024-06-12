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
  translatePhrase,
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
} from "~/data/module06/activeVerbsList";
import { SectionHeading } from "~/components/SectionHeading";
import { module5VerbsList } from "~/data/module05";
import {
  MODULE_4_TENSE_LIST,
  Module4VerbTense,
  createModule4Data,
} from "~/data/module04";

export const meta: MetaFunction = () => {
  return [
    { title: "Practice Lists of Verbs" },
    {
      name: "description",
      content: "Practice your knowledge of verbs in the Oneida language.",
    },
  ];
};

const TENSE_LIST_M5 = ["present", "past", "fut", "ifut", "cmd"] as const;
type TenseM5 = (typeof TENSE_LIST_M5)[number];

const tenseMap: Record<Module4VerbTense | TenseM5 | Module6VerbTense, string> =
  {
    cmd: "Command",
    fut: "Future",
    ifut: "Indefinite",
    def: "Definite",
    pfv: "Perfective",
    hab: "Habitual",
    prs: "Present",
    present: "Present",
    past: "Past",
  } as const;

export default function PracticeTenseConjugation() {
  const [selectedVerbList, setSelectedVerbList] = React.useState("m6");
  const [selectedPronoun, setSelectedPronoun] = React.useState<Pronoun>("i");
  const [selectedTense, setSelectedTense] = React.useState<
    Module4VerbTense | TenseM5 | Module6VerbTense
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
      selectedVerbList === "m4"
        ? MODULE_4_TENSE_LIST
        : selectedVerbList === "m5"
          ? TENSE_LIST_M5
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
    if (selectedVerbList === "m4") {
      result = pronouns;
    } else if (selectedVerbList === "m5") {
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
    if (selectedVerbList === "m4") {
      return createModule4Data()
        .filter((v) => v.tense === (selectedTense as Module4VerbTense))
        .map((v) => ({
          en: translatePhrase(v.data.translation, selectedPronoun),
          key: v.key,
        }));
    } else if (selectedVerbList === "m5") {
      return module5VerbsList.map((v) => {
        const tenseEntry = v[selectedTense as TenseM5];
        const english = Array.isArray(tenseEntry)
          ? v.en
          : "items" in tenseEntry
            ? tenseEntry.items[0].en
            : tenseEntry.en;
        return {
          en: english,
          key: v.key,
        };
      });
    } else if (selectedVerbList === "m6") {
      return createModule6VerbList().map((v) => {
        return {
          en: translatePhrase(
            v[selectedTense as Module6VerbTense]!.translation,
            selectedPronoun,
          ),
          key: v.key,
        };
      });
    }
    return [];
  }, [selectedVerbList, selectedTense, selectedPronoun]);

  const defaultValues = React.useMemo(() => {
    const keys = (
      selectedVerbList === "m4"
        ? createModule4Data()
        : selectedVerbList === "m5"
          ? module5VerbsList
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

      <Flex direction="column" gap={2}>
        <Select
          label="Verb List"
          onChange={(value) => {
            setSelectedTense(
              value === "m4" ? "prs" : value === "m5" ? "present" : "hab",
            );
            setSelectedVerbList(value);
          }}
          options={[
            { label: "Module 4", value: "m4" },
            { label: "Module 5", value: "m5" },
            { label: "Module 6", value: "m6" },
          ]}
          value={selectedVerbList}
        />

        <Select
          label="Tense"
          onChange={(value) =>
            setSelectedTense(value as TenseM5 | Module6VerbTense)
          }
          options={tenseOptions}
          value={selectedTense}
        />

        <Select
          label="Pronoun"
          onChange={(val) => setSelectedPronoun(val as Pronoun)}
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
    return checkCorrectAnswerForModule5(key, answer, selectedTense as TenseM5);
  } else if (selectedVerbList === "m4") {
    return checkCorrectAnswerForModule4(key, answer, selectedPronoun);
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
  tense: TenseM5,
) {
  const phraseObj = module5VerbsList.find((v) => v.key === key);
  if (phraseObj) {
    const sanitizedAnswer = sanitizeIrregularCharacters(answer);
    const tenseEntry = phraseObj[tense];
    const answersToCheck = Array.isArray(tenseEntry)
      ? [tenseEntry.join("")]
      : "items" in tenseEntry
        ? tenseEntry.items.map((item) => item.on.join(""))
        : [tenseEntry.on.join("")];

    if (
      !answer ||
      !answersToCheck.find(
        (correctAnswer) =>
          sanitizedAnswer === sanitizeIrregularCharacters(correctAnswer),
      )
    ) {
      return answersToCheck;
    }
  }
  return null;
}

function checkCorrectAnswerForModule4(
  key: string,
  answer: string,
  selectedPronoun: Pronoun,
) {
  const sanitizedAnswer = sanitizeIrregularCharacters(answer);
  const data = createModule4Data();
  const datum = data.find((v) => v.key === key);
  if (datum) {
    const correctAnswer = datum.data.phrases.find(
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
