import { Bleed, BleedProps } from "@/design/components/Bleed";
import { Flex } from "@/design/components/flex";
import { Notice } from "@/design/components/notice";
import { TableWrapper } from "@/design/components/tableWrapper";
import { Text } from "@/design/components/text";
import { Button } from "@/design/primitives/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/design/primitives/form";
import { Input } from "@/design/primitives/input";
import { Link } from "@/design/primitives/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { MetaFunction } from "@remix-run/cloudflare";
import { shuffle } from "lodash";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { AnyZodObject, z } from "zod";
import { SectionHeading } from "~/components/SectionHeading";
import { createCountingTimeData } from "~/components/articles/CountingTime";
import { sanitizeIrregularCharacters } from "~/utils/words";

export const meta: MetaFunction = () => {
  return [
    { title: "Practice Counting Time" },
    {
      name: "description",
      content: "Test your Oneida knowledge on counting lengths of time!",
    },
  ];
};

export default function PracticeMonths() {
  const rows = useMemo(() => {
    const [firstTable, secondTable] = createCountingTimeData();
    const result = [];
    for (const item of firstTable) {
      for (const key of ["minutes", "hours", "days", "nights"] as const) {
        result.push({
          en: `${item.num} ${item.num === 1 ? key.slice(0, key.length - 1) : key}`,
          key: `${key}_${item.num}`,
          on: item[key],
        });
      }
    }
    for (const item of secondTable) {
      for (const key of ["weeks", "months", "years"] as const) {
        result.push({
          en: `${item.num} ${item.num === 1 ? key.slice(0, key.length - 1) : key}`,
          key: `${key}_${item.num}`,
          on: item[key],
        });
      }
    }
    return shuffle(result);
  }, []);

  const formSchema = useMemo(() => {
    return z.object(
      Object.fromEntries(rows.map((r) => [r.key, z.string().optional()])),
    );
  }, [rows]);

  const [hasStarted, setHasStarted] = useState(false);

  return (
    <>
      <SectionHeading level={1}>Practice counting time</SectionHeading>
      <Text>
        Here you can practice the terminology on the{" "}
        <Link href="/articles/counting-time">Counting Time article</Link> which
        is part of <Link href="/learn/module04">Module 4</Link>.
      </Text>

      {hasStarted ? (
        <TableAsForm
          checkCorrectness={(key, val) => {
            const obj = rows.find((r) => r.key === key);
            if (obj) {
              if (
                !val ||
                sanitizeIrregularCharacters(val) !==
                  sanitizeIrregularCharacters(obj.on)
              ) {
                return `Answer: ${obj.on}`;
              }
            }
          }}
          formSchema={formSchema}
          rows={rows}
        />
      ) : (
        <Flex align="end" gap={2}>
          <Button disabled={hasStarted} onClick={() => setHasStarted(true)}>
            Start
          </Button>
        </Flex>
      )}
    </>
  );
}

export function TableAsForm({
  bleed = 0,
  checkCorrectness,
  formSchema,
  rows,
}: {
  bleed?: BleedProps["mx"];
  checkCorrectness: (key: string, val: string) => string | null | undefined;
  formSchema: AnyZodObject;
  rows: Array<{ en: string; key: string; on: string }>;
}) {
  const [isCorrect, setIsCorrect] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {},
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    let hasErrors = false;
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
    }
    setIsCorrect(!hasErrors);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
              cell: (val: string) => (
                <FormField
                  control={form.control}
                  name={val}
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
      </form>
    </Form>
  );
}
