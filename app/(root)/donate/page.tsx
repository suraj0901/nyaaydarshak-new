"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";
import { useState } from "react";

export default function Donate() {
  const [selected, set_selected] = useState("online");

  const Online = (
    <Card className="border-0 max-w-sm  shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px]">
      <CardContent className="min-h-[380px] grid place-items-center h-full">
        <Image height={70} width={70} src="/phone-pe.png" alt="Phone pe logo" />
      </CardContent>
    </Card>
  );
  const Offline = (
    <div className="space-y-6">
      <div className="border border-gray-300 rounded-2xl max-w-lg p-6">
        <h3 className="text-lg pb-3 font-semibold">Bank Transfer</h3>
        <div className="text-muted-foreground space-y-2">
          <p className="">Account Name: ND LEGAL FOUNDATION</p>
          <p className="">Account Number: 50200095485102</p>
          <p className="">IFSC: HDFC000528</p>
          <p className="">Bank: HDFC Bank</p>
          <p className="">Branch: Siliguri - Naya Bazar, West Bengal</p>
        </div>
      </div>
      <div className="border border-gray-300 rounded-2xl max-w-lg p-6">
        <h3 className="text-lg pb-3 font-semibold">By Cheque or Draft</h3>
        <p className="text-muted-foreground">
          Please make your cheque/draft in the name of ND LEGAL FOUNDATION and
          send it to Ground Floor SF Road, Naya Bazar Main Rd, Siliguri, West
          Bengal - 734005
        </p>
      </div>
    </div>
  );
  return (
    <main className="grid lg:grid-cols-4 lg:flex-1">
      <section className="bg-[#F6F9FC] w-full h-full border-r border-[#EFF2F5]">
        <div className="max-w-xs lg:pt-28 h-full py-8 mx-auto lg:mr-0">
          <div className="flex lg:flex-col h-full justify-between lg:gap-8">
            <Tabs value={selected} onValueChange={set_selected}>
              <TabsList className="flex bg-[#F6F9FC] lg:flex-col items-start w-full !h-auto p-0">
                <TabsTrigger
                  className="justify-start w-full text-base font-semibold py-2.5 data-[state=active]:bg-gray-300 lg:rounded-r-none"
                  value="online"
                >
                  Contribute Online
                </TabsTrigger>
                {/**
                <TabsTrigger
                  className="justify-start w-full text-base font-semibold py-2.5 data-[state=active]:bg-gray-300 lg:rounded-r-none"
                  value="offline"
                >
                  Contribute Offline
                </TabsTrigger>
                */}
              </TabsList>
            </Tabs>
            <div className="hidden lg:block text-wrap break-words space-y-4 text-muted-foreground pr-8 pl-4">
              <p className="">
                All Indian contributions made to NyaayDarshak are{" "}
                <b>eligible for tax exemption</b> of 50% u/s 80G of the Income
                Tax Act, 1961.{" "}
              </p>
              <p>
                For any queries, write to us at:
                <a
                  className="underline"
                  href="mailto:contact.us.nyaaydarshak@gmail.com"
                >
                  contact.us.nyaaydarshak@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:col-span-3 lg:p-28 px-4 py-8 lg:space-y-16 space-y-6">
        <header className="lg:text-2xl font-semibold text-[22px]">
          Together, We Can Make a Difference: Contribute Now
        </header>
        <div className="lg:hidden text-wrap break-words space-y-4 text-muted-foreground pr-8 pl-4">
          <p className="">
            All Indian contributions made to NyaayDarshak are{" "}
            <b>eligible for tax exemption</b> of 50% u/s 80G of the Income Tax
            Act, 1961.{" "}
          </p>
          <p>
            For any queries, write to us at:
            <a
              className="underline"
              href="mailto:contact.us.nyaaydarshak@gmail.com"
            >
              contact.us.nyaaydarshak@gmail.com
            </a>
          </p>
        </div>
        {selected === "online" ? Online : Offline}
      </section>
    </main>
  );
}
