import {
  cn
} from "/build/_shared/chunk-KFDBZIFX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// @/design/components/notice.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Notice({ children, intent }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("p-4", "rounded", intentMap[intent ?? "secondary"]), children }, void 0, false, {
    fileName: "@/design/components/notice.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var intentMap = {
  magic: "bg-violet-200",
  negative: "bg-red-200",
  positive: "bg-green-200",
  primary: "bg-blue-100",
  secondary: "bg-gray-200",
  warning: "bg-amber-200"
};

export {
  Notice
};
//# sourceMappingURL=/build/_shared/chunk-Z2WNLPTD.js.map
