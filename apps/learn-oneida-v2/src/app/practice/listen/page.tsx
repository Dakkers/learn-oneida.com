"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button, Text } from "@ukwehuwehneke/ohutsya";
import _ from "lodash";

const meta: any = () => {
  return [
    { title: "Listening Practice" },
    {
      name: "description",
      content: "Practice listening to phrases in Oneida.",
    },
  ];
};

export default function PracticeListening() {
  const data = [
    ["1", "Né· lokstʌ́ha lanú·wehseʔ uní né· khaleʔ akokstʌ́ha yenú·wehse̲ʔ"],
    ["2", "Yáh kʌ́ tesanúhteʔ oh náhte yutátyats né· thikʌ́ yeksá·"],
    ["3", "Kutikwekú kutiksaʔshúha luwanú·wehseʔ né· laulhá·"],
    ["4", "Kwítel kʌ́ luwa·yáts thikʌ́ laksá·"],
    ["5", "Sʌ́haʔ yakninú·wehseʔ ne thí·kʌ̲"],
    ["6", "Yáh tehonúhteʔ tsiʔ náhteʔ luwati·yáts thikʌ́ latiksaʔshúha̲ʔ"],
    ["7", "Yáh ki só·tsiʔ tehinú·wehseʔ Wílo"],
    ["8", "Akwekú shakonú·wehseʔ ne thikʌ́ lokstʌ́ha, nok tsiʔ yah neʔn Wá·li"],
    ["9", "Sanúhteʔ kʌ́ úhkaʔ náhteʔ yenú·wehseʔ kaʔí·kʌ̲"],
    ["10", "Sʌ́haʔ snú·wehseʔ kaʔi·kʌ́· tsiʔ ni·yóht thikʌ́, wáhi̲"],
    ["11", "Yáh kʌ́ tehninú·wehse̲ʔ"],
    ["12", "Wakanúhteʔ tsiʔ shukwanú·wehseʔ thikʌ́ lokstʌ́ha̲"],
    ["13", "Kunú·wehseʔ niʔisé·, kwah né·n tsiʔ niyot niʔisé· sknú·wehse̲ʔ"],
    ["14", "Tokʌ́skeʔ kʌ́ tsiʔ lonúhteʔ oh náhteʔ yúkyats"],
    ["15", "Wé·ne tsiʔ yáh tehinú·wehseʔ thikʌ́ lú·kwe̲"],
  ];

  const [index, setIndex] = useState(0);
  const playAudioAtIndex = (i: number) => {
    const datum = data[i ?? index];
    console.log(i ?? index);
    const audio = new Audio(
      `/audio/translation_exercises/module01/ex_${datum[0]}.mp3`,
    );
    audio.play();
  };

  return (
    <>
      <SectionHeading level={1}>Listening Practice</SectionHeading>

      <Button
        onClick={() => {
          const newIndex = _.random(0, 14, false);
          setIndex(newIndex);
          playAudioAtIndex(newIndex);
        }}
      >
        Play Audio
      </Button>
      <Button onClick={() => playAudioAtIndex(index)}>Replay</Button>
      <Button onClick={() => window.alert(data[index][1])}>Show Answer</Button>
    </>
  );
}
