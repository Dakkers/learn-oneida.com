import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/components/heading";
import { List } from "@/design/components/list";
import { Text } from "@/design/components/text";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About" },
    { name: "description", content: "Info about this website" },
  ];
};

export default function About() {
  return (
    <Flex direction="column" gap={4}>
      <Heading level={1} variant="headlineL">
        About Learn-Oneida
      </Heading>

      <Text>
        Learn-Oneida was created from Fanshawe College&lsquo;s Oneida Language
        Immersion, Culture and Teaching Program curriculum. The curriculum,
        which was worked on by the Twatati Program based on Oneida Nation,
        is actually an adaptation of the Onkwawenna Kentyokwah program.
      </Text>

      <Text>
        It is produced by Anowal Software, Indigenous-owned, and always
        maintained with community input in mind.
      </Text>

      <Heading level={1} variant="headlineS">
        Land Acknowledgement
      </Heading>

      <Text>
        Anowal Software acknowledges that we live and work on Turtle Island
        which has been home to many Indigenous Peoples since Time Immemorial.
        Anowal Software Operates on Land traditionally inhabited and cared for
        by Anishinabe, Haudenosaunee, Attiwonderonk (Neutral) peoples.
      </Text>

      <Heading level={1} variant="headlineS">
        Team
      </Heading>

      <List>
        <List.Item>Dakota St. Laurent - Founder and Lead Developer</List.Item>
        <List.Item>Belle Pensamiento - Ethics Consultant and Developer</List.Item>
      </List>

      <Heading level={1} variant="headlineS">
        Contact Us
      </Heading>

      <Text>
        Questions? Comments? Want to see more features? &nbsp;
        <a
          className="underline text-blue-600"
          href="mailto:belle@pensamiento.ca"
        >
          Email us!
        </a>
      </Text>
    </Flex>
  );
}
