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

// Project Pages live at /langbai. A non-empty public/CNAME means a custom
// domain will serve the site at "/", so the prefix is dropped on rebuild.
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
