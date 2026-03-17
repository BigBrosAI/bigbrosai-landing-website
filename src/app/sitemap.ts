import fs from "fs";
import path from "path";
import { MetadataRoute } from "next";

const baseUrl = process.env.SITE_URL || "https://bigbrosai.com";
const baseDir = "src/app";

const exclude = ["api", "fonts", "_components", "_lib"];

function getAllRoutes(dir: string, parentPath = ""): string[] {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    let routes: string[] = [];

    for (const entry of entries) {
        if (exclude.includes(entry.name)) continue;

        const fullPath = path.join(dir, entry.name);

        // Skip special files
        if (entry.name.startsWith("_")) continue;

        if (entry.isDirectory()) {
            const routePath = `${parentPath}/${entry.name}`;

            // Only include if it has page.tsx
            const hasPage = fs.existsSync(path.join(fullPath, "page.tsx"));

            if (hasPage) {
                routes.push(routePath);
            }

            // Recursively go deeper
            routes = routes.concat(getAllRoutes(fullPath, routePath));
        }
    }

    return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const appPath = path.join(process.cwd(), baseDir);

    const routes = getAllRoutes(appPath);

    // Add homepage manually
    routes.unshift("");

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.7,
    }));
}