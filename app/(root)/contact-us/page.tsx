"use client";
import { Card, CardHeader } from "@/components/ui/card";
import ContactForm from "./ContactForm";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import useSubmitContactDetail from "@/hooks/mutations/useSubmitContactDetail";
import Link from "next/link";
import { toast } from "sonner";
import Title from "@/components/Title";

export default function ContactUs() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const { trigger, isMutating } = useSubmitContactDetail({
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
    <main className="container px-4">
      <Title className="lg:py-8 py-6">Contact Us</Title>
      <Card className="max-w-md border-gray-100 shadow-md">
        <CardHeader className="p-8">
          {isFormSubmitted ? (
            <div className="space-y-8">
              <div className="bg-green-700 w-fit p-4 rounded-full ">
                <Check className="text-white stroke-white stroke-[3px]" />
              </div>
              <div className="space-y-2.5">
                <h3 className="text-2xl font-semibold">Thanks!</h3>
                <p className="text-base">
                  Thank you for your message! We&apos;ve received it and will be
                  in touch with you shortly.
                </p>
              </div>
              <Button className="w-full" variant="outline" asChild>
                <Link href="/">Got it</Link>
              </Button>
            </div>
          ) : (
            <ContactForm isMutating={isMutating} onSubmit={handleSubmit} />
          )}
        </CardHeader>
      </Card>
    </main>
  );
}
