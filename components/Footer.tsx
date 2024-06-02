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
          <div className="grid gap-y-2">
            <Link className="hover:underline underline-offset-4" href={"/"}>
              <p className="">Home</p>
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href={"/about-us"}
            >
              <p>About Us</p>
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href={"/our-services"}
            >
              <p>Our Services</p>
            </Link>
          </div>
        </section>
        <section className="space-y-4">
          <p className="tracking-wider text-gray-500 uppercase">RESOURCES</p>
          <div className="grid gap-y-2">
            <Link
              className="hover:underline underline-offset-4"
              href="/contact-us"
            >
              <p>Contact Us</p>
            </Link>
            <Link className="hover:underline underline-offset-4" href="/blog">
              <p>Blog</p>
            </Link>
          </div>
        </section>
        <section className="space-y-4">
          <p className="tracking-wider text-gray-500 uppercase">ORGANIZATION</p>
          <div className="grid gap-y-2">
            <Link
              className="hover:underline underline-offset-4"
              href="/privacy-policy"
            >
              <p>Privacy Policy</p>
            </Link>
            <Link
              className="hover:underline underline-offset-4"
              href="/terms-of-service"
            >
              <p>Terms of Service</p>
            </Link>
          </div>
        </section>
        <section className="space-y-4">
          <h4 className="tracking-wide text-gray-500 uppercase">SOCIAL</h4>
          <div className="grid gap-y-2">
            <Link className="hover:underline underline-offset-4" href="/">
              <p>X/Twitter</p>
            </Link>
            <Link className="hover:underline underline-offset-4" href="/">
              <p>Facebook</p>
            </Link>
            <Link className="hover:underline underline-offset-4" href="/">
              <p>Instagram</p>
            </Link>
            <Link className="hover:underline underline-offset-4" href="/">
              <p>Linkedin</p>
            </Link>
            <Link className="hover:underline underline-offset-4" href="/">
              <p>Youtube</p>
            </Link>
          </div>
        </section>
      </footer>
    </section>
  );
}
