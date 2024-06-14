import {
  Separator
} from "/build/_shared/chunk-DQR6F5KU.js";
import {
  require_lodash
} from "/build/_shared/chunk-Z7H33W4S.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  arrayify
} from "/build/_shared/chunk-KBT2IGLR.js";
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

// app/components/practice/MatchingGamePage.tsx
var import_react8 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/import.mjs
var import_react2 = __toESM(require_react(), 1);

// node_modules/@react-aria/ssr/dist/import.mjs
var import_react = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = /* @__PURE__ */ (0, import_react.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = /* @__PURE__ */ (0, import_react.default).createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = (0, import_react.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react.useRef)(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM)
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react.default).useId();
  let [didSSR] = (0, import_react.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react.default)["useSyncExternalStore"] === "function")
    return (0, import_react.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@react-aria/utils/dist/import.mjs
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react2.default).useLayoutEffect : () => {
};
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = (0, import_react2.useRef)(null);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react2.useCallback)((...args) => {
    const f = ref.current;
    return f(...args);
  }, []);
}
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll())
    element.focus({
      preventScroll: true
    });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      var focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth)
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement)
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
function $c87311424ea30a05$var$testUserAgent(re) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null)
    return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$78551043582a6a98() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)())
      metaKey = true;
    else
      ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined")
    return;
  let onTransitionStart = (e) => {
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
      e.target.addEventListener("transitioncancel", onTransitionEnd);
    }
    transitions.add(e.propertyName);
  };
  let onTransitionEnd = (e) => {
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
    if (!properties)
      return;
    properties.delete(e.propertyName);
    if (properties.size === 0) {
      e.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)
        cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $bbed8b41f857bcc0$var$setupGlobalEvents();
  else
    document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react2.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react2.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = (0, import_react2.useCallback)((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react2.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react2.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
var $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
var $ef06256079686ba0$var$descriptionId = 0;
var $ef06256079686ba0$var$descriptionNodes = /* @__PURE__ */ new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
  let [id, setId] = (0, import_react2.useState)(void 0);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (!description)
      return;
    let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
    if (!desc) {
      let id2 = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
      setId(id2);
      let node = document.createElement("div");
      node.id = id2;
      node.style.display = "none";
      node.textContent = description;
      document.body.appendChild(node);
      desc = {
        refCount: 0,
        element: node
      };
      $ef06256079686ba0$var$descriptionNodes.set(description, desc);
    } else
      setId(desc.element.id);
    desc.refCount++;
    return () => {
      if (--desc.refCount === 0) {
        desc.element.remove();
        $ef06256079686ba0$var$descriptionNodes.delete(description);
      }
    };
  }, [
    description
  ]);
  return {
    "aria-describedby": description ? id : void 0
  };
}
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType)
    return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
  return !(0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}

// node_modules/@react-aria/interactions/dist/import.mjs
var import_react3 = __toESM(require_react(), 1);
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, import_react3.default).createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";
var $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$var$hasSetupGlobalListeners = false;
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers)
    handler(modality, e);
}
function $507fabe10e71c6fb$var$isValidKey(e) {
  return !(e.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e.type === "mousedown" || e.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
  if ((0, $6a7db85432448f7f$export$60278871457622de)(e)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
  if (e.target === window || e.target === document)
    return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents() {
  if (typeof window === "undefined" || $507fabe10e71c6fb$var$hasSetupGlobalListeners)
    return;
  let focus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  document.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  document.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  document.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  window.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  window.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    document.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$var$hasSetupGlobalListeners = true;
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  else
    document.addEventListener("DOMContentLoaded", $507fabe10e71c6fb$var$setupGlobalFocusEvents);
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
  return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  let [modality, setModality] = (0, import_react3.useState)($507fabe10e71c6fb$var$currentModality);
  (0, import_react3.useEffect)(() => {
    let handler = () => {
      setModality($507fabe10e71c6fb$var$currentModality);
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, []);
  return (0, $b5e257d569688ac6$export$535bd6ca7f90a273)() ? null : modality;
}

// node_modules/@react-aria/i18n/dist/real-module.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/@internationalized/string/dist/import.mjs
var $5b160d28a433310d$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
var $5b160d28a433310d$var$stringsSymbol = Symbol.for("react-aria.i18n.strings");
var $5b160d28a433310d$var$cachedGlobalStrings = void 0;
var $5b160d28a433310d$export$c17fa47878dc55b6 = class {
  /** Returns a localized string for the given key and locale. */
  getStringForLocale(key, locale) {
    let strings = this.getStringsForLocale(locale);
    let string = strings[key];
    if (!string)
      throw new Error(`Could not find intl message ${key} in ${locale} locale`);
    return string;
  }
  /** Returns all localized strings for the given locale. */
  getStringsForLocale(locale) {
    let strings = this.strings[locale];
    if (!strings) {
      strings = $5b160d28a433310d$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
      this.strings[locale] = strings;
    }
    return strings;
  }
  static getGlobalDictionaryForPackage(packageName) {
    if (typeof window === "undefined")
      return null;
    let locale = window[$5b160d28a433310d$var$localeSymbol];
    if ($5b160d28a433310d$var$cachedGlobalStrings === void 0) {
      let globalStrings = window[$5b160d28a433310d$var$stringsSymbol];
      if (!globalStrings)
        return null;
      $5b160d28a433310d$var$cachedGlobalStrings = {};
      for (let pkg in globalStrings)
        $5b160d28a433310d$var$cachedGlobalStrings[pkg] = new $5b160d28a433310d$export$c17fa47878dc55b6({
          [locale]: globalStrings[pkg]
        }, locale);
    }
    let dictionary = $5b160d28a433310d$var$cachedGlobalStrings === null || $5b160d28a433310d$var$cachedGlobalStrings === void 0 ? void 0 : $5b160d28a433310d$var$cachedGlobalStrings[packageName];
    if (!dictionary)
      throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
    return dictionary;
  }
  constructor(messages, defaultLocale = "en-US") {
    this.strings = {
      ...messages
    };
    this.defaultLocale = defaultLocale;
  }
};
function $5b160d28a433310d$var$getStringsForLocale(locale, strings, defaultLocale = "en-US") {
  if (strings[locale])
    return strings[locale];
  let language = $5b160d28a433310d$var$getLanguage(locale);
  if (strings[language])
    return strings[language];
  for (let key in strings) {
    if (key.startsWith(language + "-"))
      return strings[key];
  }
  return strings[defaultLocale];
}
function $5b160d28a433310d$var$getLanguage(locale) {
  if (Intl.Locale)
    return new Intl.Locale(locale).language;
  return locale.split("-")[0];
}
var $6db58dc88e78b024$var$pluralRulesCache = /* @__PURE__ */ new Map();
var $6db58dc88e78b024$var$numberFormatCache = /* @__PURE__ */ new Map();
var $6db58dc88e78b024$export$2f817fcdc4b89ae0 = class {
  /** Formats a localized string for the given key with the provided variables. */
  format(key, variables) {
    let message = this.strings.getStringForLocale(key, this.locale);
    return typeof message === "function" ? message(variables, this) : message;
  }
  plural(count, options, type = "cardinal") {
    let opt = options["=" + count];
    if (opt)
      return typeof opt === "function" ? opt() : opt;
    let key = this.locale + ":" + type;
    let pluralRules = $6db58dc88e78b024$var$pluralRulesCache.get(key);
    if (!pluralRules) {
      pluralRules = new Intl.PluralRules(this.locale, {
        type
      });
      $6db58dc88e78b024$var$pluralRulesCache.set(key, pluralRules);
    }
    let selected = pluralRules.select(count);
    opt = options[selected] || options.other;
    return typeof opt === "function" ? opt() : opt;
  }
  number(value) {
    let numberFormat = $6db58dc88e78b024$var$numberFormatCache.get(this.locale);
    if (!numberFormat) {
      numberFormat = new Intl.NumberFormat(this.locale);
      $6db58dc88e78b024$var$numberFormatCache.set(this.locale, numberFormat);
    }
    return numberFormat.format(value);
  }
  select(options, value) {
    let opt = options[value] || options.other;
    return typeof opt === "function" ? opt() : opt;
  }
  constructor(locale, strings) {
    this.locale = locale;
    this.strings = strings;
  }
};

// node_modules/@react-aria/i18n/dist/real-module.mjs
var $148a7a147e38ea7f$var$RTL_SCRIPTS = /* @__PURE__ */ new Set([
  "Arab",
  "Syrc",
  "Samr",
  "Mand",
  "Thaa",
  "Mend",
  "Nkoo",
  "Adlm",
  "Rohg",
  "Hebr"
]);
var $148a7a147e38ea7f$var$RTL_LANGS = /* @__PURE__ */ new Set([
  "ae",
  "ar",
  "arc",
  "bcc",
  "bqi",
  "ckb",
  "dv",
  "fa",
  "glk",
  "he",
  "ku",
  "mzn",
  "nqo",
  "pnb",
  "ps",
  "sd",
  "ug",
  "ur",
  "yi"
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(localeString) {
  if (Intl.Locale) {
    let locale = new Intl.Locale(localeString).maximize();
    let textInfo = typeof locale.getTextInfo === "function" ? locale.getTextInfo() : locale.textInfo;
    if (textInfo)
      return textInfo.direction === "rtl";
    if (locale.script)
      return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(locale.script);
  }
  let lang = localeString.split("-")[0];
  return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}
var $1e5a04cdaf7d1af8$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
  let locale = typeof window !== "undefined" && window[$1e5a04cdaf7d1af8$var$localeSymbol] || typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([
      locale
    ]);
  } catch (_err) {
    locale = "en-US";
  }
  return {
    locale,
    direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? "rtl" : "ltr"
  };
}
var $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
var $1e5a04cdaf7d1af8$var$listeners = /* @__PURE__ */ new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
  $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
  for (let listener of $1e5a04cdaf7d1af8$var$listeners)
    listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
  let isSSR = (0, $b5e257d569688ac6$export$535bd6ca7f90a273)();
  let [defaultLocale, setDefaultLocale] = (0, import_react4.useState)($1e5a04cdaf7d1af8$var$currentLocale);
  (0, import_react4.useEffect)(() => {
    if ($1e5a04cdaf7d1af8$var$listeners.size === 0)
      window.addEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
    $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
    return () => {
      $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
      if ($1e5a04cdaf7d1af8$var$listeners.size === 0)
        window.removeEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
    };
  }, []);
  if (isSSR)
    return {
      locale: "en-US",
      direction: "ltr"
    };
  return defaultLocale;
}
var $18f2051aff69b9bf$var$I18nContext = /* @__PURE__ */ (0, import_react4.default).createContext(null);
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
  let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
  let context = (0, import_react4.useContext)($18f2051aff69b9bf$var$I18nContext);
  return context || defaultLocale;
}
var $fca6afa0e843324b$var$cache = /* @__PURE__ */ new WeakMap();
function $fca6afa0e843324b$var$getCachedDictionary(strings) {
  let dictionary = $fca6afa0e843324b$var$cache.get(strings);
  if (!dictionary) {
    dictionary = new (0, $5b160d28a433310d$export$c17fa47878dc55b6)(strings);
    $fca6afa0e843324b$var$cache.set(strings, dictionary);
  }
  return dictionary;
}
function $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName) {
  return packageName && (0, $5b160d28a433310d$export$c17fa47878dc55b6).getGlobalDictionaryForPackage(packageName) || $fca6afa0e843324b$var$getCachedDictionary(strings);
}
function $fca6afa0e843324b$export$f12b703ca79dfbb1(strings, packageName) {
  let { locale } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
  let dictionary = $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName);
  return (0, import_react4.useMemo)(() => new (0, $6db58dc88e78b024$export$2f817fcdc4b89ae0)(locale, dictionary), [
    locale,
    dictionary
  ]);
}

// node_modules/@react-aria/live-announcer/dist/import.mjs
var $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7e3;
var $319e236875307eab$var$liveAnnouncer = null;
function $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = "assertive", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
  if (!$319e236875307eab$var$liveAnnouncer)
    $319e236875307eab$var$liveAnnouncer = new $319e236875307eab$var$LiveAnnouncer();
  $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
var $319e236875307eab$var$LiveAnnouncer = class {
  createLog(ariaLive) {
    let node = document.createElement("div");
    node.setAttribute("role", "log");
    node.setAttribute("aria-live", ariaLive);
    node.setAttribute("aria-relevant", "additions");
    return node;
  }
  destroy() {
    if (!this.node)
      return;
    document.body.removeChild(this.node);
    this.node = null;
  }
  announce(message, assertiveness = "assertive", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!this.node)
      return;
    let node = document.createElement("div");
    node.textContent = message;
    if (assertiveness === "assertive")
      this.assertiveLog.appendChild(node);
    else
      this.politeLog.appendChild(node);
    if (message !== "")
      setTimeout(() => {
        node.remove();
      }, timeout);
  }
  clear(assertiveness) {
    if (!this.node)
      return;
    if (!assertiveness || assertiveness === "assertive")
      this.assertiveLog.innerHTML = "";
    if (!assertiveness || assertiveness === "polite")
      this.politeLog.innerHTML = "";
  }
  constructor() {
    this.node = document.createElement("div");
    this.node.dataset.liveAnnouncer = "true";
    Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    });
    this.assertiveLog = this.createLog("assertive");
    this.node.appendChild(this.assertiveLog);
    this.politeLog = this.createLog("polite");
    this.node.appendChild(this.politeLog);
    document.body.prepend(this.node);
  }
};

// node_modules/@react-aria/overlays/dist/ar-AE.mjs
var $773d5888b972f1cf$exports = {};
$773d5888b972f1cf$exports = {
  "dismiss": `\u062A\u062C\u0627\u0647\u0644`
};

// node_modules/@react-aria/overlays/dist/bg-BG.mjs
var $d11f19852b941573$exports = {};
$d11f19852b941573$exports = {
  "dismiss": `\u041E\u0442\u0445\u0432\u044A\u0440\u043B\u044F\u043D\u0435`
};

// node_modules/@react-aria/overlays/dist/cs-CZ.mjs
var $b983974c2ee1efb3$exports = {};
$b983974c2ee1efb3$exports = {
  "dismiss": `Odstranit`
};

// node_modules/@react-aria/overlays/dist/da-DK.mjs
var $5809cc9d4e92de73$exports = {};
$5809cc9d4e92de73$exports = {
  "dismiss": `Luk`
};

// node_modules/@react-aria/overlays/dist/de-DE.mjs
var $c68c2e4fc74398d1$exports = {};
$c68c2e4fc74398d1$exports = {
  "dismiss": `Schlie\xDFen`
};

// node_modules/@react-aria/overlays/dist/el-GR.mjs
var $0898b4c153db2b77$exports = {};
$0898b4c153db2b77$exports = {
  "dismiss": `\u0391\u03C0\u03CC\u03C1\u03C1\u03B9\u03C8\u03B7`
};

// node_modules/@react-aria/overlays/dist/en-US.mjs
var $6d74810286a15183$exports = {};
$6d74810286a15183$exports = {
  "dismiss": `Dismiss`
};

// node_modules/@react-aria/overlays/dist/es-ES.mjs
var $309d73dc65f78055$exports = {};
$309d73dc65f78055$exports = {
  "dismiss": `Descartar`
};

// node_modules/@react-aria/overlays/dist/et-EE.mjs
var $44ad94f7205cf593$exports = {};
$44ad94f7205cf593$exports = {
  "dismiss": `L\xF5peta`
};

// node_modules/@react-aria/overlays/dist/fi-FI.mjs
var $7c28f5687f0779a9$exports = {};
$7c28f5687f0779a9$exports = {
  "dismiss": `Hylk\xE4\xE4`
};

// node_modules/@react-aria/overlays/dist/fr-FR.mjs
var $e6d75df4b68bd73a$exports = {};
$e6d75df4b68bd73a$exports = {
  "dismiss": `Rejeter`
};

// node_modules/@react-aria/overlays/dist/he-IL.mjs
var $87505c9dab186d0f$exports = {};
$87505c9dab186d0f$exports = {
  "dismiss": `\u05D4\u05EA\u05E2\u05DC\u05DD`
};

// node_modules/@react-aria/overlays/dist/hr-HR.mjs
var $553439c3ffb3e492$exports = {};
$553439c3ffb3e492$exports = {
  "dismiss": `Odbaci`
};

// node_modules/@react-aria/overlays/dist/hu-HU.mjs
var $74cf411061b983a2$exports = {};
$74cf411061b983a2$exports = {
  "dismiss": `Elutas\xEDt\xE1s`
};

// node_modules/@react-aria/overlays/dist/it-IT.mjs
var $e933f298574dc435$exports = {};
$e933f298574dc435$exports = {
  "dismiss": `Ignora`
};

// node_modules/@react-aria/overlays/dist/ja-JP.mjs
var $ac91fc9fe02f71f6$exports = {};
$ac91fc9fe02f71f6$exports = {
  "dismiss": `\u9589\u3058\u308B`
};

// node_modules/@react-aria/overlays/dist/ko-KR.mjs
var $52b96f86422025af$exports = {};
$52b96f86422025af$exports = {
  "dismiss": `\uBB34\uC2DC`
};

// node_modules/@react-aria/overlays/dist/lt-LT.mjs
var $c0d724c3e51dafa6$exports = {};
$c0d724c3e51dafa6$exports = {
  "dismiss": `Atmesti`
};

// node_modules/@react-aria/overlays/dist/lv-LV.mjs
var $c92899672a3fe72e$exports = {};
$c92899672a3fe72e$exports = {
  "dismiss": `Ner\u0101d\u012Bt`
};

// node_modules/@react-aria/overlays/dist/nb-NO.mjs
var $9f576b39d8e7a9d6$exports = {};
$9f576b39d8e7a9d6$exports = {
  "dismiss": `Lukk`
};

// node_modules/@react-aria/overlays/dist/nl-NL.mjs
var $9d025808aeec81a7$exports = {};
$9d025808aeec81a7$exports = {
  "dismiss": `Negeren`
};

// node_modules/@react-aria/overlays/dist/pl-PL.mjs
var $fce709921e2c0fa6$exports = {};
$fce709921e2c0fa6$exports = {
  "dismiss": `Zignoruj`
};

// node_modules/@react-aria/overlays/dist/pt-BR.mjs
var $2599cf0c4ab37f59$exports = {};
$2599cf0c4ab37f59$exports = {
  "dismiss": `Descartar`
};

// node_modules/@react-aria/overlays/dist/pt-PT.mjs
var $3c220ae7ef8a35fd$exports = {};
$3c220ae7ef8a35fd$exports = {
  "dismiss": `Dispensar`
};

// node_modules/@react-aria/overlays/dist/ro-RO.mjs
var $93562b5094072f54$exports = {};
$93562b5094072f54$exports = {
  "dismiss": `Revocare`
};

// node_modules/@react-aria/overlays/dist/ru-RU.mjs
var $cd9e2abd0d06c7b4$exports = {};
$cd9e2abd0d06c7b4$exports = {
  "dismiss": `\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C`
};

// node_modules/@react-aria/overlays/dist/sk-SK.mjs
var $45375701f409adf1$exports = {};
$45375701f409adf1$exports = {
  "dismiss": `Zru\u0161i\u0165`
};

// node_modules/@react-aria/overlays/dist/sl-SI.mjs
var $27fab53a576de9dd$exports = {};
$27fab53a576de9dd$exports = {
  "dismiss": `Opusti`
};

// node_modules/@react-aria/overlays/dist/sr-SP.mjs
var $4438748d9952e7c7$exports = {};
$4438748d9952e7c7$exports = {
  "dismiss": `Odbaci`
};

// node_modules/@react-aria/overlays/dist/sv-SE.mjs
var $0936d7347ef4da4c$exports = {};
$0936d7347ef4da4c$exports = {
  "dismiss": `Avvisa`
};

// node_modules/@react-aria/overlays/dist/tr-TR.mjs
var $29700c92185d38f8$exports = {};
$29700c92185d38f8$exports = {
  "dismiss": `Kapat`
};

// node_modules/@react-aria/overlays/dist/uk-UA.mjs
var $662ccaf2be4c25b3$exports = {};
$662ccaf2be4c25b3$exports = {
  "dismiss": `\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438`
};

// node_modules/@react-aria/overlays/dist/zh-CN.mjs
var $d80a27deda7cdb3c$exports = {};
$d80a27deda7cdb3c$exports = {
  "dismiss": `\u53D6\u6D88`
};

// node_modules/@react-aria/overlays/dist/zh-TW.mjs
var $2b2734393847c884$exports = {};
$2b2734393847c884$exports = {
  "dismiss": `\u95DC\u9589`
};

// node_modules/@react-aria/overlays/dist/import.mjs
var import_react5 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var $edcf132a9284368a$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
var $2a41e45df1593e64$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
var $49c51c25361d4cd2$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
var $a2f21f5f14f60553$exports = {};
$a2f21f5f14f60553$exports = {
  "ar-AE": $773d5888b972f1cf$exports,
  "bg-BG": $d11f19852b941573$exports,
  "cs-CZ": $b983974c2ee1efb3$exports,
  "da-DK": $5809cc9d4e92de73$exports,
  "de-DE": $c68c2e4fc74398d1$exports,
  "el-GR": $0898b4c153db2b77$exports,
  "en-US": $6d74810286a15183$exports,
  "es-ES": $309d73dc65f78055$exports,
  "et-EE": $44ad94f7205cf593$exports,
  "fi-FI": $7c28f5687f0779a9$exports,
  "fr-FR": $e6d75df4b68bd73a$exports,
  "he-IL": $87505c9dab186d0f$exports,
  "hr-HR": $553439c3ffb3e492$exports,
  "hu-HU": $74cf411061b983a2$exports,
  "it-IT": $e933f298574dc435$exports,
  "ja-JP": $ac91fc9fe02f71f6$exports,
  "ko-KR": $52b96f86422025af$exports,
  "lt-LT": $c0d724c3e51dafa6$exports,
  "lv-LV": $c92899672a3fe72e$exports,
  "nb-NO": $9f576b39d8e7a9d6$exports,
  "nl-NL": $9d025808aeec81a7$exports,
  "pl-PL": $fce709921e2c0fa6$exports,
  "pt-BR": $2599cf0c4ab37f59$exports,
  "pt-PT": $3c220ae7ef8a35fd$exports,
  "ro-RO": $93562b5094072f54$exports,
  "ru-RU": $cd9e2abd0d06c7b4$exports,
  "sk-SK": $45375701f409adf1$exports,
  "sl-SI": $27fab53a576de9dd$exports,
  "sr-SP": $4438748d9952e7c7$exports,
  "sv-SE": $0936d7347ef4da4c$exports,
  "tr-TR": $29700c92185d38f8$exports,
  "uk-UA": $662ccaf2be4c25b3$exports,
  "zh-CN": $d80a27deda7cdb3c$exports,
  "zh-TW": $2b2734393847c884$exports
};
var $5e3802645cc19319$var$refCountMap = /* @__PURE__ */ new WeakMap();
var $5e3802645cc19319$var$observerStack = [];
function $5e3802645cc19319$export$1c3ebcada18427bf(targets, root = document.body) {
  let visibleNodes = new Set(targets);
  let hiddenNodes = /* @__PURE__ */ new Set();
  let walk = (root2) => {
    for (let element of root2.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))
      visibleNodes.add(element);
    let acceptNode = (node) => {
      if (visibleNodes.has(node) || hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute("role") !== "row")
        return NodeFilter.FILTER_REJECT;
      for (let target of visibleNodes) {
        if (node.contains(target))
          return NodeFilter.FILTER_SKIP;
      }
      return NodeFilter.FILTER_ACCEPT;
    };
    let walker = document.createTreeWalker(root2, NodeFilter.SHOW_ELEMENT, {
      acceptNode
    });
    let acceptRoot = acceptNode(root2);
    if (acceptRoot === NodeFilter.FILTER_ACCEPT)
      hide(root2);
    if (acceptRoot !== NodeFilter.FILTER_REJECT) {
      let node = walker.nextNode();
      while (node != null) {
        hide(node);
        node = walker.nextNode();
      }
    }
  };
  let hide = (node) => {
    var _refCountMap_get;
    let refCount = (_refCountMap_get = $5e3802645cc19319$var$refCountMap.get(node)) !== null && _refCountMap_get !== void 0 ? _refCountMap_get : 0;
    if (node.getAttribute("aria-hidden") === "true" && refCount === 0)
      return;
    if (refCount === 0)
      node.setAttribute("aria-hidden", "true");
    hiddenNodes.add(node);
    $5e3802645cc19319$var$refCountMap.set(node, refCount + 1);
  };
  if ($5e3802645cc19319$var$observerStack.length)
    $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].disconnect();
  walk(root);
  let observer = new MutationObserver((changes) => {
    for (let change of changes) {
      if (change.type !== "childList" || change.addedNodes.length === 0)
        continue;
      if (![
        ...visibleNodes,
        ...hiddenNodes
      ].some((node) => node.contains(change.target))) {
        for (let node of change.removedNodes)
          if (node instanceof Element) {
            visibleNodes.delete(node);
            hiddenNodes.delete(node);
          }
        for (let node of change.addedNodes) {
          if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer === "true"))
            visibleNodes.add(node);
          else if (node instanceof Element)
            walk(node);
        }
      }
    }
  });
  observer.observe(root, {
    childList: true,
    subtree: true
  });
  let observerWrapper = {
    observe() {
      observer.observe(root, {
        childList: true,
        subtree: true
      });
    },
    disconnect() {
      observer.disconnect();
    }
  };
  $5e3802645cc19319$var$observerStack.push(observerWrapper);
  return () => {
    observer.disconnect();
    for (let node of hiddenNodes) {
      let count = $5e3802645cc19319$var$refCountMap.get(node);
      if (count === 1) {
        node.removeAttribute("aria-hidden");
        $5e3802645cc19319$var$refCountMap.delete(node);
      } else
        $5e3802645cc19319$var$refCountMap.set(node, count - 1);
    }
    if (observerWrapper === $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1]) {
      $5e3802645cc19319$var$observerStack.pop();
      if ($5e3802645cc19319$var$observerStack.length)
        $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].observe();
    } else
      $5e3802645cc19319$var$observerStack.splice($5e3802645cc19319$var$observerStack.indexOf(observerWrapper), 1);
  };
}

