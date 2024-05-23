import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <section className="border-t border-[#ECEFF2]">
      <footer className="container flex flex-col lg:flex-row gap-y-6 px-4 lg:py-[60px] py-7 justify-between">
        <section>
          <Logo />
          <p className="max-w-[200px]">
            2024 ND Legal Foundation. All rights reserved.
          </p>
        </section>
        <section className="space-y-4">
          <p className="tracking-wider text-gray-500 uppercase">GENERAL</p>
          <div className="space-y-1.5">
            <Link href={"/"}>
              <p>Home</p>
            </Link>
            <Link href={"/about-us"}>
              <p>About Us</p>
            </Link>
            <Link href={"/our-services"}>
              <p>Our Services</p>
            </Link>
          </div>
        </section>
        <section className="space-y-4">
          <p className="tracking-wider text-gray-500 uppercase">RESOURCES</p>
          <div className="space-y-1.5">
            <Link href="/contact-us">
              <p>Contact Us</p>
            </Link>
            <Link href="/blog">
              <p>Blog</p>
            </Link>
          </div>
        </section>
        <section className="space-y-4">
          <p className="tracking-wider text-gray-500 uppercase">ORGANIZATION</p>
          <div className="space-y-1.5">
            <Link href="/privacy-policy">
              <p>Privacy Policy</p>
            </Link>
            <Link href="/terms-of-service">
              <p>Terms of Service</p>
            </Link>
          </div>
        </section>
        <section className="space-y-4">
          <h4 className="tracking-wide text-gray-500 uppercase">SOCIAL</h4>
          <div className="space-y-1.5">
            <Link href="/">
              <p>X/Twitter</p>
            </Link>
            <Link href="/">
              <p>Facebook</p>
            </Link>
            <Link href="/">
              <p>Instagram</p>
            </Link>
            <Link href="/">
              <p>Youtube</p>
            </Link>
          </div>
        </section>
      </footer>
    </section>
  );
}
