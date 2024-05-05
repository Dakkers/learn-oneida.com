import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import { Text } from "@/design/components/text";
import { Link } from "@remix-run/react";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Select } from "@/design/components/select";
import { Button } from "@/design/primitives/button";
import { PRONOUN_MAP_EN, PRONOUN_MAP_ONEIDA, Pronoun, pronouns } from "~/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { activeVerbsList } from "~/data/module06/activeVerbsList";

export const meta: MetaFunction = () => {
  return [
    { title: "Tenses Conjugation for Active Verbs" },
    {
      name: "description",
      content:
        "Practice your knowledge and understanding of tenses for active verbs in the Oneida language.",
    },
  ];
};

const TENSE_LIST = ["hab", "def", "fut", "ifut", "cmd", "pfv"] as const;
type Tense = (typeof TENSE_LIST)[number];

const tenseMap = {
  cmd: "Command",
  fut: "Future",
  ifut: "Indefinite",
  def: "Definite",
  pfv: "Perfective",
  hab: "Habitual",
} as const;

const formSchema = z.object(
  Object.fromEntries(TENSE_LIST.map((tense) => [tense, z.string().nullish()])),
);

export default function PracticeTenseConjugation() {
  const verbOptions = React.useMemo(
    () =>
      activeVerbsList.map((datum) => ({
        label: datum.en,
        value: datum.key,
      })),
    [],
  );
  const pronounOptions = React.useMemo(
    () =>
      pronouns.map((pronoun) => ({
        label: `${PRONOUN_MAP_ONEIDA[pronoun]} (${PRONOUN_MAP_EN[pronoun]})`,
        value: pronoun,
      })),
    [],
  );

  const [word, setWord] = React.useState("answer");
  const [pronoun, setPronoun] = React.useState("i");
  const [hasStarted, setHasStarted] = React.useState(false);
  const [isCorrect, setIsCorrect] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {},
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    let hasErrors = false;
    for (const key in values) {
      const answer = values[key];
      const result = checkCorrectAnswer(
        answer ?? "",
        word,
        pronoun as Pronoun,
        key as Tense,
      );
      if (result) {
        hasErrors = true;
        form.setError(key, {
          message: `Answer: ${result}`,
          type: "custom",
        });
      }
    }
    setIsCorrect(!hasErrors);
  }

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Tense Conjugation for Active Verbs
      </Heading>

      <Text>
        Use this page to practice conjugating the different tenses for a given
        active verb. These words come from{" "}
        <Link className="text-blue-600 underline" to="/learn/module06">
          module 6
        </Link>
        .
      </Text>

      <Flex align="end" gap={2}>
        <Select
          label="Word"
          onChange={(value) => {
            setWord(value);
            setHasStarted(false);
          }}
          options={verbOptions}
          value={word}
        />

        <Select
          label="Pronoun"
          onChange={(value) => {
            setPronoun(value);
            setHasStarted(false);
          }}
          options={pronounOptions}
          value={pronoun}
        />

        <Button
          disabled={!word || hasStarted}
          onClick={() => {
            setHasStarted(true);
          }}
        >
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
                    accessorKey: "tense",
                    cell(value: Tense) {
                      return <Text>{tenseMap[value]}</Text>;
                    },
                    header: "Tense",
                  },
                  {
                    accessorKey: "value",
                    cell(value, row) {
                      return (
                        <FormField
                          control={form.control}
                          name={(row?.tense ?? "") as string}
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
                data={TENSE_LIST.filter((tense) =>
                  tense === "cmd"
                    ? ["u", "u2", "yall"].includes(pronoun)
                    : true,
                ).map((tense) => ({
                  tense,
                  value: "",
                }))}
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
  answer: string,
  word: string,
  pronoun: Pronoun,
  tense: Tense,
) {
  const verbDatum = activeVerbsList.find((v) => v.key === word);
  if (!verbDatum) {
    return null;
  }

  const sanitizedAnswer = sanitizeIrregularCharacters(answer);
  const tenseEntry = verbDatum[tense];
  const correctAnswer = tenseEntry.phrases.find(
    (p) => p.pronoun === pronoun,
  )?.phrase;

  if (
    !answer ||
    !correctAnswer ||
    sanitizedAnswer !== sanitizeIrregularCharacters(correctAnswer)
  ) {
    return correctAnswer;
  }
}
