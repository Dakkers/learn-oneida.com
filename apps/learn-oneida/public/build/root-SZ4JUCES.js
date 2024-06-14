import {
  $010c2913dbd2fe3d$export$5cae361ad82dce8b,
  $ea1ef594cf570d83$export$be92b6f5f03c0fe9
} from "/build/_shared/chunk-CEX5NOEO.js";
import {
  $921a889cee6df7e8$export$99c2b779aa4e8b8b
} from "/build/_shared/chunk-YUHBZFFF.js";
import {
  $1746a345f3d73bb7$export$f680877a34711e37,
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c,
  $5cb92bef7577960e$export$177fb62ff3ec1f22,
  $71cd76cc60e0454e$export$6f32135080cb4c3,
  $9f79659886946c16$export$e5c5a5f917a5871c,
  $b1b2314f5f9a1d84$export$25bec8c6f54ee79a,
  $c512c27ab02ef895$export$50c7b4e9d9f19c1,
  $c512c27ab02ef895$export$fd42f52fd3ae1109,
  $d3863c46a17e8a28$export$20e40289641fbbb6,
  $e02a7d9cb1dc128c$export$c74125a8e3af6bb2,
  $e42e1063c40fb3ef$export$b9ecd428b558ff10,
  $f1701beae083dbae$export$602eac185826482c,
  $f631663db3294ace$export$b39126d51d94e6f3,
  Combination_default,
  hideOthers
} from "/build/_shared/chunk-V7VJQMFC.js";
import {
  ChevronDown,
  Menu
} from "/build/_shared/chunk-SUXJSOIA.js";
import {
  $5e63c961fc1ce211$export$8c6ed5c666ac1360,
  $6ed0406888f73fc4$export$43e446d32b3d21af,
  $6ed0406888f73fc4$export$c7b2cbe3552a0d05,
  $8927f6f2acc4f386$export$250ffa63cdc0d034,
  $8927f6f2acc4f386$export$6d1a0317bde7de7f,
  _extends
} from "/build/_shared/chunk-7MJPIPI2.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches
} from "/build/_shared/chunk-SB6J2XPB.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
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

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// app/globals.css
var globals_default = "/build/_assets/globals-7YDILIKK.css";

// app/components/Navbar.tsx
var React3 = __toESM(require_react(), 1);

