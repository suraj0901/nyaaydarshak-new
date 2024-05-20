import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <section className="shadow">
      <header
        className={cn(
          lato.className,
          "container px-4 py-3 flex gap-x-8 justify-between"
        )}
      >
        <Link href={"/"}>
          <Logo />
        </Link>
        <Link href={"/"}>
          <Button
            size={"sm"}
            variant="outline"
            className="text-sm font-semibold"
          >
            <ChevronLeft size={15} className="mr-1" />
            Back to Home
          </Button>
        </Link>
      </header>
    </section>
  );
}
