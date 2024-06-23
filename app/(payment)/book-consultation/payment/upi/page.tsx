"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Payment() {
  const [canContinue, setCanContinue] = useState(false);
  const router = useRouter();

  function onSubmit(data: any) {
    router.push("/book-consultation/select-date.html");
  }

  return (
    <div className="space-y-12">
      <header className="lg:text-3xl font-semibold text-[22px] tracking-wider lg:leading-[46px]  leading-[30px]">
        Pay a token amount and book a consultation date
      </header>
      <Card className="max-w-xs w-full h-[320px] mx-auto lg:m-0 border-0 drop-shadow-md">
        <CardContent className="grid place-items-center h-full">
          {canContinue ? (
            <div className="rounded-full bg-green-600">
              <CheckIcon />
            </div>
          ) : (
            <Toggle onClick={() => setCanContinue((prev) => !prev)}>
              <Image width={100} height={100} src="/phone-pe.png" alt="" />
            </Toggle>
          )}
        </CardContent>
      </Card>
      <footer>
        <Button
          disabled={!canContinue}
          size="lg"
          className={cn(
            "text-sm font-semibold !px-6 bg-[linear-gradient(180deg,#FDD85D_0%,#FDC921_100%)] shadow-[0px_4px_12px_0px_rgba(253,_216,_93,_0.12),_0px_-1px_4px_0px_rgba(0,0,0,0.12)_inset] !py-[22px]",
            "text-base font-semibold px-14 w-full lg:w-fit"
          )}
          onClick={onSubmit}
        >
          Continue <ChevronRight size={15} className="ml-1" />
        </Button>
      </footer>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="56"
      viewBox="0 0 55 56"
      fill="none"
    >
      <mask
        id="mask0_197_8119"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="55"
        height="56"
      >
        <rect
          x="0.0722656"
          y="0.571442"
          width="54.8571"
          height="54.8571"
          fill="#D9D9D9"
        />
      </mask>
      <g mask="url(#mask0_197_8119)">
        <path
          d="M22.9312 31.6571L36.4169 18.1714C36.836 17.7524 37.3693 17.5428 38.0169 17.5428C38.6645 17.5428 39.1979 17.7524 39.6169 18.1714C40.036 18.5905 40.2455 19.1238 40.2455 19.7714C40.2455 20.419 40.036 20.9524 39.6169 21.3714L24.5312 36.4571C24.0741 36.9143 23.5407 37.1428 22.9312 37.1428C22.3217 37.1428 21.7883 36.9143 21.3312 36.4571L15.3883 30.5143C14.9693 30.0952 14.7598 29.5619 14.7598 28.9143C14.7598 28.2667 14.9693 27.7333 15.3883 27.3143C15.8074 26.8952 16.3407 26.6857 16.9883 26.6857C17.636 26.6857 18.1693 26.8952 18.5883 27.3143L22.9312 31.6571Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
