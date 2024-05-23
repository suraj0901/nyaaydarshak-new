"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import NoContent from "./NoContent";

const PRIMARY_URL =
  "https://images.unsplash.com/photo-1714969894946-8d5e55419ed3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const SECONDARY_BLOG = Array(6).fill({
  image_url:
    "https://images.unsplash.com/photo-1715276611636-ca01632a691a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});

export default function Blog() {
  const [showNoContent, setShowContent] = useState(true);

  const content = (
    <section className="lg:space-y-8 space-y-6">
      <div className="flex lg:flex-row flex-col items-center p-3 gap-y-3">
        <div className="flex-[2] aspect-video rounded-lg overflow-hidden">
          <Image
            src={PRIMARY_URL}
            width={500}
            height={500}
            alt="primary image"
            className="w-auto h-auto object-contain"
          />
        </div>

        <div className="flex-1 lg:px-8 lg:space-y-4 space-y-3">
          <h2 className="lg:text-2xl text-lg font-semibold">
            A Ray of Hope: Laxmi&apos;s Journey to Justice with NyaayDarshak
          </h2>
          <p className="text-base">
            From victim to advocacy: Laxmi&apos;s story showcases the
            transformative impact of legal aid from NyaayDarshak. An inspiring
            testament to resilience and justice.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between lg:gap-8 gap-6">
        {SECONDARY_BLOG.map((item, index) => (
          <div key={index} className="p-3 space-y-3 flex-[1_1_340px]">
            <Image
              src={item.image_url}
              width={340}
              height={240}
              className="w-full rounded-lg"
              alt="secondary image"
            />
            <p className="text-lg">
              Welcome to NyaayDarshak&apos;s Blog: Making Rights Accessible &
              Affordable
            </p>
          </div>
        ))}
      </div>
    </section>
  );
  return (
    <div className="space-y-4">
      <Button
        onClick={() => setShowContent((prev) => !prev)}
        variant={"outline"}
      >
        {showNoContent ? "Show" : "Hide"} dummy content
      </Button>
      {showNoContent ? <NoContent /> : content}
    </div>
  );
}
