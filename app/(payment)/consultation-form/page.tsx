"use client";

import { Card, CardHeader } from "@/components/ui/card";

import { useState } from "react";
import { ConsultationForm } from "./ConsultationForm";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrainingWorkShop() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
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
            <Button className="w-full" variant="outline">
              Got it
            </Button>
          </div>
        ) : (
          <ConsultationForm onSubmit={() => setIsFormSubmitted(true)} />
        )}
      </CardHeader>
    </Card>
  );
}
