import { useEffect, useRef, useState } from "react";
import { Timer } from "../timer";
import type { AudioFriendly } from "@/app/practice/listen/dataGetters";
import { standardizeAudioFileName } from "../misc";
import { arrayify } from "@ukwehuwehneke/ohutsya";

interface Arg {
  audioClip: HTMLAudioElement;
  speechSynth: SpeechSynthesisUtterance;
}

export function useSuperMagicThing({
  audioTimerDuration,
  speechSynthTimerDuration,
  onSpeechTimerEnd,
  onAudioTimerEnd,
}: {
  audioTimerDuration: number;
  onSpeechTimerEnd: (arg: Arg) => void;
  onAudioTimerEnd: (arg: Arg) => void;
  speechSynthTimerDuration: number;
}) {
  const audioClipRef = useRef<HTMLAudioElement | null>(null);
  const speechSynthRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioClipTimerRef = useRef<Timer | null>(null);
  const speechSynthTimerRef = useRef<Timer | null>(null);

  const [canPause, setCanPause] = useState(false);

  const doTheThing = (datum: AudioFriendly) => {
    const audioClip = new Audio(standardizeAudioFileName(datum.audioFile));
    const speechSynth = createSpeechSynthesis(datum.en ?? []);

    audioClip.addEventListener("ended", () => {
      audioClipTimerRef.current = new Timer(audioTimerDuration, () => {
        setCanPause(false);
        onAudioTimerEnd?.({
          audioClip,
          speechSynth,
        });
        audioClipTimerRef.current = null;
      });
      setCanPause(true);
    });

    speechSynth.addEventListener("end", () => {
      speechSynthTimerRef.current = new Timer(speechSynthTimerDuration, () => {
        speechSynthTimerRef.current = null;
        onSpeechTimerEnd?.({
          audioClip,
          speechSynth,
        });
      });
    });

    audioClipRef.current = audioClip;
    speechSynthRef.current = speechSynth;

    return {
      audioClip,
      speechSynth,
    };
  };

  useEffect(() => {
    // Janky attempt at ensuring the voice doesn't sound like Daft Punk
    speechSynthesis.getVoices();

    return () => {
      speechSynthTimerRef.current?.cleanup();
      audioClipTimerRef.current?.cleanup();
    };
  }, []);

  return {
    canPause,
    doTheThing,
    runTimers: () => {
      audioClipTimerRef.current?.run();
      speechSynthTimerRef.current?.run();
    },
    pauseTimers: () => {
      audioClipTimerRef.current?.pause();
      speechSynthTimerRef.current?.pause();
    },
  };
}

function createSpeechSynthesis(englishText: string | string[]) {
  const speechSynth = new SpeechSynthesisUtterance(
    arrayify(englishText)
      .join(", ")
      .replaceAll("(males)", "males")
      .replaceAll("(females)", "females")
      .replaceAll("(males + females)", "males and females"),
  );
  speechSynth.lang = "en-US";

  const voices = speechSynthesis.getVoices();

  speechSynth.voice =
    voices.find((voice) => voice.name.startsWith("Samantha")) ??
    voices.find((voice) => voice.lang.startsWith("en-US")) ??
    voices[0];

  speechSynth.rate = 0.9;
  speechSynth.volume = 0.7;

  return speechSynth;
}
