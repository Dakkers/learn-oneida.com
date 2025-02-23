"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { Button } from "@ukwehuwehneke/ohutsya";
import { shuffle } from "lodash";
import { useMemo, useState } from "react";
import { z } from "zod";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { createCountingTimeDataLegacy } from "~/components/articles/CountingTime";
import { TableAsForm } from "~/components/practice/TableAsForm";
import { LinkWrapper } from "@/components/LinkWrapper";
import { Link } from "@/components/Link";
import { PageWrapper } from "@/components/PageWrapper";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Practice Counting Time",
//   description: "Test your Oneida knowledge on counting lengths of time!",
// };

export const runtime = "edge";

export default function PracticeCountingTime() {
  const rows = useMemo(() => {
    const [firstTable, secondTable] = createCountingTimeDataLegacy();
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
    <PageWrapper>
      <SectionHeading level={1}>Practice counting time</SectionHeading>
      <Text>
        Here you can practice the terminology on the{" "}
        <Link href="/articles/counting-time">Counting Time article</Link> which
        is part of <LinkWrapper page={4} />.
      </Text>

      {hasStarted ? (
        <TableAsForm
          bleed={0}
          checkCorrectness={(key, val) =>
            TableAsForm.defaultCheckCorrectness({ key, val, rows })
          }
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
    </PageWrapper>
  );
}
