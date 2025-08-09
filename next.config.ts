import { ANDROID_LINK, IOS_LINK } from "@/lib/links";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: "/ios",
        destination: IOS_LINK,
        permanent: true,
      },
      {
        source: "/apple",
        destination: IOS_LINK,
        permanent: true,
      },
      {
        source: "/android",
        destination: ANDROID_LINK,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
