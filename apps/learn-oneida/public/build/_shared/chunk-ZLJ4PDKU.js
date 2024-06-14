import {
  cva
} from "/build/_shared/chunk-EFPAQ3UL.js";
import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  _extends
} from "/build/_shared/chunk-7MJPIPI2.js";
import {
  cn
} from "/build/_shared/chunk-KFDBZIFX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// @/design/primitives/label.tsx
var React = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-label/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var $b73a6c6685e72184$export$b04be29aa201d4f5 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.label, _extends({}, props, {
    ref: forwardedRef,
    onMouseDown: (event) => {
      var _props$onMouseDown;
      (_props$onMouseDown = props.onMouseDown) === null || _props$onMouseDown === void 0 || _props$onMouseDown.call(props, event);
      if (!event.defaultPrevented && event.detail > 1)
        event.preventDefault();
    }
  }));
});
var $b73a6c6685e72184$export$be92b6f5f03c0fe9 = $b73a6c6685e72184$export$b04be29aa201d4f5;

// @/design/primitives/label.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $b73a6c6685e72184$export$be92b6f5f03c0fe9,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/label.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
Label.displayName = $b73a6c6685e72184$export$be92b6f5f03c0fe9.displayName;

export {
  Label
};
//# sourceMappingURL=/build/_shared/chunk-ZLJ4PDKU.js.map
