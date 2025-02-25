"use client";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { trackEvent } from "./trackEvent";
import { usePathname } from "next/navigation";

export function initMixpanel() {
  console.log(process.env);
  const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

  if (!MIXPANEL_TOKEN) {
    console.warn("Mixpanel token is missing! Check your .env file.");
    return;
  }

  mixpanel.init(MIXPANEL_TOKEN, {
    autotrack: false,
    loaded: (instance) => {
      console.info("Loaded MixPanel");
      instance.identify();
    },
  });
}

export function Mixpanel() {
  const pathname = usePathname();

  useEffect(() => {
    initMixpanel();
  }, []);

  useEffect(() => {
    trackEvent("Viewed Page");
  }, [pathname]);

  return null;
}
