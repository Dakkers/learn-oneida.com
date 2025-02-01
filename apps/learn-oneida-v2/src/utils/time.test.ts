import { describe, expect, test } from "vitest";
import { doTheTranslate } from "./time";

describe("doTheTranslate()", () => {
  test("should translate 12:00 AM", () => {
    expect(doTheTranslate(0, 0)).toEqual(["ahsútha"]);
  });

  test("should translate 12:23 AM", () => {
    expect(doTheTranslate(0, 23)).toEqual([
      "tewáhsʌ áhsʌ nikahí·kalat yotukóhtu ahsútha",
    ]);
  });

  test("should translate 12:00 PM", () => {
    expect(doTheTranslate(12, 0)).toEqual(["ʌ́tyʌ ni·káleʔ", "ʌ́ti"]);
  });

  test("should translate 12:16 PM", () => {
    expect(doTheTranslate(12, 16)).toEqual([
      "yá·yak yawʌ·lé· nikahí·kalat yotukóhtu ʌ́ti",
    ]);
  });

  test("should translate 1:00 AM", () => {
    expect(doTheTranslate(1, 0)).toEqual(["úska niyohwistá·e astéhtsiʔ"]);
  });

  test("should translate 1:00 PM", () => {
    expect(doTheTranslate(13, 0)).toEqual(["úska niyohwistá·e yotukóhtu ʌ́ti"]);
  });

  test("should translate 7:00 AM", () => {
    expect(doTheTranslate(7, 0)).toEqual(["tsyá·tak niyohwistá·e astéhtsiʔ"]);
  });

  test("should translate 1:55 PM", () => {
    expect(doTheTranslate(13, 55)).toEqual([
      "wísk nikahí·kalat tyono·lúhe tékni niyohwistá·e yotukóhtu ʌ́ti",
      "wísk niwáhsʌ wísk nikahí·kalat yotukóhtu úska niyohwistá·e yotukóhtu ʌ́ti",
    ]);
  });

  test("should translate 11:45 PM", () => {
    expect(doTheTranslate(23, 45)).toEqual([
      "wísk yawʌ·lé· nikahí·kalat tyono·lúhe ahsútha",
      "kayé niwáhsʌ wísk nikahí·kalat yotukóhtu úska yawʌ·lé· niyohwistá·e yotukóhtu ʌ́ti",
    ]);
  });
});
