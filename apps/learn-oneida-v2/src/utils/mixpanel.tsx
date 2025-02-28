"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { initializeMixpanel, trackEvent } from "@ukwehuwehneke/ohutsya";

export function Mixpanel() {
  const pathname = usePathname();
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    init(() => {
      setHasInitialized(true);
    });
  }, []);

  useEffect(() => {
    if (hasInitialized) {
      trackEvent("Viewed Page", { pathname });
    }
  }, [pathname, hasInitialized]);

  return null;
}

function init(onLoad?: () => void) {
  console.info("Attempting to initialize MixPanel...");
  const href = window?.location?.href;
  if (!href) {
    console.info("Exiting MixPanel initialization early");
    return;
  }

  const MIXPANEL_TOKEN = href.includes("learn-oneida.com")
    ? "661b4d0d446a07e851d624902689053b"
    : href.includes("localhost")
      ? undefined
      : "24b35db3ef3c0be139967517d422fb4f";

  if (MIXPANEL_TOKEN) {
    initializeMixpanel(MIXPANEL_TOKEN, onLoad);
  }
}
