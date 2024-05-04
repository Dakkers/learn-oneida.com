import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import { DATA_SEASONS } from "~/components/articles/Seasons";
import { Flower2Icon, LeafIcon, SnowflakeIcon, SunIcon } from "lucide-react";
import { MatchingGamePage } from "~/components/practice/MatchingGamePage";

export const meta: MetaFunction = () => {
  return [
    { title: "Seasons" },
    {
      name: "description",
      content: "Match the Oneida words with the English words.",
    },
  ];
};

export default function PracticeSeasons() {
  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Seasons
      </Heading>

      <MatchingGamePage
        data={DATA_SEASONS}
        getIcon={(key) =>
          key === "spring"
            ? Flower2Icon
            : key === "summer"
              ? SunIcon
              : key === "fall"
                ? LeafIcon
                : key === "winter"
                  ? SnowflakeIcon
                  : undefined
        }
      />
    </Flex>
  );
}
