import { Flex } from "@/design/components/flex";
import { Notice } from "@/design/components/notice";
import { Separator } from "@/design/primitives/separator";
import { Text } from "@/design/components/text";
import type { MetaFunction } from "@remix-run/node";
import React from "react";
import { singlePronouns } from "~/utils";
import yatsJson from "../data/yats";
import anuhteJson from "../data/anuhte";
import { Box } from "@/design/components/box";
import { EnglishNamesArticle } from "~/components/articles/EnglishNames";
import { ParadigmTable } from "~/components/ParadigmTable";
import { Pronominal } from "~/components/Pronominal";
import { PeopleArticle } from "~/components/articles/People";
import { ParticlesTable } from "~/components/articles/ParticlesTable";
import { TableOfContents as TOC } from "~/components/TableOfContents";
import { Letter } from "~/components/Letter";
import { SectionHeading } from "~/components/SectionHeading";
import { DialogueTable, DialogueTableData } from "~/components/DialogueTable";
import { TranslationExercisesSection } from "~/components/practice/TranslationExercises";
import { PronominalsArticle } from "~/components/articles/Pronominals";
import { StressArticle } from "~/components/articles/Stress";
import { GlottalStopArticle } from "~/components/articles/GlottalStop";
import { LetterHArticle } from "~/components/articles/LetterH";
import { WhisperedEndingsArticle } from "~/components/articles/WhisperedEndings";

export const meta: MetaFunction = () => {
  return [
    { title: "Module 1" },
    { name: "description", content: "Module 1 of the Oneida curriculum" },
  ];
};

