"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Option, Service } from "./Option";

export default function BookConsultation() {
  const form = useForm();
  const router = useRouter();
  function onSubmit(data: any) {
    if (data.service == Service.CONSULTATION) {
      router.push("/book-consultation/payment.html");
    } else {
      router.push("/trainging-workshop.html");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 lg:space-y-12 "
      >
        <header className="lg:text-3xl font-semibold text-[22px] tracking-wider lg:leading-[46px]  leading-[30px]">
          Select your Service: 1:1 Consultation or Workshop
        </header>
        <FormField
          name="service"
          control={form.control}
          render={({ field }) => (
            <>
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    className="flex flex-col gap-5"
                  >
                    <Option
                      currentValue={field.value}
                      value={Service.CONSULTATION}
                    >
                      <h3 className="font-semibold text-lg tracking-wider">
                        1:1 Consultation
                      </h3>
                      <p className="text-gray-600 text-base">
                        Confidential consultation to address your legal queries.
                      </p>
                    </Option>
                    <Option currentValue={field.value} value={Service.WORKSHOP}>
                      <h3 className="font-semibold text-lg tracking-wider">
                        Awareness Workshops on Legal Rights
                      </h3>
                      <p className="text-gray-600 text-base">
                        Fostering legal awareness and empowerment in
                        communities.
                      </p>
                    </Option>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
              <footer>
                <Button
                  disabled={!field.value}
                  size="lg"
                  className="text-base font-semibold px-14 w-full lg:w-fit"
                >
                  Continue <ChevronRight size={15} className="ml-1" />
                </Button>
              </footer>
            </>
          )}
        />
      </form>
    </Form>
  );
}
