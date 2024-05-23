import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function Title({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cn(
        "lg:text-4xl text-[22px] tracking-wider lg:leading-[46px]  leading-[30px] font-semibold max-w-2xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
