import {
  InternalText
} from "/build/_shared/chunk-KFDBZIFX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// @/design/components/heading.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Heading({
  align = "start",
  children,
  contrast = "high",
  id,
  intent = "secondary",
  level,
  variant = "bodyM"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    InternalText,
    {
      align,
      as: {
        1: "h1",
        2: "h2",
        3: "h3",
        4: "h4",
        5: "h5"
      }[level],
      contrast,
      id,
      intent,
      variant,
      children
    },
    void 0,
    false,
    {
      fileName: "@/design/components/heading.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}

export {
  Heading
};
//# sourceMappingURL=/build/_shared/chunk-LU2G44XZ.js.map
