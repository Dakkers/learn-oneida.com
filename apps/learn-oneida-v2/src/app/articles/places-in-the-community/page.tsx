import React from "react";
import { PlacesInTheCommunityArticle } from "@ukwehuwehneke/language-components";
import DATA_PLACES_IN_COMMUNITY from "@/data/module04/places-in-the-community";

import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Places in the community",
  description: "Places in the community in Oneida",
};

export const runtime = "edge";

export default function ArticlesPlacesInTheCommunity() {
  return (
    <PageWrapper>
      <PlacesInTheCommunityArticle data={DATA_PLACES_IN_COMMUNITY} />
    </PageWrapper>
  );
}
