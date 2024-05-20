"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SelectDate() {
  const [canContinue, setCanContinue] = useState(false);
  const router = useRouter();

  function onSubmit() {
    router.push("/book-consultation/select-date");
  }

  return (
    <div className="space-y-12">
      <header className="lg:text-3xl font-semibold text-[22px] tracking-wider lg:leading-[46px]  leading-[30px]">
        Schedule a consultation using Calendly
      </header>
      <Card className="max-w-xs w-full h-[320px] lg:m-0 mx-auto border-0 drop-shadow-md">
        <CardContent className="grid place-items-center h-full">
          <Toggle onClick={() => setCanContinue((prev) => !prev)}>
            <Image width={100} height={100} src="/calendly.png" alt="" />
          </Toggle>
        </CardContent>
      </Card>
      {/* <footer>
        <Button
          disabled={!canContinue}
          size="lg"
          className="text-base font-semibold px-14"
          onClick={onSubmit}
        >
          Continue <ChevronRight size={15} className="ml-1" />
        </Button>
      </footer> */}
    </div>
  );
}
