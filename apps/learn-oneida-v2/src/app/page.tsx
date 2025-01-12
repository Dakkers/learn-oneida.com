import { Link } from "@/components/Link";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Box, Card, Flex, Text } from "@ukwehuwehneke/ohutsya";

export default function Index() {
  const modules: {
    href?: string;
    title?: string;
    active?: boolean;
    desc: string;
  }[] = [
    {
      desc: 'New to Oneida? Not sure what a "root word" is? Start here! This page will introduce you to all of the terminology that will get you going on your language-learning journey.',
      href: "/introduction",
      title: "Introduction",
    },
    {
      desc: "Pronominals aplenty! This module introduces you to pronominal prefixes, their exceptions when conjugating, some intracacies of the language, people, English names, and a couple verbs.",
    },
    {
      desc: "New linguistical features of the language are introduced, as well as family members, commands and their negations, numbers, and several new verbs.",
    },
    {
      desc: "The past tense makes its appearance, followed by a brief introduction to the repetitive feature. Relationship terms are discussed in addition to a quick glance at noun incorporation.",
    },
    {
      desc: "Verbs regarding where someone is are discussed and clock time in depth. Other topics include seasons, months, days of the week, and places in the community.",
    },
    {
      desc: "A plethora of stative verbs are introduced, specifically those related to one's character, the mind, one's body, and physical attributes. Some future tenses are introduced. Lastly, height and weight are discussed.",
    },
    {
      desc: "Active verbs are discussed along with new tenses! A select few of these verbs have their paradigms written out and examples are included so as to when to use which tense.",
    },
  ] as const;

  return (
    <Flex direction="column" gap={4}>
      <div className="lg:max-w-lg mx-auto mt-4 md:mt-8 mb-2 md:mb-4">
        <SectionHeading align="center" level={1}>
          Welcome to Learn Oneida
        </SectionHeading>
      </div>

      <div className="lg:max-w-5xl mt-2 md:mt-6 mx-auto">
        <SectionHeading level={2}>Learn</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
          {modules.map((card, i) => (
            <Card key={i}>
              <Text variant="titleM">
                {"title" in card ? card.title : `Module ${i}`}
              </Text>
              <Box pt={2}>
                <Text>{card.desc}</Text>
              </Box>

              {(card.active ?? true) && (
                <Flex justify="end" pt={4}>
                  <Link
                    href={
                      card.href
                        ? `/learn${card.href}`
                        : `/learn/module${i.toString().padStart(2, "0")}`
                    }
                  >
                    Learn
                  </Link>
                </Flex>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Flex>
  );
}
