import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

// Here we use the @cloudflare/next-on-pages next-dev module to allow us to use bindings during local development
// (when running the application with `next dev`), for more information see:
// https://github.com/cloudflare/next-on-pages/blob/5712c57ea7/internal-packages/next-dev/README.md
if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

const cspHeader = `
    default-src 'self';
    connect-src 'self' *.mixpanel.com;
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    media-src 'self' blob: data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/articles/whispered-endings",
        destination: "/articles/prepausal-endings#prepausal-whispered",
        permanent: false,
      },
      {
        source: "/articles/repetitive-conjugation",
        destination: "/articles/repetitive-feature",
        permanent: false,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