// node_modules/@react-aria/dnd/dist/ar-AE.mjs
var $7dfcac1a0c98c789$exports = {};
$7dfcac1a0c98c789$exports = {
  "dragDescriptionKeyboard": `\u0627\u0636\u063A\u0637 Enter \u0644\u0628\u062F\u0621 \u0627\u0644\u0633\u062D\u0628.`,
  "dragDescriptionKeyboardAlt": `\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 Alt + Enter \u0644\u0628\u062F\u0621 \u0627\u0644\u0633\u062D\u0628.`,
  "dragDescriptionLongPress": `\u0627\u0636\u063A\u0637 \u0628\u0627\u0633\u062A\u0645\u0631\u0627\u0631 \u0644\u0628\u062F\u0621 \u0627\u0644\u0633\u062D\u0628.`,
  "dragDescriptionTouch": `\u0627\u0636\u063A\u0637 \u0645\u0631\u062A\u064A\u0646 \u0644\u0628\u062F\u0621 \u0627\u0644\u0633\u062D\u0628.`,
  "dragDescriptionVirtual": `\u0627\u0646\u0642\u0631 \u0644\u0628\u062F\u0621 \u0627\u0644\u0633\u062D\u0628.`,
  "dragItem": (args) => `\u0627\u0633\u062D\u0628 ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `\u0627\u0633\u062D\u0628 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0639\u0646\u0635\u0631 \u0645\u062D\u062F\u062F`,
    other: () => `${formatter.number(args.count)} \u0639\u0646\u0627\u0635\u0631 \u0645\u062D\u062F\u062F\u0629`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 Enter \u0644\u0644\u0633\u062D\u0628 ${formatter.plural(args.count, {
    one: `\u0639\u062F\u062F \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629`,
    other: `\u0639\u062F\u062F \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `\u0627\u0636\u063A\u0637 \u0639\u0644\u0649 \u0645\u0641\u062A\u0627\u062D\u064A Alt + Enter \u0644\u0644\u0633\u062D\u0628 ${formatter.plural(args.count, {
    one: `\u0639\u062F\u062F \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629`,
    other: `\u0639\u062F\u062F \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `\u0627\u0636\u063A\u0637 \u0628\u0627\u0633\u062A\u0645\u0631\u0627\u0631 \u0644\u0644\u0633\u062D\u0628 ${formatter.plural(args.count, {
    one: `\u0639\u062F\u062F \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629`,
    other: `\u0639\u062F\u062F \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062E\u062A\u0627\u0631\u0629`
  })}.`,
  "dragStartedKeyboard": `\u0628\u062F\u0623 \u0627\u0644\u0633\u062D\u0628. \u0627\u0636\u063A\u0637 Tab \u0644\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0645\u0648\u0636\u0639 \u0627\u0644\u0625\u0641\u0644\u0627\u062A\u060C \u062B\u0645 \u0627\u0636\u063A\u0637 Enter \u0644\u0644\u0625\u0641\u0644\u0627\u062A\u060C \u0623\u0648 \u0627\u0636\u063A\u0637 Escape \u0644\u0644\u0625\u0644\u063A\u0627\u0621.`,
  "dragStartedTouch": `\u0628\u062F\u0623 \u0627\u0644\u0633\u062D\u0628. \u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0645\u0648\u0636\u0639 \u0627\u0644\u0625\u0641\u0644\u0627\u062A\u060C \u062B\u0645 \u0627\u0636\u063A\u0637 \u0645\u0631\u062A\u064A\u0646 \u0644\u0644\u0625\u0641\u0644\u0627\u062A.`,
  "dragStartedVirtual": `\u0628\u062F\u0623 \u0627\u0644\u0633\u062D\u0628. \u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0645\u0643\u0627\u0646 \u0627\u0644\u0625\u0641\u0644\u0627\u062A\u060C \u062B\u0645 \u0627\u0646\u0642\u0631 \u0623\u0648 \u0627\u0636\u063A\u0637 Enter \u0644\u0644\u0625\u0641\u0644\u0627\u062A.`,
  "dropCanceled": `\u062A\u0645 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0625\u0641\u0644\u0627\u062A.`,
  "dropComplete": `\u0627\u0643\u062A\u0645\u0644 \u0627\u0644\u0625\u0641\u0644\u0627\u062A.`,
  "dropDescriptionKeyboard": `\u0627\u0636\u063A\u0637 Enter \u0644\u0644\u0625\u0641\u0644\u0627\u062A. \u0627\u0636\u063A\u0637 Escape \u0644\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0633\u062D\u0628.`,
  "dropDescriptionTouch": `\u0627\u0636\u063A\u0637 \u0645\u0631\u062A\u064A\u0646 \u0644\u0644\u0625\u0641\u0644\u0627\u062A.`,
  "dropDescriptionVirtual": `\u0627\u0646\u0642\u0631 \u0644\u0644\u0625\u0641\u0644\u0627\u062A.`,
  "dropIndicator": `\u0645\u0624\u0634\u0631 \u0627\u0644\u0625\u0641\u0644\u0627\u062A`,
  "dropOnItem": (args) => `\u0625\u0641\u0644\u0627\u062A ${args.itemText}`,
  "dropOnRoot": `\u0627\u0644\u0625\u0641\u0644\u0627\u062A`,
  "endDragKeyboard": `\u0627\u0644\u0633\u062D\u0628. \u0627\u0636\u063A\u0637 Enter \u0644\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0633\u062D\u0628.`,
  "endDragTouch": `\u0627\u0644\u0633\u062D\u0628. \u0627\u0636\u063A\u0637 \u0645\u0631\u062A\u064A\u0646 \u0644\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0633\u062D\u0628.`,
  "endDragVirtual": `\u0627\u0644\u0633\u062D\u0628. \u0627\u0646\u0642\u0631 \u0644\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0633\u062D\u0628.`,
  "insertAfter": (args) => `\u0623\u062F\u062E\u0644 \u0628\u0639\u062F ${args.itemText}`,
  "insertBefore": (args) => `\u0623\u062F\u062E\u0644 \u0642\u0628\u0644 ${args.itemText}`,
  "insertBetween": (args) => `\u0623\u062F\u062E\u0644 \u0628\u064A\u0646 ${args.beforeItemText} \u0648 ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/bg-BG.mjs
var $f311c26671219eca$exports = {};
$f311c26671219eca$exports = {
  "dragDescriptionKeyboard": `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201EEnter\u201C, \u0437\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0435\u0442\u0435 \u0434\u0430 \u043F\u043B\u044A\u0437\u0433\u0430\u0442\u0435.`,
  "dragDescriptionKeyboardAlt": `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 Alt + Enter, \u0437\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0435\u0442\u0435 \u0434\u0430 \u043F\u043B\u044A\u0437\u0433\u0430\u0442\u0435.`,
  "dragDescriptionLongPress": `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E, \u0437\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0435\u0442\u0435 \u0434\u0430 \u043F\u043B\u044A\u0437\u0433\u0430\u0442\u0435.`,
  "dragDescriptionTouch": `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u0434\u0432\u0443\u043A\u0440\u0430\u0442\u043D\u043E, \u0437\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0435\u0442\u0435 \u0434\u0430 \u043F\u043B\u044A\u0437\u0433\u0430\u0442\u0435.`,
  "dragDescriptionVirtual": `\u0429\u0440\u0430\u043A\u043D\u0435\u0442\u0435, \u0437\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0435\u0442\u0435 \u0434\u0430 \u043F\u043B\u044A\u0437\u0433\u0430\u0442\u0435.`,
  "dragItem": (args) => `\u041F\u043B\u044A\u0437\u043D\u0438 ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `\u041F\u043B\u044A\u0437\u043D\u0438 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0438\u0437\u0431\u0440\u0430\u043D \u0435\u043B\u0435\u043C\u0435\u043D\u0442`,
    other: () => `${formatter.number(args.count)} \u0438\u0437\u0431\u0440\u0430\u043D\u0438 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 Enter, \u0437\u0430 \u0434\u0430 \u043F\u043B\u044A\u0437\u043D\u0435\u0442\u0435 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0438\u0437\u0431\u0440\u0430\u043D \u0435\u043B\u0435\u043C\u0435\u043D\u0442`,
    other: () => `${formatter.number(args.count)} \u0438\u0437\u0431\u0440\u0430\u043D\u0438 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 Alt \u0438 Enter, \u0437\u0430 \u0434\u0430 \u043F\u043B\u044A\u0437\u043D\u0435\u0442\u0435 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0438\u0437\u0431\u0440\u0430\u043D \u0435\u043B\u0435\u043C\u0435\u043D\u0442`,
    other: () => `${formatter.number(args.count)} \u0438\u0437\u0431\u0440\u0430\u043D\u0438 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E, \u0437\u0430 \u0434\u0430 \u043F\u043B\u044A\u0437\u043D\u0435\u0442\u0435 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0438\u0437\u0431\u0440\u0430\u043D \u0435\u043B\u0435\u043C\u0435\u043D\u0442`,
    other: () => `${formatter.number(args.count)} \u0438\u0437\u0431\u0440\u0430\u043D\u0438 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438`
  })}.`,
  "dragStartedKeyboard": `\u0417\u0430\u043F\u043E\u0447\u043D\u0430 \u043F\u043B\u044A\u0437\u0433\u0430\u043D\u0435. \u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201ETab\u201C, \u0437\u0430 \u0434\u0430 \u0441\u0435 \u043F\u0440\u0438\u0434\u0432\u0438\u0436\u0438\u0442\u0435 \u0434\u043E \u0446\u0435\u043B\u0442\u0430, \u0441\u043B\u0435\u0434 \u043A\u043E\u0435\u0442\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201EEnter\u201C \u0437\u0430 \u043F\u0443\u0441\u043A\u0430\u043D\u0435 \u0438\u043B\u0438 \u043D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201EEscape\u201C \u0437\u0430 \u043E\u0442\u043C\u044F\u043D\u0430.`,
  "dragStartedTouch": `\u0417\u0430\u043F\u043E\u0447\u043D\u0430 \u043F\u043B\u044A\u0437\u0433\u0430\u043D\u0435. \u041F\u0440\u0438\u0434\u0432\u0438\u0436\u0435\u0442\u0435 \u0441\u0435 \u0434\u043E \u0446\u0435\u043B\u0442\u0430, \u0441\u043B\u0435\u0434 \u043A\u043E\u0435\u0442\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u0434\u0432\u0443\u043A\u0440\u0430\u0442\u043D\u043E, \u0437\u0430 \u0434\u0430 \u043F\u0443\u0441\u043D\u0435\u0442\u0435.`,
  "dragStartedVirtual": `\u0417\u0430\u043F\u043E\u0447\u043D\u0430 \u043F\u043B\u044A\u0437\u0433\u0430\u043D\u0435. \u041F\u0440\u0438\u0434\u0432\u0438\u0436\u0435\u0442\u0435 \u0441\u0435 \u0434\u043E \u0446\u0435\u043B\u0442\u0430, \u0441\u043B\u0435\u0434 \u043A\u043E\u0435\u0442\u043E \u0449\u0440\u0430\u043A\u043D\u0435\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201EEnter\u201C \u0437\u0430 \u043F\u0443\u0441\u043A\u0430\u043D\u0435.`,
  "dropCanceled": `\u041F\u0443\u0441\u043A\u0430\u043D\u0435\u0442\u043E \u0435 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E.`,
  "dropComplete": `\u041F\u0443\u0441\u043A\u0430\u043D\u0435\u0442\u043E \u0435 \u0437\u0430\u0432\u044A\u0440\u0448\u0435\u043D\u043E.`,
  "dropDescriptionKeyboard": `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201EEnter\u201C \u0437\u0430 \u043F\u0443\u0441\u043A\u0430\u043D\u0435. \u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201EEscape\u201C \u0437\u0430 \u043E\u0442\u043C\u044F\u043D\u0430 \u043D\u0430 \u043F\u043B\u044A\u0437\u0433\u0430\u043D\u0435\u0442\u043E.`,
  "dropDescriptionTouch": `\u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u0434\u0432\u0443\u043A\u0440\u0430\u0442\u043D\u043E \u0437\u0430 \u043F\u0443\u0441\u043A\u0430\u043D\u0435.`,
  "dropDescriptionVirtual": `\u0429\u0440\u0430\u043A\u043D\u0435\u0442\u0435 \u0437\u0430 \u043F\u0443\u0441\u043A\u0430\u043D\u0435.`,
  "dropIndicator": `\u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u0437\u0430 \u043F\u0443\u0441\u043A\u0430\u043D\u0435`,
  "dropOnItem": (args) => `\u041F\u0443\u0441\u043D\u0438 \u0432\u044A\u0440\u0445\u0443 ${args.itemText}`,
  "dropOnRoot": `\u041F\u0443\u0441\u043D\u0438 \u0432\u044A\u0440\u0445\u0443`,
  "endDragKeyboard": `\u041F\u043B\u044A\u0437\u0433\u0430\u043D\u0435. \u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u201EEnter\u201C \u0437\u0430 \u043E\u0442\u043C\u044F\u043D\u0430 \u043D\u0430 \u043F\u043B\u044A\u0437\u0433\u0430\u043D\u0435\u0442\u043E.`,
  "endDragTouch": `\u041F\u043B\u044A\u0437\u0433\u0430\u043D\u0435. \u041D\u0430\u0442\u0438\u0441\u043D\u0435\u0442\u0435 \u0434\u0432\u0443\u043A\u0440\u0430\u0442\u043D\u043E \u0437\u0430 \u043E\u0442\u043C\u044F\u043D\u0430 \u043D\u0430 \u043F\u043B\u044A\u0437\u0433\u0430\u043D\u0435\u0442\u043E.`,
  "endDragVirtual": `\u041F\u043B\u044A\u0437\u0433\u0430\u043D\u0435. \u0429\u0440\u0430\u043A\u043D\u0435\u0442\u0435 \u0437\u0430 \u043E\u0442\u043C\u044F\u043D\u0430.`,
  "insertAfter": (args) => `\u0412\u043C\u044A\u043A\u043D\u0438 \u0441\u043B\u0435\u0434 ${args.itemText}`,
  "insertBefore": (args) => `\u0412\u043C\u044A\u043A\u043D\u0438 \u043F\u0440\u0435\u0434\u0438 ${args.itemText}`,
  "insertBetween": (args) => `\u0412\u043C\u044A\u043A\u043D\u0438 \u043C\u0435\u0436\u0434\u0443 ${args.beforeItemText} \u0438 ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/cs-CZ.mjs
var $1aa4ade186550f72$exports = {};
$1aa4ade186550f72$exports = {
  "dragDescriptionKeyboard": `Stisknut\xEDm kl\xE1vesy Enter za\u010Dnete s p\u0159etahov\xE1n\xEDm.`,
  "dragDescriptionKeyboardAlt": `Stisknut\xEDm Alt + Enter zah\xE1j\xEDte p\u0159etahov\xE1n\xED.`,
  "dragDescriptionLongPress": `Dlouh\xFDm stisknut\xEDm zah\xE1j\xEDte p\u0159etahov\xE1n\xED.`,
  "dragDescriptionTouch": `Poklep\xE1n\xEDm za\u010Dnete s p\u0159etahov\xE1n\xEDm.`,
  "dragDescriptionVirtual": `Kliknut\xEDm za\u010Dnete s p\u0159etahov\xE1n\xEDm.`,
  "dragItem": (args) => `P\u0159et\xE1hnout ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `P\u0159et\xE1hnout ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} vybranou polo\u017Eku`,
    few: () => `${formatter.number(args.count)} vybran\xE9 polo\u017Eky`,
    other: () => `${formatter.number(args.count)} vybran\xFDch polo\u017Eek`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Stisknut\xEDm kl\xE1vesy Enter p\u0159et\xE1hn\u011Bte ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} vybranou polo\u017Eku`,
    other: () => `${formatter.number(args.count)} vybran\xE9 polo\u017Eky`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Stisknut\xEDm Alt + Enter p\u0159et\xE1hn\u011Bte ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} vybranou polo\u017Eku`,
    other: () => `${formatter.number(args.count)} vybran\xE9 polo\u017Eky`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Dlouh\xFDm stisknut\xEDm p\u0159et\xE1hnete ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} vybranou polo\u017Eku`,
    other: () => `${formatter.number(args.count)} vybran\xE9 polo\u017Eky`
  })}.`,
  "dragStartedKeyboard": `Za\u010Dn\u011Bte s p\u0159etahov\xE1n\xEDm. Po stisknut\xED kl\xE1vesy Tab najd\u011Bte po\u017Eadovan\xFD c\xEDl a stisknut\xEDm kl\xE1vesy Enter p\u0159eta\u017Een\xED dokon\u010Dete nebo stisknut\xEDm kl\xE1vesy Esc akci zru\u0161te.`,
  "dragStartedTouch": `Za\u010Dn\u011Bte s p\u0159etahov\xE1n\xEDm. Najd\u011Bte po\u017Eadovan\xFD c\xEDl a poklep\xE1n\xEDm p\u0159eta\u017Een\xED dokon\u010Dete.`,
  "dragStartedVirtual": `Za\u010Dn\u011Bte s p\u0159etahov\xE1n\xEDm. Najd\u011Bte po\u017Eadovan\xFD c\xEDl a kliknut\xEDm nebo stisknut\xEDm kl\xE1vesy Enter p\u0159eta\u017Een\xED dokon\u010Dete.`,
  "dropCanceled": `P\u0159eta\u017Een\xED bylo zru\u0161eno.`,
  "dropComplete": `P\u0159eta\u017Een\xED bylo dokon\u010Deno.`,
  "dropDescriptionKeyboard": `Stisknut\xEDm kl\xE1vesy Enter p\u0159eta\u017Een\xED dokon\u010Dete nebo stisknut\xEDm kl\xE1vesy Esc akci zru\u0161te.`,
  "dropDescriptionTouch": `Poklep\xE1n\xEDm p\u0159eta\u017Een\xED dokon\u010Dete.`,
  "dropDescriptionVirtual": `Kliknut\xEDm objekt p\u0159et\xE1hn\u011Bte.`,
  "dropIndicator": `indik\xE1tor p\u0159eta\u017Een\xED`,
  "dropOnItem": (args) => `P\u0159et\xE1hnout na ${args.itemText}`,
  "dropOnRoot": `P\u0159et\xE1hnout na`,
  "endDragKeyboard": `Prob\xEDh\xE1 p\u0159etahov\xE1n\xED. Stisknut\xEDm kl\xE1vesy Enter p\u0159eta\u017Een\xED zru\u0161\xEDte.`,
  "endDragTouch": `Prob\xEDh\xE1 p\u0159etahov\xE1n\xED. Poklep\xE1n\xEDm p\u0159eta\u017Een\xED zru\u0161\xEDte.`,
  "endDragVirtual": `Prob\xEDh\xE1 p\u0159etahov\xE1n\xED. Kliknut\xEDm p\u0159eta\u017Een\xED zru\u0161\xEDte.`,
  "insertAfter": (args) => `Vlo\u017Eit za ${args.itemText}`,
  "insertBefore": (args) => `Vlo\u017Eit p\u0159ed ${args.itemText}`,
  "insertBetween": (args) => `Vlo\u017Eit mezi ${args.beforeItemText} a ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/da-DK.mjs
var $b6b0ea1b94a7633c$exports = {};
$b6b0ea1b94a7633c$exports = {
  "dragDescriptionKeyboard": `Tryk p\xE5 Enter for at starte med at tr\xE6kke.`,
  "dragDescriptionKeyboardAlt": `Tryk p\xE5 Alt + Enter for at starte med at tr\xE6kke.`,
  "dragDescriptionLongPress": `Tryk l\xE6nge for at starte med at tr\xE6kke.`,
  "dragDescriptionTouch": `Dobbelttryk for at starte med at tr\xE6kke.`,
  "dragDescriptionVirtual": `Klik for at starte med at tr\xE6kke.`,
  "dragItem": (args) => `Tr\xE6k ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Tr\xE6k ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valgt element`,
    other: () => `${formatter.number(args.count)} valgte elementer`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Tryk p\xE5 Enter for at tr\xE6kke ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valgte element`,
    other: () => `${formatter.number(args.count)} valgte elementer`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Tryk p\xE5 Alt + Enter for at tr\xE6kke ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valgte element`,
    other: () => `${formatter.number(args.count)} valgte elementer`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Tryk l\xE6nge for at tr\xE6kke ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valgte element`,
    other: () => `${formatter.number(args.count)} valgte elementer`
  })}.`,
  "dragStartedKeyboard": `Startet med at tr\xE6kke. Tryk p\xE5 Tab for at g\xE5 til et slip-m\xE5l, tryk derefter p\xE5 Enter for at slippe, eller tryk p\xE5 Escape for at annullere.`,
  "dragStartedTouch": `Startet med at tr\xE6kke. G\xE5 til et slip-m\xE5l, og dobbelttryk derefter for at slippe.`,
  "dragStartedVirtual": `Startet med at tr\xE6kke. G\xE5 til et slip-m\xE5l, og klik eller tryk derefter p\xE5 enter for at slippe.`,
  "dropCanceled": `Slip annulleret.`,
  "dropComplete": `Slip fuldf\xF8rt.`,
  "dropDescriptionKeyboard": `Tryk p\xE5 Enter for at slippe. Tryk p\xE5 Escape for at annullere tr\xE6kning.`,
  "dropDescriptionTouch": `Dobbelttryk for at slippe.`,
  "dropDescriptionVirtual": `Klik for at slippe.`,
  "dropIndicator": `slip-indikator`,
  "dropOnItem": (args) => `Slip p\xE5 ${args.itemText}`,
  "dropOnRoot": `Slip p\xE5`,
  "endDragKeyboard": `Tr\xE6kning. Tryk p\xE5 enter for at annullere tr\xE6k.`,
  "endDragTouch": `Tr\xE6kning. Dobbelttryk for at annullere tr\xE6k.`,
  "endDragVirtual": `Tr\xE6kning. Klik for at annullere tr\xE6kning.`,
  "insertAfter": (args) => `Inds\xE6t efter ${args.itemText}`,
  "insertBefore": (args) => `Inds\xE6t f\xF8r ${args.itemText}`,
  "insertBetween": (args) => `Inds\xE6t mellem ${args.beforeItemText} og ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/de-DE.mjs
var $d10e4f47c744ad52$exports = {};
$d10e4f47c744ad52$exports = {
  "dragDescriptionKeyboard": `Dr\xFCcken Sie die Eingabetaste, um den Ziehvorgang zu starten.`,
  "dragDescriptionKeyboardAlt": `Alt + Eingabe dr\xFCcken, um den Ziehvorgang zu starten.`,
  "dragDescriptionLongPress": `Lang dr\xFCcken, um mit dem Ziehen zu beginnen.`,
  "dragDescriptionTouch": `Tippen Sie doppelt, um den Ziehvorgang zu starten.`,
  "dragDescriptionVirtual": `Zum Starten des Ziehvorgangs klicken.`,
  "dragItem": (args) => `${args.itemText} ziehen`,
  "dragSelectedItems": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} ausgew\xE4hltes Objekt`,
    other: () => `${formatter.number(args.count)} ausgew\xE4hlte Objekte`
  })} ziehen`,
  "dragSelectedKeyboard": (args, formatter) => `Eingabetaste dr\xFCcken, um ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} ausgew\xE4hltes Element`,
    other: () => `${formatter.number(args.count)} ausgew\xE4hlte Elemente`
  })} zu ziehen.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Alt + Eingabetaste dr\xFCcken, um ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} ausgew\xE4hltes Element`,
    other: () => `${formatter.number(args.count)} ausgew\xE4hlte Elemente`
  })} zu ziehen.`,
  "dragSelectedLongPress": (args, formatter) => `Lang dr\xFCcken, um ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} ausgew\xE4hltes Element`,
    other: () => `${formatter.number(args.count)} ausgew\xE4hlte Elemente`
  })} zu ziehen.`,
  "dragStartedKeyboard": `Ziehvorgang gestartet. Dr\xFCcken Sie die Tabulatortaste, um zu einem Ablegeziel zu navigieren und dr\xFCcken Sie dann die Eingabetaste, um das Objekt abzulegen, oder Escape, um den Vorgang abzubrechen.`,
  "dragStartedTouch": `Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und tippen Sie doppelt, um das Objekt abzulegen.`,
  "dragStartedVirtual": `Ziehvorgang gestartet. Navigieren Sie zu einem Ablegeziel und klicken Sie oder dr\xFCcken Sie die Eingabetaste, um das Objekt abzulegen.`,
  "dropCanceled": `Ablegen abgebrochen.`,
  "dropComplete": `Ablegen abgeschlossen.`,
  "dropDescriptionKeyboard": `Dr\xFCcken Sie die Eingabetaste, um das Objekt abzulegen. Dr\xFCcken Sie Escape, um den Vorgang abzubrechen.`,
  "dropDescriptionTouch": `Tippen Sie doppelt, um das Objekt abzulegen.`,
  "dropDescriptionVirtual": `Zum Ablegen klicken.`,
  "dropIndicator": `Ablegeanzeiger`,
  "dropOnItem": (args) => `Auf ${args.itemText} ablegen`,
  "dropOnRoot": `Ablegen auf`,
  "endDragKeyboard": `Ziehvorgang l\xE4uft. Dr\xFCcken Sie die Eingabetaste, um den Vorgang abzubrechen.`,
  "endDragTouch": `Ziehvorgang l\xE4uft. Tippen Sie doppelt, um den Vorgang abzubrechen.`,
  "endDragVirtual": `Ziehvorgang l\xE4uft. Klicken Sie, um den Vorgang abzubrechen.`,
  "insertAfter": (args) => `Nach ${args.itemText} einf\xFCgen`,
  "insertBefore": (args) => `Vor ${args.itemText} einf\xFCgen`,
  "insertBetween": (args) => `Zwischen ${args.beforeItemText} und ${args.afterItemText} einf\xFCgen`
};

