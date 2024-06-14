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
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/articles/DaysOfTheWeek.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/DaysOfTheWeek.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/DaysOfTheWeek.tsx"
  );
  import.meta.hot.lastModified = "1711838251927.1133";
}
var DATA_DAYS_OF_WEEK = [{
  en: "Sunday",
  on: "Yautatok\u028C\u0301htu",
  key: "sun"
}, {
  en: "Monday",
  on: "Yaut\u028Ct\xE1\xB7u",
  key: "mon"
}, {
  en: "Tuesday",
  on: "Tekn\xEDhatut",
  key: "tue"
}, {
  en: "Wednesday",
  on: "Ahs\u028C\u0301hatut",
  key: "wed"
}, {
  en: "Thursday",
  on: "Kayel\xEDhatut",
  key: "thu"
}, {
  en: "Friday",
  on: "W\xEDskhatut",
  key: "fri"
}, {
  en: "Saturday",
  on: "\u0245t\xE1kta\u0294",
  key: "sat"
}];
function DaysOfTheWeekArticle({
  level = 1
}) {
  const daysSpecific = [{
    en: "on Sunday",
    on: "Yautatok\u028Chtu\xB7ne\u0294"
  }, {
    en: "on Monday",
    on: "Yaut\u028Cta\u0294\xFA\xB7ne\u0294"
  }, {
    en: "on Tuesday",
    on: "Teknihat\xFAtne\u0294"
  }, {
    en: "on Wednesday",
    on: "Ahs\u028Chat\xFAtne\u0294"
  }, {
    en: "on Thursday",
    on: "Kayelihat\xFAtne\u0294"
  }, {
    en: "on Friday",
    on: "Wiskhat\xFAtne\u0294"
  }, {
    en: "on Saturday",
    on: "\u0245takt\xE1hne\u0294"
  }];
  const daysLast = [{
    en: "last Sunday",
    on: "tshaw\u028Ctatok\u028C\u0301htu"
  }, {
    en: "last Monday",
    on: "tshaw\u028Ct\u028C\xB7t\xE1ne\u0294"
  }, {
    en: "last Tuesday",
    on: "tsha\u0294tekn\xEDhatuht"
  }, {
    en: "last Wednesday",
    on: "tshiwahs\u028C\u0301hatuht"
  }, {
    en: "last Thursday",
    on: "tshikayel\xEDhatuht"
  }, {
    en: "last Friday",
    on: "tshiw\xEDskhatut"
  }, {
    en: "last Saturday",
    on: "tshiw\u028Ct\xE1kta\u0294"
  }];
  const daysNext = [{
    en: "next Sunday",
    on: "y\u028Csw\u028Ctatok\u028C\u0301htu"
  }, {
    en: "next Monday",
    on: "oy\xE1\xB7 y\u028Csw\u028Ct\u028C\xB7t\xE1ne\u0294"
  }, {
    en: "next Tuesday",
    on: "oy\xE1\xB7 nya\u0294teskn\xEDhatuht"
  }, {
    en: "next Wednesday",
    on: "oy\xE1\xB7 nya\u0294teswahs\u028C\u0301hatuht"
  }, {
    en: "next Thursday",
    on: "oy\xE1\xB7 nya\u0294teskayel\xEDhatuht"
  }, {
    en: "next Friday",
    on: "oy\xE1\xB7 y\u028Csw\xEDskhatut"
  }, {
    en: "next Saturday",
    on: "oy\xE1\xB7 y\u028Csw\u028Ct\xE1kta\u0294"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "days-of-week", level, children: "Days of the week" }, void 0, false, {
      fileName: "app/components/articles/DaysOfTheWeek.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: DATA_DAYS_OF_WEEK }, void 0, false, {
      fileName: "app/components/articles/DaysOfTheWeek.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "days-on", level: level + 1, children: "On a specific day" }, void 0, false, {
      fileName: "app/components/articles/DaysOfTheWeek.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: daysSpecific }, void 0, false, {
      fileName: "app/components/articles/DaysOfTheWeek.tsx",
      lineNumber: 131,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "days-last", level: level + 1, children: "Last..." }, void 0, false, {
      fileName: "app/components/articles/DaysOfTheWeek.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: daysLast }, void 0, false, {
      fileName: "app/components/articles/DaysOfTheWeek.tsx",
      lineNumber: 136,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "days-next", level: level + 1, children: "Next..." }, void 0, false, {
      fileName: "app/components/articles/DaysOfTheWeek.tsx",
      lineNumber: 138,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: daysNext }, void 0, false, {
      fileName: "app/components/articles/DaysOfTheWeek.tsx",
      lineNumber: 141,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/DaysOfTheWeek.tsx",
    lineNumber: 122,
    columnNumber: 10
  }, this);
}
_c = DaysOfTheWeekArticle;
var _c;
$RefreshReg$(_c, "DaysOfTheWeekArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  DATA_DAYS_OF_WEEK,
  DaysOfTheWeekArticle
};
//# sourceMappingURL=/build/_shared/chunk-5YBPEAYN.js.map
