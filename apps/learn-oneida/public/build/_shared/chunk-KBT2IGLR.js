import {
  whisperizeWord
} from "/build/_shared/chunk-YNSSGAWD.js";
import {
  responsiveClassName
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

// app/utils/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/index.ts"
  );
  import.meta.hot.lastModified = "1716730032016.958";
}
function formatTranslation(text, params) {
  let result = text;
  for (const key in params) {
    result = result.replace(new RegExp(`{{${key}}}`, "g"), params[key]);
  }
  return result;
}
var singlePronouns = ["i", "u", "m", "f", "it"];
var dualicPronouns = ["uni", "soni", "u2", "2m", "2f"];
var pluralPronouns = ["us", "theyni", "yall", "ms", "fs"];
var pronouns = [
  ...singlePronouns,
  ...dualicPronouns,
  ...pluralPronouns
];
var pronounsBlue = [
  ...singlePronouns,
  "uni",
  "u2",
  "2m",
  "2f",
  "us",
  "yall"
];
var PRONOUN_MAP_ONEIDA = {
  i: "\xED",
  u: "is\xE9",
  m: "laulh\xE1",
  f: "akaulh\xE1",
  it: "aulh\xE1",
  uni: "tetniy\xE1hse",
  soni: "teyakniy\xE1hse",
  u2: "tesniy\xE1hse",
  "2m": "tehniy\xE1hse",
  "2f": "tekniy\xE1hse",
  us: "twakweku",
  theyni: "yakwakweku",
  yall: "swakweku",
  ms: "latikweku",
  fs: "kutikweku"
};
var PRONOUN_MAP_EN = {
  i: "I",
  u: "You",
  m: "He",
  f: "She",
  it: "It",
  uni: "You and I",
  soni: "Someone and I",
  u2: "You two",
  "2m": "Two males",
  "2f": "Two females",
  us: "You all and I",
  theyni: "They and I",
  yall: "All of you",
  ms: "They (males)",
  fs: "They (females)"
};
var PRONOUN_MAP_EN_OBJECTIVE = {
  i: "Me",
  u: "You",
  m: "Him",
  f: "Her",
  it: "It",
  uni: "You and I",
  soni: "Someone and I",
  u2: "You two",
  "2m": "Two males",
  "2f": "Two females",
  us: "You all and I",
  theyni: "Them and I",
  yall: "All of you",
  ms: "Them (males)",
  fs: "Them (females)"
};
var PRONOUN_MAP_EN_POSSESSIVE = {
  i: "My",
  u: "Your",
  m: "His",
  f: "Her",
  it: "Its",
  uni: "Our (you and I)",
  soni: "Our (someone and I)",
  u2: "All your",
  "2m": "Their (males, mix)",
  "2f": "Their (females)",
  us: "All our",
  theyni: "All our (they and I)",
  yall: "All of yours",
  ms: "All (males) their",
  fs: "All (females) their"
};
var REF_VERB_MAP = {
  i: "am",
  u: "are",
  m: "is",
  f: "is",
  it: "is",
  uni: "are",
  soni: "are",
  u2: "are",
  "2m": "are",
  "2f": "are",
  us: "are",
  theyni: "are",
  yall: "are",
  ms: "are",
  fs: "are"
};
var REF_VERB_PASTTENSE_MAP = {
  i: "have",
  u: "have",
  m: "has",
  f: "has",
  it: "has",
  uni: "have",
  soni: "have",
  u2: "have",
  "2m": "have",
  "2f": "have",
  us: "have",
  theyni: "have",
  yall: "have",
  ms: "have",
  fs: "have"
};
var REF_VERB_PASTTENSE_ALT_MAP = {
  i: "was",
  u: "were",
  m: "was",
  f: "was",
  it: "was",
  uni: "were",
  soni: "were",
  u2: "were",
  "2m": "were",
  "2f": "were",
  us: "were",
  theyni: "were",
  yall: "were",
  ms: "were",
  fs: "were"
};
var PURPLES_MAP = {
  i_you: "I \u2192 you",
  i_him: "I \u2192 him",
  i_her: "I \u2192 her",
  you_me: "You \u2192 me",
  you_him: "You \u2192 him",
  you_her: "You \u2192 her",
  he_me: "He \u2192 me",
  he_you: "He \u2192 you",
  he_him: "He \u2192 him",
  he_her: "He \u2192 her",
  she_me: "She \u2192 me",
  she_you: "She \u2192 you",
  she_him: "She \u2192 him",
  she_her: "She \u2192 her"
};
var arrayify = (value) => Array.isArray(value) ? value : [value];
function translatePhrase(phrase, pronoun, translationFn) {
  return formatTranslation(phrase, {
    pronoun: PRONOUN_MAP_EN[pronoun],
    pronounObjective: PRONOUN_MAP_EN_OBJECTIVE[pronoun],
    pronounPossessive: PRONOUN_MAP_EN_POSSESSIVE[pronoun],
    refVerb: REF_VERB_MAP[pronoun],
    refVerbPast: REF_VERB_PASTTENSE_MAP[pronoun],
    refVerbPastAlt: REF_VERB_PASTTENSE_ALT_MAP[pronoun],
    ...translationFn ? translationFn({ pronoun }) : {}
  });
}

