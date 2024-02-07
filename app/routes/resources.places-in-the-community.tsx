import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { PlacesInTheCommunityResource } from "~/components/resources/PlacesInTheCommunity";

export const meta: MetaFunction = () => {
  return [
    { title: "Places in the community" },
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
