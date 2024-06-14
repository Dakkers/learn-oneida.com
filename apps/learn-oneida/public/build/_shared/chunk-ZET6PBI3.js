import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import {
  TableWrapper
} from "/build/_shared/chunk-KIXTCICO.js";
import {
  TextBreakdown
} from "/build/_shared/chunk-KBT2IGLR.js";
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

// app/components/articles/Relationships.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/Relationships.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/Relationships.tsx"
  );
  import.meta.hot.lastModified = "1717069385784.3987";
}
function RelationshipsArticle({
  level = 1
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "relationships", level, children: "Relationships" }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MarriedTable, { level }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InARelationshipTable, { level }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SeparatedTable, { level }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EngagedTable, { level }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SingleTable, { level }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OldManWomanTable, { level }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SpouseTable, { level }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BoyfriendGirlfriendTable, { level }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Relationships.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c = RelationshipsArticle;
var createColumns = TableWrapper.createPastTenseColumns;
function MarriedTable({
  level = 2
}) {
  const rows = [["i", "wake"], ["u", "sa"], ["m", "lo"], ["f", "yako"], ["uni", "yukni"], ["u2", "sni"], ["soni", "yukni"], ["2m", "loti"], ["2f", "yoti"], ["us", "yukwa"], ["theyni", "yukwa"], ["yall", "swa"], ["ms", "loti"], ["fs", "yoti"]].map(([pronoun, p]) => {
    return {
      pronoun,
      breakdown: [{
        text: p
      }, "ny\xE1ku\u0294"],
      breakdownPast: [{
        text: p
      }, "nyaku"]
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "married", level: level + 1, children: "Married" }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      TableWrapper,
      {
        columns: createColumns("PB", {
          suffix: "hne"
        }),
        data: rows
      },
      void 0,
      false,
      {
        fileName: "app/components/articles/Relationships.tsx",
        lineNumber: 63,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/articles/Relationships.tsx",
    lineNumber: 59,
    columnNumber: 10
  }, this);
}
_c2 = MarriedTable;
function InARelationshipTable({
  level = 2
}) {
  const rows = [{
    pronoun: "uni",
    breakdown: ["\xED", {
      text: "tn"
    }]
  }, {
    pronoun: "u2",
    breakdown: ["\xED", {
      text: "sn"
    }]
  }, {
    pronoun: "soni",
    breakdown: [{
      text: "y\xE1kn"
    }]
  }, {
    pronoun: "2m",
    breakdown: ["\xED\xB7", {
      text: "n"
    }]
  }, {
    pronoun: "2f",
    breakdown: ["\xED", {
      text: "kn"
    }]
  }].map((row) => {
    return {
      ...row,
      breakdown: [...row.breakdown, "ehse"],
      breakdownPast: [...row.breakdown, "ehs"]
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "in-a-relationship", level: level + 1, children: "In a relationship" }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      TableWrapper,
      {
        columns: createColumns("PR", {
          suffix: "kwe"
        }),
        data: rows
      },
      void 0,
      false,
      {
        fileName: "app/components/articles/Relationships.tsx",
        lineNumber: 110,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/articles/Relationships.tsx",
    lineNumber: 106,
    columnNumber: 10
  }, this);
}
_c3 = InARelationshipTable;
function SeparatedTable({
  level = 2
}) {
  const rows = [["uni", "yuky"], ["u2", "tsy"], ["soni", "yuky"], ["2m", "hon"], ["2f", "yon"]].map(([pronoun, p]) => {
    return {
      pronoun,
      breakdown: [["te", "DUAL"], {
        text: p
      }, "atekh\xE1shyu"],
      breakdownPast: [["te", "DUAL"], {
        text: p
      }, "atekhashyu"]
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "separated", level: level + 1, children: "Separated and Reconciled" }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 133,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      TableWrapper,
      {
        columns: createColumns("PB", {
          headerNow: "Separated",
          headerPast: "Reconciled",
          suffix: "hne"
        }),
        data: rows
      },
      void 0,
      false,
      {
        fileName: "app/components/articles/Relationships.tsx",
        lineNumber: 136,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/articles/Relationships.tsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_c4 = SeparatedTable;
function EngagedTable({
  level = 2
}) {
  const rows = [["i", "wake"], ["soni", "yukni"], ["ms", "loti"]].map(([pronoun, p]) => {
    return {
      pronoun,
      breakdown: [{
        text: p
      }, "ny\xE1khe\u0294"],
      breakdownPast: [{
        text: p
      }, "nk\xE1khe"]
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "engaged", level: level + 1, children: "Engaged" }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 161,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      TableWrapper,
      {
        columns: createColumns("PB", {
          suffix: "hkwe"
        }),
        data: rows
      },
      void 0,
      false,
      {
        fileName: "app/components/articles/Relationships.tsx",
        lineNumber: 164,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/articles/Relationships.tsx",
    lineNumber: 160,
    columnNumber: 10
  }, this);
}
_c5 = EngagedTable;
function SingleTable({
  level = 2
}) {
  const rows = [["i", "k"], ["u", "s"], ["m", "l"], ["f", "yu"]].map(([pronoun, p]) => {
    return {
      pronoun,
      breakdown: [{
        text: p
      }, "atatw\u028Cni\xB7y\xF3"],
      breakdownPast: [{
        text: p
      }, "atatw\u028Cniyo"]
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "single", level: level + 1, children: "Single" }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 187,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      TableWrapper,
      {
        columns: createColumns("PR", {
          suffix: "hne"
        }),
        data: rows
      },
      void 0,
      false,
      {
        fileName: "app/components/articles/Relationships.tsx",
        lineNumber: 190,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/articles/Relationships.tsx",
    lineNumber: 186,
    columnNumber: 10
  }, this);
}
_c6 = SingleTable;
function OldManWomanTable({
  level = 2
}) {
  const rows = [["i", "li", "khe"], ["u", "etshe", "she"], ["m", "lo", "shako"], ["f", "luwa", "yutate"]].map(([pronoun, m, f]) => {
    return {
      oldMan: [{
        text: m
      }, "khst\u028C\u0301ha\u0332"],
      oldWoman: [{
        text: f
      }, "khst\u028C\u0301ha\u0332"],
      pronoun
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "old-man-old-woman", level: level + 1, children: "Old Man / Old Woman" }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: 'This is a colloquial term similar to its English translation, e.g. "my old lady is a real battleaxe!"' }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [
      // @ts-expect-error To be addressed in LO-12
      ...TableWrapper.columnsPronouns,
      {
        accessorKey: "oldMan",
        // @ts-expect-error To be addressed in LO-12
        cell: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: value, typeFallback: "PP" }, void 0, false, {
          fileName: "app/components/articles/Relationships.tsx",
          lineNumber: 225,
          columnNumber: 22
        }, this),
        header: "Old man"
      },
      {
        accessorKey: "oldWoman",
        // @ts-expect-error To be addressed in LO-12
        cell: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: value, typeFallback: "PP" }, void 0, false, {
          fileName: "app/components/articles/Relationships.tsx",
          lineNumber: 230,
          columnNumber: 22
        }, this),
        header: "Old woman"
      }
    ], data: rows }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 220,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Relationships.tsx",
    lineNumber: 212,
    columnNumber: 10
  }, this);
}
_c7 = OldManWomanTable;
function SpouseTable({
  level = 2
}) {
  const rows = [["Tshyal\xE9 lo\xB7n\xE9\xB7", "Charlie's spouse"], ["S\xF3\xB7s lo\xB7n\xE9\xB7", "Susan's spouse"], ["ukyal\xE1\xB7s\xE9\u0294 lo\xB7n\xE9\xB7", "My cousin's spouse"], ["tsyat\u028C\xB7l\xF3\xB7 lo\xB7n\xE9\xB7", "Your friend's spouse"]].map(([one, en]) => ({
    one,
    en
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "spouse", level: level + 1, children: "Spouse" }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 244,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: "lo\xB7n\xE9\xB7" }, void 0, false, {
        fileName: "app/components/articles/Relationships.tsx",
        lineNumber: 248,
        columnNumber: 9
      }, this),
      ' is used to describe someone else\u2018s spouse, it is not used for "my spouse" or "your spouse".'
    ] }, void 0, true, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 247,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [{
      accessorKey: "en",
      cell: TableWrapper.textArrayCell,
      header: "English"
    }, {
      accessorKey: "one",
      cell: TableWrapper.textArrayCellBold,
      header: "Oneida"
    }], data: rows }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Relationships.tsx",
    lineNumber: 243,
    columnNumber: 10
  }, this);
}
_c8 = SpouseTable;
function BoyfriendGirlfriendTable({
  level = 2
}) {
  const rows = [["i", "ak"], ["u", "sa"], ["m", "lao"], ["f", "ako"]].map(([pronoun, p]) => {
    return {
      boyfriend: [{
        text: p
      }, "nik\u028Chtl\xFA\xB7tsli\u0294"],
      girlfriend: [{
        text: p
      }, "ya\u0294tas\xE9\xB7tsli\u0294"],
      pronoun
    };
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "girlfriend-boyfriend", level: level + 1, children: "Girlfriend / Boyfriend" }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 278,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [
      // @ts-expect-error To be addressed in LO-12
      ...TableWrapper.columnsPronouns,
      {
        accessorKey: "boyfriend",
        // @ts-expect-error To be addressed in LO-12
        cell: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: value, typeFallback: "PLB" }, void 0, false, {
          fileName: "app/components/articles/Relationships.tsx",
          lineNumber: 286,
          columnNumber: 22
        }, this),
        header: "Boyfriend"
      },
      {
        accessorKey: "girlfriend",
        // @ts-expect-error To be addressed in LO-12
        cell: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { breakdown: value, typeFallback: "PLB" }, void 0, false, {
          fileName: "app/components/articles/Relationships.tsx",
          lineNumber: 291,
          columnNumber: 22
        }, this),
        header: "Girlfriend"
      }
    ], data: rows }, void 0, false, {
      fileName: "app/components/articles/Relationships.tsx",
      lineNumber: 281,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/Relationships.tsx",
    lineNumber: 277,
    columnNumber: 10
  }, this);
}
_c9 = BoyfriendGirlfriendTable;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
var _c7;
var _c8;
var _c9;
$RefreshReg$(_c, "RelationshipsArticle");
$RefreshReg$(_c2, "MarriedTable");
$RefreshReg$(_c3, "InARelationshipTable");
$RefreshReg$(_c4, "SeparatedTable");
$RefreshReg$(_c5, "EngagedTable");
$RefreshReg$(_c6, "SingleTable");
$RefreshReg$(_c7, "OldManWomanTable");
$RefreshReg$(_c8, "SpouseTable");
$RefreshReg$(_c9, "BoyfriendGirlfriendTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  RelationshipsArticle
};
//# sourceMappingURL=/build/_shared/chunk-ZET6PBI3.js.map
