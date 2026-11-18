import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = isDev
  ? {
      // Local dev only: show the intro at /
      async rewrites() {
        return {
          beforeFiles: [{ source: "/", destination: "/intro.html" }],
        };
      },
    }
  : {
      // Production build (Netlify): static export
      output: "export",
      images: { unoptimized: true },
    };

export default nextConfig;