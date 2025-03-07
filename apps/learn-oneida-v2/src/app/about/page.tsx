import { List } from "@ukwehuwehneke/ohutsya";
import { Text } from "@ukwehuwehneke/ohutsya";
import { SectionHeading } from "@ukwehuwehneke/language-components";
import { Link } from "@/components/Link";
import { PageWrapper } from "@/components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>About Learn-Oneida</SectionHeading>

      <Text>
        Learn-Oneida was created from Fanshawe College&lsquo;s Oneida Language
        Immersion, Culture and Teaching Program curriculum. The curriculum,
        which was worked on by the Twatati Program based on Oneida Nation, is
        actually an adaptation of the Onkwawenna Kentyokwah program.
      </Text>

      <Text>
        It is produced by{" "}
        <Link href="https://anowal-software.com/">Anowal Software</Link>,
        Indigenous-owned, and always maintained with community input in mind.
      </Text>

      <SectionHeading level={2}>The Anowal Software Team</SectionHeading>

      <List>
        <List.Item>Dakota St. Laurent - Founder and Lead Developer</List.Item>
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
        Questions? Found some Typos? Want to see more features? Email{" "}
        <a
          className="underline text-blue-600"
          href="mailto:dakota@anowal-software.com"
        >
          Dakota
        </a>
        !
      </Text>
    </PageWrapper>
  );
}
