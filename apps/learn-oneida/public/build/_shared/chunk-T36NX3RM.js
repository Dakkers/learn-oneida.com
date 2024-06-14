import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  objectType,
  stringType,
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
  $d08ef79370b62062$export$16ce288f89fa631c,
  $d08ef79370b62062$export$1ff3c3f08ae963c0,
  $d08ef79370b62062$export$2ea8a7a591ac5eac,
  $d08ef79370b62062$export$371ab307eab489c0,
  $d08ef79370b62062$export$41fb9f06171c75f4,
  $d08ef79370b62062$export$602eac185826482c,
  $d08ef79370b62062$export$6d08773d2e66f8f2,
  $d08ef79370b62062$export$6d4de93b380beddf,
  $d08ef79370b62062$export$7c6e2c02157bb7d2,
  $d08ef79370b62062$export$b04be29aa201d4f5,
  $d08ef79370b62062$export$be92b6f5f03c0fe9,
  $d08ef79370b62062$export$c3468e2714d175fa
} from "/build/_shared/chunk-VSCVEPQN.js";
import {
  Notice
} from "/build/_shared/chunk-Z2WNLPTD.js";
import {
  require_lodash
} from "/build/_shared/chunk-Z7H33W4S.js";
import {
  Check,
  ChevronRight,
  Circle,
  Settings
} from "/build/_shared/chunk-SUXJSOIA.js";
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
  TextBreakdown,
  pronouns,
  translatePhrase
} from "/build/_shared/chunk-KBT2IGLR.js";
import {
  sanitizeIrregularCharacters,
  whisperizeWord
} from "/build/_shared/chunk-YNSSGAWD.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
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

