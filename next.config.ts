import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables static export
  images: {
    unoptimized: true, // Github Pages cannot optimize images
  },
};

export default nextConfig;
