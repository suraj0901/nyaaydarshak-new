"use client";

import { Card, CardHeader } from "@/components/ui/card";

import { useState } from "react";
import { ConsultationForm } from "./ConsultationForm";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import useSWRMutation from "swr/mutation";
import api, { post_default } from "@/lib/api";
import { toast } from "sonner";
import Link from "next/link";

export default function Consultation() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { trigger, isMutating } = useSWRMutation(
    api.consultations,
    post_default,
    {
      onSuccess() {
        setIsFormSubmitted(true);
      },
      onError(error) {
        toast.error(error.message);
      },
    }
  );

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
                Thank you for your request! We&apos;ve received it and will be
                in touch with you shortly.
              </p>
            </div>
            <Button className="w-full" variant="outline" asChild>
              <Link href="/">Got it</Link>
            </Button>
          </div>
        ) : (
          <ConsultationForm isMutating={isMutating} onSubmit={handleSubmit} />
        )}
      </CardHeader>
    </Card>
  );
}
