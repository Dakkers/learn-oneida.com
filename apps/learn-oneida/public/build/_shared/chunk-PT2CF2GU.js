import {
  List
} from "/build/_shared/chunk-VKR6BTYO.js";
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

// app/components/articles/CountingPeople.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/CountingPeople.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/CountingPeople.tsx"
  );
  import.meta.hot.lastModified = "1717069385781.1392";
}
function CountingPeopleArticle({
  level = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "counting-people", level, children: "Counting People" }, void 0, false, {
      fileName: "app/components/articles/CountingPeople.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [
      {
        accessorKey: "en",
        header: "English"
      },
      // @ts-expect-error To be addressed in LO-12
      TableWrapper.createTextBreakdownColumn("PR")
    ], data: [["one human being", ["ts", {
      text: "y"
    }, "ukwe\xB7t\xE1t"]], ["two human beings", [["te", "DUAL"], {
      text: "y"
    }, "ukwe\xB7t\xE1ke\u0294"]], ["three human beings", ["\xE1hs\u028C ni", {
      text: "y"
    }, "ukwe\xB7t\xE1ke\u0294"]], ["four human beings", ["kay\xE9 ni", {
      text: "y"
    }, "ukwe\xB7t\xE1ke\u0294"]], ["five human beings", ["w\xEDsk ni", {
      text: "y"
    }, "ukwe\xB7t\xE1ke\u0294"]]].map(([en, breakdown]) => ({
      en,
      breakdown
    })) }, void 0, false, {
      fileName: "app/components/articles/CountingPeople.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [
      {
        accessorKey: "en",
        header: "English"
      },
      // @ts-expect-error To be addressed in LO-12
      TableWrapper.createTextBreakdownColumn("PR", {
        accessorKey: "male",
        header: "Male(s)"
      }),
      // @ts-expect-error To be addressed in LO-12
      TableWrapper.createTextBreakdownColumn("PR", {
        accessorKey: "female",
        header: "Female(s)"
      })
    ], data: [["one", ["s", {
      text: "ha"
    }, "y\xE1\xB7tat"], ["ts", {
      text: "ye"
    }, "y\xE1\xB7tat"]], ["two", [["te", "DUAL"], {
      text: "hni"
    }, "y\xE1hse"], [["te", "DUAL"], {
      text: "kni"
    }, "y\xE1hse"]], ["three", ["\xE1hs\u028C ni", {
      text: "hati"
    }], ["\xE1hs\u028C ni", {
      text: "kuti"
    }]], ["four", ["kay\xE9 ni", {
      text: "hati"
    }], ["kay\xE9 ni", {
      text: "kuti"
    }]], ["five", ["w\xEDsk ni", {
      text: "hati"
    }], ["w\xEDsk ni", {
      text: "kuti"
    }]]].map(([en, male, female]) => ({
      en,
      male,
      female
    })) }, void 0, false, {
      fileName: "app/components/articles/CountingPeople.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Some concrete examples:" }, void 0, false, {
      fileName: "app/components/articles/CountingPeople.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [["one boy", "shay\xE1\xB7tat laks\xE1\xB7"], ["three girls", "\xE1hs\u028C nikut\xED kutikhsa\u2019sh\xFAha"], ["two young men", "tehniy\xE1hse tehninik\u028Chtl\xFAha"], ["one young woman", "tsyey\xE1\xB7tat yey\xE1\xB7tase"], ["three adults", "\xE1hs\u028C nihat\xED l\u028Cnukw\xE9\xB7"], ["two older women", "tehniy\xE1hse yotikhst\u028C\u0301ha"]].map(([left, right], i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
      left,
      " \u2014 ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: right }, void 0, false, {
        fileName: "app/components/articles/CountingPeople.tsx",
        lineNumber: 95,
        columnNumber: 22
      }, this)
    ] }, i, true, {
      fileName: "app/components/articles/CountingPeople.tsx",
      lineNumber: 94,
      columnNumber: 301
    }, this)) }, void 0, false, {
      fileName: "app/components/articles/CountingPeople.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/CountingPeople.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = CountingPeopleArticle;
var _c;
$RefreshReg$(_c, "CountingPeopleArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  CountingPeopleArticle
};
//# sourceMappingURL=/build/_shared/chunk-PT2CF2GU.js.map