// @/design/primitives/navigation-menu.tsx
var React = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-navigation-menu/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var $322c88a641701f3b$var$NAVIGATION_MENU_NAME = "NavigationMenu";
var [$322c88a641701f3b$var$Collection, $322c88a641701f3b$var$useCollection, $322c88a641701f3b$var$createCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$FocusGroupCollection, $322c88a641701f3b$var$useFocusGroupCollection, $322c88a641701f3b$var$createFocusGroupCollectionScope] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$createNavigationMenuContext, $322c88a641701f3b$export$fb8ea5af8c9fcdf0] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($322c88a641701f3b$var$NAVIGATION_MENU_NAME, [
  $322c88a641701f3b$var$createCollectionScope,
  $322c88a641701f3b$var$createFocusGroupCollectionScope
]);
var [$322c88a641701f3b$var$NavigationMenuProviderImpl, $322c88a641701f3b$var$useNavigationMenuContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var [$322c88a641701f3b$var$ViewportContentProvider, $322c88a641701f3b$var$useViewportContentContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$NAVIGATION_MENU_NAME);
var $322c88a641701f3b$export$5b2278cf1e8bcae2 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, onValueChange, defaultValue, delayDuration = 200, skipDelayDuration = 300, orientation = "horizontal", dir, ...NavigationMenuProps } = props;
  const [navigationMenu, setNavigationMenu] = (0, import_react.useState)(null);
  const composedRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
    forwardedRef,
    (node) => setNavigationMenu(node)
  );
  const direction = $f631663db3294ace$export$b39126d51d94e6f3(dir);
  const openTimerRef = (0, import_react.useRef)(0);
  const closeTimerRef = (0, import_react.useRef)(0);
  const skipDelayTimerRef = (0, import_react.useRef)(0);
  const [isOpenDelayed, setIsOpenDelayed] = (0, import_react.useState)(true);
  const [value1 = "", setValue] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: valueProp,
    onChange: (value) => {
      const isOpen = value !== "";
      const hasSkipDelayDuration = skipDelayDuration > 0;
      if (isOpen) {
        window.clearTimeout(skipDelayTimerRef.current);
        if (hasSkipDelayDuration)
          setIsOpenDelayed(false);
      } else {
        window.clearTimeout(skipDelayTimerRef.current);
        skipDelayTimerRef.current = window.setTimeout(
          () => setIsOpenDelayed(true),
          skipDelayDuration
        );
      }
      onValueChange === null || onValueChange === void 0 || onValueChange(value);
    },
    defaultProp: defaultValue
  });
  const startCloseTimer = (0, import_react.useCallback)(() => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(
      () => setValue(""),
      150
    );
  }, [
    setValue
  ]);
  const handleOpen = (0, import_react.useCallback)((itemValue) => {
    window.clearTimeout(closeTimerRef.current);
    setValue(itemValue);
  }, [
    setValue
  ]);
  const handleDelayedOpen = (0, import_react.useCallback)((itemValue) => {
    const isOpenItem = value1 === itemValue;
    if (isOpenItem)
      window.clearTimeout(closeTimerRef.current);
    else
      openTimerRef.current = window.setTimeout(() => {
        window.clearTimeout(closeTimerRef.current);
        setValue(itemValue);
      }, delayDuration);
  }, [
    value1,
    setValue,
    delayDuration
  ]);
  (0, import_react.useEffect)(() => {
    return () => {
      window.clearTimeout(openTimerRef.current);
      window.clearTimeout(closeTimerRef.current);
      window.clearTimeout(skipDelayTimerRef.current);
    };
  }, []);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuProvider, {
    scope: __scopeNavigationMenu,
    isRootMenu: true,
    value: value1,
    dir: direction,
    orientation,
    rootNavigationMenu: navigationMenu,
    onTriggerEnter: (itemValue) => {
      window.clearTimeout(openTimerRef.current);
      if (isOpenDelayed)
        handleDelayedOpen(itemValue);
      else
        handleOpen(itemValue);
    },
    onTriggerLeave: () => {
      window.clearTimeout(openTimerRef.current);
      startCloseTimer();
    },
    onContentEnter: () => window.clearTimeout(closeTimerRef.current),
    onContentLeave: startCloseTimer,
    onItemSelect: (itemValue) => {
      setValue(
        (prevValue) => prevValue === itemValue ? "" : itemValue
      );
    },
    onItemDismiss: () => setValue("")
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.nav, _extends({
    "aria-label": "Main",
    "data-orientation": orientation,
    dir: direction
  }, NavigationMenuProps, {
    ref: composedRef
  })));
});
var $322c88a641701f3b$var$NavigationMenuProvider = (props) => {
  const { scope, isRootMenu, rootNavigationMenu, dir, orientation, children, value, onItemSelect, onItemDismiss, onTriggerEnter, onTriggerLeave, onContentEnter, onContentLeave } = props;
  const [viewport, setViewport] = (0, import_react.useState)(null);
  const [viewportContent, setViewportContent] = (0, import_react.useState)(/* @__PURE__ */ new Map());
  const [indicatorTrack, setIndicatorTrack] = (0, import_react.useState)(null);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuProviderImpl, {
    scope,
    isRootMenu,
    rootNavigationMenu,
    value,
    previousValue: $010c2913dbd2fe3d$export$5cae361ad82dce8b(value),
    baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
    dir,
    orientation,
    viewport,
    onViewportChange: setViewport,
    indicatorTrack,
    onIndicatorTrackChange: setIndicatorTrack,
    onTriggerEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerEnter),
    onTriggerLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onTriggerLeave),
    onContentEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentEnter),
    onContentLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onContentLeave),
    onItemSelect: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemSelect),
    onItemDismiss: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onItemDismiss),
    onViewportContentChange: (0, import_react.useCallback)((contentValue, contentData) => {
      setViewportContent((prevContent) => {
        prevContent.set(contentValue, contentData);
        return new Map(prevContent);
      });
    }, []),
    onViewportContentRemove: (0, import_react.useCallback)((contentValue) => {
      setViewportContent((prevContent) => {
        if (!prevContent.has(contentValue))
          return prevContent;
        prevContent.delete(contentValue);
        return new Map(prevContent);
      });
    }, [])
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$Collection.Provider, {
    scope
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$ViewportContentProvider, {
    scope,
    items: viewportContent
  }, children)));
};
var $322c88a641701f3b$var$LIST_NAME = "NavigationMenuList";
var $322c88a641701f3b$export$c361068a95fd2286 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...listProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$LIST_NAME, __scopeNavigationMenu);
  const list = /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.ul, _extends({
    "data-orientation": context.orientation
  }, listProps, {
    ref: forwardedRef
  }));
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, {
    style: {
      position: "relative"
    },
    ref: context.onIndicatorTrackChange
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$Collection.Slot, {
    scope: __scopeNavigationMenu
  }, context.isRootMenu ? /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, list) : list));
});
var $322c88a641701f3b$var$ITEM_NAME = "NavigationMenuItem";
var [$322c88a641701f3b$var$NavigationMenuItemContextProvider, $322c88a641701f3b$var$useNavigationMenuItemContext] = $322c88a641701f3b$var$createNavigationMenuContext($322c88a641701f3b$var$ITEM_NAME);
var $322c88a641701f3b$export$ffdbb83a2de845c2 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value: valueProp, ...itemProps } = props;
  const autoValue = $1746a345f3d73bb7$export$f680877a34711e37();
  const value = valueProp || autoValue || "LEGACY_REACT_AUTO_VALUE";
  const contentRef = (0, import_react.useRef)(null);
  const triggerRef = (0, import_react.useRef)(null);
  const focusProxyRef = (0, import_react.useRef)(null);
  const restoreContentTabOrderRef = (0, import_react.useRef)(() => {
  });
  const wasEscapeCloseRef = (0, import_react.useRef)(false);
  const handleContentEntry = (0, import_react.useCallback)((side = "start") => {
    if (contentRef.current) {
      restoreContentTabOrderRef.current();
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        $322c88a641701f3b$var$focusFirst(side === "start" ? candidates : candidates.reverse());
    }
  }, []);
  const handleContentExit = (0, import_react.useCallback)(() => {
    if (contentRef.current) {
      const candidates = $322c88a641701f3b$var$getTabbableCandidates(contentRef.current);
      if (candidates.length)
        restoreContentTabOrderRef.current = $322c88a641701f3b$var$removeFromTabOrder(candidates);
    }
  }, []);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuItemContextProvider, {
    scope: __scopeNavigationMenu,
    value,
    triggerRef,
    contentRef,
    focusProxyRef,
    wasEscapeCloseRef,
    onEntryKeyDown: handleContentEntry,
    onFocusProxyEnter: handleContentEntry,
    onRootContentClose: handleContentExit,
    onContentFocusOutside: handleContentExit
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.li, _extends({}, itemProps, {
    ref: forwardedRef
  })));
});
var $322c88a641701f3b$var$TRIGGER_NAME = "NavigationMenuTrigger";
var $322c88a641701f3b$export$37fe8002734d8f2 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, disabled, ...triggerProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$TRIGGER_NAME, props.__scopeNavigationMenu);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, itemContext.triggerRef, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, itemContext.value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, itemContext.value);
  const hasPointerMoveOpenedRef = (0, import_react.useRef)(false);
  const wasClickCloseRef = (0, import_react.useRef)(false);
  const open = itemContext.value === context.value;
  return /* @__PURE__ */ (0, import_react.createElement)(import_react.Fragment, null, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$Collection.ItemSlot, {
    scope: __scopeNavigationMenu,
    value: itemContext.value
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    id: triggerId,
    disabled,
    "data-disabled": disabled ? "" : void 0,
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "aria-expanded": open,
    "aria-controls": contentId
  }, triggerProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, () => {
      wasClickCloseRef.current = false;
      itemContext.wasEscapeCloseRef.current = false;
    }),
    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerMove, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled || wasClickCloseRef.current || itemContext.wasEscapeCloseRef.current || hasPointerMoveOpenedRef.current)
        return;
      context.onTriggerEnter(itemContext.value);
      hasPointerMoveOpenedRef.current = true;
    })),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(() => {
      if (disabled)
        return;
      context.onTriggerLeave();
      hasPointerMoveOpenedRef.current = false;
    })),
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, () => {
      context.onItemSelect(itemContext.value);
      wasClickCloseRef.current = open;
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const verticalEntryKey = context.dir === "rtl" ? "ArrowLeft" : "ArrowRight";
      const entryKey = {
        horizontal: "ArrowDown",
        vertical: verticalEntryKey
      }[context.orientation];
      if (open && event.key === entryKey) {
        itemContext.onEntryKeyDown();
        event.preventDefault();
      }
    })
  })))), open && /* @__PURE__ */ (0, import_react.createElement)(import_react.Fragment, null, /* @__PURE__ */ (0, import_react.createElement)($ea1ef594cf570d83$export$be92b6f5f03c0fe9, {
    "aria-hidden": true,
    tabIndex: 0,
    ref: itemContext.focusProxyRef,
    onFocus: (event) => {
      const content = itemContext.contentRef.current;
      const prevFocusedElement = event.relatedTarget;
      const wasTriggerFocused = prevFocusedElement === ref.current;
      const wasFocusFromContent = content === null || content === void 0 ? void 0 : content.contains(prevFocusedElement);
      if (wasTriggerFocused || !wasFocusFromContent)
        itemContext.onFocusProxyEnter(wasTriggerFocused ? "start" : "end");
    }
  }), context.viewport && /* @__PURE__ */ (0, import_react.createElement)("span", {
    "aria-owns": contentId
  })));
});
var $322c88a641701f3b$var$LINK_SELECT = "navigationMenu.linkSelect";
var $322c88a641701f3b$export$6893bf21536567da = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, active, onSelect, ...linkProps } = props;
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupItem, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.a, _extends({
    "data-active": active ? "" : void 0,
    "aria-current": active ? "page" : void 0
  }, linkProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, (event1) => {
      const target = event1.target;
      const linkSelectEvent = new CustomEvent($322c88a641701f3b$var$LINK_SELECT, {
        bubbles: true,
        cancelable: true
      });
      target.addEventListener(
        $322c88a641701f3b$var$LINK_SELECT,
        (event) => onSelect === null || onSelect === void 0 ? void 0 : onSelect(event),
        {
          once: true
        }
      );
      $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, linkSelectEvent);
      if (!linkSelectEvent.defaultPrevented && !event1.metaKey) {
        const rootContentDismissEvent = new CustomEvent($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
          bubbles: true,
          cancelable: true
        });
        $8927f6f2acc4f386$export$6d1a0317bde7de7f(target, rootContentDismissEvent);
      }
    }, {
      checkForDefaultPrevented: false
    })
  })));
});
var $322c88a641701f3b$var$INDICATOR_NAME = "NavigationMenuIndicator";
var $322c88a641701f3b$export$8ddb526647c0d8fb = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, props.__scopeNavigationMenu);
  const isVisible = Boolean(context.value);
  return context.indicatorTrack ? /* @__PURE__ */ import_react_dom.default.createPortal(/* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || isVisible
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuIndicatorImpl, _extends({}, indicatorProps, {
    ref: forwardedRef
  }))), context.indicatorTrack) : null;
});
var $322c88a641701f3b$var$NavigationMenuIndicatorImpl = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...indicatorProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$INDICATOR_NAME, __scopeNavigationMenu);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const [activeTrigger, setActiveTrigger] = (0, import_react.useState)(null);
  const [position, setPosition] = (0, import_react.useState)(null);
  const isHorizontal = context.orientation === "horizontal";
  const isVisible = Boolean(context.value);
  (0, import_react.useEffect)(() => {
    var _items$find;
    const items = getItems();
    const triggerNode = (_items$find = items.find(
      (item) => item.value === context.value
    )) === null || _items$find === void 0 ? void 0 : _items$find.ref.current;
    if (triggerNode)
      setActiveTrigger(triggerNode);
  }, [
    getItems,
    context.value
  ]);
  const handlePositionChange = () => {
    if (activeTrigger)
      setPosition({
        size: isHorizontal ? activeTrigger.offsetWidth : activeTrigger.offsetHeight,
        offset: isHorizontal ? activeTrigger.offsetLeft : activeTrigger.offsetTop
      });
  };
  $322c88a641701f3b$var$useResizeObserver(activeTrigger, handlePositionChange);
  $322c88a641701f3b$var$useResizeObserver(context.indicatorTrack, handlePositionChange);
  return position ? /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "aria-hidden": true,
    "data-state": isVisible ? "visible" : "hidden",
    "data-orientation": context.orientation
  }, indicatorProps, {
    ref: forwardedRef,
    style: {
      position: "absolute",
      ...isHorizontal ? {
        left: 0,
        width: position.size + "px",
        transform: `translateX(${position.offset}px)`
      } : {
        top: 0,
        height: position.size + "px",
        transform: `translateY(${position.offset}px)`
      },
      ...indicatorProps.style
    }
  })) : null;
});
var $322c88a641701f3b$var$CONTENT_NAME = "NavigationMenuContent";
var $322c88a641701f3b$export$38e00e996c2f93f7 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const itemContext = $322c88a641701f3b$var$useNavigationMenuItemContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(itemContext.contentRef, forwardedRef);
  const open = itemContext.value === context.value;
  const commonProps = {
    value: itemContext.value,
    triggerRef: itemContext.triggerRef,
    focusProxyRef: itemContext.focusProxyRef,
    wasEscapeCloseRef: itemContext.wasEscapeCloseRef,
    onContentFocusOutside: itemContext.onContentFocusOutside,
    onRootContentClose: itemContext.onRootContentClose,
    ...contentProps
  };
  return !context.viewport ? /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open)
  }, commonProps, {
    ref: composedRefs,
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave)),
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ...commonProps.style
    }
  }))) : /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$ViewportContentMounter, _extends({
    forceMount
  }, commonProps, {
    ref: composedRefs
  }));
});
var $322c88a641701f3b$var$ViewportContentMounter = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, props.__scopeNavigationMenu);
  const { onViewportContentChange, onViewportContentRemove } = context;
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    onViewportContentChange(props.value, {
      ref: forwardedRef,
      ...props
    });
  }, [
    props,
    forwardedRef,
    onViewportContentChange
  ]);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    return () => onViewportContentRemove(props.value);
  }, [
    props.value,
    onViewportContentRemove
  ]);
  return null;
});
var $322c88a641701f3b$var$ROOT_CONTENT_DISMISS = "navigationMenu.rootContentDismiss";
var $322c88a641701f3b$var$NavigationMenuContentImpl = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, value, triggerRef, focusProxyRef, wasEscapeCloseRef, onRootContentClose, onContentFocusOutside, ...contentProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$CONTENT_NAME, __scopeNavigationMenu);
  const ref = (0, import_react.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(ref, forwardedRef);
  const triggerId = $322c88a641701f3b$var$makeTriggerId(context.baseId, value);
  const contentId = $322c88a641701f3b$var$makeContentId(context.baseId, value);
  const getItems = $322c88a641701f3b$var$useCollection(__scopeNavigationMenu);
  const prevMotionAttributeRef = (0, import_react.useRef)(null);
  const { onItemDismiss } = context;
  (0, import_react.useEffect)(() => {
    const content = ref.current;
    if (context.isRootMenu && content) {
      const handleClose = () => {
        var _triggerRef$current;
        onItemDismiss();
        onRootContentClose();
        if (content.contains(document.activeElement))
          (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0 || _triggerRef$current.focus();
      };
      content.addEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
      return () => content.removeEventListener($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, handleClose);
    }
  }, [
    context.isRootMenu,
    props.value,
    triggerRef,
    onItemDismiss,
    onRootContentClose
  ]);
  const motionAttribute = (0, import_react.useMemo)(() => {
    const items = getItems();
    const values = items.map(
      (item) => item.value
    );
    if (context.dir === "rtl")
      values.reverse();
    const index = values.indexOf(context.value);
    const prevIndex = values.indexOf(context.previousValue);
    const isSelected = value === context.value;
    const wasSelected = prevIndex === values.indexOf(value);
    if (!isSelected && !wasSelected)
      return prevMotionAttributeRef.current;
    const attribute = (() => {
      if (index !== prevIndex) {
        if (isSelected && prevIndex !== -1)
          return index > prevIndex ? "from-end" : "from-start";
        if (wasSelected && index !== -1)
          return index > prevIndex ? "to-start" : "to-end";
      }
      return null;
    })();
    prevMotionAttributeRef.current = attribute;
    return attribute;
  }, [
    context.previousValue,
    context.value,
    context.dir,
    getItems,
    value
  ]);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroup, {
    asChild: true
  }, /* @__PURE__ */ (0, import_react.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    id: contentId,
    "aria-labelledby": triggerId,
    "data-motion": motionAttribute,
    "data-orientation": context.orientation
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => {
      var _ref$current;
      const rootContentDismissEvent = new Event($322c88a641701f3b$var$ROOT_CONTENT_DISMISS, {
        bubbles: true,
        cancelable: true
      });
      (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.dispatchEvent(rootContentDismissEvent);
    },
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onFocusOutside, (event) => {
      var _context$rootNavigati;
      onContentFocusOutside();
      const target = event.target;
      if ((_context$rootNavigati = context.rootNavigationMenu) !== null && _context$rootNavigati !== void 0 && _context$rootNavigati.contains(target))
        event.preventDefault();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      var _context$viewport;
      const target = event.target;
      const isTrigger = getItems().some((item) => {
        var _item$ref$current;
        return (_item$ref$current = item.ref.current) === null || _item$ref$current === void 0 ? void 0 : _item$ref$current.contains(target);
      });
      const isRootViewport = context.isRootMenu && ((_context$viewport = context.viewport) === null || _context$viewport === void 0 ? void 0 : _context$viewport.contains(target));
      if (isTrigger || isRootViewport || !context.isRootMenu)
        event.preventDefault();
    }),
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isMetaKey = event.altKey || event.ctrlKey || event.metaKey;
      const isTabKey = event.key === "Tab" && !isMetaKey;
      if (isTabKey) {
        const candidates = $322c88a641701f3b$var$getTabbableCandidates(event.currentTarget);
        const focusedElement = document.activeElement;
        const index = candidates.findIndex(
          (candidate) => candidate === focusedElement
        );
        const isMovingBackwards = event.shiftKey;
        const nextCandidates = isMovingBackwards ? candidates.slice(0, index).reverse() : candidates.slice(index + 1, candidates.length);
        if ($322c88a641701f3b$var$focusFirst(nextCandidates))
          event.preventDefault();
        else {
          var _focusProxyRef$curren;
          (_focusProxyRef$curren = focusProxyRef.current) === null || _focusProxyRef$curren === void 0 || _focusProxyRef$curren.focus();
        }
      }
    }),
    onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onEscapeKeyDown, (event) => {
      wasEscapeCloseRef.current = true;
    })
  })));
});
var $322c88a641701f3b$var$VIEWPORT_NAME = "NavigationMenuViewport";
var $322c88a641701f3b$export$ee880b97cc6d44a5 = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { forceMount, ...viewportProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, props.__scopeNavigationMenu);
  const open = Boolean(context.value);
  return /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || open
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuViewportImpl, _extends({}, viewportProps, {
    ref: forwardedRef
  })));
});
var $322c88a641701f3b$var$NavigationMenuViewportImpl = /* @__PURE__ */ (0, import_react.forwardRef)((props1, forwardedRef) => {
  const { __scopeNavigationMenu, children, ...viewportImplProps } = props1;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$VIEWPORT_NAME, __scopeNavigationMenu);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.onViewportChange);
  const viewportContentContext = $322c88a641701f3b$var$useViewportContentContext($322c88a641701f3b$var$CONTENT_NAME, props1.__scopeNavigationMenu);
  const [size, setSize] = (0, import_react.useState)(null);
  const [content, setContent] = (0, import_react.useState)(null);
  const viewportWidth = size ? (size === null || size === void 0 ? void 0 : size.width) + "px" : void 0;
  const viewportHeight = size ? (size === null || size === void 0 ? void 0 : size.height) + "px" : void 0;
  const open = Boolean(context.value);
  const activeContentValue = open ? context.value : context.previousValue;
  const handleSizeChange = () => {
    if (content)
      setSize({
        width: content.offsetWidth,
        height: content.offsetHeight
      });
  };
  $322c88a641701f3b$var$useResizeObserver(content, handleSizeChange);
  return /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    "data-state": $322c88a641701f3b$var$getOpenState(open),
    "data-orientation": context.orientation
  }, viewportImplProps, {
    ref: composedRefs,
    style: {
      // Prevent interaction when animating out
      pointerEvents: !open && context.isRootMenu ? "none" : void 0,
      ["--radix-navigation-menu-viewport-width"]: viewportWidth,
      ["--radix-navigation-menu-viewport-height"]: viewportHeight,
      ...viewportImplProps.style
    },
    onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerEnter, context.onContentEnter),
    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props1.onPointerLeave, $322c88a641701f3b$var$whenMouse(context.onContentLeave))
  }), Array.from(viewportContentContext.items).map(([value, { ref, forceMount, ...props }]) => {
    const isActive = activeContentValue === value;
    return /* @__PURE__ */ (0, import_react.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      key: value,
      present: forceMount || isActive
    }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$NavigationMenuContentImpl, _extends({}, props, {
      ref: $6ed0406888f73fc4$export$43e446d32b3d21af(ref, (node) => {
        if (isActive && node)
          setContent(node);
      })
    })));
  }));
});
var $322c88a641701f3b$var$FOCUS_GROUP_NAME = "FocusGroup";
var $322c88a641701f3b$var$FocusGroup = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupCollection.Provider, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupCollection.Slot, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
    dir: context.dir
  }, groupProps, {
    ref: forwardedRef
  }))));
});
var $322c88a641701f3b$var$ARROW_KEYS = [
  "ArrowRight",
  "ArrowLeft",
  "ArrowUp",
  "ArrowDown"
];
var $322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME = "FocusGroupItem";
var $322c88a641701f3b$var$FocusGroupItem = /* @__PURE__ */ (0, import_react.forwardRef)((props, forwardedRef) => {
  const { __scopeNavigationMenu, ...groupProps } = props;
  const getItems = $322c88a641701f3b$var$useFocusGroupCollection(__scopeNavigationMenu);
  const context = $322c88a641701f3b$var$useNavigationMenuContext($322c88a641701f3b$var$FOCUS_GROUP_ITEM_NAME, __scopeNavigationMenu);
  return /* @__PURE__ */ (0, import_react.createElement)($322c88a641701f3b$var$FocusGroupCollection.ItemSlot, {
    scope: __scopeNavigationMenu
  }, /* @__PURE__ */ (0, import_react.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({}, groupProps, {
    ref: forwardedRef,
    onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onKeyDown, (event) => {
      const isFocusNavigationKey = [
        "Home",
        "End",
        ...$322c88a641701f3b$var$ARROW_KEYS
      ].includes(event.key);
      if (isFocusNavigationKey) {
        let candidateNodes = getItems().map(
          (item) => item.ref.current
        );
        const prevItemKey = context.dir === "rtl" ? "ArrowRight" : "ArrowLeft";
        const prevKeys = [
          prevItemKey,
          "ArrowUp",
          "End"
        ];
        if (prevKeys.includes(event.key))
          candidateNodes.reverse();
        if ($322c88a641701f3b$var$ARROW_KEYS.includes(event.key)) {
          const currentIndex = candidateNodes.indexOf(event.currentTarget);
          candidateNodes = candidateNodes.slice(currentIndex + 1);
        }
        setTimeout(
          () => $322c88a641701f3b$var$focusFirst(candidateNodes)
        );
        event.preventDefault();
      }
    })
  })));
});
function $322c88a641701f3b$var$getTabbableCandidates(container) {
  const nodes = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
}
function $322c88a641701f3b$var$focusFirst(candidates) {
  const previouslyFocusedElement = document.activeElement;
  return candidates.some((candidate) => {
    if (candidate === previouslyFocusedElement)
      return true;
    candidate.focus();
    return document.activeElement !== previouslyFocusedElement;
  });
}
function $322c88a641701f3b$var$removeFromTabOrder(candidates) {
  candidates.forEach((candidate) => {
    candidate.dataset.tabindex = candidate.getAttribute("tabindex") || "";
    candidate.setAttribute("tabindex", "-1");
  });
  return () => {
    candidates.forEach((candidate) => {
      const prevTabIndex = candidate.dataset.tabindex;
      candidate.setAttribute("tabindex", prevTabIndex);
    });
  };
}
function $322c88a641701f3b$var$useResizeObserver(element, onResize) {
  const handleResize = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(onResize);
  $9f79659886946c16$export$e5c5a5f917a5871c(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
  }, [
    element,
    handleResize
  ]);
}
function $322c88a641701f3b$var$getOpenState(open) {
  return open ? "open" : "closed";
}
function $322c88a641701f3b$var$makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function $322c88a641701f3b$var$makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
function $322c88a641701f3b$var$whenMouse(handler) {
  return (event) => event.pointerType === "mouse" ? handler(event) : void 0;
}
var $322c88a641701f3b$export$be92b6f5f03c0fe9 = $322c88a641701f3b$export$5b2278cf1e8bcae2;
var $322c88a641701f3b$export$54c2e3dc7acea9f5 = $322c88a641701f3b$export$c361068a95fd2286;
var $322c88a641701f3b$export$6d08773d2e66f8f2 = $322c88a641701f3b$export$ffdbb83a2de845c2;
var $322c88a641701f3b$export$41fb9f06171c75f4 = $322c88a641701f3b$export$37fe8002734d8f2;
var $322c88a641701f3b$export$a6c7ac8248d6e38a = $322c88a641701f3b$export$6893bf21536567da;
var $322c88a641701f3b$export$adb584737d712b70 = $322c88a641701f3b$export$8ddb526647c0d8fb;
var $322c88a641701f3b$export$7c6e2c02157bb7d2 = $322c88a641701f3b$export$38e00e996c2f93f7;
var $322c88a641701f3b$export$d5c6c08dc2d3ca7 = $322c88a641701f3b$export$ee880b97cc6d44a5;

