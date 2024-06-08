"use client";

import { Card, CardHeader } from "@/components/ui/card";

import { useState } from "react";
import { WorkSheetForm } from "./WorkSheetForm";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import useSWRMutation from "swr/mutation";
import api, { post_default } from "@/lib/api";
import Link from "next/link";
import { toast } from "sonner";

export default function TrainingWorkShop() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { trigger, isMutating } = useSWRMutation(api.training, post_default, {
    onSuccess() {
      setIsFormSubmitted(true);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  function handleSubmit(data: any) {
    trigger(data);
  }
  return (
    <Card className="border-gray-100 rounded-2xl shadow-[rgba(149,157,165,0.2)_0px_8px_24px] max-w-md mx-auto lg:mt-14">
      <CardHeader className="p-8">
        {isFormSubmitted ? (
          <div className="space-y-8">
            <div className="bg-green-700 w-fit p-4 rounded-full ">
              <Check className="text-white stroke-white stroke-[3px]" />
            </div>
            <div className="space-y-2.5">
              <h3 className="text-2xl font-semibold">Thanks!</h3>
              <p className="text-base">
                Thank you for expressing interest in hosting a legal awareness
                training workshop. We&apos;ll be in touch shortly with all the
                details you need to take the next step towards fostering a
                respectful and inclusive workplace culture.
              </p>
            </div>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/">Got it</Link>
            </Button>
          </div>
        ) : (
          <WorkSheetForm isMutating={isMutating} onSubmit={handleSubmit} />
        )}
      </CardHeader>
    </Card>
  );
}
