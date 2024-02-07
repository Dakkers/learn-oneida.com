import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { PlacesInTheCommunityResource } from "~/components/resources/PlacesInTheCommunity";

export const meta: MetaFunction = () => {
  return [
    { title: "PlacesInTheCommunity" },
    {
      name: "description",
      content: "Places in the community in Oneida",
    },
  ];
};

export default function ResourcesPlacesInTheCommunity() {
  return (
    <div>
      <PlacesInTheCommunityResource />
    </div>
  );
}
