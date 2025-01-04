"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import { MatchingGamePage } from "~/components/practice/MatchingGamePage";
import { getDaysOfWeekData } from "@/data/module04";

const meta: any = () => {
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

      <MatchingGamePage data={getDaysOfWeekData().days} />
    </Flex>
  );
}