// node_modules/@react-aria/dnd/dist/el-GR.mjs
var $b3d2bb9abce688ab$exports = {};
$b3d2bb9abce688ab$exports = {
  "dragDescriptionKeyboard": `\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Enter \u03B3\u03B9\u03B1 \u03AD\u03BD\u03B1\u03C1\u03BE\u03B7 \u03C4\u03B7\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2.`,
  "dragDescriptionKeyboardAlt": `\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Alt + Enter \u03B3\u03B9\u03B1 \u03AD\u03BD\u03B1\u03C1\u03BE\u03B7 \u03C4\u03B7\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2.`,
  "dragDescriptionLongPress": `\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C0\u03B1\u03C1\u03B1\u03C4\u03B5\u03C4\u03B1\u03BC\u03AD\u03BD\u03B1 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC.`,
  "dragDescriptionTouch": `\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03B4\u03CD\u03BF \u03C6\u03BF\u03C1\u03AD\u03C2 \u03B3\u03B9\u03B1 \u03AD\u03BD\u03B1\u03C1\u03BE\u03B7 \u03C4\u03B7\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2.`,
  "dragDescriptionVirtual": `\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AE\u03C3\u03B5\u03C4\u03B5 \u03C4\u03B7 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC.`,
  "dragItem": (args) => `\u039C\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `\u039C\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u03C3\u03B5 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03BF`,
    other: () => `${formatter.number(args.count)} \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Enter \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03CD\u03C1\u03B5\u03C4\u03B5 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03BF`,
    other: () => `${formatter.number(args.count)} \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Alt + Enter \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03CD\u03C1\u03B5\u03C4\u03B5 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03BF`,
    other: () => `${formatter.number(args.count)} \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C0\u03B1\u03C1\u03B1\u03C4\u03B5\u03C4\u03B1\u03BC\u03AD\u03BD\u03B1 \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03C3\u03CD\u03C1\u03B5\u03C4\u03B5 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03BF \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03BF`,
    other: () => `${formatter.number(args.count)} \u03B5\u03C0\u03B9\u03BB\u03B5\u03B3\u03BC\u03AD\u03BD\u03B1 \u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1`
  })}.`,
  "dragStartedKeyboard": `\u0397 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u03BE\u03B5\u03BA\u03AF\u03BD\u03B7\u03C3\u03B5. \u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03C4\u03BF \u03C0\u03BB\u03AE\u03BA\u03C4\u03C1\u03BF Tab \u03B3\u03B9\u03B1 \u03BD\u03B1 \u03BC\u03B5\u03C4\u03B1\u03B2\u03B5\u03AF\u03C4\u03B5 \u03C3\u03B5 \u03AD\u03BD\u03B1\u03BD \u03C0\u03C1\u03BF\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7\u03C2 \u03BA\u03B1\u03B9, \u03C3\u03C4\u03B7 \u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1, \u03C0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Enter \u03B3\u03B9\u03B1 \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7 \u03AE \u03C0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Escape \u03B3\u03B9\u03B1 \u03B1\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7.`,
  "dragStartedTouch": `\u0397 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u03BE\u03B5\u03BA\u03AF\u03BD\u03B7\u03C3\u03B5. \u039C\u03B5\u03C4\u03B1\u03B2\u03B5\u03AF\u03C4\u03B5 \u03C3\u03B5 \u03AD\u03BD\u03B1\u03BD \u03C0\u03C1\u03BF\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7\u03C2 \u03BA\u03B1\u03B9, \u03C3\u03C4\u03B7 \u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1, \u03C0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03B4\u03CD\u03BF \u03C6\u03BF\u03C1\u03AD\u03C2 \u03B3\u03B9\u03B1 \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7.`,
  "dragStartedVirtual": `\u0397 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u03BE\u03B5\u03BA\u03AF\u03BD\u03B7\u03C3\u03B5. \u039C\u03B5\u03C4\u03B1\u03B2\u03B5\u03AF\u03C4\u03B5 \u03C3\u03B5 \u03AD\u03BD\u03B1\u03BD \u03C0\u03C1\u03BF\u03BF\u03C1\u03B9\u03C3\u03BC\u03CC \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7\u03C2 \u03BA\u03B1\u03B9, \u03C3\u03C4\u03B7 \u03C3\u03C5\u03BD\u03AD\u03C7\u03B5\u03B9\u03B1, \u03BA\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03AE \u03C0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Enter \u03B3\u03B9\u03B1 \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7.`,
  "dropCanceled": `\u0397 \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7 \u03B1\u03BA\u03C5\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5.`,
  "dropComplete": `\u0397 \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7 \u03BF\u03BB\u03BF\u03BA\u03BB\u03B7\u03C1\u03CE\u03B8\u03B7\u03BA\u03B5.`,
  "dropDescriptionKeyboard": `\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Enter \u03B3\u03B9\u03B1 \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7. \u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Escape \u03B3\u03B9\u03B1 \u03B1\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2.`,
  "dropDescriptionTouch": `\u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03B4\u03CD\u03BF \u03C6\u03BF\u03C1\u03AD\u03C2 \u03B3\u03B9\u03B1 \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7.`,
  "dropDescriptionVirtual": `\u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7.`,
  "dropIndicator": `\u03B4\u03B5\u03AF\u03BA\u03C4\u03B7\u03C2 \u03B1\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7\u03C2`,
  "dropOnItem": (args) => `\u0391\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7 \u03C3\u03B5 ${args.itemText}`,
  "dropOnRoot": `\u0391\u03C0\u03CC\u03B8\u03B5\u03C3\u03B7 \u03C3\u03B5`,
  "endDragKeyboard": `\u039C\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7. \u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 Enter \u03B3\u03B9\u03B1 \u03B1\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2.`,
  "endDragTouch": `\u039C\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7. \u03A0\u03B1\u03C4\u03AE\u03C3\u03C4\u03B5 \u03B4\u03CD\u03BF \u03C6\u03BF\u03C1\u03AD\u03C2 \u03B3\u03B9\u03B1 \u03B1\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2.`,
  "endDragVirtual": `\u039C\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC \u03C3\u03B5 \u03B5\u03BE\u03AD\u03BB\u03B9\u03BE\u03B7. \u039A\u03AC\u03BD\u03C4\u03B5 \u03BA\u03BB\u03B9\u03BA \u03B3\u03B9\u03B1 \u03B1\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7 \u03C4\u03B7\u03C2 \u03BC\u03B5\u03C4\u03B1\u03C6\u03BF\u03C1\u03AC\u03C2.`,
  "insertAfter": (args) => `\u0395\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE \u03BC\u03B5\u03C4\u03AC \u03B1\u03C0\u03CC ${args.itemText}`,
  "insertBefore": (args) => `\u0395\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE \u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC ${args.itemText}`,
  "insertBetween": (args) => `\u0395\u03B9\u03C3\u03B1\u03B3\u03C9\u03B3\u03AE \u03BC\u03B5\u03C4\u03B1\u03BE\u03CD ${args.beforeItemText} \u03BA\u03B1\u03B9 ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/en-US.mjs
var $f9b46437e610cca1$exports = {};
$f9b46437e610cca1$exports = {
  "dragItem": (args) => `Drag ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Drag ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} selected item`,
    other: () => `${formatter.number(args.count)} selected items`
  })}`,
  "dragDescriptionKeyboard": `Press Enter to start dragging.`,
  "dragDescriptionKeyboardAlt": `Press Alt + Enter to start dragging.`,
  "dragDescriptionTouch": `Double tap to start dragging.`,
  "dragDescriptionVirtual": `Click to start dragging.`,
  "dragDescriptionLongPress": `Long press to start dragging.`,
  "dragSelectedKeyboard": (args, formatter) => `Press Enter to drag ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} selected item`,
    other: () => `${formatter.number(args.count)} selected items`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Press Alt + Enter to drag ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} selected item`,
    other: () => `${formatter.number(args.count)} selected items`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Long press to drag ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} selected item`,
    other: () => `${formatter.number(args.count)} selected items`
  })}.`,
  "dragStartedKeyboard": `Started dragging. Press Tab to navigate to a drop target, then press Enter to drop, or press Escape to cancel.`,
  "dragStartedTouch": `Started dragging. Navigate to a drop target, then double tap to drop.`,
  "dragStartedVirtual": `Started dragging. Navigate to a drop target, then click or press Enter to drop.`,
  "endDragKeyboard": `Dragging. Press Enter to cancel drag.`,
  "endDragTouch": `Dragging. Double tap to cancel drag.`,
  "endDragVirtual": `Dragging. Click to cancel drag.`,
  "dropDescriptionKeyboard": `Press Enter to drop. Press Escape to cancel drag.`,
  "dropDescriptionTouch": `Double tap to drop.`,
  "dropDescriptionVirtual": `Click to drop.`,
  "dropCanceled": `Drop canceled.`,
  "dropComplete": `Drop complete.`,
  "dropIndicator": `drop indicator`,
  "dropOnRoot": `Drop on`,
  "dropOnItem": (args) => `Drop on ${args.itemText}`,
  "insertBefore": (args) => `Insert before ${args.itemText}`,
  "insertBetween": (args) => `Insert between ${args.beforeItemText} and ${args.afterItemText}`,
  "insertAfter": (args) => `Insert after ${args.itemText}`
};

// node_modules/@react-aria/dnd/dist/es-ES.mjs
var $204b5c01bd3acf26$exports = {};
$204b5c01bd3acf26$exports = {
  "dragDescriptionKeyboard": `Pulse Intro para empezar a arrastrar.`,
  "dragDescriptionKeyboardAlt": `Pulse Intro para empezar a arrastrar.`,
  "dragDescriptionLongPress": `Mantenga pulsado para comenzar a arrastrar.`,
  "dragDescriptionTouch": `Pulse dos veces para iniciar el arrastre.`,
  "dragDescriptionVirtual": `Haga clic para iniciar el arrastre.`,
  "dragItem": (args) => `Arrastrar ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Arrastrar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} elemento seleccionado`,
    other: () => `${formatter.number(args.count)} elementos seleccionados`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Pulse Intro para arrastrar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} elemento seleccionado`,
    other: () => `${formatter.number(args.count)} elementos seleccionados`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Pulse Alt + Intro para arrastrar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} elemento seleccionado`,
    other: () => `${formatter.number(args.count)} elementos seleccionados`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Mantenga pulsado para arrastrar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} elemento seleccionado`,
    other: () => `${formatter.number(args.count)} elementos seleccionados`
  })}.`,
  "dragStartedKeyboard": `Se ha empezado a arrastrar. Pulse el tabulador para ir al p\xFAblico destinatario donde se vaya a colocar y, a continuaci\xF3n, pulse Intro para soltar, o pulse Escape para cancelar.`,
  "dragStartedTouch": `Se ha empezado a arrastrar. Vaya al p\xFAblico destinatario donde se vaya a colocar y, a continuaci\xF3n, pulse dos veces para soltar.`,
  "dragStartedVirtual": `Se ha empezado a arrastrar. Vaya al p\xFAblico destinatario donde se vaya a colocar y, a continuaci\xF3n, haga clic o pulse Intro para soltar.`,
  "dropCanceled": `Se ha cancelado la colocaci\xF3n.`,
  "dropComplete": `Colocaci\xF3n finalizada.`,
  "dropDescriptionKeyboard": `Pulse Intro para soltar. Pulse Escape para cancelar el arrastre.`,
  "dropDescriptionTouch": `Pulse dos veces para soltar.`,
  "dropDescriptionVirtual": `Haga clic para soltar.`,
  "dropIndicator": `indicador de colocaci\xF3n`,
  "dropOnItem": (args) => `Soltar en ${args.itemText}`,
  "dropOnRoot": `Soltar en`,
  "endDragKeyboard": `Arrastrando. Pulse Intro para cancelar el arrastre.`,
  "endDragTouch": `Arrastrando. Pulse dos veces para cancelar el arrastre.`,
  "endDragVirtual": `Arrastrando. Haga clic para cancelar el arrastre.`,
  "insertAfter": (args) => `Insertar despu\xE9s de ${args.itemText}`,
  "insertBefore": (args) => `Insertar antes de ${args.itemText}`,
  "insertBetween": (args) => `Insertar entre ${args.beforeItemText} y ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/et-EE.mjs
var $110bdd83348ecbc0$exports = {};
$110bdd83348ecbc0$exports = {
  "dragDescriptionKeyboard": `Lohistamise alustamiseks vajutage klahvi Enter.`,
  "dragDescriptionKeyboardAlt": `Lohistamise alustamiseks vajutage klahvikombinatsiooni Alt + Enter.`,
  "dragDescriptionLongPress": `Vajutage pikalt lohistamise alustamiseks.`,
  "dragDescriptionTouch": `Topeltpuudutage lohistamise alustamiseks.`,
  "dragDescriptionVirtual": `Kl\xF5psake lohistamise alustamiseks.`,
  "dragItem": (args) => `Lohista ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Lohista ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valitud \xFCksust`,
    other: () => `${formatter.number(args.count)} valitud \xFCksust`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valitud \xFCksuse`,
    other: () => `${formatter.number(args.count)} valitud \xFCksuse`
  })} lohistamiseks vajutage sisestusklahvi Enter.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Lohistamiseks vajutage klahvikombinatsiooni Alt + Enter ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valitud \xFCksuse`,
    other: () => `${formatter.number(args.count)} valitud \xFCksuse`
  })} jaoks.`,
  "dragSelectedLongPress": (args, formatter) => `Pikk vajutus ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valitud \xFCksuse`,
    other: () => `${formatter.number(args.count)} valitud \xFCksuse`
  })} lohistamiseks.`,
  "dragStartedKeyboard": `Alustati lohistamist. Kukutamise sihtm\xE4rgi juurde navigeerimiseks vajutage klahvi Tab, seej\xE4rel vajutage kukutamiseks klahvi Enter v\xF5i loobumiseks klahvi Escape.`,
  "dragStartedTouch": `Alustati lohistamist. Navigeerige kukutamise sihtm\xE4rgi juurde ja topeltpuudutage kukutamiseks.`,
  "dragStartedVirtual": `Alustati lohistamist. Navigeerige kukutamise sihtm\xE4rgi juurde ja kukutamiseks kl\xF5psake v\xF5i vajutage klahvi Enter.`,
  "dropCanceled": `Lohistamisest loobuti.`,
  "dropComplete": `Lohistamine on tehtud.`,
  "dropDescriptionKeyboard": `Kukutamiseks vajutage klahvi Enter. Lohistamisest loobumiseks vajutage klahvi Escape.`,
  "dropDescriptionTouch": `Kukutamiseks topeltpuudutage.`,
  "dropDescriptionVirtual": `Kukutamiseks kl\xF5psake.`,
  "dropIndicator": `lohistamise indikaator`,
  "dropOnItem": (args) => `Kukuta asukohta ${args.itemText}`,
  "dropOnRoot": `Kukuta asukohta`,
  "endDragKeyboard": `Lohistamine. Lohistamisest loobumiseks vajutage klahvi Enter.`,
  "endDragTouch": `Lohistamine. Lohistamisest loobumiseks topeltpuudutage.`,
  "endDragVirtual": `Lohistamine. Lohistamisest loobumiseks kl\xF5psake.`,
  "insertAfter": (args) => `Sisesta ${args.itemText} j\xE4rele`,
  "insertBefore": (args) => `Sisesta ${args.itemText} ette`,
  "insertBetween": (args) => `Sisesta ${args.beforeItemText} ja ${args.afterItemText} vahele`
};

// node_modules/@react-aria/dnd/dist/fi-FI.mjs
var $87d3ccd5e347c7cc$exports = {};
$87d3ccd5e347c7cc$exports = {
  "dragDescriptionKeyboard": `Aloita vet\xE4minen painamalla Enter-n\xE4pp\xE4int\xE4.`,
  "dragDescriptionKeyboardAlt": `Aloita vet\xE4minen painamalla Alt + Enter -n\xE4pp\xE4inyhdistelm\xE4\xE4.`,
  "dragDescriptionLongPress": `Aloita vet\xE4minen pit\xE4m\xE4ll\xE4 painettuna.`,
  "dragDescriptionTouch": `Aloita vet\xE4minen kaksoisnapauttamalla.`,
  "dragDescriptionVirtual": `Aloita vet\xE4minen napsauttamalla.`,
  "dragItem": (args) => `Ved\xE4 kohdetta ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Ved\xE4 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valittua kohdetta`,
    other: () => `${formatter.number(args.count)} valittua kohdetta`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Ved\xE4 painamalla Enter ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valittu kohde`,
    other: () => `${formatter.number(args.count)} valittua kohdetta`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Ved\xE4 painamalla Alt + Enter ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valittu kohde`,
    other: () => `${formatter.number(args.count)} valittua kohdetta`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Ved\xE4 pit\xE4m\xE4ll\xE4 painettuna ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valittu kohde`,
    other: () => `${formatter.number(args.count)} valittua kohdetta`
  })}.`,
  "dragStartedKeyboard": `Vet\xE4minen aloitettu. Siirry pudotuskohteeseen painamalla sarkainn\xE4pp\xE4int\xE4 ja sitten pudota painamalla Enter-n\xE4pp\xE4int\xE4 tai peruuta painamalla Escape-n\xE4pp\xE4int\xE4.`,
  "dragStartedTouch": `Vet\xE4minen aloitettu. Siirry pudotuskohteeseen ja pudota kaksoisnapauttamalla.`,
  "dragStartedVirtual": `Vet\xE4minen aloitettu. Siirry pudotuskohteeseen ja pudota napsauttamalla tai painamalla Enter-n\xE4pp\xE4int\xE4.`,
  "dropCanceled": `Pudotus peruutettu.`,
  "dropComplete": `Pudotus suoritettu.`,
  "dropDescriptionKeyboard": `Pudota painamalla Enter-n\xE4pp\xE4int\xE4. Peruuta vet\xE4minen painamalla Escape-n\xE4pp\xE4int\xE4.`,
  "dropDescriptionTouch": `Pudota kaksoisnapauttamalla.`,
  "dropDescriptionVirtual": `Pudota napsauttamalla.`,
  "dropIndicator": `pudotuksen ilmaisin`,
  "dropOnItem": (args) => `Pudota kohteeseen ${args.itemText}`,
  "dropOnRoot": `Pudota kohteeseen`,
  "endDragKeyboard": `Vedet\xE4\xE4n. Peruuta vet\xE4minen painamalla Enter-n\xE4pp\xE4int\xE4.`,
  "endDragTouch": `Vedet\xE4\xE4n. Peruuta vet\xE4minen kaksoisnapauttamalla.`,
  "endDragVirtual": `Vedet\xE4\xE4n. Peruuta vet\xE4minen napsauttamalla.`,
  "insertAfter": (args) => `Lis\xE4\xE4 kohteen ${args.itemText} j\xE4lkeen`,
  "insertBefore": (args) => `Lis\xE4\xE4 ennen kohdetta ${args.itemText}`,
  "insertBetween": (args) => `Lis\xE4\xE4 kohteiden ${args.beforeItemText} ja ${args.afterItemText} v\xE4liin`
};

// node_modules/@react-aria/dnd/dist/fr-FR.mjs
var $a5de891427686596$exports = {};
$a5de891427686596$exports = {
  "dragDescriptionKeyboard": `Appuyez sur Entr\xE9e pour commencer le d\xE9placement.`,
  "dragDescriptionKeyboardAlt": `Appuyez sur Alt\xA0+\xA0Entr\xE9e pour commencer \xE0 faire glisser.`,
  "dragDescriptionLongPress": `Appuyez de mani\xE8re prolong\xE9e pour commencer \xE0 faire glisser.`,
  "dragDescriptionTouch": `Touchez deux fois pour commencer le d\xE9placement.`,
  "dragDescriptionVirtual": `Cliquez pour commencer le d\xE9placement.`,
  "dragItem": (args) => `D\xE9placer ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `D\xE9placer ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \xE9l\xE9ment s\xE9lectionn\xE9`,
    other: () => `${formatter.number(args.count)} \xE9l\xE9ments s\xE9lectionn\xE9s`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Appuyez sur Entr\xE9e pour faire glisser ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \xE9l\xE9ment s\xE9lectionn\xE9`,
    other: () => `${formatter.number(args.count)} \xE9l\xE9ments s\xE9lectionn\xE9s`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Appuyez sur Alt\xA0+\xA0Entr\xE9e pour faire glisser ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \xE9l\xE9ment s\xE9lectionn\xE9`,
    other: () => `${formatter.number(args.count)} \xE9l\xE9ments s\xE9lectionn\xE9s`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Appuyez de mani\xE8re prolong\xE9e pour faire glisser ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \xE9l\xE9ment s\xE9lectionn\xE9`,
    other: () => `${formatter.number(args.count)} \xE9l\xE9ments s\xE9lectionn\xE9s`
  })}.`,
  "dragStartedKeyboard": `D\xE9placement commenc\xE9. Appuyez sur Tabulation pour acc\xE9der \xE0 une cible de d\xE9p\xF4t, puis appuyez sur Entr\xE9e pour d\xE9poser, ou appuyez sur \xC9chap pour annuler.`,
  "dragStartedTouch": `D\xE9placement commenc\xE9. Acc\xE9dez \xE0 une cible de d\xE9p\xF4t, puis touchez deux fois pour d\xE9poser.`,
  "dragStartedVirtual": `D\xE9placement commenc\xE9. Acc\xE9dez \xE0 une cible de d\xE9p\xF4t, puis cliquez ou appuyez sur Entr\xE9e pour d\xE9poser.`,
  "dropCanceled": `D\xE9p\xF4t annul\xE9.`,
  "dropComplete": `D\xE9p\xF4t termin\xE9.`,
  "dropDescriptionKeyboard": `Appuyez sur Entr\xE9e pour d\xE9poser. Appuyez sur \xC9chap pour annuler le d\xE9placement.`,
  "dropDescriptionTouch": `Touchez deux fois pour d\xE9poser.`,
  "dropDescriptionVirtual": `Cliquez pour d\xE9poser.`,
  "dropIndicator": `indicateur de d\xE9p\xF4t`,
  "dropOnItem": (args) => `D\xE9poser sur ${args.itemText}`,
  "dropOnRoot": `D\xE9poser sur`,
  "endDragKeyboard": `D\xE9placement. Appuyez sur Entr\xE9e pour annuler le d\xE9placement.`,
  "endDragTouch": `D\xE9placement. Touchez deux fois pour annuler le d\xE9placement.`,
  "endDragVirtual": `D\xE9placement. Cliquez pour annuler le d\xE9placement.`,
  "insertAfter": (args) => `Ins\xE9rer apr\xE8s ${args.itemText}`,
  "insertBefore": (args) => `Ins\xE9rer avant ${args.itemText}`,
  "insertBetween": (args) => `Ins\xE9rer entre ${args.beforeItemText} et ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/he-IL.mjs
var $ad7f4c66d85b4494$exports = {};
$ad7f4c66d85b4494$exports = {
  "dragDescriptionKeyboard": `\u05D4\u05E7\u05E9 \u05E2\u05DC Enter \u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05D2\u05E8\u05D5\u05E8.`,
  "dragDescriptionKeyboardAlt": `\u05D4\u05E7\u05E9 Alt + Enter \u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05D2\u05E8\u05D5\u05E8.`,
  "dragDescriptionLongPress": `\u05DC\u05D7\u05E5 \u05DC\u05D7\u05D9\u05E6\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D4 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05D2\u05E8\u05D5\u05E8.`,
  "dragDescriptionTouch": `\u05D4\u05E7\u05E9 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1\u05D2\u05E8\u05D9\u05E8\u05D4.`,
  "dragDescriptionVirtual": `\u05DC\u05D7\u05E5 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DC\u05D2\u05E8\u05D5\u05E8.`,
  "dragItem": (args) => `\u05D2\u05E8\u05D5\u05E8 \u05D0\u05EA ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `\u05D2\u05E8\u05D5\u05E8 ${formatter.plural(args.count, {
    one: () => `\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D1\u05D7\u05E8 ${formatter.number(args.count)}`,
    other: () => `${formatter.number(args.count)} \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `\u05D4\u05E7\u05E9 \u05E2\u05DC Enter \u05DB\u05D3\u05D9 \u05DC\u05D2\u05E8\u05D5\u05E8 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u05E4\u05E8\u05D9\u05D8 \u05E9\u05E0\u05D1\u05D7\u05E8`,
    other: () => `${formatter.number(args.count)} \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `\u05D4\u05E7\u05E9 Alt + Enter \u05DB\u05D3\u05D9 \u05DC\u05D2\u05E8\u05D5\u05E8 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u05E4\u05E8\u05D9\u05D8 \u05E9\u05E0\u05D1\u05D7\u05E8`,
    other: () => `${formatter.number(args.count)} \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `\u05DC\u05D7\u05E5 \u05DC\u05D7\u05D9\u05E6\u05D4 \u05D0\u05E8\u05D5\u05DB\u05D4 \u05DB\u05D3\u05D9 \u05DC\u05D2\u05E8\u05D5\u05E8 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u05E4\u05E8\u05D9\u05D8 \u05E9\u05E0\u05D1\u05D7\u05E8`,
    other: () => `${formatter.number(args.count)} \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5`
  })}.`,
  "dragStartedKeyboard": `\u05D4\u05EA\u05D7\u05DC\u05EA \u05DC\u05D2\u05E8\u05D5\u05E8. \u05D4\u05E7\u05E9 \u05E2\u05DC Tab \u05DB\u05D3\u05D9 \u05DC\u05E0\u05D5\u05D5\u05D8 \u05DC\u05E0\u05E7\u05D5\u05D3\u05EA \u05D4\u05D2\u05E8\u05D9\u05E8\u05D4 \u05D5\u05DC\u05D0\u05D7\u05E8 \u05DE\u05DB\u05DF \u05D4\u05E7\u05E9 \u05E2\u05DC Enter \u05DB\u05D3\u05D9 \u05DC\u05E9\u05D7\u05E8\u05E8 \u05D0\u05D5 \u05E2\u05DC Escape \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D8\u05DC.`,
  "dragStartedTouch": `\u05D4\u05EA\u05D7\u05DC\u05EA \u05DC\u05D2\u05E8\u05D5\u05E8. \u05E0\u05D5\u05D5\u05D8 \u05DC\u05E0\u05E7\u05D5\u05D3\u05EA \u05D4\u05E9\u05D7\u05E8\u05D5\u05E8 \u05D5\u05DC\u05D0\u05D7\u05E8 \u05DE\u05DB\u05DF \u05D4\u05E7\u05E9 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05E9\u05D7\u05E8\u05E8.`,
  "dragStartedVirtual": `\u05D4\u05EA\u05D7\u05DC\u05EA \u05DC\u05D2\u05E8\u05D5\u05E8. \u05E0\u05D5\u05D5\u05D8 \u05DC\u05E0\u05E7\u05D5\u05D3\u05EA \u05D4\u05E9\u05D7\u05E8\u05D5\u05E8 \u05D5\u05DC\u05D0\u05D7\u05E8 \u05DE\u05DB\u05DF \u05DC\u05D7\u05E5 \u05D0\u05D5 \u05D4\u05E7\u05E9 \u05E2\u05DC Enter \u05DB\u05D3\u05D9 \u05DC\u05E9\u05D7\u05E8\u05E8.`,
  "dropCanceled": `\u05D4\u05E9\u05D7\u05E8\u05D5\u05E8 \u05D1\u05D5\u05D8\u05DC.`,
  "dropComplete": `\u05D4\u05E9\u05D7\u05E8\u05D5\u05E8 \u05D4\u05D5\u05E9\u05DC\u05DD.`,
  "dropDescriptionKeyboard": `\u05D4\u05E7\u05E9 \u05E2\u05DC Enter \u05DB\u05D3\u05D9 \u05DC\u05E9\u05D7\u05E8\u05E8. \u05D4\u05E7\u05E9 \u05E2\u05DC Escape \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D8\u05DC \u05D0\u05EA \u05D4\u05D2\u05E8\u05D9\u05E8\u05D4.`,
  "dropDescriptionTouch": `\u05D4\u05E7\u05E9 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05E9\u05D7\u05E8\u05E8.`,
  "dropDescriptionVirtual": `\u05DC\u05D7\u05E5 \u05DB\u05D3\u05D9 \u05DC\u05E9\u05D7\u05E8\u05E8.`,
  "dropIndicator": `\u05DE\u05D7\u05D5\u05D5\u05DF \u05E9\u05D7\u05E8\u05D5\u05E8`,
  "dropOnItem": (args) => `\u05E9\u05D7\u05E8\u05E8 \u05E2\u05DC ${args.itemText}`,
  "dropOnRoot": `\u05E9\u05D7\u05E8\u05E8 \u05E2\u05DC`,
  "endDragKeyboard": `\u05D2\u05D5\u05E8\u05E8. \u05D4\u05E7\u05E9 \u05E2\u05DC Enter \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D8\u05DC \u05D0\u05EA \u05D4\u05D2\u05E8\u05D9\u05E8\u05D4.`,
  "endDragTouch": `\u05D2\u05D5\u05E8\u05E8. \u05D4\u05E7\u05E9 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D8\u05DC \u05D0\u05EA \u05D4\u05D2\u05E8\u05D9\u05E8\u05D4.`,
  "endDragVirtual": `\u05D2\u05D5\u05E8\u05E8. \u05DC\u05D7\u05E5 \u05DB\u05D3\u05D9 \u05DC\u05D1\u05D8\u05DC \u05D0\u05EA \u05D4\u05D2\u05E8\u05D9\u05E8\u05D4.`,
  "insertAfter": (args) => `\u05D4\u05D5\u05E1\u05E3 \u05D0\u05D7\u05E8\u05D9 ${args.itemText}`,
  "insertBefore": (args) => `\u05D4\u05D5\u05E1\u05E3 \u05DC\u05E4\u05E0\u05D9 ${args.itemText}`,
  "insertBetween": (args) => `\u05D4\u05D5\u05E1\u05E3 \u05D1\u05D9\u05DF ${args.beforeItemText} \u05DC\u05D1\u05D9\u05DF ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/hr-HR.mjs
var $4aa59f3c6a796cae$exports = {};
$4aa59f3c6a796cae$exports = {
  "dragDescriptionKeyboard": `Pritisnite Enter da biste po\u010Deli povla\u010Diti.`,
  "dragDescriptionKeyboardAlt": `Pritisnite Alt + Enter za po\u010Detak povla\u010Denja.`,
  "dragDescriptionLongPress": `Dugo pritisnite za po\u010Detak povla\u010Denja.`,
  "dragDescriptionTouch": `Dvaput dodirnite da biste po\u010Deli povla\u010Diti.`,
  "dragDescriptionVirtual": `Kliknite da biste po\u010Deli povla\u010Diti.`,
  "dragItem": (args) => `Povucite stavku ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Povucite ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} odabranu stavku`,
    other: () => `ovoliko odabranih stavki: ${formatter.number(args.count)}`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Pritisnite Enter za povla\u010Denje ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} odabrana stavka`,
    other: () => `${formatter.number(args.count)} odabrane stavke`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Pritisnite Alt + Enter za povla\u010Denje ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} odabrana stavka`,
    other: () => `${formatter.number(args.count)} odabrane stavke`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Dugo pritisnite za povla\u010Denje ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} odabrana stavka`,
    other: () => `${formatter.number(args.count)} odabrane stavke`
  })}.`,
  "dragStartedKeyboard": `Po\u010Deli ste povla\u010Diti. Pritisnite tipku tabulatora da biste do\u0161li do cilja ispu\u0161tanja, a zatim Enter da biste ispustili stavku ili Escape da biste prekinuli povla\u010Denje.`,
  "dragStartedTouch": `Po\u010Deli ste povla\u010Diti. Do\u0111ite do cilja ispu\u0161tanja, a zatim dvaput dodirnite da biste ispustili stavku.`,
  "dragStartedVirtual": `Po\u010Deli ste povla\u010Diti. Do\u0111ite do cilja ispu\u0161tanja, a zatim kliknite ili pritisnite Enter da biste ispustili stavku.`,
  "dropCanceled": `Povla\u010Denje je prekinuto.`,
  "dropComplete": `Ispu\u0161tanje je dovr\u0161eno.`,
  "dropDescriptionKeyboard": `Pritisnite Enter da biste ispustili stavku. Pritisnite Escape da biste prekinuli povla\u010Denje.`,
  "dropDescriptionTouch": `Dvaput dodirnite da biste ispustili stavku.`,
  "dropDescriptionVirtual": `Kliknite da biste ispustili stavku.`,
  "dropIndicator": `pokazatelj ispu\u0161tanja`,
  "dropOnItem": (args) => `Ispustite na stavku ${args.itemText}`,
  "dropOnRoot": `Ispustite na`,
  "endDragKeyboard": `Povla\u010Denje. Pritisnite Enter da biste prekinuli povla\u010Denje.`,
  "endDragTouch": `Povla\u010Denje. Dvaput dodirnite da biste prekinuli povla\u010Denje.`,
  "endDragVirtual": `Povla\u010Denje. Kliknite da biste prekinuli povla\u010Denje.`,
  "insertAfter": (args) => `Umetnite iza stavke ${args.itemText}`,
  "insertBefore": (args) => `Ispustite ispred stavke ${args.itemText}`,
  "insertBetween": (args) => `Umetnite izme\u0111u stavki ${args.beforeItemText} i ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/hu-HU.mjs
