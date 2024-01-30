import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import { DATA_MONTHS } from "~/components/resources/Months";
import {
  AxeIcon,
  BeanIcon,
  CandyCaneIcon,
  CloudRainIcon,
  DrumstickIcon,
  Flower2Icon,
  HeartIcon,
  LeafIcon,
  Snowflake,
  SunIcon,
  Wand2Icon,
  WheatIcon,
} from "lucide-react";
import { MatchingGamePage } from "~/components/practice/MatchingGamePage";

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

      <MatchingGamePage
        data={DATA_MONTHS}
        getIcon={(key) =>
          key === "jan"
            ? Snowflake
            : key === "feb"
            ? HeartIcon
            : key === "mar"
            ? AxeIcon
            : key === "apr"
            ? CloudRainIcon
            : key === "may"
            ? Flower2Icon
            : key === "jun"
            ? SunIcon
            : key === "jul"
            ? BeanIcon
            : key === "aug"
            ? WheatIcon
            : key === "sep"
            ? LeafIcon
            : key === "oct"
            ? Wand2Icon
            : key === "nov"
            ? DrumstickIcon
            : key === "dec"
            ? CandyCaneIcon
            : undefined
        }
      />
    </Flex>
  );
}
