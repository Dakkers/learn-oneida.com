"use client";
import {
  convertBreakdownToPlainText,
  SectionHeading,
} from "@ukwehuwehneke/language-components";
import _ from "lodash";
import { PageWrapper } from "@/components/PageWrapper";
import {
  Box,
  Divider,
  Flex,
  Notice,
  Select,
  Text,
} from "@ukwehuwehneke/ohutsya";
import { type ReactNode, useMemo, useState } from "react";
import { LinkWrapper } from "@/components/LinkWrapper";
import { getAllModule01Paradigms } from "@/data/module01";
import { getAllModule02Paradigms } from "@/data/module02";
import { getAllModule03Paradigms } from "@/data/module03";
import { getAllModule04Paradigms } from "@/data/module04";
import { createModule5VerbsListFlat } from "@/data/module05";
import { createModule6VerbListFlat } from "@/data/module06/activeVerbsList";

export default function WorksheetsPage() {
  const [category, setCategory] = useState("module01");
  const [worksheetType, setWorksheetType] = useState("stative-tenses");
  const [id, setId] = useState(0);

  const categoryOptions = useMemo(() => {
    return [
      // ["All", "all"],
      ["Module 1", "module01"],
      ["Module 2", "module02"],
      // ["Module 3", "module03"],
      ["Module 4", "module04"],
      ["Module 12", "module12"],
    ].map(([label, value]) => ({ label, value }));
  }, []);

  return (
    <PageWrapper>
      <div className="print:hidden">
        <Flex direction="column" gap={4}>
          <SectionHeading level={1}>Worksheets</SectionHeading>
          <Notice emphasis="outline" intent="magic">
            <Text>
              This page can be used to generate worksheets for students. When
              you go to print this page, many elements will be hidden.
            </Text>
          </Notice>
          <Flex direction="column" gap={6}>
            <Select
              label="Category"
              options={[
                ["(Select)", ""],
                ["Pronominals", "pronominals"],
                ["Root Words", "roots"],
                ["Stative Tenses", "stative-tenses"],
                ["Active Tenses", "active-tenses"],
              ].map(([label, value]) => ({ label, value }))}
              onChange={(newVal) => {
                setWorksheetType(newVal);
                setId((prev) => prev + 1);
              }}
              value={worksheetType}
            />
            {["roots", "pronominals"].includes(worksheetType) && (
              <Select
                label="Category"
                options={categoryOptions}
                onChange={(newVal) => {
                  setCategory(newVal);
                }}
                value={category}
              />
            )}
          </Flex>
        </Flex>
      </div>

      {worksheetType === "pronominals" && (
        <FindThePronominal id={id.toString()} module={category} />
      )}
      {worksheetType === "roots" && (
        <FindTheRootWord id={id.toString()} module={category} />
      )}
      {["stative-tenses", "active-tenses"].includes(worksheetType) && (
        <FindTheTense id={id.toString()} worksheetType={worksheetType} />
      )}
    </PageWrapper>
  );
}

function FindTheRootWord({
  id: forceRerender,
  module,
  numItems = 10,
}: {
  id: string;
  module: string;
  numItems?: number;
}) {
  const data = useMemo(() => {
    const dataset = _.shuffle(
      module === "module01"
        ? getAllModule01Paradigms()
        : module === "module02"
          ? getAllModule02Paradigms()
          : module === "module03"
            ? getAllModule03Paradigms()
            : module === "module04"
              ? getAllModule04Paradigms()
              : [],
    );

    const result: string[] = [];
    for (let i = 0; i < numItems; i++) {
      const pd = _.sample(dataset);
      result.push(_.sample(pd?.phrases ?? [])?.phrase || "");
    }
    return result;
  }, [module, numItems]);

  return (
    <>
      <div className="print:hidden">
        <Box py={8}>
          <Divider />
        </Box>
      </div>

      <SectionHeading level={2}>Identify the Root Word</SectionHeading>

      <Notice emphasis="outline">
        <Flex direction="column" gap={4}>
          <Text>
            On this page is a list of words. Your goal is to identify the root
            word. As an example, consider this word:
          </Text>

          <ExampleText>
            yako<Highlight>núhte</Highlight>ʔ
          </ExampleText>

          <Text>
            The root word has been highlighted. If the root word has a{" "}
            <LinkWrapper page="prep" /> then highlight that too. Below is an
            example.
          </Text>

          <ExampleText>
            <Highlight>te</Highlight>yuky<Highlight>atekháshyu</Highlight>
          </ExampleText>
        </Flex>
      </Notice>

      <div className="grid grid-cols-2 gap-8 mt-4">
        {data.map((txt, i) => (
          <Flex justify="center" key={`${forceRerender}-${i}`}>
            <Text variant="headlineM">{txt}</Text>
          </Flex>
        ))}
      </div>
    </>
  );
}

