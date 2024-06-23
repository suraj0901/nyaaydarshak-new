"use client";
import PAGE_NAVIGATION from "@/config/page-navigation.config";
import Link from "next/link";

export default function PageNavigation() {
  return (
    <>
      <div className="flex items-center mx-auto w-fit px-16 py-2 rounded-full bg-white drop-shadow-md">
        {PAGE_NAVIGATION.map((item) => (
          <Link
            className="hover:underline underline-offset-4 px-4 py-2 scroll-smooth"
            key={item.label}
            href={item.link}
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector(item.link);
              const headerOffset = 100;
              const elementPosition = target?.getBoundingClientRect().top ?? 0;
              const offsetPosition =
                elementPosition + window.scrollY - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
