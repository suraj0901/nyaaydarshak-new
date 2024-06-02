"use client";
import { Card, CardHeader } from "@/components/ui/card";
import { FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export enum Service {
  CONSULTATION = "CONSULTATION",
  WORKSHOP = "WORKSHOP",
}

export function Option({
  children,
  value,
  currentValue,
}: {
  children: ReactNode;
  value: string;
  currentValue: string;
}) {
  return (
    <Label>
      <Card className="cursor-pointer border-gray-200 rounded-2xl [&:has(input:checked)]:border-blue-600  [&:has(input:checked)]:ring-blue-600 [&:has(input:checked)]:ring-1 max-w-screen-sm">
        <CardHeader>
          <div className="flex items-start gap-x-3">
            <RadioGroupItem
              className={cn(
                "mt-1 w-[18px] h-[18px] shrink-0",
                currentValue == value
                  ? "text-white bg-blue-600 border-blue-600"
                  : "border-gray-400"
              )}
              checked={currentValue === value}
              id={value + ""}
              value={value + ""}
            />
            <FormItem className="space-y-3">{children}</FormItem>
          </div>
        </CardHeader>
      </Card>
    </Label>
  );
}
