import {
  Bleed,
  PRONOUN_MAP_EN,
  PRONOUN_MAP_ONEIDA,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
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
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// @/utils/TextArray.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
function TextArray({
  bold,
  children,
  ...props
}) {
  const WrapperTag = bold ? "b" : import_react.default.Fragment;
  if (!Array.isArray(children)) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperTag, { children }, void 0, false, {
      fileName: "@/utils/TextArray.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "@/utils/TextArray.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this);
  }
  return children.map((child, i) => /* @__PURE__ */ (0, import_react2.createElement)(Text, { ...props, key: i }, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WrapperTag, { children: child }, void 0, false, {
    fileName: "@/utils/TextArray.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this)));
}

// @/design/components/tableWrapper.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function TableWrapper({
  bleed = {
    xs: 0,
    md: 16,
    lg: 32
  },
  columns,
  data
}) {
  const hasHeader = !!columns.find((col) => !!col.header);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Bleed, { mx: bleed, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Table, { children: [
    hasHeader && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableRow, { children: columns.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: c.header }, c.key ?? c.accessorKey, false, {
      fileName: "@/design/components/tableWrapper.tsx",
      lineNumber: 52,
      columnNumber: 17
    }, this)) }, void 0, false, {
      fileName: "@/design/components/tableWrapper.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "@/design/components/tableWrapper.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableBody, { children: data.map((row, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableRow, { children: columns.map((c, j) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: c.cell ? c.cell(row[c.accessorKey], row) : row[c.accessorKey] }, `${i}-${j}`, false, {
      fileName: "@/design/components/tableWrapper.tsx",
      lineNumber: 61,
      columnNumber: 17
    }, this)) }, i, false, {
      fileName: "@/design/components/tableWrapper.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this)) }, void 0, false, {
      fileName: "@/design/components/tableWrapper.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "@/design/components/tableWrapper.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "@/design/components/tableWrapper.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
TableWrapper.textArrayCell = (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextArray, { children: value }, void 0, false, {
  fileName: "@/design/components/tableWrapper.tsx",
  lineNumber: 77,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "@/design/components/tableWrapper.tsx",
  lineNumber: 76,
  columnNumber: 3
}, this);
TableWrapper.textArrayCellBold = (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextArray, { bold: true, children: value }, void 0, false, {
  fileName: "@/design/components/tableWrapper.tsx",
  lineNumber: 82,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "@/design/components/tableWrapper.tsx",
  lineNumber: 81,
  columnNumber: 3
}, this);
var EnglishCol = {
  accessorKey: "en",
  cell: TableWrapper.textArrayCell,
  header: "English"
};
var createOneidaCol = (typeFallback, options = {}) => ({
  accessorKey: options.accessorKey ?? "breakdown",
  cell: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    TextBreakdown,
    {
      breakdown: value,
      typeFallback,
      wrap: "nowrap"
    },
    void 0,
    false,
    {
      fileName: "@/design/components/tableWrapper.tsx",
      lineNumber: 103,
      columnNumber: 5
    },
    this
  ),
  header: options.header ?? "Translation"
});
var pronounColumns = [
  {
    accessorKey: "pronoun",
    // @ts-expect-error To be addressed in LO-12
    cell: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: PRONOUN_MAP_EN[value] }, void 0, false, {
      fileName: "@/design/components/tableWrapper.tsx",
      lineNumber: 116,
      columnNumber: 31
    }, this),
    header: "Pronoun (en)",
    key: "pronoun_en"
  },
  {
    accessorKey: "pronoun",
    // @ts-expect-error To be addressed in LO-12
    cell: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: PRONOUN_MAP_ONEIDA[value] }, void 0, false, {
      fileName: "@/design/components/tableWrapper.tsx",
      lineNumber: 123,
      columnNumber: 31
    }, this),
    header: "Pronoun (one)",
    key: "pronoun_one"
  }
];
var columnsParadigmRed = [
  EnglishCol,
  // @ts-expect-error To be addressed in LO-12
  createOneidaCol("PR")
];
var columnsParadigmBlue = [
  EnglishCol,
  // @ts-expect-error To be addressed in LO-12
  createOneidaCol("PB")
];
var columnsParadigmPurple = [
  EnglishCol,
  // @ts-expect-error To be addressed in LO-12
  createOneidaCol("PP")
];
var columnsEnglishOneida = [
  EnglishCol,
  {
    accessorKey: "on",
    cell: TableWrapper.textArrayCellBold,
    header: "Translation"
  }
];
var columnsEnglishBreakdown = [
  EnglishCol,
  {
    accessorKey: "breakdown",
    // @ts-expect-error TODO
    cell: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextBreakdown, { breakdown: value, wrap: "nowrap" }, void 0, false, {
      fileName: "@/design/components/tableWrapper.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    header: "Translation"
  }
];
var createPastTenseColumns = (typeFallback, opts = {}) => [
  ...TableWrapper.columnsPronouns,
  {
    accessorKey: "breakdown",
    cell: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextBreakdown, { breakdown: value, typeFallback }, void 0, false, {
      fileName: "@/design/components/tableWrapper.tsx",
      lineNumber: 178,
      columnNumber: 7
    }, this),
    header: opts?.headerNow ?? "Now"
  },
  {
    accessorKey: "breakdownPast",
    cell: (value) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      TextBreakdown,
      {
        breakdown: value,
        suffix: opts.suffix,
        typeFallback
      },
      void 0,
      false,
      {
        fileName: "@/design/components/tableWrapper.tsx",
        lineNumber: 185,
        columnNumber: 7
      },
      this
    ),
    header: opts?.headerPast ?? "Used to be"
  }
];
TableWrapper.columnsParadigmRed = columnsParadigmRed;
TableWrapper.columnsParadigmBlue = columnsParadigmBlue;
TableWrapper.columnsParadigmPurple = columnsParadigmPurple;
TableWrapper.columnsEnglishOneida = columnsEnglishOneida;
TableWrapper.columnsEnglishBreakdown = columnsEnglishBreakdown;
TableWrapper.columnsPronouns = pronounColumns;
TableWrapper.createTextBreakdownColumn = createOneidaCol;
TableWrapper.englishColumn = EnglishCol;
TableWrapper.createPastTenseColumns = createPastTenseColumns;
TableWrapper.mapLeftRight = ([left, right]) => ({ left, right });
TableWrapper.mapEnglishOneida = ([en, on]) => ({ en, on });

export {
  TextArray,
  TableWrapper
};
//# sourceMappingURL=/build/_shared/chunk-KIXTCICO.js.map
