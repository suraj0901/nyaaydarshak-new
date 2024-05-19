import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";

export default function NewsLetter() {
  return (
    <section className="bg-[#F6F9FC] lg:py-[60px] py-7">
      <div className="container px-4 flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
        <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-10 flex-1">
          <div className="bg-white lg:p-6 p-3 shadow-lg rounded-xl">
            <NewsLetterIcon />
          </div>
          <div className="space-y-6">
            <h1 className="lg:text-4xl text-[22px] tracking-wider lg:leading-[46px]  leading-[30px] font-semibold max-w-2xl">
              Crisp articles straight to your inbox
            </h1>
            <p className="text-[#616161]">
              Sign up for our newsletter to receive updates on our work and
              latest legal developments around gender-based violence.
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <div className="space-y-4">
            <h3 className="lg:text-[22px] font-semibold">
              Subscribe to the newsletter
            </h3>
            <form className="flex flex-col lg:flex-row gap-2 items-center ">
              <Input placeholder="Your email address" />
              <Button variant="outline" className="w-full lg:w-fit">
                Join Newsletter <ChevronRight className="ml-1" size={15} />
              </Button>
            </form>
          </div>
          <p className="text-[#616161]">
            By submitting this form, you consent to receive updates from
            NyaayDarshak. You can unsubscribe at any time using the
            &apos;unsubscribe&apos; link provided in our emails.
          </p>
        </div>
      </div>
    </section>
  );
}

function NewsLetterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
    >
      <g clip-path="url(#clip0_67_1459)">
        <path
          d="M52 64H12C5.372 64 0 58.628 0 52V12C0 5.372 5.372 0 12 0H52C58.628 0 64 5.372 64 12V52C64 58.628 58.628 64 52 64Z"
          fill="#FCF7E3"
        />
        <path
          d="M37.334 29H26.668C25.932 29 25.334 28.402 25.334 27.666C25.334 26.93 25.932 26.332 26.668 26.332H37.334C38.07 26.332 38.668 26.93 38.668 27.666C38.668 28.402 38.07 29 37.334 29Z"
          fill="#EBBF2F"
        />
        <path
          d="M32 23.666H26.666C25.93 23.666 25.332 23.068 25.332 22.332C25.332 21.596 25.93 20.998 26.666 20.998H32C32.736 20.998 33.334 21.596 33.334 22.332C33.334 23.068 32.736 23.666 32 23.666Z"
          fill="#EBBF2F"
        />
        <path
          d="M44 19.666V30.28L41.334 31.68V19.666C41.334 18.932 40.734 18.332 40 18.332H24C23.266 18.332 22.666 18.932 22.666 19.666V31.68L20 30.28V19.666C20 17.466 21.8 15.666 24 15.666H40C42.2 15.666 44 17.466 44 19.666Z"
          fill="#F0CE60"
        />
        <path
          d="M22.666 31.6798V33.6658C22.666 34.3998 22.066 34.9998 21.332 34.9998C20.6 34.9998 20 34.3998 20 33.6658V30.2798L22.666 31.6798Z"
          fill="#F0CE60"
        />
        <path
          d="M44 30.2798V33.6658C44 34.3998 43.4 34.9998 42.666 34.9998C41.932 34.9998 41.332 34.3998 41.332 33.6658V31.6798L44 30.2798Z"
          fill="#F0CE60"
        />
        <path
          d="M48 27.9199V42.3339C48 44.5339 46.2 46.3339 44 46.3339H20C17.8 46.3339 16 44.5339 16 42.3339V27.9199C16 26.4539 16.8 25.1059 18.08 24.3999L20 23.3599V26.3999L19.36 26.7459C18.934 26.9719 18.666 27.4259 18.666 27.9199V29.5859L20 30.2799L22.666 31.6799L31.226 36.1459C31.706 36.3859 32.292 36.3859 32.786 36.1319L41.332 31.6779L44 30.2799L45.334 29.5859V27.9199C45.334 27.4259 45.068 26.9739 44.64 26.7459L44 26.3999V23.3599L45.92 24.3999C47.2 25.1059 48 26.4539 48 27.9199Z"
          fill="#EBBF2F"
        />
      </g>
      <defs>
        <clipPath id="clip0_67_1459">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
