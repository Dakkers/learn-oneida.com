import { BleedProps } from "@/design/components/Bleed";
import { Flex } from "@/design/components/flex";
import { Notice } from "@/design/components/notice";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Button } from "@/design/primitives/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/design/primitives/form";
import { Input } from "@/design/primitives/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnyZodObject, z } from "zod";

type FormRow = Record<string, unknown> & {
  en: string;
  key: string;
  on: string;
};

export function TableAsForm({
  bleed = 0,
  checkCorrectness,
  formSchema,
  rows,
}: {
  bleed?: BleedProps["mx"];
  checkCorrectness: (key: string, val: string) => string | null | undefined;
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
                cell: TableWrapper.textArrayCellBold,
                header: "Question",
              },
              {
                accessorKey: "key",
                // @ts-expect-error TODO
                cell: (key: string, row: Row) => (
                  <FormField
                    control={form.control}
                    name={key}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            autoComplete="off"
                            className={
                              !(key in correctness)
                                ? undefined
                                : correctness[key]
                                  ? "border-green-600"
                                  : "border-red-600"
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
                          <FormMessage />
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