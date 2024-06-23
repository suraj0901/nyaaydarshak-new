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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronRight, CircleAlert, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { schema, Gender, Languages } from "./validation";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Prop {
  onSubmit: (data: any) => void;
  isMutating: boolean;
}

export function ConsultationForm(prop: Prop) {
  const form = useForm({
    resolver: zodResolver(schema),
  });
  function onSubmit(data: any) {
    prop.onSubmit(data);
  }
  const submit_text = prop?.isMutating ? "Sending Message" : "Send Message";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="space-y-3">
          <FormField
            name="fullName"
            disabled={prop?.isMutating}
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
            name="phone"
            disabled={prop.isMutating}
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
            name="gender"
            disabled={prop.isMutating}
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-base">Your Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex justify-between"
                  >
                    {Gender.map((item) => (
                      <Label
                        key={item.value}
                        className="flex items-center gap-x-2"
                      >
                        <RadioGroupItem
                          value={item.value}
                          className={cn(
                            "text-base",
                            field.value === item.value
                              ? "text-white stroke-blue-600 bg-blue-600 border-blue-600"
                              : "border-gray-400"
                          )}
                        />
                        {item.label}
                      </Label>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <FormField
            name="age"
            disabled={prop.isMutating}
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-base">Your Age (Years)</FormLabel>
                <FormControl>
                  <Input
                    // startIcon={<p className="text-[13px] mt-1 ml-0.5">+91</p>}
                    className={
                      fieldState.invalid ? "border-red-600" : "border-gray-300"
                    }
                    placeholder="25"
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
            name="preferredLanguage"
            disabled={prop.isMutating}
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-base">
                  Your Preferred Language
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      className={
                        fieldState.invalid
                          ? "border-red-600"
                          : "border-gray-300"
                      }
                    >
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                      {Languages.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
        </section>
        <Button
          disabled={prop?.isMutating}
          className={cn(
            "text-sm font-semibold !px-6 bg-[linear-gradient(180deg,#FDD85D_0%,#FDC921_100%)] shadow-[0px_4px_12px_0px_rgba(253,_216,_93,_0.12),_0px_-1px_4px_0px_rgba(0,0,0,0.12)_inset] !py-[22px]",
            "font-semibold w-full"
          )}
        >
          {prop?.isMutating ? <Loader2 className="animate-spin mr-1" /> : null}{" "}
          {submit_text}{" "}
          {!prop?.isMutating ? (
            <ChevronRight size={15} className="ml-1" />
          ) : null}
        </Button>
        <p className="text-xs text-gray-600">
          Your information will only be used to contact you regarding your
          inquiry and will be treated with fairness and confidentiality.
        </p>
      </form>
    </Form>
  );
}
