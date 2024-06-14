import {
  cn
} from "/build/_shared/chunk-KFDBZIFX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// @/utils/responsive.ts
function formatClassName(value, resultThingy) {
  if (typeof resultThingy === "string") {
    return `${resultThingy}${value}`;
  }
  return resultThingy(value);
}
function responsiveClassName(value, resultThingy) {
  if (!value) {
    return "";
  }
  if (typeof value !== "object") {
    return formatClassName(value, resultThingy);
  }
  return ["xs", "sm", "md", "lg", "xl"].map((breakpoint) => {
    if (!(breakpoint in value)) {
      return null;
    }
    const attrVal = value[breakpoint];
    const prefix = breakpoint === "xs" ? "" : `${breakpoint}:`;
    return `${prefix}${formatClassName(attrVal, resultThingy)}`;
  }).filter(Boolean);
}

// @/utils/usePadding.ts
function usePadding({ p, px, py, pl, pr, pb, pt }) {
  return cn(
    p && pMap.get(p),
    px && pxMap.get(px),
    py && pyMap.get(py),
    pl && plMap.get(pl),
    pr && prMap.get(pr),
    pb && pbMap.get(pb),
    pt && ptMap.get(pt)
  );
}
var pMap = /* @__PURE__ */ new Map([
  [0, "p-0"],
  [1, "p-1"],
  [2, "p-2"],
  [3, "p-3"],
  [4, "p-4"],
  [5, "p-5"],
  [6, "p-6"],
  [7, "p-7"],
  [8, "p-8"]
]);
var pxMap = /* @__PURE__ */ new Map([
  [0, "px-0"],
  [1, "px-1"],
  [2, "px-2"],
  [3, "px-3"],
  [4, "px-4"],
  [5, "px-5"],
  [6, "px-6"],
  [7, "px-7"],
  [8, "px-8"]
]);
var pyMap = /* @__PURE__ */ new Map([
  [0, "py-0"],
  [1, "py-1"],
  [2, "py-2"],
  [3, "py-3"],
  [4, "py-4"],
  [5, "py-5"],
  [6, "py-6"],
  [7, "py-7"],
  [8, "py-8"]
]);
var plMap = /* @__PURE__ */ new Map([
  [0, "pl-0"],
  [1, "pl-1"],
  [2, "pl-2"],
  [3, "pl-3"],
  [4, "pl-4"],
  [5, "pl-5"],
  [6, "pl-6"],
  [7, "pl-7"],
  [8, "pl-8"]
]);
var prMap = /* @__PURE__ */ new Map([
  [0, "pr-0"],
  [1, "pr-1"],
  [2, "pr-2"],
  [3, "pr-3"],
  [4, "pr-4"],
  [5, "pr-5"],
  [6, "pr-6"],
  [7, "pr-7"],
  [8, "pr-8"]
]);
var ptMap = /* @__PURE__ */ new Map([
  [0, "pt-0"],
  [1, "pt-1"],
  [2, "pt-2"],
  [3, "pt-3"],
  [4, "pt-4"],
  [5, "pt-5"],
  [6, "pt-6"],
  [7, "pt-7"],
  [8, "pt-8"]
]);
var pbMap = /* @__PURE__ */ new Map([
  [0, "pb-0"],
  [1, "pb-1"],
  [2, "pb-2"],
  [3, "pb-3"],
  [4, "pb-4"],
  [5, "pb-5"],
  [6, "pb-6"],
  [7, "pb-7"],
  [8, "pb-8"]
]);

// @/design/components/flex.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
function Flex({
  align,
  as: Tag = "div",
  children,
  direction = "row",
  gap,
  height,
  justify,
  wrap = false,
  p,
  px,
  py,
  pl,
  pt,
  pr,
  pb
}) {
  const padding = usePadding({ p, px, py, pl, pt, pr, pb });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Tag,
    {
      className: cn(
        "flex",
        responsiveClassName(align, "items-"),
        responsiveClassName(
          direction,
          (val) => `flex-${val === "column" ? "col" : "row"}`
        ),
        gap && gapMap.get(gap),
        height === "fill" ? "h-full" : void 0,
        justify && justifyContentMap[justify],
        wrap && "flex-wrap",
        padding
      ),
      children
    },
    void 0,
    false,
    {
      fileName: "@/design/components/flex.tsx",
      lineNumber: 51,
      columnNumber: 5
    },
    this
  );
}
Flex.Item = function FlexItem({
  as: Tag = "div",
  children,
  grow
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, { className: cn(grow && growMap.get(grow)), children }, void 0, false, {
    fileName: "@/design/components/flex.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
};
var gapMap = /* @__PURE__ */ new Map([
  [0, "gap-0"],
  [1, "gap-1"],
  [2, "gap-2"],
  [3, "gap-3"],
  [4, "gap-4"],
  [5, "gap-5"],
  [6, "gap-6"],
  [7, "gap-7"],
  [8, "gap-8"]
]);
var growMap = /* @__PURE__ */ new Map([
  [0, "grow-0"],
  [1, "grow"]
]);
var justifyContentMap = {
  around: "justify-around",
  between: "justify-between",
  center: "justify-center",
  end: "justify-end",
  evenly: "justify-evenly",
  start: "justify-start",
  stretch: "justify-stretch"
};

export {
  responsiveClassName,
  usePadding,
  Flex
};
//# sourceMappingURL=/build/_shared/chunk-24GQRLNU.js.map
