import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function CallToAction({ className }: { className?: string }) {
  return (
    <Link
      className="hover:underline underline-offset-4"
      href={"/book-consultation"}
    >
      <Button
        className={cn(
          className,
          "text-sm font-semibold !px-6 bg-[linear-gradient(180deg,#FDD85D_0%,#FDC921_100%)] shadow-[0px_4px_12px_0px_rgba(253,_216,_93,_0.12),_0px_-1px_4px_0px_rgba(0,0,0,0.12)_inset] !py-[22px]"
        )}
      >
        Book Consultation Call
        <ChevronRight size={15} className="ml-1" />
      </Button>
    </Link>
  );
}
