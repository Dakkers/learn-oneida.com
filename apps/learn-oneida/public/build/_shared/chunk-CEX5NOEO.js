import {
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  _extends
} from "/build/_shared/chunk-7MJPIPI2.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// node_modules/@radix-ui/react-use-previous/dist/index.mjs
var import_react = __toESM(require_react(), 1);
function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value) {
  const ref = (0, import_react.useRef)({
    value,
    previous: value
  });
  return (0, import_react.useMemo)(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [
    value
  ]);
}

// node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var $ea1ef594cf570d83$export$439d29a4e110a164 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  return /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({}, props, {
    ref: forwardedRef,
    style: {
      // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
      position: "absolute",
      border: 0,
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      whiteSpace: "nowrap",
      wordWrap: "normal",
      ...props.style
    }
  }));
});
var $ea1ef594cf570d83$export$be92b6f5f03c0fe9 = $ea1ef594cf570d83$export$439d29a4e110a164;

export {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b,
  $ea1ef594cf570d83$export$439d29a4e110a164,
  $ea1ef594cf570d83$export$be92b6f5f03c0fe9
};
//# sourceMappingURL=/build/_shared/chunk-CEX5NOEO.js.map
