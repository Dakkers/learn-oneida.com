"use client";

import { arrayify, Box, Button, concatAudio, Flex, Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { TableWrapper } from "@/components/TableWrapper";
import _ from "lodash";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { AudioTrack } from "@/components/AudioTrack";
import { useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

// export const metadata: Metadata = {
//   title: "Special Characters",
//   description: "This is just a page that has special characters useful for writing text in Oneida.",
// };

export default function PlaygroundPage() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Playground</SectionHeading>

      {/* <SingleAudioFile /> */}
      <MultipleAudioFiles />
    </PageWrapper>
  );
}

function MultipleAudioFiles() {
  const mergedAudioFiles1 = [
    "/audio/module12/mammals/singular/bear_pp.mp3",
    "/audio/module12/mammals/singular/bear.mp3",
  ];
  const mergedAudioFiles2 = [
    "/audio/module12/mammals/singular/wolf_pp.mp3",
    "/audio/module12/mammals/singular/wolf.mp3",
  ];
  const singleAudioFile = [
    "/audio/module12/mammals/singular/bat.mp3",
  ]
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [audioFile, setAudioFile] = useState(mergedAudioFiles1)

  return (
    <>
      <AudioTrackWrapper
        audioFile={audioFile}
      />

      <Box pt={4}>
        <Flex gap={4}>
          <Button onClick={() => setAudioFile(mergedAudioFiles1)}>
            Merged 1
          </Button>
          <Button onClick={() => setAudioFile(mergedAudioFiles2)}>
            Merged 2
          </Button>
          <Button onClick={() => setAudioFile(singleAudioFile)}>
            Single
          </Button>
          <Button onClick={() => wavesurferRef.current?.play()}>
            Play
          </Button>
        </Flex>
      </Box>
    </>
  );
}


function AudioTrackWrapper({
  audioFile,
}: {
  audioFile: string | string[]
}) {
  const files = arrayify(audioFile)
  const [prev, setPrev] = useState(null);
  const [src, setSrc] = useState<string | null>(null);

  if (prev !== audioFile) {
    setPrev(audioFile);
    if (files.length > 1) {
      setSrc(null)
      concatAudio(files).then(([result, instance]) => {
        return instance.export(result, 'audio/mp3')
      }).then((lol) => {
        console.log(lol)
        const audio = document.querySelector('audio');
        if (audio) {
          console.log(audio)
          // audio.src = URL.createObjectURL(new Blob([lol], { type: 'audio/mpeg' }));
          audio.src = lol.url
        }
      });
    } else {
      setSrc(audioFile as string)
    }
  }

  return (
    <>
      <audio controls src={src} />
    </>
  );
}
