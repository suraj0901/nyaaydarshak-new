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
import { Option } from "../Option";
import { cn } from "@/lib/utils";

enum Service {
  UPI = "UPI",
  CONSULTATION_FORM = "CONSULTATION_FORM",
}

export default function Payment() {
  const form = useForm({
    defaultValues: {
      service: Service.UPI,
    },
  });
  const router = useRouter();
  function onSubmit(data: any) {
    if (data.service == Service.UPI) {
      router.push("/book-consultation/payment/upi.html");
    } else {
      router.push("/consultation-form.html");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
        <header className="lg:text-3xl font-semibold text-[22px] tracking-wider lg:leading-[46px]  leading-[30px]">
          Pay a token amount and book a consultation date
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
                    <Option currentValue={field.value} value={Service.UPI}>
                      <h3 className="font-semibold text-lg tracking-wider">
                        Pay Rs 200 and Book a Consultation Date
                      </h3>
                      <p className="text-gray-600 text-base">
                        By opting for the paid option, you actively support our
                        ongoing empowerment initiatives.
                      </p>
                    </Option>
                    <Option
                      currentValue={field.value}
                      value={Service.CONSULTATION_FORM}
                    >
                      <h3 className="font-semibold text-lg tracking-wider">
                        I Cannot Pay Consultation Booking Fee
                      </h3>
                      <p className="text-gray-600 text-base">
                        Choose this option only if you are facing financial
                        constraints and cannot afford the booking fee.
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
                  className={cn(
                    "text-sm font-semibold !px-6 bg-[linear-gradient(180deg,#FDD85D_0%,#FDC921_100%)] shadow-[0px_4px_12px_0px_rgba(253,_216,_93,_0.12),_0px_-1px_4px_0px_rgba(0,0,0,0.12)_inset] !py-[22px]",
                    "text-base font-semibold px-14 w-full lg:w-fit"
                  )}
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
