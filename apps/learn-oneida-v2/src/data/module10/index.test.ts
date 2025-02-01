import { expect, test } from "vitest";
import { createModule10EnvironmentNounsList } from "./index";

test("no duplicate keys in environment nouns list", () => {
  const list = createModule10EnvironmentNounsList();
  const keys = list.map((n) => n.key);
  const duplicates = keys.filter((k, i) => keys.indexOf(k) !== i);
  expect(duplicates).toEqual([]);
});