// @/design/primitives/navigation-menu.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $322c88a641701f3b$export$be92b6f5f03c0fe9,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center mx-auto",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavigationMenuViewport, {}, void 0, false, {
        fileName: "@/design/primitives/navigation-menu.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  true,
  {
    fileName: "@/design/primitives/navigation-menu.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  this
));
NavigationMenu.displayName = $322c88a641701f3b$export$be92b6f5f03c0fe9.displayName;
var NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $322c88a641701f3b$export$54c2e3dc7acea9f5,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/navigation-menu.tsx",
    lineNumber: 30,
    columnNumber: 3
  },
  this
));
NavigationMenuList.displayName = $322c88a641701f3b$export$54c2e3dc7acea9f5.displayName;
var NavigationMenuItem = $322c88a641701f3b$export$6d08773d2e66f8f2;
var navigationMenuTriggerStyle = (isMobile = false) => cn(
  `${isMobile ? "bg-white py-4" : "bg-gray-100 py-2"} group inline-flex h-10 w-max items-center justify-center rounded-md px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`
);
var NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $322c88a641701f3b$export$41fb9f06171c75f4,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        },
        void 0,
        false,
        {
          fileName: "@/design/primitives/navigation-menu.tsx",
          lineNumber: 58,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  true,
  {
    fileName: "@/design/primitives/navigation-menu.tsx",
    lineNumber: 52,
    columnNumber: 3
  },
  this
));
NavigationMenuTrigger.displayName = $322c88a641701f3b$export$41fb9f06171c75f4.displayName;
var NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $322c88a641701f3b$export$7c6e2c02157bb7d2,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/navigation-menu.tsx",
    lineNumber: 70,
    columnNumber: 3
  },
  this
));
NavigationMenuContent.displayName = $322c88a641701f3b$export$7c6e2c02157bb7d2.displayName;
var NavigationMenuLink = $322c88a641701f3b$export$a6c7ac8248d6e38a;
var NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $322c88a641701f3b$export$d5c6c08dc2d3ca7,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/navigation-menu.tsx",
    lineNumber: 88,
    columnNumber: 5
  },
  this
) }, void 0, false, {
  fileName: "@/design/primitives/navigation-menu.tsx",
  lineNumber: 87,
  columnNumber: 3
}, this));
NavigationMenuViewport.displayName = $322c88a641701f3b$export$d5c6c08dc2d3ca7.displayName;
var NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
  $322c88a641701f3b$export$adb584737d712b70,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }, void 0, false, {
      fileName: "@/design/primitives/navigation-menu.tsx",
      lineNumber: 113,
      columnNumber: 5
    }, this)
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/navigation-menu.tsx",
    lineNumber: 105,
    columnNumber: 3
  },
  this
));
NavigationMenuIndicator.displayName = $322c88a641701f3b$export$adb584737d712b70.displayName;