// @/design/primitives/dropdown-menu.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var DropdownMenu = $d08ef79370b62062$export$be92b6f5f03c0fe9;
var DropdownMenuTrigger = $d08ef79370b62062$export$41fb9f06171c75f4;
var DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $d08ef79370b62062$export$2ea8a7a591ac5eac,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "ml-auto h-4 w-4" }, void 0, false, {
        fileName: "@/design/primitives/dropdown-menu.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "@/design/primitives/dropdown-menu.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
DropdownMenuSubTrigger.displayName = $d08ef79370b62062$export$2ea8a7a591ac5eac.displayName;
var DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $d08ef79370b62062$export$6d4de93b380beddf,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/dropdown-menu.tsx",
    lineNumber: 45,
    columnNumber: 3
  },
  this
));
DropdownMenuSubContent.displayName = $d08ef79370b62062$export$6d4de93b380beddf.displayName;
var DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$602eac185826482c, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $d08ef79370b62062$export$7c6e2c02157bb7d2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/dropdown-menu.tsx",
    lineNumber: 62,
    columnNumber: 5
  },
  this
) }, void 0, false, {
  fileName: "@/design/primitives/dropdown-menu.tsx",
  lineNumber: 61,
  columnNumber: 3
}, this));
DropdownMenuContent.displayName = $d08ef79370b62062$export$7c6e2c02157bb7d2.displayName;
var DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $d08ef79370b62062$export$6d08773d2e66f8f2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/dropdown-menu.tsx",
    lineNumber: 81,
    columnNumber: 3
  },
  this
));
DropdownMenuItem.displayName = $d08ef79370b62062$export$6d08773d2e66f8f2.displayName;
var DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $d08ef79370b62062$export$16ce288f89fa631c,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4" }, void 0, false, {
        fileName: "@/design/primitives/dropdown-menu.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "@/design/primitives/dropdown-menu.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "@/design/primitives/dropdown-menu.tsx",
        lineNumber: 106,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "@/design/primitives/dropdown-menu.tsx",
    lineNumber: 97,
    columnNumber: 3
  },
  this
));
DropdownMenuCheckboxItem.displayName = $d08ef79370b62062$export$16ce288f89fa631c.displayName;
var DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $d08ef79370b62062$export$371ab307eab489c0,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)($d08ef79370b62062$export$c3468e2714d175fa, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
        fileName: "@/design/primitives/dropdown-menu.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "@/design/primitives/dropdown-menu.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this) }, void 0, false, {
        fileName: "@/design/primitives/dropdown-menu.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "@/design/primitives/dropdown-menu.tsx",
    lineNumber: 121,
    columnNumber: 3
  },
  this
));
DropdownMenuRadioItem.displayName = $d08ef79370b62062$export$371ab307eab489c0.displayName;
var DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $d08ef79370b62062$export$b04be29aa201d4f5,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/dropdown-menu.tsx",
    lineNumber: 145,
    columnNumber: 3
  },
  this
));
DropdownMenuLabel.displayName = $d08ef79370b62062$export$b04be29aa201d4f5.displayName;
var DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $d08ef79370b62062$export$1ff3c3f08ae963c0,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/dropdown-menu.tsx",
    lineNumber: 161,
    columnNumber: 3
  },
  this
));
DropdownMenuSeparator.displayName = $d08ef79370b62062$export$1ff3c3f08ae963c0.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    },
    void 0,
    false,
    {
      fileName: "@/design/primitives/dropdown-menu.tsx",
      lineNumber: 174,
      columnNumber: 5
    },
    this
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// app/components/ParadigmTable.tsx
var import_react = __toESM(require_react(), 1);
var import_lodash = __toESM(require_lodash(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/ParadigmTable.tsx"' + id);
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
    "app/components/ParadigmTable.tsx"
  );
  import.meta.hot.lastModified = "1718240764403.4563";
}
var formSchema = objectType(Object.fromEntries(pronouns.map((p) => [p, stringType().nullish()])));
var ParadigmTableContext = import_react.default.createContext(null);
function ParadigmTable({
  allowedPronouns = [],
  bleed = {
    xs: 0,
    md: 16,
    lg: 32
  },
  columnVisibility = {},
  data,
  isTesting = false,
  translationFn
}) {
  _s();
  const [colVisibility, setColVisibility] = import_react.default.useState({
    pronounOneida: true,
    pronounEnglish: true,
    translation: true,
    ...columnVisibility
  });
  const [showBreakdown, setShowBreakdown] = import_react.default.useState(true);
  const [isCorrect, setIsCorrect] = import_react.default.useState(false);
  const form = useForm({
    defaultValues: {},
    resolver: t(formSchema)
  });
  function onSubmit(values) {
    let hasErrors = false;
    for (const key in values) {
      const value = values[key];
      const phraseObj = data.phrases.find((p) => p.pronoun === key);
      if (phraseObj) {
        if (!value || sanitizeIrregularCharacters(value) !== sanitizeIrregularCharacters(phraseObj.phrase)) {
          hasErrors = true;
          form.setError(key, {
            message: `Answer: ${phraseObj.phrase}`,
            type: "custom"
          });
        }
      }
    }
    setIsCorrect(!hasErrors);
  }
  const rowsToShow = import_react.default.useMemo(() => {
    if (allowedPronouns.length === 0) {
      return data.phrases;
    }
    return data.phrases.filter((p) => allowedPronouns.includes(p.pronoun));
  }, [data.phrases, allowedPronouns]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ParadigmTableContext.Provider, { value: {
    colVisibility,
    form,
    isTesting,
    showBreakdown,
    translation: data.translation,
    translationFn
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Bleed, { mx: bleed, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { justify: "end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SettingsMenu, { toggleColumn: (columnName) => setColVisibility({
      ...colVisibility,
      [columnName]: !colVisibility[columnName]
    }), toggleBreakdown: setShowBreakdown }, void 0, false, {
      fileName: "app/components/ParadigmTable.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ParadigmTable.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { ...form, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { onSubmit: form.handleSubmit(onSubmit), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Table, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableRow, { children: [
          colVisibility.pronounEnglish && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: "Pronoun (EN)" }, void 0, false, {
            fileName: "app/components/ParadigmTable.tsx",
            lineNumber: 112,
            columnNumber: 52
          }, this),
          colVisibility.pronounOneida && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: "Pronoun" }, void 0, false, {
            fileName: "app/components/ParadigmTable.tsx",
            lineNumber: 113,
            columnNumber: 51
          }, this),
          isTesting ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            colVisibility.translation && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: "Translation" }, void 0, false, {
              fileName: "app/components/ParadigmTable.tsx",
              lineNumber: 115,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: "---" }, void 0, false, {
              fileName: "app/components/ParadigmTable.tsx",
              lineNumber: 116,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ParadigmTable.tsx",
            lineNumber: 114,
            columnNumber: 32
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: "Phrase" }, void 0, false, {
              fileName: "app/components/ParadigmTable.tsx",
              lineNumber: 118,
              columnNumber: 23
            }, this),
            colVisibility.translation && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableHead, { children: "Translation" }, void 0, false, {
              fileName: "app/components/ParadigmTable.tsx",
              lineNumber: 119,
              columnNumber: 53
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ParadigmTable.tsx",
            lineNumber: 117,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ParadigmTable.tsx",
          lineNumber: 111,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/ParadigmTable.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableBody, { children: rowsToShow.map((row, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableRowWrapper, { row, typeFallback: data.type, whispered: data.whispered }, i, false, {
          fileName: "app/components/ParadigmTable.tsx",
          lineNumber: 124,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/components/ParadigmTable.tsx",
          lineNumber: 123,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this),
      isTesting && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
        form.formState.submitCount > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Notice, { intent: isCorrect ? "positive" : "negative", children: isCorrect ? "Good job! You answered each prompt correctly." : "There were some mistakes with your answers. Scroll up to take a look." }, void 0, false, {
          fileName: "app/components/ParadigmTable.tsx",
          lineNumber: 129,
          columnNumber: 52
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { justify: "end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", children: "Submit" }, void 0, false, {
          fileName: "app/components/ParadigmTable.tsx",
          lineNumber: 134,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/ParadigmTable.tsx",
          lineNumber: 133,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 128,
        columnNumber: 27
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ParadigmTable.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/ParadigmTable.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ParadigmTable.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ParadigmTable.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_s(ParadigmTable, "2ze92T1AWWBVnoa3MGkzGXenMtA=", false, function() {
  return [useForm];
});
_c = ParadigmTable;
function TableRowWrapper({
  row,
  suffix,
  typeFallback,
  whispered = false
}) {
  _s2();
  const context = import_react.default.useContext(ParadigmTableContext);
  if (!context) {
    throw new Error("Missing context");
  }
  const {
    colVisibility,
    showBreakdown
  } = context;
  const translatedPhrase = translatePhrase(context.translation, row.pronoun, context.translationFn);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableRow, { children: [
    colVisibility.pronounEnglish && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: PRONOUN_MAP_EN[row.pronoun] }, void 0, false, {
      fileName: "app/components/ParadigmTable.tsx",
      lineNumber: 163,
      columnNumber: 40
    }, this),
    colVisibility.pronounOneida && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: PRONOUN_MAP_ONEIDA[row.pronoun] }, void 0, false, {
      fileName: "app/components/ParadigmTable.tsx",
      lineNumber: 164,
      columnNumber: 39
    }, this),
    context.isTesting ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      colVisibility.translation && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: translatedPhrase }, void 0, false, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 166,
        columnNumber: 41
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormField, { control: context.form.control, name: row.pronoun, render: ({
        field
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormItem, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input, { autoComplete: "off", placeholder: "Type here...", ...field, value: field.value ?? "" }, void 0, false, {
          fileName: "app/components/ParadigmTable.tsx",
          lineNumber: 172,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/components/ParadigmTable.tsx",
          lineNumber: 171,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FormMessage, {}, void 0, false, {
          fileName: "app/components/ParadigmTable.tsx",
          lineNumber: 175,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 170,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 168,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 167,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ParadigmTable.tsx",
      lineNumber: 165,
      columnNumber: 28
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: showBreakdown ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TextBreakdown, { breakdown: row.breakdown, suffix, typeFallback, whispered: row.whispered ?? whispered ?? false }, void 0, false, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 180,
        columnNumber: 30
      }, this) : row.phrase }, void 0, false, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this),
      colVisibility.translation && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TableCell, { children: translatedPhrase }, void 0, false, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 182,
        columnNumber: 41
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ParadigmTable.tsx",
      lineNumber: 178,
      columnNumber: 15
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ParadigmTable.tsx",
    lineNumber: 162,
    columnNumber: 10
  }, this);
}
_s2(TableRowWrapper, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c2 = TableRowWrapper;
function SettingsMenu({
  toggleBreakdown,
  toggleColumn
}) {
  _s3();
  const context = import_react.default.useContext(ParadigmTableContext);
  if (!context) {
    throw new Error("Missing context");
  }
  const {
    colVisibility,
    isTesting,
    showBreakdown
  } = context;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Settings, { className: "print:hidden" }, void 0, false, {
      fileName: "app/components/ParadigmTable.tsx",
      lineNumber: 204,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/ParadigmTable.tsx",
      lineNumber: 203,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuContent, { className: "w-56", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: () => toggleColumn("pronounEnglish"), children: colVisibility.pronounEnglish ? "Hide Pronoun (EN) column" : "Show Pronoun (EN) column" }, void 0, false, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 207,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: () => toggleColumn("pronounOneida"), children: colVisibility.pronounOneida ? "Hide Pronoun column" : "Show Pronoun column" }, void 0, false, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: () => toggleColumn("translation"), children: colVisibility.translation ? "Hide Translation column" : "Show Translation column" }, void 0, false, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 213,
        columnNumber: 9
      }, this),
      !isTesting && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DropdownMenuItem, { onClick: () => toggleBreakdown(!showBreakdown), children: showBreakdown ? "Hide text colors" : "Show text colors" }, void 0, false, {
        fileName: "app/components/ParadigmTable.tsx",
        lineNumber: 216,
        columnNumber: 24
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ParadigmTable.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ParadigmTable.tsx",
    lineNumber: 202,
    columnNumber: 10
  }, this);
}
_s3(SettingsMenu, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c3 = SettingsMenu;
function createParadigmData(data, allowedPronouns) {
  const result = import_lodash.default.cloneDeep(data);
  for (let i = 0; i < result.phrases.length; i++) {
    const element = result.phrases[i];
    const endIndex = element.breakdown.length - 1;
    if (element.whispered ?? data.whispered ?? true) {
      const lastElement = element.breakdown[endIndex];
      const lastPartOfBreakdown = getBreakdownTextPart(getBreakdownTextPart(lastElement));
      const lastPartWhispered = whisperizeWord(lastPartOfBreakdown);
      element.breakdown[endIndex] = typeof lastElement === "string" ? lastPartWhispered : {
        text: lastPartWhispered,
        type: Array.isArray(lastElement) ? lastElement[1] : lastElement.type ?? void 0
      };
    }
    element.phrase = element.breakdown.map((part) => getBreakdownTextPart(part)).join("");
    if (allowedPronouns) {
      element.pronoun = allowedPronouns[i];
    }
  }
  result.whispered = data.whispered ?? true;
  return result;
}
var getBreakdownTextPart = (part) => typeof part === "string" ? part : Array.isArray(part) ? part[0] : part.text;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "ParadigmTable");
$RefreshReg$(_c2, "TableRowWrapper");
$RefreshReg$(_c3, "SettingsMenu");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  ParadigmTable,
  createParadigmData
};
//# sourceMappingURL=/build/_shared/chunk-T36NX3RM.js.map
