"use client";

import React from "react";
import { PlacesInTheCommunityArticle } from "@ukwehuwehneke/language-components";
import DATA_PLACES_IN_COMMUNITY from "@/data/module04/places-in-the-community";

const meta: any = () => {
  return [
    { title: "Places in the community" },
    {
      name: "description",
      content: "Places in the community in Oneida",
    },
  ];
};

export default function ArticlesPlacesInTheCommunity() {
  return (
    <div>
      <PlacesInTheCommunityArticle data={DATA_PLACES_IN_COMMUNITY} />
    </div>
  );
}
