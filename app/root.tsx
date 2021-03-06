import type { LinksFunction } from "remix";
import { Links, LiveReload, Outlet } from "remix";

import globalStyleUrl from "./styles/global.css";
import globalMediumStyleUrl from "./styles/global-medium.css";
import globalLargeStyleUrl from "./styles/global-large.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStyleUrl
    },
    {
      rel: "stylesheet",
      href: globalMediumStyleUrl,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: globalLargeStyleUrl,
      media: "print, (min-width: 1024px"
    }
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === "development" ? (
          <LiveReload />
        ) : null}
      </body>
    </html>
  );
}