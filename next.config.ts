import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — site has no server routes; deploys to Cloudflare Pages as plain files
  output: "export",
};

export default nextConfig;
