import { describe, it } from "node:test";
import assert from "node:assert";
import { doTheTranslate } from "./time";

describe("doTheTranslate()", () => {
  it.only("should translate 12:00 AM", () => {
    assert.deepEqual(doTheTranslate(0, 0), ["ahsútha"]);
  });

  it.only("should translate 12:23 AM", () => {
    assert.deepEqual(doTheTranslate(0, 23), [
      "tewáhsʌ áhsʌ nikahí·kalat yotukóhtu ahsútha",
    ]);
  });

  it.only("should translate 12:00 PM", () => {
    assert.deepEqual(doTheTranslate(12, 0), ["ʌ́tyʌ ni·káleʔ", "ʌ́ti"]);
  });

  it.only("should translate 12:16 PM", () => {
    assert.deepEqual(doTheTranslate(12, 16), [
      "yá·yak yawʌ·lé· nikahí·kalat yotukóhtu ʌ́ti",
    ]);
  });

  it.only("should translate 1:00 AM", () => {
    assert.deepEqual(doTheTranslate(1, 0), ["úska niyohwistá·e astéhtsiʔ"]);
  });

  it.only("should translate 1:00 PM", () => {
    assert.deepEqual(doTheTranslate(13, 0), [
      "úska niyohwistá·e yotukóhtu ʌ́ti",
    ]);
  });

  it.only("should translate 7:00 AM", () => {
    assert.deepEqual(doTheTranslate(7, 0), ["tsyá·tak niyohwistá·e astéhtsiʔ"]);
  });

  it.only("should translate 1:55 PM", () => {
    assert.deepEqual(doTheTranslate(13, 55), [
      "wísk nikahí·kalat tyono·lúhe tékni niyohwistá·e yotukóhtu ʌ́ti",
      "wísk niwáhsʌ wísk nikahí·kalat yotukóhtu úska niyohwistá·e yotukóhtu ʌ́ti",
    ]);
  });

  it.only("should translate 11:45 PM", () => {
    assert.deepEqual(doTheTranslate(23, 45), [
      "wísk yawʌ·lé· nikahí·kalat tyono·lúhe ahsútha",
      "kayé niwáhsʌ wísk nikahí·kalat yotukóhtu úska yawʌ·lé· niyohwistá·e yotukóhtu ʌ́ti",
    ]);
  });
});