function FindThePronominal({
  id: forceRerender,
  module,
  numItems = 9,
}: {
  id: string;
  module: string;
  numItems?: number;
}) {
  const data = useMemo(() => {
    const dataset = _.shuffle(
      module === "module01"
        ? getAllModule01Paradigms()
        : module === "module02"
          ? getAllModule02Paradigms()
          : module === "module03"
            ? getAllModule03Paradigms()
            : module === "module04"
              ? getAllModule04Paradigms()
              : [],
    );

    const result: string[] = [];
    for (let i = 0; i < numItems; i++) {
      const pd = _.sample(dataset);
      result.push(_.sample(pd?.phrases ?? [])?.phrase || "");
    }
    return result;
  }, [module, numItems]);

  return (
    <>
      <div className="print:hidden">
        <Box py={8}>
          <Divider />
        </Box>
      </div>

      <SectionHeading level={2}>Identify the Pronominal</SectionHeading>

      <Notice emphasis="outline">
        <Flex direction="column" gap={4}>
          <Text>
            On this page is a list of words. Your goal is to identify the
            pronominal. As an example, consider this word:
          </Text>

          <ExampleText>
            te<Highlight>yuky</Highlight>atekháshyu
          </ExampleText>

          <Text>
            The pronominal has been highlighted. If the pronominal overwrites
            the first letter of the root word, include that. Here's an example:
          </Text>

          <ExampleText>
            <Highlight>yu</Highlight>ttókhaʔ
          </ExampleText>
        </Flex>
      </Notice>

      <div className="grid grid-cols-1 gap-8 mt-2">
        {data.map((txt, i) => (
          <Flex justify="center" key={`${forceRerender}-${i}`}>
            <Text variant="headlineM">{txt}</Text>
          </Flex>
        ))}
      </div>
    </>
  );
}

function FindTheTense({
  id: forceRerender,
  numItems = 10,
  worksheetType,
}: {
  id: string;
  numItems?: number;
  worksheetType: string;
}) {
  const isStative = worksheetType === "stative-tenses";

  const data = useMemo(() => {
    if (worksheetType === "stative-tenses") {
      return _.sampleSize(
        _.flattenDeep(
          createModule5VerbsListFlat()
            .filter((datum) => datum.tense !== "cmd" && datum.tense !== "prs")
            .map((datum) => datum.phrases ?? []),
        ),
        numItems,
      );
    } else if (worksheetType === "active-tenses") {
      return _.sampleSize(
        _.flattenDeep(
          createModule6VerbListFlat()
            .filter((datum) => datum.tense !== "cmd" && datum.tense !== "hab")
            .map((datum) => datum.phrases ?? []),
        ),
        numItems,
      );
    }
    return [];
  }, [numItems, worksheetType]);

  return (
    <>
      <div className="print:hidden">
        <Box py={8}>
          <Divider />
        </Box>
      </div>

      <SectionHeading level={2}>Identify the Tense</SectionHeading>

      <Notice emphasis="outline">
        <Flex direction="column" gap={4}>
          <Text>
            On this page is a list of words. Your goal is to identify the tense.
            As an example, consider this word:
          </Text>

          <ExampleText>
            {isStative ? (
              <>
                tewakaʔnikuhlyaʔkú<Highlight>neʔ</Highlight>
              </>
            ) : (
              <>
                <Highlight>ʌ</Highlight>katyaʔtóhaleʔ
              </>
            )}
          </ExampleText>

          <Text>The tense has been highlighted.</Text>
        </Flex>
      </Notice>

      <div className="grid grid-cols-1 gap-8 mt-4">
        {data.map((datum, i) => (
          <Flex justify="center" key={`${forceRerender}-${i}`}>
            <Text variant="headlineM">
              {convertBreakdownToPlainText(datum.breakdown)}
            </Text>
          </Flex>
        ))}
      </div>
    </>
  );
}

function ExampleText({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Flex justify="center">
      <Text variant="headlineS">
        <b>{children}</b>
      </Text>
    </Flex>
  );
}

function Highlight({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="border border-black border-2 border-dashed">
      {children}
    </span>
  );
}
