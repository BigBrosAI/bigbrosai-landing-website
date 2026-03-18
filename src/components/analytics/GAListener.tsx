"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GAListener() {
    const pathname = usePathname();

    useEffect(() => {
        if (!window.gtag) return;

        window.gtag("config", "G-ETDQMP0BYH", {
            page_path: pathname,
        });
    }, [pathname]);

    return null;
}