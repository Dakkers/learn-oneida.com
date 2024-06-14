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

// app/components/articles/ClockTime.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/ClockTime.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/ClockTime.tsx"
  );
  import.meta.hot.lastModified = "1717069385780.7822";
}
var simpleExamples = [["1:00 a.m.", "\xFAska niyohwist\xE1\xB7e ast\xE9htsi\u0294"], ["7:00 a.m.", "tsy\xE1\xB7tak niyohwist\xE1\xB7e astehtsi"], ["11:00 a.m.", "\xFAska yawa\xB7l\xE9 niyohwist\xE1\xB7e astehtsi"], ["1:00 p.m.", "\xFAska niyohwist\xE1\xB7e yotuk\xF3htu \u028C\u0301ti"], ["7:00 p.m.", "tsy\xE1\xB7tak niyohwist\xE1\xB7e yotuk\xF3htu \u028C\u0301ti"], ["11:00 p.m.", "\xFAska yawa\xB7l\xE9 niyohwist\xE1\xB7e yotuk\xF3htu \u028C\u0301ti"]].map(([en, on]) => ({
  en,
  on
}));
var minutesExamples = [["2:05 a.m.", "w\xEDsk nikah\xED\xB7kalake yotuk\xF3htu t\xE9kni niyohwist\xE1\xB7e ast\xE9htsi\u0294"], ["3:30 a.m.", "tsha\u0294tewahs\u028Cn\u028C\u0301 \xE1hs\u028C niyohwist\xE1\xB7e ast\xE9htsi\u0294"], ["4:50 a.m.", "oye\xB7l\xED\xB7 nikah\xED\xB7kalake tyono\xB7l\xFAhe w\xEDsk niyohwist\xE1\xB7e ast\xE9htsi\u0294"], ["2:05 p.m.", "w\xEDsk nikah\xED\xB7kalake yotuk\xF3htu t\xE9kni niyohwist\xE1\xB7e yotuk\xF3htu \u028C\u0301ti"], ["3:30 p.m.", "tsha\u0294tewahs\u028Cn\u028C\u0301 \xE1hs\u028C niyohwist\xE1\xB7e yotuk\xF3htu \u028C\u0301ti"], ["5:50 p.m.", "oye\xB7l\xED\xB7 nikah\xED\xB7kalake tyono\xB7l\xFAhe w\xEDsk niyohwist\xE1\xB7e yotuk\xF3htu \u028C\u0301ti"]].map(([en, on]) => ({
  en,
  on
}));
var eveningExamples = [["8:00 p.m.", "t\xE9klu niyohwist\xE1\xB7e \u028Cy\xF3\xB7kalahwe\u0294"], ["9:00 p.m.", "w\xE1tlu niyohwist\xE1\xB7e yo\u0294kal\xE1sh\u028C"], ["10:00 p.m.", "oye\xB7l\xED\xB7 niyohwist\xE1\xB7e kwa\u0294ashut\xE9\xB7ke"]].map(([en, on]) => ({
  en,
  on
}));
var lastExamples = [["2:05 p.m.", "ost\xFAha yotuk\xF3htu t\xE9kni niyohwist\xE1\xB7e yotuk\xF3htu \u028C\u0301ti"], ["4:55 p.m", "n\u028C\u0301 ki\u0294 th\xF3ha w\xEDsk niyohwist\xE1\xB7e yotuk\xF3htu \u028C\u0301ti"]].map(([en, on]) => ({
  en,
  on
}));
function ClockTimeArticle({
  level = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "clock-time", level, children: "Clock Time" }, void 0, false, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Clock time in Oneida is a bit tricky. Let\u2018s start with a couple words:" }, void 0, false, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        "noon: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "\u028C\u0301ty\u028C ni\xB7k\xE1le\u0332\u0294\u0332" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        " OR ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "\u028Ct\xED" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 55,
          columnNumber: 44
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        "midnight: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "ahs\xFAtha" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 58,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        "morning: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "ast\xE9htsi\u0294" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 61,
          columnNumber: 20
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        "before: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "tyono\xB7l\xFAhe" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 64,
          columnNumber: 19
        }, this),
        " OR ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "kalo tsi\u0294 niyo\xB7l\xE9\xB7" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 64,
          columnNumber: 40
        }, this),
        " OR",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "tsi\u0294 niyo\xB7l\xE9" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        "after: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "yotuk\xF3htu" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 68,
          columnNumber: 18
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        "half-past: ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "tsha\u0294tewahs\u028Cn\u028C" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 71,
          columnNumber: 22
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "So if someone asks you what time it is, and it\u2018s midnight or noon, you can simply say",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "ahs\xFAtha" }, void 0, false, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      " or ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "\u028Ct\xED" }, void 0, false, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 77,
        columnNumber: 27
      }, this),
      ", respectively. Now, let\u2018s look at a couple simple examples:"
    ] }, void 0, true, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: simpleExamples }, void 0, false, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "To incorporate minutes, there are a couple rules to establish..." }, void 0, false, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: 'When it\u2018s less than 30 minutes: "X minutes after the hour"' }, void 0, false, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: 'When it\u2018s exactly 30 minutes: "half-past"' }, void 0, false, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: 'When it\u2018s more than 30 minutes: "X minutes before the next hour"' }, void 0, false, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "If this is confusing, take a look at the examples below." }, void 0, false, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: minutesExamples }, void 0, false, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "To make things even more confusing, you may instead hear:" }, void 0, false, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: eveningExamples }, void 0, false, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 106,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "The new words above are:" }, void 0, false, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "yo\u0294kal\xE1sh\u028C" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        ": evening (right now)"
      ] }, void 0, true, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "\u028Cy\xF3\xB7kalahwe" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        ": this evening / tonight"
      ] }, void 0, true, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "kwa\u0294ashut\xE9\xB7ke" }, void 0, false, {
          fileName: "app/components/articles/ClockTime.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        ": night-time"
      ] }, void 0, true, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "Lastly, we can use ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "ost\xFAha" }, void 0, false, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 122,
        columnNumber: 28
      }, this),
      " (a little bit) and ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "n\u028C\u0301 ki\u0294 th\xF3ha" }, void 0, false, {
        fileName: "app/components/articles/ClockTime.tsx",
        lineNumber: 122,
        columnNumber: 61
      }, this),
      " ",
      "(it is almost...) for more variety:"
    ] }, void 0, true, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: TableWrapper.columnsEnglishOneida, data: lastExamples }, void 0, false, {
      fileName: "app/components/articles/ClockTime.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/ClockTime.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_c = ClockTimeArticle;
var _c;
$RefreshReg$(_c, "ClockTimeArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ClockTimeArticle
};
//# sourceMappingURL=/build/_shared/chunk-37CII2GP.js.map
