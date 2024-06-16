import { Flex } from "@/design/components/flex";

import React from "react";
import { Heading } from "@/design/components/heading";
import { MatchingGamePage } from "~/components/practice/MatchingGamePage";
import { DATA_DAYS_OF_WEEK } from "~/components/articles/DaysOfTheWeek";

export const meta: any = () => {
  return [
    { title: "Days of the week" },
    {
      name: "description",
      content: "Match the Oneida words with the English words.",
    },
  ];
};

export default function PracticeDaysOfTheWeek() {
  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Days of the Week
      </Heading>

      <MatchingGamePage data={DATA_DAYS_OF_WEEK} />
    </Flex>
  );
}
