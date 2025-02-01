import { expect, test } from "vitest";
import { createModule9FoodsList } from "./index";

test("no duplicate keys in foods list", () => {
  const list = createModule9FoodsList();
  const keys = list.map((n) => n.key);
  const duplicates = keys.filter((k, i) => keys.indexOf(k) !== i);
  expect(duplicates).toEqual([]);
});
