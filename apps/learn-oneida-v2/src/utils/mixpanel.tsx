'use client'
import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';

export function initMixpanel () {
  const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

  if (!MIXPANEL_TOKEN) {
    console.warn('Mixpanel token is missing! Check your .env file.');
    return;
  }

  mixpanel.init(MIXPANEL_TOKEN, {
    autotrack: false,
    loaded: (instance) => {
      console.info('Loaded MixPanel');
      instance.identify()
    }
  });
}

export function Mixpanel () {
  useEffect(() => {
    initMixpanel();
  }, []);

  return null;
}
