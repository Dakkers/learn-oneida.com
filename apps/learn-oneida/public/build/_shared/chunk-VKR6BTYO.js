import {
  Text
} from "/build/_shared/chunk-T7AJFEZW.js";
import {
  cn
} from "/build/_shared/chunk-KFDBZIFX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// @/design/components/list.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function List({
  children,
  ordered = false
}) {
  const Tag = ordered ? "ol" : "ul";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, { className: cn("list-outside", ordered ? "list-decimal" : "list-disc"), children }, void 0, false, {
    fileName: "@/design/components/list.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
List.Item = function ListItem({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "ml-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children }, void 0, false, {
    fileName: "@/design/components/list.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "@/design/components/list.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
};

export {
  List
};
//# sourceMappingURL=/build/_shared/chunk-VKR6BTYO.js.map
