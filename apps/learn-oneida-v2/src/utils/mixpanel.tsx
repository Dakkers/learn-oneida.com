"use client";
import mixpanel from "mixpanel-browser";
import { useEffect, useState } from "react";
import { trackEvent } from "./trackEvent";
import { usePathname } from "next/navigation";

export function initMixpanel(onLoad?: () => void) {
  if (!window?.location?.href) {
    return;
  }

  const MIXPANEL_TOKEN = window.location.href.startsWith(
    "https://learn-oneida.com/",
  )
    ? "661b4d0d446a07e851d624902689053b"
    : "24b35db3ef3c0be139967517d422fb4f";

  mixpanel.init(MIXPANEL_TOKEN, {
    autotrack: false,
    loaded: (instance) => {
      console.info("Loaded MixPanel");
      instance.identify();
      onLoad?.();
    },
  });
}

export function Mixpanel() {
  const pathname = usePathname();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    initMixpanel(() => {
      setHasInitialized(true);
    });
  }, []);

  useEffect(() => {
    if (hasInitialized) {
      trackEvent("Viewed Page");
    }
  }, [pathname, hasInitialized]);

  return null;
}