export default function LearnModule01() {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>Module 1</SectionHeading>
      <Box py={4}>
        <Notice intent="warning">
          <b>NOTE:</b> This page is still under construction!
        </Notice>
      </Box>

      <Text>In this module, we&lsquo;ll cover the following:</Text>

      <TOC>
        <TOC.Item label="Pronominals" value="pronominals">
          <TOC.Section>
            <TOC.Item label="English" value="english-pronouns" />
            <TOC.Item label="Free-standing" value="standalone-pronouns" />
            <TOC.Item label="Bound" value="bound-pronouns" />
            <TOC.Item label="Subjective (Red)" value="red-pronominals" />
            <TOC.Item label="Objective (Blue)" value="blue-pronominals" />
            <TOC.Item label='"The Purples"' value="purple-pronominals" />
            <TOC.Item
              label="Possessive (Light Blue)"
              value="lightblue-pronominals"
            />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Stress and Accents" value="stress">
          <TOC.Section>
            <TOC.Item label="Short stress" value="short-stress" />
            <TOC.Item label="Long stress" value="long-stress" />
            <TOC.Item label="Length" value="length" />
            <TOC.Item label="Where stress occurs" value="where-stress" />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="Glottal stops" value="glottal" />
        <TOC.Item label="The letter H" value="letter-h" />
        <TOC.Item label="Whispered endings" value="whispered-endings" />
        <TOC.Item.Phrase
          label="to call someone by a name"
          word="yats"
          value="yats"
        />
        <TOC.Item.Phrase
          label="to know, to be in the know"
          word="anúhteʔ"
          value="anúhte"
        />

        <TOC.Item label="Particles" value="particles" />

        <TOC.Item label="People" value="people-article">
          <TOC.Section>
            <TOC.Item label="Children" value="people-article-children" />
            <TOC.Item label="Adolescents" value="people-article-adolescents" />
            <TOC.Item label="Adults" value="people-article-adults" />
            <TOC.Item label="Older people" value="people-article-older" />
          </TOC.Section>
        </TOC.Item>

        <TOC.Item label="English names" value="english-names" />
        <TOC.Item label="Dialogue" value="dialogue" />
        <TOC.Item label="Translation exercises" value="translation-exercises" />
      </TOC>

      <Separator />

      <PronominalsArticle level={2} />

      <StressArticle level={2} />

      <GlottalStopArticle level={2} />

      <LetterHArticle level={2} />

      <WhisperedEndingsArticle level={2} />

      <SectionHeading id="yats" level={2}>
        yats — my name is...
      </SectionHeading>
      <Text>
        Let&lsquo;s learn our first phrase!{" "}
        <b>
          Bob ni· <Pronominal color="p">yuk</Pronominal>yáts
        </b>{" "}
        translates to &quot;Bob is my name&quot;. It actually more literally
        translates to &quot;They call me Bob&quot;. Notice the purple text in
        the phrase, <Letter>yuk</Letter>. This is from our Purple Pronominals
        table. <Letter>yats</Letter> is the root word and because it begins with
        a consonant, we can look for &quot;yuk&quot; in the table under the
        C-stem column to find that it corresponds to &quot;They → me&quot;.
      </Text>
      <Text>
        <Letter>yats</Letter> is an example of a word that &quot;uses purple
        pronominals&quot;. Different root words in Oneida use different color
        pronominals. Some words, such as <b>nú·wehseʔ</b>, can use multiple
        different color pronominals. Different colors can change the meaning of
        a root word. We&lsquo;ll learn more about this in module 2.
      </Text>
      <Text>
        A paradigm table for <Letter>yats</Letter> looks like this:
      </Text>
      <ParadigmTable
        allowedPronouns={[...singlePronouns, "ms", "fs"]}
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={yatsJson}
      />
      <Notice intent="primary">
        In this curriculum, the word &quot;paradigm&quot; refers to a list of
        conjugations for a given root word. When you get a grasp of the
        different pronominals, you will be able to recall paradigms much more
        easily.
      </Notice>

      <SectionHeading id="anuhte" level={2}>
        anuhte — to know, to be in the know
      </SectionHeading>
      <Text>
        Let&lsquo;s learn another phrase! The root word is{" "}
        <Letter>anuhteʔ</Letter> and it uses blue pronominals. It means &quot;to
        know something&quot;. Here&lsquo;s the paradigm table:
      </Text>
      <ParadigmTable
        columnVisibility={{
          pronounEnglish: false,
          pronounOneida: false,
        }}
        data={anuhteJson}
        translationFn={({ pronoun }) => ({
          verb: ["it", "m", "f"].includes(pronoun) ? "knows" : "know",
        })}
      />

      <SectionHeading id="particles" level={2}>
        Particles
      </SectionHeading>
      <Text>
        In this curriculum, particles refer to words that are common in
        dialogue.
      </Text>
      <ParticlesTable group="module01" />

      <PeopleArticle level={2} />

      <EnglishNamesArticle level={2} />

      <DialogueSection />
      <TranslationExercisesSection group="module01" />
    </Flex>
  );
}

