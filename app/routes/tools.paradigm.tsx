import { Button } from "@/design/ui/button";
import { Flex } from "@/design/ui/flex";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/design/ui/select";
import { Text } from "@/design/ui/text";
import type { MetaFunction } from "@remix-run/node";
import React, { useId } from "react";
import dataAttokhaJson from "../data/attokha.json";
import dataEhsaksJson from "../data/ehsak.json";
import dataΛtoleJson from "../data/ʌtole.json";
import dataIsHereJson from "../data/data-ese-is-here.json";
import dataItluJson from "../data/itlu.json";
import dataOtshyusJson from "../data/otshyus.json";
import dataLikeRedJson from "../data/data-like-red.json";
import { ParadigmTable } from "~/components/ParadigmTable";
import {
  Pronoun,
  dualicPronouns,
  pluralPronouns,
  singlePronouns,
} from "~/utils";
import sample from "lodash/sample";

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
      <Text as="h1" variant="title">
        Paradigm Tester
      </Text>

      <p className="mt-8 mb-4">
        <strong>NOTE:</strong> This page is still under construction!
      </p>

      <Flex align="end" gap={2}>
        <SelectWrapper
          label="Word"
          onChange={(value) => {
            setWord(value);
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

        <SelectWrapper
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
                  ] as string[])
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
          data={dataToUse[word]}
          isTesting
          translationFn={translatorFns[word]}
        />
      )}
    </div>
  );
}

function SelectWrapper({ label, onChange, options, value }) {
  const id = useId();

  return (
    <Flex direction="column" gap={2}>
      {label && <Text variant="label">{label}</Text>}

      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="w-[180px]" id={id}>
          <SelectValue placeholder="Select..." />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Flex>
  );
}
