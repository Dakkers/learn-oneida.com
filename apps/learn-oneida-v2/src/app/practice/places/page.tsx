"use client";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React from "react";
import { Heading } from "@ukwehuwehneke/ohutsya";
import {
  EnglishToOneidaQuiz,
  type EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";
import { arrayify } from "@ukwehuwehneke/language-components";
import DATA_PLACES_IN_COMMUNITY from "@/data/module04/places-in-the-community";

const meta: any = () => {
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
    ].includes(datum.key),
);

export default function PracticePlaces() {
  const [englishOptions, oneidaOptions]: [
    EnglishToOneidaQuizProps["englishOptions"],
    EnglishToOneidaQuizProps["oneidaOptions"],
  ] = React.useMemo(() => {
    const resultEn = [];
    const resultOn = [];

    for (const datum of DATA) {
      resultEn.push({ key: datum.key, text: datum.en });
      resultOn.push({ key: datum.key, text: arrayify(datum.translation)[0] });
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Practice your knowledge of places in the community
      </Heading>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        oneidaOptions={oneidaOptions}
      />
    </Flex>
  );
}
