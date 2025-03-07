import mixpanel from "mixpanel-browser";

export function trackEvent(eventName: string, data?: Record<string, unknown>) {
  console.info(eventName, data);
  mixpanel.track(eventName, data);
}
