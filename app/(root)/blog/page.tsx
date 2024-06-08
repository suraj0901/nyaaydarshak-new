"use client";

import useBlogsWithSuspense from "@/hooks/useBlogs";
import Image from "next/image";
import NoContent from "./NoContent";
import Error from "./error";
import LoadingState from "./loading";

// export default function BlogPage() {
//   return (
//     <div className="space-y-4">
//       <Suspense fallback={<LoadingState />}>
//         <Blogs />
//       </Suspense>
//     </div>
//   );
// }

/* export default async  */
export default function Blogs() {
  const { blogs, error, isLoading } = useBlogsWithSuspense();

  if (isLoading) return <LoadingState />;
  if (error) return <Error error={error} />;

  if (blogs?.length === 0) return <NoContent />;

  const primary_card = blogs[0];
  const secondary_card = blogs.slice(1);

  return (
    <section className="lg:space-y-8 space-y-6">
      <div className="flex lg:flex-row flex-col lg:items-center p-3 gap-y-3">
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
}
