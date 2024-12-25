"use client";

import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./../learn-oneida.css";
import {
  LinkAsContext,
  LinkCompatibleProps,
  Text,
} from "@ukwehuwehneke/ohutsya";
import Link from "next/link";
import { cn } from "@ukwehuwehneke/ohutsya";
import { Navbar } from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

const notoSansFont = Noto_Sans({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Learn Oneida",
//   description: "Learn the Oneida language!",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const useLargeWidth = ["/", "/articles/kanuhwelatuksla"].includes(pathname);

  return (
    <html lang="en">
      <body className={notoSansFont.className}>
        <LinkAsContext.Provider value={LinkWrapper}>
          <TitleBar />
          <div className="bg-gray-100">
            <Navbar />
          </div>
          <div
            className={cn(
              "mx-auto flex flex-col gap-4 p-4 md:p-8",
              useLargeWidth ? "max-w-5xl" : "max-w-2xl",
            )}
          >
            {children}
          </div>
        </LinkAsContext.Provider>
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

const LinkWrapper = forwardRef<HTMLAnchorElement, LinkCompatibleProps>(
  function LinkWrapper({ children, ...props }, ref) {
    const Tag = props.href.startsWith("/") ? Link : "a";
    return (
      <Tag className="text-blue-600 underline" href={props.href} ref={ref}>
        {children}
      </Tag>
    );
  },
);
