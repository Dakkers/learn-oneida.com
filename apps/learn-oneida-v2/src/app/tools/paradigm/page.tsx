"use client";
import { Button } from "@ukwehuwehneke/ohutsya";
import { Flex } from "@ukwehuwehneke/ohutsya";

import React, { useMemo, useState } from "react";
import dataAttokhaJson from "~/data/attokha";
import dataEhsaksJson from "~/data/ehsak";
import dataΛtoleJson from "~/data/ʌtole";
import dataItluJson from "~/data/itlu";
import dataPulling from "~/data/module01/pullingOut-HAB";
import dataLikeRedJson from "~/data/nuwehse-red";

import dataIsHere from "~/data/module04/is-here";
import dataWasHere from "~/data/module04/was-here";
import dataWillBeHere from "~/data/module04/will-be-here";
import dataMightBeHere from "~/data/module04/might-be-here";
import dataIsNotHere from "~/data/module04/is-not-here";
import dataWasNotHere from "~/data/module04/was-not-here";
import dataWillNotBeHere from "~/data/module04/will-not-be-here";
import dataIsThere from "~/data/module04/is-there";
import dataWillBeThere from "~/data/module04/will-be-there";
import dataWasThere from "~/data/module04/was-there";
import dataMightBeThere from "~/data/module04/might-be-there";
import dataIsNotThere from "~/data/module04/is-not-there";
import dataWasNotThere from "~/data/module04/was-not-there";
import dataWillNotBeThere from "~/data/module04/will-not-be-there";
import dataIsAtHome from "~/data/module04/is-at-home";
import dataWasAtHome from "~/data/module04/was-at-home";
import dataWillBeAtHome from "~/data/module04/will-be-at-home";
import dataMightBeAtHome from "~/data/module04/might-be-at-home";
import dataIsNotAtHome from "~/data/module04/is-not-at-home";
import dataWasNotAtHome from "~/data/module04/was-not-at-home";
import dataWillNotBeAtHome from "~/data/module04/will-not-be-at-home";
import dataLivesThere from "~/data/module04/lives-there";
import dataUsedToLiveThere from "~/data/module04/used-to-live-there";
import dataWillLiveThere from "~/data/module04/will-live-there";
import dataMightLiveThere from "~/data/module04/might-live-there";
import dataDoesntLiveThere from "~/data/module04/doesnt-live-there";
import dataDidntUsedToLiveThere from "~/data/module04/didnt-used-to-live-there";
import dataWillNotLiveThere from "~/data/module04/will-not-live-there";
import dataWant from "~/data/module04/want";
import dataDontWant from "~/data/module04/dont-want";
import dataUsedToWant from "~/data/module04/used-to-want";
import dataDidntUsedToWant from "~/data/module04/didnt-used-to-want";
import dataThought from "~/data/module04/thought";

import type { ParadigmData } from "@/utils/paradigm";
import {
  type Pronoun,
  dualicPronouns,
  pluralPronouns,
  pronouns,
  singlePronouns,
  translatePhraseV2,
} from "@ukwehuwehneke/language-components";
import sample from "lodash/sample";
import { Select } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { createModule6VerbListFlat } from "~/data/module06/activeVerbsList";
import _ from "lodash";
import { createModule9VerbListFlat } from "~/data/module09";
import {
  type ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Suspense } from "react";
import { createModule10VerbListFlat } from "@/data/module10";
import { TableAsForm } from "@/components/practice/TableAsForm";
import { z } from "zod";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Paradigm Tester",
//   description: "Test a root word's paradigm!",
// };

function ToolsParadigmInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const wordSearchParam = searchParams.get("word") ?? "like-red";

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

  const dataToUse = useMemo(
    () =>
      Object.fromEntries([
        ["attokha", dataAttokhaJson],
        ["ehsaks", dataEhsaksJson],
        ["i_tlu", dataItluJson],
        ["like-red", dataLikeRedJson],
        ["otshyus", dataPulling],
        ["ʌtole", dataΛtoleJson],
        ...createModule6VerbListFlat().map((v) => [v.key, v]),
        ...createModule9VerbListFlat().map((v) => [v.key, v]),
        ...createModule10VerbListFlat().map((v) => [v.key, v]),
        ...module4Options.map((item) => [item[0], item[1]]),
      ]),
    [module4Options],
  );

  const defaultKey =
    wordSearchParam in dataToUse ? wordSearchParam : "like-red";

  const [word, setWord] = useState<keyof typeof dataToUse>(defaultKey);
  const [allowedPronominals, setAllowedPronominals] = useState("all");
  const [hasStarted, setHasStarted] = useState(false);
  const [pronominalsList, setPronominalsList] = useState<Pronoun[]>(pronouns);

  const wordOptions = useMemo(
    () =>
      [
        { label: "be hard to please", value: "ʌtole" },
        { label: "be wise", value: "attokha" },
        { label: "like (something)", value: "like-red" },
        { label: "look for (something)", value: "ehsaks" },
        { label: "pull someting out", value: "otshyus" },
        { label: "reside some place", value: "i_tlu" },
        ...createModule6VerbListFlat().map((datum) => ({
          label: datum.enShort ?? datum.en,
          value: datum.key,
        })),
        ...createModule9VerbListFlat().map((datum) => ({
          label: datum.en,
          value: datum.key,
        })),
        ...createModule10VerbListFlat().map((datum) => ({
          label: datum.en,
          value: datum.key,
        })),
        ...module4Options.map((item) => ({ label: item[2], value: item[0] })),
      ].sort((opt1, opt2) => opt1.label.localeCompare(opt2.label)),
    [module4Options],
  );

  const rows = useMemo(() => {
    const datum = dataToUse[word] as ParadigmData;
    if (!datum) {
      return [];
    }
    const result = [];
    for (const p of pronominalsList || pronouns) {
      const entry = datum.phrases.find((phraseObj) => phraseObj.pronoun === p);
      if (entry) {
        result.push({
          en: translatePhraseV2(datum, p),
          key: p,
          on: entry.phrase,
          pronoun: p,
        });
      }
    }
    return result;
  }, [dataToUse, pronominalsList, word]);

  const formSchema = useMemo(() => {
    return z.object(
      Object.fromEntries(rows.map((r) => [r.key, z.string().optional()])),
    );
  }, [rows]);

  return (
    <PageWrapper>
      <SectionHeading level={1}>Paradigm Tester</SectionHeading>

      <Flex
        align={{ sm: "end" }}
        direction={{ xs: "column", sm: "row" }}
        gap={2}
      >
        <Select
          label="Word"
          onChange={(value) => {
            setWord(value as keyof typeof dataToUse);
            setHasStarted(false);
            router.replace(
              `${pathname}?${createQueryString(searchParams, "word", value)}`,
            );
          }}
          options={wordOptions}
          // @ts-expect-error TODO: fix this type error
          value={word}
        />

        <Select
          label="Pronominals"
          onChange={(value) => {
            setAllowedPronominals(value);
            setHasStarted(false);
          }}
          options={[
            { label: "All", value: "all" },
            { label: "Singles only", value: "singles" },
            { label: "Dualics only", value: "dualics" },
            { label: "Plurals only", value: "plurals" },
            { label: "One of each", value: "oneOfEach" },
          ]}
          value={allowedPronominals}
        />

        <Flex.Item>
          <Button
            disabled={!word || hasStarted}
            onClick={() => {
              setPronominalsList(
                {
                  all: pronouns,
                  singles: singlePronouns,
                  dualics: dualicPronouns,
                  plurals: pluralPronouns,
                  oneOfEach: [
                    sample(singlePronouns)!,
                    sample(dualicPronouns)!,
                    sample(pluralPronouns)!,
                  ],
                }[allowedPronominals] ?? pronouns,
              );
              setHasStarted(true);
            }}
          >
            Start
          </Button>
        </Flex.Item>
      </Flex>

      {hasStarted && (
        <TableAsForm
          bleed={0}
          checkCorrectness={(key, val) =>
            TableAsForm.defaultCheckCorrectness({ key, val, rows })
          }
          eventCategory="Paradigm"
          eventData={{
            pronominals: allowedPronominals,
            word,
          }}
          formSchema={formSchema}
          rows={rows}
        />
      )}
    </PageWrapper>
  );
}

export default function ToolsParadigm() {
  return (
    <Suspense>
      <ToolsParadigmInner />
    </Suspense>
  );
}

function createQueryString(
  params: ReadonlyURLSearchParams,
  name: string,
  value: string,
) {
  const result = new URLSearchParams(params.toString());
  result.set(name, value);

  return result.toString();
}
