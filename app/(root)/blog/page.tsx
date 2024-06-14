"use client";

import useBlogsWithSuspense, { Blog } from "@/hooks/useBlogs";
import Image from "next/image";
import NoContent from "./NoContent";
import Error from "./error";
import LoadingState from "./loading";
import Link from "next/link";

/* export default async  */
export default function Blogs() {
  // const { blogs, error, isLoading } = useBlogsWithSuspense();

  // if (isLoading) return <LoadingState />;
  // if (error) return <Error error={error} />;

  // if (blogs?.length === 0) return <NoContent />;

  const primary_card = {
    title:
      "Welcome to NyaayDarshak’s Blog: Making Rights Accessible & Affordable",
    description:
      "Greetings and welcome to the official blog of NyaayDarshak! We are thrilled to embark on this journey of empowerment, education, and support, and we're delighted to have you join us.",
    thumbnail: "/blog/hero.png",
    urlLink:
      "https://medium.com/@nyaaydarshak/welcome-to-nyaaydarshaks-blog-making-rights-accessible-affordable-dc545b1968e8",
  } as Blog;
  const secondary_card = [
    {
      title: "A Ray of Hope: Laxmi’s Journey to Justice with NyaayDarshak",
      thumbnail: "/blog/blog1.png",
      urlLink:
        "https://medium.com/@nyaaydarshak/a-ray-of-hope-laxmis-journey-to-justice-with-nyaaydarshak-76fa1b6be149",
    },
    {
      title:
        "Unveiling the Pink Tax: How Gender Discrimination Impacts Consumer Choices and Economic Equality",
      thumbnail: "/blog/blog2.png",
      urlLink:
        "https://medium.com/@nyaaydarshak/unveiling-the-pink-tax-how-gender-discrimination-impacts-consumer-choices-and-economic-equality-6e01b20a164d",
    },
  ] as Blog[]; //blogs.slice(1);

  return (
    <section className="lg:space-y-8 space-y-6">
      <Link
        href={primary_card.urlLink}
        className="flex lg:flex-row flex-col lg:items-center p-3 gap-y-3 shadow-md rounded-xl"
      >
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
      </Link>
      <div className="grid lg:grid-cols-3 lg:gap-8 gap-6">
        {secondary_card.map((item, index) => (
          <Link
            href={item.urlLink}
            key={index}
            className="p-3 space-y-3 rounded-xl shadow-md"
          >
            <Image
              src={item.thumbnail}
              width={340}
              height={240}
              className="w-full rounded-lg"
              alt="secondary image"
            />
            <p className="text-lg">{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
