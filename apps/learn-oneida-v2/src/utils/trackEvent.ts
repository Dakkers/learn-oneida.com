import mixpanel from "mixpanel-browser";

export function trackEvent (eventName: string, data?: Record<string, unknown>) {
  mixpanel.track(eventName, data)
}
