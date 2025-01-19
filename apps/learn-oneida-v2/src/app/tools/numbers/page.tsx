"use client";
import { Button } from "@ukwehuwehneke/ohutsya";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Input } from "@ukwehuwehneke/ohutsya";
import { Divider } from "@ukwehuwehneke/ohutsya";

import React from "react";
import { translateNumber } from "~/utils/numbers";
import { SectionHeading } from "@ukwehuwehneke/language-components";

const meta: any = () => {
  return [
    { title: "Numbers" },
    {
      name: "description",
      content: "Translate numbers from Oneida to English and vice versa",
    },
  ];
};

export default function ToolsNumbers() {
  const [value, setValue] = React.useState("");
  const [translatedValue, setTranslatedValue] = React.useState("");

  return (
    <div>
      <SectionHeading level={1}>Numbers</SectionHeading>

      <p className="mt-8 mb-4">
        <b>Note:</b> This page is still under construction! Only numbers up to
        9,999 are supported.
      </p>

      <Flex direction="column" gap={2}>
        <Flex gap={4}>
          <Input
            onChange={(e) => {
              setValue(e.target.value);
              setTranslatedValue("");
            }}
            max="9999"
            min="0"
            type="number"
            value={value}
          />
          <Button onClick={() => setTranslatedValue(translateNumber(value))}>
            Translate
          </Button>
        </Flex>

        <Divider />

        <p>
          Translation: <b>{translatedValue}</b>
        </p>
      </Flex>
    </div>
  );
}
