import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import {
  TableWrapper
} from "/build/_shared/chunk-KIXTCICO.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
import {
  Text
} from "/build/_shared/chunk-T7AJFEZW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/articles/TimesOfDay.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/TimesOfDay.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/TimesOfDay.tsx"
  );
  import.meta.hot.lastModified = "1717069385785.1392";
}
function TimesOfDayArticle({
  level = 1
}) {
  const dayPh\u028Cases = [{
    en: "day",
    on: "aw\u028Chn\xEDsla\u0332\u0294\u0332"
  }, {
    en: "all day",
    on: "kw\u028C\u0294t\xE1ti\u0332\u0294"
  }, {
    en: "during the day",
    on: "tsi\u0294niw\u028Chn\xEDsles"
  }, {
    en: "this day",
    on: "T\xF3\xB7 niw\u028Chnisla\xB7k\xE9\u035F"
  }, {
    en: "daytime",
    on: "kwa\u0294t\xE9\xB7ke\u0332"
  }, {
    en: "every day",
    on: "ya\u0294tew\u028Chnislak\xE9\u035F"
  }];
  const eveningPhrases = [{
    en: ["evening", "early evening", "late afternoon"],
    on: ["yo\u0294kal\xE1sh\u028C", "yo\u0294kal\xE1shu"]
  }, {
    en: "when it was evening",
    on: "tshiyo\u0294kal\xE1shu"
  }, {
    en: ["this evening", "tonight", "later this evening"],
    on: "\u028Cy\xF3\xB7kalahwe\u0294"
  }];
  const monthPhrases = [{
    en: "month",
    on: "aw\u028Chn\xED\xB7ta\u0294"
  }, {
    en: "during the month",
    on: "tsi\u0294 niw\u028Chn\xED\xB7tes"
  }, {
    en: "last month",
    on: "sw\u028Chni\u0294tatk\u028C\u0301"
  }, {
    en: "next month",
    on: "y\u028Csw\u028C\u0301hni\u0294tat"
  }, {
    en: "how many months?",
    on: "T\xF3\xB7 niw\u028Chn\xED\xB7take\u0332\u0294"
  }];
  const morningPhrases = [{
    en: "(earlier) this morning",
    on: "s\u028Cha\u0294 ast\xE9htsi\u0332\u0294"
  }, {
    en: ["early morning", "in the morning"],
    on: "ast\xE9htsii\u0332"
  }, {
    en: "the other morning",
    on: "oy\xE1\xB7 tshitwast\xE9htsi\u0332\u0294"
  }, {
    en: ["morning", "morning time"],
    on: "astehtsiw\xE9\xB7ke\u0332"
  }];
  const nightPhrases = [{
    en: "night",
    on: "n\xE9\xB7 wahsuta\xB7t\xE9\u035F\xB7"
  }, {
    en: "night-time",
    on: "kwa\u0294shut\xE9\xB7ke\u0332"
  }, {
    en: "all night",
    on: "kwa\u0294shut\xE1ti\u0294"
  }, {
    en: "during the night",
    on: "tsi\u0294 niwahsu\xB7t\xE9s"
  }, {
    en: "every night",
    on: "ya\u0294tewahsu\xB7t\xE1ke"
  }, {
    en: "midnight",
    on: "ash\xFA\xB7tha"
  }, {
    en: "(when it got dark) last night",
    on: "kwa\u0294shu\xB7t\xE9\xB7"
  }, {
    en: ["this night", "tonight"],
    on: "ka\u0294i\xB7k\u028C\u0301\xB7 wahsuta\xB7t\xE9\u035F\xB7"
  }, {
    en: "the other night",
    on: "oy\xE1\xB7 tshitkwa\u0294shu\xB7t\xE9\xB7"
  }, {
    en: "how many nights?",
    on: "T\xF3\xB7 niwahsu\xB7t\xE1ke\u0332\u0294"
  }, {
    en: "when it gets dark",
    on: "tshity\xF3\xB7kalas"
  }];
  const timePhrases = [{
    en: "a long time",
    on: "wahu\xB7n\xEDse\u0294"
  }, {
    en: "a short time",
    on: "k\u028C\u0294 nikal\xED\xB7wes"
  }, {
    en: "all the time",
    on: "ya\u0294teka\xB7k\xFA\xB7te"
  }, {
    en: "how long of a time?",
    on: ["T\xF3\xB7 niwahu\xB7ni\u0294s\xE9\u0332", "T\xF3\xB7 nahe"]
  }];
  const tomorrowPhrases = [{
    en: "tomorrow",
    on: "\u028Cy\xF3lh\u028Cne\u0332\u0294"
  }, {
    en: "tomorrow night",
    on: ["\u028Cy\xF3lh\u028Cne\u0294", "\u028Cy\xF3\xB7kalawe\u0294"]
  }, {
    en: "tomorrow evening",
    on: ["\u028Cy\xF3lh\u028Cne\u0294", "yo\u0294kala\xB7sne\u0294"]
  }, {
    en: "the day after tomorrow",
    on: "oy\xE1\xB7 y\u028Ctsy\xF3lh\u028Cne\u0294"
  }];
  const weekendPhrases = [{
    en: "weekend",
    on: "yaw\u028Ctokta\xB7u"
  }, {
    en: "this (coming) weekend",
    on: "\u028Cw\u028Ctokta"
  }, {
    en: "this past weekend",
    on: "yautokta\xB7u"
  }];
  const weekPhrases = [{
    en: "all week",
    on: "ya\u0294tew\u028C\xB7t\xE1\xB7ke"
  }, {
    en: "during the week",
    on: "tsi\u0294 niw\u028C\xB7t\xE9s"
  }, {
    en: "every week",
    on: "ya\u0294tew\u028C\xB7t\xE1ke"
  }, {
    en: "last week",
    on: "sw\u028Ctatk\u028C\u0301"
  }, {
    en: "next week",
    on: "y\u028Csw\u028C\xB7t\xE1t"
  }, {
    en: "how many weeks?",
    on: "T\xF3\xB7 niw\u028C\xB7t\xE1ke\u0332"
  }];
  const yearPhrases = [{
    en: "all year",
    on: "ohslakwek\xFA"
  }, {
    en: ["during the year", "through the year"],
    on: "tsi\u0294 niy\xF3hsles"
  }, {
    en: "every year",
    on: "nya\u0294teyohsla\xB7k\xE9\u035F"
  }, {
    en: "last year",
    on: "tsyohslatk\u028C\u0301"
  }, {
    en: "next year",
    on: "y\u028Ctsyohsl\xE1\xB7te\u0294"
  }, {
    en: "the other year",
    on: "oy\xE1\xB7 tshikohsl\xE1\xB7ke\u0332"
  }, {
    en: "a particular year",
    on: "ka\u0294i\xB7k\u028C\u0301\xB7 yohsla\xB7t\xE9\xB7"
  }, {
    en: "how many years?",
    on: "niyohslak\xE9\u0332"
  }, {
    en: "one year after another",
    on: "yohslat\xE9ni"
  }];
  const yesterdayPhrases = [{
    en: "yesterday",
    on: "the\xB7t\u028C\u0301\xB7"
  }, {
    en: "the day before yesterday",
    on: "o\xB7y\xE1 tshithe\xB7t\u028C\u0301"
  }];
  const afternoonPhrases = [{
    en: "afternoon",
    on: "yotuk\xF3htu \u028Ct\u0301i"
  }, {
    en: "noon",
    on: ["\u028C\u0301ti", "\u028C\u0301ty\u028C ni\xB7k\xE1le\u0294"]
  }];
  const otherPhrases = [{
    en: "always",
    on: "ty\xF3htkut"
  }, {
    en: "eclipse",
    on: "ut\u028Chni\u0294t\xE1htu\u0294"
  }, {
    en: "more often",
    on: "s\u028C\u0301ha\u0294 yotk\xE1\xB7te\u0294"
  }, {
    en: "never",
    on: "y\xE1h new\u028Ct\xFA"
  }, {
    en: ["now", "today"],
    on: ["nu\u0294\xFA\xB7wa\u0332\u0294", "n\u028C\u0294\xFA\xB7wa\u0332\u0294"]
  }, {
    en: "often",
    on: "yotk\xE1\xB7te\u0294"
  }, {
    en: "sometimes",
    on: "swatye\xB7l\u028C\u0301"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day", level, children: "Times of day" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 240,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Below is a bunch of phrases related to what time of day it is (not a specific clock time)." }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 243,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-times", level: level + 1, children: "Times" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: timePhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-daytime", level: level + 1, children: "Day, daytime" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: dayPh\u028Cases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 256,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-morning", level: level + 1, children: "Morning" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 258,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: morningPhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 261,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-afternoon", level: level + 1, children: "Afternoon" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 263,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: afternoonPhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 266,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-evening", level: level + 1, children: "Evening" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 268,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: eveningPhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 271,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-night", level: level + 1, children: "Night" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 273,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: nightPhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 276,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-tomorrow", level: level + 1, children: "Tomorrow" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 278,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: tomorrowPhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 281,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-yesterday", level: level + 1, children: "Yesterday" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 283,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: yesterdayPhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 286,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-week", level: level + 1, children: "Week" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 288,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: weekPhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 291,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-weekend", level: level + 1, children: "Weekend" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 293,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: weekendPhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 296,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-month", level: level + 1, children: "Months" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 298,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: monthPhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 301,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-year", level: level + 1, children: "Years" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 303,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: yearPhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 306,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "times-of-day-other", level: level + 1, children: "Other Phrases" }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 308,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: otherPhrases }, void 0, false, {
      fileName: "app/components/articles/TimesOfDay.tsx",
      lineNumber: 311,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/TimesOfDay.tsx",
    lineNumber: 239,
    columnNumber: 10
  }, this);
}
_c = TimesOfDayArticle;
var _c;
$RefreshReg$(_c, "TimesOfDayArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  TimesOfDayArticle
};
//# sourceMappingURL=/build/_shared/chunk-ATVUT6YN.js.map
