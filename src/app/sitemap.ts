import fs from "fs";
import path from "path";
import { MetadataRoute } from "next";

const baseUrl = process.env.SITE_URL || "https://www.bigbrosai.com";
const dashboardUrl =
  process.env.DASHBOARD_URL || "https://dashboard.bigbrosai.com";
const baseDir = "src/app";

const excludeFolders = ["api", "fonts", "_components", "_lib"];
const excludeRoutes = ["/thank-you", "/admin"];
const explicitRoutes = ["/brochure"];
const dashboardRoutes = ["/signin", "/signup"];

function getRoutePriority(route: string): number {
  if (route === "") return 1.0;
  if (["/pricing", "/features", "/product", "/channels", "/brochure"].includes(route)) {
    return 0.9;
  }
  if (route.startsWith("/industries")) return 0.8;
  if (route.startsWith("/legal")) return 0.3;
  return 0.6;
}

function getRouteChangeFrequency(
  route: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "" || ["/pricing", "/features", "/brochure"].includes(route)) {
    return "weekly";
  }
  if (route.startsWith("/legal")) return "yearly";
  return "monthly";
}

function getRouteLastModified(route: string, appPath: string): Date {
  const pagePath = path.join(appPath, route, "page.tsx");

  try {
    return fs.statSync(pagePath).mtime;
  } catch {
    return new Date();
  }
}

function getAllRoutes(dir: string, parentPath = ""): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  let routes: string[] = [];

  for (const entry of entries) {
    if (excludeFolders.includes(entry.name)) continue;
    if (entry.name.startsWith("_")) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const routePath = `${parentPath}/${entry.name}`;

      const hasPage = fs.existsSync(path.join(fullPath, "page.tsx"));

      if (hasPage && !excludeRoutes.includes(routePath)) {
        routes.push(routePath);
      }

      routes = routes.concat(getAllRoutes(fullPath, routePath));
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appPath = path.join(process.cwd(), baseDir);

  const routes = Array.from(new Set(["", ...getAllRoutes(appPath), ...explicitRoutes]));

  const websiteEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: getRouteLastModified(route, appPath),
    changeFrequency: getRouteChangeFrequency(route),
    priority: getRoutePriority(route),
  }));

  const dashboardEntries = dashboardRoutes.map((route) => ({
    url: `${dashboardUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "/signup" ? 0.8 : 0.7,
  }));

  return [...websiteEntries, ...dashboardEntries];
}