function DialogueSection() {
  const part1: DialogueTableData = [
    [
      { one: "Úhkaʔ náhteʔ niʔí·", en: "Who am I?" },
      { one: "Kwítel niʔisé·", en: "You are Peter." },
    ],
    [
      { one: "Úhkaʔ náhteʔ niʔisé·", en: "Who are you?" },
      { one: "Wá·li niʔí·", en: "I am Mary." },
    ],
    [
      { one: "Úhkaʔ náhteʔ neʔn laulhá·", en: "Who is he?" },
      { one: "Tá·wet neʔn laulhá·", en: "He is David." },
    ],
    [
      { one: "Úhkaʔ náhteʔ neʔn akaulhá·", en: "Who is she?" },
      { one: "Klistí·n neʔn akaulhá·", en: "She is Christine." },
    ],
    [
      { one: "Úhkaʔ náhteʔ nʌʔ né·", en: "Who is it?" },
      { one: "Kwítel nʌʔ né·", en: "It is Peter." },
    ],
  ];
  const part2: DialogueTableData = [
    [
      { one: "Tshyalé kʌ niʔí·", en: "Am I Charlie?" },
      { one: "Λ́·, Tshyalé niʔisé·", en: "Yes. You are Charlie" },
    ],
    [
      { one: "Wá·li kʌ niʔisé·", en: "Are you Mary?" },
      { one: "Λ́·, Wá·li niʔí·", en: "Yes. I am Mary." },
    ],
    [
      { one: "Tá·wet kʌ neʔn laulhá·", en: "Is he David?" },
      { one: "Λ́·, Tá·wet nen laulhá·", en: "Yes. He is David." },
    ],
    [
      { one: "Klistí·n kʌ neʔn akaulhá·", en: "Is she Christine?" },
      { one: "Λ́·, Klistí·n neʔn akaulhá·", en: "Yes. She is Christine." },
    ],
  ];
  const part3: DialogueTableData = [
    [
      { one: "Í· kʌ neʔn Tshyalé", en: "Am I Charlie?" },
      { one: "Λ́·, isé· né· Tshyalé", en: "Yes, you are Charlie." },
    ],
    [
      { one: "Isé· kʌ neʔn Wá·li", en: "Are you Mary?" },
      { one: "Λ́·, í· né· Wá·li", en: "Yes, I am Mary." },
    ],
    [
      { one: "Laulhá· kʌ neʔn Tá·wet", en: "Is he David?" },
      { one: "Λ́·, laulhá· né·", en: "Yes, he is David." },
    ],
    [
      { one: "Akaulhá· kʌ neʔn Ní·ki", en: "Is she Amelia?" },
      { one: "Λ́·, akaulhá· né· Ní·ki", en: "Yes, she is Amelia." },
    ],
  ];
  const part4: DialogueTableData = [
    [
      { one: "Wá·li kʌ niʔí·", en: "Am I Mary?" },
      {
        one: ["Tah", "Yah Wá·li té·kʌ nisé·", "Só·s niʔisé·"],
        en: "No. You're not Mary. You are Susan.",
      },
    ],
    [
      { one: "Tshyalé kʌ niʔisé·", en: "Are you Charlie?" },
      {
        one: ["Tah", "Yah Tshyalé té·kʌ niʔí·", "Wá·li niʔí·"],
        en: "No. I'm not Charlie. I'm Mary.",
      },
    ],
    [
      { one: "Wílo kʌ neʔn laulhá·", en: "Is he William?" },
      {
        one: ["Tah", "Yah Wílo té:kʌ neʔn laulhá·", "Tá·wet neʔn laulhá·"],
        en: "No. He's not William. He's David.",
      },
    ],
    [
      { one: "Lá·kel kʌ neʔn akaulhá·", en: "Is she Rachel?" },
      {
        one: ["Tah", "Yah Lá·kel té:kʌ neʔn akaulhá·", "Só·s neʔn akaulhá··"],
        en: "No. She's not Rachel. She's Susan.",
      },
    ],
  ];
  const part5: DialogueTableData = [
    [
      { one: "Í· kʌ neʔn Wá·li", en: "Am I Mary?" },
      {
        one: ["Tah", "Yah Wá·li té·kʌ niʔisé·", "Só·s ni·sé·"],
        en: "No. You're not Mary. You're Susan.",
      },
    ],
    [
      { one: "Isé· kʌ neʔn Tu·wís", en: "Are you Thomas?" },
      {
        one: ["Tah", "Yah Tu·wís té·kʌ niʔí·", "Wílo niʔí·"],
        en: "No. I'm not Thomas. I'm William.",
      },
    ],
    [
      { one: "Laulhá· kʌ neʔn Tshyalé", en: "Is he Charlie?" },
      {
        one: ["Tah", "Yah Tshyalé té·kʌ neʔn laulhá·", "Ta·wet neʔn laulhá·"],
        en: "No. He's not Charlie. He's David.",
      },
    ],
    [
      { one: "Akaulhá· kʌ neʔn Ní·ki", en: "Is she Amelia?" },
      {
        one: ["Tah", "Yah Ní·ki té·kʌ neʔn akaulhá·", "Só·s neʔn akaulhá·"],
        en: "No. She's not Amelia. She's Susan.",
      },
    ],
  ];
  const part6: DialogueTableData = [
    [
      { one: "Sknú·wehseʔ kʌ niʔí·", en: "Do you like me?" },
      { one: "Λ́·, kunú·wehseʔ niʔisé·", en: "Yes, I like you." },
    ],
    [
      null,
      {
        one: "Kunú·wehseʔ niʔisé· kwáh ne·n tsiʔ niyot sknú·wehseʔ niʔí·",
        en: "I like you just like you like me.",
      },
    ],
    [
      { one: "Etsnú·wehseʔ kʌ neʔn laulhá·", en: "Do you like him?" },
      { one: "Λ́·, linú·wehseʔ né· laulhá·", en: "Yes, I like him." },
    ],
    [
      { one: "Etsnú·wehseʔ kʌ neʔn Wílo", en: "Do you like William?" },
      { one: "Λ́·, linú·wehseʔ né· Wílo", en: "Yes, I like William." },
    ],
    [
      { one: "Shenú·wehseʔ kʌ neʔn akaulhá·", en: "Do you like her?" },
      { one: "Λ́·, khenú·wehseʔ né· akaulhá·", en: "Yes, I like her." },
    ],
    [
      { one: "Shenú·wehseʔ kʌ neʔn Kowaklít", en: "Do you like Margaret?" },
      { one: "Λ́·, khenú·wehseʔ né· Kowaklít", en: "Yes, I like Margaret." },
    ],
    [
      { one: "Shenú·wehseʔ kʌ neʔn lonulhá·", en: "Do you like them?" },
      { one: "Λ́·, khenú·wehseʔ né· lonulhá·", en: "Yes, I like them." },
    ],
    [
      { one: "Shenú·wehseʔ kʌ neʔn Beatles", en: "Do you like the Beatles?" },
      { one: "Λ́·, khenú·wehseʔ né· Beatles", en: "Yes, I like the Beatles." },
    ],
  ];
  const part7: DialogueTableData = [
    [
      { one: "I·sé· kʌ skunú·wehse̲ʔ", en: "Do you like me?" },
      { one: "Λ́·, í· kunú·wehse̲ʔ", en: "Yes, I like you." },
    ],
    [
      { one: "laulhá· kʌ etsnú·wehse̲ʔ", en: "Do you like him?" },
      { one: "Λ́·, laulhá· linú·wehse̲ʔ", en: "Yes, I like him." },
    ],
    [
      { one: "Kwítel kʌ etsnú·wehse̲ʔ", en: "Do you like Peter?" },
      { one: "Λ́·, Kwítel linú·wehse̲ʔ", en: "Yes, I like Peter." },
    ],
    [
      { one: "Akaulhá· kʌ shenú·wehse̲ʔ", en: "Do you like her?" },
      { one: "Λ́·, akaulhá· khenú·wehse̲ʔ", en: "Yes, I like her." },
    ],
    [
      { one: "Kowaklit kʌ shenú·wehse̲ʔ", en: "Do you like Margaret?" },
      { one: "Λ́·, Kowaklít khenú·wehse̲ʔ", en: "Yes, I like Margaret." },
    ],
    [
      { one: "Lonulhá· kʌ shenú·wehse̲ʔ", en: "Do you like them?" },
      { one: "Λ́·, lonulhá· khenú·wehse̲ʔ", en: "Yes, I like them." },
    ],
    [
      {
        one: "Rolling Stones kʌ shenú·wehse̲ʔ",
        en: "Do you like the Rolling Stones?",
      },
      {
        one: "Λ́·, Rolling Stones khenú·wehse̲ʔ",
        en: "Yes, I like the Rolling Stones.",
      },
    ],
  ];
  const part8: DialogueTableData = [
    [
      { one: "Úhkaʔ náhteʔ khenú·wehseʔ", en: "Who do I like?" },
      { one: "Í· skunú·wehseʔ", en: "You like me." },
    ],
    [null, { one: "Kwítel etsnú·wehseʔ", en: "You like Peter." }],
    [null, { one: "Klistí·n shenú·wehseʔ", en: "You like Kristin." }],
    [null, { one: "Beatles shenú·wehseʔ", en: "You like the Beatles." }],

    [
      { one: "Úhkaʔ náhteʔ shenú·wehseʔ", en: "Who do you like?" },
      { one: "Isé· kunú·wehseʔ", en: "I like you." },
    ],
    [null, { one: "Kwítel linú·wehseʔ", en: "I like Peter." }],
    [null, { one: "Klistí·n khenú·wehseʔ", en: "I like Kristin." }],
    [null, { one: "Beatles khenú·wehseʔ", en: "I like the Beatles." }],
    [null, { one: "Akwekú khenú·wehseʔ", en: "I like everyone." }],
    [
      null,
      {
        one: "Háti úhkaʔ ok náhteʔ niʔisé· shenú·wehseʔ, í· khenú·wehseʔ",
        en: "Anyone you like, I like them too.",
      },
    ],

    [
      { one: "Úhkaʔ oyá· shenú·wehseʔ", en: "Who else do you like?" },
      {
        one: "Rolling Stones ú·niʔ khenú·wehseʔ",
        en: "I also like the Rolling Stones.",
      },
    ],

    [
      { one: "Úhkaʔ shakonú·wehseʔ né· Kwítel", en: "Who does Peter like?" },
      { one: "Í· laknú·wehseʔ né· Kwítel", en: "Peter likes me." },
    ],
    [null, { one: "I·sé· yanú·wehseʔ né· Kwítel", en: "Peter likes you." }],

    [
      {
        one: "Úhkaʔ oyá· shakonú·wehseʔ neʔn Kwítel",
        en: "Who else does Peter like?",
      },
      {
        one: "Rolling Stones oniʔ shakonú·wehseʔ neʔn Kwítel",
        en: "Peter also likes the Rolling Stones.",
      },
    ],

    [
      {
        one: "Úhkaʔ náhteʔ yutatnú·wehseʔ neʔn Só·s",
        en: "Who does Susan like?",
      },
      { one: "Í· yuknú·wehseʔ neʔn Só·s", en: "Susan likes me." },
    ],
    [null, { one: "I·sé· yesanú·wehseʔ né· Só·s", en: "Susan likes you." }],
  ];
  const part9: DialogueTableData = [
    [
      { one: "Náhte snú·wehseʔ", en: "What do you like?" },
      { one: "Kaʔikʌ́ knú·wehseʔ", en: "I like this." },
    ],
    [null, { one: "Thikʌ́· knú·wehseʔ", en: "I like that." }],
    [null, { one: "Akwekú knú·wehseʔ", en: "I like everything." }],
    [
      null,
      {
        one: "Háti náhte ne·n isé· snú·wehseʔ, í· ú·ni knú·wehseʔ",
        en: "Whatever you like, I also like.",
      },
    ],
  ];
  const part10: DialogueTableData = [
    [
      {
        one: "Úhkaʔ náhteʔ sʌ́haʔ shenú·wehseʔ Beatles tá·thuniʔ Rolling Stones",
        en: "Who do you like more, the Beatles or the Rolling Stones?",
      },
      {
        one: "Beatles sʌ́haʔ khenú·wehseʔ tsiʔ ni·yót né· Rolling Stones",
        en: "I like the Beatles more than the Rolling Stones.",
      },
    ],
    [
      {
        one: "Úhkaʔ náhteʔ sʌ́haʔ shenú·wehseʔ tsiʔ ni·yót né·n Rolling Stones",
        en: "Who do you like more than the Rolling Stones?",
      },
      {
        one: "Beatles sʌ́haʔ khenú·wehseʔ tsiʔ ni·yót né· Rolling Stones",
        en: "I like the Beatles more than the Rolling Stones.",
      },
    ],
    [
      {
        one: "Úhkaʔ náhteʔ sʌ́haʔ shenú·wehseʔ tsiʔ ni·yót né· Beatles",
        en: "Who do you like more than the Beatles?",
      },
      {
        one: "Yah úhkaʔ náhteʔ sʌ́haʔ teʔkhenú·wehseʔ tsiʔ ni·yót né· Beatles",
        en: "Thereʔs no one I like more than the Beatles.",
      },
    ],
    [
      {
        one: "Sʌ́haʔ kʌ shenú·wehseʔ neʔn Beach Boys tsiʔ ni·yót neʔn Beatles",
        en: "Do you like the Beach Boys more than the Beatles?",
      },
      {
        one: "Tah. Yah sʌ́haʔ tekhenú·wehseʔ né· Beach Boys tsiʔ ni·yót né· Beatles",
        en: "No. I donʔt like the Beach Boys more than the Beatles.",
      },
    ],
    [
      {
        one: "Sʌ́haʔ kʌ etsnú·wehseʔ neʔn Nelson Mandela tsiʔ ni·yót neʔn Stephen Harper",
        en: "Do you like Nelson Mandela more than Stephen Harper?",
      },
      {
        one: "Λ́·, kwáh ikʌ́ tsiʔ sʌ́haʔ linú·wehseʔ Nelson Mandela tsiʔ ni·yót neʔn Stephen Harper",
        en: "Yes, I really like Nelson Mandela more than Stephen Harper.",
      },
    ],
    [
      {
        one: "Úhka ó·ya sʌ́haʔ shenú·wehseʔ tsiʔ ni·yót né· Stephen Harper",
        en: "Who else do you like more than Stephen Harper?",
      },
      {
        one: "Tom Porter óni sʌ́haʔ linú·wehseʔ tsiʔ ni·yót né·n Stephen Harper",
        en: "I also like Tom Porter more than Stephen Harper.",
      },
    ],
    [
      {
        one: "Lonúhteʔ kʌ́ neʔn Tshyalé oh náhte luwatí·yats neʔn Beatles",
        en: "Does Charlie know what the Beatlesʔ names are?",
      },
      {
        one: "Λ́·, lonúhteʔ neʔn Tshyalé oh náhte luwati·yáts neʔn Beatles",
        en: "Yes, Charlie knows what the Beatlesʔ names are.",
      },
    ],
    [
      {
        one: "Lonanúhteʔ kʌ né· thikʌ́ latiksaʔshuha oh náhte kuwatí·yats né· thikʌ́ otikhstʌʔokúha̲",
        en: "Do those children know what those old womenʔs names are?",
      },
      {
        one: "Tah. Yah tehonanúhteʔ né· thikʌ́ latiksaʔshúha oh náhte kuwati·yáts thikʌ́ otikhstʌʔokúha̲",
        en: "No. Those children donʔt know what those old womenʔs names are.",
      },
    ],
    [
      {
        one: "Laulhá· kʌ lonúhteʔ náhte yesá·yats",
        en: "Does he know what your name is?",
      },
      {
        one: "Tah. Yah tehonúhteʔ náhte ní· yúkyats",
        en: "No. He doesnʔt know what my name is.",
      },
    ],
    [
      {
        one: "Klistí·n kʌ yutátyats né· thikʌ́ yakú·kwe̲",
        en: "Is that womanʔs name Christine?",
      },
      {
        one: "Λ́·, Klistí·n yutátyats né· thikʌ́ yakú·kwe̲ʔ",
        en: "Yes, that womanʔs name is Christine.",
      },
    ],
    [
      {
        one: "Onulhá· kʌ yonanúhteʔ náhte luwati·yáts neʔn Rolling Stones",
        en: "Do they know what the Rolling Stones names are?",
      },
      {
        one: "Λ́·, yonanúhteʔ náhte luwati·yáts neʔn Rolling Stones. Mick, Keith, Charlie kháleʔ Ronnie luwati·yáts",
        en: "Yes, they know what the the Rolling Stones names are. They are called Mick, Keith, Charlie, and Ronnie.",
      },
    ],
  ];
  const part11: DialogueTableData = [
    [
      {
        one: "Skyʌtelí kʌ náhte ni yúkyats",
        en: "Do you know what my name is?",
      },
      { one: "Lá·kel kʌ yesa·yáts", en: "Is your name Rachel?" },
    ],
    [
      {
        one: [
          "Tah",
          "Yah Lá·kel teyúkyats",
          "Thikʌ akokstʌ́·haʔ neʔn Lá·kel yutátyats",
        ],
        en: "No. My name is not Rachel. That old woman is the one named Rachel.",
      },
      { one: "Kowáklit kʌ yesa·yáts", en: "Is your name Margaret?" },
    ],
    [
      {
        one: [
          "Tah",
          "Yah oni Kowáklit teyúkyats",
          "Thikʌ yeksá· neʔn Kowáklit yutátyats",
        ],
        en: "No. Margaret isnʔt my name either. That girlʔs name is Margaret.",
      },
      {
        one: "Tá·t yah Lá·kel tathu·ní· yah Kowáklit teyesa·yáts nahte káti yesa·yáts",
        en: "If your name is not Rachel or Margaret, then what is your name?",
      },
    ],
    [
      { one: "Aliskwet niyúkyats", en: "My name is Elizabeth" },
      {
        one: "Onʌ kuyʌtelí náhte yesa·yáts",
        en: "Now I know what your name is.",
      },
    ],
  ];

  return (
    <>
      <SectionHeading id="dialogue" level={2}>
        Dialogue
      </SectionHeading>
      <Text>
        Here is some dialogue using what was covered on this page. Some parts of
        this dialogue are a bit contrived but it should help you with
        understanding what has been covered.
      </Text>
      <SectionHeading id="dialogue-ex1" level={3}>
        Example 1
      </SectionHeading>
      <DialogueTable data={part1} />

      <SectionHeading id="dialogue-ex2" level={3}>
        Example 2
      </SectionHeading>
      <DialogueTable data={part2} />

      <SectionHeading id="dialogue-ex3" level={3}>
        Example 3
      </SectionHeading>
      <DialogueTable data={part3} />

      <SectionHeading id="dialogue-ex4" level={3}>
        Example 4
      </SectionHeading>
      <DialogueTable data={part4} />

      <SectionHeading id="dialogue-ex5" level={3}>
        Example 5
      </SectionHeading>
      <DialogueTable data={part5} />

      <SectionHeading id="dialogue-ex6" level={3}>
        Example 6
      </SectionHeading>
      <DialogueTable data={part6} />

      <SectionHeading id="dialogue-ex7" level={3}>
        Example 7
      </SectionHeading>
      <DialogueTable data={part7} />

      <SectionHeading id="dialogue-ex8" level={3}>
        Example 8
      </SectionHeading>
      <DialogueTable data={part8} />

      <SectionHeading id="dialogue-ex9" level={3}>
        Example 9
      </SectionHeading>
      <DialogueTable data={part9} />

      <SectionHeading id="dialogue-ex10" level={3}>
        Example 10
      </SectionHeading>
      <DialogueTable data={part10} />

      <SectionHeading id="dialogue-ex11" level={3}>
        Example 11
      </SectionHeading>
      <DialogueTable data={part11} />
    </>
  );
}
