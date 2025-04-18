"use client";
import type { BleedProps } from "@ukwehuwehneke/ohutsya";
import { Flex, trackEvent } from "@ukwehuwehneke/ohutsya";
import { Notice } from "@ukwehuwehneke/ohutsya";
import { TableWrapper } from "@/components/TableWrapper";
import { Button } from "@ukwehuwehneke/ohutsya";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@ukwehuwehneke/ohutsya";
import { TextInput } from "@ukwehuwehneke/ohutsya";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { AnyZodObject, z } from "zod";
import {
  sanitizeIrregularCharacters,
  standardizeCharacters,
} from "@ukwehuwehneke/language-components";

type FormRow = Record<string, unknown> & {
  en: string | string[];
  key: string;
  on: string;
};

export function TableAsForm({
  bleed = {
    xs: 0,
    md: 16,
    lg: 32,
  },
  checkCorrectness,
  eventData,
  eventCategory,
  formSchema,
  rows,
}: {
  bleed?: BleedProps["mx"];
  checkCorrectness: (key: string, val: string) => string | null | undefined;
  eventData?: Record<string, unknown>;
  eventCategory?: string;
  formSchema: AnyZodObject;
  rows: Array<FormRow>;
}) {
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctness, setCorrectness] = useState<Record<string, boolean>>({});

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {},
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    let hasErrors = false;
    const correctnessResult: Record<string, boolean> = {};
    for (const key in values) {
      const value = values[key];
      const result = checkCorrectness(key, value);
      if (result) {
        hasErrors = true;
        form.setError(key, {
          message: typeof result === "string" ? result : "Incorrect answer.",
          type: "custom",
        });
      }
      correctnessResult[key] = !result;
    }
    setIsCorrect(!hasErrors);
    setCorrectness(correctnessResult);

    if (eventCategory) {
      trackEvent("Submitted Written Test", {
        ...(eventData ?? {}),
        category: eventCategory,
        numCorrect: Object.values(correctnessResult).filter(
          (isCorrect) => !!isCorrect,
        ).length,
        numQuestions: Object.keys(correctnessResult).length,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Flex direction="column" gap={4}>
          <TableWrapper
            bleed={bleed}
            columns={[
              {
                accessorKey: "en",
                cell: TableWrapper.textArrayCell,
                header: "Question",
              },
              {
                accessorKey: "key",
                // @ts-expect-error TODO - TableWrapper/Table generics
                cell: (key: string, row: FormRow) => (
                  <FormField
                    control={form.control}
                    name={key}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <TextInput
                            intent={
                              !(key in correctness)
                                ? undefined
                                : correctness[key]
                                  ? "positive"
                                  : "negative"
                            }
                            placeholder="Type here..."
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>

                        {correctness[key] ? (
                          <FormMessage className="text-green-600">
                            Answer: {row.on}
                          </FormMessage>
                        ) : (
                          <FormMessage className="text-red-600" />
                        )}
                      </FormItem>
                    )}
                  />
                ),
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
  );
}

TableAsForm.defaultCheckCorrectness = function defaultCheckCorrectness({
  key,
  rows,
  val,
}: {
  difficulty?: "easy" | "medium" | "hard";
  key: string;
  rows: FormRow[];
  val: string;
}) {
  const obj = rows.find((r) => r.key === key);
  if (obj) {
    if (
      !val ||
      sanitizeIrregularCharacters(standardizeCharacters(val)) !==
        sanitizeIrregularCharacters(standardizeCharacters(obj.on))
    ) {
      return `Answer: ${obj.on}`;
    }
  }
};
