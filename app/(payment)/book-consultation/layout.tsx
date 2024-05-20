import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import ConsultationSteps from "./ConsultationSteps";

const STEPS = [
  { label: "Select Service" },
  { label: "Pay Booking Fee" },
  { label: "Select Date" },
];

export default function Layout({
  children,
}: {
  children: Readonly<ReactNode>;
  param: { id: string };
}) {
  return (
    <main className="grid lg:grid-cols-4 lg:flex-1">
      <section className="bg-[#F6F9FC] w-full border-r border-[#EFF2F5]">
        <div className="lg:pt-28 mx-auto w-full px-4 py-8">
          <div className="relative flex lg:flex-col lg:h-[200px] justify-between lg:w-fit mx-auto">
            <ConsultationSteps steps={STEPS} />
            <div className="absolute -inset-1 lg:w-12 rounded-full bg-blue-100"></div>
          </div>
        </div>
      </section>
      <section className="lg:col-span-3 lg:p-28 px-4 py-8">{children}</section>
    </main>
  );
}
