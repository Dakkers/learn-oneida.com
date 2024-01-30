import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import { MatchingGamePage } from "~/components/practice/MatchingGamePage";
import { DATA_DAYS_OF_WEEK } from "~/components/resources/DaysOfTheWeek";

export const meta: MetaFunction = () => {
  return [
    { title: "Days of the week" },
    {
      name: "description",
      content: "Match the Oneida words with the English words.",
    },
  ];
};

export default function ToolsSeasons() {
  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Days of the Week
      </Heading>

      <MatchingGamePage data={DATA_DAYS_OF_WEEK} />
    </Flex>
  );
}
