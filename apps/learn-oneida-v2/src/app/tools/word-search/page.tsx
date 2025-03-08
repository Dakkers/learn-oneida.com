"use client";
import {
  replaceForGlottal,
  SectionHeading,
  unwhisperWord,
} from "@ukwehuwehneke/language-components";
import _ from "lodash";
import { PageWrapper } from "@/components/PageWrapper";
import {
  Box,
  cn,
  Divider,
  Flex,
  Notice,
  Select,
  Text,
} from "@ukwehuwehneke/ohutsya";
import { type ReactNode, useMemo, useState } from "react";
import { createModule12AnimalsList } from "@/data/module12";
import { generateWordsearch, ONEIDA_CHAR_SET } from "@/utils/wordsearch";
import { getPlainTextsFromStandardEntry } from "@/components";
import { createModule11BodyPartNounList } from "@/data/module11";
import { createModule10EnvironmentNounsList } from "@/data/module10";
import { createModule9FoodsList } from "@/data/module09";
import { createColoursData } from "@/data/module07";

export default function WordSearchPage() {
  const [category, setCategory] = useState("food");
  const [size, setSize] = useState("md");

  const categoryOptions = useMemo(() => {
    return [
      { label: "Environment", value: "environment" },
      // { label: "Colours", value: "colours" },
      { label: "Food", value: "food" },
      { label: "Body Parts", value: "bodyparts" },
      { label: "Animals", value: "animals" },
    ].toSorted((a, b) => a.label.localeCompare(b.label));
  }, []);

  return (
    <PageWrapper>
      <div className="print:hidden">
        <Flex direction="column" gap={4}>
          <SectionHeading level={1}>Word Search</SectionHeading>
          <Flex direction="row" gap={4}>
            <Select
              label="Category"
              options={categoryOptions}
              onChange={setCategory}
              value={category}
            />
            <Select
              label="Size"
              options={[
                ["Regular", "md"],
                ["Large", "lg"],
                ["Extra Large", "xl"],
              ].map(([label, value]) => ({ label, value }))}
              onChange={setSize}
              value={size}
            />
          </Flex>
        </Flex>
      </div>

      <WordSearch category={category} size={size} />
    </PageWrapper>
  );
}

function WordSearch({
  category,
  size,
}: {
  category: string;
  size: string;
}) {
  const length = size === "xl" ? 20 : size === 'lg' ? 16 : 12;

  const rawData = useMemo(() => {
    if (category === 'environment') {
      return createModule10EnvironmentNounsList().map((item) => [
        getPlainTextsFromStandardEntry(item.standalone),
        item.onNoun ? getPlainTextsFromStandardEntry(item.onNoun) : '',
        item.inNoun ? getPlainTextsFromStandardEntry(item.inNoun) : '',
      ]);
    } else if (category === 'food') {
      return createModule9FoodsList().map((item) => [
        item.singular ? getPlainTextsFromStandardEntry(item.singular) : ''
      ])
    } else if (category === 'bodyparts') {
      return createModule11BodyPartNounList().map((item) => [
        getPlainTextsFromStandardEntry(item.onNoun),
      ])
    } else if (category === 'animals') {
      return createModule12AnimalsList().map((item) => [
        getPlainTextsFromStandardEntry(item.singular),
      ])
    }
    return [];
  }, [category]);

  const dataSubset = useMemo(() => {
    const cleaned = _.flattenDeep(rawData).filter((val) => !val.includes(' ') && !!val)
    const subset = _.sampleSize(_.shuffle(cleaned), 30);
    return subset.map((val) => replaceForGlottal(unwhisperWord(val)).replaceAll("·", ""));
  }, [rawData])

  const wordsearchGrid = generateWordsearch(dataSubset, {
    characterSet: ONEIDA_CHAR_SET,
    maxLength: length,
    size: length,
  });

  return (
    <>
      <div className="print:hidden">
        <Box py={8}>
          <Divider />
        </Box>
      </div>

      <SectionHeading level={2}>Word Search</SectionHeading>

      <div
        className={cn(
          `grid grid-cols-${length} gap-1 font-mono text-4xl mb-1`,
          size === "lg" && "text-3xl",
          size === "xl" && "text-2xl",
        )}
      >
        {wordsearchGrid.grid.map((char, j) => (
          <span key={j}>{char}</span>
        ))}
      </div>

      <Notice emphasis="outline">
        <div className="grid grid-cols-2">
          {wordsearchGrid.used.map((w, i) => (
            <Text key={i}>{w}</Text>
          ))}
        </div>
      </Notice>
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