// @/design/primitives/drawer.tsx
var React2 = __toESM(require_react(), 1);

// node_modules/@radix-ui/react-dialog/dist/index.mjs
var import_react2 = __toESM(require_react(), 1);
var $5d3850c4d0b4e6c7$var$DIALOG_NAME = "Dialog";
var [$5d3850c4d0b4e6c7$var$createDialogContext, $5d3850c4d0b4e6c7$export$cc702773b8ea3e41] = $c512c27ab02ef895$export$50c7b4e9d9f19c1($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var [$5d3850c4d0b4e6c7$var$DialogProvider, $5d3850c4d0b4e6c7$var$useDialogContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$DIALOG_NAME);
var $5d3850c4d0b4e6c7$export$3ddf2d174ce01153 = (props) => {
  const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
  const triggerRef = (0, import_react2.useRef)(null);
  const contentRef = (0, import_react2.useRef)(null);
  const [open = false, setOpen] = $71cd76cc60e0454e$export$6f32135080cb4c3({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange
  });
  return /* @__PURE__ */ (0, import_react2.createElement)($5d3850c4d0b4e6c7$var$DialogProvider, {
    scope: __scopeDialog,
    triggerRef,
    contentRef,
    contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
    titleId: $1746a345f3d73bb7$export$f680877a34711e37(),
    descriptionId: $1746a345f3d73bb7$export$f680877a34711e37(),
    open,
    onOpenChange: setOpen,
    onOpenToggle: (0, import_react2.useCallback)(
      () => setOpen(
        (prevOpen) => !prevOpen
      ),
      [
        setOpen
      ]
    ),
    modal
  }, children);
};
var $5d3850c4d0b4e6c7$var$TRIGGER_NAME = "DialogTrigger";
var $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...triggerProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TRIGGER_NAME, __scopeDialog);
  const composedTriggerRef = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.triggerRef);
  return /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": context.open,
    "aria-controls": context.contentId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, triggerProps, {
    ref: composedTriggerRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onClick, context.onOpenToggle)
  }));
});
var $5d3850c4d0b4e6c7$var$PORTAL_NAME = "DialogPortal";
var [$5d3850c4d0b4e6c7$var$PortalProvider, $5d3850c4d0b4e6c7$var$usePortalContext] = $5d3850c4d0b4e6c7$var$createDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, {
  forceMount: void 0
});
var $5d3850c4d0b4e6c7$export$dad7c95542bacce0 = (props) => {
  const { __scopeDialog, forceMount, children, container } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$PORTAL_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react2.createElement)($5d3850c4d0b4e6c7$var$PortalProvider, {
    scope: __scopeDialog,
    forceMount
  }, import_react2.Children.map(
    children,
    (child) => /* @__PURE__ */ (0, import_react2.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
      present: forceMount || context.open
    }, /* @__PURE__ */ (0, import_react2.createElement)($f1701beae083dbae$export$602eac185826482c, {
      asChild: true,
      container
    }, child))
  ));
};
var $5d3850c4d0b4e6c7$var$OVERLAY_NAME = "DialogOverlay";
var $5d3850c4d0b4e6c7$export$bd1d06c79be19e17 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, props.__scopeDialog);
  return context.modal ? /* @__PURE__ */ (0, import_react2.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, /* @__PURE__ */ (0, import_react2.createElement)($5d3850c4d0b4e6c7$var$DialogOverlayImpl, _extends({}, overlayProps, {
    ref: forwardedRef
  }))) : null;
});
var $5d3850c4d0b4e6c7$var$DialogOverlayImpl = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...overlayProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$OVERLAY_NAME, __scopeDialog);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, import_react2.createElement)(Combination_default, {
      as: $5e63c961fc1ce211$export$8c6ed5c666ac1360,
      allowPinchZoom: true,
      shards: [
        context.contentRef
      ]
    }, /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.div, _extends({
      "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
    }, overlayProps, {
      ref: forwardedRef,
      style: {
        pointerEvents: "auto",
        ...overlayProps.style
      }
    })))
  );
});
var $5d3850c4d0b4e6c7$var$CONTENT_NAME = "DialogContent";
var $5d3850c4d0b4e6c7$export$b6d9565de1e068cf = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const portalContext = $5d3850c4d0b4e6c7$var$usePortalContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const { forceMount = portalContext.forceMount, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  return /* @__PURE__ */ (0, import_react2.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
    present: forceMount || context.open
  }, context.modal ? /* @__PURE__ */ (0, import_react2.createElement)($5d3850c4d0b4e6c7$var$DialogContentModal, _extends({}, contentProps, {
    ref: forwardedRef
  })) : /* @__PURE__ */ (0, import_react2.createElement)($5d3850c4d0b4e6c7$var$DialogContentNonModal, _extends({}, contentProps, {
    ref: forwardedRef
  })));
});
var $5d3850c4d0b4e6c7$var$DialogContentModal = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const contentRef = (0, import_react2.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, context.contentRef, contentRef);
  (0, import_react2.useEffect)(() => {
    const content = contentRef.current;
    if (content)
      return hideOthers(content);
  }, []);
  return /* @__PURE__ */ (0, import_react2.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: composedRefs,
    trapFocus: context.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onCloseAutoFocus, (event) => {
      var _context$triggerRef$c;
      event.preventDefault();
      (_context$triggerRef$c = context.triggerRef.current) === null || _context$triggerRef$c === void 0 || _context$triggerRef$c.focus();
    }),
    onPointerDownOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(props.onPointerDownOutside, (event) => {
      const originalEvent = event.detail.originalEvent;
      const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
      const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
      if (isRightClick)
        event.preventDefault();
    }),
    onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onFocusOutside,
      (event) => event.preventDefault()
    )
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentNonModal = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, props.__scopeDialog);
  const hasInteractedOutsideRef = (0, import_react2.useRef)(false);
  const hasPointerDownOutsideRef = (0, import_react2.useRef)(false);
  return /* @__PURE__ */ (0, import_react2.createElement)($5d3850c4d0b4e6c7$var$DialogContentImpl, _extends({}, props, {
    ref: forwardedRef,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (event) => {
      var _props$onCloseAutoFoc;
      (_props$onCloseAutoFoc = props.onCloseAutoFocus) === null || _props$onCloseAutoFoc === void 0 || _props$onCloseAutoFoc.call(props, event);
      if (!event.defaultPrevented) {
        var _context$triggerRef$c2;
        if (!hasInteractedOutsideRef.current)
          (_context$triggerRef$c2 = context.triggerRef.current) === null || _context$triggerRef$c2 === void 0 || _context$triggerRef$c2.focus();
        event.preventDefault();
      }
      hasInteractedOutsideRef.current = false;
      hasPointerDownOutsideRef.current = false;
    },
    onInteractOutside: (event) => {
      var _props$onInteractOuts, _context$triggerRef$c3;
      (_props$onInteractOuts = props.onInteractOutside) === null || _props$onInteractOuts === void 0 || _props$onInteractOuts.call(props, event);
      if (!event.defaultPrevented) {
        hasInteractedOutsideRef.current = true;
        if (event.detail.originalEvent.type === "pointerdown")
          hasPointerDownOutsideRef.current = true;
      }
      const target = event.target;
      const targetIsTrigger = (_context$triggerRef$c3 = context.triggerRef.current) === null || _context$triggerRef$c3 === void 0 ? void 0 : _context$triggerRef$c3.contains(target);
      if (targetIsTrigger)
        event.preventDefault();
      if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current)
        event.preventDefault();
    }
  }));
});
var $5d3850c4d0b4e6c7$var$DialogContentImpl = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CONTENT_NAME, __scopeDialog);
  const contentRef = (0, import_react2.useRef)(null);
  const composedRefs = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(forwardedRef, contentRef);
  $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c();
  return /* @__PURE__ */ (0, import_react2.createElement)(import_react2.Fragment, null, /* @__PURE__ */ (0, import_react2.createElement)($d3863c46a17e8a28$export$20e40289641fbbb6, {
    asChild: true,
    loop: true,
    trapped: trapFocus,
    onMountAutoFocus: onOpenAutoFocus,
    onUnmountAutoFocus: onCloseAutoFocus
  }, /* @__PURE__ */ (0, import_react2.createElement)($5cb92bef7577960e$export$177fb62ff3ec1f22, _extends({
    role: "dialog",
    id: context.contentId,
    "aria-describedby": context.descriptionId,
    "aria-labelledby": context.titleId,
    "data-state": $5d3850c4d0b4e6c7$var$getState(context.open)
  }, contentProps, {
    ref: composedRefs,
    onDismiss: () => context.onOpenChange(false)
  }))), false);
});
var $5d3850c4d0b4e6c7$var$TITLE_NAME = "DialogTitle";
var $5d3850c4d0b4e6c7$export$16f7638e4a34b909 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...titleProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$TITLE_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.h2, _extends({
    id: context.titleId
  }, titleProps, {
    ref: forwardedRef
  }));
});
var $5d3850c4d0b4e6c7$var$DESCRIPTION_NAME = "DialogDescription";
var $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5 = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...descriptionProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$DESCRIPTION_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.p, _extends({
    id: context.descriptionId
  }, descriptionProps, {
    ref: forwardedRef
  }));
});
var $5d3850c4d0b4e6c7$var$CLOSE_NAME = "DialogClose";
var $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac = /* @__PURE__ */ (0, import_react2.forwardRef)((props, forwardedRef) => {
  const { __scopeDialog, ...closeProps } = props;
  const context = $5d3850c4d0b4e6c7$var$useDialogContext($5d3850c4d0b4e6c7$var$CLOSE_NAME, __scopeDialog);
  return /* @__PURE__ */ (0, import_react2.createElement)($8927f6f2acc4f386$export$250ffa63cdc0d034.button, _extends({
    type: "button"
  }, closeProps, {
    ref: forwardedRef,
    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
      props.onClick,
      () => context.onOpenChange(false)
    )
  }));
});
function $5d3850c4d0b4e6c7$var$getState(open) {
  return open ? "open" : "closed";
}
var $5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME = "DialogTitleWarning";
var [$5d3850c4d0b4e6c7$export$69b62a49393917d6, $5d3850c4d0b4e6c7$var$useWarningContext] = $c512c27ab02ef895$export$fd42f52fd3ae1109($5d3850c4d0b4e6c7$var$TITLE_WARNING_NAME, {
  contentName: $5d3850c4d0b4e6c7$var$CONTENT_NAME,
  titleName: $5d3850c4d0b4e6c7$var$TITLE_NAME,
  docsSlug: "dialog"
});
var $5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9 = $5d3850c4d0b4e6c7$export$3ddf2d174ce01153;
var $5d3850c4d0b4e6c7$export$41fb9f06171c75f4 = $5d3850c4d0b4e6c7$export$2e1e1122cf0cba88;
var $5d3850c4d0b4e6c7$export$602eac185826482c = $5d3850c4d0b4e6c7$export$dad7c95542bacce0;
var $5d3850c4d0b4e6c7$export$c6fdb837b070b4ff = $5d3850c4d0b4e6c7$export$bd1d06c79be19e17;
var $5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2 = $5d3850c4d0b4e6c7$export$b6d9565de1e068cf;
var $5d3850c4d0b4e6c7$export$f99233281efd08a0 = $5d3850c4d0b4e6c7$export$16f7638e4a34b909;
var $5d3850c4d0b4e6c7$export$393edc798c47379d = $5d3850c4d0b4e6c7$export$94e94c2ec2c954d5;
var $5d3850c4d0b4e6c7$export$f39c2d165cd861fe = $5d3850c4d0b4e6c7$export$fba2fb7cd781b7ac;

