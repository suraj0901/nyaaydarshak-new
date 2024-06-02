import CallToAction from "@/components/CallToAction";
import { cn } from "@/lib/utils";
import { Lora } from "next/font/google";
import Image from "next/image";
import PageNavigation from "./PageNavigation";

const lora = Lora({ subsets: ["latin"], weight: "700" });

export default function HeroSection() {
  return (
    <section className="lg:py-[60px] py-7 relative bg-blend-color-burn">
      <div className="bg-[linear-gradient(90deg,#fff_25%,rgba(255,221,19,0.4)_50%,rgba(110,_38,_36,_0.30)_75%,_rgba(72,_36,_110,_0.30)_100%)] blur-[250px] absolute inset-0 -z-40"></div>
      {/* <div className="bg-[linear-gradient(90deg,#fff_0%,rgba(110,_38,_36,_0.30)_75%,_rgba(72,_36,_110,_0.30)_100%)] bg-blend-overlay backdrop-blur-[100px] absolute inset-0 -z-50"></div> */}
      <div className="container relative px-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="space-y-5 max-w-xl">
            <h1
              className={cn(
                lora.className,
                "lg:text-5xl text-[32px] max-w-xs lg:max-w-full tracking-wide leading-[40px] lg:leading-[60px]"
              )}
            >
              Making Rights <br className="hidden lg:block" /> Accessible &
              Affordable
            </h1>
            <div className="sticky bottom-0">
              <CallToAction />
            </div>
          </div>
          <Image
            src={"/HeroImage.png"}
            width={500}
            height={500}
            alt="Hero Image"
            className="rounded-full"
          />
        </div>
        <PageNavigation />
      </div>
      <div className="lg:hidden fixed bottom-0 w-full p-4 bg-white shadow-[0px_-2px_12px_0px_rgba(32,_32,_32,_0.08)]">
        <CallToAction className="w-full" />
      </div>
    </section>
  );
}
