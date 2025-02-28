import mixpanel from "mixpanel-browser";

export function initializeMixpanel(token: string, onLoad?: () => void) {
  mixpanel.init(token, {
    autotrack: false,
    loaded: (instance) => {
      console.info("Loaded MixPanel");
      instance.identify();
      onLoad?.();
    },
  });
}
