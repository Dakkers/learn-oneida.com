import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  t,
  useForm
} from "/build/_shared/chunk-KWEO3TI5.js";
import {
  Input
} from "/build/_shared/chunk-D4UPLYI2.js";
import {
  Button
} from "/build/_shared/chunk-EFPAQ3UL.js";
import {
  Notice
} from "/build/_shared/chunk-Z2WNLPTD.js";
import {
  TableWrapper
} from "/build/_shared/chunk-KIXTCICO.js";
import {
  sanitizeIrregularCharacters,
  standardizeCharacters
} from "/build/_shared/chunk-YNSSGAWD.js";
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
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/practice/TableAsForm.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/practice/TableAsForm.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/practice/TableAsForm.tsx"
  );
  import.meta.hot.lastModified = "1718240764405.708";
}
function TableAsForm({
  bleed = {
    xs: 0,
    md: 16,
    lg: 32
  },
  checkCorrectness,
  formSchema,
  rows
}) {
  _s();
  const [isCorrect, setIsCorrect] = (0, import_react.useState)(false);
  const [correctness, setCorrectness] = (0, import_react.useState)({});
  const form = useForm({
    defaultValues: {},
    resolver: t(formSchema)
  });
  const onSubmit = (values) => {
    let hasErrors = false;
    const correctnessResult = {};
    for (const key in values) {
      const value = values[key];
      const result = checkCorrectness(key, value);
      if (result) {
        hasErrors = true;
        form.setError(key, {
          message: typeof result === "string" ? result : "Incorrect answer.",
          type: "custom"
        });
      }
      correctnessResult[key] = !result;
    }
    setIsCorrect(!hasErrors);
    setCorrectness(correctnessResult);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { ...form, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { onSubmit: form.handleSubmit(onSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { bleed, columns: [{
      accessorKey: "en",
      cell: TableWrapper.textArrayCellBold,
      header: "Question"
    }, {
      accessorKey: "key",
      // @ts-expect-error TODO
      cell: (key, row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, { control: form.control, name: key, render: ({
        field
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { autoComplete: "off", className: !(key in correctness) ? void 0 : correctness[key] ? "border-green-600" : "border-red-600", placeholder: "Type here...", ...field, value: field.value ?? "" }, void 0, false, {
          fileName: "app/components/practice/TableAsForm.tsx",
          lineNumber: 81,
          columnNumber: 27
        }, this) }, void 0, false, {
          fileName: "app/components/practice/TableAsForm.tsx",
          lineNumber: 80,
          columnNumber: 25
        }, this),
        correctness[key] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormMessage, { className: "text-green-600", children: [
          "Answer: ",
          row.on
        ] }, void 0, true, {
          fileName: "app/components/practice/TableAsForm.tsx",
          lineNumber: 84,
          columnNumber: 45
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormMessage, {}, void 0, false, {
          fileName: "app/components/practice/TableAsForm.tsx",
          lineNumber: 86,
          columnNumber: 44
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/practice/TableAsForm.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/practice/TableAsForm.tsx",
        lineNumber: 77,
        columnNumber: 31
      }, this),
      header: "Answer"
    }], data: rows }, void 0, false, {
      fileName: "app/components/practice/TableAsForm.tsx",
      lineNumber: 70,
      columnNumber: 11
    }, this),
    form.formState.submitCount > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Notice, { intent: isCorrect ? "positive" : "negative", children: isCorrect ? "Good job! You answered each prompt correctly." : "There were some mistakes with your answers. Scroll up to take a look." }, void 0, false, {
      fileName: "app/components/practice/TableAsForm.tsx",
      lineNumber: 91,
      columnNumber: 46
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { justify: "end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", children: "Submit" }, void 0, false, {
      fileName: "app/components/practice/TableAsForm.tsx",
      lineNumber: 96,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/practice/TableAsForm.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/practice/TableAsForm.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/practice/TableAsForm.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/practice/TableAsForm.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}
_s(TableAsForm, "A/fEOMfXyv2nX6lOkagE9abvP0A=", false, function() {
  return [useForm];
});
_c = TableAsForm;
TableAsForm.defaultCheckCorrectness = function defaultCheckCorrectness({
  key,
  rows,
  val
}) {
  const obj = rows.find((r) => r.key === key);
  if (obj) {
    if (!val || sanitizeIrregularCharacters(standardizeCharacters(val)) !== sanitizeIrregularCharacters(obj.on)) {
      return `Answer: ${obj.on}`;
    }
  }
};
var _c;
$RefreshReg$(_c, "TableAsForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  TableAsForm
};
//# sourceMappingURL=/build/_shared/chunk-YOV24XUM.js.map
