import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { NextConfig } from "next";

function customDomainFromCname() {
  for (const file of ["public/CNAME", "CNAME"]) {
    const full = join(process.cwd(), file);
    if (!existsSync(full)) continue;
    const value = readFileSync(full, "utf8").trim().split(/\s+/)[0];
    if (value) return true;
  }
  return process.env.CUSTOM_DOMAIN === "true";
}

// Custom domains (public/CNAME) are served at "/". The github.io/langbai
// project path is only used when no CNAME is present.
const useProjectPath =
  process.env.GITHUB_PAGES === "true" && !customDomainFromCname();
const basePath = useProjectPath ? "/langbai" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