// app/components/TextBreakdown.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var import_react = __toESM(require_react(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/TextBreakdown.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/TextBreakdown.tsx"
  );
  import.meta.hot.lastModified = "1718240757360.078";
}
function TextBreakdown({
  as: Tag = "span",
  breakdown: _breakdown,
  prefix,
  suffix,
  typeFallback,
  whispered: _whispered = false,
  wrap
}) {
  const breakdown = getPrefixArr(prefix).concat(_breakdown).concat(getSuffixArr(suffix));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tag, { children: breakdown.map((part, i) => {
    const innerTextProps = {
      wrap
    };
    const isLastPart = i === breakdown.length - 1;
    const whispered = isLastPart && !!_whispered;
    if (typeof part === "string") {
      const isPastTense = ["kwe\u0294", "hkwe\u0294", "hn\xE9\xB7", "hne\u0294"].includes(part) && isLastPart || ["tshi", "tsha\u0294"].includes(part) && i === 0;
      return /* @__PURE__ */ (0, import_react.createElement)(InnerText, { ...innerTextProps, key: i, type: isPastTense ? "PAST" : void 0 }, whispered ? whisperizeWord(part) : part);
    }
    const text = Array.isArray(part) ? part[0] : part.text;
    const type = Array.isArray(part) ? part[1] : part.type;
    const hasLeadingWhitespace = text.trimStart() !== text;
    const hasTrailingWhitespace = text.trimStart() !== text;
    return /* @__PURE__ */ (0, import_react.createElement)(InnerText, { ...innerTextProps, key: i, type: type ?? typeFallback }, hasLeadingWhitespace ? "&nbsp" : "", whispered ? whisperizeWord(text) : text, hasTrailingWhitespace ? "&nbsp" : "");
  }) }, void 0, false, {
    fileName: "app/components/TextBreakdown.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
}
_c = TextBreakdown;
function InnerText({
  children,
  type,
  wrap
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: cn(arrayify(type ?? []).map((t) => t ? BREAKDOWN_TYPE_MAP[t] : void 0), "font-bold", wrap === "nowrap" && "text-nowrap"), children }, void 0, false, {
    fileName: "app/components/TextBreakdown.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_c2 = InnerText;
var BREAKDOWN_TYPE_MAP = {
  CIS: "text-lime-500",
  DEF: "text-emerald-400",
  DUAL: "text-lime-500",
  EP: "text-gray-400",
  FUT: "text-emerald-400",
  HAB: "text-emerald-400",
  IFUT: "text-emerald-400",
  JOIN: "text-yellow-400",
  OP: "underline decoration-wavy decoration-black",
  PAST: "text-emerald-400",
  PB: "text-blue-600",
  PFV: "text-emerald-400",
  PLB: "text-cyan-400",
  PP: "text-violet-500",
  PR: "text-red-600",
  PTV: "text-lime-500",
  RECP: "text-green-700",
  REFL: "text-green-700",
  REP: "text-yellow-600",
  RPL: "text-gray-400",
  SRFL: "text-green-700"
};
function getSuffixArr(suffix) {
  if (!suffix) {
    return [];
  }
  const text = suffix === "hne" ? "hn\xE9\xB7" : suffix === "kwe" ? "kwe\u0294" : suffix === "hkwe" ? "hkwe\u0294" : suffix === "hake" ? "hake\u0294" : suffix === "heke" ? "heke\u0294" : suffix === "hak" ? "hak\u0294" : suffix === "ake" ? "ake\u0294" : suffix === "\xE1ke" ? "\xE1ke\u0294" : void 0;
  if (!text) {
    return [];
  }
  return [{
    text,
    type: "PAST"
  }];
}
function getPrefixArr(prefix) {
  if (!prefix) {
    return [];
  } else if (prefix === "RECP") {
    return [{
      text: "te",
      type: "RECP"
    }];
  } else if (prefix === "FUT") {
    return [{
      text: "\u028C",
      type: "FUT"
    }];
  } else if (prefix === "IFUT") {
    return [{
      text: "a",
      type: "IFUT"
    }];
  } else {
    return [];
  }
}
function convertBreakdownToPlainText(breakdown, options = {}) {
  const breakdownDuplicate = getPrefixArr(options.prefix).concat(breakdown).concat(getSuffixArr(options.suffix));
  return breakdownDuplicate.map((part) => Array.isArray(part) ? part[0] : typeof part === "object" ? part.text : part).join("");
}
var _c;
var _c2;
$RefreshReg$(_c, "TextBreakdown");
$RefreshReg$(_c2, "InnerText");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// @/design/components/Bleed.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
function Bleed({ children, m, mx, my, ml, mt, mr, mb }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "div",
    {
      className: cn(
        m && responsiveClassName(m, "-m-"),
        mx && responsiveClassName(mx, "-mx-"),
        my && responsiveClassName(my, "-my-"),
        ml && responsiveClassName(ml, "-ml-"),
        mr && responsiveClassName(mr, "-mr-"),
        mb && responsiveClassName(mb, "-mb-"),
        mt && responsiveClassName(mt, "-mt-")
      ),
      children
    },
    void 0,
    false,
    {
      fileName: "@/design/components/Bleed.tsx",
      lineNumber: 11,
      columnNumber: 5
    },
    this
  );
}

// @/design/primitives/table.tsx
var React = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/table.tsx",
    lineNumber: 10,
    columnNumber: 5
  },
  this
) }, void 0, false, {
  fileName: "@/design/primitives/table.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this));
Table.displayName = "Table";
var TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, false, {
  fileName: "@/design/primitives/table.tsx",
  lineNumber: 23,
  columnNumber: 3
}, this));
TableHeader.displayName = "TableHeader";
var TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/table.tsx",
    lineNumber: 31,
    columnNumber: 3
  },
  this
));
TableBody.displayName = "TableBody";
var TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/table.tsx",
    lineNumber: 43,
    columnNumber: 3
  },
  this
));
TableFooter.displayName = "TableFooter";
var TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/table.tsx",
    lineNumber: 58,
    columnNumber: 3
  },
  this
));
TableRow.displayName = "TableRow";
var TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/table.tsx",
    lineNumber: 73,
    columnNumber: 3
  },
  this
));
TableHead.displayName = "TableHead";
var TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/table.tsx",
    lineNumber: 88,
    columnNumber: 3
  },
  this
));
TableCell.displayName = "TableCell";
var TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/table.tsx",
    lineNumber: 100,
    columnNumber: 3
  },
  this
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  singlePronouns,
  dualicPronouns,
  pluralPronouns,
  pronouns,
  pronounsBlue,
  PRONOUN_MAP_ONEIDA,
  PRONOUN_MAP_EN,
  PRONOUN_MAP_EN_OBJECTIVE,
  PRONOUN_MAP_EN_POSSESSIVE,
  PURPLES_MAP,
  arrayify,
  translatePhrase,
  TextBreakdown,
  convertBreakdownToPlainText,
  Bleed
};
//# sourceMappingURL=/build/_shared/chunk-KBT2IGLR.js.map
