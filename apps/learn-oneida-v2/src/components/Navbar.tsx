"use client";

import * as React from "react";

import {
  cn,
  Flex,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@ukwehuwehneke/ohutsya";
import Link from "next/link";
import {
  BookOpenTextIcon,
  InfoIcon,
  MenuIcon,
  NewspaperIcon,
  PencilIcon,
  WrenchIcon,
} from "lucide-react";

const moduleNumbers = new Array(6).fill(0).map((_, i) => (i + 1).toString());

const toolsItems: { title: string; href: string; description: string }[] = [
  {
    title: "Numbers",
    href: "/tools/numbers",
    description: "Translate numbers into Oneida.",
  },
  {
    title: "Paradigm",
    href: "/tools/paradigm",
    description: "Test your pronominal knowledge.",
  },
  {
    title: "Clock Time",
    href: "/tools/clock",
    description: "Translate a digital clock time into Oneida.",
  },
  {
    title: "Flashcards",
    href: "/tools/flashcards",
    description: "Quiz yourself on Oneida verbs.",
  },
  {
    title: "Playlists",
    href: "/tools/playlists",
    description: "Listen to lists of Oneida words.",
  },
];

export function Navbar() {
  return (
    <div className="print:hidden">
      <div className="sm:hidden">
        <NavbarMobile />
      </div>
      <div className="hidden sm:block">
        <NavbarDesktop />
      </div>
    </div>
  );
}

function NavbarMobile() {
  const [isOpen, setIsOpen] = React.useState(false);

  const items = [
    {
      href: "/learn",
      icon: BookOpenTextIcon,
      text: "Learn",
    },
    {
      href: "/about",
      icon: InfoIcon,
      text: "About",
    },
    {
      href: "/articles",
      icon: NewspaperIcon,
      text: "Articles",
    },
    {
      href: "/practice",
      icon: PencilIcon,
      text: "Practice",
    },
    {
      href: "/tools",
      icon: WrenchIcon,
      text: "Tools",
    },
  ];

  return (
    <Flex align="center" justify="center" p={2}>
      <Flex justify="center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-2">
            {items.map(({ icon: Icon, ...item }, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle(true)}
                  href={item.href}
                >
                  <Icon />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </Flex>
    </Flex>
  );
}

function NavbarDesktop() {
  return (
    <NavigationMenu className="bg-gray-100">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="/about"
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[240px] gap-3 p-4 ">
              <ListItem href="/learn/introduction" title="Introduction" />
              {moduleNumbers.map((num) => (
                <ListItem
                  href={`/learn/module${num.padStart(2, "0")}`}
                  key={num}
                  title={`Module ${num}`}
                />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="/articles"
          >
            Articles
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="/practice"
          >
            Practice
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[320px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {toolsItems.map((item) => (
                <ListItem href={item.href} key={item.title} title={item.title}>
                  {item.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    className?: string;
    href: string;
    title: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