var $d8d3646556c40586$exports = {};
$d8d3646556c40586$exports = {
  "dragDescriptionKeyboard": `Nyomja le az Enter billenty\u0171t a h\xFAz\xE1s megkezd\xE9s\xE9hez.`,
  "dragDescriptionKeyboardAlt": `Nyomja le az Alt + Enter billenty\u0171ket a h\xFAz\xE1s megkezd\xE9s\xE9hez.`,
  "dragDescriptionLongPress": `Hosszan nyomja meg a h\xFAz\xE1s elind\xEDt\xE1s\xE1hoz.`,
  "dragDescriptionTouch": `Koppintson dupl\xE1n a h\xFAz\xE1s megkezd\xE9s\xE9hez.`,
  "dragDescriptionVirtual": `Kattintson a h\xFAz\xE1s megkezd\xE9s\xE9hez.`,
  "dragItem": (args) => `${args.itemText} h\xFAz\xE1sa`,
  "dragSelectedItems": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} kijel\xF6lt elem`,
    other: () => `${formatter.number(args.count)} kijel\xF6lt elem`
  })} h\xFAz\xE1sa`,
  "dragSelectedKeyboard": (args, formatter) => `Nyomja meg az Entert ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} kijel\xF6lt elem`,
    other: () => `${formatter.number(args.count)} kijel\xF6lt elem`
  })} h\xFAz\xE1s\xE1hoz.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Nyomja meg az Alt + Enter billenty\u0171ket ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} kijel\xF6lt elem`,
    other: () => `${formatter.number(args.count)} kijel\xF6lt elem`
  })} h\xFAz\xE1s\xE1hoz.`,
  "dragSelectedLongPress": (args, formatter) => `Tartsa lenyomva hosszan ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} kijel\xF6lt elem`,
    other: () => `${formatter.number(args.count)} kijel\xF6lt elem`
  })} h\xFAz\xE1s\xE1hoz.`,
  "dragStartedKeyboard": `H\xFAz\xE1s megkezdve. Nyomja le a Tab billenty\u0171t az elenged\xE9si c\xE9lhoz navig\xE1l\xE1s\xE1hoz, majd nyomja le az Enter billenty\u0171t az elenged\xE9shez, vagy nyomja le az Escape billenty\u0171t a megszak\xEDt\xE1shoz.`,
  "dragStartedTouch": `H\xFAz\xE1s megkezdve. Navig\xE1ljon egy elenged\xE9si c\xE9lhoz, majd koppintson dupl\xE1n az elenged\xE9shez.`,
  "dragStartedVirtual": `H\xFAz\xE1s megkezdve. Navig\xE1ljon egy elenged\xE9si c\xE9lhoz, majd kattintson vagy nyomja le az Enter billenty\u0171t az elenged\xE9shez.`,
  "dropCanceled": `Elenged\xE9s megszak\xEDtva.`,
  "dropComplete": `Elenged\xE9s teljes\xEDtve.`,
  "dropDescriptionKeyboard": `Nyomja le az Enter billenty\u0171t az elenged\xE9shez. Nyomja le az Escape billenty\u0171t a h\xFAz\xE1s megszak\xEDt\xE1s\xE1hoz.`,
  "dropDescriptionTouch": `Koppintson dupl\xE1n az elenged\xE9shez.`,
  "dropDescriptionVirtual": `Kattintson az elenged\xE9shez.`,
  "dropIndicator": `elenged\xE9sjelz\u0151`,
  "dropOnItem": (args) => `Elenged\xE9s erre: ${args.itemText}`,
  "dropOnRoot": `Elenged\xE9s erre:`,
  "endDragKeyboard": `H\xFAz\xE1s folyamatban. Nyomja le az Enter billenty\u0171t a h\xFAz\xE1s megszak\xEDt\xE1s\xE1hoz.`,
  "endDragTouch": `H\xFAz\xE1s folyamatban. Koppintson dupl\xE1n a h\xFAz\xE1s megszak\xEDt\xE1s\xE1hoz.`,
  "endDragVirtual": `H\xFAz\xE1s folyamatban. Kattintson a h\xFAz\xE1s megszak\xEDt\xE1s\xE1hoz.`,
  "insertAfter": (args) => `Besz\xFAr\xE1s ${args.itemText} ut\xE1n`,
  "insertBefore": (args) => `Besz\xFAr\xE1s ${args.itemText} el\xE9`,
  "insertBetween": (args) => `Besz\xFAr\xE1s ${args.beforeItemText} \xE9s ${args.afterItemText} k\xF6z\xE9`
};

// node_modules/@react-aria/dnd/dist/it-IT.mjs
var $982d558b45395246$exports = {};
$982d558b45395246$exports = {
  "dragDescriptionKeyboard": `Premi Invio per iniziare a trascinare.`,
  "dragDescriptionKeyboardAlt": `Premi Alt + Invio per iniziare a trascinare.`,
  "dragDescriptionLongPress": `Premi a lungo per iniziare a trascinare.`,
  "dragDescriptionTouch": `Tocca due volte per iniziare a trascinare.`,
  "dragDescriptionVirtual": `Fai clic per iniziare a trascinare.`,
  "dragItem": (args) => `Trascina ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Trascina ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} altro elemento selezionato`,
    other: () => `${formatter.number(args.count)} altri elementi selezionati`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Premi Invio per trascinare ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} elemento selezionato`,
    other: () => `${formatter.number(args.count)} elementi selezionati`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Premi Alt + Invio per trascinare ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} elemento selezionato`,
    other: () => `${formatter.number(args.count)} elementi selezionati`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Premi a lungo per trascinare ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} elemento selezionato`,
    other: () => `${formatter.number(args.count)} elementi selezionati`
  })}.`,
  "dragStartedKeyboard": `Hai iniziato a trascinare. Premi Tab per arrivare sull\u2019area di destinazione, quindi premi Invio per rilasciare o Esc per annullare.`,
  "dragStartedTouch": `Hai iniziato a trascinare. Arriva sull\u2019area di destinazione, quindi tocca due volte per rilasciare.`,
  "dragStartedVirtual": `Hai iniziato a trascinare. Arriva sull\u2019area di destinazione, quindi fai clic o premi Invio per rilasciare.`,
  "dropCanceled": `Rilascio annullato.`,
  "dropComplete": `Rilascio completato.`,
  "dropDescriptionKeyboard": `Premi Invio per rilasciare. Premi Esc per annullare.`,
  "dropDescriptionTouch": `Tocca due volte per rilasciare.`,
  "dropDescriptionVirtual": `Fai clic per rilasciare.`,
  "dropIndicator": `indicatore di rilascio`,
  "dropOnItem": (args) => `Rilascia su ${args.itemText}`,
  "dropOnRoot": `Rilascia su`,
  "endDragKeyboard": `Trascinamento. Premi Invio per annullare.`,
  "endDragTouch": `Trascinamento. Tocca due volte per annullare.`,
  "endDragVirtual": `Trascinamento. Fai clic per annullare.`,
  "insertAfter": (args) => `Inserisci dopo ${args.itemText}`,
  "insertBefore": (args) => `Inserisci prima di ${args.itemText}`,
  "insertBetween": (args) => `Inserisci tra ${args.beforeItemText} e ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/ja-JP.mjs
var $6a0cf387b9de036c$exports = {};
$6a0cf387b9de036c$exports = {
  "dragDescriptionKeyboard": `Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30C9\u30E9\u30C3\u30B0\u3092\u958B\u59CB\u3057\u3066\u304F\u3060\u3055\u3044\u3002`,
  "dragDescriptionKeyboardAlt": `Alt+Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30C9\u30E9\u30C3\u30B0\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`,
  "dragDescriptionLongPress": `\u9577\u62BC\u3057\u3057\u3066\u30C9\u30E9\u30C3\u30B0\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`,
  "dragDescriptionTouch": `\u30C0\u30D6\u30EB\u30BF\u30C3\u30D7\u3057\u3066\u30C9\u30E9\u30C3\u30B0\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`,
  "dragDescriptionVirtual": `\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C9\u30E9\u30C3\u30B0\u3092\u958B\u59CB\u3057\u307E\u3059\u3002`,
  "dragItem": (args) => `${args.itemText} \u3092\u30C9\u30E9\u30C3\u30B0`,
  "dragSelectedItems": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u500B\u306E\u9078\u629E\u9805\u76EE`,
    other: () => `${formatter.number(args.count)} \u500B\u306E\u9078\u629E\u9805\u76EE`
  })} \u3092\u30C9\u30E9\u30C3\u30B0`,
  "dragSelectedKeyboard": (args, formatter) => `Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u3001${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u9078\u629E\u3057\u305F\u9805\u76EE`,
    other: () => `${formatter.number(args.count)} \u9078\u629E\u3057\u305F\u9805\u76EE`
  })}\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u307E\u3059\u3002`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Alt+Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u3001${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u9078\u629E\u3057\u305F\u9805\u76EE`,
    other: () => `${formatter.number(args.count)} \u9078\u629E\u3057\u305F\u9805\u76EE`
  })}\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u307E\u3059\u3002`,
  "dragSelectedLongPress": (args, formatter) => `\u9577\u62BC\u3057\u3057\u3066\u3001${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u9078\u629E\u3057\u305F\u9805\u76EE`,
    other: () => `${formatter.number(args.count)} \u9078\u629E\u3057\u305F\u9805\u76EE`
  })}\u3092\u30C9\u30E9\u30C3\u30B0\u3057\u307E\u3059\u3002`,
  "dragStartedKeyboard": `\u30C9\u30E9\u30C3\u30B0\u3092\u958B\u59CB\u3057\u307E\u3059\u3002Tab \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30C9\u30ED\u30C3\u30D7\u30BF\u30FC\u30B2\u30C3\u30C8\u306B\u3044\u3069\u3046\u3057\u3001Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30C9\u30ED\u30C3\u30D7\u3059\u308B\u304B\u3001Esc \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u3002`,
  "dragStartedTouch": `\u30C9\u30E9\u30C3\u30B0\u3092\u958B\u59CB\u3057\u307E\u3057\u305F\u3002\u30C9\u30ED\u30C3\u30D7\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306B\u79FB\u52D5\u3057\u3001\u30C0\u30D6\u30EB\u30BF\u30C3\u30D7\u3057\u3066\u30C9\u30ED\u30C3\u30D7\u3057\u307E\u3059\u3002`,
  "dragStartedVirtual": `\u30C9\u30E9\u30C3\u30B0\u3092\u958B\u59CB\u3057\u307E\u3057\u305F\u3002\u30C9\u30ED\u30C3\u30D7\u306E\u30BF\u30FC\u30B2\u30C3\u30C8\u306B\u79FB\u52D5\u3057\u3001\u30AF\u30EA\u30C3\u30AF\u307E\u305F\u306F Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30C9\u30ED\u30C3\u30D7\u3057\u307E\u3059\u3002`,
  "dropCanceled": `\u30C9\u30ED\u30C3\u30D7\u304C\u30AD\u30E3\u30F3\u30BB\u30EB\u3055\u308C\u307E\u3057\u305F\u3002`,
  "dropComplete": `\u30C9\u30ED\u30C3\u30D7\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002`,
  "dropDescriptionKeyboard": `Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30C9\u30ED\u30C3\u30D7\u3057\u307E\u3059\u3002Esc \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30C9\u30E9\u30C3\u30B0\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u3002`,
  "dropDescriptionTouch": `\u30C0\u30D6\u30EB\u30BF\u30C3\u30D7\u3057\u3066\u30C9\u30ED\u30C3\u30D7\u3057\u307E\u3059\u3002`,
  "dropDescriptionVirtual": `\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C9\u30ED\u30C3\u30D7\u3057\u307E\u3059\u3002`,
  "dropIndicator": `\u30C9\u30ED\u30C3\u30D7\u30A4\u30F3\u30B8\u30B1\u30FC\u30BF\u30FC`,
  "dropOnItem": (args) => `${args.itemText} \u306B\u30C9\u30ED\u30C3\u30D7`,
  "dropOnRoot": `\u30C9\u30ED\u30C3\u30D7\u5834\u6240`,
  "endDragKeyboard": `\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u3044\u307E\u3059\u3002Enter \u30AD\u30FC\u3092\u62BC\u3057\u3066\u30C9\u30E9\u30C3\u30B0\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u3002`,
  "endDragTouch": `\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u3044\u307E\u3059\u3002\u30C0\u30D6\u30EB\u30BF\u30C3\u30D7\u3057\u3066\u30C9\u30E9\u30C3\u30B0\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u3002`,
  "endDragVirtual": `\u30C9\u30E9\u30C3\u30B0\u3057\u3066\u3044\u307E\u3059\u3002\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C9\u30E9\u30C3\u30B0\u3092\u30AD\u30E3\u30F3\u30BB\u30EB\u3057\u307E\u3059\u3002`,
  "insertAfter": (args) => `${args.itemText} \u306E\u5F8C\u306B\u633F\u5165`,
  "insertBefore": (args) => `${args.itemText} \u306E\u524D\u306B\u633F\u5165`,
  "insertBetween": (args) => `${args.beforeItemText} \u3068 ${args.afterItemText} \u306E\u9593\u306B\u633F\u5165`
};

// node_modules/@react-aria/dnd/dist/ko-KR.mjs
var $a97fefa2956f4bcb$exports = {};
$a97fefa2956f4bcb$exports = {
  "dragDescriptionKeyboard": `\uB4DC\uB798\uADF8\uB97C \uC2DC\uC791\uD558\uB824\uBA74 Enter\uB97C \uB204\uB974\uC138\uC694.`,
  "dragDescriptionKeyboardAlt": `\uB4DC\uB798\uADF8\uB97C \uC2DC\uC791\uD558\uB824\uBA74 Alt + Enter\uB97C \uB204\uB974\uC2ED\uC2DC\uC624.`,
  "dragDescriptionLongPress": `\uB4DC\uB798\uADF8\uB97C \uC2DC\uC791\uD558\uB824\uBA74 \uAE38\uAC8C \uB204\uB974\uC2ED\uC2DC\uC624.`,
  "dragDescriptionTouch": `\uB4DC\uB798\uADF8\uB97C \uC2DC\uC791\uD558\uB824\uBA74 \uB354\uBE14 \uD0ED\uD558\uC138\uC694.`,
  "dragDescriptionVirtual": `\uB4DC\uB798\uADF8\uB97C \uC2DC\uC791\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694.`,
  "dragItem": (args) => `${args.itemText} \uB4DC\uB798\uADF8`,
  "dragSelectedItems": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)}\uAC1C \uC120\uD0DD \uD56D\uBAA9`,
    other: () => `${formatter.number(args.count)}\uAC1C \uC120\uD0DD \uD56D\uBAA9`
  })} \uB4DC\uB798\uADF8`,
  "dragSelectedKeyboard": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)}\uAC1C \uC120\uD0DD \uD56D\uBAA9`,
    other: () => `${formatter.number(args.count)}\uAC1C \uC120\uD0DD \uD56D\uBAA9`
  })}\uC744 \uB4DC\uB798\uADF8\uD558\uB824\uBA74 Enter\uB97C \uB204\uB974\uC2ED\uC2DC\uC624.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)}\uAC1C \uC120\uD0DD \uD56D\uBAA9`,
    other: () => `${formatter.number(args.count)}\uAC1C \uC120\uD0DD \uD56D\uBAA9`
  })}\uC744 \uB4DC\uB798\uADF8\uD558\uB824\uBA74 Alt + Enter\uB97C \uB204\uB974\uC2ED\uC2DC\uC624.`,
  "dragSelectedLongPress": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)}\uAC1C \uC120\uD0DD \uD56D\uBAA9`,
    other: () => `${formatter.number(args.count)}\uAC1C \uC120\uD0DD \uD56D\uBAA9`
  })}\uC744 \uB4DC\uB798\uADF8\uD558\uB824\uBA74 \uAE38\uAC8C \uB204\uB974\uC2ED\uC2DC\uC624.`,
  "dragStartedKeyboard": `\uB4DC\uB798\uADF8\uAC00 \uC2DC\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4. Tab\uC744 \uB20C\uB7EC \uB4DC\uB86D \uB300\uC0C1\uC73C\uB85C \uC774\uB3D9\uD55C \uB2E4\uC74C Enter\uB97C \uB20C\uB7EC \uB4DC\uB86D\uD558\uAC70\uB098 Esc\uB97C \uB20C\uB7EC \uCDE8\uC18C\uD558\uC138\uC694.`,
  "dragStartedTouch": `\uB4DC\uB798\uADF8\uAC00 \uC2DC\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB4DC\uB86D \uB300\uC0C1\uC73C\uB85C \uC774\uB3D9\uD55C \uB2E4\uC74C \uB354\uBE14 \uD0ED\uD558\uC5EC \uB4DC\uB86D\uD558\uC138\uC694.`,
  "dragStartedVirtual": `\uB4DC\uB798\uADF8\uAC00 \uC2DC\uC791\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uB4DC\uB86D \uB300\uC0C1\uC73C\uB85C \uC774\uB3D9\uD55C \uB2E4\uC74C \uD074\uB9AD\uD558\uAC70\uB098 Enter\uB97C \uB20C\uB7EC \uB4DC\uB86D\uD558\uC138\uC694.`,
  "dropCanceled": `\uB4DC\uB86D\uC774 \uCDE8\uC18C\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,
  "dropComplete": `\uB4DC\uB86D\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4.`,
  "dropDescriptionKeyboard": `\uB4DC\uB86D\uD558\uB824\uBA74 Enter\uB97C \uB204\uB974\uC138\uC694. \uB4DC\uB798\uADF8\uB97C \uCDE8\uC18C\uD558\uB824\uBA74 Esc\uB97C \uB204\uB974\uC138\uC694.`,
  "dropDescriptionTouch": `\uB354\uBE14 \uD0ED\uD558\uC5EC \uB4DC\uB86D\uD558\uC138\uC694.`,
  "dropDescriptionVirtual": `\uB4DC\uB86D\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694.`,
  "dropIndicator": `\uB4DC\uB86D \uD45C\uC2DC\uAE30`,
  "dropOnItem": (args) => `${args.itemText}\uC5D0 \uB4DC\uB86D`,
  "dropOnRoot": `\uB4DC\uB86D \uB300\uC0C1`,
  "endDragKeyboard": `\uB4DC\uB798\uADF8 \uC911\uC785\uB2C8\uB2E4. \uB4DC\uB798\uADF8\uB97C \uCDE8\uC18C\uD558\uB824\uBA74 Enter\uB97C \uB204\uB974\uC138\uC694.`,
  "endDragTouch": `\uB4DC\uB798\uADF8 \uC911\uC785\uB2C8\uB2E4. \uB4DC\uB798\uADF8\uB97C \uCDE8\uC18C\uD558\uB824\uBA74 \uB354\uBE14 \uD0ED\uD558\uC138\uC694.`,
  "endDragVirtual": `\uB4DC\uB798\uADF8 \uC911\uC785\uB2C8\uB2E4. \uB4DC\uB798\uADF8\uB97C \uCDE8\uC18C\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694.`,
  "insertAfter": (args) => `${args.itemText} \uC774\uD6C4\uC5D0 \uC0BD\uC785`,
  "insertBefore": (args) => `${args.itemText} \uC774\uC804\uC5D0 \uC0BD\uC785`,
  "insertBetween": (args) => `${args.beforeItemText} \uBC0F ${args.afterItemText} \uC0AC\uC774\uC5D0 \uC0BD\uC785`
};

// node_modules/@react-aria/dnd/dist/lt-LT.mjs
var $5fb5837f94e1c150$exports = {};
$5fb5837f94e1c150$exports = {
  "dragDescriptionKeyboard": `Paspauskite \u201EEnter\u201C, kad prad\u0117tum\u0117te vilkti.`,
  "dragDescriptionKeyboardAlt": `Paspauskite \u201EAlt + Enter\u201C, kad prad\u0117tum\u0117te vilkti.`,
  "dragDescriptionLongPress": `Palaikykite nuspaud\u0119, kad prad\u0117tum\u0117te vilkti.`,
  "dragDescriptionTouch": `Palieskite dukart, kad prad\u0117tum\u0117te vilkti.`,
  "dragDescriptionVirtual": `Spustel\u0117kite, kad prad\u0117tum\u0117te vilkti.`,
  "dragItem": (args) => `Vilkti ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Vilkti ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} pasirinkt\u0105 element\u0105`,
    other: () => `${formatter.number(args.count)} pasirinktus elementus`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Paspauskite \u201EEnter\u201C, jei norite nuvilkti ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} pasirinkt\u0105 element\u0105`,
    other: () => `${formatter.number(args.count)} pasirinktus elementus`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Paspauskite \u201EAlt + Enter\u201C, kad nuvilktum\u0117te ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} pasirinkt\u0105 element\u0105`,
    other: () => `${formatter.number(args.count)} pasirinktus elementus`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Nuspaud\u0119 palaikykite, kad nuvilktum\u0117te ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} pasirinkt\u0105 element\u0105`,
    other: () => `${formatter.number(args.count)} pasirinktus elementus`
  })}.`,
  "dragStartedKeyboard": `Prad\u0117ta vilkti. Paspauskite \u201ETab\u201C, kad pereitum\u0117te \u012F tiesiogin\u0119 paskirties viet\u0105, tada paspauskite \u201EEnter\u201C, kad numestum\u0117te, arba \u201EEscape\u201C, kad at\u0161auktum\u0117te.`,
  "dragStartedTouch": `Prad\u0117ta vilkti. Eikite \u012F tiesiogin\u0119 paskirties viet\u0105, tada palieskite dukart, kad numestum\u0117te.`,
  "dragStartedVirtual": `Prad\u0117ta vilkti. Eikite \u012F tiesiogin\u0119 paskirties viet\u0105 ir spustel\u0117kite arba paspauskite \u201EEnter\u201C, kad numestum\u0117te.`,
  "dropCanceled": `Numetimas at\u0161auktas.`,
  "dropComplete": `Numesta.`,
  "dropDescriptionKeyboard": `Paspauskite \u201EEnter\u201C, kad numestum\u0117te. Paspauskite \u201EEscape\u201C, kad at\u0161auktum\u0117te vilkim\u0105.`,
  "dropDescriptionTouch": `Palieskite dukart, kad numestum\u0117te.`,
  "dropDescriptionVirtual": `Spustel\u0117kite, kad numestum\u0117te.`,
  "dropIndicator": `numetimo indikatorius`,
  "dropOnItem": (args) => `Numesti ant ${args.itemText}`,
  "dropOnRoot": `Numesti ant`,
  "endDragKeyboard": `Velkama. Paspauskite \u201EEnter\u201C, kad at\u0161auktum\u0117te vilkim\u0105.`,
  "endDragTouch": `Velkama. Spustel\u0117kite dukart, kad at\u0161auktum\u0117te vilkim\u0105.`,
  "endDragVirtual": `Velkama. Spustel\u0117kite, kad at\u0161auktum\u0117te vilkim\u0105.`,
  "insertAfter": (args) => `\u012Eterpti po ${args.itemText}`,
  "insertBefore": (args) => `\u012Eterpti prie\u0161 ${args.itemText}`,
  "insertBetween": (args) => `\u012Eterpti tarp ${args.beforeItemText} ir ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/lv-LV.mjs
var $5b2e5709864cc922$exports = {};
$5b2e5709864cc922$exports = {
  "dragDescriptionKeyboard": `Nospiediet Enter, lai s\u0101ktu vilk\u0161anu.`,
  "dragDescriptionKeyboardAlt": `Nospiediet tausti\u0146u kombin\u0101ciju Alt+Enter, lai s\u0101ktu vilk\u0161anu.`,
  "dragDescriptionLongPress": `Turiet nospiestu, lai s\u0101ktu vilk\u0161anu.`,
  "dragDescriptionTouch": `Veiciet dubultsk\u0101rienu, lai s\u0101ktu vilk\u0161anu.`,
  "dragDescriptionVirtual": `Noklik\u0161\u0137iniet, lai s\u0101ktu vilk\u0161anu.`,
  "dragItem": (args) => `Velciet ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Velciet ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} atlas\u012Bto vienumu`,
    other: () => `${formatter.number(args.count)} atlas\u012Btos vienumus`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Nospiediet tausti\u0146u Enter, lai vilktu ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} atlas\u012Bto vienumu`,
    other: () => `${formatter.number(args.count)} atlas\u012Btos vienumus`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Nospiediet tausti\u0146u kombin\u0101ciju Alt+Enter, lai vilktu ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} atlas\u012Bto vienumu`,
    other: () => `${formatter.number(args.count)} atlas\u012Btos vienumus`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Turiet nospiestu, lai vilktu ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} atlas\u012Bto vienumu`,
    other: () => `${formatter.number(args.count)} atlas\u012Btos vienumus`
  })}.`,
  "dragStartedKeyboard": `Uzs\u0101kta vilk\u0161ana. Nospiediet tausti\u0146u Tab, lai p\u0101rietu uz nome\u0161anas m\u0113r\u0137i, p\u0113c tam nospiediet Enter, lai nomestu, vai nospiediet Escape, lai atceltu.`,
  "dragStartedTouch": `Uzs\u0101kta vilk\u0161ana. P\u0101rejiet uz nome\u0161anas m\u0113r\u0137i, p\u0113c tam veiciet dubultsk\u0101rienu, lai nomestu.`,
  "dragStartedVirtual": `Uzs\u0101kta vilk\u0161ana. P\u0101rejiet uz nome\u0161anas m\u0113r\u0137i, p\u0113c tam nospiediet Enter, lai nomestu.`,
  "dropCanceled": `Nome\u0161ana atcelta.`,
  "dropComplete": `Nome\u0161ana pabeigta.`,
  "dropDescriptionKeyboard": `Nospiediet Enter, lai nomestu. Nospiediet Escape, lai atceltu vilk\u0161anu.`,
  "dropDescriptionTouch": `Veiciet dubultsk\u0101rienu, lai nomestu.`,
  "dropDescriptionVirtual": `Noklik\u0161\u0137iniet, lai nomestu.`,
  "dropIndicator": `nome\u0161anas indikators`,
  "dropOnItem": (args) => `Nometiet uz ${args.itemText}`,
  "dropOnRoot": `Nometiet uz`,
  "endDragKeyboard": `Notiek vilk\u0161ana. Nospiediet Enter, lai atceltu vilk\u0161anu.`,
  "endDragTouch": `Notiek vilk\u0161ana. Veiciet dubultsk\u0101rienu, lai atceltu vilk\u0161anu.`,
  "endDragVirtual": `Notiek vilk\u0161ana. Noklik\u0161\u0137iniet, lai atceltu vilk\u0161anu.`,
  "insertAfter": (args) => `Ievietojiet p\u0113c ${args.itemText}`,
  "insertBefore": (args) => `Ievietojiet pirms ${args.itemText}`,
  "insertBetween": (args) => `Ievietojiet starp ${args.beforeItemText} un ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/nb-NO.mjs
