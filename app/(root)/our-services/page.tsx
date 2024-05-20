import Image from "next/image";
import Consultation from "../Consultation";
import FAQ from "../FAQ";
import Workshop from "../Workshop";
import HeroSection from "./HeroSection";
import OUR_SERVICES from "@/config/our-services.config";
import { DotIcon } from "@/config/workshop.config";

export default function OurServices() {
  return (
    <main>
      <HeroSection />
      <Consultation>
        <div className="flex justify-between">
          <Image
            src={"/our-services/consultation.png"}
            width={500}
            height={500}
            alt="Hero Image"
            className="object-contain"
          />
          <div className="my-auto max-w-[608px] px-6 py-8">
            {OUR_SERVICES.map((item, index) => (
              <div key={index} className="my-1.5 flex items-start gap-x-2">
                <div className="shrink-0 mt-1">
                  <DotIcon />
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-lg font-semibold">
          Access confidential consultation to address your legal queries in 4
          easy steps:
        </p>
      </Consultation>
      <Workshop />
      <FAQ />
    </main>
  );
}
