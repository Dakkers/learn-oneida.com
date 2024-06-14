import {
  Box
} from "/build/_shared/chunk-F6GD7EN2.js";
import {
  FormElement,
  Select
} from "/build/_shared/chunk-K7EXP22E.js";
import {
  Label
} from "/build/_shared/chunk-ZLJ4PDKU.js";
import {
  Input
} from "/build/_shared/chunk-D4UPLYI2.js";
import {
  Button
} from "/build/_shared/chunk-EFPAQ3UL.js";
import {
  $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2,
  $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9,
  $d7bdfb9eb0fdf311$export$c7109489551a4f4
} from "/build/_shared/chunk-5ZKYN6D5.js";
import {
  $db6c3485150b8e66$export$1ab7ae714698c4b8
} from "/build/_shared/chunk-VK5ZCJVM.js";
import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b
} from "/build/_shared/chunk-CEX5NOEO.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "/build/_shared/chunk-YUHBZFFF.js";
import {
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  $f631663db3294ace$export$b39126d51d94e6f3
} from "/build/_shared/chunk-V7VJQMFC.js";
import {
  CheckCircle2,
  Circle,
  XCircle
} from "/build/_shared/chunk-SUXJSOIA.js";
import {
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  _extends
} from "/build/_shared/chunk-7MJPIPI2.js";
import {
  TableWrapper
} from "/build/_shared/chunk-KIXTCICO.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
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
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/practice/Quiz.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/practice/Quiz.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/practice/Quiz.tsx"
  );
  import.meta.hot.lastModified = "1709498159479.4778";
}
var QuizContext = import_react.default.createContext({
  answer: "",
  changeAnswer: (value) => console.log(value),
  hasAnswer: false,
  isFinalQuestion: false,
  index: 0,
  nextQuestion: () => console.log("nextQuestion()"),
  previousQuestion: () => console.log("previousQuestion()")
});
function Quiz({
  children,
  getResultForQuestion,
  numberOfQuestions = 10,
  onReset
}) {
  _s();
  const [index, setIndex] = import_react.default.useState(0);
  const [currentAnswer, setCurrentAnswer] = import_react.default.useState("");
  const [results, setResults] = import_react.default.useState([]);
  const isComplete = index >= numberOfQuestions;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuizContext.Provider, { value: {
    answer: currentAnswer,
    hasAnswer: !!currentAnswer,
    index,
    isFinalQuestion: index === numberOfQuestions - 1,
    nextQuestion: () => {
      const result = getResultForQuestion(index, currentAnswer);
      let newResults = [];
      if (index >= results.length) {
        newResults = [...results, result];
      }
      newResults[index] = result;
      setResults(newResults);
      setIndex(index + 1);
      setCurrentAnswer("");
    },
    previousQuestion: () => {
      setIndex(index - 1);
      setCurrentAnswer("");
    },
    numberOfQuestions,
    changeAnswer: setCurrentAnswer
  }, children: isComplete ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ResultsScreen, { onReset, results }, void 0, false, {
    fileName: "app/components/practice/Quiz.tsx",
    lineNumber: 74,
    columnNumber: 21
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
    fileName: "app/components/practice/Quiz.tsx",
    lineNumber: 74,
    columnNumber: 77
  }, this) }, void 0, false, {
    fileName: "app/components/practice/Quiz.tsx",
    lineNumber: 51,
    columnNumber: 10
  }, this);
}
_s(Quiz, "F7hYFMT+ehTfPaSDQGrVQQy4k5w=");
_c = Quiz;
Quiz.Questions = _s2(function QuizQuestions({
  children
}) {
  _s2();
  const context = useQuizContext();
  const childrenArray = import_react.default.Children.toArray(children);
  return childrenArray[context.index];
}, "Pl8mufWNvzcdPtPpwfmoCTLttCM=", false, function() {
  return [useQuizContext];
});
function useQuizContext() {
  _s3();
  return import_react.default.useContext(QuizContext);
}
_s3(useQuizContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function ResultsScreen({
  onReset,
  results
}) {
  const numCorrect = results.filter((result) => result.isCorrect).length;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 2, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
      "You answered ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: numCorrect }, void 0, false, {
        fileName: "app/components/practice/Quiz.tsx",
        lineNumber: 103,
        columnNumber: 22
      }, this),
      " out of ",
      results.length,
      " questions correctly."
    ] }, void 0, true, {
      fileName: "app/components/practice/Quiz.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      TableWrapper,
      {
        columns: [{
          accessorKey: "question",
          header: "Question"
        }, {
          accessorKey: "selectedAnswer",
          // @ts-expect-error To be addressed in LO-12
          cell: (selectedAnswer, row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", gap: 4, children: row.isCorrect ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CheckCircle2, { color: "green" }, void 0, false, {
              fileName: "app/components/practice/Quiz.tsx",
              lineNumber: 115,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", intent: "positive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: selectedAnswer }, void 0, false, {
              fileName: "app/components/practice/Quiz.tsx",
              lineNumber: 117,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/components/practice/Quiz.tsx",
              lineNumber: 116,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/practice/Quiz.tsx",
            lineNumber: 114,
            columnNumber: 34
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(XCircle, { color: "red" }, void 0, false, {
              fileName: "app/components/practice/Quiz.tsx",
              lineNumber: 120,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 2, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
                "Correct answer: ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: row.correctAnswer }, void 0, false, {
                  fileName: "app/components/practice/Quiz.tsx",
                  lineNumber: 123,
                  columnNumber: 41
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/practice/Quiz.tsx",
                lineNumber: 122,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
                "Your answer:",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { as: "span", intent: "negative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", { children: selectedAnswer }, void 0, false, {
                  fileName: "app/components/practice/Quiz.tsx",
                  lineNumber: 128,
                  columnNumber: 27
                }, this) }, void 0, false, {
                  fileName: "app/components/practice/Quiz.tsx",
                  lineNumber: 127,
                  columnNumber: 25
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/practice/Quiz.tsx",
                lineNumber: 125,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/practice/Quiz.tsx",
              lineNumber: 121,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/practice/Quiz.tsx",
            lineNumber: 119,
            columnNumber: 25
          }, this) }, void 0, false, {
            fileName: "app/components/practice/Quiz.tsx",
            lineNumber: 113,
            columnNumber: 38
          }, this),
          header: "Answer"
        }],
        data: results
      },
      void 0,
      false,
      {
        fileName: "app/components/practice/Quiz.tsx",
        lineNumber: 107,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: onReset, children: "Go back" }, void 0, false, {
      fileName: "app/components/practice/Quiz.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/practice/Quiz.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/practice/Quiz.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
}
_c2 = ResultsScreen;
var _c;
var _c2;
$RefreshReg$(_c, "Quiz");
$RefreshReg$(_c2, "ResultsScreen");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/practice/QuizContainer.tsx
var import_react4 = __toESM(require_react(), 1);

