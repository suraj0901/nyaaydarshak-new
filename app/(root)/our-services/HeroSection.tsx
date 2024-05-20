import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { Lora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const lora = Lora({ subsets: ["latin"], weight: "700" });

export default function HeroSection() {
  return (
    <section className="lg:py-[60px] py-7">
      <div className="container relative px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="space-y-5 max-w-xl">
            <h1
              className={cn(
                lora.className,
                "lg:text-5xl text-[32px] tracking-wide leading-[40px] lg:leading-[60px]"
              )}
            >
              Empowering Change, Ensuring Justice
            </h1>
            <div>
              <Link href={"/book-consultation"}>
                <Button className="text-sm font-semibold">
                  Book Consultation Call
                  <ChevronRight size={15} className="ml-1" />
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src={"/our-services/HeroImage.png"}
            width={500}
            height={500}
            alt="Hero Image"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
