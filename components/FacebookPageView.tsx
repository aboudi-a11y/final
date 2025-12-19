"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { pageview } from "@/lib/fpixel";

export default function FacebookPageView() {
  const pathname = usePathname();

  useEffect(() => {
    pageview();
  }, [pathname]);

  return null;
}
