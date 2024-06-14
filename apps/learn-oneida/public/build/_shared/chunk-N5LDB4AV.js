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

// app/components/articles/Months.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/Months.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/Months.tsx"
  );
  import.meta.hot.lastModified = "1711838251925.8784";
}
var DATA_MONTHS = [{
  en: "January",
  on: "Teyakoh\xFAhtya\u0294ks",
  translation: "Their ears are freezing",
  key: "jan"
}, {
  en: "February",
  on: "Tsha\u0294tekohs\xE9lha\u0294",
  translation: "Half of winter",
  key: "feb"
}, {
  en: "March",
  on: "Tew\u028Chn\xEDslya\u0294ks",
  translation: "The day is cut in two",
  key: "mar"
}, {
  en: "April",
  on: "Wahsakayu\xB7t\xE9\xB7se\u0294",
  translation: "It's thundering",
  key: "apr"
}, {
  en: "May",
  on: "Latiy\u028C\u0301thos",
  translation: "They plant",
  key: "may"
}, {
  en: "June",
  on: "Aw\u028Chihte\u0294",
  translation: " Strawberry",
  key: "jun"
}, {
  en: "July",
  on: "Ohy\xF3tsheli\u0294",
  translation: "Green string bean",
  key: "jul"
}, {
  en: "August",
  on: "On\u028C\u0301stase\u0294",
  translation: "New corn",
  key: "aug"
}, {
  en: "September",
  on: "Yey\u028Cth\xF3kwas",
  translation: "Someone harvests",
  key: "sep"
}, {
  en: "October",
  on: "Yut\xE9khway\u028Che\u0294",
  translation: "Someone stores food",
  key: "oct"
}, {
  en: "November",
  on: "Tehut\u028Cnuhela\xB7t\xFAhe\u0294",
  translation: "They give thanks",
  key: "nov"
}, {
  en: "December",
  on: "Wahsu\xB7t\xE9s",
  translation: "It's a long night",
  key: "dec"
}];
function MonthsArticle({
  level = 1
}) {
  const monthsNext = [{
    en: "next January",
    on: "T\u028Cyakoh\xFAhtya\u0294ks"
  }, {
    en: "next February",
    on: "Tsha\u0294t\u028Ckohs\xE9lha\u0294"
  }];
  const monthsLast = [{
    en: "last January",
    on: "Tsha\u0294teyakoh\xFAhtya\u0294ksk\u028C\u0301"
  }, {
    en: "last February",
    on: "Tsha\u0294tekohselha\u0294k\u028C\u0301"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "months", level, children: "Months" }, void 0, false, {
      fileName: "app/components/articles/Months.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [...TableWrapper.columnsEnglishOneida, {
      accessorKey: "translation",
      header: "Literal translation"
    }], data: DATA_MONTHS }, void 0, false, {
      fileName: "app/components/articles/Months.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "months-last", level: level + 1, children: "Last month" }, void 0, false, {
      fileName: "app/components/articles/Months.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: monthsLast }, void 0, false, {
      fileName: "app/components/articles/Months.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "months-next", level: level + 1, children: "Next month" }, void 0, false, {
      fileName: "app/components/articles/Months.tsx",
      lineNumber: 116,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: monthsNext }, void 0, false, {
      fileName: "app/components/articles/Months.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Months.tsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_c = MonthsArticle;
var _c;
$RefreshReg$(_c, "MonthsArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  DATA_MONTHS,
  MonthsArticle
};
//# sourceMappingURL=/build/_shared/chunk-N5LDB4AV.js.map
