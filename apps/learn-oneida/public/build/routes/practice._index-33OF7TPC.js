import {
  List
} from "/build/_shared/chunk-VKR6BTYO.js";
import {
  Heading
} from "/build/_shared/chunk-LU2G44XZ.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
import {
  Text
} from "/build/_shared/chunk-T7AJFEZW.js";
import "/build/_shared/chunk-KFDBZIFX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/practice._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/practice._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/practice._index.tsx"
  );
  import.meta.hot.lastModified = "1718240764416.0173";
}
var meta = () => {
  return [{
    title: "Practice"
  }, {
    name: "description",
    content: "Improve your Oneida skills with tools provided by this website"
  }];
};
function Practice() {
  const items = [
    // {
    //   href: "/being-somewhere",
    //   label: "Being somewhere",
    // },
    // {
    //   href: "/cardinal-directions",
    //   label: "Cardinal Directions",
    // },
    {
      href: "/counting-time",
      label: "Counting time"
    },
    // {
    //   href: "/days-of-the-week",
    //   label: "Days of the week",
    // },
    // {
    //   href: "/months",
    //   label: "Months of the year",
    // },
    {
      href: "/places",
      label: "Places in the community"
    },
    // {
    //   href: "/seasons",
    //   label: "Seasons",
    // },
    {
      href: "/tense-conjugation-module-4",
      label: "Tense Conjugation (Module 4)"
    },
    {
      href: "/active-tense-conjugation",
      label: "Tense Conjugation (Active Verbs)"
    },
    {
      href: "/active-tense-identification",
      label: "Tense Identification (Active Verbs)"
    },
    {
      href: "/stative-tense-conjugation",
      label: "Tense Conjugation (Stative Verbs)"
    },
    {
      href: "/stative-tense-identification",
      label: "Tense Identification (Stative Verbs)"
    },
    {
      href: "/verb-lists",
      label: "Verb Lists"
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { level: 1, variant: "headlineL", children: "Practice" }, void 0, false, {
      fileName: "app/routes/practice._index.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Improve your Oneida skills with features provided by this website!" }, void 0, false, {
      fileName: "app/routes/practice._index.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "underline text-blue-600", href: `/practice${t.href}`, children: t.label }, void 0, false, {
      fileName: "app/routes/practice._index.tsx",
      lineNumber: 92,
      columnNumber: 13
    }, this) }, i, false, {
      fileName: "app/routes/practice._index.tsx",
      lineNumber: 91,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/routes/practice._index.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/practice._index.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_c = Practice;
var _c;
$RefreshReg$(_c, "Practice");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Practice as default,
  meta
};
//# sourceMappingURL=/build/routes/practice._index-33OF7TPC.js.map
