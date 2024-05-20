import NAV_CONFIG from "@/config/nav.config";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight, HamIcon, Heart, Menu } from "lucide-react";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  const nav_items = NAV_CONFIG.map((nav_item) => (
    <NavItem key={nav_item.label} {...nav_item} />
  ));
  return (
    <section className="shadow">
      <header
        className={cn(lato.className, "container px-4 py-1 flex gap-x-8")}
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
                  <Link href={"/book-consultation"}>
                    <Button className="text-sm font-semibold w-full">
                      Book Consultation Call{" "}
                      <ChevronRight size={15} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </section>
            </SheetContent>
          </Sheet>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden  lg:flex items-center justify-between flex-1">
          <div className="flex items-center">{nav_items}</div>
          <section className="flex items-center gap-x-2">
            <Button variant="outline" className="text-sm font-semibold">
              Donate <Heart className="ml-1" size={15} />
            </Button>
            <div>
              <Link href={"/book-consultation"}>
                <Button className="text-sm font-semibold">
                  Book Consultation Call{" "}
                  <ChevronRight size={15} className="ml-1" />
                </Button>
              </Link>
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
    <Link href={link} className="p-4">
      {label}
    </Link>
  );
}
