"use client";

import React from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Soundchart } from "@/components/practice/Soundchart";
import { Text } from "@ukwehuwehneke/ohutsya";

const meta: any = () => {
  return [
    { title: "Soundchart" },
    {
      name: "description",
      content: "The Oneida soundchart.",
    },
  ];
};

export default function PracticeSoundchart() {
  return (
    <>
      <SectionHeading level={1}>
        Sound Chart
      </SectionHeading>

      <Soundchart level={2} />
    </>
  );
}
