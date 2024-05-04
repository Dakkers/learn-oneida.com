import { Button } from "@/design/primitives/button";
import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React, { useMemo } from "react";
import dataAttokhaJson from "../data/attokha";
import dataEhsaksJson from "../data/ehsak";
import dataΛtoleJson from "../data/ʌtole";
import dataItluJson from "../data/itlu";
import dataOtshyusJson from "../data/otshyus";
import dataLikeRedJson from "../data/nuwehse-red";

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
import dataWant from "../data/module04/want";
import dataDontWant from "../data/module04/dont-want";
import dataUsedToWant from "../data/module04/used-to-want";
import dataDidntUsedToWant from "../data/module04/didnt-used-to-want";
import dataThought from "../data/module04/thought";

import { ParadigmData, ParadigmTable } from "~/components/ParadigmTable";
import {
  Pronoun,
  dualicPronouns,
  pluralPronouns,
  singlePronouns,
} from "~/utils";
import sample from "lodash/sample";
import { Select } from "@/design/components/select";
import { SectionHeading } from "~/components/SectionHeading";
import {
  ACTIVE_VERB_TENSE_LIST,
  activeVerbTenseMap,
  activeVerbsList,
} from "~/data/module06/activeVerbsList";
import _ from "lodash";

export const meta: MetaFunction = () => {
  return [
    { title: "Paradigm Tester" },
    {
      name: "description",
      content: "Test a root word's paradigm!",
    },
  ];
};

