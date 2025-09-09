import type { NextConfig } from "next";

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  output: "export", // enables static export
  images: {
    unoptimized: true, // Github Pages cannot optimize images
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

export default withMDX(nextConfig);
