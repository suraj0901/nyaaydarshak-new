"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, CircleAlert } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schema } from "./validation";

interface Prop {
  onSubmit: () => void;
}

export function WorkSheetForm(prop: Prop) {
  const form = useForm({
    resolver: zodResolver(schema),
  });
  function onSubmit(data: any) {
    console.log(data);
    prop.onSubmit();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="space-y-2">
          <FormField
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-base">Your Full Name</FormLabel>
                <FormControl>
                  <Input
                    className={
                      fieldState.invalid ? "border-red-600" : "border-gray-300"
                    }
                    placeholder="Deepa Kumari"
                    {...field}
                    endIcon={
                      fieldState.invalid && (
                        <CircleAlert
                          size={20}
                          className="text-white fill-red-600"
                        />
                      )
                    }
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-base">Your Email Address</FormLabel>
                <FormControl>
                  <Input
                    className={
                      fieldState.invalid ? "border-red-600" : "border-gray-300"
                    }
                    type="email"
                    placeholder="deepa@gmail.com"
                    {...field}
                    endIcon={
                      fieldState.invalid && (
                        <CircleAlert
                          size={20}
                          className="text-white fill-red-600"
                        />
                      )
                    }
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-base">Your Phone Number</FormLabel>
                <FormControl>
                  <Input
                    // startIcon={<p className="text-[13px] mt-1 ml-0.5">+91</p>}
                    className={
                      fieldState.invalid ? "border-red-600" : "border-gray-300"
                    }
                    placeholder="9937123456"
                    {...field}
                    endIcon={
                      fieldState.invalid && (
                        <CircleAlert
                          size={20}
                          className="text-white fill-red-600"
                        />
                      )
                    }
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            name="organization"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-base">
                  Your Organization Name
                </FormLabel>
                <FormControl>
                  <Input
                    className={
                      fieldState.invalid ? "border-red-600" : "border-gray-300"
                    }
                    placeholder="Talent Wizards Consulting9937123456"
                    {...field}
                    endIcon={
                      fieldState.invalid && (
                        <CircleAlert
                          size={20}
                          className="text-white fill-red-600"
                        />
                      )
                    }
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            name="designation"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-base">Your Designation</FormLabel>
                <FormControl>
                  <Input
                    className={
                      fieldState.invalid ? "border-red-600" : "border-gray-300"
                    }
                    placeholder="HR"
                    {...field}
                    endIcon={
                      fieldState.invalid && (
                        <CircleAlert
                          size={20}
                          className="text-white fill-red-600"
                        />
                      )
                    }
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            name="help"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-base">
                  How may we help you?
                </FormLabel>
                <FormControl>
                  <Textarea
                    className={
                      fieldState.invalid ? "border-red-600" : "border-gray-300"
                    }
                    placeholder="Tell us the purpose of consulting briefly"
                    {...field}
                    endIcon={
                      fieldState.invalid && (
                        <CircleAlert
                          size={20}
                          className="text-white fill-red-600"
                        />
                      )
                    }
                  />
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </section>
        <Button className="font-semibold w-full">
          Send Message <ChevronRight size={15} className="ml-1" />
        </Button>
        <p className="text-xs text-gray-600">
          Your information will only be used to contact you regarding your
          inquiry and will be treated with fairness and confidentiality.
        </p>
      </form>
    </Form>
  );
}
