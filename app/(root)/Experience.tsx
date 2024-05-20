import { Card, CardHeader } from "@/components/ui/card";
import EXPERIENCE_CONFIG from "@/config/experience.config";
import { cn } from "@/lib/utils";
import { Siren } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  return (
    <section id="experiences" className="lg:py-[60px] py-7">
      <div className="container px-4 space-y-6 lg:space-y-11">
        <h1 className="lg:text-4xl text-[22px] tracking-wider lg:leading-[46px]  leading-[30px] font-semibold max-w-2xl">
          Do you relate to these real-life problems?
        </h1>
        <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 mx-auto w-fit lg:pt-8">
          <div className="flex flex-col justify-between gap-5 lg:gap-20">
            <ExperienceCard
              className={
                "bg-green-50 border-green-100 lg:rotate-12 lg:translate-x-10"
              }
            >
              <Siren className="stroke-green-300 shrink-0" />
              <p>{EXPERIENCE_CONFIG[0].label}</p>
            </ExperienceCard>
            <ExperienceCard className={"bg-red-50 border-red-100"}>
              <Siren className="stroke-red-300 shrink-0" />
              <p className="max-w-[150px]">{EXPERIENCE_CONFIG[1].label}</p>
            </ExperienceCard>
            <ExperienceCard
              className={
                "bg-blue-50 border-blue-100 lg:-rotate-12 lg:translate-x-10"
              }
            >
              <Siren className="stroke-blue-300 shrink-0" />
              <p>{EXPERIENCE_CONFIG[2].label}</p>
            </ExperienceCard>
          </div>
          <div className="grid place-items-center">
            <Image
              src="/Experience.png"
              width={400}
              height={400}
              alt="experience"
              className="w-full bg-primary pt-11 rounded-full"
            />
          </div>
          <div className="flex flex-col justify-between gap-5 lg:gap-20">
            <ExperienceCard
              className={
                "bg-amber-100 border-amber-100 lg:-rotate-12 lg:-translate-x-10"
              }
            >
              <Siren className="stroke-amber-300 shrink-0" />
              <p>{EXPERIENCE_CONFIG[3].label}</p>
            </ExperienceCard>
            <ExperienceCard className={"bg-indigo-50 border-indigo-100"}>
              <Siren className="stroke-indigo-300 shrink-0" />
              <p>{EXPERIENCE_CONFIG[4].label}</p>
            </ExperienceCard>
            <ExperienceCard
              className={
                "bg-orange-50 border-orange-100 lg:rotate-12 lg:-translate-x-10"
              }
            >
              <Siren className="stroke-orange-300 shrink-0" />
              <p>{EXPERIENCE_CONFIG[5].label}</p>
            </ExperienceCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  children,
  className,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Card className={cn(className, "lg:max-w-xs w-full")}>
      <CardHeader className="py-3 px-4 lg:p-6">
        <div className="flex gap-x-4 lg:gap-x-6 items-center">{children}</div>
      </CardHeader>
    </Card>
  );
}