var $ee15bb8efb18cc69$exports = {};
$ee15bb8efb18cc69$exports = {
  "dragDescriptionKeyboard": `Trykk p\xE5 Enter for \xE5 begynne \xE5 dra.`,
  "dragDescriptionKeyboardAlt": `Trykk p\xE5 Alt + Enter for \xE5 begynne \xE5 dra.`,
  "dragDescriptionLongPress": `Trykk lenge for \xE5 begynne \xE5 dra.`,
  "dragDescriptionTouch": `Dobbelttrykk for \xE5 begynne \xE5 dra.`,
  "dragDescriptionVirtual": `Klikk for \xE5 begynne \xE5 dra.`,
  "dragItem": (args) => `Dra ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Dra ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} merket element`,
    other: () => `${formatter.number(args.count)} merkede elementer`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Trykk Enter for \xE5 dra ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valgt element`,
    other: () => `${formatter.number(args.count)} valgte elementer`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Trykk p\xE5 Alt + Enter for \xE5 dra ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valgt element`,
    other: () => `${formatter.number(args.count)} valgte elementer`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Trykk lenge for \xE5 dra ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valgt element`,
    other: () => `${formatter.number(args.count)} valgte elementer`
  })}.`,
  "dragStartedKeyboard": `Begynte \xE5 dra. Trykk p\xE5 Tab for \xE5 navigere til et m\xE5l, og trykk deretter p\xE5 Enter for \xE5 slippe eller p\xE5 Esc for \xE5 avbryte.`,
  "dragStartedTouch": `Begynte \xE5 dra. Naviger til et m\xE5l, og dobbelttrykk for \xE5 slippe.`,
  "dragStartedVirtual": `Begynte \xE5 dra. Naviger til et m\xE5l, og klikk eller trykk p\xE5 Enter for \xE5 slippe.`,
  "dropCanceled": `Avbr\xF8t slipping.`,
  "dropComplete": `Slippingen er fullf\xF8rt.`,
  "dropDescriptionKeyboard": `Trykk p\xE5 Enter for \xE5 slippe. Trykk p\xE5 Esc hvis du vil avbryte draingen.`,
  "dropDescriptionTouch": `Dobbelttrykk for \xE5 slippe.`,
  "dropDescriptionVirtual": `Klikk for \xE5 slippe.`,
  "dropIndicator": `slippeindikator`,
  "dropOnItem": (args) => `Slipp p\xE5 ${args.itemText}`,
  "dropOnRoot": `Slipp p\xE5`,
  "endDragKeyboard": `Drar. Trykk p\xE5 Enter hvis du vil avbryte.`,
  "endDragTouch": `Drar. Dobbelttrykk hvis du vil avbryte.`,
  "endDragVirtual": `Drar. Klikk hvis du vil avbryte.`,
  "insertAfter": (args) => `Sett inn etter ${args.itemText}`,
  "insertBefore": (args) => `Sett inn f\xF8r ${args.itemText}`,
  "insertBetween": (args) => `Sett inn mellom ${args.beforeItemText} og ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/nl-NL.mjs
var $1daf2d4602e26ac4$exports = {};
$1daf2d4602e26ac4$exports = {
  "dragDescriptionKeyboard": `Druk op Enter om te slepen.`,
  "dragDescriptionKeyboardAlt": `Druk op Alt + Enter om te slepen.`,
  "dragDescriptionLongPress": `Houd lang ingedrukt om te slepen.`,
  "dragDescriptionTouch": `Dubbeltik om te slepen.`,
  "dragDescriptionVirtual": `Klik om met slepen te starten.`,
  "dragItem": (args) => `${args.itemText} slepen`,
  "dragSelectedItems": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} geselecteerd item`,
    other: () => `${formatter.number(args.count)} geselecteerde items`
  })} slepen`,
  "dragSelectedKeyboard": (args, formatter) => `Druk op Enter om ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} geselecteerd item`,
    other: () => `${formatter.number(args.count)} geselecteerde items`
  })} te slepen.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Druk op Alt + Enter om ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} geselecteerd item`,
    other: () => `${formatter.number(args.count)} geselecteerde items`
  })} te slepen.`,
  "dragSelectedLongPress": (args, formatter) => `Houd lang ingedrukt om ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} geselecteerd item`,
    other: () => `${formatter.number(args.count)} geselecteerde items`
  })} te slepen.`,
  "dragStartedKeyboard": `Begonnen met slepen. Druk op Tab om naar een locatie te gaan. Druk dan op Enter om neer te zetten, of op Esc om te annuleren.`,
  "dragStartedTouch": `Begonnen met slepen. Ga naar de gewenste locatie en dubbeltik om neer te zetten.`,
  "dragStartedVirtual": `Begonnen met slepen. Ga naar de gewenste locatie en klik of druk op Enter om neer te zetten.`,
  "dropCanceled": `Neerzetten geannuleerd.`,
  "dropComplete": `Neerzetten voltooid.`,
  "dropDescriptionKeyboard": `Druk op Enter om neer te zetten. Druk op Esc om het slepen te annuleren.`,
  "dropDescriptionTouch": `Dubbeltik om neer te zetten.`,
  "dropDescriptionVirtual": `Klik om neer te zetten.`,
  "dropIndicator": `aanwijzer voor neerzetten`,
  "dropOnItem": (args) => `Neerzetten op ${args.itemText}`,
  "dropOnRoot": `Neerzetten op`,
  "endDragKeyboard": `Bezig met slepen. Druk op Enter om te annuleren.`,
  "endDragTouch": `Bezig met slepen. Dubbeltik om te annuleren.`,
  "endDragVirtual": `Bezig met slepen. Klik om te annuleren.`,
  "insertAfter": (args) => `Plaatsen na ${args.itemText}`,
  "insertBefore": (args) => `Plaatsen v\xF3\xF3r ${args.itemText}`,
  "insertBetween": (args) => `Plaatsen tussen ${args.beforeItemText} en ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/pl-PL.mjs
var $7115429b0f60511f$exports = {};
$7115429b0f60511f$exports = {
  "dragDescriptionKeyboard": `Naci\u015Bnij Enter, aby rozpocz\u0105\u0107 przeci\u0105ganie.`,
  "dragDescriptionKeyboardAlt": `Naci\u015Bnij Alt + Enter, aby rozpocz\u0105\u0107 przeci\u0105ganie.`,
  "dragDescriptionLongPress": `Naci\u015Bnij i przytrzymaj, aby rozpocz\u0105\u0107 przeci\u0105ganie.`,
  "dragDescriptionTouch": `Dotknij dwukrotnie, aby rozpocz\u0105\u0107 przeci\u0105ganie.`,
  "dragDescriptionVirtual": `Kliknij, aby rozpocz\u0105\u0107 przeci\u0105ganie.`,
  "dragItem": (args) => `Przeci\u0105gnij ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Przeci\u0105gnij ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} wybrany element`,
    other: () => `${formatter.number(args.count)} wybranych element\xF3w`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Naci\u015Bnij Enter, aby przeci\u0105gn\u0105\u0107 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} wybrany element`,
    other: () => `${formatter.number(args.count)} wybrane(-ych) elementy(-\xF3w)`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Naci\u015Bnij Alt + Enter, aby przeci\u0105gn\u0105\u0107 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} wybrany element`,
    other: () => `${formatter.number(args.count)} wybrane(-ych) elementy(-\xF3w)`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Naci\u015Bnij i przytrzymaj, aby przeci\u0105gn\u0105\u0107 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} wybrany element`,
    other: () => `${formatter.number(args.count)} wybrane(-ych) elementy(-\xF3w)`
  })}.`,
  "dragStartedKeyboard": `Rozpocz\u0119to przeci\u0105ganie. Naci\u015Bnij Tab, aby wybra\u0107 miejsce docelowe, a nast\u0119pnie naci\u015Bnij Enter, aby upu\u015Bci\u0107, lub Escape, aby anulowa\u0107.`,
  "dragStartedTouch": `Rozpocz\u0119to przeci\u0105ganie. Wybierz miejsce, w kt\xF3rym chcesz upu\u015Bci\u0107 element, a nast\u0119pnie dotknij dwukrotnie, aby upu\u015Bci\u0107.F`,
  "dragStartedVirtual": `Rozpocz\u0119to przeci\u0105ganie. Wybierz miejsce, w kt\xF3rym chcesz upu\u015Bci\u0107 element, a nast\u0119pnie kliknij lub naci\u015Bnij Enter, aby upu\u015Bci\u0107.`,
  "dropCanceled": `Anulowano upuszczenie.`,
  "dropComplete": `Zako\u0144czono upuszczanie.`,
  "dropDescriptionKeyboard": `Naci\u015Bnij Enter, aby upu\u015Bci\u0107. Naci\u015Bnij Escape, aby anulowa\u0107 przeci\u0105gni\u0119cie.`,
  "dropDescriptionTouch": `Dotknij dwukrotnie, aby upu\u015Bci\u0107.`,
  "dropDescriptionVirtual": `Kliknij, aby upu\u015Bci\u0107.`,
  "dropIndicator": `wska\u017Anik upuszczenia`,
  "dropOnItem": (args) => `Upu\u015B\u0107 na ${args.itemText}`,
  "dropOnRoot": `Upu\u015B\u0107`,
  "endDragKeyboard": `Przeci\u0105ganie. Naci\u015Bnij Enter, aby anulowa\u0107 przeci\u0105gni\u0119cie.`,
  "endDragTouch": `Przeci\u0105ganie. Kliknij dwukrotnie, aby anulowa\u0107 przeci\u0105gni\u0119cie.`,
  "endDragVirtual": `Przeci\u0105ganie. Kliknij, aby anulowa\u0107 przeci\u0105ganie.`,
  "insertAfter": (args) => `Umie\u015B\u0107 za ${args.itemText}`,
  "insertBefore": (args) => `Umie\u015B\u0107 przed ${args.itemText}`,
  "insertBetween": (args) => `Umie\u015B\u0107 mi\u0119dzy ${args.beforeItemText} i ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/pt-BR.mjs
var $5edd453ae5d4a8bc$exports = {};
$5edd453ae5d4a8bc$exports = {
  "dragDescriptionKeyboard": `Pressione Enter para come\xE7ar a arrastar.`,
  "dragDescriptionKeyboardAlt": `Pressione Alt + Enter para come\xE7ar a arrastar.`,
  "dragDescriptionLongPress": `Pressione e segure para come\xE7ar a arrastar.`,
  "dragDescriptionTouch": `Toque duas vezes para come\xE7ar a arrastar.`,
  "dragDescriptionVirtual": `Clique para come\xE7ar a arrastar.`,
  "dragItem": (args) => `Arrastar ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Arrastar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} item selecionado`,
    other: () => `${formatter.number(args.count)} itens selecionados`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Pressione Enter para arrastar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} o item selecionado`,
    other: () => `${formatter.number(args.count)} os itens selecionados`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Pressione Alt + Enter para arrastar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} o item selecionado`,
    other: () => `${formatter.number(args.count)} os itens selecionados`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Pressione e segure para arrastar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} o item selecionado`,
    other: () => `${formatter.number(args.count)} os itens selecionados`
  })}.`,
  "dragStartedKeyboard": `Comece a arrastar. Pressione Tab para navegar at\xE9 um alvo e, em seguida, pressione Enter para soltar ou pressione Escape para cancelar.`,
  "dragStartedTouch": `Comece a arrastar. Navegue at\xE9 um alvo e toque duas vezes para soltar.`,
  "dragStartedVirtual": `Comece a arrastar. Navegue at\xE9 um alvo e clique ou pressione Enter para soltar.`,
  "dropCanceled": `Libera\xE7\xE3o cancelada.`,
  "dropComplete": `Libera\xE7\xE3o conclu\xEDda.`,
  "dropDescriptionKeyboard": `Pressione Enter para soltar. Pressione Escape para cancelar.`,
  "dropDescriptionTouch": `Toque duas vezes para soltar.`,
  "dropDescriptionVirtual": `Clique para soltar.`,
  "dropIndicator": `indicador de libera\xE7\xE3o`,
  "dropOnItem": (args) => `Soltar em ${args.itemText}`,
  "dropOnRoot": `Soltar`,
  "endDragKeyboard": `Arrastando. Pressione Enter para cancelar.`,
  "endDragTouch": `Arrastando. Toque duas vezes para cancelar.`,
  "endDragVirtual": `Arrastando. Clique para cancelar.`,
  "insertAfter": (args) => `Inserir ap\xF3s ${args.itemText}`,
  "insertBefore": (args) => `Inserir antes de ${args.itemText}`,
  "insertBetween": (args) => `Inserir entre ${args.beforeItemText} e ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/pt-PT.mjs
var $5f431994f708535e$exports = {};
$5f431994f708535e$exports = {
  "dragDescriptionKeyboard": `Prima Enter para iniciar o arrasto.`,
  "dragDescriptionKeyboardAlt": `Prima Alt + Enter para iniciar o arrasto.`,
  "dragDescriptionLongPress": `Prima longamente para come\xE7ar a arrastar.`,
  "dragDescriptionTouch": `Fa\xE7a duplo toque para come\xE7ar a arrastar.`,
  "dragDescriptionVirtual": `Clique para iniciar o arrasto.`,
  "dragItem": (args) => `Arrastar ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Arrastar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} item selecionado`,
    other: () => `${formatter.number(args.count)} itens selecionados`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Prima Enter para arrastar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} o item selecionado`,
    other: () => `${formatter.number(args.count)} os itens selecionados`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Prima Alt + Enter para arrastar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} o item selecionado`,
    other: () => `${formatter.number(args.count)} os itens selecionados`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Prima longamente para arrastar ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} o item selecionado`,
    other: () => `${formatter.number(args.count)} os itens selecionados`
  })}.`,
  "dragStartedKeyboard": `Arrasto iniciado. Prima a tecla de tabula\xE7\xE3o para navegar para um destino para largar, e em seguida prima Enter para largar ou prima Escape para cancelar.`,
  "dragStartedTouch": `Arrasto iniciado. Navegue para um destino para largar, e em seguida fa\xE7a duplo toque para largar.`,
  "dragStartedVirtual": `Arrasto iniciado. Navegue para um destino para largar, e em seguida clique ou prima Enter para largar.`,
  "dropCanceled": `Largar cancelado.`,
  "dropComplete": `Largar completo.`,
  "dropDescriptionKeyboard": `Prima Enter para largar. Prima Escape para cancelar o arrasto.`,
  "dropDescriptionTouch": `Fa\xE7a duplo toque para largar.`,
  "dropDescriptionVirtual": `Clique para largar.`,
  "dropIndicator": `Indicador de largar`,
  "dropOnItem": (args) => `Largar em ${args.itemText}`,
  "dropOnRoot": `Largar em`,
  "endDragKeyboard": `A arrastar. Prima Enter para cancelar o arrasto.`,
  "endDragTouch": `A arrastar. Fa\xE7a duplo toque para cancelar o arrasto.`,
  "endDragVirtual": `A arrastar. Clique para cancelar o arrasto.`,
  "insertAfter": (args) => `Inserir depois de ${args.itemText}`,
  "insertBefore": (args) => `Inserir antes de ${args.itemText}`,
  "insertBetween": (args) => `Inserir entre ${args.beforeItemText} e ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/ro-RO.mjs
var $107b5e2e45e971f1$exports = {};
$107b5e2e45e971f1$exports = {
  "dragDescriptionKeyboard": `Ap\u0103sa\u021Bi pe Enter pentru a \xEEncepe glisarea.`,
  "dragDescriptionKeyboardAlt": `Ap\u0103sa\u021Bi pe Alt + Enter pentru a \xEEncepe glisarea.`,
  "dragDescriptionLongPress": `Ap\u0103sa\u021Bi lung pentru a \xEEncepe glisarea.`,
  "dragDescriptionTouch": `Atinge\u021Bi de dou\u0103 ori pentru a \xEEncepe s\u0103 glisa\u021Bi.`,
  "dragDescriptionVirtual": `Face\u021Bi clic pentru a \xEEncepe glisarea.`,
  "dragItem": (args) => `Glisa\u021Bi ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Glisa\u021Bi ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} element selectat`,
    other: () => `${formatter.number(args.count)} elemente selectate`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Ap\u0103sa\u021Bi pe Enter pentru a glisa ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} element selectat`,
    other: () => `${formatter.number(args.count)} elemente selectate`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Ap\u0103sa\u021Bi pe Alt + Enter pentru a glisa ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} element selectat`,
    other: () => `${formatter.number(args.count)} elemente selectate`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Ap\u0103sa\u021Bi lung pentru a glisa ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} element selectat`,
    other: () => `${formatter.number(args.count)} elemente selectate`
  })}.`,
  "dragStartedKeyboard": `A \xEEnceput glisarea. Ap\u0103sa\u021Bi pe Tab pentru a naviga la o \u021Bint\u0103 de fixare, apoi ap\u0103sa\u021Bi pe Enter pentru a fixa sau ap\u0103sa\u021Bi pe Escape pentru a anula glisarea.`,
  "dragStartedTouch": `A \xEEnceput glisarea. Naviga\u021Bi la o \u021Bint\u0103 de fixare, apoi atinge\u021Bi de dou\u0103 ori pentru a fixa.`,
  "dragStartedVirtual": `A \xEEnceput glisarea. Naviga\u021Bi la o \u021Bint\u0103 de fixare, apoi face\u021Bi clic sau ap\u0103sa\u021Bi pe Enter pentru a fixa.`,
  "dropCanceled": `Fixare anulat\u0103.`,
  "dropComplete": `Fixare finalizat\u0103.`,
  "dropDescriptionKeyboard": `Ap\u0103sa\u021Bi pe Enter pentru a fixa. Ap\u0103sa\u021Bi pe Escape pentru a anula glisarea.`,
  "dropDescriptionTouch": `Atinge\u021Bi de dou\u0103 ori pentru a fixa.`,
  "dropDescriptionVirtual": `Face\u021Bi clic pentru a fixa.`,
  "dropIndicator": `indicator de fixare`,
  "dropOnItem": (args) => `Fixa\u021Bi pe ${args.itemText}`,
  "dropOnRoot": `Fixare pe`,
  "endDragKeyboard": `Se gliseaz\u0103. Ap\u0103sa\u021Bi pe Enter pentru a anula glisarea.`,
  "endDragTouch": `Se gliseaz\u0103. Atinge\u021Bi de dou\u0103 ori pentru a anula glisarea.`,
  "endDragVirtual": `Se gliseaz\u0103. Face\u021Bi clic pentru a anula glisarea.`,
  "insertAfter": (args) => `Insera\u021Bi dup\u0103 ${args.itemText}`,
  "insertBefore": (args) => `Insera\u021Bi \xEEnainte de ${args.itemText}`,
  "insertBetween": (args) => `Insera\u021Bi \xEEntre ${args.beforeItemText} \u0219i ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/ru-RU.mjs
var $d4b9c2f01c1892f7$exports = {};
$d4b9c2f01c1892f7$exports = {
  "dragDescriptionKeyboard": `\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Enter \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u044F.`,
  "dragDescriptionKeyboardAlt": `\u041D\u0430\u0436\u043C\u0438\u0442\u0435 Alt + Enter, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0442\u044C.`,
  "dragDescriptionLongPress": `\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0442\u044C.`,
  "dragDescriptionTouch": `\u0414\u0432\u0430\u0436\u0434\u044B \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u044F.`,
  "dragDescriptionVirtual": `\u0429\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u0434\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u044F.`,
  "dragItem": (args) => `\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442`,
    other: () => `${formatter.number(args.count)} \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u044D\u043B\u0435\u043C`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `\u041D\u0430\u0436\u043C\u0438\u0442\u0435 Enter \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u044F ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430`,
    other: () => `${formatter.number(args.count)} \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `\u041D\u0430\u0436\u043C\u0438\u0442\u0435 Alt + Enter \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u044F ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430`,
    other: () => `${formatter.number(args.count)} \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u044F ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430`,
    other: () => `${formatter.number(args.count)} \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432`
  })}.`,
  "dragStartedKeyboard": `\u041D\u0430\u0447\u0430\u0442\u043E \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Tab \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0446\u0435\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Enter, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435, \u0438\u043B\u0438 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Escape \u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F.`,
  "dragStartedTouch": `\u041D\u0430\u0447\u0430\u0442\u043E \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435. \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0446\u0435\u043B\u044C, \u0437\u0430\u0442\u0435\u043C \u0434\u0432\u0430\u0436\u0434\u044B \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435.`,
  "dragStartedVirtual": `\u041D\u0430\u0447\u0430\u0442\u043E \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Tab \u0434\u043B\u044F \u0432\u044B\u0431\u043E\u0440\u0430 \u0446\u0435\u043B\u0438, \u0437\u0430\u0442\u0435\u043C \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Enter, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435.`,
  "dropCanceled": `\u041F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043E.`,
  "dropComplete": `\u041F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E.`,
  "dropDescriptionKeyboard": `\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Enter, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Escape \u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B.`,
  "dropDescriptionTouch": `\u0414\u0432\u0430\u0436\u0434\u044B \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435.`,
  "dropDescriptionVirtual": `\u0429\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435.`,
  "dropIndicator": `\u0438\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u044F`,
  "dropOnItem": (args) => `\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C \u043D\u0430 ${args.itemText}`,
  "dropOnRoot": `\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u044C \u043D\u0430`,
  "endDragKeyboard": `\u041F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435. \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Enter \u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B.`,
  "endDragTouch": `\u041F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435. \u0414\u0432\u0430\u0436\u0434\u044B \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B.`,
  "endDragVirtual": `\u041F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u043D\u0438\u0435. \u0429\u0435\u043B\u043A\u043D\u0438\u0442\u0435 \u0434\u043B\u044F \u043E\u0442\u043C\u0435\u043D\u044B.`,
  "insertAfter": (args) => `\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u043B\u0435 ${args.itemText}`,
  "insertBefore": (args) => `\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043F\u0435\u0440\u0435\u0434 ${args.itemText}`,
  "insertBetween": (args) => `\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043C\u0435\u0436\u0434\u0443 ${args.beforeItemText} \u0438 ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/sk-SK.mjs
var $dbdc1942894e83e4$exports = {};
$dbdc1942894e83e4$exports = {
  "dragDescriptionKeyboard": `Stla\u010Den\xEDm kl\xE1vesu Enter za\u010Dnete pres\xFAvanie.`,
  "dragDescriptionKeyboardAlt": `Stla\u010Den\xEDm kl\xE1vesov Alt + Enter za\u010Dnete pres\xFAvanie.`,
  "dragDescriptionLongPress": `Dlh\xFDm stla\u010Den\xEDm za\u010Dnete pres\xFAvanie.`,
  "dragDescriptionTouch": `Dvojit\xFDm kliknut\xEDm za\u010Dnete pres\xFAvanie.`,
  "dragDescriptionVirtual": `Kliknut\xEDm za\u010Dnete pres\xFAvanie.`,
  "dragItem": (args) => `Presun\xFA\u0165 polo\u017Eku ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Presun\xFA\u0165 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} vybrat\xFA polo\u017Eku`,
    other: () => `${formatter.number(args.count)} vybrat\xE9 polo\u017Eky`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Stla\u010Den\xEDm kl\xE1vesu Enter presuniete ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} vybrat\xFA polo\u017Eku`,
    other: () => `${formatter.number(args.count)} vybrat\xFDch polo\u017Eiek`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Stla\u010Den\xEDm kl\xE1vesov Alt + Enter presuniete ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} vybrat\xFA polo\u017Eku`,
    other: () => `${formatter.number(args.count)} vybrat\xFDch polo\u017Eiek`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Dlh\xFDm stla\u010Den\xEDm presuniete ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} vybrat\xFA polo\u017Eku`,
    other: () => `${formatter.number(args.count)} vybrat\xFDch polo\u017Eiek`
  })}.`,
  "dragStartedKeyboard": `Pres\xFAvanie sa za\u010Dalo. Do cie\u013Eov\xE9ho umiestnenia prejdete stla\u010Den\xEDm kl\xE1vesu Tab. Ak chcete polo\u017Eku umiestni\u0165, stla\u010Dte kl\xE1ves Enter alebo stla\u010Dte kl\xE1ves Esc, ak chcete pres\xFAvanie zru\u0161i\u0165.`,
  "dragStartedTouch": `Pres\xFAvanie sa za\u010Dalo. Prejdite na cie\u013Eov\xE9 umiestnenie a dvojit\xFDm kliknut\xEDm umiestnite polo\u017Eku.`,
  "dragStartedVirtual": `Pres\xFAvanie sa za\u010Dalo. Prejdite na cie\u013Eov\xE9 umiestnenie a kliknut\xEDm alebo stla\u010Den\xEDm kl\xE1vesu Enter umiestnite polo\u017Eku.`,
  "dropCanceled": `Umiestnenie zru\u0161en\xE9.`,
  "dropComplete": `Umiestnenie dokon\u010Den\xE9.`,
  "dropDescriptionKeyboard": `Stla\u010Den\xEDm kl\xE1vesu Enter umiestnite polo\u017Eku. Stla\u010Den\xEDm kl\xE1vesu Esc zru\u0161\xEDte pres\xFAvanie.`,
  "dropDescriptionTouch": `Dvojit\xFDm kliknut\xEDm umiestnite polo\u017Eku.`,
  "dropDescriptionVirtual": `Kliknut\xEDm umiestnite polo\u017Eku.`,
  "dropIndicator": `indik\xE1tor umiestnenia`,
  "dropOnItem": (args) => `Umiestni\u0165 na polo\u017Eku ${args.itemText}`,
  "dropOnRoot": `Umiestni\u0165 na`,
  "endDragKeyboard": `Prebieha pres\xFAvanie. Ak ho chcete zru\u0161i\u0165, stla\u010Dte kl\xE1ves Enter.`,
  "endDragTouch": `Prebieha pres\xFAvanie. Dvojit\xFDm kliknut\xEDm ho m\xF4\u017Eete zru\u0161i\u0165.`,
  "endDragVirtual": `Prebieha pres\xFAvanie.`,
  "insertAfter": (args) => `Vlo\u017Ei\u0165 za polo\u017Eku ${args.itemText}`,
  "insertBefore": (args) => `Vlo\u017Ei\u0165 pred polo\u017Eku ${args.itemText}`,
  "insertBetween": (args) => `Vlo\u017Ei\u0165 medzi polo\u017Eky ${args.beforeItemText} a ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/sl-SI.mjs
var $fbaaaaebd547d998$exports = {};
$fbaaaaebd547d998$exports = {
  "dragDescriptionKeyboard": `Pritisnite tipko Enter za za\u010Detek vle\u010Denja.`,
  "dragDescriptionKeyboardAlt": `Pritisnite tipki Alt + Enter za za\u010Detek vle\u010Denja.`,
  "dragDescriptionLongPress": `Pritisnite in zadr\u017Eite za za\u010Detek vle\u010Denja.`,
  "dragDescriptionTouch": `Dvotapnite za za\u010Detek vle\u010Denja.`,
  "dragDescriptionVirtual": `Kliknite za za\u010Detek vle\u010Denja.`,
  "dragItem": (args) => `Povleci ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Povlecite ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} izbran element`,
    other: () => `izbrane elemente (${formatter.number(args.count)})`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Pritisnite tipko Enter, da povle\u010Dete ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} izbrani element`,
    other: () => `${formatter.number(args.count)} izbranih elementov`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Pritisnite tipki Alt + Enter, da povle\u010Dete ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} izbrani element`,
    other: () => `${formatter.number(args.count)} izbranih elementov`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Pritisnite in zadr\u017Eite, da povle\u010Dete ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} izbrani element`,
    other: () => `${formatter.number(args.count)} izbranih elementov`
  })}.`,
  "dragStartedKeyboard": `Vle\u010Denje se je za\u010Delo. Pritisnite tipko Tab za pomik na mesto, kamor \u017Eelite spustiti elemente, in pritisnite tipko Enter, da jih spustite, ali tipko Escape, da prekli\u010Dete postopek.`,
  "dragStartedTouch": `Vle\u010Denje se je za\u010Delo. Pomaknite se na mesto, kamor \u017Eelite spustiti elemente, in dvotapnite, da jih spustite.`,
  "dragStartedVirtual": `Vle\u010Denje se je za\u010Delo. Pomaknite se na mesto, kamor \u017Eelite spustiti elemente, in kliknite ali pritisnite tipko Enter, da jih spustite.`,
  "dropCanceled": `Spust je preklican.`,
  "dropComplete": `Spust je kon\u010Dan.`,
  "dropDescriptionKeyboard": `Pritisnite tipko Enter, da spustite. Pritisnite tipko Escape, da prekli\u010Dete vle\u010Denje.`,
  "dropDescriptionTouch": `Dvotapnite, da spustite.`,
  "dropDescriptionVirtual": `Kliknite, da spustite.`,
  "dropIndicator": `indikator spusta`,
  "dropOnItem": (args) => `Spusti na mesto ${args.itemText}`,
  "dropOnRoot": `Spusti na mesto`,
  "endDragKeyboard": `Vle\u010Denje. Pritisnite tipko Enter za preklic vle\u010Denja.`,
  "endDragTouch": `Vle\u010Denje. Dvotapnite za preklic vle\u010Denja.`,
  "endDragVirtual": `Vle\u010Denje. Kliknite, da prekli\u010Dete vle\u010Denje.`,
  "insertAfter": (args) => `Vstavi za ${args.itemText}`,
  "insertBefore": (args) => `Vstavi pred ${args.itemText}`,
  "insertBetween": (args) => `Vstavi med ${args.beforeItemText} in ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/sr-SP.mjs
