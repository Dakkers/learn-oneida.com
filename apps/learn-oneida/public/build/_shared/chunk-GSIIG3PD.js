import {
  TableWrapper,
  TextArray
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

// app/components/DialogueTable.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/DialogueTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/DialogueTable.tsx"
  );
  import.meta.hot.lastModified = "1718240764402.843";
}
function DialogueTable({
  data
}) {
  const columns = [{
    accessorKey: "left",
    cell: (value) => TableCell(value),
    header: ""
  }, {
    accessorKey: "right",
    cell: (value) => TableCell(value),
    header: ""
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns, data: data.map(TableWrapper.mapLeftRight) }, void 0, false, {
    fileName: "app/components/DialogueTable.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c = DialogueTable;
function TableCell(value) {
  if (value === null || typeof value === "string" || Array.isArray(value)) {
    return TableWrapper.textArrayCell(value);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextArray, { children: value.one }, void 0, false, {
    fileName: "app/components/DialogueTable.tsx",
    lineNumber: 44,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/DialogueTable.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}
_c2 = TableCell;
var _c;
var _c2;
$RefreshReg$(_c, "DialogueTable");
$RefreshReg$(_c2, "TableCell");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  DialogueTable
};
//# sourceMappingURL=/build/_shared/chunk-GSIIG3PD.js.map
