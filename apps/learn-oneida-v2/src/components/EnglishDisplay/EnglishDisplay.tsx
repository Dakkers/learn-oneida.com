import { arrayify, Flex, Text } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";

export interface EnglishDisplay {
  hideDictionary?: boolean;
  value:
    | string
    | string[]
    | {
        dict?: number[];
        en: string | string[];
      };
}

export function EnglishDisplay({
  hideDictionary = false,
  value,
}: EnglishDisplay) {
  const isObj = typeof value !== "string" && !Array.isArray(value);
  const en = isObj ? arrayify(value.en) : arrayify(value);
  const dict = isObj ? (value.dict ?? []) : [];
  return (
    <Flex direction="column" gap={0}>
      <Text>{en.join(", ")}</Text>
      {!hideDictionary && (dict ?? []).length > 0 && (
        <Text contrast="mid" variant="labelS">
          pg. {dict.join(", ")}
        </Text>
      )}
    </Flex>
  );
}