// @/design/components/RadioGroup.tsx
var import_react3 = __toESM(require_react(), 1);

// @/design/primitives/radio-group.tsx
var React2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-radio-group/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var $ce77a8961b41be9e$var$RADIO_NAME = "Radio";
var [$ce77a8961b41be9e$var$createRadioContext, $ce77a8961b41be9e$export$67d2296460f1b002] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($ce77a8961b41be9e$var$RADIO_NAME);
var [$ce77a8961b41be9e$var$RadioProvider, $ce77a8961b41be9e$var$useRadioContext] = $ce77a8961b41be9e$var$createRadioContext($ce77a8961b41be9e$var$RADIO_NAME);
var $ce77a8961b41be9e$export$d7b12c4107be0d61 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeRadio, name, checked = false, required, disabled, value = "on", onCheck, ...radioProps } = props;
  const [button, setButton] = (0, import_react2.useState)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setButton(node)
  );
  const hasConsumerStoppedPropagationRef = (0, import_react2.useRef)(false);
  const isFormControl = button ? Boolean(button.closest("form")) : true;
  return /* @__PURE__ */ (0, import_react2.createElement)($ce77a8961b41be9e$var$RadioProvider, {
    scope: __scopeRadio,
    checked,
    disabled
  }, /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    role: "radio",
    "aria-checked": checked,
    "data-state": $ce77a8961b41be9e$var$getState(checked),
    "data-disabled": disabled ? "" : void 0,
    disabled,
    value
  }, radioProps, {
    ref: composedRefs,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event) => {
      if (!checked)
        onCheck === null || onCheck === void 0 || onCheck();
      if (isFormControl) {
        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
        if (!hasConsumerStoppedPropagationRef.current)
          event.stopPropagation();
      }
    })
  })), isFormControl && /* @__PURE__ */ (0, import_react2.createElement)($ce77a8961b41be9e$var$BubbleInput, {
    control: button,
    bubbles: !hasConsumerStoppedPropagationRef.current,
    name,
    value,
    checked,
    required,
    disabled,
    style: {
      transform: "translateX(-100%)"
    }
  }));
});
var $ce77a8961b41be9e$var$INDICATOR_NAME = "RadioIndicator";
var $ce77a8961b41be9e$export$d35a9ffa9a04f9e7 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeRadio, forceMount, ...indicatorProps } = props;
  const context = $ce77a8961b41be9e$var$useRadioContext($ce77a8961b41be9e$var$INDICATOR_NAME, __scopeRadio);
  return /* @__PURE__ */ (0, import_react2.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.checked
  }, /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.span, _extends({
    "data-state": $ce77a8961b41be9e$var$getState(context.checked),
    "data-disabled": context.disabled ? "" : void 0
  }, indicatorProps, {
    ref: forwardedRef
  })));
});
var $ce77a8961b41be9e$var$BubbleInput = (props) => {
  const { control, checked, bubbles = true, ...inputProps } = props;
  const ref = (0, import_react2.useRef)(null);
  const prevChecked = $010c2913dbd2fe3d$export$5cae361ad82dce8b(checked);
  const controlSize = $db6c3485150b8e66$export$1ab7ae714698c4b8(control);
  (0, import_react2.useEffect)(() => {
    const input = ref.current;
    const inputProto = window.HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
    const setChecked = descriptor.set;
    if (prevChecked !== checked && setChecked) {
      const event = new Event("click", {
        bubbles
      });
      setChecked.call(input, checked);
      input.dispatchEvent(event);
    }
  }, [
    prevChecked,
    checked,
    bubbles
  ]);
  return /* @__PURE__ */ (0, import_react2.createElement)("input", _extends({
    type: "radio",
    "aria-hidden": true,
    defaultChecked: checked
  }, inputProps, {
    tabIndex: -1,
    ref,
    style: {
      ...props.style,
      ...controlSize,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function $ce77a8961b41be9e$var$getState(checked) {
  return checked ? "checked" : "unchecked";
}
var $f99a8c78507165f7$var$ARROW_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight"
];
var $f99a8c78507165f7$var$RADIO_GROUP_NAME = "RadioGroup";
var [$f99a8c78507165f7$var$createRadioGroupContext, $f99a8c78507165f7$export$c547093f11b76da2] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($f99a8c78507165f7$var$RADIO_GROUP_NAME, [
  $d7bdfb9eb0fdf311$export$c7109489551a4f4,
  $ce77a8961b41be9e$export$67d2296460f1b002
]);
var $f99a8c78507165f7$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
var $f99a8c78507165f7$var$useRadioScope = $ce77a8961b41be9e$export$67d2296460f1b002();
var [$f99a8c78507165f7$var$RadioGroupProvider, $f99a8c78507165f7$var$useRadioGroupContext] = $f99a8c78507165f7$var$createRadioGroupContext($f99a8c78507165f7$var$RADIO_GROUP_NAME);
var $f99a8c78507165f7$export$a98f0dcb43a68a25 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const [value, setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  return /* @__PURE__ */ (0, import_react2.createElement)($f99a8c78507165f7$var$RadioGroupProvider, {
    scope: __scopeRadioGroup,
    name,
    required,
    disabled,
    value,
    onValueChange: setValue
  }, /* @__PURE__ */ (0, import_react2.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    orientation,
    dir: direction,
    loop
  }), /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    role: "radiogroup",
    "aria-required": required,
    "aria-orientation": orientation,
    "data-disabled": disabled ? "" : void 0,
    dir: direction
  }, groupProps, {
    ref: forwardedRef
  }))));
});
var $f99a8c78507165f7$var$ITEM_NAME = "RadioGroupItem";
var $f99a8c78507165f7$export$9f866c100ef519e4 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, disabled, ...itemProps } = props;
  const context = $f99a8c78507165f7$var$useRadioGroupContext($f99a8c78507165f7$var$ITEM_NAME, __scopeRadioGroup);
  const isDisabled = context.disabled || disabled;
  const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  const ref = (0, import_react2.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, ref);
  const checked = context.value === itemProps.value;
  const isArrowKeyPressedRef = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    const handleKeyDown = (event) => {
      if ($f99a8c78507165f7$var$ARROW_KEYS.includes(event.key))
        isArrowKeyPressedRef.current = true;
    };
    const handleKeyUp = () => isArrowKeyPressedRef.current = false;
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return /* @__PURE__ */ (0, import_react2.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, _extends({
    asChild: true
  }, rovingFocusGroupScope, {
    focusable: !isDisabled,
    active: checked
  }), /* @__PURE__ */ (0, import_react2.createElement)($ce77a8961b41be9e$export$d7b12c4107be0d61, _extends({
    disabled: isDisabled,
    required: context.required,
    checked
  }, radioScope, itemProps, {
    name: context.name,
    ref: composedRefs,
    onCheck: () => context.onValueChange(itemProps.value),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10((event) => {
      if (event.key === "Enter")
        event.preventDefault();
    }),
    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(itemProps.onFocus, () => {
      var _ref$current;
      if (isArrowKeyPressedRef.current)
        (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.click();
    })
  })));
});
var $f99a8c78507165f7$export$5fb54c671a65c88 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeRadioGroup, ...indicatorProps } = props;
  const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
  return /* @__PURE__ */ (0, import_react2.createElement)($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, _extends({}, radioScope, indicatorProps, {
    ref: forwardedRef
  }));
});
var $f99a8c78507165f7$export$be92b6f5f03c0fe9 = $f99a8c78507165f7$export$a98f0dcb43a68a25;
var $f99a8c78507165f7$export$6d08773d2e66f8f2 = $f99a8c78507165f7$export$9f866c100ef519e4;
var $f99a8c78507165f7$export$adb584737d712b70 = $f99a8c78507165f7$export$5fb54c671a65c88;

