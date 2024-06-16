import { Flex } from "@/design/components/flex";
import { Heading } from "@/design/components/heading";
import { List } from "@/design/components/list";
import { Text } from "@/design/components/text";
import { SectionHeading } from "~/components/SectionHeading";

export default function About() {
  return (
    <Flex direction="column" gap={4}>
      <SectionHeading level={1}>About Learn-Oneida</SectionHeading>

      <Text>
        Learn-Oneida was created from Fanshawe College&lsquo;s Oneida Language
        Immersion, Culture and Teaching Program curriculum. The curriculum,
        which was worked on by the Twatati Program based on Oneida Nation, is
        actually an adaptation of the Onkwawenna Kentyokwah program.
      </Text>

      <Text>
        It is produced by Anowal Software, Indigenous-owned, and always
        maintained with community input in mind.
      </Text>

      <SectionHeading level={2}>Land Acknowledgement</SectionHeading>

      <Text>
        Anowal Software acknowledges that we live and work on Turtle Island
        which has been home to many Indigenous Peoples since Time Immemorial.
        Anowal Software Operates on Land traditionally inhabited and cared for
        by Anishinabe, Haudenosaunee, Attiwonderonk (Neutral) peoples.
      </Text>

      <SectionHeading level={2}>Team</SectionHeading>

      <List>
        <List.Item>Dakota St. Laurent - Founder and Lead Developer</List.Item>
        <List.Item>
          Belle Pensamiento - Ethics Consultant and Developer
        </List.Item>
      </List>

      <SectionHeading level={2}>Join our mailing list</SectionHeading>

      <Text>
        To join our mailing list, click{" "}
        <a
          className="underline text-blue-600"
          href="https://cdn.forms-content-1.sg-form.com/a00ff373-143f-11ef-ae17-feb76e8a007c"
        >
          here
        </a>
        .
      </Text>

      <SectionHeading level={2}>Contact us</SectionHeading>

      <Text>
        Questions? Found some Typos? Want to see more features? Email &nbsp;
        <a
          className="underline text-blue-600"
          href="mailto:belle@anowal-software.com"
        >
          Belle
        </a>{" "}
        or{" "}
        <a
          className="underline text-blue-600"
          href="mailto:dakota@anowal-software.com"
        >
          Dakota
        </a>
        !
      </Text>
    </Flex>
  );
}
