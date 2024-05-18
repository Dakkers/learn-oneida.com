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
import { TableAsForm } from "~/components/practice/TableAsForm";
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
