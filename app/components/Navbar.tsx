"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/design/primitives/navigation-menu";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/design/primitives/drawer";
import { Link } from "@remix-run/react";
import { MenuIcon } from "lucide-react";
import { Flex } from "@/design/components/flex";
import { Text } from "@/design/components/text";

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
      text: "Learn",
    },
    {
      href: "/about",
      text: "About",
    },
    {
      href: "/articles",
      text: "Articles",
    },
    {
      href: "/practice",
      text: "Practice",
    },
    {
      href: "/tools",
      text: "Tools",
    },
  ];

  return (
    <Flex align="center" justify="end" p={2}>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <Flex justify="center">
            <NavigationMenu>
              <NavigationMenuList className="flex-col">
                {items.map((item, i) => (
                  <NavigationMenuItem key={i}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle(true)}
                      href={item.href}
                    >
                      {item.text}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </Flex>
        </DrawerContent>
      </Drawer>
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
          to={props.href}
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
