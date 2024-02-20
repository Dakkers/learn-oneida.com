import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import { DATA_MONTHS } from "~/components/resources/Months";
import { QuizPage } from "~/components/practice/QuizPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Months" },
    {
      name: "description",
      content: "Match the Oneida words with the English words.",
    },
  ];
};

export default function PracticeMonths() {
  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Months
      </Heading>

      <QuizPage data={DATA_MONTHS} />
    </Flex>
  );
}
