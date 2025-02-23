import React from "react";
import {
  EnglishToOneidaQuiz,
  type EnglishToOneidaQuizProps,
} from "~/components/practice/EnglishToOneidaQuiz";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";
import type { Metadata } from "next";
import { Text } from "@ukwehuwehneke/ohutsya";
import { LinkWrapper } from "@/components/LinkWrapper";
import { createModule11BodyPartNounList } from "@/data/module11";

export const metadata: Metadata = {
  title: "Body part identification",
  description: "Quiz your Oneida knowledge by picking the right translation!",
};

export const runtime = "edge";

export default function PracticeBodyPartIdentification() {
  const imgMap: Record<string, string> = {
    belly: "jpg",
    birthmark: "jpg",
    blood: "jpg",
    eyelid: "jpg",
    genitals: "jpg",
    lung: "jpg",
    nipple: "jpg",
    womb: "jpg",
    face: "svg",
    foot: "svg",
    forehead: "svg",
    hair: "svg",
    hand: "svg",
    head: "svg",
    lips: "svg",
    liver: "svg",
    mouth: "svg",
    muscles: "svg",
    nail: "svg",
    ribs: "svg",
    soul: "svg",
    thumb: "svg",
    toe: "svg",
    tongue: "svg",
    vein: "svg",
  };

  const [englishOptions, oneidaOptions]: [
    EnglishToOneidaQuizProps["englishOptions"],
    EnglishToOneidaQuizProps["oneidaOptions"],
  ] = React.useMemo(() => {
    const resultEn: Array<{ key: string; img: string; text: string }> = [];
    const resultOn: Array<{ key: string; img: string; text: string }> = [];
    const list = createModule11BodyPartNounList();

    for (const datum of list) {
      const key = datum.key;
      const text = datum.en[0];
      if (!text || !datum.standalone.length) {
        continue;
      }

      // resultOn.push({ key: `${key}-root`, text: datum.root[0] });
      // resultEn.push({ key: `${key}-root`, text: `${text} (root)` });

      const ext = key in imgMap ? imgMap[key] : "png";
      const img = `/images/bodyparts/${key}.${ext}`;
      resultOn.push({ key, img, text: datum.standalone[0] });
      resultEn.push({ key, img, text });

      // if (datum.onNoun) {
      //   resultOn.push({ key: `${key}-on`, text: datum.onNoun });
      //   resultEn.push({ key: `${key}-on`, text: `on the ${text}` });
      // }

      // if (datum.inNoun) {
      //   resultOn.push({ key: `${key}-in`, text: datum.inNoun });
      //   resultEn.push({ key: `${key}-in`, text: `in the ${text}` });
      // }
    }
    return [resultEn, resultOn];
  }, []);

  return (
    <PageWrapper>
      <SectionHeading level={1}>Practice identifying body parts</SectionHeading>

      <Text>
        These words come from <LinkWrapper page={11} />.
      </Text>

      <EnglishToOneidaQuiz
        englishOptions={englishOptions}
        hasImages
        oneidaOptions={oneidaOptions}
      />
    </PageWrapper>
  );
}
