import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import '@ukwehuwehneke/ohutsya/lib/ohutsya.css'
import { Text } from "@/design/components/text";
import Link from "next/link";
import { cn } from "@/design/library/utils";
import { Navbar } from "@/components/Navbar";

const notoSansFont = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Oneida",
  description: "Learn the Oneida language!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isHomePage = true;

  return (
    <html lang="en">
      <body className={notoSansFont.className}>
        <TitleBar />
        <div className="bg-gray-100">
          <Navbar />
        </div>
        <div
          className={cn(
            "mx-auto flex flex-col gap-4 p-4 md:p-8",
            isHomePage ? "max-w-5xl" : "max-w-lg",
          )}
        >
          {children}
        </div>
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
