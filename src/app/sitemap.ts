import fs from "fs";
import path from "path";
import { MetadataRoute } from "next";

const baseUrl = process.env.SITE_URL || "https://www.bigbrosai.com";
const baseDir = "src/app";

const excludeFolders = ["api", "fonts", "_components", "_lib"];
const excludeRoutes = ["/thank-you", "/admin"];

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

  const routes = getAllRoutes(appPath);
  routes.unshift("");

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      route === ""
        ? 1.0
        : route.includes("services")
        ? 0.9
        : route.includes("blog")
        ? 0.8
        : 0.6,
  }));
}