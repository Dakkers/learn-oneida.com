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

// app/routes/articles._index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/articles._index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/articles._index.tsx"
  );
  import.meta.hot.lastModified = "1717069385812.8682";
}
var meta = () => {
  return [{
    title: "Articles"
  }, {
    name: "description",
    content: "Articles provided by this website"
  }];
};
function Articles() {
  const articlesLinguistics = [["/glottal-stop", "Glottal Stop"], ["/pronominals", "Pronominals"], ["/repetitive-conjugation", "Repetitive Conjugation"], ["/stress", "Stress and Accents"], ["/letter-h", "The Letter H"], ["/whispered-endings", "Whispered Endings"]];
  const articles = [{
    href: "/around-the-house",
    label: "Around the house"
  }, {
    href: "/at-someones-place",
    label: "At someone's place"
  }, {
    href: "/cardinal-directions",
    label: "Cardinal directions"
  }, {
    href: "/cities",
    label: "Cities"
  }, {
    href: "/clans",
    label: "Clans"
  }, {
    href: "/clock-time",
    label: "Clock time"
  }, {
    href: "/counting-time",
    label: "Counting lengths of time"
  }, {
    href: "/counting-people",
    label: "Counting people"
  }, {
    href: "/countries",
    label: "Countries"
  }, {
    href: "/days-of-the-week",
    label: "Days of the week"
  }, {
    href: "/domesticated-animals",
    label: "Domesticated animals"
  }, {
    href: "/english-names",
    label: "English names"
  }, {
    href: "/good-people-bad-people",
    label: "Good people and bad people"
  }, {
    href: "/months",
    label: "Months of the year"
  }, {
    href: "/nations",
    label: "Nations"
  }, {
    href: "/places-in-the-community",
    label: "Places in the community"
  }, {
    href: "/phone-numbers",
    label: "Phone numbers"
  }, {
    href: "/relationships",
    label: "Relationships"
  }, {
    href: "/roads",
    label: "Roads"
  }, {
    href: "/seasons",
    label: "Seasons"
  }, {
    href: "/times-of-day",
    label: "Times of day"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { level: 1, variant: "headlineL", children: "Articles" }, void 0, false, {
      fileName: "app/routes/articles._index.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Articles regarding the linguistics side of things:" }, void 0, false, {
      fileName: "app/routes/articles._index.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinksList, { links: articlesLinguistics }, void 0, false, {
      fileName: "app/routes/articles._index.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: "Other articles:" }, void 0, false, {
      fileName: "app/routes/articles._index.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LinksList, { links: articles }, void 0, false, {
      fileName: "app/routes/articles._index.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/articles._index.tsx",
    lineNumber: 99,
    columnNumber: 10
  }, this);
}
_c = Articles;
function LinksList({
  links
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: links.map((t, i) => {
    const href = Array.isArray(t) ? t[0] : t.href;
    const label = Array.isArray(t) ? t[1] : t.label;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { className: "underline text-blue-600", href: `/articles${href}`, children: label }, void 0, false, {
      fileName: "app/routes/articles._index.tsx",
      lineNumber: 120,
      columnNumber: 13
    }, this) }, i, false, {
      fileName: "app/routes/articles._index.tsx",
      lineNumber: 119,
      columnNumber: 14
    }, this);
  }) }, void 0, false, {
    fileName: "app/routes/articles._index.tsx",
    lineNumber: 115,
    columnNumber: 10
  }, this);
}
_c2 = LinksList;
var _c;
var _c2;
$RefreshReg$(_c, "Articles");
$RefreshReg$(_c2, "LinksList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Articles as default,
  meta
};
//# sourceMappingURL=/build/routes/articles._index-HQCQEP6L.js.map
