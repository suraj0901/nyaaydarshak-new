"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";

interface Props {
  steps: { label: string }[];
}

const STEPS = ["payment", "select-date"];

export default function ConsultationSteps({ steps }: Props) {
  const pathname = usePathname();
  const current_step = STEPS.findIndex((item) => pathname.includes(item));

  return steps.map((item, index) => (
    <div
      key={index}
      className={cn(
        index <= current_step + 1 ? "opacity-100" : "opacity-50",
        "flex z-10 flex-col lg:flex-row gap-x-4 items-center relative"
      )}
    >
      <div
        className={cn(
          index < current_step + 1 ? "bg-green-800" : "bg-blue-600 ",
          "rounded-full h-8 w-8 lg:h-10 lg:w-10  grid place-items-center lg:text-lg text-white"
        )}
      >
        {index < current_step + 1 ? <Check /> : index + 1}
      </div>
      <div className="hidden lg:block lg:text-lg">{item.label}</div>
    </div>
  ));
}
