import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import { DATA_PLACES_IN_COMMUNITY } from "~/components/resources/PlacesInTheCommunity";
import { QuizPage } from "~/components/practice/QuizPage";

export const meta: MetaFunction = () => {
  return [
    { title: "Places in the community" },
    {
      name: "description",
      content: "Quiz your Oneida knowledge by picking the right translation!",
    },
  ];
};

const DATA = DATA_PLACES_IN_COMMUNITY.filter(
  (datum) =>
    ![
      "band_office",
      "community_centre",
      "health_centre",
      "longhouse",
      "drivein",
      "political_office",
      "radio_station",
      "reserve",
    ].includes(datum.key)
);

export default function PracticePlaces() {
  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Places in the community
      </Heading>

      <QuizPage data={DATA} />
    </Flex>
  );
}