var $a0caa33f1e264489$exports = {};
$a0caa33f1e264489$exports = {
  "dragDescriptionKeyboard": `Pritisnite Enter da biste zapo\u010Deli prevla\u010Denje.`,
  "dragDescriptionKeyboardAlt": `Pritisnite Alt + Enter da biste zapo\u010Deli prevla\u010Denje.`,
  "dragDescriptionLongPress": `Pritisnite dugo da biste zapo\u010Deli prevla\u010Denje.`,
  "dragDescriptionTouch": `Dvaput dodirnite da biste zapo\u010Deli prevla\u010Denje.`,
  "dragDescriptionVirtual": `Kliknite da biste zapo\u010Deli prevla\u010Denje.`,
  "dragItem": (args) => `Prevucite ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Prevucite ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} izabranu stavku`,
    other: () => `${formatter.number(args.count)} izabrane stavke`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Pritisnite Enter da biste prevukli ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} izabranu stavku`,
    other: () => `${formatter.number(args.count)} izabranih stavki`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Pritisnite Alt + Enter da biste prevukli ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} izabranu stavku`,
    other: () => `${formatter.number(args.count)} izabranih stavki`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Pritisnite dugo da biste prevukli ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} izabranu stavku`,
    other: () => `${formatter.number(args.count)} izabranih stavki`
  })}.`,
  "dragStartedKeyboard": `Prevla\u010Denje je zapo\u010Deto. Pritisnite Tab da biste oti\u0161li do cilja za otpu\u0161tanje, zatim pritisnite Enter za ispu\u0161tanje ili pritisnite Escape za otkazivanje.`,
  "dragStartedTouch": `Prevla\u010Denje je zapo\u010Deto. Idite do cilja za otpu\u0161tanje, a zatim dvaput dodirnite za otpu\u0161tanje.`,
  "dragStartedVirtual": `Prevla\u010Denje je zapo\u010Deto. Idite do cilja za otpu\u0161tanje, a zatim kliknite ili pritinite Enter za otpu\u0161tanje.`,
  "dropCanceled": `Otpu\u0161tanje je otkazano.`,
  "dropComplete": `Prevla\u010Denje je zavr\u0161eno.`,
  "dropDescriptionKeyboard": `Pritisnite Enter da biste otpustili. Pritisnite Escape da biste otkazali prevla\u010Denje.`,
  "dropDescriptionTouch": `Dvaput dodirnite za otpu\u0161tanje.`,
  "dropDescriptionVirtual": `Kliknite za otpu\u0161tanje.`,
  "dropIndicator": `Indikator otpu\u0161tanja`,
  "dropOnItem": (args) => `Otpusti na ${args.itemText}`,
  "dropOnRoot": `Otpusti na`,
  "endDragKeyboard": `Prevla\u010Denje u toku. Pritisnite Enter da biste otkazali prevla\u010Denje.`,
  "endDragTouch": `Prevla\u010Denje u toku. Dvaput dodirnite da biste otkazali prevla\u010Denje.`,
  "endDragVirtual": `Prevla\u010Denje u toku. Kliknite da biste otkazali prevla\u010Denje.`,
  "insertAfter": (args) => `Umetnite posle ${args.itemText}`,
  "insertBefore": (args) => `Umetnite ispred ${args.itemText}`,
  "insertBetween": (args) => `Umetnite izme\u0111u ${args.beforeItemText} i ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/sv-SE.mjs
var $d576b66176f5c0ff$exports = {};
$d576b66176f5c0ff$exports = {
  "dragDescriptionKeyboard": `Tryck p\xE5 enter f\xF6r att b\xF6rja dra.`,
  "dragDescriptionKeyboardAlt": `Tryck p\xE5 Alt + Retur f\xF6r att b\xF6rja dra.`,
  "dragDescriptionLongPress": `Tryck l\xE4nge f\xF6r att b\xF6rja dra.`,
  "dragDescriptionTouch": `Dubbeltryck f\xF6r att b\xF6rja dra.`,
  "dragDescriptionVirtual": `Klicka f\xF6r att b\xF6rja dra.`,
  "dragItem": (args) => `Dra ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `Dra ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} valt objekt`,
    other: () => `${formatter.number(args.count)} valda objekt`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `Tryck p\xE5 Retur f\xF6r att dra ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} markerat objekt`,
    other: () => `${formatter.number(args.count)} markerade objekt`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `Tryck p\xE5 Alt + Retur f\xF6r att dra ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} markerat objekt`,
    other: () => `${formatter.number(args.count)} markerade objekt`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `Tryck l\xE4nge f\xF6r att dra ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} markerat objekt`,
    other: () => `${formatter.number(args.count)} markerade objekt`
  })}.`,
  "dragStartedKeyboard": `B\xF6rja dra. Tryck p\xE5 tabb f\xF6r att navigera till m\xE5let, tryck p\xE5 enter f\xF6r att sl\xE4ppa eller p\xE5 escape f\xF6r att avbryta.`,
  "dragStartedTouch": `B\xF6rja dra. Navigera till ett m\xE5l och dubbeltryck f\xF6r att sl\xE4ppa.`,
  "dragStartedVirtual": `B\xF6rja dra. Navigera till ett m\xE5l och klicka eller tryck p\xE5 enter f\xF6r att sl\xE4ppa.`,
  "dropCanceled": `Sl\xE4pp\xE5tg\xE4rd avbr\xF6ts.`,
  "dropComplete": `Sl\xE4pp\xE5tg\xE4rd klar.`,
  "dropDescriptionKeyboard": `Tryck p\xE5 enter f\xF6r att sl\xE4ppa. Tryck p\xE5 escape f\xF6r att avbryta drag\xE5tg\xE4rd.`,
  "dropDescriptionTouch": `Dubbeltryck f\xF6r att sl\xE4ppa.`,
  "dropDescriptionVirtual": `Klicka f\xF6r att sl\xE4ppa.`,
  "dropIndicator": `sl\xE4ppindikator`,
  "dropOnItem": (args) => `Sl\xE4pp p\xE5 ${args.itemText}`,
  "dropOnRoot": `Sl\xE4pp p\xE5`,
  "endDragKeyboard": `Drar. Tryck p\xE5 enter f\xF6r att avbryta drag\xE5tg\xE4rd.`,
  "endDragTouch": `Drar. Dubbeltryck f\xF6r att avbryta drag\xE5tg\xE4rd.`,
  "endDragVirtual": `Drar. Klicka f\xF6r att avbryta drag\xE5tg\xE4rd.`,
  "insertAfter": (args) => `Infoga efter ${args.itemText}`,
  "insertBefore": (args) => `Infoga f\xF6re ${args.itemText}`,
  "insertBetween": (args) => `Infoga mellan ${args.beforeItemText} och ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/tr-TR.mjs
var $0681f168c13d8f2a$exports = {};
$0681f168c13d8f2a$exports = {
  "dragDescriptionKeyboard": `S\xFCr\xFCklemeyi ba\u015Flatmak i\xE7in Enter'a bas\u0131n.`,
  "dragDescriptionKeyboardAlt": `S\xFCr\xFCklemeyi ba\u015Flatmak i\xE7in Alt + Enter'a bas\u0131n.`,
  "dragDescriptionLongPress": `S\xFCr\xFCklemeye ba\u015Flamak i\xE7in uzun bas\u0131n.`,
  "dragDescriptionTouch": `S\xFCr\xFCklemeyi ba\u015Flatmak i\xE7in \xE7ift t\u0131klay\u0131n.`,
  "dragDescriptionVirtual": `S\xFCr\xFCklemeyi ba\u015Flatmak i\xE7in t\u0131klay\u0131n.`,
  "dragItem": (args) => `${args.itemText}\u2019i s\xFCr\xFCkle`,
  "dragSelectedItems": (args, formatter) => `S\xFCr\xFCkle ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} se\xE7ili \xF6ge`,
    other: () => `${formatter.number(args.count)} se\xE7ili \xF6ge`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} se\xE7ilmi\u015F \xF6\u011Fe`,
    other: () => `${formatter.number(args.count)} se\xE7ilmi\u015F \xF6\u011Fe`
  })} \xF6\u011Fesini s\xFCr\xFCklemek i\xE7in Enter'a bas\u0131n.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} se\xE7ilmi\u015F \xF6\u011Fe`,
    other: () => `${formatter.number(args.count)} se\xE7ilmi\u015F \xF6\u011Fe`
  })} \xF6\u011Fesini s\xFCr\xFCklemek i\xE7in Alt + Enter tu\u015Funa bas\u0131n.`,
  "dragSelectedLongPress": (args, formatter) => `${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} se\xE7ilmi\u015F \xF6\u011Fe`,
    other: () => `${formatter.number(args.count)} se\xE7ilmi\u015F \xF6\u011Fe`
  })} \xF6\u011Fesini s\xFCr\xFCklemek i\xE7in uzun bas\u0131n.`,
  "dragStartedKeyboard": `S\xFCr\xFCkleme ba\u015Flat\u0131ld\u0131. Bir b\u0131rakma hedefine gitmek i\xE7in Tab\u2019a bas\u0131n, ard\u0131ndan b\u0131rakmak i\xE7in Enter\u2019a bas\u0131n veya iptal etmek i\xE7in Escape\u2019e bas\u0131n.`,
  "dragStartedTouch": `S\xFCr\xFCkleme ba\u015Flat\u0131ld\u0131. Bir b\u0131rakma hedefine gidin, ard\u0131ndan b\u0131rakmak i\xE7in \xE7ift t\u0131klay\u0131n.`,
  "dragStartedVirtual": `S\xFCr\xFCkleme ba\u015Flat\u0131ld\u0131. Bir b\u0131rakma hedefine gidin, ard\u0131ndan b\u0131rakmak i\xE7in Enter\u2019a t\u0131klay\u0131n veya bas\u0131n.`,
  "dropCanceled": `B\u0131rakma iptal edildi.`,
  "dropComplete": `B\u0131rakma tamamland\u0131.`,
  "dropDescriptionKeyboard": `B\u0131rakmak i\xE7in Enter'a bas\u0131n. S\xFCr\xFCklemeyi iptal etmek i\xE7in Escape'e bas\u0131n.`,
  "dropDescriptionTouch": `B\u0131rakmak i\xE7in \xE7ift t\u0131klay\u0131n.`,
  "dropDescriptionVirtual": `B\u0131rakmak i\xE7in t\u0131klay\u0131n.`,
  "dropIndicator": `b\u0131rakma g\xF6stergesi`,
  "dropOnItem": (args) => `${args.itemText} \xFCzerine b\u0131rak`,
  "dropOnRoot": `B\u0131rak\u0131n`,
  "endDragKeyboard": `S\xFCr\xFCkleme. S\xFCr\xFCklemeyi iptal etmek i\xE7in Enter'a bas\u0131n.`,
  "endDragTouch": `S\xFCr\xFCkleme. S\xFCr\xFCklemeyi iptal etmek i\xE7in \xE7ift t\u0131klay\u0131n.`,
  "endDragVirtual": `S\xFCr\xFCkleme. S\xFCr\xFCklemeyi iptal etmek i\xE7in t\u0131klay\u0131n.`,
  "insertAfter": (args) => `${args.itemText}\u2019den sonra gir`,
  "insertBefore": (args) => `${args.itemText}\u2019den \xF6nce gir`,
  "insertBetween": (args) => `${args.beforeItemText} ve ${args.afterItemText} aras\u0131na gir`
};

// node_modules/@react-aria/dnd/dist/uk-UA.mjs
var $2bfbc1f42c1cf5a7$exports = {};
$2bfbc1f42c1cf5a7$exports = {
  "dragDescriptionKeyboard": `\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Enter, \u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F.`,
  "dragDescriptionKeyboardAlt": `\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Alt + Enter, \u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F.`,
  "dragDescriptionLongPress": `\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0456 \u0443\u0442\u0440\u0438\u043C\u0443\u0439\u0442\u0435, \u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F.`,
  "dragDescriptionTouch": `\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0434\u0432\u0456\u0447\u0456, \u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F.`,
  "dragDescriptionVirtual": `\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u043E\u0447\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F.`,
  "dragItem": (args) => `\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438 ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0456\u0442\u044C ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0439 \u0435\u043B\u0435\u043C\u0435\u043D\u0442`,
    other: () => `${formatter.number(args.count)} \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0445 \u0435\u043B\u0435\u043C`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Enter, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0439 \u0435\u043B\u0435\u043C\u0435\u043D\u0442`,
    other: () => `${formatter.number(args.count)} \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0445 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438(-\u0456\u0432)`
  })}.`,
  "dragSelectedKeyboardAlt": (args, formatter) => `\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Alt + Enter, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0439 \u0435\u043B\u0435\u043C\u0435\u043D\u0442`,
    other: () => `${formatter.number(args.count)} \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0445 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438(-\u0456\u0432)`
  })}.`,
  "dragSelectedLongPress": (args, formatter) => `\u0423\u0442\u0440\u0438\u043C\u0443\u0439\u0442\u0435, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0439 \u0435\u043B\u0435\u043C\u0435\u043D\u0442`,
    other: () => `${formatter.number(args.count)} \u0432\u0438\u0431\u0440\u0430\u043D\u0438\u0445 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438(-\u0456\u0432)`
  })}.`,
  "dragStartedKeyboard": `\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0447\u0430\u043B\u043E\u0441\u044F. \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Tab, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u0434\u043E \u0446\u0456\u043B\u0456 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F, \u043F\u043E\u0442\u0456\u043C \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Enter, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438, \u0430\u0431\u043E Escape, \u0449\u043E\u0431 \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438.`,
  "dragStartedTouch": `\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0447\u0430\u043B\u043E\u0441\u044F. \u041F\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044C \u0434\u043E \u0446\u0456\u043B\u0456 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F, \u043F\u043E\u0442\u0456\u043C \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0434\u0432\u0456\u0447\u0456, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438.`,
  "dragStartedVirtual": `\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u043E\u0447\u0430\u043B\u043E\u0441\u044F. \u041F\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044C \u0434\u043E \u0446\u0456\u043B\u0456 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F, \u043F\u043E\u0442\u0456\u043C \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Enter, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438.`,
  "dropCanceled": `\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043A\u0430\u0441\u043E\u0432\u0430\u043D\u043E.`,
  "dropComplete": `\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043E.`,
  "dropDescriptionKeyboard": `\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Enter, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438. \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Escape, \u0449\u043E\u0431 \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F.`,
  "dropDescriptionTouch": `\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0434\u0432\u0456\u0447\u0456, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438.`,
  "dropDescriptionVirtual": `\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438.`,
  "dropIndicator": `\u0456\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F`,
  "dropOnItem": (args) => `\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438 \u043D\u0430 ${args.itemText}`,
  "dropOnRoot": `\u041F\u0435\u0440\u0435\u0442\u044F\u0433\u043D\u0443\u0442\u0438 \u043D\u0430`,
  "endDragKeyboard": `\u0422\u0440\u0438\u0432\u0430\u0454 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F. \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C Enter, \u0449\u043E\u0431 \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F.`,
  "endDragTouch": `\u0422\u0440\u0438\u0432\u0430\u0454 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F. \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u0434\u0432\u0456\u0447\u0456, \u0449\u043E\u0431 \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F.`,
  "endDragVirtual": `\u0422\u0440\u0438\u0432\u0430\u0454 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F. \u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0443\u0432\u0430\u043D\u043D\u044F.`,
  "insertAfter": (args) => `\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043F\u0456\u0441\u043B\u044F ${args.itemText}`,
  "insertBefore": (args) => `\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043F\u0435\u0440\u0435\u0434 ${args.itemText}`,
  "insertBetween": (args) => `\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043C\u0456\u0436 ${args.beforeItemText} \u0456 ${args.afterItemText}`
};

// node_modules/@react-aria/dnd/dist/zh-CN.mjs
var $d0f488d433b55b8a$exports = {};
$d0f488d433b55b8a$exports = {
  "dragDescriptionKeyboard": `\u6309 Enter \u5F00\u59CB\u62D6\u52A8\u3002`,
  "dragDescriptionKeyboardAlt": `\u6309 Alt + Enter \u5F00\u59CB\u62D6\u52A8\u3002`,
  "dragDescriptionLongPress": `\u957F\u6309\u4EE5\u5F00\u59CB\u62D6\u52A8\u3002`,
  "dragDescriptionTouch": `\u53CC\u51FB\u5F00\u59CB\u62D6\u52A8\u3002`,
  "dragDescriptionVirtual": `\u5355\u51FB\u5F00\u59CB\u62D6\u52A8\u3002`,
  "dragItem": (args) => `\u62D6\u52A8 ${args.itemText}`,
  "dragSelectedItems": (args, formatter) => `\u62D6\u52A8 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u9009\u4E2D\u9879\u76EE`,
    other: () => `${formatter.number(args.count)} \u9009\u4E2D\u9879\u76EE`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `\u6309 Enter \u4EE5\u62D6\u52A8 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u4E2A\u9009\u5B9A\u9879`,
    other: () => `${formatter.number(args.count)} \u4E2A\u9009\u5B9A\u9879`
  })}\u3002`,
  "dragSelectedKeyboardAlt": (args, formatter) => `\u6309 Alt + Enter \u4EE5\u62D6\u52A8 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u4E2A\u9009\u5B9A\u9879`,
    other: () => `${formatter.number(args.count)} \u4E2A\u9009\u5B9A\u9879`
  })}\u3002`,
  "dragSelectedLongPress": (args, formatter) => `\u957F\u6309\u4EE5\u62D6\u52A8 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u4E2A\u9009\u5B9A\u9879`,
    other: () => `${formatter.number(args.count)} \u4E2A\u9009\u5B9A\u9879`
  })}\u3002`,
  "dragStartedKeyboard": `\u5DF2\u5F00\u59CB\u62D6\u52A8\u3002\u6309 Tab \u5BFC\u822A\u5230\u653E\u7F6E\u76EE\u6807\uFF0C\u7136\u540E\u6309 Enter \u653E\u7F6E\u6216\u6309 Escape \u53D6\u6D88\u3002`,
  "dragStartedTouch": `\u5DF2\u5F00\u59CB\u62D6\u52A8\u3002\u5BFC\u822A\u5230\u653E\u7F6E\u76EE\u6807\uFF0C\u7136\u540E\u53CC\u51FB\u653E\u7F6E\u3002`,
  "dragStartedVirtual": `\u5DF2\u5F00\u59CB\u62D6\u52A8\u3002\u5BFC\u822A\u5230\u653E\u7F6E\u76EE\u6807\uFF0C\u7136\u540E\u5355\u51FB\u6216\u6309 Enter \u653E\u7F6E\u3002`,
  "dropCanceled": `\u653E\u7F6E\u5DF2\u53D6\u6D88\u3002`,
  "dropComplete": `\u653E\u7F6E\u5DF2\u5B8C\u6210\u3002`,
  "dropDescriptionKeyboard": `\u6309 Enter \u653E\u7F6E\u3002\u6309 Escape \u53D6\u6D88\u62D6\u52A8\u3002`,
  "dropDescriptionTouch": `\u53CC\u51FB\u653E\u7F6E\u3002`,
  "dropDescriptionVirtual": `\u5355\u51FB\u653E\u7F6E\u3002`,
  "dropIndicator": `\u653E\u7F6E\u6807\u8BB0`,
  "dropOnItem": (args) => `\u653E\u7F6E\u4E8E ${args.itemText}`,
  "dropOnRoot": `\u653E\u7F6E\u4E8E`,
  "endDragKeyboard": `\u6B63\u5728\u62D6\u52A8\u3002\u6309 Enter \u53D6\u6D88\u62D6\u52A8\u3002`,
  "endDragTouch": `\u6B63\u5728\u62D6\u52A8\u3002\u53CC\u51FB\u53D6\u6D88\u62D6\u52A8\u3002`,
  "endDragVirtual": `\u6B63\u5728\u62D6\u52A8\u3002\u5355\u51FB\u53D6\u6D88\u62D6\u52A8\u3002`,
  "insertAfter": (args) => `\u63D2\u5165\u5230 ${args.itemText} \u4E4B\u540E`,
  "insertBefore": (args) => `\u63D2\u5165\u5230 ${args.itemText} \u4E4B\u524D`,
  "insertBetween": (args) => `\u63D2\u5165\u5230 ${args.beforeItemText} \u548C ${args.afterItemText} \u4E4B\u95F4`
};

// node_modules/@react-aria/dnd/dist/zh-TW.mjs
var $46168b0dce85301e$exports = {};
$46168b0dce85301e$exports = {
  "dragDescriptionKeyboard": `\u6309 Enter \u9375\u4EE5\u958B\u59CB\u62D6\u66F3\u3002`,
  "dragDescriptionKeyboardAlt": `\u6309 Alt+Enter \u9375\u4EE5\u958B\u59CB\u62D6\u66F3\u3002`,
  "dragDescriptionLongPress": `\u9577\u6309\u4EE5\u958B\u59CB\u62D6\u66F3\u3002`,
  "dragDescriptionTouch": `\u8F15\u9EDE\u5169\u4E0B\u4EE5\u958B\u59CB\u62D6\u66F3\u3002`,
  "dragDescriptionVirtual": `\u6309\u4E00\u4E0B\u6ED1\u9F20\u4EE5\u958B\u59CB\u62D6\u66F3\u3002`,
  "dragItem": (args) => `\u62D6\u66F3\u300C${args.itemText}\u300D`,
  "dragSelectedItems": (args, formatter) => `\u62D6\u66F3 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u500B\u9078\u5B9A\u9805\u76EE`,
    other: () => `${formatter.number(args.count)} \u500B\u9078\u5B9A\u9805\u76EE`
  })}`,
  "dragSelectedKeyboard": (args, formatter) => `\u6309 Enter \u9375\u4EE5\u62D6\u66F3 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u500B\u9078\u5B9A\u9805\u76EE`,
    other: () => `${formatter.number(args.count)} \u500B\u9078\u5B9A\u9805\u76EE`
  })}\u3002`,
  "dragSelectedKeyboardAlt": (args, formatter) => `\u6309 Alt+Enter \u9375\u4EE5\u62D6\u66F3 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u500B\u9078\u5B9A\u9805\u76EE`,
    other: () => `${formatter.number(args.count)} \u500B\u9078\u5B9A\u9805\u76EE`
  })}\u3002`,
  "dragSelectedLongPress": (args, formatter) => `\u9577\u6309\u4EE5\u62D6\u66F3 ${formatter.plural(args.count, {
    one: () => `${formatter.number(args.count)} \u500B\u9078\u5B9A\u9805\u76EE`,
    other: () => `${formatter.number(args.count)} \u500B\u9078\u5B9A\u9805\u76EE`
  })}\u3002`,
  "dragStartedKeyboard": `\u5DF2\u958B\u59CB\u62D6\u66F3\u3002\u6309 Tab \u9375\u4EE5\u700F\u89BD\u81F3\u653E\u7F6E\u76EE\u6A19\uFF0C\u7136\u5F8C\u6309 Enter \u9375\u4EE5\u653E\u7F6E\uFF0C\u6216\u6309 Escape \u9375\u4EE5\u53D6\u6D88\u3002`,
  "dragStartedTouch": `\u5DF2\u958B\u59CB\u62D6\u66F3\u3002\u700F\u89BD\u81F3\u653E\u7F6E\u76EE\u6A19\uFF0C\u7136\u5F8C\u8F15\u9EDE\u5169\u4E0B\u4EE5\u653E\u7F6E\u3002`,
  "dragStartedVirtual": `\u5DF2\u958B\u59CB\u62D6\u66F3\u3002\u700F\u89BD\u81F3\u653E\u7F6E\u76EE\u6A19\uFF0C\u7136\u5F8C\u6309\u4E00\u4E0B\u6ED1\u9F20\u6216\u6309 Enter \u9375\u4EE5\u653E\u7F6E\u3002`,
  "dropCanceled": `\u653E\u7F6E\u5DF2\u53D6\u6D88\u3002`,
  "dropComplete": `\u653E\u7F6E\u5DF2\u5B8C\u6210\u3002`,
  "dropDescriptionKeyboard": `\u6309 Enter \u9375\u4EE5\u653E\u7F6E\u3002\u6309 Escape \u9375\u4EE5\u53D6\u6D88\u62D6\u66F3\u3002`,
  "dropDescriptionTouch": `\u8F15\u9EDE\u5169\u4E0B\u4EE5\u653E\u7F6E\u3002`,
  "dropDescriptionVirtual": `\u6309\u4E00\u4E0B\u6ED1\u9F20\u4EE5\u653E\u7F6E\u3002`,
  "dropIndicator": `\u653E\u7F6E\u6307\u793A\u5668`,
  "dropOnItem": (args) => `\u653E\u7F6E\u5728\u300C${args.itemText}\u300D\u4E0A`,
  "dropOnRoot": `\u653E\u7F6E\u5728`,
  "endDragKeyboard": `\u62D6\u66F3\u4E2D\u3002\u6309 Enter \u9375\u4EE5\u53D6\u6D88\u62D6\u66F3\u3002`,
  "endDragTouch": `\u62D6\u66F3\u4E2D\u3002\u8F15\u9EDE\u5169\u4E0B\u4EE5\u53D6\u6D88\u62D6\u66F3\u3002`,
  "endDragVirtual": `\u62D6\u66F3\u4E2D\u3002\u6309\u4E00\u4E0B\u6ED1\u9F20\u4EE5\u53D6\u6D88\u62D6\u66F3\u3002`,
  "insertAfter": (args) => `\u63D2\u5165\u81F3\u300C${args.itemText}\u300D\u4E4B\u5F8C`,
  "insertBefore": (args) => `\u63D2\u5165\u81F3\u300C${args.itemText}\u300D\u4E4B\u524D`,
  "insertBetween": (args) => `\u63D2\u5165\u81F3\u300C${args.beforeItemText}\u300D\u548C\u300C${args.afterItemText}\u300D\u4E4B\u9593`
};

