"use client";
import type WaveSurfer from "wavesurfer.js";
import WavesurferPlayer from "@wavesurfer/react";
import React, { type RefObject, useCallback, useMemo, useState } from "react";
import { arrayify, concatAudio, Flex, Text } from "@ukwehuwehneke/ohutsya";

export interface AudioTrackProps {
  audioFile: string | string[];
  autoplay?: boolean;
  onPlay: (value: boolean) => void;
  wavesurferRef: RefObject<WaveSurfer | null>;
}

export function AudioTrack({
  audioFile,
  autoplay = false,
  onPlay,
  wavesurferRef,
}: AudioTrackProps) {
  const audioFiles = arrayify(audioFile);
  const multipleFiles = audioFiles.length > 1;

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasFinishedPlayback, setHasFinishedPlayback] = useState(false);
  const [prevAudioFile, setPrevAudioFile] = useState<
    string | string[] | undefined
  >(undefined);

  const loadMultipleFiles = (filepaths: string[]) => {
    return fuckOff(filepaths).then((result) => {
      return wavesurferRef.current?.load(result.url, result.peaks, result.duration);
    })

    // return concatAudio(filepaths)
    //   .then(([result, crunker]) => crunker.export(result, 'audio/mp3'))
    //   .then((result) => {
    //     const peaks = [result.getChannelData(0)];
    //     const duration = result.duration;
    //     console.log('Loading...')

    //     const blob = new Blob([result], { type: "audio/mpeg" })

    //     let audio = new Audio();
    //     audio.src = URL.createObjectURL(blob);
    //     return wavesurferRef.current?.load(audio.src, peaks, duration);

    //     // return wavesurferRef.current?.loadBlob(new Blob([result], { type: "audio/mpeg" }), peaks, duration);
    //   })
    //   .then(() => {
    //     console.log('Loaded')
    //     return
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  if (audioFile !== prevAudioFile) {
    setCurrentTime(0);
    setPrevAudioFile(audioFile);
    setHasFinishedPlayback(false);

    if (audioFiles.length > 1) {
      loadMultipleFiles(audioFiles).then(() => {
        if (autoplay) {
          wavesurferRef?.current?.playPause()
        }
      })

      // concatAudio(audioFiles).then(([result]) => {
      //   console.log(result)
      //   const argh = URL.createObjectURL(new Blob([result], { type: 'audio/wav' }))
      //   const peaks = [result.getChannelData(0)]
      //   const duration = result.duration

      //   wavesurferRef?.current?.load(argh, peaks, duration)
      //   // setAudioFileRaw(result)
      // })
    } else {
    }
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: not sure if this is easy to fix
  const onReady = useCallback(
    (ws: WaveSurfer, audioDuration: number) => {
      console.log('onReady()', audioDuration)
      wavesurferRef.current = ws;
      onPlay(false);
      setDuration(audioDuration);
    },
    [],
  );

  const durationFormatted = useMemo(() => {
    if (duration === 0) {
      return "0:01";
    }
    return formatSecondsAsTime(duration);
  }, [duration]);

  const currentTimeFormatted = useMemo(
    () => formatSecondsAsTime(currentTime),
    [currentTime],
  );

  return (
    <>
      <WavesurferPlayer
        height={100}
        onReady={onReady}
        onClick={() => wavesurferRef.current?.play()}
        onInit={(ws) => {
          wavesurferRef.current = ws;
          loadMultipleFiles(audioFiles)
        }}
        onPlay={() => onPlay(true)}
        onPause={() => onPlay(false)}
        onFinish={() => setHasFinishedPlayback(true)}
        onTimeupdate={(ws, time) => {
          setCurrentTime(time);
          setHasFinishedPlayback(false);
        }}
        url={audioFiles.length === 1 ? audioFiles[0] : undefined}
        waveColor="#F3F4F6"
      />

      <Flex justify="between">
        <Text>
          {hasFinishedPlayback ? durationFormatted : currentTimeFormatted}
        </Text>
        <Text>{durationFormatted}</Text>
      </Flex>
    </>
  );
}

function formatSecondsAsTime(value: number) {
  const seconds = Math.floor(value) % 60;
  const minutes = Math.floor(value / 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

async function fuckOff(filepaths: string[]) {
  const [buffer, crunker] = await concatAudio(filepaths);
  const audioExport = await crunker.export(buffer, 'audio/mp3')

  const peaks = [buffer.getChannelData(0)];
  const duration = buffer.duration;

  return { peaks, duration, url: audioExport.url }
}
