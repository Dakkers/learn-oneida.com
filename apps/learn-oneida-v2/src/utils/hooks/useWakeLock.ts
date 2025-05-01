import { useEffect, useState } from "react";

export function useWakeLock() {
  const [wakeLock, setWakeLock] = useState<WakeLockSentinel | null>(null);
  useEffect(() => {
    createWakeLock().then((w) => {
      if (w) {
        setWakeLock(w);
      }
    });
  }, []);

  useEffect(() => {
    return () => {
      wakeLock?.release();
    };
  }, [wakeLock]);

  return wakeLock;
}

async function createWakeLock() {
  let wakeLock = null;
  try {
    wakeLock = await navigator.wakeLock.request("screen");
  } catch (err) {
    console.error(err);
  }
  return wakeLock;
}