// node_modules/@react-aria/dnd/dist/import.mjs
var import_react6 = __toESM(require_react(), 1);
var import_react_dom2 = __toESM(require_react_dom(), 1);
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $103790afe9474d1c$export$60b7b4bcf3903d8e;
(function(DROP_OPERATION) {
  DROP_OPERATION[DROP_OPERATION["none"] = 0] = "none";
  DROP_OPERATION[DROP_OPERATION["cancel"] = 0] = "cancel";
  DROP_OPERATION[DROP_OPERATION["move"] = 1] = "move";
  DROP_OPERATION[DROP_OPERATION["copy"] = 2] = "copy";
  DROP_OPERATION[DROP_OPERATION["link"] = 4] = "link";
  DROP_OPERATION[DROP_OPERATION["all"] = 7] = "all";
})($103790afe9474d1c$export$60b7b4bcf3903d8e || ($103790afe9474d1c$export$60b7b4bcf3903d8e = {}));
var $103790afe9474d1c$export$9bbdfc78cf083e16 = {
  ...$103790afe9474d1c$export$60b7b4bcf3903d8e,
  copyMove: 3,
  copyLink: 6,
  linkMove: 5,
  all: 7,
  uninitialized: 7
};
var $103790afe9474d1c$export$dd0165308d8bff45 = $103790afe9474d1c$var$invert($103790afe9474d1c$export$9bbdfc78cf083e16);
$103790afe9474d1c$export$dd0165308d8bff45[7] = "all";
var $103790afe9474d1c$export$d7ebf00f36b7a95e = $103790afe9474d1c$var$invert($103790afe9474d1c$export$60b7b4bcf3903d8e);
var $103790afe9474d1c$export$608ecc6f1b23c35d = {
  none: "cancel",
  link: "link",
  copy: "copy",
  move: "move"
};
var $103790afe9474d1c$export$5eacb0769d26d3b2 = $103790afe9474d1c$var$invert($103790afe9474d1c$export$608ecc6f1b23c35d);
function $103790afe9474d1c$var$invert(object) {
  let res = {};
  for (let key in object)
    res[object[key]] = key;
  return res;
}
var $103790afe9474d1c$export$4a7729b856e9a690 = /* @__PURE__ */ new Set([
  "text/plain",
  "text/uri-list",
  "text/html"
]);
var $103790afe9474d1c$export$fd9f9fc120c5402d = "application/vnd.react-aria.items+json";
var $103790afe9474d1c$export$f8fc6581787339b3 = "application/octet-stream";
var $7252cd45fc48c07c$export$990fced5dfac2637 = Symbol();
function $7252cd45fc48c07c$export$e1d41611756c6326(items) {
  let types = /* @__PURE__ */ new Set();
  for (let item of items)
    for (let type of Object.keys(item))
      types.add(type);
  return types;
}
function $7252cd45fc48c07c$var$mapModality(modality) {
  if (!modality)
    modality = "virtual";
  if (modality === "pointer")
    modality = "virtual";
  if (modality === "virtual" && typeof window !== "undefined" && "ontouchstart" in window)
    modality = "touch";
  return modality;
}
function $7252cd45fc48c07c$export$49bac5d6d4b352ea() {
  return $7252cd45fc48c07c$var$mapModality((0, $507fabe10e71c6fb$export$98e20ec92f614cfe)());
}
function $7252cd45fc48c07c$export$1fb2158d224b542c() {
  return $7252cd45fc48c07c$var$mapModality((0, $507fabe10e71c6fb$export$630ff653c5ada6a9)());
}
function $7252cd45fc48c07c$export$f9c1490890ddd063(dataTransfer, items) {
  let groupedByType = /* @__PURE__ */ new Map();
  let needsCustomData = false;
  let customData = [];
  for (let item of items) {
    let types = Object.keys(item);
    if (types.length > 1)
      needsCustomData = true;
    let dataByType = {};
    for (let type of types) {
      let typeItems = groupedByType.get(type);
      if (!typeItems) {
        typeItems = [];
        groupedByType.set(type, typeItems);
      } else
        needsCustomData = true;
      let data = item[type];
      dataByType[type] = data;
      typeItems.push(data);
    }
    customData.push(dataByType);
  }
  for (let [type, items2] of groupedByType)
    if ((0, $103790afe9474d1c$export$4a7729b856e9a690).has(type)) {
      let data = items2.join("\n");
      dataTransfer.items.add(data, type);
    } else
      dataTransfer.items.add(items2[0], type);
  if (needsCustomData) {
    let data = JSON.stringify(customData);
    dataTransfer.items.add(data, (0, $103790afe9474d1c$export$fd9f9fc120c5402d));
  }
}
var $7252cd45fc48c07c$export$7f04ce188c91447c = class {
  has(type) {
    if (this.includesUnknownTypes || type === $7252cd45fc48c07c$export$990fced5dfac2637 && this.types.has((0, $103790afe9474d1c$export$f8fc6581787339b3)))
      return true;
    return typeof type === "string" && this.types.has(type);
  }
  constructor(dataTransfer) {
    this.types = /* @__PURE__ */ new Set();
    let hasFiles = false;
    for (let item of dataTransfer.items)
      if (item.type !== (0, $103790afe9474d1c$export$fd9f9fc120c5402d)) {
        if (item.kind === "file")
          hasFiles = true;
        if (item.type)
          this.types.add(item.type);
        else
          this.types.add((0, $103790afe9474d1c$export$f8fc6581787339b3));
      }
    this.includesUnknownTypes = !hasFiles && dataTransfer.types.includes("Files");
  }
};
function $7252cd45fc48c07c$export$d9e760437831f8b3(dataTransfer) {
  let items = [];
  let hasCustomType = false;
  if (dataTransfer.types.includes((0, $103790afe9474d1c$export$fd9f9fc120c5402d)))
    try {
      let data = dataTransfer.getData((0, $103790afe9474d1c$export$fd9f9fc120c5402d));
      let parsed = JSON.parse(data);
      for (let item of parsed)
        items.push({
          kind: "text",
          types: new Set(Object.keys(item)),
          getText: (type) => Promise.resolve(item[type])
        });
      hasCustomType = true;
    } catch (e) {
    }
  if (!hasCustomType) {
    let stringItems = /* @__PURE__ */ new Map();
    for (let item of dataTransfer.items) {
      if (item.kind === "string")
        stringItems.set(item.type || (0, $103790afe9474d1c$export$f8fc6581787339b3), dataTransfer.getData(item.type));
      else if (item.kind === "file") {
        if (typeof item.webkitGetAsEntry === "function") {
          let entry = item.webkitGetAsEntry();
          if (!entry)
            continue;
          if (entry.isFile)
            items.push($7252cd45fc48c07c$var$createFileItem(item.getAsFile()));
          else if (entry.isDirectory)
            items.push($7252cd45fc48c07c$var$createDirectoryItem(entry));
        } else
          items.push($7252cd45fc48c07c$var$createFileItem(item.getAsFile()));
      }
    }
    if (stringItems.size > 0)
      items.push({
        kind: "text",
        types: new Set(stringItems.keys()),
        getText: (type) => Promise.resolve(stringItems.get(type))
      });
  }
  return items;
}
function $7252cd45fc48c07c$var$blobToString(blob) {
  if (typeof blob.text === "function")
    return blob.text();
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsText(blob);
  });
}
function $7252cd45fc48c07c$var$createFileItem(file) {
  return {
    kind: "file",
    type: file.type || (0, $103790afe9474d1c$export$f8fc6581787339b3),
    name: file.name,
    getText: () => $7252cd45fc48c07c$var$blobToString(file),
    getFile: () => Promise.resolve(file)
  };
}
function $7252cd45fc48c07c$var$createDirectoryItem(entry) {
  return {
    kind: "directory",
    name: entry.name,
    getEntries: () => $7252cd45fc48c07c$var$getEntries(entry)
  };
}
async function* $7252cd45fc48c07c$var$getEntries(item) {
  let reader = item.createReader();
  let entries;
  do {
    entries = await new Promise((resolve, reject) => {
      reader.readEntries(resolve, reject);
    });
    for (let entry of entries) {
      if (entry.isFile) {
        let file = await $7252cd45fc48c07c$var$getEntryFile(entry);
        yield $7252cd45fc48c07c$var$createFileItem(file);
      } else if (entry.isDirectory)
        yield $7252cd45fc48c07c$var$createDirectoryItem(entry);
    }
  } while (entries.length > 0);
}
function $7252cd45fc48c07c$var$getEntryFile(entry) {
  return new Promise((resolve, reject) => entry.file(resolve, reject));
}
var $7252cd45fc48c07c$export$6ca6700462636d0b = {
  draggingKeys: /* @__PURE__ */ new Set()
};
function $7252cd45fc48c07c$export$6c10d32b362bfa5f(state) {
  $7252cd45fc48c07c$export$6ca6700462636d0b = state;
}
var $7252cd45fc48c07c$export$8e6636520ac15722;
function $7252cd45fc48c07c$export$64f52ed7349ddb84(dropEffect) {
  $7252cd45fc48c07c$export$8e6636520ac15722 = dropEffect;
}
var $7252cd45fc48c07c$export$f0130eb70b6347b8 = (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).none;
function $7252cd45fc48c07c$export$6539bc8c3a0a2d67(o) {
  $7252cd45fc48c07c$export$f0130eb70b6347b8 = o;
}
var $67560de7c78cb232$var$dropTargets = /* @__PURE__ */ new Map();
var $67560de7c78cb232$var$dropItems = /* @__PURE__ */ new Map();
var $67560de7c78cb232$var$dragSession = null;
var $67560de7c78cb232$var$subscriptions = /* @__PURE__ */ new Set();
function $67560de7c78cb232$export$c28d9fb4a54e471a(target) {
  $67560de7c78cb232$var$dropTargets.set(target.element, target);
  $67560de7c78cb232$var$dragSession === null || $67560de7c78cb232$var$dragSession === void 0 ? void 0 : $67560de7c78cb232$var$dragSession.updateValidDropTargets();
  return () => {
    $67560de7c78cb232$var$dropTargets.delete(target.element);
    $67560de7c78cb232$var$dragSession === null || $67560de7c78cb232$var$dragSession === void 0 ? void 0 : $67560de7c78cb232$var$dragSession.updateValidDropTargets();
  };
}
function $67560de7c78cb232$export$549dbcf8649bf3b2(target, stringFormatter) {
  if ($67560de7c78cb232$var$dragSession)
    throw new Error("Cannot begin dragging while already dragging");
  $67560de7c78cb232$var$dragSession = new $67560de7c78cb232$var$DragSession(target, stringFormatter);
  requestAnimationFrame(() => {
    $67560de7c78cb232$var$dragSession.setup();
    if ((0, $7252cd45fc48c07c$export$1fb2158d224b542c)() === "keyboard")
      $67560de7c78cb232$var$dragSession.next();
  });
  for (let cb of $67560de7c78cb232$var$subscriptions)
    cb();
}
function $67560de7c78cb232$export$418e185dd3f1b968() {
  let [session, setSession] = (0, import_react6.useState)($67560de7c78cb232$var$dragSession);
  (0, import_react6.useEffect)(() => {
    let cb = () => setSession($67560de7c78cb232$var$dragSession);
    $67560de7c78cb232$var$subscriptions.add(cb);
    return () => {
      $67560de7c78cb232$var$subscriptions.delete(cb);
    };
  }, []);
  return session;
}
function $67560de7c78cb232$var$endDragging() {
  $67560de7c78cb232$var$dragSession = null;
  for (let cb of $67560de7c78cb232$var$subscriptions)
    cb();
}
var $67560de7c78cb232$var$CANCELED_EVENTS = [
  "pointerdown",
  "pointermove",
  "pointerenter",
  "pointerleave",
  "pointerover",
  "pointerout",
  "pointerup",
  "mousedown",
  "mousemove",
  "mouseenter",
  "mouseleave",
  "mouseover",
  "mouseout",
  "mouseup",
  "touchstart",
  "touchmove",
  "touchend",
  "focusin",
  "focusout"
];
var $67560de7c78cb232$var$CLICK_EVENTS = [
  "pointerup",
  "mouseup",
  "touchend"
];
var $67560de7c78cb232$var$MESSAGES = {
  keyboard: "dragStartedKeyboard",
  touch: "dragStartedTouch",
  virtual: "dragStartedVirtual"
};
var $67560de7c78cb232$var$DragSession = class {
  setup() {
    document.addEventListener("keydown", this.onKeyDown, true);
    document.addEventListener("keyup", this.onKeyUp, true);
    window.addEventListener("focus", this.onFocus, true);
    window.addEventListener("blur", this.onBlur, true);
    document.addEventListener("click", this.onClick, true);
    document.addEventListener("pointerdown", this.onPointerDown, true);
    for (let event of $67560de7c78cb232$var$CANCELED_EVENTS)
      document.addEventListener(event, this.cancelEvent, true);
    this.mutationObserver = new MutationObserver(() => this.updateValidDropTargets());
    this.updateValidDropTargets();
    (0, $319e236875307eab$export$a9b970dcc4ae71a9)(this.stringFormatter.format($67560de7c78cb232$var$MESSAGES[(0, $7252cd45fc48c07c$export$1fb2158d224b542c)()]));
  }
  teardown() {
    document.removeEventListener("keydown", this.onKeyDown, true);
    document.removeEventListener("keyup", this.onKeyUp, true);
    window.removeEventListener("focus", this.onFocus, true);
    window.removeEventListener("blur", this.onBlur, true);
    document.removeEventListener("click", this.onClick, true);
    document.removeEventListener("pointerdown", this.onPointerDown, true);
    for (let event of $67560de7c78cb232$var$CANCELED_EVENTS)
      document.removeEventListener(event, this.cancelEvent, true);
    this.mutationObserver.disconnect();
    this.restoreAriaHidden();
  }
  onKeyDown(e) {
    var _this_currentDropTarget;
    this.cancelEvent(e);
    if (e.key === "Escape") {
      this.cancel();
      return;
    }
    if (e.key === "Tab" && !(e.metaKey || e.altKey || e.ctrlKey)) {
      if (e.shiftKey)
        this.previous();
      else
        this.next();
    }
    if (typeof ((_this_currentDropTarget = this.currentDropTarget) === null || _this_currentDropTarget === void 0 ? void 0 : _this_currentDropTarget.onKeyDown) === "function")
      this.currentDropTarget.onKeyDown(e, this.dragTarget);
  }
  onKeyUp(e) {
    this.cancelEvent(e);
    if (e.key === "Enter") {
      if (e.altKey)
        this.activate();
      else
        this.drop();
    }
  }
  onFocus(e) {
    if (e.target !== this.dragTarget.element)
      this.cancelEvent(e);
    if (!(e.target instanceof HTMLElement) || e.target === this.dragTarget.element)
      return;
    let dropTarget = this.validDropTargets.find((target) => target.element === e.target) || this.validDropTargets.find((target) => target.element.contains(e.target));
    if (!dropTarget) {
      if (this.currentDropTarget)
        this.currentDropTarget.element.focus();
      else
        this.dragTarget.element.focus();
      return;
    }
    let item = $67560de7c78cb232$var$dropItems.get(e.target);
    this.setCurrentDropTarget(dropTarget, item);
  }
  onBlur(e) {
    if (e.target !== this.dragTarget.element)
      this.cancelEvent(e);
    if (!e.relatedTarget || !(e.relatedTarget instanceof HTMLElement)) {
      if (this.currentDropTarget)
        this.currentDropTarget.element.focus();
      else
        this.dragTarget.element.focus();
    }
  }
  onClick(e) {
    this.cancelEvent(e);
    if ((0, $6a7db85432448f7f$export$60278871457622de)(e) || this.isVirtualClick) {
      if (e.target === this.dragTarget.element) {
        this.cancel();
        return;
      }
      let dropTarget = this.validDropTargets.find((target) => target.element.contains(e.target));
      if (dropTarget) {
        let item = $67560de7c78cb232$var$dropItems.get(e.target);
        this.setCurrentDropTarget(dropTarget, item);
        this.drop(item);
      }
    }
  }
  onPointerDown(e) {
    this.cancelEvent(e);
    this.isVirtualClick = (0, $6a7db85432448f7f$export$29bf1b5f2c56cf63)(e);
  }
  cancelEvent(e) {
    var _this_dragTarget;
    if ((e.type === "focusin" || e.type === "focusout") && e.target === ((_this_dragTarget = this.dragTarget) === null || _this_dragTarget === void 0 ? void 0 : _this_dragTarget.element))
      return;
    if (!$67560de7c78cb232$var$CLICK_EVENTS.includes(e.type))
      e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
  updateValidDropTargets() {
    if (!this.mutationObserver)
      return;
    this.mutationObserver.disconnect();
    if (this.restoreAriaHidden)
      this.restoreAriaHidden();
    this.validDropTargets = $67560de7c78cb232$var$findValidDropTargets(this.dragTarget);
    if (this.validDropTargets.length > 0) {
      let nearestIndex = this.findNearestDropTarget();
      this.validDropTargets = [
        ...this.validDropTargets.slice(nearestIndex),
        ...this.validDropTargets.slice(0, nearestIndex)
      ];
    }
    if (this.currentDropTarget && !this.validDropTargets.includes(this.currentDropTarget))
      this.setCurrentDropTarget(this.validDropTargets[0]);
    let types = (0, $7252cd45fc48c07c$export$e1d41611756c6326)(this.dragTarget.items);
    let validDropItems = [
      ...$67560de7c78cb232$var$dropItems.values()
    ].filter((item) => {
      if (typeof item.getDropOperation === "function")
        return item.getDropOperation(types, this.dragTarget.allowedDropOperations) !== "cancel";
      return true;
    });
    let visibleDropTargets = this.validDropTargets.filter((target) => !validDropItems.some((item) => target.element.contains(item.element)));
    this.restoreAriaHidden = (0, $5e3802645cc19319$export$1c3ebcada18427bf)([
      this.dragTarget.element,
      ...validDropItems.map((item) => item.element),
      ...visibleDropTargets.map((target) => target.element)
    ]);
    this.mutationObserver.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: [
        "aria-hidden"
      ]
    });
  }
  next() {
    if (!this.currentDropTarget) {
      this.setCurrentDropTarget(this.validDropTargets[0]);
      return;
    }
    let index = this.validDropTargets.indexOf(this.currentDropTarget);
    if (index < 0) {
      this.setCurrentDropTarget(this.validDropTargets[0]);
      return;
    }
    if (index === this.validDropTargets.length - 1) {
      if (!this.dragTarget.element.closest('[aria-hidden="true"]')) {
        this.setCurrentDropTarget(null);
        this.dragTarget.element.focus();
      } else
        this.setCurrentDropTarget(this.validDropTargets[0]);
    } else
      this.setCurrentDropTarget(this.validDropTargets[index + 1]);
  }
  previous() {
    if (!this.currentDropTarget) {
      this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
      return;
    }
    let index = this.validDropTargets.indexOf(this.currentDropTarget);
    if (index < 0) {
      this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
      return;
    }
    if (index === 0) {
      if (!this.dragTarget.element.closest('[aria-hidden="true"]')) {
        this.setCurrentDropTarget(null);
        this.dragTarget.element.focus();
      } else
        this.setCurrentDropTarget(this.validDropTargets[this.validDropTargets.length - 1]);
    } else
      this.setCurrentDropTarget(this.validDropTargets[index - 1]);
  }
  findNearestDropTarget() {
    let dragTargetRect = this.dragTarget.element.getBoundingClientRect();
    let minDistance = Infinity;
    let nearest = -1;
    for (let i = 0; i < this.validDropTargets.length; i++) {
      let dropTarget = this.validDropTargets[i];
      let rect = dropTarget.element.getBoundingClientRect();
      let dx = rect.left - dragTargetRect.left;
      let dy = rect.top - dragTargetRect.top;
      let dist = dx * dx + dy * dy;
      if (dist < minDistance) {
        minDistance = dist;
        nearest = i;
      }
    }
    return nearest;
  }
  setCurrentDropTarget(dropTarget, item) {
    if (dropTarget !== this.currentDropTarget) {
      if (this.currentDropTarget && typeof this.currentDropTarget.onDropExit === "function") {
        let rect = this.currentDropTarget.element.getBoundingClientRect();
        this.currentDropTarget.onDropExit({
          type: "dropexit",
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        });
      }
      this.currentDropTarget = dropTarget;
      if (dropTarget) {
        if (typeof dropTarget.onDropEnter === "function") {
          let rect = dropTarget.element.getBoundingClientRect();
          dropTarget.onDropEnter({
            type: "dropenter",
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
          }, this.dragTarget);
        }
        if (!item)
          dropTarget === null || dropTarget === void 0 ? void 0 : dropTarget.element.focus();
      }
    }
    if (item !== this.currentDropItem) {
      if (item && typeof this.currentDropTarget.onDropTargetEnter === "function")
        this.currentDropTarget.onDropTargetEnter(item === null || item === void 0 ? void 0 : item.target);
      item === null || item === void 0 ? void 0 : item.element.focus();
      this.currentDropItem = item;
      if (!this.initialFocused) {
        (0, $319e236875307eab$export$a9b970dcc4ae71a9)(item === null || item === void 0 ? void 0 : item.element.getAttribute("aria-label"), "polite");
        this.initialFocused = true;
      }
    }
  }
  end() {
    this.teardown();
    $67560de7c78cb232$var$endDragging();
    if (typeof this.dragTarget.onDragEnd === "function") {
      let target = this.currentDropTarget && this.dropOperation !== "cancel" ? this.currentDropTarget : this.dragTarget;
      let rect = target.element.getBoundingClientRect();
      this.dragTarget.onDragEnd({
        type: "dragend",
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2,
        dropOperation: this.dropOperation || "cancel"
      });
    }
    if (this.currentDropTarget) {
      if (!this.dragTarget.element.contains(this.currentDropTarget.element)) {
        this.dragTarget.element.dispatchEvent(new FocusEvent("blur"));
        this.dragTarget.element.dispatchEvent(new FocusEvent("focusout", {
          bubbles: true
        }));
      }
      (0, import_react_dom2.flushSync)(() => {
        this.currentDropTarget.element.blur();
      });
      this.currentDropTarget.element.focus();
    }
    this.setCurrentDropTarget(null);
  }
  cancel() {
    this.setCurrentDropTarget(null);
    this.end();
    if (!this.dragTarget.element.closest('[aria-hidden="true"]'))
      this.dragTarget.element.focus();
    (0, $319e236875307eab$export$a9b970dcc4ae71a9)(this.stringFormatter.format("dropCanceled"));
  }
  drop(item) {
    if (!this.currentDropTarget) {
      this.cancel();
      return;
    }
    if (typeof (item === null || item === void 0 ? void 0 : item.getDropOperation) === "function") {
      let types = (0, $7252cd45fc48c07c$export$e1d41611756c6326)(this.dragTarget.items);
      this.dropOperation = item.getDropOperation(types, this.dragTarget.allowedDropOperations);
    } else if (typeof this.currentDropTarget.getDropOperation === "function") {
      let types = (0, $7252cd45fc48c07c$export$e1d41611756c6326)(this.dragTarget.items);
      this.dropOperation = this.currentDropTarget.getDropOperation(types, this.dragTarget.allowedDropOperations);
    } else
      this.dropOperation = this.dragTarget.allowedDropOperations[0];
    if (typeof this.currentDropTarget.onDrop === "function") {
      let items = this.dragTarget.items.map((item2) => ({
        kind: "text",
        types: new Set(Object.keys(item2)),
        getText: (type) => Promise.resolve(item2[type])
      }));
      let rect = this.currentDropTarget.element.getBoundingClientRect();
      this.currentDropTarget.onDrop({
        type: "drop",
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        items,
        dropOperation: this.dropOperation
      }, item === null || item === void 0 ? void 0 : item.target);
    }
    this.end();
    (0, $319e236875307eab$export$a9b970dcc4ae71a9)(this.stringFormatter.format("dropComplete"));
  }
  activate() {
    if (this.currentDropTarget && typeof this.currentDropTarget.onDropActivate === "function") {
      let rect = this.currentDropTarget.element.getBoundingClientRect();
      this.currentDropTarget.onDropActivate({
        type: "dropactivate",
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }
  }
  constructor(target, stringFormatter) {
    this.dragTarget = target;
    this.stringFormatter = stringFormatter;
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    this.cancelEvent = this.cancelEvent.bind(this);
    this.initialFocused = false;
  }
};
function $67560de7c78cb232$var$findValidDropTargets(options) {
  let types = (0, $7252cd45fc48c07c$export$e1d41611756c6326)(options.items);
  return [
    ...$67560de7c78cb232$var$dropTargets.values()
  ].filter((target) => {
    if (target.element.closest('[aria-hidden="true"]'))
      return false;
    if (typeof target.getDropOperation === "function")
      return target.getDropOperation(types, options.allowedDropOperations) !== "cancel";
    return true;
  });
}
var $865c2eb7c00a83f1$exports = {};
$865c2eb7c00a83f1$exports = {
  "ar-AE": $7dfcac1a0c98c789$exports,
  "bg-BG": $f311c26671219eca$exports,
  "cs-CZ": $1aa4ade186550f72$exports,
  "da-DK": $b6b0ea1b94a7633c$exports,
  "de-DE": $d10e4f47c744ad52$exports,
  "el-GR": $b3d2bb9abce688ab$exports,
  "en-US": $f9b46437e610cca1$exports,
  "es-ES": $204b5c01bd3acf26$exports,
  "et-EE": $110bdd83348ecbc0$exports,
  "fi-FI": $87d3ccd5e347c7cc$exports,
  "fr-FR": $a5de891427686596$exports,
  "he-IL": $ad7f4c66d85b4494$exports,
  "hr-HR": $4aa59f3c6a796cae$exports,
  "hu-HU": $d8d3646556c40586$exports,
  "it-IT": $982d558b45395246$exports,
  "ja-JP": $6a0cf387b9de036c$exports,
  "ko-KR": $a97fefa2956f4bcb$exports,
  "lt-LT": $5fb5837f94e1c150$exports,
  "lv-LV": $5b2e5709864cc922$exports,
  "nb-NO": $ee15bb8efb18cc69$exports,
  "nl-NL": $1daf2d4602e26ac4$exports,
  "pl-PL": $7115429b0f60511f$exports,
  "pt-BR": $5edd453ae5d4a8bc$exports,
  "pt-PT": $5f431994f708535e$exports,
  "ro-RO": $107b5e2e45e971f1$exports,
  "ru-RU": $d4b9c2f01c1892f7$exports,
  "sk-SK": $dbdc1942894e83e4$exports,
  "sl-SI": $fbaaaaebd547d998$exports,
  "sr-SP": $a0caa33f1e264489$exports,
  "sv-SE": $d576b66176f5c0ff$exports,
  "tr-TR": $0681f168c13d8f2a$exports,
  "uk-UA": $2bfbc1f42c1cf5a7$exports,
  "zh-CN": $d0f488d433b55b8a$exports,
  "zh-TW": $46168b0dce85301e$exports
};
var $8253ed7ece74b463$var$MESSAGES = {
  keyboard: {
    start: "dragDescriptionKeyboard",
    end: "endDragKeyboard"
  },
  touch: {
    start: "dragDescriptionTouch",
    end: "endDragTouch"
  },
  virtual: {
    start: "dragDescriptionVirtual",
    end: "endDragVirtual"
  }
};
function $8253ed7ece74b463$export$7941f8aafa4b6021(options) {
  let { hasDragButton } = options;
  let stringFormatter = (0, $fca6afa0e843324b$export$f12b703ca79dfbb1)((0, /* @__PURE__ */ $parcel$interopDefault($865c2eb7c00a83f1$exports)), "@react-aria/dnd");
  let state = (0, import_react6.useRef)({
    options,
    x: 0,
    y: 0
  }).current;
  state.options = options;
  let isDraggingRef = (0, import_react6.useRef)(false);
  let [isDragging, setDraggingState] = (0, import_react6.useState)(false);
  let setDragging = (isDragging2) => {
    isDraggingRef.current = isDragging2;
    setDraggingState(isDragging2);
  };
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let modalityOnPointerDown = (0, import_react6.useRef)(null);
  let onDragStart = (e) => {
    var _options_preview;
    if (e.defaultPrevented)
      return;
    e.stopPropagation();
    if (modalityOnPointerDown.current === "virtual") {
      e.preventDefault();
      startDragging(e.target);
      modalityOnPointerDown.current = null;
      return;
    }
    if (typeof options.onDragStart === "function")
      options.onDragStart({
        type: "dragstart",
        x: e.clientX,
        y: e.clientY
      });
    let items = options.getItems();
    (0, $7252cd45fc48c07c$export$f9c1490890ddd063)(e.dataTransfer, items);
    let allowed = (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).all;
    if (typeof options.getAllowedDropOperations === "function") {
      let allowedOperations = options.getAllowedDropOperations();
      allowed = (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).none;
      for (let operation of allowedOperations)
        allowed |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e)[operation] || (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).none;
    }
    (0, $7252cd45fc48c07c$export$6539bc8c3a0a2d67)(allowed);
    e.dataTransfer.effectAllowed = (0, $103790afe9474d1c$export$dd0165308d8bff45)[allowed] || "none";
    if (typeof ((_options_preview = options.preview) === null || _options_preview === void 0 ? void 0 : _options_preview.current) === "function")
      options.preview.current(items, (node) => {
        let size = node.getBoundingClientRect();
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.x;
        let y = e.clientY - rect.y;
        if (x > size.width || y > size.height) {
          x = size.width / 2;
          y = size.height / 2;
        }
        let height = 2 * Math.round(size.height / 2);
        node.style.height = `${height}px`;
        e.dataTransfer.setDragImage(node, x, y);
      });
    addGlobalListener(window, "drop", (e2) => {
      e2.preventDefault();
      e2.stopPropagation();
      console.warn("Drags initiated from the React Aria useDrag hook may only be dropped on a target created with useDrop. This ensures that a keyboard and screen reader accessible alternative is available.");
    }, {
      once: true
    });
    state.x = e.clientX;
    state.y = e.clientY;
    requestAnimationFrame(() => {
      setDragging(true);
    });
  };
  let onDrag = (e) => {
    e.stopPropagation();
    if (e.clientX === state.x && e.clientY === state.y)
      return;
    if (typeof options.onDragMove === "function")
      options.onDragMove({
        type: "dragmove",
        x: e.clientX,
        y: e.clientY
      });
    state.x = e.clientX;
    state.y = e.clientY;
  };
  let onDragEnd = (e) => {
    e.stopPropagation();
    if (typeof options.onDragEnd === "function") {
      let event = {
        type: "dragend",
        x: e.clientX,
        y: e.clientY,
        dropOperation: (0, $103790afe9474d1c$export$608ecc6f1b23c35d)[e.dataTransfer.dropEffect]
      };
      if (0, $7252cd45fc48c07c$export$8e6636520ac15722)
        event.dropOperation = (0, $103790afe9474d1c$export$608ecc6f1b23c35d)[0, $7252cd45fc48c07c$export$8e6636520ac15722];
      options.onDragEnd(event);
    }
    setDragging(false);
    removeAllGlobalListeners();
    (0, $7252cd45fc48c07c$export$6539bc8c3a0a2d67)((0, $103790afe9474d1c$export$60b7b4bcf3903d8e).none);
    (0, $7252cd45fc48c07c$export$64f52ed7349ddb84)(void 0);
  };
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    return () => {
      if (isDraggingRef.current) {
        if (typeof state.options.onDragEnd === "function") {
          let event = {
            type: "dragend",
            x: 0,
            y: 0,
            dropOperation: (0, $103790afe9474d1c$export$608ecc6f1b23c35d)[(0, $7252cd45fc48c07c$export$8e6636520ac15722) || "none"]
          };
          state.options.onDragEnd(event);
        }
        setDragging(false);
        (0, $7252cd45fc48c07c$export$6539bc8c3a0a2d67)((0, $103790afe9474d1c$export$60b7b4bcf3903d8e).none);
        (0, $7252cd45fc48c07c$export$64f52ed7349ddb84)(void 0);
      }
    };
  }, [
    state
  ]);
  let onPress = (e) => {
    if (e.pointerType !== "keyboard" && e.pointerType !== "virtual")
      return;
    startDragging(e.target);
  };
  let startDragging = (target) => {
    if (typeof state.options.onDragStart === "function") {
      let rect = target.getBoundingClientRect();
      state.options.onDragStart({
        type: "dragstart",
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2
      });
    }
    $67560de7c78cb232$export$549dbcf8649bf3b2({
      element: target,
      items: state.options.getItems(),
      allowedDropOperations: typeof state.options.getAllowedDropOperations === "function" ? state.options.getAllowedDropOperations() : [
        "move",
        "copy",
        "link"
      ],
      onDragEnd(e) {
        setDragging(false);
        if (typeof state.options.onDragEnd === "function")
          state.options.onDragEnd(e);
      }
    }, stringFormatter);
    setDragging(true);
  };
  let modality = (0, $7252cd45fc48c07c$export$49bac5d6d4b352ea)();
  let message = !isDragging ? $8253ed7ece74b463$var$MESSAGES[modality].start : $8253ed7ece74b463$var$MESSAGES[modality].end;
  let descriptionProps = (0, $ef06256079686ba0$export$f8aeda7b10753fa1)(stringFormatter.format(message));
  let interactions;
  if (!hasDragButton)
    interactions = {
      ...descriptionProps,
      onPointerDown(e) {
        modalityOnPointerDown.current = (0, $6a7db85432448f7f$export$29bf1b5f2c56cf63)(e.nativeEvent) ? "virtual" : e.pointerType;
        if (e.width < 1 && e.height < 1)
          modalityOnPointerDown.current = "virtual";
        else {
          let rect = e.currentTarget.getBoundingClientRect();
          let offsetX = e.clientX - rect.x;
          let offsetY = e.clientY - rect.y;
          let centerX = rect.width / 2;
          let centerY = rect.height / 2;
          if (Math.abs(offsetX - centerX) <= 0.5 && Math.abs(offsetY - centerY) <= 0.5)
            modalityOnPointerDown.current = "virtual";
          else
            modalityOnPointerDown.current = e.pointerType;
        }
      },
      onKeyDownCapture(e) {
        if (e.target === e.currentTarget && e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      onKeyUpCapture(e) {
        if (e.target === e.currentTarget && e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
          startDragging(e.target);
        }
      },
      onClick(e) {
        if ((0, $6a7db85432448f7f$export$60278871457622de)(e.nativeEvent) || modalityOnPointerDown.current === "virtual") {
          e.preventDefault();
          e.stopPropagation();
          startDragging(e.target);
        }
      }
    };
  return {
    dragProps: {
      ...interactions,
      draggable: "true",
      onDragStart,
      onDrag,
      onDragEnd
    },
    dragButtonProps: {
      ...descriptionProps,
      onPress
    },
    isDragging
  };
}
var $224594fe3e57ff1e$var$MESSAGES = {
  keyboard: "dropDescriptionKeyboard",
  touch: "dropDescriptionTouch",
  virtual: "dropDescriptionVirtual"
};
function $224594fe3e57ff1e$export$62447ad3d2ec7da6() {
  let stringFormatter = (0, $fca6afa0e843324b$export$f12b703ca79dfbb1)((0, /* @__PURE__ */ $parcel$interopDefault($865c2eb7c00a83f1$exports)), "@react-aria/dnd");
  let modality = (0, $7252cd45fc48c07c$export$49bac5d6d4b352ea)();
  let dragSession = $67560de7c78cb232$export$418e185dd3f1b968();
  let descriptionProps = (0, $ef06256079686ba0$export$f8aeda7b10753fa1)(dragSession ? stringFormatter.format($224594fe3e57ff1e$var$MESSAGES[modality]) : "");
  return {
    dropProps: {
      ...descriptionProps,
      // Mobile Safari does not properly bubble click events on elements except links or inputs
      // unless there is an onclick handler bound directly to the element itself. By adding this
      // handler, React will take care of adding that for us, and we are able to handle document
      // level click events in the DragManager.
      // See https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
      onClick: () => {
      }
    }
  };
}
var $5c06e4929e123553$var$DROP_ACTIVATE_TIMEOUT = 800;
function $5c06e4929e123553$export$ccdee5eaf73cf661(options) {
  let { hasDropButton } = options;
  let [isDropTarget, setDropTarget] = (0, import_react6.useState)(false);
  let state = (0, import_react6.useRef)({
    x: 0,
    y: 0,
    dragOverElements: /* @__PURE__ */ new Set(),
    dropEffect: "none",
    allowedOperations: (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).all,
    dropActivateTimer: null
  }).current;
  let fireDropEnter = (e) => {
    setDropTarget(true);
    if (typeof options.onDropEnter === "function") {
      let rect = e.currentTarget.getBoundingClientRect();
      options.onDropEnter({
        type: "dropenter",
        x: e.clientX - rect.x,
        y: e.clientY - rect.y
      });
    }
  };
  let fireDropExit = (e) => {
    setDropTarget(false);
    if (typeof options.onDropExit === "function") {
      let rect = e.currentTarget.getBoundingClientRect();
      options.onDropExit({
        type: "dropexit",
        x: e.clientX - rect.x,
        y: e.clientY - rect.y
      });
    }
  };
  let onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let allowedOperations = $5c06e4929e123553$var$getAllowedOperations(e);
    if (e.clientX === state.x && e.clientY === state.y && allowedOperations === state.allowedOperations) {
      e.dataTransfer.dropEffect = state.dropEffect;
      return;
    }
    state.x = e.clientX;
    state.y = e.clientY;
    let prevDropEffect = state.dropEffect;
    if (allowedOperations !== state.allowedOperations) {
      let allowedOps = $5c06e4929e123553$var$allowedOperationsToArray(allowedOperations);
      let dropOperation = allowedOps[0];
      if (typeof options.getDropOperation === "function") {
        let types = new (0, $7252cd45fc48c07c$export$7f04ce188c91447c)(e.dataTransfer);
        dropOperation = $5c06e4929e123553$var$getDropOperation(allowedOperations, options.getDropOperation(types, allowedOps));
      }
      state.dropEffect = (0, $103790afe9474d1c$export$5eacb0769d26d3b2)[dropOperation] || "none";
    }
    if (typeof options.getDropOperationForPoint === "function") {
      let types = new (0, $7252cd45fc48c07c$export$7f04ce188c91447c)(e.dataTransfer);
      let rect = e.currentTarget.getBoundingClientRect();
      let dropOperation = $5c06e4929e123553$var$getDropOperation(allowedOperations, options.getDropOperationForPoint(types, $5c06e4929e123553$var$allowedOperationsToArray(allowedOperations), state.x - rect.x, state.y - rect.y));
      state.dropEffect = (0, $103790afe9474d1c$export$5eacb0769d26d3b2)[dropOperation] || "none";
    }
    state.allowedOperations = allowedOperations;
    e.dataTransfer.dropEffect = state.dropEffect;
    if (state.dropEffect === "none" && prevDropEffect !== "none")
      fireDropExit(e);
    else if (state.dropEffect !== "none" && prevDropEffect === "none")
      fireDropEnter(e);
    if (typeof options.onDropMove === "function" && state.dropEffect !== "none") {
      let rect = e.currentTarget.getBoundingClientRect();
      options.onDropMove({
        type: "dropmove",
        x: state.x - rect.x,
        y: state.y - rect.y
      });
    }
    clearTimeout(state.dropActivateTimer);
    if (typeof options.onDropActivate === "function" && state.dropEffect !== "none") {
      let rect = e.currentTarget.getBoundingClientRect();
      state.dropActivateTimer = setTimeout(() => {
        options.onDropActivate({
          type: "dropactivate",
          x: state.x - rect.x,
          y: state.y - rect.y
        });
      }, $5c06e4929e123553$var$DROP_ACTIVATE_TIMEOUT);
    }
  };
  let onDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.dragOverElements.add(e.target);
    if (state.dragOverElements.size > 1)
      return;
    let allowedOperationsBits = $5c06e4929e123553$var$getAllowedOperations(e);
    let allowedOperations = $5c06e4929e123553$var$allowedOperationsToArray(allowedOperationsBits);
    let dropOperation = allowedOperations[0];
    if (typeof options.getDropOperation === "function") {
      let types = new (0, $7252cd45fc48c07c$export$7f04ce188c91447c)(e.dataTransfer);
      dropOperation = $5c06e4929e123553$var$getDropOperation(allowedOperationsBits, options.getDropOperation(types, allowedOperations));
    }
    if (typeof options.getDropOperationForPoint === "function") {
      let types = new (0, $7252cd45fc48c07c$export$7f04ce188c91447c)(e.dataTransfer);
      let rect = e.currentTarget.getBoundingClientRect();
      dropOperation = $5c06e4929e123553$var$getDropOperation(allowedOperationsBits, options.getDropOperationForPoint(types, allowedOperations, e.clientX - rect.x, e.clientY - rect.y));
    }
    state.x = e.clientX;
    state.y = e.clientY;
    state.allowedOperations = allowedOperationsBits;
    state.dropEffect = (0, $103790afe9474d1c$export$5eacb0769d26d3b2)[dropOperation] || "none";
    e.dataTransfer.dropEffect = state.dropEffect;
    if (dropOperation !== "cancel")
      fireDropEnter(e);
  };
  let onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    state.dragOverElements.delete(e.target);
    for (let element of state.dragOverElements)
      if (!e.currentTarget.contains(element))
        state.dragOverElements.delete(element);
    if (state.dragOverElements.size > 0)
      return;
    if (state.dropEffect !== "none")
      fireDropExit(e);
    clearTimeout(state.dropActivateTimer);
  };
  let onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    (0, $7252cd45fc48c07c$export$64f52ed7349ddb84)(state.dropEffect);
    if (typeof options.onDrop === "function") {
      let dropOperation = (0, $103790afe9474d1c$export$608ecc6f1b23c35d)[state.dropEffect];
      let items = (0, $7252cd45fc48c07c$export$d9e760437831f8b3)(e.dataTransfer);
      let rect = e.currentTarget.getBoundingClientRect();
      let event = {
        type: "drop",
        x: e.clientX - rect.x,
        y: e.clientY - rect.y,
        items,
        dropOperation
      };
      options.onDrop(event);
    }
    let dndStateSnapshot = {
      ...(0, $7252cd45fc48c07c$export$6ca6700462636d0b)
    };
    state.dragOverElements.clear();
    fireDropExit(e);
    clearTimeout(state.dropActivateTimer);
    if (dndStateSnapshot.draggingCollectionRef == null)
      (0, $7252cd45fc48c07c$export$64f52ed7349ddb84)(void 0);
    else
      (0, $7252cd45fc48c07c$export$6c10d32b362bfa5f)(dndStateSnapshot);
  };
  let onDropEnter = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e) => {
    if (typeof options.onDropEnter === "function")
      options.onDropEnter(e);
  });
  let onDropExit = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e) => {
    if (typeof options.onDropExit === "function")
      options.onDropExit(e);
  });
  let onDropActivate = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e) => {
    if (typeof options.onDropActivate === "function")
      options.onDropActivate(e);
  });
  let onKeyboardDrop = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e) => {
    if (typeof options.onDrop === "function")
      options.onDrop(e);
  });
  let getDropOperationKeyboard = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((types, allowedOperations) => {
    if (options.getDropOperation)
      return options.getDropOperation(types, allowedOperations);
    return allowedOperations[0];
  });
  let { ref } = options;
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => $67560de7c78cb232$export$c28d9fb4a54e471a({
    element: ref.current,
    getDropOperation: getDropOperationKeyboard,
    onDropEnter(e) {
      setDropTarget(true);
      onDropEnter(e);
    },
    onDropExit(e) {
      setDropTarget(false);
      onDropExit(e);
    },
    onDrop: onKeyboardDrop,
    onDropActivate
  }), [
    ref,
    getDropOperationKeyboard,
    onDropEnter,
    onDropExit,
    onKeyboardDrop,
    onDropActivate
  ]);
  let { dropProps } = (0, $224594fe3e57ff1e$export$62447ad3d2ec7da6)();
  return {
    dropProps: {
      ...!hasDropButton && dropProps,
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop
    },
    dropButtonProps: {
      ...hasDropButton && dropProps
    },
    isDropTarget
  };
}
function $5c06e4929e123553$var$getAllowedOperations(e) {
  let allowedOperations = (0, $103790afe9474d1c$export$9bbdfc78cf083e16)[e.dataTransfer.effectAllowed];
  if (0, $7252cd45fc48c07c$export$f0130eb70b6347b8)
    allowedOperations &= (0, $7252cd45fc48c07c$export$f0130eb70b6347b8);
  let allowedModifiers = (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).none;
  if ((0, $c87311424ea30a05$export$9ac100e40613ea10)()) {
    if (e.altKey)
      allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).copy;
    if (e.ctrlKey && !(0, $c87311424ea30a05$export$7bef049ce92e4224)())
      allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).link;
    if (e.metaKey)
      allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).move;
  } else {
    if (e.altKey)
      allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).link;
    if (e.shiftKey)
      allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).move;
    if (e.ctrlKey)
      allowedModifiers |= (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).copy;
  }
  if (allowedModifiers)
    return allowedOperations & allowedModifiers;
  return allowedOperations;
}
function $5c06e4929e123553$var$allowedOperationsToArray(allowedOperationsBits) {
  let allowedOperations = [];
  if (allowedOperationsBits & (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).move)
    allowedOperations.push("move");
  if (allowedOperationsBits & (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).copy)
    allowedOperations.push("copy");
  if (allowedOperationsBits & (0, $103790afe9474d1c$export$60b7b4bcf3903d8e).link)
    allowedOperations.push("link");
  return allowedOperations;
}
function $5c06e4929e123553$var$getDropOperation(allowedOperations, operation) {
  let op = (0, $103790afe9474d1c$export$60b7b4bcf3903d8e)[operation];
  return allowedOperations & op ? operation : "cancel";
}

