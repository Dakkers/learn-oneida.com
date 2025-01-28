import { Flex } from "@ukwehuwehneke/ohutsya";
import {
  SectionHeading,
  type SectionHeadingProps,
} from "@ukwehuwehneke/language-components";
import { Text } from "@ukwehuwehneke/ohutsya";
import { List } from "@ukwehuwehneke/ohutsya";
import type { ArticleProps } from "./utils";
import Image from "next/image";

export function UnderstandingPronominalAgentsArticle({
  standalone = true,
}: ArticleProps) {
  const level = standalone ? 1 : 2;
  const sublevel = (level + 1) as SectionHeadingProps["level"];
  return (
    <>
      <SectionHeading id="understanding-pronominals" level={level}>
        Understanding Pronominal Agents
      </SectionHeading>
      <Text>
        If English is your first language, you may be confused by terms like
        "they and I", "you and I", etc. Oneida has about 15 potential "agents"
        which are:
      </Text>
      <List ordered>
        <List.Item>First-person singular (I)</List.Item>
        <List.Item>Second-person singular (You)</List.Item>
        <List.Item>Male singular (He)</List.Item>
        <List.Item>Female singular (She)</List.Item>
        <List.Item>Feminine zoic (It, a living being)</List.Item>
        <List.Item>First-person inclusive dualic (You and I)</List.Item>
        <List.Item>First-person exclusive dualic (Someone and I)</List.Item>
        <List.Item>Second-person dualic (You two)</List.Item>
        <List.Item>
          Males, dualic (Two males / one male and one female)
        </List.Item>
        <List.Item>Females, dualic (Two females)</List.Item>
        <List.Item>First-person inclusive plural (You all and I)</List.Item>
        <List.Item>First-person exclusive plural (They and I)</List.Item>
        <List.Item>Second-person plural (All of you)</List.Item>
        <List.Item>
          Males, plural (3+ males / 2+ males and 1+ females / 1 male and 2+
          females)
        </List.Item>
        <List.Item>Females, plural (3+ females)</List.Item>
      </List>
      <Text>
        These are often divided into three groups: singular, dualic, and plural.
        Many languages only have the concept of singular (1) and plural (more
        than 1), but Oneida and the other Haudenosaunee languages are more
        intricate when specifying people. The sections below describe how to use
        the dualic and plural agents using real-life scenarios, as they are
        tricky to grasp.
      </Text>

      <SectionHeading level={sublevel}>
        First-Person Inclusive Dualic
      </SectionHeading>
      <Text>
        If you and your friend Bob are listening to a song, and you both like
        the song, you would say directly to Bob: <b>tninú·wehse̲ʔ</b> (you and I
        like it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that you and Bob like the song."
        src="/images/agents/uni.png"
      />

      <SectionHeading level={sublevel}>
        First-Person Exclusive Dualic
      </SectionHeading>
      <Text>
        If you, your friend Bob, and another friend Alice are all listening to a
        song, but only you and Alice like it, you would say directly to Bob:{" "}
        <b>yakninú·wehse̲ʔ</b> (someone and I like it). That "someone" cannot be
        the person you are speaking to.
      </Text>
      <ImgWrapper
        alt="A diagram indicating that you and Alice like the song, but not Bob."
        src="/images/agents/soni.png"
      />

      <SectionHeading level={sublevel}>Second-Person Dualic</SectionHeading>
      <Text>
        If you, your friend Bob, and Alice are all listening to a song, but
        Alice and Bob like it and you do not, you would say directly to either
        Alice or Bob: <b>sninú·wehse̲ʔ</b> (you two like it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Alice and Bob like the song, but not yourself."
        src="/images/agents/u2.png"
      />

      <SectionHeading level={sublevel}>Males, dualic</SectionHeading>
      <Text>
        If you and your friends Aaron, Bob, and George are all listening to a
        song, but only Aaron and George like the song, you would say directly to
        Bob: <b>latinú·wehse̲ʔ</b> (two males like it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Aaron and George like the song, but not yourself or Bob."
        src="/images/agents/2m_1.png"
      />

      <Text>
        Similarly, if you and your friends Alice, Bob, and George are all
        listening to a song, but only Alice and George like the song, you would
        say directly to Bob: <b>ninú·wehse̲ʔ</b> (one male and one female like
        it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Alice and George like the song, but not yourself or Bob."
        src="/images/agents/2m_2.png"
      />

      <SectionHeading level={sublevel}>Females, dualic</SectionHeading>
      <Text>
        If you and your friends Alice, Bob, and Christine are all listening to a
        song, but only Alice and Christine like the song, you would say directly
        to Bob: <b>kninú·wehse̲ʔ</b> (two females like it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Alice and Christine like the song, but not yourself or Bob."
        src="/images/agents/2f.png"
      />

      <SectionHeading level={sublevel}>
        First-person inclusive plural
      </SectionHeading>
      <Text>
        If you and your friends Alice, Bob, and George are all listening to a
        song, and all of you like the song, you would say directly to Bob:{" "}
        <b>twanú·wehse̲ʔ</b> (you all and I like it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Alice, Bob, George, and yourself like the song."
        src="/images/agents/us_1.png"
      />

      <Text>
        You can use the same pronominal if your group only contains three
        people, as long as that group includes the person you are speaking to,
        yourself, and one other person.
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Alice, Bob, and yourself like the song, but not George."
        src="/images/agents/us_2.png"
      />

      <SectionHeading level={sublevel}>
        First-person exclusive plural
      </SectionHeading>
      <Text>
        If you and your friends Alice, Bob, and George are all listening to a
        song, and everybody likes the song except Bob, you would say directly to
        Bob: <b>yakwanú·wehse̲ʔ</b> (they and I like it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Alice, George, and yourself like the song, but not Bob."
        src="/images/agents/theyni.png"
      />

      <SectionHeading level={sublevel}>Second-person plural</SectionHeading>
      <Text>
        If you and your friends Alice, Bob, and George are all listening to a
        song, and everybody likes the song except yourself, you would say
        directly to Bob: <b>swanú·wehse̲ʔ</b> (you all like it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Alice, Bob, and George like the song, but not yourself."
        src="/images/agents/yall.png"
      />

      <SectionHeading level={sublevel}>Males, plural</SectionHeading>
      <Text>
        If you and your friends Aaron, Alice, Bob, Christine, George, and
        Richard are all listening to a song, and only Aaron, George, and Richard
        like the song, you would say directly to Bob: <b>latinú·wehse̲ʔ</b> (they
        males like it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Aaron, George, and Richard like the song, but not yourself, Alice, Bob, or Christine."
        src="/images/agents/ms_1.png"
      />
      <Text>
        Similarly, if only Alice, George, and Richard like the song, you would
        say directly to Bob <b>latinú·wehse̲ʔ</b> (they males and females like
        it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Aaron, Alice, and Richard like the song, but not yourself, Christine, Bob, or George."
        src="/images/agents/ms_2.png"
      />
      <Text>
        Lastly, if only Alice, Christine, and Richard like the song, you would
        say directly to Bob <b>latinú·wehse̲ʔ</b> (they males and females like
        it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Alice, Christine, and Richard like the song, but not yourself, Aaron, Bob, or George."
        src="/images/agents/ms_3.png"
      />
      <Text>
        To summarize, as long as there is one male in a group of three or more,
        and you and the person you are talking to are not included, you use the
        pronominal that corresponds to "they (males) / they (mix of males and
        females) like it".
      </Text>

      <SectionHeading level={sublevel}>Females, plural</SectionHeading>
      <Text>
        If you and your friends Alice, Bob, Christine, Delores, George, and
        Richard are all listening to a song, and only Alice, Christine, and
        Delores like the song, you would say directly to Bob:{" "}
        <b>kutinú·wehse̲ʔ</b> (they females like it).
      </Text>
      <ImgWrapper
        alt="A diagram indicating that Alice, Christine, and Delores like the song, but not yourself, Bob, George, or Richard."
        src="/images/agents/fs.png"
      />
    </>
  );
}

function ImgWrapper({
  alt,
  src,
}: {
  alt: string;
  src: string;
}) {
  return (
    <Flex justify="center">
      <Image alt={alt} className="border" height={500} src={src} width={500} />
    </Flex>
  );
}
