import Image from "next/image";

export default function NoContent() {
  return (
    <div className="mx-auto w-fit space-y-8 pb-8">
      <Image
        src="/Blog.png"
        width={500}
        height={500}
        alt="No Blog"
        className="mx-auto rounded-full"
      />
      <div className="space-y-4 mx-auto">
        <h3 className="text-center text-2xl font-semibold">Coming Soon!</h3>
        <div className="text-center">
          <p>
            It looks like there&apos;s nothing here at the moment, but new
            articles are on the way.
          </p>
          <p>
            Please check back later for our latest content. We&apos;re glad
            you&apos;re here!
          </p>
        </div>
      </div>
    </div>
  );
}
