import { Button } from "@/design/primitives/button";
import { Flex } from "@/design/components/flex";
import type { MetaFunction } from "@remix-run/node";
import React, { useId } from "react";
import dataAttokhaJson from "../data/attokha";
import dataEhsaksJson from "../data/ehsak";
import dataΛtoleJson from "../data/ʌtole";
import dataIsHereJson from "../data/data-ese-is-here";
import dataItluJson from "../data/itlu";
import dataOtshyusJson from "../data/otshyus";
import dataLikeRedJson from "../data/nuwehse-red";
import { ParadigmTable } from "~/components/ParadigmTable";
import {
  Pronoun,
  dualicPronouns,
  pluralPronouns,
  singlePronouns,
} from "~/utils";
import sample from "lodash/sample";
import { Heading } from "@/design/components/heading";
import { Select } from "@/design/components/select";

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
  const dataToUse = {
    attokha: dataAttokhaJson,
    "be-here": dataIsHereJson,
    ehsaks: dataEhsaksJson,
    i_tlu: dataItluJson,
    "like-red": dataLikeRedJson,
    otshyus: dataOtshyusJson,
    ʌtole: dataΛtoleJson,
  } as const;

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

  return (
    <div>
      <Heading level={1} variant="headlineL">
        Paradigm Tester
      </Heading>

      <p className="mt-8 mb-4">
        <b>NOTE:</b> This page is still under construction!
      </p>

      <Flex align="end" gap={2}>
        <Select
          label="Word"
          onChange={(value) => {
            setWord(value as keyof typeof dataToUse);
            setHasStarted(false);
          }}
          options={[
            { label: "Be hard to please", value: "ʌtole" },
            { label: "Be wise", value: "attokha" },
            { label: "Like (something)", value: "like-red" },
            { label: "Look for (something)", value: "ehsaks" },
            { label: "Pull someting out", value: "otshyus" },
            { label: "Reside some place", value: "i_tlu" },
          ]}
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
                : []
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
          // @ts-expect-error LO-11
          data={dataToUse[word]}
          isTesting
          // @ts-expect-error To be addressed in LO-20
          translationFn={translatorFns[word]}
        />
      )}
    </div>
  );
}
