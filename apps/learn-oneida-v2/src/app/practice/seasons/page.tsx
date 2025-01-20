import React from "react";
import { DATA_SEASONS } from "~/components/articles/Seasons";
import { Flower2Icon, LeafIcon, SnowflakeIcon, SunIcon } from "lucide-react";
import { MatchingGamePage } from "~/components/practice/MatchingGamePage";
import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";
import { SectionHeading } from "@ukwehuwehneke/language-components";

export const metadata: Metadata = {
  title: "Seasons",
  description: "Match the Oneida words with the English words.",
};

export default function PracticeSeasons() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Seasons</SectionHeading>

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
