import {
  type AudioFriendlyData,
  getSingleWordsForModule,
} from "@/app/practice/listen/dataGetters";
import _ from "lodash";
import { useMemo } from "react";

export function useSingleWordsData(category: string) {
  const data = useMemo(() => {
    if (!category) {
      return [];
    }
    const mapping: Record<string, () => AudioFriendlyData> = {
      module01: () => getSingleWordsForModule("module01"),
      module02: () => getSingleWordsForModule("module02"),
      module03: () => getSingleWordsForModule("module03"),
      module04: () => getSingleWordsForModule("module04"),
      module12: () => getSingleWordsForModule("module12"),
    };

    const fn =
      category === "all"
        ? () => {
            return _.flattenDeep(Object.values(mapping).map((f) => f()));
          }
        : mapping[category];

    if (!fn) {
      return [];
    }
    return _.shuffle(fn().filter((d) => !!d.en));
  }, [category]);

  return data;
}
