import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import {
  bodyTenseData,
  characterTenseData,
  emotionTenseData,
  mindTenseData,
  miscTenseData,
  physicalTenseData,
} from "~/data/module05";
import { Text } from "@/design/components/text";
import { Link } from "@remix-run/react";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Select } from "@/design/components/select";
import { Button } from "@/design/primitives/button";
import { arrayify } from "~/utils";
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

export const meta: MetaFunction = () => {
  return [
    { title: "Tenses practice" },
    {
      name: "description",
      content:
        "Practice your knowledge and understanding of tenses in the Oneida language.",
    },
  ];
};

const TENSE_LIST = ["present", "past", "fut", "ifut", "cmd"] as const;
type Tense = (typeof TENSE_LIST)[number];

const DATA_FULL_LIST = [
  ...characterTenseData,
  ...bodyTenseData,
  ...mindTenseData,
  ...miscTenseData,
  ...emotionTenseData,
  ...physicalTenseData,
];

const tenseMap = {
  cmd: "Command",
  fut: "Future",
  ifut: "Indefinite Future",
  past: "Past",
  present: "Present",
} as const;

const formSchema = z.object(
  Object.fromEntries(TENSE_LIST.map((tense) => [tense, z.string().nullish()]))
);

export default function PracticeTenseConjugation() {
  const options = React.useMemo(
    () =>
      DATA_FULL_LIST.map((datum, i) => ({
        label: `${arrayify(datum.root)[0]} (${datum.en})`,
        value: i.toString(),
      })),
    []
  );

  const [word, setWord] = React.useState("0");
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
        parseInt(word),
        key as Tense
      );
      if (result) {
        hasErrors = true;
        form.setError(key, {
          message:
            result.length > 1
              ? `Valid answers: ${result.join(", ")}`
              : `Answer: ${result[0]}`,
          type: "custom",
        });
      }
    }
    setIsCorrect(!hasErrors);
  }

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Tense Conjugation
      </Heading>

      <Text>
        Use this page to practice conjugating the different tenses for a given
        verb. These words come from{" "}
        <Link className="text-blue-600 underline" to="/learn/module05">
          module 5
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
          options={options}
          value={word}
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
                data={TENSE_LIST.map((tense) => ({
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
  selectedWordIndex: number,
  tense: Tense
) {
  const phraseObj = DATA_FULL_LIST[selectedWordIndex];
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
          sanitizedAnswer === sanitizeIrregularCharacters(correctAnswer)
      )
    ) {
      return answersToCheck;
    }
  }
  return null;
}
