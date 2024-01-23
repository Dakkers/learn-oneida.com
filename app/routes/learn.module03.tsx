import { Flex } from "@/design/components/flex";
import { Text } from "@/design/components/text";
import { Box } from "@/design/primitives/box";
import { Heading } from "@/design/primitives/heading";
import { Notice } from "@/design/primitives/notice";
import type { MetaFunction } from "@remix-run/node";
import { TableOfContents as TOC } from "~/components/TableOfContents";
import React from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 3" },
    { name: "description", content: "Module 3 of the Oneida curriculum" },
  ];
};

export default function LearnModule03() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Module 3</h1>

      <Heading level={1} variant="headlineL">
        Module 3
      </Heading>
      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>
      <Flex direction="column" gap={4}>
        <Text>In this module, we&lsquo;ll cover the following:</Text>

        <TOC>
          <TOC.Item
            label="Introduction to Past Tense"
            value="past-tense"
          />
          <TOC.Item
            label="Relationships"
            value='relationships'
          >
            <TOC.Section>
              <TOC.Item label="Married" value="married" />
              <TOC.Item label="In a Relationship" value="in-a-relationship" />
              <TOC.Item label="Separated" value="in-a-relationship" />
            </TOC.Section>
          </TOC.Item>
        </TOC>
      </Flex>
    </div>
  );
}

function PastTenseIntroduction () {
  const data = [
    {
      en: 'I like it',
      "breakdown": [{ "text": "k", "type": "PR" }, "nú·wehse̲ʔ"],
    },
    {
      en: 'I used to like it',
      "breakdown": [{ "text": "k", "type": "PR" }, "nú·wehs", "kweʔ"],
    },
    {
      en: "it likes me",
      "breakdown": [{ "text": "wak", type: "PB" }, "nú·wehse̲ʔ"]
    },
    {
      en: "it used to like me",
      "breakdown": [{ "text": "wak", type: "PB" }, "nú·wehs", "kweʔ"]
    },
    {
      en: "I like you",
      "breakdown": [{ "text": "ku", type: "PP" }, "nú·wehse̲ʔ"]
    },
    {
      en: "I used to like you",
      "breakdown": [{ "text": "ku", type: "PP" }, "nú·wehs", "kweʔ"]
    },
    {
      en: 'I love it',
      "breakdown": [{ "text": "k", "type": "PR" }, "nolúkhwa"],
    },
    {
      en: 'I used to love it',
      "breakdown": [{ "text": "k", "type": "PR" }, "nolúkhwa", "hkweʔ"],
    },
    {
      en: "it losé me",
      "breakdown": [{ "text": "wak", type: "PB" }, "nolúkhwa"]
    },
    {
      en: "it used to love me",
      "breakdown": [{ "text": "wak", type: "PB" }, "nolúkhwa", "hkweʔ"]
    },
    {
      en: "I love you",
      "breakdown": [{ "text": "ku", type: "PP" }, "nolúkhwa"]
    },
    {
      en: "I used to love you",
      "breakdown": [{ "text": "ku", type: "PP" }, "nolúkhwa", "hkweʔ"]
    },
    {
      en: 'I know it',
      "breakdown": [{ "text": "k", "type": "PR" }, "yʌtelí"],
    },
    {
      en: 'I used to know it',
      "breakdown": [{ "text": "k", "type": "PR" }, "yʌteli", "hné·"],
    },
    {
      en: "it knows me",
      "breakdown": [{ "text": "wak", type: "PB" }, "yʌtelí"]
    },
    {
      en: "it used to know me",
      "breakdown": [{ "text": "wak", type: "PB" }, "yʌteli", "hné·"]
    },
    {
      en: "I know you",
      "breakdown": [{ "text": "ku", type: "PP" }, "yʌtelí"]
    },
    {
      en: "I used to know you",
      "breakdown": [{ "text": "ku", type: "PP" }, "yʌteli", "hné·"]
    },

    {
      en: 'I like myself',
      "breakdown": [{ "text": "k", "type": "PR" }, {"text":"atat","type":"REFL"}, "nú·wehse̲ʔ"],
    },
    {
      en: 'I used to like myself',
      "breakdown": [{ "text": "k", "type": "PR" }, {"text":"atat","type":"REFL"}, "nú·wehs", "kweʔ"],
    },


    {
      en: 'You and I like each other',
      "breakdown": [{text:"te",type:"RECP"},{ "text": "ty", "type": "PR" }, {"text":"atat","type":"REFL"}, "nú·wehse̲ʔ"],
    },
    {
      en: 'You and I used to like each other',
      "breakdown": [{text:"te",type:"RECP"},{ "text": "ty", "type": "PR" }, {"text":"atat","type":"REFL"}, "nú·wehs", "kweʔ"],
    },

    {
      en: "I know",
      "breakdown": [{ "text": "wak" }, "anúhteʔ"]
    },
    {
      en: "I used to know",
      "breakdown": [{ "text": "wak" }, "anúhte", "hkweʔ"]
    }
  ]

  for (const datum of data) {
    const idx = datum.breakdown.length - 1;
    const lastPart = datum.breakdown[idx];
    if (typeof lastPart === 'string' && ['kweʔ', "hkweʔ", "hné·"].includes(lastPart)) {
      datum.breakdown[idx] = { text: lastPart, type: "PAST" }
    }
  }

  return (
    <div></div>
  )
}
