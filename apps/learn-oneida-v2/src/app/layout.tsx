import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./../learn-oneida.css";
import { Text } from "@ukwehuwehneke/ohutsya";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Scripts } from "@/utils/Scripts";

const notoSansFont = Noto_Sans({ subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Learn Oneida",
    default: "Learn Oneida",
  },
  description:
    "Learn the Oneida language with our comprehensive online resources. Includes a fully developed curriculum and tools for practicing. Free-to-use forever!",
  metadataBase: new URL("https://learn-oneida.com"),
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansFont.className}>
        <Scripts />
        <TitleBar />
        <div className="bg-gray-100">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}

function TitleBar() {
  return (
    <div className="text-white bg-purple-950 text-center text-4xl py-4">
      <Text as="span" variant="headlineS">
        <Link href="/">
          <span className="text-white">Learn Oneida</span>
        </Link>
      </Text>
    </div>
  );
}