// node_modules/remix-utils/build/react/client-only.js
var React = __toESM(require_react(), 1);

// node_modules/remix-utils/build/react/use-hydrated.js
var import_react7 = __toESM(require_react(), 1);
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return (0, import_react7.useSyncExternalStore)(subscribe, () => true, () => false);
}

// node_modules/remix-utils/build/react/client-only.js
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? React.createElement(React.Fragment, null, children()) : React.createElement(React.Fragment, null, fallback);
}

// app/components/practice/MatchingGamePage.tsx
var import_lodash = __toESM(require_lodash(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/practice/MatchingGamePage.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
var _s4 = $RefreshSig$();
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/practice/MatchingGamePage.tsx"
  );
  import.meta.hot.lastModified = "1716730031927.364";
}
var MatchingGamePageContext = import_react8.default.createContext(null);
function MatchingGamePage({
  data,
  getIcon
}) {
  _s();
  const [values, setValues] = import_react8.default.useState({});
  const [isCorrect, setIsCorrect] = import_react8.default.useState(null);
  const isComplete = isCorrect !== null;
  function setValue(key, value) {
    const newValues = {
      ...values
    };
    for (const otherKey in newValues) {
      if (newValues[otherKey] === value) {
        delete newValues[otherKey];
      }
    }
    newValues[key] = value;
    setValues(newValues);
    if (Object.keys(newValues).length >= data.length) {
      const success = !Object.keys(newValues).find((key2) => key2 !== newValues[key2]);
      setIsCorrect(success);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MatchingGamePageContext.Provider, { value: {
    data,
    isComplete,
    setValue,
    values
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { direction: "column", gap: 4, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EnglishSection, { getIcon }, void 0, false, {
      fileName: "app/components/practice/MatchingGamePage.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Separator, {}, void 0, false, {
      fileName: "app/components/practice/MatchingGamePage.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OneidaSection, {}, void 0, false, {
      fileName: "app/components/practice/MatchingGamePage.tsx",
      lineNumber: 69,
      columnNumber: 28
    }, this) }, void 0, false, {
      fileName: "app/components/practice/MatchingGamePage.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/practice/MatchingGamePage.tsx",
    lineNumber: 66,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/practice/MatchingGamePage.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(MatchingGamePage, "9wuKN8uwE6HAFKLcGezNVk7dzrM=");
_c = MatchingGamePage;
function EnglishSection({
  getIcon
}) {
  _s2();
  const context = import_react8.default.useContext(MatchingGamePageContext);
  if (!context) {
    throw new Error("Missing context.");
  }
  const numItems = context.data.length;
  const columnsClass = numItems <= 4 ? "grid-cols-[repeat(4,200px)]" : numItems <= 6 ? "grid-cols-[repeat(3,200px)]" : numItems <= 8 ? "grid-cols-[repeat(4,200px)]" : numItems <= 9 ? "grid-cols-[repeat(3,200px)]" : "grid-cols-[repeat(4,200px)]";
  const rowsClass = numItems <= 4 ? "grid-rows-[repeat(1,200px)]" : numItems <= 8 ? "grid-rows-[repeat(2,200px)]" : numItems <= 12 ? "grid-rows-[repeat(3,200px)]" : numItems <= 16 ? "grid-rows-[repeat(4,200px)]" : numItems <= 20 ? "grid-rows-[repeat(5,200px)]" : numItems <= 24 ? "grid-rows-[repeat(6,200px)]" : "grid-rows-[repeat(7,200px)]";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `grid ${columnsClass} ${rowsClass} gap-4 mx-auto`, children: context.data.map((datum) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DropTarget, { icon: getIcon?.(datum.key), label: arrayify(datum.en)[0], value: datum.key }, datum.key, false, {
    fileName: "app/components/practice/MatchingGamePage.tsx",
    lineNumber: 89,
    columnNumber: 34
  }, this)) }, void 0, false, {
    fileName: "app/components/practice/MatchingGamePage.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s2(EnglishSection, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
_c2 = EnglishSection;
function OneidaSection() {
  _s3();
  const context = import_react8.default.useContext(MatchingGamePageContext);
  if (!context) {
    throw new Error("Missing context.");
  }
  const data = import_react8.default.useMemo(() => {
    return import_lodash.default.shuffle(context.data);
  }, [context.data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { gap: 4, justify: "center", wrap: true, children: data.map((datum) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Draggable, { value: datum.key, children: arrayify(datum.on)[0] }, datum.key, false, {
    fileName: "app/components/practice/MatchingGamePage.tsx",
    lineNumber: 104,
    columnNumber: 26
  }, this)) }, void 0, false, {
    fileName: "app/components/practice/MatchingGamePage.tsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
}
_s3(OneidaSection, "ZqA/5SriIFVRLElmtcnOJvAV2BE=");
_c3 = OneidaSection;
function Draggable({
  children,
  value
}) {
  _s4();
  const context = import_react8.default.useContext(MatchingGamePageContext);
  if (!context) {
    throw new Error("Missing context.");
  }
  const {
    dragProps,
    isDragging
  } = $8253ed7ece74b463$export$7941f8aafa4b6021({
    getItems() {
      return [{
        "text/plain": value
      }];
    }
  });
  const isUsed = Object.values(context.values).includes(value);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ...dragProps, className: cn("p-2", "border-2", "border-solid", "border-slate-300", "rounded", isDragging ? "bg-slate-300" : isUsed ? "bg-transparent" : "bg-slate-200"), role: "button", tabIndex: 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { contrast: isUsed ? "mid" : "high", children }, void 0, false, {
    fileName: "app/components/practice/MatchingGamePage.tsx",
    lineNumber: 132,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/practice/MatchingGamePage.tsx",
    lineNumber: 131,
    columnNumber: 10
  }, this);
}
_s4(Draggable, "Y81afXDp4NB1uR9iJkrEv+dP4cQ=", false, function() {
  return [$8253ed7ece74b463$export$7941f8aafa4b6021];
});
_c4 = Draggable;
function DropTarget({
  icon: Icon,
  label,
  value
}) {
  _s5();
  const context = import_react8.default.useContext(MatchingGamePageContext);
  if (!context) {
    throw new Error("Missing context.");
  }
  const ref = import_react8.default.useRef(null);
  const {
    dropProps,
    isDropTarget
  } = $5c06e4929e123553$export$ccdee5eaf73cf661({
    ref,
    async onDrop(e) {
      const item = e.items[0];
      const text = await item.getText("text/plain");
      context.setValue(value, text);
    }
  });
  const droppedItemKey = context.values[value];
  const isCorrect = value === droppedItemKey;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ...dropProps, className: cn("border-2", droppedItemKey ? "border-solid" : "border-dashed", !context.isComplete ? ["border-slate-600", isDropTarget && "bg-slate-100"] : isCorrect ? ["border-green-600", "bg-green-100"] : ["border-red-600", "bg-red-100"], "w-[200px]", "h-[200px]"), ref, role: "button", tabIndex: 0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, { align: "center", direction: "column", gap: 2, height: "fill", justify: "center", children: [
      label,
      Icon && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { size: 48 }, void 0, false, {
        fileName: "app/components/practice/MatchingGamePage.tsx",
        lineNumber: 166,
        columnNumber: 18
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/practice/MatchingGamePage.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    droppedItemKey && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-0 py-1 w-full flex justify-center bg-slate-200", children: arrayify(context.data.find((d) => d.key === droppedItemKey)?.on)[0] }, void 0, false, {
      fileName: "app/components/practice/MatchingGamePage.tsx",
      lineNumber: 170,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/practice/MatchingGamePage.tsx",
      lineNumber: 169,
      columnNumber: 26
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/practice/MatchingGamePage.tsx",
    lineNumber: 163,
    columnNumber: 10
  }, this);
}
_s5(DropTarget, "Md6ue9R81jgjBV6zQIYPdtfW28I=", false, function() {
  return [$5c06e4929e123553$export$ccdee5eaf73cf661];
});
_c5 = DropTarget;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "MatchingGamePage");
$RefreshReg$(_c2, "EnglishSection");
$RefreshReg$(_c3, "OneidaSection");
$RefreshReg$(_c4, "Draggable");
$RefreshReg$(_c5, "DropTarget");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  MatchingGamePage
};
//# sourceMappingURL=/build/_shared/chunk-LCMWGKKS.js.map
