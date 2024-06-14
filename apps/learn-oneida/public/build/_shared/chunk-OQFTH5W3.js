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

// app/components/articles/Seasons.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/Seasons.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/Seasons.tsx"
  );
  import.meta.hot.lastModified = "1711838251924.0024";
}
var DATA_SEASONS = [{
  en: "Spring",
  on: ["kukwi\xB7t\xE9\xB7", "kukwit\xE9\xB7ne"],
  key: "spring"
}, {
  en: "Summer",
  on: "kwa\u0294k\u028Cnh\xE9\xB7ke",
  key: "summer"
}, {
  en: "Autumn",
  on: "kan\u028Cn\xE1\xB7ke",
  key: "fall"
}, {
  en: "Winter",
  on: "kohsl\xE1\xB7ke",
  key: "winter"
}];
function SeasonsArticle({
  level = 1
}) {
  const seasonsDuring = [{
    en: "During the spring",
    on: "tsi\u0294 nikukwite\xB7se\u0294"
  }, {
    en: "During the summer",
    on: "tsi\u0294 niwa\u0294k\u028C\u0301nhes"
  }, {
    en: "During the autumn",
    on: "tshi\u0294tkan\u028Cn\xE1\xB7ke"
  }, {
    en: "During the winter",
    on: "tsi\u0294 niwak\xF3hsles"
  }];
  const otherPhrases = [{
    en: "Seasons",
    on: ["wakanhat\xE9ni\u0294", "wak\u028Cnhat\xE9ni\u0294"]
  }, {
    en: "Last summer",
    on: "tshikwa\u0294k\u028C\u0301nhe\u0294"
  }, {
    en: "Each winter",
    on: "ya\u0294tewakohsl\xE1ke"
  }, {
    en: "Last winter",
    on: "tshikohsl\xE1\xB7ke"
  }, {
    en: "Wintertime",
    on: "kohsla\u0294k\xE9\xB7ne"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "seasons", level, children: "Seasons" }, void 0, false, {
      fileName: "app/components/articles/Seasons.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: DATA_SEASONS }, void 0, false, {
      fileName: "app/components/articles/Seasons.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "seasons-during", level: level + 1, children: "During a season" }, void 0, false, {
      fileName: "app/components/articles/Seasons.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: seasonsDuring }, void 0, false, {
      fileName: "app/components/articles/Seasons.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "seasons-other", level: level + 1, children: "Other phrases" }, void 0, false, {
      fileName: "app/components/articles/Seasons.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: otherPhrases }, void 0, false, {
      fileName: "app/components/articles/Seasons.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Seasons.tsx",
    lineNumber: 73,
    columnNumber: 10
  }, this);
}
_c = SeasonsArticle;
var _c;
$RefreshReg$(_c, "SeasonsArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  DATA_SEASONS,
  SeasonsArticle
};
//# sourceMappingURL=/build/_shared/chunk-OQFTH5W3.js.map
