import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";

import dataIsHere from "../data/module04/is-here";
import dataWasHere from "../data/module04/was-here";
import dataWillBeHere from "../data/module04/will-be-here";
import dataMightBeHere from "../data/module04/might-be-here";
import dataIsNotHere from "../data/module04/is-not-here";
import dataWasNotHere from "../data/module04/was-not-here";
import dataWillNotBeHere from "../data/module04/will-not-be-here";
import dataIsThere from "../data/module04/is-there";
import dataWillBeThere from "../data/module04/will-be-there";
import dataWasThere from "../data/module04/was-there";
import dataMightBeThere from "../data/module04/might-be-there";
import dataIsNotThere from "../data/module04/is-not-there";
import dataWasNotThere from "../data/module04/was-not-there";
import dataWillNotBeThere from "../data/module04/will-not-be-there";
import dataIsAtHome from "../data/module04/is-at-home";
import dataWasAtHome from "../data/module04/was-at-home";
import dataWillBeAtHome from "../data/module04/will-be-at-home";
import dataMightBeAtHome from "../data/module04/might-be-at-home";
import dataIsNotAtHome from "../data/module04/is-not-at-home";
import dataWasNotAtHome from "../data/module04/was-not-at-home";
import dataWillNotBeAtHome from "../data/module04/will-not-be-at-home";
import dataLivesThere from "../data/module04/lives-there";
import dataUsedToLiveThere from "../data/module04/used-to-live-there";
import dataWillLiveThere from "../data/module04/will-live-there";
import dataMightLiveThere from "../data/module04/might-live-there";
import dataDoesntLiveThere from "../data/module04/doesnt-live-there";
import dataDidntUsedToLiveThere from "../data/module04/didnt-used-to-live-there";
import dataWillNotLiveThere from "../data/module04/will-not-live-there";
import { convertBreakdownToPlainText } from "~/components/TextBreakdown";
import { translatePhrase } from "~/utils";
import { EnglishToOneidaQuiz } from "~/components/practice/EnglishToOneidaQuiz";

export const meta: MetaFunction = () => {
  return [
    { title: "Being somewhere" },
    {
      name: "description",
      content: "Quiz your Oneida knowledge by picking the right translation!",
    },
  ];
};

export default function PracticeBeingSomewhere() {
  const [englishOptions, oneidaOptions] = React.useMemo(() => {
    const resultEn = [];
    const resultOn = [];

    for (const datum of [
      dataIsHere,
      dataWasHere,
      dataWillBeHere,
      dataMightBeHere,
      dataIsNotHere,
      dataWasNotHere,
      dataWillNotBeHere,
      dataIsThere,
      dataWillBeThere,
      dataWasThere,
      dataMightBeThere,
      dataIsNotThere,
      dataWasNotThere,
      dataWillNotBeThere,
      dataIsAtHome,
      dataWasAtHome,
      dataWillBeAtHome,
      dataMightBeAtHome,
      dataIsNotAtHome,
      dataWasNotAtHome,
      dataWillNotBeAtHome,
      dataLivesThere,
      dataUsedToLiveThere,
      dataWillLiveThere,
      dataMightLiveThere,
      dataDoesntLiveThere,
      dataDidntUsedToLiveThere,
      dataWillNotLiveThere,
    ]) {
      for (const phrase of datum.phrases) {
        const key = `${datum.translation}_${phrase.pronoun}`;
        resultEn.push({
          key,
          text: translatePhrase(datum.translation, phrase.pronoun),
        });
        resultOn.push({
          key,
          text: convertBreakdownToPlainText(phrase.breakdown, {
            suffix: datum.suffix,
          }),
        });
      }
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        Practice verbs for: being, living somewhere
      </Heading>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        oneidaOptions={oneidaOptions}
      />
    </Flex>
  );
}
