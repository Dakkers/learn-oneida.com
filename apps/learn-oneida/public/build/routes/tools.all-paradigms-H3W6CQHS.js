import {
  MODULE_5_VERB_TENSE_LIST,
  createModule5VerbsList,
  module5VerbTenseMap
} from "/build/_shared/chunk-ALRV36ZB.js";
import {
  MODULE_6_VERB_TENSE_LIST,
  createModule6VerbList,
  module6VerbTenseMap
} from "/build/_shared/chunk-U2VTXW4J.js";
import {
  Select
} from "/build/_shared/chunk-K7EXP22E.js";
import {
  ParadigmTable
} from "/build/_shared/chunk-T36NX3RM.js";
import "/build/_shared/chunk-KWEO3TI5.js";
import "/build/_shared/chunk-ZLJ4PDKU.js";
import "/build/_shared/chunk-D4UPLYI2.js";
import {
  Button
} from "/build/_shared/chunk-EFPAQ3UL.js";
import "/build/_shared/chunk-VSCVEPQN.js";
import "/build/_shared/chunk-5ZKYN6D5.js";
import "/build/_shared/chunk-VK5ZCJVM.js";
import "/build/_shared/chunk-Z2WNLPTD.js";
import "/build/_shared/chunk-Z7H33W4S.js";
import "/build/_shared/chunk-CEX5NOEO.js";
import "/build/_shared/chunk-YUHBZFFF.js";
import "/build/_shared/chunk-V7VJQMFC.js";
import "/build/_shared/chunk-SUXJSOIA.js";
import "/build/_shared/chunk-7MJPIPI2.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import {
  TableWrapper
} from "/build/_shared/chunk-KIXTCICO.js";
import {
  TextBreakdown
} from "/build/_shared/chunk-KBT2IGLR.js";
import "/build/_shared/chunk-YNSSGAWD.js";
import "/build/_shared/chunk-LU2G44XZ.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
import "/build/_shared/chunk-T7AJFEZW.js";
import "/build/_shared/chunk-KFDBZIFX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/tools.all-paradigms.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/tools.all-paradigms.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/tools.all-paradigms.tsx"
  );
  import.meta.hot.lastModified = "1718240757474.8274";
}
var meta = () => {
  return [{
    title: "All Paradigms"
  }, {
    name: "description",
    content: "All paradigms for each module"
  }];
};
function ToolsAllParadigms() {
  _s();
  const [module, setModule] = (0, import_react.useState)("m6");
  const [hasSubmitted, setHasSubmitted] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "print:hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 1, children: "All Paradigms" }, void 0, false, {
        fileName: "app/routes/tools.all-paradigms.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "end", gap: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Select, { label: "Module", onChange: setModule, options: [{
          label: "Module 5",
          value: "m5"
        }, {
          label: "Module 5 (Legacy)",
          value: "m5-legacy"
        }, {
          label: "Module 6",
          value: "m6"
        }], value: module }, void 0, false, {
          fileName: "app/routes/tools.all-paradigms.tsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { disabled: !module, onClick: () => setHasSubmitted(true), children: "Submit" }, void 0, false, {
          fileName: "app/routes/tools.all-paradigms.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tools.all-paradigms.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tools.all-paradigms.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    !hasSubmitted ? null : module === "m6" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Module6Paradigms, {}, void 0, false, {
      fileName: "app/routes/tools.all-paradigms.tsx",
      lineNumber: 65,
      columnNumber: 49
    }, this) : module === "m5" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Module5Paradigms, {}, void 0, false, {
      fileName: "app/routes/tools.all-paradigms.tsx",
      lineNumber: 65,
      columnNumber: 90
    }, this) : module === "m5-legacy" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Module5ParadigmsAsIs, {}, void 0, false, {
      fileName: "app/routes/tools.all-paradigms.tsx",
      lineNumber: 65,
      columnNumber: 138
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/tools.all-paradigms.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s(ToolsAllParadigms, "epz/faMJm7EME+FsoxFbPHMtu6A=");
_c = ToolsAllParadigms;
function Module5Paradigms() {
  const data = createModule5VerbsList();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: data.map((v) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 2, children: v.en }, void 0, false, {
      fileName: "app/routes/tools.all-paradigms.tsx",
      lineNumber: 74,
      columnNumber: 11
    }, this),
    MODULE_5_VERB_TENSE_LIST.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 3, children: [
        v.en,
        " \u2014 ",
        module5VerbTenseMap[t]
      ] }, t, true, {
        fileName: "app/routes/tools.all-paradigms.tsx",
        lineNumber: 76,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        pageBreakAfter: "always"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ParadigmTable, { columnVisibility: {
        pronounOneida: true,
        pronounEnglish: false,
        translation: true
      }, data: v[t] }, void 0, false, {
        fileName: "app/routes/tools.all-paradigms.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/tools.all-paradigms.tsx",
        lineNumber: 80,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tools.all-paradigms.tsx",
      lineNumber: 75,
      columnNumber: 46
    }, this))
  ] }, v.key, true, {
    fileName: "app/routes/tools.all-paradigms.tsx",
    lineNumber: 73,
    columnNumber: 22
  }, this)) }, void 0, false, {
    fileName: "app/routes/tools.all-paradigms.tsx",
    lineNumber: 72,
    columnNumber: 10
  }, this);
}
_c2 = Module5Paradigms;
function Module6Paradigms() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: createModule6VerbList().map((v) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 2, children: v.en }, void 0, false, {
      fileName: "app/routes/tools.all-paradigms.tsx",
      lineNumber: 97,
      columnNumber: 11
    }, this),
    MODULE_6_VERB_TENSE_LIST.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { level: 3, children: [
        v.en,
        " \u2014 ",
        module6VerbTenseMap[t]
      ] }, t, true, {
        fileName: "app/routes/tools.all-paradigms.tsx",
        lineNumber: 99,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        pageBreakAfter: "always"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ParadigmTable, { columnVisibility: {
        pronounOneida: true,
        pronounEnglish: false,
        translation: true
      }, data: v[t] }, void 0, false, {
        fileName: "app/routes/tools.all-paradigms.tsx",
        lineNumber: 106,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/tools.all-paradigms.tsx",
        lineNumber: 103,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tools.all-paradigms.tsx",
      lineNumber: 98,
      columnNumber: 46
    }, this))
  ] }, v.key, true, {
    fileName: "app/routes/tools.all-paradigms.tsx",
    lineNumber: 96,
    columnNumber: 41
  }, this)) }, void 0, false, {
    fileName: "app/routes/tools.all-paradigms.tsx",
    lineNumber: 95,
    columnNumber: 10
  }, this);
}
_c3 = Module6Paradigms;
function Module5ParadigmsAsIs() {
  const data = createModule5VerbsList();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [{
    accessorKey: "left",
    // @ts-expect-error TODO
    cell: (value, row) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: row.en }, void 0, false, {
        fileName: "app/routes/tools.all-paradigms.tsx",
        lineNumber: 123,
        columnNumber: 14
      }, this);
    },
    header: ""
  }, {
    accessorKey: "middle",
    // @ts-expect-error TODO
    cell: (value, row) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", justify: "center", gap: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: row.prs.phrases[0].breakdown, typeFallback: row.prs.type }, void 0, false, {
          fileName: "app/routes/tools.all-paradigms.tsx",
          lineNumber: 131,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: row.past.phrases[0].breakdown, typeFallback: row.past.type }, void 0, false, {
          fileName: "app/routes/tools.all-paradigms.tsx",
          lineNumber: 132,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tools.all-paradigms.tsx",
        lineNumber: 130,
        columnNumber: 14
      }, this);
    },
    header: ""
  }, {
    accessorKey: "right",
    // @ts-expect-error TODO
    cell: (value, row) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", justify: "center", gap: 4, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: row.fut.phrases[0].breakdown, typeFallback: row.fut.type }, void 0, false, {
          fileName: "app/routes/tools.all-paradigms.tsx",
          lineNumber: 141,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: row.ifut.phrases[0].breakdown, typeFallback: row.ifut.type }, void 0, false, {
          fileName: "app/routes/tools.all-paradigms.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: row.cmd.phrases[0].breakdown, typeFallback: row.cmd.type }, void 0, false, {
          fileName: "app/routes/tools.all-paradigms.tsx",
          lineNumber: 143,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/tools.all-paradigms.tsx",
        lineNumber: 140,
        columnNumber: 14
      }, this);
    },
    header: ""
  }], data }, void 0, false, {
    fileName: "app/routes/tools.all-paradigms.tsx",
    lineNumber: 119,
    columnNumber: 10
  }, this);
}
_c4 = Module5ParadigmsAsIs;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "ToolsAllParadigms");
$RefreshReg$(_c2, "Module5Paradigms");
$RefreshReg$(_c3, "Module6Paradigms");
$RefreshReg$(_c4, "Module5ParadigmsAsIs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ToolsAllParadigms as default,
  meta
};
//# sourceMappingURL=/build/routes/tools.all-paradigms-H3W6CQHS.js.map
