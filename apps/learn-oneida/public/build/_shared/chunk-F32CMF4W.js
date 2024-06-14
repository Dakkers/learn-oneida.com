import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import {
  TableWrapper
} from "/build/_shared/chunk-KIXTCICO.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/articles/CountingTime.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/CountingTime.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/CountingTime.tsx"
  );
  import.meta.hot.lastModified = "1717069385781.4854";
}
function CountingTimeArticle({
  level = 1
}) {
  const [firstTable, secondTable] = createCountingTimeData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "counting-time", level, children: "Counting Lengths of Time" }, void 0, false, {
      fileName: "app/components/articles/CountingTime.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [{
      accessorKey: "num",
      header: ""
    }, {
      accessorKey: "minutes",
      header: "Minutes"
    }, {
      accessorKey: "hours",
      header: "Hours"
    }, {
      accessorKey: "days",
      header: "Days"
    }, {
      accessorKey: "nights",
      header: "Nights"
    }], data: firstTable }, void 0, false, {
      fileName: "app/components/articles/CountingTime.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [{
      accessorKey: "num",
      header: ""
    }, {
      accessorKey: "weeks",
      header: "Weeks"
    }, {
      accessorKey: "months",
      header: "Months"
    }, {
      accessorKey: "years",
      header: "Years"
    }], data: secondTable }, void 0, false, {
      fileName: "app/components/articles/CountingTime.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/CountingTime.tsx",
    lineNumber: 27,
    columnNumber: 10
  }, this);
}
_c = CountingTimeArticle;
function createCountingTimeData() {
  const firstTable = [{
    num: 1,
    minutes: "swasliyeta\u0294k",
    hours: "uska kahwista\u0294eks",
    days: "sw\u028Chn\xEDslat",
    nights: "swahsu\xB7t\xE1t"
  }, {
    num: 2,
    minutes: "tewasliyeta\u0294k",
    hours: "tekahwista\u0294eks",
    days: "tew\u028Chnislak\xE9",
    nights: "tewahsu\xB7t\xE1ke"
  }, {
    num: 3,
    minutes: "\xE1hs\u028C niwasliyeta\u0294k",
    hours: "\xE1hs\u028C nikahwista\u0294eks",
    days: "\xE1hs\u028C niw\u028Chnislak\xE9",
    nights: "\xE1hs\u028C niwahsu\xB7t\xE1ke"
  }];
  const secondTable = [{
    num: 1,
    weeks: "sw\u028C\xB7t\xE1t",
    months: "sw\u028Chn\xED\xB7tat",
    years: "tsy\xF3hslat"
  }, {
    num: 2,
    weeks: "tew\u028C\xB7t\xE1ke",
    months: "tew\u028Chn\xED\xB7take",
    years: "tey\xF3hslake\u0294"
  }, {
    num: 3,
    weeks: "\xE1hs\u028C niw\u028C\xB7t\xE1ke",
    months: "\xE1hs\u028C niw\u028Chn\xED\xB7take",
    years: "\xE1hs\u028C niy\xF3hslak\xE9"
  }];
  return [firstTable, secondTable];
}
var _c;
$RefreshReg$(_c, "CountingTimeArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CountingTimeArticle,
  createCountingTimeData
};
//# sourceMappingURL=/build/_shared/chunk-F32CMF4W.js.map
