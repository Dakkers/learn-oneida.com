"use client";

import React, { useState } from "react";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Button, Select, Text } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";

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
  const [index, setIndex] = useState(0);
  const playAudioAtIndex = (i: number) => {
    const datum = data[i ?? index];
    console.log(i ?? index);
    const audio = new Audio(
      `/audio/translation_exercises/module01/ex_${datum[0]}.mp3`,
    );
    audio.play();
  };

  const categories = [
    {
      label: "Being somewhere",
      sub: [
        { label: "Being at home", value: "being_at_home" },
        { label: "Being here", value: "being_here" },
        { label: "Being there", value: "being_there" },
      ],
      value: "being_somewhere",
    },
    {
      label: "Living somewhere",
      value: "living_somewhere",
    },
    {
      label: "Particles",
      sub: [
        { label: "All", value: "all" },
        { label: "Module 2", value: "m02" },
        { label: "Module 3", value: "m03" },
        { label: "Module 4", value: "m04" },
      ],
      value: "exercises",
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

  return (
    <>
      <SectionHeading level={1}>Listening Practice</SectionHeading>

      <Select
        label="Xx"
        options={categories.map((c) => ({ label: c.label, value: c.value }))}
      />

      <Button
        onClick={() => {
          const newIndex = _.random(0, 14, false);
          setIndex(newIndex);
          playAudioAtIndex(newIndex);
        }}
      >
        Play Audio
      </Button>
      <Button onClick={() => playAudioAtIndex(index)}>Replay</Button>
      <Button onClick={() => window.alert(data[index][1])}>Show Answer</Button>
    </>
  );
}