// @/design/primitives/radio-group.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var RadioGroup = React2.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    $f99a8c78507165f7$export$be92b6f5f03c0fe9,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    },
    void 0,
    false,
    {
      fileName: "@/design/primitives/radio-group.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
});
RadioGroup.displayName = $f99a8c78507165f7$export$be92b6f5f03c0fe9.displayName;
var RadioGroupItem = React2.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    $f99a8c78507165f7$export$6d08773d2e66f8f2,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)($f99a8c78507165f7$export$adb584737d712b70, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }, void 0, false, {
        fileName: "@/design/primitives/radio-group.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "@/design/primitives/radio-group.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "@/design/primitives/radio-group.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
});
RadioGroupItem.displayName = $f99a8c78507165f7$export$6d08773d2e66f8f2.displayName;

// @/design/components/RadioGroup.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
function RadioGroup2({
  children,
  label,
  onChange,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FormElement, { label, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RadioGroup, { onValueChange: onChange, value, children }, void 0, false, {
    fileName: "@/design/components/RadioGroup.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "@/design/components/RadioGroup.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
RadioGroup2.Option = function RadioGroupOption({
  children,
  value
}) {
  const id = import_react3.default.useId();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { gap: 2, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RadioGroupItem, { value, id }, void 0, false, {
      fileName: "@/design/components/RadioGroup.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Label, { htmlFor: id, children }, void 0, false, {
      fileName: "@/design/components/RadioGroup.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "@/design/components/RadioGroup.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
};

// app/components/practice/QuizContainer.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/practice/QuizContainer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
var _s22 = $RefreshSig$();
var _s32 = $RefreshSig$();
var _s42 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/practice/QuizContainer.tsx"
  );
  import.meta.hot.lastModified = "1718240764405.0884";
}
var QuizContainerContext = import_react4.default.createContext(null);
function Settings({
  enableLanguageSetting = true,
  enableAnswerTypeSetting = true,
  enableQuestionCountSetting = true
}) {
  _s4();
  const context = import_react4.default.useContext(QuizContainerContext);
  if (!context) {
    throw new Error("Missing QuizContainerContext.");
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { align: {
    sm: "start"
  }, direction: {
    xs: "column",
    sm: "row"
  }, gap: 2, children: [
    enableLanguageSetting && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RadioGroup2, { label: "Translate", onChange: context.setLanguageSetting, value: context.languageSetting, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RadioGroup2.Option, { value: "en", children: "English to Oneida" }, void 0, false, {
        fileName: "app/components/practice/QuizContainer.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RadioGroup2.Option, { value: "on", children: "Oneida to English" }, void 0, false, {
        fileName: "app/components/practice/QuizContainer.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RadioGroup2.Option, { value: "both", children: "Both" }, void 0, false, {
        fileName: "app/components/practice/QuizContainer.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/practice/QuizContainer.tsx",
      lineNumber: 50,
      columnNumber: 33
    }, this),
    enableAnswerTypeSetting && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RadioGroup2, { label: "Answer with", onChange: context.setAnswerSetting, value: context.answerSetting, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RadioGroup2.Option, { value: "multipleChoice", children: "Multiple choice" }, void 0, false, {
        fileName: "app/components/practice/QuizContainer.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RadioGroup2.Option, { value: "text", children: "Text" }, void 0, false, {
        fileName: "app/components/practice/QuizContainer.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/practice/QuizContainer.tsx",
      lineNumber: 56,
      columnNumber: 35
    }, this),
    enableQuestionCountSetting && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Select, { label: "Number of questions", onChange: context.setQuestionCountSetting, options: [1, 2, 5, 10].map((value) => value.toString()).map((value) => ({
      label: value,
      value
    })), value: context.questionCountSetting }, void 0, false, {
      fileName: "app/components/practice/QuizContainer.tsx",
      lineNumber: 63,
      columnNumber: 38
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/practice/QuizContainer.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, this);
}
_s4(Settings, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c3 = Settings;
function AnswerMultipleChoiceButtons({
  questionKey,
  isCorrect,
  options
}) {
  _s22();
  const quizContext = useQuizContext();
  const hasSelected = !!quizContext.hasAnswer;
  const showCorrectState = !!questionKey;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid gap-2 grid-cols-2", children: options.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: cn("rounded border border-solid border-slate-500 p-2", option.key === questionKey && !isCorrect && hasSelected && showCorrectState && "bg-green-400 text-white", showCorrectState && option.key === quizContext.answer && isCorrect && "bg-green-700 text-white", showCorrectState && option.key === quizContext.answer && !isCorrect && "bg-red-700 text-white"), disabled: hasSelected, onClick: () => quizContext.changeAnswer?.(option.key), children: option.text }, option.key, false, {
    fileName: "app/components/practice/QuizContainer.tsx",
    lineNumber: 81,
    columnNumber: 30
  }, this)) }, void 0, false, {
    fileName: "app/components/practice/QuizContainer.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s22(AnswerMultipleChoiceButtons, "Wd2GdEunSwOA6L0piZdlRPYBdTo=", false, function() {
  return [useQuizContext];
});
_c22 = AnswerMultipleChoiceButtons;
function AnswerText() {
  _s32();
  const [value, setValue] = import_react4.default.useState("");
  const quizContext = useQuizContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex, { gap: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Flex.Item, { grow: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Input, { onBlur: () => quizContext.changeAnswer?.(value), onChange: (e) => setValue(e.target.value), value }, void 0, false, {
    fileName: "app/components/practice/QuizContainer.tsx",
    lineNumber: 97,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/practice/QuizContainer.tsx",
    lineNumber: 96,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/practice/QuizContainer.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/practice/QuizContainer.tsx",
    lineNumber: 94,
    columnNumber: 10
  }, this);
}
_s32(AnswerText, "eD1jibI4O4KvWxDfGV4KXSwmvag=", false, function() {
  return [useQuizContext];
});
_c32 = AnswerText;
function NextBtn() {
  _s42();
  const context = useQuizContext();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { onClick: () => {
    context.nextQuestion?.();
  }, children: context.isFinalQuestion ? "Finish" : "Next" }, void 0, false, {
    fileName: "app/components/practice/QuizContainer.tsx",
    lineNumber: 109,
    columnNumber: 10
  }, this);
}
_s42(NextBtn, "Pl8mufWNvzcdPtPpwfmoCTLttCM=", false, function() {
  return [useQuizContext];
});
_c4 = NextBtn;
var _c3;
var _c22;
var _c32;
var _c4;
$RefreshReg$(_c3, "Settings");
$RefreshReg$(_c22, "AnswerMultipleChoiceButtons");
$RefreshReg$(_c32, "AnswerText");
$RefreshReg$(_c4, "NextBtn");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  Quiz,
  useQuizContext,
  QuizContainerContext,
  Settings,
  AnswerMultipleChoiceButtons,
  AnswerText,
  NextBtn
};
//# sourceMappingURL=/build/_shared/chunk-M6PAF3NK.js.map
