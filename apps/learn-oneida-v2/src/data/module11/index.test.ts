import { expect, test } from "vitest";
import {
  createModule11BodyAilmentsList,
  createModule11BodyPartNounList,
} from "./index";

test("no duplicate keys in ailments list", () => {
  const list = createModule11BodyAilmentsList();
  const keys = list.map((n) => n.key);
  const duplicates = keys.filter((k, i) => keys.indexOf(k) !== i);
  expect(duplicates).toEqual([]);
});

test("no duplicate keys in body parts list", () => {
  const list = createModule11BodyPartNounList();
  const keys = list.map((n) => n.key);
  const duplicates = keys.filter((k, i) => keys.indexOf(k) !== i);
  expect(duplicates).toEqual([]);
});
