import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import { DATA_SEASONS } from "~/components/articles/Seasons";
import { Flower2Icon, LeafIcon, SnowflakeIcon, SunIcon } from "lucide-react";
import { MatchingGamePage } from "~/components/practice/MatchingGamePage";
import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seasons",
  description: "Match the Oneida words with the English words.",
};

export default function PracticeSeasons() {
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}
