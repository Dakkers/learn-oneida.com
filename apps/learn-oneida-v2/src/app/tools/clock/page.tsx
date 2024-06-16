import { Button } from "@/design/primitives/button";
import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/components/heading";
import { Select } from "@/design/components/select";
import { Separator } from "@/design/primitives/separator";

import React from "react";
import _ from "lodash";
import { Text } from "@/design/components/text";
import { List } from "@/design/components/list";
import { doTheTranslate } from "~/utils/time";
import { SectionHeading } from "~/components/SectionHeading";
import { Bleed } from "@/design/components/Bleed";

export const meta: any = () => {
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
  const [translatedValue, setTranslatedValue] = React.useState<string[]>([]);

  return (
    <>
      <SectionHeading level={1}>Clock Time</SectionHeading>

      <Flex direction="column" gap={2}>
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
        <Flex.Item>
          <Button
            onClick={() =>
              setTranslatedValue(
                doTheTranslate(
                  (parseInt(hour) % 12) + (period === "AM" ? 0 : 12),
                  parseInt(minute),
                ),
              )
            }
          >
            Translate
          </Button>
        </Flex.Item>
      </Flex>

      <Separator />

      <Text>Translations:</Text>
      <List>
        {translatedValue.map((value, i) => (
          <List.Item key={i}>{value}</List.Item>
        ))}
      </List>
    </>
  );
}
