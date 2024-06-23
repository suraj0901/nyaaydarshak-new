import CallToAction from "@/components/CallToAction";
import { cn } from "@/lib/utils";
import { Lora } from "next/font/google";
import Image from "next/image";
import PageNavigation from "./PageNavigation";
import StickyCTA from "./StickyCTA";

const lora = Lora({ subsets: ["latin"], weight: "700" });

export default function HeroSection() {
  return (
    <>
      <section className="lg:py-[60px] lg:pb-[0px] relative py-7 bg-blend-color-burn">
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
              <CallToAction />
            </div>
            <Image
              src={"/HeroImage.png"}
              width={500}
              height={500}
              alt="Hero Image"
              className="rounded-full"
            />
          </div>
        </div>
      </section>
      <StickyCTA />
      <div className="hidden lg:block sticky top-32 w-full z-10 -translate-y-1/2">
        <PageNavigation />
      </div>
    </>
  );
}
