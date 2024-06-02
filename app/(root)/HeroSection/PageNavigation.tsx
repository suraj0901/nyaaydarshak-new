import PAGE_NAVIGATION from "@/config/page-navigation.config";
import Link from "next/link";

export default function PageNavigation() {
  return (
    <div className="hidden lg:block absolute bottom-0 translate-y-1/2 left-0 w-full ">
      <div className="flex items-center mx-auto w-fit px-16 py-2 rounded-full bg-white drop-shadow-md">
        {PAGE_NAVIGATION.map((item) => (
          <Link
            className="hover:underline underline-offset-4 px-4 py-2"
            key={item.label}
            href={item.link}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