export default function ToolsParadigm() {
  const module4Options: Array<[string, ParadigmData, string]> = useMemo(
    () => [
      ["is-here", dataIsHere, "is here"],
      ["was-here", dataWasHere, "was here"],
      ["will-be-here", dataWillBeHere, "will be here"],
      ["might-be-here", dataMightBeHere, "might be here"],
      ["is-not-here", dataIsNotHere, "is not here"],
      ["was-not-here", dataWasNotHere, "was not here"],
      ["will-not-be-here", dataWillNotBeHere, "will not be here"],
      ["is-there", dataIsThere, "is there"],
      ["will-be-there", dataWillBeThere, "will be there"],
      ["was-there", dataWasThere, "was there"],
      ["might-be-there", dataMightBeThere, "might be there"],
      ["is-not-there", dataIsNotThere, "is not there"],
      ["was-not-there", dataWasNotThere, "was not there"],
      ["will-not-be-there", dataWillNotBeThere, "will not be there"],
      ["is-at-home", dataIsAtHome, "is at home"],
      ["was-at-home", dataWasAtHome, "was at home"],
      ["will-be-at-home", dataWillBeAtHome, "will be at home"],
      ["might-be-at-home", dataMightBeAtHome, "might be at home"],
      ["is-not-at-home", dataIsNotAtHome, "is not at home"],
      ["was-not-at-home", dataWasNotAtHome, "was not at home"],
      ["will-not-be-at-home", dataWillNotBeAtHome, "will not be at home"],
      ["lives-there", dataLivesThere, "lives there"],
      ["used-to-live-there", dataUsedToLiveThere, "used to live there"],
      ["will-live-there", dataWillLiveThere, "will live there"],
      ["might-live-there", dataMightLiveThere, "might live there"],
      ["doesnt-live-there", dataDoesntLiveThere, "doesn't live there"],
      [
        "didnt-used-to-live-there",
        dataDidntUsedToLiveThere,
        "didn't used to live there",
      ],
      ["will-not-live-there", dataWillNotLiveThere, "will not live there"],
      ["want", dataWant, "want"],
      ["dont-want", dataDontWant, "don't want"],
      ["used-to-want", dataUsedToWant, "used to want"],
      ["didnt-used-to-want", dataDidntUsedToWant, "didn't used to want"],
      ["thought", dataThought, "thought"],
    ],
    [],
  );

  const dataToUse = Object.fromEntries([
    ["attokha", dataAttokhaJson],
    ["ehsaks", dataEhsaksJson],
    ["i_tlu", dataItluJson],
    ["like-red", dataLikeRedJson],
    ["otshyus", dataOtshyusJson],
    ["ʌtole", dataΛtoleJson],
    ...(_.flatten(
      activeVerbsList.map((v) =>
        ACTIVE_VERB_TENSE_LIST.map((tense) => [`${v.key}-${tense}`, v[tense]]),
      ),
    ) as Array<[string, ParadigmData]>),
    ...module4Options.map((item) => [item[0], item[1]]),
  ]);

  const translatorFns = {
    i_tlu: ({ pronoun }: { pronoun: Pronoun }) => ({
      verb: ["it", "m", "f"].includes(pronoun) ? "resides" : "reside",
    }),
    "like-red": ({ pronoun }: { pronoun: Pronoun }) => ({
      verb: ["it", "m", "f"].includes(pronoun) ? "likes" : "like",
    }),
  } as const;

  const [word, setWord] = React.useState<keyof typeof dataToUse>("like-red");
  const [paradigm, setParadigm] = React.useState("all");
  const [hasStarted, setHasStarted] = React.useState(false);
  const [allowedPronouns, setAllowedPronouns] = React.useState<Pronoun[]>([]);

  const wordOptions = useMemo(
    () =>
      [
        { label: "be hard to please", value: "ʌtole" },
        { label: "be wise", value: "attokha" },
        { label: "like (something)", value: "like-red" },
        { label: "look for (something)", value: "ehsaks" },
        { label: "pull someting out", value: "otshyus" },
        { label: "reside some place", value: "i_tlu" },
        ..._.flattenDeep(
          activeVerbsList.map((datum) =>
            ACTIVE_VERB_TENSE_LIST.map((tense) => ({
              label: `${datum.en} (${activeVerbTenseMap[tense]})`,
              value: `${datum.key}-${tense}`,
            })),
          ),
        ),
        ...module4Options.map((item) => ({ label: item[2], value: item[0] })),
      ].sort((opt1, opt2) => opt1.label.localeCompare(opt2.label)),
    [module4Options],
  );

  return (
    <div>
      <SectionHeading level={1}>Paradigm Tester</SectionHeading>

      <Flex align="end" gap={2}>
        <Select
          label="Word"
          onChange={(value) => {
            setWord(value as keyof typeof dataToUse);
            setHasStarted(false);
          }}
          options={wordOptions}
          // @ts-expect-error TODO: fix this type error
          value={word}
        />

        <Select
          label="Type"
          onChange={(value) => {
            setParadigm(value);
            setHasStarted(false);
          }}
          options={[
            { label: "All", value: "all" },
            { label: "Singles only", value: "singles" },
            { label: "Dualics only", value: "dualics" },
            { label: "Plurals only", value: "plurals" },
            { label: "One of each", value: "one" },
          ]}
          value={paradigm}
        />

        <Button
          disabled={!word || hasStarted}
          onClick={() => {
            setAllowedPronouns(
              paradigm === "all"
                ? []
                : paradigm === "singles"
                  ? singlePronouns
                  : paradigm === "dualics"
                    ? dualicPronouns
                    : paradigm === "plurals"
                      ? pluralPronouns
                      : paradigm === "one"
                        ? ([
                            sample(singlePronouns),
                            sample(dualicPronouns),
                            sample(pluralPronouns),
                          ] as Pronoun[])
                        : [],
            );
            setHasStarted(true);
          }}
        >
          Start
        </Button>
      </Flex>

      {hasStarted && (
        <ParadigmTable
          allowedPronouns={allowedPronouns}
          columnVisibility={{
            pronounEnglish: false,
          }}
          data={dataToUse[word]}
          isTesting
          // @ts-expect-error To be addressed in LO-20
          translationFn={translatorFns[word]}
        />
      )}
    </div>
  );
}
