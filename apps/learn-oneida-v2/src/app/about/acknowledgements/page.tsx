import { SectionHeading } from "@ukwehuwehneke/language-components";
import { PageWrapper } from "@/components/PageWrapper";
import { List, Text } from "@ukwehuwehneke/ohutsya";
import { Link } from "@/components/Link";

export default function Acknowledgements() {
  return (
    <PageWrapper>
      <SectionHeading level={1}>Acknowledgements</SectionHeading>
      <Text>
        We would first like to thank faithkeeper and second-language speaker
        Kaʼshatstʌhslahawi from Oneida-Wisconsin for her time and effort in
        recording the audio for this website. Listening is arguably the most
        important skill to learn and without her contributions, this website
        would simply be a lot of text with no way to learn how to say words or
        phrases correctly.
      </Text>

      <Text>
        We thank Yenaʼtalauyʌhu from Oneida of the Thames for pointing out
        numerous, numerous typos, and for her suggestions on features for the
        website.
      </Text>

      <Text>
        We would also like to thank{" "}
        <Link href="https://www.linkedin.com/in/dboiko/">Dima Boiko</Link> for
        his time and effort. His feedback has greatly improved the user
        experience of the website.
      </Text>
    </PageWrapper>
  );
}
