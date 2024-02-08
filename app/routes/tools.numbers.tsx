import { Button } from "@/design/primitives/button";
import { Flex } from "@/design/components/flex";
import { Input } from "@/design/primitives/input";
import { Separator } from "@/design/primitives/separator";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { Heading } from "@/design/components/heading";
import { translateNumber } from "~/utils/numbers";

export const meta: MetaFunction = () => {
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
      <Heading level={1} variant="headlineL">
        Numbers
      </Heading>

      <p className="mt-8 mb-4">
        <b>NOTE:</b> This page is still under construction! Only numbers up to
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

        <Separator />

        <p>
          Translation: <b>{translatedValue}</b>
        </p>
      </Flex>
    </div>
  );
}
