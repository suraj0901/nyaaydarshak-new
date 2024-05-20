import { cn } from "@/lib/utils";
import { EB_Garamond } from "next/font/google";
import Image from "next/image";

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: "700",
});

export default function Logo() {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        src="/Logo.png"
        className="lg:w-9 lg:h-9 w-7 h-7"
        width={34}
        height={34}
        alt=""
      />
      <p className={cn(garamond.className, "text-xl")}>NyaayDarshak</p>
    </div>
  );
}
