"use client";
import { Button } from "@ukwehuwehneke/ohutsya";
import { Flex } from "@ukwehuwehneke/ohutsya";
import { Divider, Select } from "@ukwehuwehneke/ohutsya";

import React from "react";
import _ from "lodash";
import { Text } from "@ukwehuwehneke/ohutsya";
import { List } from "@ukwehuwehneke/ohutsya";
import { doTheTranslate } from "~/utils/time";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";

import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Clock Time",
//   description: "Translate clock time into Oneida",
// };

export default function ToolsClock() {
  const [hour, setHour] = React.useState<string>("12");
  const [minute, setMinute] = React.useState<string>("00");
  const [period, setPeriod] = React.useState<string>("AM");
  const [translatedValue, setTranslatedValue] = React.useState<string[]>([]);

  return (
    <PageWrapper>
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
                  (Number.parseInt(hour) % 12) + (period === "AM" ? 0 : 12),
                  Number.parseInt(minute),
                ),
              )
            }
          >
            Translate
          </Button>
        </Flex.Item>
      </Flex>

      <Divider />

      <Text>Translations:</Text>
      <List>
        {translatedValue.map((value, i) => (
          <List.Item key={i}>{value}</List.Item>
        ))}
      </List>
    </PageWrapper>
  );
}
