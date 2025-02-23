import { expect, test } from "vitest";
import { createModule12AnimalsList } from "./index";

test("no duplicate keys in animals list", () => {
  const list = createModule12AnimalsList();
  const keys = list.map((n) => n.key);
  const duplicates = keys.filter((k, i) => keys.indexOf(k) !== i);
  expect(duplicates).toEqual([]);
});