// node_modules/vaul/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var import_react4 = __toESM(require_react(), 1);
var import_react5 = __toESM(require_react(), 1);
var Be = __toESM(require_react(), 1);
var import_react6 = __toESM(require_react(), 1);
var import_react7 = __toESM(require_react(), 1);
var import_react8 = __toESM(require_react(), 1);
"use client";
"use client";
var Ee = import_react4.default.createContext({ drawerRef: { current: null }, overlayRef: { current: null }, scaleBackground: () => {
}, onPress: () => {
}, onRelease: () => {
}, onDrag: () => {
}, onNestedDrag: () => {
}, onNestedOpenChange: () => {
}, onNestedRelease: () => {
}, openProp: void 0, dismissible: false, isOpen: false, keyboardIsOpen: { current: false }, snapPointsOffset: null, snapPoints: null, modal: false, shouldFade: false, activeSnapPoint: null, onOpenChange: () => {
}, setActiveSnapPoint: () => {
}, visible: false, closeDrawer: () => {
}, setVisible: () => {
}, direction: "bottom" });
var fe = () => import_react4.default.useContext(Ee);
function Te(e, { insertAt: n } = {}) {
  if (!e || typeof document == "undefined")
    return;
  let t = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", n === "top" && t.firstChild ? t.insertBefore(r, t.firstChild) : t.appendChild(r), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e));
}
Te(`[vaul-drawer]{touch-action:none;transition:transform .5s cubic-bezier(.32,.72,0,1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top],.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left],.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height, 0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left],[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height, 0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32,.72,0,1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]:after{content:"";position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]:after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]:after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]:after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]:after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay="true"]):not([data-state="closed"]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible="false"]){opacity:1}@keyframes fake-animation{}@media (hover: hover) and (pointer: fine){[vaul-drawer]{user-select:none}}
`);
var pt = typeof window != "undefined" ? import_react5.useLayoutEffect : import_react5.useEffect;
function Se(...e) {
  return (...n) => {
    for (let t of e)
      typeof t == "function" && t(...n);
  };
}
function vt() {
  return xe(/^Mac/);
}
function wt() {
  return xe(/^iPhone/);
}
function ht() {
  return xe(/^iPad/) || vt() && navigator.maxTouchPoints > 1;
}
function Re() {
  return wt() || ht();
}
function xe(e) {
  return typeof window != "undefined" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var ye = typeof document != "undefined" && window.visualViewport;
function We(e) {
  let n = window.getComputedStyle(e);
  return /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
}
function Ue(e) {
  for (We(e) && (e = e.parentElement); e && !We(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
var Et = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
var me = 0;
var De;
function je(e = {}) {
  let { isDisabled: n } = e;
  pt(() => {
    if (!n)
      return me++, me === 1 && (Re() ? De = yt() : De = Tt()), () => {
        me--, me === 0 && De();
      };
  }, [n]);
}
function Tt() {
  return Se(ke(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
}
function yt() {
  let e, n = 0, t = (h) => {
    e = Ue(h.target), !(e === document.documentElement && e === document.body) && (n = h.changedTouches[0].pageY);
  }, r = (h) => {
    if (!e || e === document.documentElement || e === document.body) {
      h.preventDefault();
      return;
    }
    let d = h.changedTouches[0].pageY, u = e.scrollTop, $ = e.scrollHeight - e.clientHeight;
    $ !== 0 && ((u <= 0 && d > n || u >= $ && d < n) && h.preventDefault(), n = d);
  }, a = (h) => {
    let d = h.target;
    ge(d) && d !== document.activeElement && (h.preventDefault(), d.style.transform = "translateY(-2000px)", d.focus(), requestAnimationFrame(() => {
      d.style.transform = "";
    }));
  }, o = (h) => {
    let d = h.target;
    ge(d) && (d.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      d.style.transform = "", ye && (ye.height < window.innerHeight ? requestAnimationFrame(() => {
        Fe(d);
      }) : ye.addEventListener("resize", () => Fe(d), { once: true }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, b = window.pageXOffset, H = window.pageYOffset, x = Se(ke(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let S = Se(oe(document, "touchstart", t, { passive: false, capture: true }), oe(document, "touchmove", r, { passive: false, capture: true }), oe(document, "touchend", a, { passive: false, capture: true }), oe(document, "focus", o, true), oe(window, "scroll", s));
  return () => {
    x(), S(), window.scrollTo(b, H);
  };
}
function ke(e, n, t) {
  let r = e.style[n];
  return e.style[n] = t, () => {
    e.style[n] = r;
  };
}
function oe(e, n, t, r) {
  return e.addEventListener(n, t, r), () => {
    e.removeEventListener(n, t, r);
  };
}
function Fe(e) {
  let n = document.scrollingElement || document.documentElement;
  for (; e && e !== n; ) {
    let t = Ue(e);
    if (t !== document.documentElement && t !== document.body && t !== e) {
      let r = t.getBoundingClientRect().top, a = e.getBoundingClientRect().top, o = e.getBoundingClientRect().bottom, s = t.getBoundingClientRect().bottom;
      o > s && (t.scrollTop += a - r);
    }
    e = t.parentElement;
  }
}
function ge(e) {
  return e instanceof HTMLInputElement && !Et.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Dt(e, n) {
  typeof e == "function" ? e(n) : e != null && (e.current = n);
}
function St(...e) {
  return (n) => e.forEach((t) => Dt(t, n));
}
function He(...e) {
  return Be.useCallback(St(...e), e);
}
var F = null;
function ze({ isOpen: e, modal: n, nested: t, hasBeenOpened: r, preventScrollRestoration: a }) {
  let [o, s] = import_react6.default.useState(typeof window != "undefined" ? window.location.href : ""), b = import_react6.default.useRef(0), H = import_react6.default.useCallback(() => {
    if (F === null && e) {
      F = { position: document.body.style.position, top: document.body.style.top, left: document.body.style.left, height: document.body.style.height };
      let { scrollX: S, innerHeight: h } = window;
      document.body.style.setProperty("position", "fixed", "important"), document.body.style.top = `${-b.current}px`, document.body.style.left = `${-S}px`, document.body.style.right = "0px", document.body.style.height = "auto", setTimeout(() => requestAnimationFrame(() => {
        let d = h - window.innerHeight;
        d && b.current >= h && (document.body.style.top = `${-(b.current + d)}px`);
      }), 300);
    }
  }, [e]), x = import_react6.default.useCallback(() => {
    if (F !== null) {
      let S = -parseInt(document.body.style.top, 10), h = -parseInt(document.body.style.left, 10);
      document.body.style.position = F.position, document.body.style.top = F.top, document.body.style.left = F.left, document.body.style.height = F.height, document.body.style.right = "unset", requestAnimationFrame(() => {
        if (a && o !== window.location.href) {
          s(window.location.href);
          return;
        }
        window.scrollTo(h, S);
      }), F = null;
    }
  }, [o]);
  return import_react6.default.useEffect(() => {
    function S() {
      b.current = window.scrollY;
    }
    return S(), window.addEventListener("scroll", S), () => {
      window.removeEventListener("scroll", S);
    };
  }, []), import_react6.default.useEffect(() => {
    t || !r || (e ? (H(), n || setTimeout(() => {
      x();
    }, 500)) : x());
  }, [e, r, o, n, t, H, x]), { restorePositionSetting: x };
}
var Ye = /* @__PURE__ */ new WeakMap();
function y(e, n, t = false) {
  if (!e || !(e instanceof HTMLElement) || !n)
    return;
  let r = {};
  Object.entries(n).forEach(([a, o]) => {
    if (a.startsWith("--")) {
      e.style.setProperty(a, o);
      return;
    }
    r[a] = e.style[a], e.style[a] = o;
  }), !t && Ye.set(e, r);
}
function ie(e, n) {
  if (!e || !(e instanceof HTMLElement))
    return;
  let t = Ye.get(e);
  t && (n ? e.style[n] = t[n] : Object.entries(t).forEach(([r, a]) => {
    e.style[r] = a;
  }));
}
var R = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return true;
    case "left":
    case "right":
      return false;
    default:
      return e;
  }
};
function ae(e, n) {
  let t = window.getComputedStyle(e), r = t.transform || t.webkitTransform || t.mozTransform, a = r.match(/^matrix3d\((.+)\)$/);
  return a ? parseFloat(a[1].split(", ")[R(n) ? 13 : 12]) : (a = r.match(/^matrix\((.+)\)$/), a ? parseFloat(a[1].split(", ")[R(n) ? 5 : 4]) : null);
}
function _e(e) {
  return 8 * (Math.log(e + 1) - 2);
}
var T = { DURATION: 0.5, EASE: [0.32, 0.72, 0, 1] };
var be = 0.4;
function qe(e) {
  let n = import_react8.default.useRef(e);
  return import_react8.default.useEffect(() => {
    n.current = e;
  }), import_react8.default.useMemo(() => (...t) => {
    var r;
    return (r = n.current) == null ? void 0 : r.call(n, ...t);
  }, []);
}
function Rt({ defaultProp: e, onChange: n }) {
  let t = import_react8.default.useState(e), [r] = t, a = import_react8.default.useRef(r), o = qe(n);
  return import_react8.default.useEffect(() => {
    a.current !== r && (o(r), a.current = r);
  }, [r, a, o]), t;
}
function Xe({ prop: e, defaultProp: n, onChange: t = () => {
} }) {
  let [r, a] = Rt({ defaultProp: n, onChange: t }), o = e !== void 0, s = o ? e : r, b = qe(t), H = import_react8.default.useCallback((x) => {
    if (o) {
      let h = typeof x == "function" ? x(e) : x;
      h !== e && b(h);
    } else
      a(x);
  }, [o, e, a, b]);
  return [s, H];
}
function Ke({ activeSnapPointProp: e, setActiveSnapPointProp: n, snapPoints: t, drawerRef: r, overlayRef: a, fadeFromIndex: o, onSnapPointChange: s, direction: b = "bottom" }) {
  let [H, x] = Xe({ prop: e, defaultProp: t == null ? void 0 : t[0], onChange: n }), S = import_react7.default.useMemo(() => H === (t == null ? void 0 : t[t.length - 1]) || null, [t, H]), h = t && t.length > 0 && (o || o === 0) && !Number.isNaN(o) && t[o] === H || !t, d = import_react7.default.useMemo(() => t == null ? void 0 : t.findIndex((g) => g === H), [t, H]), u = import_react7.default.useMemo(() => {
    var g;
    return (g = t == null ? void 0 : t.map((p) => {
      let v = typeof window != "undefined", C = typeof p == "string", A = 0;
      if (C && (A = parseInt(p, 10)), R(b)) {
        let P = C ? A : v ? p * window.innerHeight : 0;
        return v ? b === "bottom" ? window.innerHeight - P : -window.innerHeight + P : P;
      }
      let N = C ? A : v ? p * window.innerWidth : 0;
      return v ? b === "right" ? window.innerWidth - N : -window.innerWidth + N : N;
    })) != null ? g : [];
  }, [t]), $ = import_react7.default.useMemo(() => d !== null ? u == null ? void 0 : u[d] : null, [u, d]), I = import_react7.default.useCallback((g) => {
    var v;
    let p = (v = u == null ? void 0 : u.findIndex((C) => C === g)) != null ? v : null;
    s(p), y(r.current, { transition: `transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`, transform: R(b) ? `translate3d(0, ${g}px, 0)` : `translate3d(${g}px, 0, 0)` }), u && p !== u.length - 1 && p !== o ? y(a.current, { transition: `opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`, opacity: "0" }) : y(a.current, { transition: `opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`, opacity: "1" }), x(p !== null ? t == null ? void 0 : t[p] : null);
  }, [r.current, t, u, o, a, x]);
  import_react7.default.useEffect(() => {
    var g;
    if (e) {
      let p = (g = t == null ? void 0 : t.findIndex((v) => v === e)) != null ? g : -1;
      u && p !== -1 && typeof u[p] == "number" && I(u[p]);
    }
  }, [e, t, u, I]);
  function U({ draggedDistance: g, closeDrawer: p, velocity: v, dismissible: C }) {
    if (o === void 0)
      return;
    let A = b === "bottom" || b === "right" ? ($ != null ? $ : 0) - g : ($ != null ? $ : 0) + g, N = d === o - 1, P = d === 0, Q = g > 0;
    if (N && y(a.current, { transition: `opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})` }), v > 2 && !Q) {
      C ? p() : I(u[0]);
      return;
    }
    if (v > 2 && Q && u && t) {
      I(u[t.length - 1]);
      return;
    }
    let Z = u == null ? void 0 : u.reduce((V, Y) => typeof V != "number" || typeof Y != "number" ? V : Math.abs(Y - A) < Math.abs(V - A) ? Y : V), le = R(b) ? window.innerHeight : window.innerWidth;
    if (v > be && Math.abs(g) < le * 0.4) {
      let V = Q ? 1 : -1;
      if (V > 0 && S) {
        I(u[t.length - 1]);
        return;
      }
      if (P && V < 0 && C && p(), d === null)
        return;
      I(u[d + V]);
      return;
    }
    I(Z);
  }
  function f({ draggedDistance: g }) {
    if ($ === null)
      return;
    let p = b === "bottom" || b === "right" ? $ - g : $ + g;
    (b === "bottom" || b === "right") && p < u[u.length - 1] || (b === "top" || b === "left") && p > u[u.length - 1] || y(r.current, { transform: R(b) ? `translate3d(0, ${p}px, 0)` : `translate3d(${p}px, 0, 0)` });
  }
  function J(g, p) {
    if (!t || typeof d != "number" || !u || o === void 0)
      return null;
    let v = d === o - 1;
    if (d >= o && p)
      return 0;
    if (v && !p)
      return 1;
    if (!h && !v)
      return null;
    let A = v ? d + 1 : d - 1, N = v ? u[A] - u[A - 1] : u[A + 1] - u[A], P = g / Math.abs(N);
    return v ? 1 - P : P;
  }
  return { isLastSnapPoint: S, activeSnapPoint: H, shouldFade: h, getPercentageDragged: J, setActiveSnapPoint: x, activeSnapPointIndex: d, onRelease: U, onDrag: f, snapPointsOffset: u };
}
var xt = 0.25;
var Ht = 100;
var Ge = 8;
var z = 16;
var Je = 26;
var Qe = "vaul-dragging";
function Ze({ open: e, onOpenChange: n, children: t, shouldScaleBackground: r, onDrag: a, onRelease: o, snapPoints: s, nested: b = false, closeThreshold: H = xt, scrollLockTimeout: x = Ht, dismissible: S = true, fadeFromIndex: h = s && s.length - 1, activeSnapPoint: d, setActiveSnapPoint: u, fixed: $, modal: I = true, onClose: U, direction: f = "bottom", preventScrollRestoration: J = true }) {
  var Ne;
  let [g = false, p] = import_react3.default.useState(false), [v, C] = import_react3.default.useState(false), [A, N] = import_react3.default.useState(false), [P, Q] = import_react3.default.useState(false), [Z, le] = import_react3.default.useState(false), [V, Y] = import_react3.default.useState(false), j = import_react3.default.useRef(null), se = import_react3.default.useRef(null), pe = import_react3.default.useRef(null), Me = import_react3.default.useRef(null), ee = import_react3.default.useRef(null), ue = import_react3.default.useRef(false), ve = import_react3.default.useRef(null), we = import_react3.default.useRef(0), _ = import_react3.default.useRef(false), $e = import_react3.default.useRef(0), l = import_react3.default.useRef(null), Le = import_react3.default.useRef(((Ne = l.current) == null ? void 0 : Ne.getBoundingClientRect().height) || 0), he = import_react3.default.useRef(0), nt = import_react3.default.useCallback((i) => {
    s && i === ne.length - 1 && (se.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: rt, activeSnapPointIndex: te, setActiveSnapPoint: Ce, onRelease: ot, snapPointsOffset: ne, onDrag: it, shouldFade: Ae, getPercentageDragged: at } = Ke({ snapPoints: s, activeSnapPointProp: d, setActiveSnapPointProp: u, drawerRef: l, fadeFromIndex: h, overlayRef: j, onSnapPointChange: nt, direction: f });
  je({ isDisabled: !g || Z || !I || V || !v });
  let { restorePositionSetting: lt } = ze({ isOpen: g, modal: I, nested: b, hasBeenOpened: v, preventScrollRestoration: J });
  function q() {
    return (window.innerWidth - Je) / window.innerWidth;
  }
  function st(i) {
    var c;
    !S && !s || l.current && !l.current.contains(i.target) || (Le.current = ((c = l.current) == null ? void 0 : c.getBoundingClientRect().height) || 0, le(true), pe.current = /* @__PURE__ */ new Date(), Re() && window.addEventListener("touchend", () => ue.current = false, { once: true }), i.target.setPointerCapture(i.pointerId), we.current = R(f) ? i.screenY : i.screenX);
  }
  function Oe(i, c) {
    var O;
    let w = i, E = (O = window.getSelection()) == null ? void 0 : O.toString(), D = l.current ? ae(l.current, f) : null, M = /* @__PURE__ */ new Date();
    if (w.hasAttribute("data-vaul-no-drag"))
      return false;
    if (f === "right" || f === "left")
      return true;
    if (se.current && M.getTime() - se.current.getTime() < 500)
      return false;
    if (D !== null && (f === "bottom" ? D > 0 : D < 0))
      return true;
    if (E && E.length > 0)
      return false;
    if (ee.current && M.getTime() - ee.current.getTime() < x && D === 0 || c)
      return ee.current = M, false;
    for (; w; ) {
      if (w.scrollHeight > w.clientHeight) {
        if (w.scrollTop !== 0)
          return ee.current = /* @__PURE__ */ new Date(), false;
        if (w.getAttribute("role") === "dialog")
          return true;
      }
      w = w.parentNode;
    }
    return true;
  }
  function ut(i) {
    if (l.current && Z) {
      let c = f === "bottom" || f === "right" ? 1 : -1, w = (we.current - (R(f) ? i.screenY : i.screenX)) * c, E = w > 0;
      if (s && te === 0 && !S || !ue.current && !Oe(i.target, E))
        return;
      if (l.current.classList.add(Qe), ue.current = true, y(l.current, { transition: "none" }), y(j.current, { transition: "none" }), s && it({ draggedDistance: w }), E && !s) {
        let W = _e(w), de = Math.min(W * -1, 0) * c;
        y(l.current, { transform: R(f) ? `translate3d(0, ${de}px, 0)` : `translate3d(${de}px, 0, 0)` });
        return;
      }
      let D = Math.abs(w), M = document.querySelector("[vaul-drawer-wrapper]"), O = D / Le.current, re = at(D, E);
      re !== null && (O = re);
      let k = 1 - O;
      if ((Ae || h && te === h - 1) && (a == null || a(i, O), y(j.current, { opacity: `${k}`, transition: "none" }, true)), M && j.current && r) {
        let W = Math.min(q() + O * (1 - q()), 1), de = 8 - O * 8, Pe = Math.max(0, 14 - O * 14);
        y(M, { borderRadius: `${de}px`, transform: R(f) ? `scale(${W}) translate3d(0, ${Pe}px, 0)` : `scale(${W}) translate3d(${Pe}px, 0, 0)`, transition: "none" }, true);
      }
      if (!s) {
        let W = D * c;
        y(l.current, { transform: R(f) ? `translate3d(0, ${W}px, 0)` : `translate3d(${W}px, 0, 0)` });
      }
    }
  }
  import_react3.default.useEffect(() => () => {
    ce(false), lt();
  }, []), import_react3.default.useEffect(() => {
    var c;
    function i() {
      var E;
      if (!l.current)
        return;
      let w = document.activeElement;
      if (ge(w) || _.current) {
        let D = ((E = window.visualViewport) == null ? void 0 : E.height) || 0, M = window.innerHeight - D, O = l.current.getBoundingClientRect().height || 0;
        he.current || (he.current = O);
        let re = l.current.getBoundingClientRect().top;
        if (Math.abs($e.current - M) > 60 && (_.current = !_.current), s && s.length > 0 && ne && te) {
          let k = ne[te] || 0;
          M += k;
        }
        if ($e.current = M, O > D || _.current) {
          let k = l.current.getBoundingClientRect().height, W = k;
          k > D && (W = D - Je), $ ? l.current.style.height = `${k - Math.max(M, 0)}px` : l.current.style.height = `${Math.max(W, D - re)}px`;
        } else
          l.current.style.height = `${he.current}px`;
        s && s.length > 0 && !_.current ? l.current.style.bottom = "0px" : l.current.style.bottom = `${Math.max(M, 0)}px`;
      }
    }
    return (c = window.visualViewport) == null || c.addEventListener("resize", i), () => {
      var w;
      return (w = window.visualViewport) == null ? void 0 : w.removeEventListener("resize", i);
    };
  }, [te, s, ne]);
  function X() {
    l.current && (U == null || U(), y(l.current, { transform: R(f) ? `translate3d(0, ${f === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${f === "right" ? "100%" : "-100%"}, 0, 0)`, transition: `transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})` }), y(j.current, { opacity: "0", transition: `opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})` }), ce(false), setTimeout(() => {
      N(false), p(false);
    }, 300), setTimeout(() => {
      s && Ce(s[0]);
    }, T.DURATION * 1e3));
  }
  import_react3.default.useEffect(() => {
    if (!g && r) {
      let i = setTimeout(() => {
        ie(document.body);
      }, 200);
      return () => clearTimeout(i);
    }
  }, [g, r]), import_react3.default.useEffect(() => {
    e ? (p(true), C(true)) : X();
  }, [e]), import_react3.default.useEffect(() => {
    P && (n == null || n(g));
  }, [g]), import_react3.default.useEffect(() => {
    Q(true);
  }, []);
  function Ie() {
    if (!l.current)
      return;
    let i = document.querySelector("[vaul-drawer-wrapper]"), c = ae(l.current, f);
    y(l.current, { transform: "translate3d(0, 0, 0)", transition: `transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})` }), y(j.current, { transition: `opacity ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`, opacity: "1" }), r && c && c > 0 && g && y(i, { borderRadius: `${Ge}px`, overflow: "hidden", ...R(f) ? { transform: `scale(${q()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${q()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${T.DURATION}s`, transitionTimingFunction: `cubic-bezier(${T.EASE.join(",")})` }, true);
  }
  function ct(i) {
    var O;
    if (!Z || !l.current)
      return;
    l.current.classList.remove(Qe), ue.current = false, le(false), Me.current = /* @__PURE__ */ new Date();
    let c = ae(l.current, f);
    if (!Oe(i.target, false) || !c || Number.isNaN(c) || pe.current === null)
      return;
    let w = Me.current.getTime() - pe.current.getTime(), E = we.current - (R(f) ? i.screenY : i.screenX), D = Math.abs(E) / w;
    if (D > 0.05 && (Y(true), setTimeout(() => {
      Y(false);
    }, 200)), s) {
      ot({ draggedDistance: E * (f === "bottom" || f === "right" ? 1 : -1), closeDrawer: X, velocity: D, dismissible: S }), o == null || o(i, true);
      return;
    }
    if (f === "bottom" || f === "right" ? E > 0 : E < 0) {
      Ie(), o == null || o(i, true);
      return;
    }
    if (D > be) {
      X(), o == null || o(i, false);
      return;
    }
    let M = Math.min((O = l.current.getBoundingClientRect().height) != null ? O : 0, window.innerHeight);
    if (c >= M * H) {
      X(), o == null || o(i, false);
      return;
    }
    o == null || o(i, true), Ie();
  }
  import_react3.default.useEffect(() => {
    g && (y(document.documentElement, { scrollBehavior: "auto" }), se.current = /* @__PURE__ */ new Date(), ce(true));
  }, [g]), import_react3.default.useEffect(() => {
    var i;
    if (l.current && A) {
      let c = (i = l == null ? void 0 : l.current) == null ? void 0 : i.querySelectorAll("*");
      c == null || c.forEach((w) => {
        let E = w;
        (E.scrollHeight > E.clientHeight || E.scrollWidth > E.clientWidth) && E.classList.add("vaul-scrollable");
      });
    }
  }, [A]);
  function ce(i) {
    let c = document.querySelector("[vaul-drawer-wrapper]");
    !c || !r || (i ? (y(document.body, { background: document.body.style.backgroundColor || document.body.style.background }), y(document.body, { background: "black" }, true), y(c, { borderRadius: `${Ge}px`, overflow: "hidden", ...R(f) ? { transform: `scale(${q()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`, transformOrigin: "top" } : { transform: `scale(${q()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`, transformOrigin: "left" }, transitionProperty: "transform, border-radius", transitionDuration: `${T.DURATION}s`, transitionTimingFunction: `cubic-bezier(${T.EASE.join(",")})` })) : (ie(c, "overflow"), ie(c, "transform"), ie(c, "borderRadius"), y(c, { transitionProperty: "transform, border-radius", transitionDuration: `${T.DURATION}s`, transitionTimingFunction: `cubic-bezier(${T.EASE.join(",")})` })));
  }
  function dt(i) {
    let c = i ? (window.innerWidth - z) / window.innerWidth : 1, w = i ? -z : 0;
    ve.current && window.clearTimeout(ve.current), y(l.current, { transition: `transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`, transform: `scale(${c}) translate3d(0, ${w}px, 0)` }), !i && l.current && (ve.current = setTimeout(() => {
      let E = ae(l.current, f);
      y(l.current, { transition: "none", transform: R(f) ? `translate3d(0, ${E}px, 0)` : `translate3d(${E}px, 0, 0)` });
    }, 500));
  }
  function ft(i, c) {
    if (c < 0)
      return;
    let w = R(f) ? window.innerHeight : window.innerWidth, E = (w - z) / w, D = E + c * (1 - E), M = -z + c * z;
    y(l.current, { transform: R(f) ? `scale(${D}) translate3d(0, ${M}px, 0)` : `scale(${D}) translate3d(${M}px, 0, 0)`, transition: "none" });
  }
  function mt(i, c) {
    let w = R(f) ? window.innerHeight : window.innerWidth, E = c ? (w - z) / w : 1, D = c ? -z : 0;
    c && y(l.current, { transition: `transform ${T.DURATION}s cubic-bezier(${T.EASE.join(",")})`, transform: R(f) ? `scale(${E}) translate3d(0, ${D}px, 0)` : `scale(${E}) translate3d(${D}px, 0, 0)` });
  }
  return import_react3.default.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9, { modal: I, onOpenChange: (i) => {
    if (e !== void 0) {
      n == null || n(i);
      return;
    }
    i ? (C(true), p(i)) : X();
  }, open: g }, import_react3.default.createElement(Ee.Provider, { value: { visible: A, activeSnapPoint: rt, snapPoints: s, setActiveSnapPoint: Ce, drawerRef: l, overlayRef: j, scaleBackground: ce, onOpenChange: n, onPress: st, setVisible: N, onRelease: ct, onDrag: ut, dismissible: S, isOpen: g, shouldFade: Ae, closeDrawer: X, onNestedDrag: ft, onNestedOpenChange: dt, onNestedRelease: mt, keyboardIsOpen: _, openProp: e, modal: I, snapPointsOffset: ne, direction: f } }, t));
}
var et = import_react3.default.forwardRef(function({ children: e, ...n }, t) {
  let { overlayRef: r, snapPoints: a, onRelease: o, shouldFade: s, isOpen: b, visible: H } = fe(), x = He(t, r), S = a && a.length > 0;
  return import_react3.default.createElement($5d3850c4d0b4e6c7$export$c6fdb837b070b4ff, { onMouseUp: o, ref: x, "vaul-drawer-visible": H ? "true" : "false", "vaul-overlay": "", "vaul-snap-points": b && S ? "true" : "false", "vaul-snap-points-overlay": b && s ? "true" : "false", ...n });
});
et.displayName = "Drawer.Overlay";
var tt = import_react3.default.forwardRef(function({ onOpenAutoFocus: e, onPointerDownOutside: n, onAnimationEnd: t, style: r, ...a }, o) {
  let { drawerRef: s, onPress: b, onRelease: H, onDrag: x, dismissible: S, keyboardIsOpen: h, snapPointsOffset: d, visible: u, closeDrawer: $, modal: I, openProp: U, onOpenChange: f, setVisible: J, direction: g } = fe(), p = He(o, s);
  return import_react3.default.useEffect(() => {
    J(true);
  }, []), import_react3.default.createElement($5d3850c4d0b4e6c7$export$7c6e2c02157bb7d2, { onOpenAutoFocus: (v) => {
    var C;
    e ? e(v) : (v.preventDefault(), (C = s.current) == null || C.focus());
  }, onPointerDown: b, onPointerDownOutside: (v) => {
    if (n == null || n(v), !I || v.defaultPrevented) {
      v.preventDefault();
      return;
    }
    h.current && (h.current = false), v.preventDefault(), f == null || f(false), !(!S || U !== void 0) && $();
  }, onPointerMove: x, onPointerUp: H, ref: p, style: d && d.length > 0 ? { "--snap-point-height": `${d[0]}px`, ...r } : r, ...a, "vaul-drawer": "", "vaul-drawer-direction": g, "vaul-drawer-visible": u ? "true" : "false" });
});
tt.displayName = "Drawer.Content";
function Mt({ onDrag: e, onOpenChange: n, ...t }) {
  let { onNestedDrag: r, onNestedOpenChange: a, onNestedRelease: o } = fe();
  if (!r)
    throw new Error("Drawer.NestedRoot must be placed in another drawer");
  return import_react3.default.createElement(Ze, { nested: true, onClose: () => {
    a(false);
  }, onDrag: (s, b) => {
    r(s, b), e == null || e(s, b);
  }, onOpenChange: (s) => {
    s && a(s), n == null || n(s);
  }, onRelease: o, ...t });
}
var nn = { Root: Ze, NestedRoot: Mt, Content: tt, Overlay: et, Trigger: $5d3850c4d0b4e6c7$export$41fb9f06171c75f4, Portal: $5d3850c4d0b4e6c7$export$602eac185826482c, Close: $5d3850c4d0b4e6c7$export$f39c2d165cd861fe, Title: $5d3850c4d0b4e6c7$export$f99233281efd08a0, Description: $5d3850c4d0b4e6c7$export$393edc798c47379d };

// @/design/primitives/drawer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  nn.Root,
  {
    shouldScaleBackground,
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/drawer.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
);
Drawer.displayName = "Drawer";
var DrawerTrigger = nn.Trigger;
var DrawerPortal = nn.Portal;
var DrawerClose = nn.Close;
var DrawerOverlay = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  nn.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/80", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/drawer.tsx",
    lineNumber: 27,
    columnNumber: 3
  },
  this
));
DrawerOverlay.displayName = nn.Overlay.displayName;
var DrawerContent = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DrawerPortal, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DrawerOverlay, {}, void 0, false, {
    fileName: "@/design/primitives/drawer.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    nn.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full" }, void 0, false, {
          fileName: "@/design/primitives/drawer.tsx",
          lineNumber: 49,
          columnNumber: 7
        }, this),
        children
      ]
    },
    void 0,
    true,
    {
      fileName: "@/design/primitives/drawer.tsx",
      lineNumber: 41,
      columnNumber: 5
    },
    this
  )
] }, void 0, true, {
  fileName: "@/design/primitives/drawer.tsx",
  lineNumber: 39,
  columnNumber: 3
}, this));
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  "div",
  {
    className: cn("grid gap-1.5 p-4 text-center sm:text-left", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/drawer.tsx",
    lineNumber: 60,
    columnNumber: 3
  },
  this
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  "div",
  {
    className: cn("mt-auto flex flex-col gap-2 p-4", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/drawer.tsx",
    lineNumber: 71,
    columnNumber: 3
  },
  this
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  nn.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/drawer.tsx",
    lineNumber: 82,
    columnNumber: 3
  },
  this
));
DrawerTitle.displayName = nn.Title.displayName;
var DrawerDescription = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
  nn.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "@/design/primitives/drawer.tsx",
    lineNumber: 97,
    columnNumber: 3
  },
  this
));
DrawerDescription.displayName = nn.Description.displayName;

