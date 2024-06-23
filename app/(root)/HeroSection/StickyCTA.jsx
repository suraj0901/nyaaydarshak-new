"use client";

import CallToAction from "@/components/CallToAction";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [is_showing, set_is_showing] = useState(false);
  useEffect(() => {
    /** @param {Event} e */
    function handleScroll(e) {
      set_is_showing(window.scrollY > 192);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={cn(
        "lg:hidden hidden fixed bottom-0 transition-all duration-300 w-full p-4 bg-white shadow-[0px_-2px_12px_0px_rgba(32,_32,_32,_0.08)]",
        is_showing && "block translate-y-full"
      )}
    >
      <CallToAction className="w-full" />
    </div>
  );
}
