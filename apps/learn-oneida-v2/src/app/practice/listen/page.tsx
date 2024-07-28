"use client";

import React, { useState } from "react";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Box, Button, Flex, Select, Text } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";
import { getParticlesForGroup } from "@/components/articles/ParticlesTable";
import { flushSync } from "react-dom";

const meta: any = () => {
  return [
    { title: "Listening Practice" },
    {
      name: "description",
      content: "Practice listening to phrases in Oneida.",
    },
  ];
};

export default function PracticeListening() {
  const categories = [
    {
      getData: () => {
        return;
      },
      label: "Being somewhere",
      sub: [
        // { label: "Being at home", value: "being_at_home" },
        { label: "Being here", value: "being_here" },
        // { label: "Being there", value: "being_there" },
      ],
      value: "being_somewhere",
    },
    {
      label: "Living somewhere",
      value: "living_somewhere",
    },
    {
      getData: () => {
        const data = getParticlesForGroup(subcategory);
        return data.map((datum) => ({
          audioFile: `/particles/${subcategory}/${datum.key}.mp3`,
          en: datum.en,
          translation: datum.translation,
        }));
      },
      label: "Particles",
      sub: [
        // { label: "All", value: "all" },
        { label: "Module 2", value: "module02" },
        { label: "Module 3", value: "module03" },
        { label: "Module 4", value: "module04" },
      ],
      value: "particles",
    },
    {
      label: "Times of day",
      value: "times_of_day",
    },
    {
      label: "Translation exercises",
      sub: [
        { label: "All", value: "all" },
        { label: "Module 1", value: "m01" },
      ],
      value: "exercises",
    },
    {
      label: "Thought",
      value: "thought",
    },
    {
      label: "Wanting something to happen",
      value: "wanting",
    },
  ];

  const [category, setCategory] = useState(categories[0].value);
  const [subcategory, setSubcategory] = useState(
    categories[0].sub?.[0].value ?? "",
  );
  const [index, setIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [data, setData] = useState([]);

  const selectedCategory = categories.find((c) => c.value === category);

  const playAudioAtIndex = (datum: any) => {
    const audio = new Audio(`/audio${datum.audioFile}`);
    audio.play();
  };

  return (
    <>
      <SectionHeading level={1}>Listening Practice</SectionHeading>

      {hasStarted ? (
        <>
          <Text>
            {index + 1} of {data.length}
          </Text>

          <Box />

          <Button onClick={() => playAudioAtIndex(data[index])}>
            Play Audio
          </Button>
          <Button onClick={() => setIndex(index + 1)}>Next</Button>
          <Button onClick={() => window.alert(data[index].translation)}>
            Show Answer
          </Button>
          <Button onClick={() => window.alert(data[index].en)}>
            Show English
          </Button>
        </>
      ) : (
        <>
          <Flex gap={2}>
            <Select
              label="Category"
              options={categories.map((c) => ({
                label: c.label,
                value: c.value,
              }))}
              onChange={(newVal) => {
                setCategory(newVal);
                const newCat = categories.find((c) => c.value === newVal);
                setSubcategory(newCat?.sub?.[0].value ?? "");
              }}
              value={category}
            />
            <Select
              disabled={!selectedCategory?.sub}
              label="Subcategory"
              options={(selectedCategory?.sub ?? []).map((c) => ({
                label: c.label,
                value: c.value,
              }))}
              onChange={setSubcategory}
              value={subcategory}
            />
          </Flex>

          <Button
            onClick={() => {
              const newData = _.shuffle(selectedCategory?.getData?.() ?? []);
              setData(newData);
              setHasStarted(true);
              playAudioAtIndex(newData[0]);
            }}
          >
            Start
          </Button>
        </>
      )}
    </>
  );
}
