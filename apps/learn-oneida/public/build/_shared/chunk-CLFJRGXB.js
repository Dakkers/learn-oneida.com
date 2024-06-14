import {
  unwhisperWord
} from "/build/_shared/chunk-YNSSGAWD.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";

// app/utils/numbers.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/numbers.ts"
  );
  import.meta.hot.lastModified = "1706146187000";
}
function translateNumber(value) {
  if (!value) {
    return "";
  }
  const val = parseInt(value);
  const map = /* @__PURE__ */ new Map([
    [1, "\xFAska"],
    [2, "t\xE9kni"],
    [3, "\xE1hs\u028C\u0332"],
    [4, "kay\xE9"],
    [5, "w\xEDsk"],
    [6, "y\xE1\xB7yak"],
    [7, "tsy\xE1\xB7tak"],
    [8, "t\xE9klu\u0294"],
    [9, "w\xE1\xB7tlu\u0294"],
    [10, "oy\xE9\xB7li\u0332"],
    [20, "tew\xE1hs\u028C"]
  ]);
  const digit = val % 10;
  const digitWord = map.get(digit);
  if (val === 0) {
    return "???";
  } else if (map.has(val)) {
    return map.get(val) ?? "";
  } else if (val >= 11 && val <= 19) {
    return `${unwhisperWord(digitWord)} yaw\u028C\xB7l\xE9\xB7`;
  } else if (val >= 21 && val <= 29) {
    return `${map.get(20)} ${digitWord}`;
  } else if (val < 100) {
    const numTens = Math.floor(val / 10);
    return [
      unwhisperWord(map.get(numTens)),
      `niw\xE1hs\u028C`,
      digit === 0 ? "" : digitWord
    ].join(" ");
  } else if (val < 1e4) {
    const numHundreds = Math.floor(val / 100);
    const remainder = val % 100;
    return [
      unwhisperWord(translateNumber(numHundreds.toString())),
      `tew\u028C\u0294ny\xE1welu\u0294`,
      remainder === 0 ? "" : translateNumber(remainder.toString())
    ].join(" ").trim();
  }
  return "TBD";
}

export {
  translateNumber
};
//# sourceMappingURL=/build/_shared/chunk-CLFJRGXB.js.map
