import { Button } from "@/design/primitives/button";
import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/primitives/heading";
import { Input } from "@/design/primitives/input";
import { Select } from "@/design/components/select";
import { Separator } from "@/design/primitives/separator";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import _ from "lodash";
import { Text } from "@/design/components/text";
import { translateNumber } from "~/utils/numbers";
import { List } from "@/design/primitives/list";
import { unwhisperWord } from "~/utils/words";

export const meta: MetaFunction = () => {
  return [
    { title: "Clock Time" },
    {
      name: "description",
      content: "Translate clock time into Oneida",
    },
  ];
};

export default function ToolsClock() {
  const [hour, setHour] = React.useState<string>("12");
  const [minute, setMinute] = React.useState<string>("00");
  const [period, setPeriod] = React.useState<string>("AM");
  const [translatedValue, setTranslatedValue] = React.useState([]);

  return (
    <div>
      <Heading level={1} variant="headlineL">
        Clock Time
      </Heading>

      <Flex direction="column" gap={4}>
        <Flex gap={4}>
          <Select
            label="Hour"
            onChange={setHour}
            options={_.range(1, 13).map((value) => ({
              label: value,
              value: value.toString(),
            }))}
            value={hour}
          />
          <Select
            label="Minute"
            onChange={setMinute}
            options={_.range(0, 60)
              .map((v) => v.toString().padStart(2, "0"))
              .map((value) => ({ label: value, value }))}
            value={minute}
          />
          <Select
            label="&nbsp;"
            onChange={setPeriod}
            options={[
              { label: "a.m.", value: "AM" },
              { label: "p.m.", value: "PM" },
            ]}
            value={period}
          />

          <Flex direction="column" gap={2}>
            <Text>&nbsp;</Text>
            <Button
              onClick={() =>
                setTranslatedValue(doTheTranslate(hour, minute, period))
              }
            >
              Translate
            </Button>
          </Flex>
        </Flex>

        <Separator />

        <Text>Translations:</Text>
        <List>
          {translatedValue.map((value, i) => (
            <List.Item key={i}>{value}</List.Item>
          ))}
        </List>
      </Flex>
    </div>
  );
}

function doTheTranslate(hour: string, minute: string, period: string) {
  if (hour === "12" && minute === "00") {
    return period === "AM" ? ["ahsútha"] : ["ʌtí"];
  }
  const minutesVal = parseInt(minute);

  const hourPart = `${translateNumber(hour)} niyohwistá·e`;
  const minutePart =
    minutesVal === 0 ? "" : `${translateNumber(minute)} nikahí·kalat yotukóhtu`;
  const periodPart = period === "AM" ? "astéhtsiʔ" : "yotukóhtu ʌ́ti";

  const result = [`${minutePart} ${hourPart} ${periodPart}`];

  if (minutesVal >= 30) {
    const minutesDiff = 60 - minutesVal;
    const hourPart = `${translateNumber(
      (parseInt(hour) + 1).toString()
    )} niyohwistá·e`;
    const minutePart = `${translateNumber(
      minutesDiff.toString()
    )} nikahí·kalat tyono·lúhe`;
    const periodPart = period === "AM" ? "astéhtsiʔ" : "yotukóhtu ʌ́ti";
    result.push(`${minutePart} ${hourPart} ${periodPart}`);
  }

  return result.map((v) => unwhisperWord(v).trim());
}
