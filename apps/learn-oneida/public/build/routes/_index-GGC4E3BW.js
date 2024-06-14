import {
  Link
} from "/build/_shared/chunk-IK2DEJ6J.js";
import "/build/_shared/chunk-SB6J2XPB.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import "/build/_shared/chunk-LU2G44XZ.js";
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
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// @/design/primitives/ui/card.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/ui/card.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, false, {
  fileName: "@/design/primitives/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/ui/card.tsx",
    lineNumber: 71,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1717069385811.766";
}
var meta = () => {
  return [{
    title: "Learn Oneida"
  }, {
    name: "description",
    content: "Learn the Oneida language!"
  }];
};
function Index() {
  const modules = [{
    title: "Introduction",
    desc: "Coming soon...",
    active: false
  }, {
    desc: "Pronominals aplenty! This module introduces you to pronominal prefixes, their exceptions when conjugating, some intracacies of the language, people, English names, and a couple verbs."
  }, {
    desc: "New linguistical features of the language are introduced, as well as family members, commands and their negations, numbers, and several new verbs."
  }, {
    desc: "The past tense makes its appearance, followed by a brief introduction to the repetitive feature. Relationship terms are discussed in addition to a quick glance at noun incorporation."
  }, {
    desc: "Verbs regarding where someone is are discussed and clock time in depth. Other topics include seasons, months, days of the week, and places in the community."
  }, {
    desc: "A plethora of stative verbs are introduced, specifically those related to one's character, the mind, one's body, and physical attributes. Some future tenses are introduced. Lastly, height and weight are discussed."
  }, {
    desc: "Active verbs are discussed along with new tenses! A select few of these verbs have their paradigms written out and examples are included so as to when to use which tense."
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:max-w-lg mx-auto mt-4 md:mt-8 mb-2 md:mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SectionHeading, { align: "center", level: 1, children: "Welcome to Learn Oneida" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "lg:max-w-5xl mt-2 md:mt-6 mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SectionHeading, { level: 2, children: "Learn" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4", children: modules.map((card, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Card, { className: "p-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardTitle, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { variant: "titleM", children: "title" in card ? card.title : `Module ${i}` }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 65,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(CardDescription, { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Text, { children: card.desc }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 70,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 69,
          columnNumber: 15
        }, this),
        (card.active ?? true) && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Flex, { justify: "end", pt: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { href: `/learn/module${i.toString().padStart(2, "0")}`, children: "Learn" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 74,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 73,
          columnNumber: 41
        }, this)
      ] }, i, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 63,
        columnNumber: 37
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-GGC4E3BW.js.map
