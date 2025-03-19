"use client";
import { SectionHeading } from "@ukwehuwehneke/language-components";
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

export default function WorksheetsPage() {
  const [category, setCategory] = useState("food");
  const [worksheetType, setWorksheetType] = useState("wordsearch");
  const [id, setId] = useState(0);

  const categoryOptions = useMemo(() => {
    if (worksheetType === "wordsearch") {
      return [
        { label: "Environment", value: "environment" },
        { label: "Food", value: "food" },
        { label: "Body Parts", value: "bodyparts" },
        { label: "Animals", value: "animals" },
      ].toSorted((a, b) => a.label.localeCompare(b.label));
    }
    return [
      // ["All", "all"],
      ["Module 1", "module01"],
      ["Module 2", "module02"],
      // ["Module 3", "module03"],
      ["Module 4", "module04"],
      ["Module 12", "module12"],
    ].map(([label, value]) => ({ label, value }));
  }, [worksheetType]);

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
                ["Word Search", "wordsearch"],
              ].map(([label, value]) => ({ label, value }))}
              onChange={(newVal) => {
                setWorksheetType(newVal);
              }}
              value={worksheetType}
            />
            {["roots", "pronominals", "wordsearch"].includes(worksheetType) && (
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
      {worksheetType === "wordsearch" && (
        <WordSearch id={id.toString()} category={category} />
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
  }, [forceRerender, module]);

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
        {data.map((txt) => (
          <Flex justify="center">
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
  }, [forceRerender, module]);

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

      <div className="grid grid-cols-2 gap-8 mt-4">
        {data.map((txt) => (
          <Flex justify="center">
            <Text variant="headlineM">{txt}</Text>
          </Flex>
        ))}
      </div>
    </>
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
