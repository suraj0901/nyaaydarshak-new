import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Lora } from "next/font/google";
import Image from "next/image";
import PageNavigation from "./PageNavigation";

const lora = Lora({ subsets: ["latin"], weight: "700" });

export default function HeroSection() {
  return (
    <section className="lg:py-[60px] py-7">
      <div className="container relative px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="space-y-5 max-w-xl">
            <h1
              className={cn(
                lora.className,
                "lg:text-5xl text-[32px] tracking-wide leading-[40px] lg:leading-[60px]"
              )}
            >
              Making Rights Accessible & Affordable
            </h1>
            <Button className="text-sm font-semibold">
              Book Consultation Call <ChevronRight size={15} className="ml-1" />
            </Button>
          </div>
          <Image
            src={"/HeroImage.png"}
            width={500}
            height={500}
            alt="Hero Image"
          />
        </div>
        <PageNavigation />
      </div>
    </section>
  );
}
