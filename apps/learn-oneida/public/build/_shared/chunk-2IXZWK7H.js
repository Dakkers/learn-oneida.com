import {
  Letter
} from "/build/_shared/chunk-TYY7O7G2.js";
import {
  List
} from "/build/_shared/chunk-VKR6BTYO.js";
import {
  SectionHeading
} from "/build/_shared/chunk-PO6EWDTJ.js";
import {
  TableWrapper
} from "/build/_shared/chunk-KIXTCICO.js";
import {
  TextBreakdown
} from "/build/_shared/chunk-KBT2IGLR.js";
import {
  Flex
} from "/build/_shared/chunk-24GQRLNU.js";
import {
  Text
} from "/build/_shared/chunk-T7AJFEZW.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  createHotContext
} from "/build/_shared/chunk-CCK4GUQY.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/articles/RepetitiveFeature.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/articles/RepetitiveFeature.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/articles/RepetitiveFeature.tsx"
  );
  import.meta.hot.lastModified = "1715104892814.3535";
}
function RepetitiveFeatureArticle({
  level = 1
}) {
  const data = [{
    en: ["It is single", "It is single again"],
    one: [[{
      text: "w"
    }, "atatw\u028Cni\xB7y\xF3\u0332\xB7"], [{
      text: "s",
      type: "REP"
    }, {
      text: "w"
    }, "atatw\u028Cni\xB7y\xF3\u0332\xB7"]],
    type: "PR"
  }, {
    en: ["I am married", "I am married again"],
    one: [[{
      text: "wake"
    }, "ny\xE1ku\u0294"], [{
      text: "s",
      type: "REP"
    }, {
      text: "wake"
    }, "ny\xE1\xB7ku\u0294"]],
    type: "PB"
  }, {
    en: ["He is single", "He is single again"],
    one: [[{
      text: "l"
    }, "atatw\u028Cni\xB7y\xF3\u0332\xB7"], [{
      text: "s",
      type: "REP"
    }, {
      text: "h"
    }, "atatw\u028Cni\xB7y\xF3\u0332\xB7"]],
    type: "PR"
  }, {
    en: ["He is married (to someone)", "He is married (to someone) again"],
    one: [[{
      text: "lo"
    }, "ny\xE1ku\u0294"], [{
      text: "s",
      type: "REP"
    }, {
      text: "ho"
    }, "ny\xE1ku\u0294"]],
    type: "PB"
  }, {
    en: ["He doesn't know me", "He doesn't know me anymore"],
    one: [["y\xE1h te", {
      text: "hak"
    }, "y\u028Ctel\xED\u02CD"], ["y\xE1h te", {
      text: "s",
      type: "REP"
    }, {
      text: "hak"
    }, "y\u028Ctel\xED\u02CD"]],
    type: "PP"
  }, {
    en: ["I like it", "I like it again"],
    one: [[{
      text: "k"
    }, "n\xFA\xB7wehse\u0332"], [{
      text: "s",
      type: "REP"
    }, {
      text: "k"
    }, "n\xFA\xB7wehse\u0332"]],
    type: "PR"
  }, {
    en: ["I do not like you", "I do not like you anymore"],
    one: [["y\xE1h te\u0294", {
      text: "ku"
    }, "n\xFA\xB7wehse\u0332"], ["y\xE1h te", {
      text: "s",
      type: "REP"
    }, {
      text: "ku"
    }, "n\xFA\xB7wehse\u0332"]],
    type: "PP"
  }, {
    en: ["You like it", "You like it again"],
    one: [[{
      text: "s"
    }, "n\xFA\xB7wehse\u0332"], [{
      text: "se",
      type: "REP"
    }, {
      text: "h",
      type: "RPL"
    }, {
      text: "s"
    }, "n\xFA\xB7wehse\u0332"]],
    type: "PR"
  }, {
    en: ["He loves her/them", "He loves her/them again"],
    one: [[{
      text: "shako"
    }, "nol\xFAkhwa\u0332\u0294\u0332"], [{
      text: "se",
      type: "REP"
    }, {
      text: "shako"
    }, "nol\xFAkhwa\u0332\u0294\u0332"]],
    type: "PP"
  }, {
    en: ["I do not like her/them", "I do not like her/them anymore"],
    one: [["y\xE1h te\u0294", {
      text: "khe"
    }, "n\xFA\xB7wehse\u0332"], ["y\xE1h te", {
      text: "se",
      type: "REP"
    }, {
      text: "khe"
    }, "n\xFA\xB7wehse\u0332"]],
    type: "PP"
  }, {
    en: ["Someone and I are engaged", "Someone and I are engaged again"],
    one: [[{
      text: "yukni"
    }, "ny\xE1khe\u0294"], [{
      text: "ts",
      type: "REP"
    }, {
      text: "yukni"
    }, "ny\xE1khe\u0294"]],
    type: "PB"
  }, {
    en: ["I am not in a relationship (with someone)", "I am not in a relationship (with someone) anymore"],
    one: [["y\xE1h te", {
      text: "y\xE1kn"
    }, "ehse\u0332"], ["y\xE1h te", {
      text: "ts",
      type: "REP"
    }, {
      text: "y\xE1kn"
    }, "ehse\u0332"]],
    type: "PR"
  }, {
    en: ["He loves her/them", "He loves her/them again"],
    one: [[{
      text: "yesa"
    }, "nol\xFAkhwa\u0332\u0294\u0332"], [{
      text: "ts",
      type: "REP"
    }, {
      text: "yesa"
    }, "nol\xFAkhwa\u0332\u0294\u0332"]],
    type: "PP"
  }, {
    en: ["You two are not married", "You two are not married anymore"],
    one: [["y\xE1h te", {
      text: "sni"
    }, "ny\xE1ku\u0294"], ["y\xE1h te", {
      text: "tsi",
      type: "REP"
    }, {
      text: "sni"
    }, "ny\xE1ku\u0294"]],
    type: "PR"
  }, {
    en: ["Are you two single?", "Are you two single again?"],
    one: [[{
      text: "tsy"
    }, "atatw\u028Cni\xB7y\xF3\xB7 k\u028C\u0301"], [{
      text: "tsi",
      type: "REP"
    }, {
      text: "tsy"
    }, "atatw\u028Cni\xB7y\xF3\xB7 k\u028C\u0301"]],
    type: "PR"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeading, { id: "repetitive-s", level, children: "The Repetitive Conjugation" }, void 0, false, {
      fileName: "app/components/articles/RepetitiveFeature.tsx",
      lineNumber: 201,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: 'In Oneida, a pre-pronominal prefix is used to indicate something "being the case again" and also "not being the case anymore". Below are a number of examples. The prefix that is added is dependent on the letter that it comes before. The rules are:' }, void 0, false, {
      fileName: "app/components/articles/RepetitiveFeature.tsx",
      lineNumber: 204,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        "w, h, l, k: the prefix is ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "s" }, void 0, false, {
          fileName: "app/components/articles/RepetitiveFeature.tsx",
          lineNumber: 212,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/articles/RepetitiveFeature.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        "y: the prefix is ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "ts" }, void 0, false, {
          fileName: "app/components/articles/RepetitiveFeature.tsx",
          lineNumber: 215,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/articles/RepetitiveFeature.tsx",
        lineNumber: 214,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        "some consonant clusters: the prefix is ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "se" }, void 0, false, {
          fileName: "app/components/articles/RepetitiveFeature.tsx",
          lineNumber: 218,
          columnNumber: 50
        }, this),
        " or",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "tsi" }, void 0, false, {
          fileName: "app/components/articles/RepetitiveFeature.tsx",
          lineNumber: 219,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/articles/RepetitiveFeature.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List.Item, { children: [
        "t: the prefix is ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Letter, { children: "tsi" }, void 0, false, {
          fileName: "app/components/articles/RepetitiveFeature.tsx",
          lineNumber: 222,
          columnNumber: 28
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/articles/RepetitiveFeature.tsx",
        lineNumber: 221,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/articles/RepetitiveFeature.tsx",
      lineNumber: 210,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TableWrapper, { columns: [TableWrapper.englishColumn, {
      accessorKey: "one",
      // @ts-expect-error To be fixed in LO-12
      cell: (value, row) => value.map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextBreakdown, { as: "div", breakdown: v, typeFallback: row.type }, i, false, {
        fileName: "app/components/articles/RepetitiveFeature.tsx",
        lineNumber: 229,
        columnNumber: 49
      }, this)),
      header: "Translation"
    }], data }, void 0, false, {
      fileName: "app/components/articles/RepetitiveFeature.tsx",
      lineNumber: 226,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/articles/RepetitiveFeature.tsx",
    lineNumber: 200,
    columnNumber: 10
  }, this);
}
_c = RepetitiveFeatureArticle;
var _c;
$RefreshReg$(_c, "RepetitiveFeatureArticle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  RepetitiveFeatureArticle
};
//# sourceMappingURL=/build/_shared/chunk-2IXZWK7H.js.map
