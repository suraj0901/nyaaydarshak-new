import { cn } from "@/lib/utils";
import { Lato } from "next/font/google";
import { ReactNode } from "react";

const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function Title({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "[word-spacing:2px] lg:text-4xl text-[22px]  lg:leading-[46px] leading-[30px]",
        className,
        lato.className
      )}
    >
      {children}
    </p>
  );
}
