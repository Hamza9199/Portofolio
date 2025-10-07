"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function RefreshOnMount() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const key = `__reloaded:${pathname}`;
    const nav = typeof performance !== "undefined" ? performance.getEntriesByType?.("navigation") : [];
    const isHardReload = Array.isArray(nav) && nav[0]?.type === "reload";

    if (typeof window !== "undefined" && !sessionStorage.getItem(key) && !isHardReload) {
      sessionStorage.setItem(key, "1");
      window.location.reload();
      return;
    }

    sessionStorage.removeItem(key);
    router.refresh();
  }, [router, pathname]);

  return null;
}
