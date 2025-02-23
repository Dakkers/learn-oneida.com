"use client";
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
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Cardinal Directions",
//   description: "Match the Oneida words with the English words.",
// };

export const runtime = "edge";

export default function PracticeCardinalDirections() {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}
