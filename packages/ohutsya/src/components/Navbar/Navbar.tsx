import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../primitives/navigation-menu";
import { MenuIcon } from "lucide-react";
import { Drawer } from "../Drawer";
import { Flex } from "../Flex";
import { cn } from "../../utils";

export interface NavbarProps {
  moduleNumbers?: number[];
  tools?: { title: string; href: string; description: string }[];
}

export function Navbar(props: NavbarProps) {
  return (
    <div className="print:hidden">
      <div className="sm:hidden">
        <NavbarMobile {...props} />
      </div>
      <div className="hidden sm:block">
        <NavbarDesktop {...props} />
      </div>
    </div>
  );
}

function NavbarMobile(props: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const items = [
    props.moduleNumbers
      ? {
          href: "/learn",
          text: "Learn",
        }
      : null,
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
    props.tools
      ? {
          href: "/tools",
          text: "Tools",
        }
      : null,
  ].filter(Boolean);

  return (
    <Flex align="center" justify="end" p={2}>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <Drawer.Trigger>
          <MenuIcon />
        </Drawer.Trigger>

        <Flex justify="center">
          <NavigationMenu>
            <NavigationMenuList className="flex-col">
              {items.map((item, i) => (
                <NavigationMenuItem key={i}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle(true)}
                    href={item!.href}
                  >
                    {item!.text}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </Flex>
      </Drawer>
    </Flex>
  );
}

function NavbarDesktop(props: NavbarProps) {
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

        {props.moduleNumbers && (
          <NavigationMenuItem>
            <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col w-[240px] gap-3 p-4 ">
                {props.moduleNumbers.map((num) => (
                  <ListItem
                    href={`/learn/module${num.toString().padStart(2, "0")}`}
                    key={num}
                    title={`Module ${num}`}
                  />
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}

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

        {props.tools && (
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[320px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {props.tools.map((item) => (
                  <ListItem
                    href={item.href}
                    key={item.title}
                    title={item.title}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        )}
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
        <a
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
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