// app/components/Navbar.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Navbar.tsx"
  );
  import.meta.hot.lastModified = "1718240747021.5771";
}
var moduleNumbers = new Array(6).fill(0).map((_, i) => (i + 1).toString());
var toolsItems = [{
  title: "Numbers",
  href: "/tools/numbers",
  description: "Translate numbers into Oneida."
}, {
  title: "Paradigm",
  href: "/tools/paradigm",
  description: "Test your pronominal knowledge."
}, {
  title: "Clock Time",
  href: "/tools/clock",
  description: "Translate a digital clock time into Oneida."
}];
function Navbar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "print:hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sm:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavbarMobile, {}, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden sm:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavbarDesktop, {}, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 45,
    columnNumber: 10
  }, this);
}
_c = Navbar;
function NavbarMobile() {
  _s();
  const [isOpen, setIsOpen] = React3.useState(false);
  const items = [{
    href: "/learn",
    text: "Learn"
  }, {
    href: "/about",
    text: "About"
  }, {
    href: "/articles",
    text: "Articles"
  }, {
    href: "/practice",
    text: "Practice"
  }, {
    href: "/tools",
    text: "Tools"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { align: "center", justify: "end", p: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Drawer, { open: isOpen, onOpenChange: setIsOpen, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DrawerTrigger, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Menu, {}, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DrawerContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Flex, { justify: "center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenu, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuList, { className: "flex-col", children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuLink, { className: navigationMenuTriggerStyle(true), href: item.href, children: item.text }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 84,
      columnNumber: 21
    }, this) }, i, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 83,
      columnNumber: 41
    }, this)) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 82,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 81,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 80,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 74,
    columnNumber: 10
  }, this);
}
_s(NavbarMobile, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c2 = NavbarMobile;
function NavbarDesktop() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenu, { className: "bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuList, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuLink, { className: navigationMenuTriggerStyle(), href: "/about", children: "About" }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuTrigger, { children: "Learn" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "flex flex-col w-[240px] gap-3 p-4 ", children: moduleNumbers.map((num) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { href: `/learn/module${num.padStart(2, "0")}`, title: `Module ${num}` }, num, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 110,
        columnNumber: 41
      }, this)) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 109,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuLink, { className: navigationMenuTriggerStyle(), href: "/articles", children: "Articles" }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 116,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 115,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuLink, { className: navigationMenuTriggerStyle(), href: "/practice", children: "Practice" }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 122,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuItem, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuTrigger, { children: "Tools" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuContent, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "grid w-[320px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ", children: toolsItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ListItem, { href: item.href, title: item.title, children: item.description }, item.title, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 131,
        columnNumber: 39
      }, this)) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 130,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 129,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 98,
    columnNumber: 10
  }, this);
}
_c3 = NavbarDesktop;
var ListItem = React3.forwardRef(_c4 = ({
  className,
  title,
  children,
  ...props
}, ref) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { ref, className: cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className), to: props.href, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-sm font-medium leading-none", children: title }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 150,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 151,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 149,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 148,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 147,
    columnNumber: 10
  }, this);
});
_c5 = ListItem;
ListItem.displayName = "ListItem";
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
$RefreshReg$(_c, "Navbar");
$RefreshReg$(_c2, "NavbarMobile");
$RefreshReg$(_c3, "NavbarDesktop");
$RefreshReg$(_c4, "ListItem$React.forwardRef");
$RefreshReg$(_c5, "ListItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: globals_default
}, ...cssBundleHref ? [{
  rel: "stylesheet",
  href: cssBundleHref
}] : []];
function App() {
  _s2();
  const matches = useMatches();
  const isHomePage = !!matches.find((m2) => m2.id === "routes/_index");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TitleBar, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: cn("mx-auto flex flex-col gap-4 p-4 md:p-8", isHomePage ? "max-w-5xl" : "max-w-lg"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s2(App, "9HQn1rkLPttBP+QSK6GDQicXTV4=", false, function() {
  return [useMatches];
});
_c6 = App;
function TitleBar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-white bg-purple-950 text-center text-4xl py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Text, { as: "span", variant: "headlineS", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-white", children: "Learn Oneida" }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 68,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 67,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 66,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 65,
    columnNumber: 10
  }, this);
}
_c22 = TitleBar;
var _c6;
var _c22;
$RefreshReg$(_c6, "App");
$RefreshReg$(_c22, "TitleBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-SZ4JUCES.js.map
