"use client";

import useBlogs from "@/hooks/useBlogs";
import { Loader } from "lucide-react";
import Image from "next/image";
import NoContent from "./NoContent";

export default function Blog() {
  const { blogs, isLoading } = useBlogs();

  if (isLoading)
    return (
      <div className="grid place-items-center h-[500px]">
        <Loader className="animate-spin" />
      </div>
    );

  if (blogs.length === 0) return <NoContent />;

  const primary_card = blogs[0];
  const secondary_card = blogs.slice(1);

  const content = (
    <section className="lg:space-y-8 space-y-6">
      <div className="flex lg:flex-row flex-col items-center p-3 gap-y-3">
        <div className="flex-[2] aspect-video rounded-lg overflow-hidden">
          <Image
            src={primary_card.thumbnail}
            width={500}
            height={500}
            alt="primary image"
            className="w-auto h-auto object-contain"
          />
        </div>

        <div className="flex-1 lg:px-8 lg:space-y-4 space-y-3">
          <h2 className="lg:text-2xl text-lg font-semibold">
            {primary_card.title}
          </h2>
          <p className="text-base">{primary_card.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between lg:gap-8 gap-6">
        {secondary_card.map((item, index) => (
          <div key={index} className="p-3 space-y-3 flex-[1_1_340px]">
            <Image
              src={item.thumbnail}
              width={340}
              height={240}
              className="w-full rounded-lg"
              alt="secondary image"
            />
            <p className="text-lg">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return <div className="space-y-4">{content}</div>;
}
