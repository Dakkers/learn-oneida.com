import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function Scripts() {
  console.log(getRequestContext());

  // useEffect(() => {
  //   fetch('/env_vars')
  //     .then(response => response.json())
  //     .then(data => {
  //     });

  // }, [])

  return null;
}
