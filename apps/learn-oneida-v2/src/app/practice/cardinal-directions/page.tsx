"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import {
  MoveDownIcon,
  MoveLeftIcon,
  MoveRightIcon,
  MoveUpIcon,
} from "lucide-react";
import { DATA_CARDINAL_DIRECTIONS } from "~/components/articles/CardinalDirections";
import { MatchingGamePage } from "~/components/practice/MatchingGamePage";

const meta: any = () => {
  return [
    { title: "Cardinal Directions" },
    {
      name: "description",
      content: "Match the Oneida words with the English words.",
    },
  ];
};

export default function PracticeCardinalDirections() {
  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Cardinal Directions
      </Heading>

      <MatchingGamePage
        data={DATA_CARDINAL_DIRECTIONS}
        getIcon={(key) =>
          key === "north"
            ? MoveUpIcon
            : key === "east"
              ? MoveRightIcon
              : key === "south"
                ? MoveDownIcon
                : key === "west"
                  ? MoveLeftIcon
                  : undefined
        }
      />
    </Flex>
  );
}
