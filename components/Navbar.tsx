import NAV_CONFIG from "@/config/nav.config";
import { cn } from "@/lib/utils";
import { Heart, Menu } from "lucide-react";
import { Lato } from "next/font/google";
import Link from "next/link";
import CallToAction from "./CallToAction";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const nav_items = NAV_CONFIG.map((nav_item) => (
    <NavItem key={nav_item.label} {...nav_item} />
  ));
  return (
    <section className="shadow-[0px_2px_12px_0px_rgba(32,_32,_32,_0.08)] sticky top-0 bg-white z-10">
      <header
        className={cn(
          lato.className,
          "container px-2 py-3 lg:px-4 lg:py-1.5 flex gap-x-8"
        )}
      >
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden px-2 border-0" variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <ul className="flex flex-col">
                <SheetClose asChild>
                  <NavItem label="Home" link="/" />
                </SheetClose>
                {NAV_CONFIG.map((nav_item) => (
                  <SheetClose key={nav_item.label} asChild>
                    <NavItem key={nav_item.label} {...nav_item} />
                  </SheetClose>
                ))}
              </ul>
              <section className="space-y-4">
                <Button
                  variant="outline"
                  className="text-sm font-semibold w-full"
                >
                  Donate <Heart className="ml-1" size={15} />
                </Button>
                <div>
                  <CallToAction className="w-full" />
                </div>
              </section>
            </SheetContent>
          </Sheet>
          <Link className="" href="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden  lg:flex items-center justify-between flex-1">
          <div className="flex items-center">{nav_items}</div>
          <section className="flex items-center gap-x-2">
            <Button
              variant="outline"
              className="!px-6 !py-[22px] lg:!py-5 text-sm font-semibold"
            >
              Donate <Heart className="ml-1" size={15} />
            </Button>
            <div>
              <CallToAction className="!py-[22px]" />
            </div>
          </section>
        </div>
      </header>
    </section>
  );
}

interface NavItem {
  label: string;
  link: string;
}

function NavItem({ label, link }: NavItem) {
  return (
    <Link className="hover:underline underline-offset-4 p-4" href={link}>
      {label}
    </Link>
  );
}
