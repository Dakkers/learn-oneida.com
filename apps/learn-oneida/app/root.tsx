import type { LinksFunction } from "@remix-run/cloudflare";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";
import stylesheet from "~/globals.css";
// import ohutsyaCss from "@ukwehuwehneke/ohutsya/lib/ohutsya.css";
import { Navbar } from "./components/Navbar";
import { Text } from "@/design/components/text";
import { cn } from "@/lib/utils";

// console.log(ohutsyaCss)

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  // { rel: "stylesheet", href: ohutsyaCss },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const matches = useMatches();
  const isHomePage = !!matches.find((m) => m.id === "routes/_index");

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
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
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

function TitleBar() {
  return (
    <div className="text-white bg-purple-950 text-center text-4xl py-4">
      <Text as="span" variant="headlineS">
        <Link to="/">
          <span className="text-white">Learn Oneida</span>
        </Link>
      </Text>
    </div>
  );
}
